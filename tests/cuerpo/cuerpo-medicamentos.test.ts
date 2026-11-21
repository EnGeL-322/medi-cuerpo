import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { RENG_ESTRUCTURAS } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/anatomia'
import { rengBuscarFichas, RENG_CATALOGO, rengDibujoEtapa, rengEtapasDe, rengFicha, rengFichaDePresentacion, rengMallasDeDestinos, rengProblemasFicha, rengReaccionesDe, rengTodasLasFuentes } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { RENG_REACCIONES } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/reaccionesAdversas'
import { RENG_ETAPAS } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/modelo'
import { RENG_DESTINOS } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/organos'
import { rengAdvertenciasDeEstructura, rengBuscarEstructuras, rengEtapasDeEstructura } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/cuerpo'
import { rengComprobarEstructura, rengComprobarFragmento, rengReconocerActivo } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/identidadFarmaco'
import { rengAnadirSustancia } from '../../src/renderer/modules/medicuerpo/estado/acciones'
import { rengDerivarActivo } from '../../src/renderer/modules/medicuerpo/estado/derivados'
import { rengEstadoInicial, rengNormalizar } from '../../src/renderer/modules/medicuerpo/estado/trabajo'
import { rengSepararAtomo } from '../../src/renderer/modules/medicuerpo/nucleo/mesa'
import { rengDesdeSmiles } from '../../src/renderer/modules/medicuerpo/nucleo/molecula'

const rengParacetamol = rengFicha('paracetamol')!.activo
const rengIbuprofeno = rengFicha('ibuprofeno')!.activo
const rengIdsEstructuras = new Set(RENG_ESTRUCTURAS.map((rengE) => rengE.id))

describe('identidad molecular', () => {
  it('paracetamol escrito de otra forma: coincide (sin estereoquímica que comprobar)', () => {
    const rengR = rengComprobarEstructura('Oc1ccc(NC(C)=O)cc1', rengParacetamol)
    expect(rengR.tipo).toBe('coincide')
    expect(rengR.reconocido).toBe('paracetamol')
  })
  it('misma fórmula, distinta conectividad (3-acetamidofenol): enlaces distintos, no coincide', () => {
    const rengMeta = 'CC(=O)Nc1cccc(O)c1'
    expect(rengDesdeSmiles(rengMeta).formula).toBe(rengDesdeSmiles(rengParacetamol.smiles).formula)
    const rengR = rengComprobarEstructura(rengMeta, rengParacetamol)
    expect(rengR.tipo).toBe('enlaces-distintos')
    expect(rengR.reconocido).toBeUndefined()
  })
  it('ibuprofeno racémico: sin estereocentro definido → pendiente; (S) y (R) → identificación de cada enantiómero', () => {
    expect(rengComprobarEstructura('CC(C)Cc1ccc(cc1)C(C)C(=O)O', rengIbuprofeno).tipo).toBe('conectividad')
    const rengS = rengComprobarEstructura('C[C@@H](C1=CC=C(C=C1)CC(C)C)C(=O)O', rengIbuprofeno)
    const rengR = rengComprobarEstructura('C[C@H](C1=CC=C(C=C1)CC(C)C)C(=O)O', rengIbuprofeno)
    expect(rengS.tipo).toBe('coincide-enantiomero')
    expect(rengS.titulo).toMatch(/\(S\)/)
    expect(rengR.tipo).toBe('coincide-enantiomero')
    expect(rengR.titulo).toMatch(/\(R\)/)
  })
  it('activo con estereoquímica definida (sertralina 1S,4S): la misma coincide; su enantiómero solo en conectividad', () => {
    const rengSertralina = rengFicha('sertralina')!.activo
    expect(rengComprobarEstructura(rengSertralina.smiles, rengSertralina).tipo).toBe('coincide')
    expect(rengComprobarEstructura('CN[C@@H]1CC[C@@H](C2=CC=CC=C12)C3=CC(=C(C=C3)Cl)Cl', rengSertralina).tipo).toBe('conectividad')
  })
  it('otra sustancia, valencia imposible, estructura incompleta y mesa vacía', () => {
    expect(rengComprobarEstructura('CCO', rengParacetamol).tipo).toBe('distinta')
    expect(rengComprobarEstructura('CC(=O)N=C1C=CC(O)C=C1C(C)(C)(C)(C)C', rengParacetamol).tipo).toBe('valencia')
    expect(rengComprobarEstructura(rengParacetamol.smiles, rengParacetamol, false).tipo).toBe('valencia')
    expect(rengComprobarEstructura(null, rengParacetamol).tipo).toBe('vacia')
  })
  it('con la mesa: el paracetamol construido coincide; al romper el C=O se explica qué falta', () => {
    const rengR = rengAnadirSustancia(rengEstadoInicial(), rengParacetamol.smiles)
    if (!rengR.ok) throw new Error('no se pudo construir')
    expect(rengComprobarFragmento(rengDerivarActivo(rengR.estado), rengParacetamol).tipo).toBe('coincide')
    const rengM = rengR.estado.mesa
    const rengO = rengM.atomos.find((rengX) => rengX.el === 'O' && rengM.enlaces.some((rengE) => (rengE.a === rengX.id || rengE.b === rengX.id) && rengE.orden === 2))!
    const rengD = rengDerivarActivo(rengNormalizar({ ...rengR.estado, mesa: rengSepararAtomo(rengM, rengO.id) }))
    const rengC = rengComprobarFragmento(rengD, rengParacetamol)
    expect(rengD?.ids.length).toBe(19)
    expect(rengC.tipo).toBe('valencia')
    expect(rengC.explicacion).toMatch(/Faltan 2 enlaces/)
  })
  it('el reconocimiento lleva a la ficha del principio activo', () => {
    expect(rengReconocerActivo('O=C(C)Nc1ccc(O)cc1')?.id).toBe('paracetamol')
    expect(rengReconocerActivo('C[C@@H](C1=CC=C(C=C1)CC(C)C)C(=O)O')?.id).toBe('ibuprofeno')
    expect(rengReconocerActivo('CN(C)C(=N)N=C(N)N')?.id).toBe('metformina')
    expect(rengReconocerActivo('CCO')).toBeNull()
  })
})

describe('validación del catálogo', () => {
  it('ninguna ficha tiene problemas (ids, relaciones, referencias por etapa, unidades, destinos)', () => {
    const rengP = RENG_CATALOGO.flatMap((rengF) => rengProblemasFicha(rengF))
    expect(rengP, rengP.join(' | ')).toEqual([])
    expect(RENG_CATALOGO.filter((rengF) => rengF.estado === 'completa').length).toBeGreaterThanOrEqual(300)
  })
  it('documenta efectos en la presentación principal de cada activo sin heredar los de otra', () => {
    for (const rengF of RENG_CATALOGO) {
      const rengPrincipal = rengF.presentaciones[0]!
      const rengEfectos = rengReaccionesDe(rengPrincipal)
      expect(rengEfectos.some(({ ref: rengRef }) => rengRef.codigo === '34084-4' || rengRef.codigo === 'FT 4.8'), rengPrincipal.id).toBe(true)
      for (const rengP of rengF.presentaciones) {
        for (const rengD of rengReaccionesDe(rengP)) expect(rengD.ref.f, rengP.id).toBe(rengP.fuente)
      }
    }
    for (const rengId of Object.keys(RENG_REACCIONES)) expect(rengFichaDePresentacion(rengId), rengId).toBeDefined()
    expect(rengReaccionesDe(rengFichaDePresentacion('paracetamol-tylenol-325')!.presentacion)).toEqual(
      expect.arrayContaining([expect.objectContaining({ ref: expect.objectContaining({ codigo: '34071-1' }) })])
    )
  })
  it('ids únicos: activos, presentaciones, CID y fuentes (un mismo id de fuente es la misma fuente en todas las fichas)', () => {
    const rengActivos = RENG_CATALOGO.map((rengF) => rengF.activo.id)
    expect(new Set(rengActivos).size).toBe(rengActivos.length)
    const rengPres = RENG_CATALOGO.flatMap((rengF) => rengF.presentaciones.map((rengP) => rengP.id))
    expect(new Set(rengPres).size).toBe(rengPres.length)
    const rengPorId = new Map<string, string>()
    for (const rengFu of RENG_CATALOGO.flatMap((rengF) => rengF.fuentes)) {
      const rengJson = JSON.stringify(rengFu)
      if (rengPorId.has(rengFu.id)) expect(rengPorId.get(rengFu.id), rengFu.id).toBe(rengJson)
      rengPorId.set(rengFu.id, rengJson)
    }
    const rengCids = RENG_CATALOGO.filter((rengF) => !rengF.combinacion).map((rengF) => rengF.activo.cid)
    expect(new Set(rengCids).size).toBe(rengCids.length)
  })
  it('identidad química coherente: fórmula y masa salen de la estructura; InChIKey con formato válido (las combinaciones se identifican por sus componentes)', () => {
    for (const rengF of RENG_CATALOGO.filter((rengX) => !rengX.combinacion)) {
      const rengG = rengDesdeSmiles(rengF.activo.smiles)
      expect(rengG.formula, rengF.activo.id).toBe(rengF.activo.formula)
      expect(Math.abs(rengG.masaMolar - rengF.activo.masaMolar), rengF.activo.id).toBeLessThan(Math.max(0.075, 1e-4 * rengF.activo.masaMolar))
      expect(rengF.activo.inchikey).toMatch(/^[A-Z]{14}-[A-Z]{10}-[A-Z]$/)
      expect(rengF.fuentes.some((rengX) => rengX.id === `pubchem-${rengF.activo.cid}`), rengF.activo.id).toBe(true)
      for (const rengM of rengF.recorrido.metabolismo.metabolitos) if (rengM.smiles) expect(() => rengDesdeSmiles(rengM.smiles!), rengM.nombre).not.toThrow()
      for (const rengE of rengF.activo.estereo?.enantiomeros ?? []) expect(rengDesdeSmiles(rengE.smiles).idSinEstereo, rengE.nombre).toBe(rengG.idSinEstereo)
    }
  })
  it('cada presentación separa activo, sal y excipientes; su mercado coincide con su fuente', () => {
    for (const rengF of RENG_CATALOGO)
      for (const rengP of rengF.presentaciones) {
        const rengFu = rengTodasLasFuentes().find((rengX) => rengX.id === rengP.fuente)!
        expect(rengFu.tipo === 'etiqueta-fda' ? 'EE. UU.' : 'España (UE)', rengP.id).toBe(rengP.mercado)
        expect(rengP.excipientes.length, rengP.id).toBeGreaterThan(0)
        const rengNombreIngles = rengF.activo.sinonimos[0]!.toLowerCase()
        expect(rengP.excipientes.some((rengX) => rengX.toLowerCase().includes(rengNombreIngles)), rengP.id).toBe(false)
        expect(rengFichaDePresentacion(rengP.id)?.ficha.activo.id).toBe(rengF.activo.id)
      }
  })
  it('una diana solo se nombra con datos que la respalden; cada recorrido tiene las cinco etapas', () => {
    for (const rengF of RENG_CATALOGO) {
      const rengA = rengF.recorrido.distribucion.accion
      if (rengA.diana) expect(rengA.datos.length, rengF.activo.id).toBeGreaterThan(0)
      expect(rengEtapasDe(rengF.recorrido).map((rengE) => rengE.id)).toEqual(RENG_ETAPAS.map((rengE) => rengE.id))
    }
  })
  it('las fuentes llevan su URL oficial (DailyMed por setid, CIMA por n.º de registro, PubChem por CID)', () => {
    for (const rengFu of rengTodasLasFuentes()) {
      if (rengFu.tipo === 'pubchem') expect(rengFu.url).toMatch(/^https:\/\/pubchem\.ncbi\.nlm\.nih\.gov\/compound\/\d+$/)
      if (rengFu.tipo === 'etiqueta-fda') expect(rengFu.url).toMatch(/^https:\/\/dailymed\.nlm\.nih\.gov\/dailymed\/drugInfo\.cfm\?setid=[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
      if (rengFu.tipo === 'ficha-ue') expect(rengFu.url).toMatch(/^https:\/\/cima\.aemps\.es\/cima\/dochtml\/ft\/\d+\/FT_\d+\.html$/)
      expect(rengFu.consultado).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})

describe('órganos y etapas', () => {
  it('cada destino del atlas usa mallas que existen', () => {
    for (const rengM of rengMallasDeDestinos()) expect(rengIdsEstructuras.has(rengM), rengM).toBe(true)
    expect(new Set(RENG_DESTINOS.map((rengD) => rengD.id)).size).toBe(RENG_DESTINOS.length)
    for (const rengD of RENG_DESTINOS.filter((rengX) => !rengX.malla.length)) expect(rengD.nota, rengD.id).toBeTruthy()
  })
  it('paracetamol: hígado en el metabolismo, riñones solo en la eliminación, estómago en la liberación', () => {
    const rengF = rengFicha('paracetamol')!
    expect(rengEtapasDeEstructura(rengF, 'higado')).toContain('metabolismo')
    expect(rengEtapasDeEstructura(rengF, 'rinon-derecho')).toEqual(['excrecion'])
    expect(rengEtapasDeEstructura(rengF, 'estomago')).toContain('liberacion')
    expect(rengEtapasDeEstructura(rengF, 'femur-derecho')).toEqual([])
    const rengTylenol = rengF.presentaciones.find((rengP) => rengP.id === 'paracetamol-tylenol-325')!
    expect(rengAdvertenciasDeEstructura(rengTylenol, 'higado').length).toBe(1)
  })
  it('metformina: sin metabolismo (ningún órgano ni metabolito) y eliminación renal sin cambios', () => {
    const rengF = rengFicha('metformina')!
    expect(rengF.recorrido.metabolismo.organos).toEqual([])
    expect(rengF.recorrido.metabolismo.metabolitos).toEqual([])
    expect(rengF.recorrido.excrecion.organos).toContain('rinones')
  })
  it('vancomicina oral: acción local en el colon, sin sangre en la absorción y eliminación por las heces', () => {
    const rengF = rengFicha('vancomicina')!
    expect(rengF.recorrido.distribucion.accion.lugar).toContain('intestino-grueso')
    expect(rengF.recorrido.absorcion.organos).not.toContain('sangre')
    expect(rengF.recorrido.excrecion.organos).toContain('heces')
    expect(rengDibujoEtapa('absorcion', rengF.recorrido.absorcion).ruta.at(-1)).toBe('intestino-grueso')
  })
  it('omeprazol: liberación retardada y acción en el estómago', () => {
    const rengF = rengFicha('omeprazol')!
    expect(rengF.presentaciones[0]!.liberacion).toBe('retardada')
    expect(rengF.recorrido.distribucion.accion.lugar).toEqual(['estomago'])
  })
  it('buscador de medicamentos: nombre, marca, clase y sin tildes', () => {
    expect(rengBuscarFichas('zoloft').map((rengF) => rengF.activo.id)).toEqual(['sertralina'])
    expect(rengBuscarFichas('estatina').map((rengF) => rengF.activo.id)).toContain('atorvastatina')
    expect(rengBuscarFichas('acetaminofen').map((rengF) => rengF.activo.id)).toEqual(['paracetamol'])
    expect(rengBuscarFichas('', 'Infecciones').every((rengF) => rengF.activo.area === 'Infecciones')).toBe(true)
  })
  it('buscador del atlas: por nombre, sinónimo, lado y capa', () => {
    expect(rengBuscarEstructuras('higado').map((rengE) => rengE.id)).toEqual(['higado'])
    expect(rengBuscarEstructuras('omoplato').map((rengE) => rengE.id)).toEqual(['escapula-derecho', 'escapula-izquierdo'])
    expect(rengBuscarEstructuras('riñón izq').map((rengE) => rengE.id)).toEqual(['rinon-izquierdo'])
  })
})

describe('atlas: modelo convertido y créditos', () => {
  const RENG_DIR = join(import.meta.dirname, '../../src/renderer/modules/medicuerpo/cuerpo/modelo')
  const rengIndice = JSON.parse(readFileSync(join(RENG_DIR, 'indice.json'), 'utf8')) as {
    estructuras: Record<string, { capa: string; centro: number[]; piezas: Array<{ fj: string; nombre: string }>; triangulos: number }>
    capas: Record<string, { archivo: string; bytes: number }>
  }
  it('incluye todas las estructuras pedidas, cada una con piezas de BodyParts3D', () => {
    const rengPedidas = ['craneo', 'columna', 'costillas-derecho', 'costillas-izquierdo', 'coxal-derecho', 'coxal-izquierdo', 'sacro', 'humero-derecho', 'femur-izquierdo', 'tibia-derecho', 'encefalo', 'corazon', 'pulmon-derecho', 'pulmon-izquierdo', 'higado', 'estomago', 'intestino-delgado', 'intestino-grueso', 'rinon-derecho', 'rinon-izquierdo']
    for (const rengId of rengPedidas) expect(rengIndice.estructuras[rengId], rengId).toBeDefined()
    for (const rengE of RENG_ESTRUCTURAS) {
      expect(rengIndice.estructuras[rengE.id], rengE.id).toBeDefined()
      expect(rengIndice.estructuras[rengE.id]!.capa).toBe(rengE.capa)
      expect(rengIndice.estructuras[rengE.id]!.triangulos).toBeGreaterThan(50)
    }
    expect(RENG_ESTRUCTURAS.filter((rengE) => rengE.capa === 'musculos').length).toBeGreaterThanOrEqual(20)
  })
  it('lateralidad: lo derecho del cuerpo en x < 0 y lo izquierdo en x > 0; el hígado a la derecha', () => {
    for (const rengE of RENG_ESTRUCTURAS.filter((rengX) => rengX.lado)) {
      const rengX = rengIndice.estructuras[rengE.id]!.centro[0]!
      if (rengE.lado === 'derecho') expect(rengX, rengE.id).toBeLessThan(0)
      else expect(rengX, rengE.id).toBeGreaterThan(0)
      expect(rengIndice.estructuras[rengE.id]!.piezas.every((rengP) => new RegExp(rengE.lado === 'derecho' ? '\\bright\\b' : '\\bleft\\b', 'i').test(rengP.nombre) || rengE.bp3d.lado === undefined), rengE.id).toBe(true)
    }
    expect(rengIndice.estructuras['higado']!.centro[0]).toBeLessThan(0)
  })
  it('los GLB son glTF 2.0 válidos con un nodo por estructura de su capa', () => {
    for (const rengCapa of ['esqueleto', 'musculos', 'organos']) {
      const rengB = readFileSync(join(RENG_DIR, `${rengCapa}.glb`))
      expect(rengB.readUInt32LE(0)).toBe(0x46546c67)
      expect(rengB.readUInt32LE(4)).toBe(2)
      expect(rengB.readUInt32LE(8)).toBe(rengB.length)
      const rengJson = JSON.parse(rengB.subarray(20, 20 + rengB.readUInt32LE(12)).toString('utf8')) as { nodes: Array<{ name: string }> }
      expect(rengJson.nodes.map((rengN) => rengN.name).sort()).toEqual(RENG_ESTRUCTURAS.filter((rengE) => rengE.capa === rengCapa).map((rengE) => rengE.id).sort())
      expect(rengIndice.capas[rengCapa]!.bytes).toBe(rengB.length)
    }
  })
  it('los créditos dan la atribución, las dos licencias, la versión y los cambios', () => {
    const rengC = readFileSync(join(RENG_DIR, 'CREDITOS.md'), 'utf8')
    expect(rengC).toMatch(/BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4\.0 International/)
    expect(rengC).toMatch(/CC Attribution-Share Alike 2\.1 Japan/)
    expect(rengC).toMatch(/10\.18908\/lsdba\.nbdc00837-000/)
    expect(rengC).toMatch(/varón humano adulto/)
    expect(rengC).toMatch(/9fbc713fffeee924a5a657d9813d84d7eb957bded63adb854931dd5e3eb61c97/)
    expect(rengC).toMatch(/sin espejo/)
  })
})
