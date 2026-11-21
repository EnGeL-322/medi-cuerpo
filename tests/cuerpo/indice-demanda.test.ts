import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { RENG_CATALOGO, RENG_CURVAS, rengBuscarFichas } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { RENG_INDICE, RENG_MAX_FICHAS_EN_MEMORIA, rengCargarFicha, rengExisteFicha, rengFichaCargada, rengFichasEnMemoria, rengFuente } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogoDemanda'
import { rengAreasDeIndice, rengBuscarEnIndice, rengConstruirIndice, rengSerializarIndice } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/indice'

const RENG_RUTA_INDICE = resolve(import.meta.dirname, '../../src/renderer/modules/medicuerpo/cuerpo/datos/indice.json')

describe('índice ligero del catálogo', () => {
  it('el archivo indice.json está al día con las fichas (si falla: npm run indice)', () => {
    expect(readFileSync(RENG_RUTA_INDICE, 'utf8')).toBe(rengSerializarIndice(rengConstruirIndice(RENG_CATALOGO, RENG_CURVAS)))
  })
  it('cada entrada del índice tiene su ficha, con el mismo id y las mismas presentaciones', async () => {
    expect(RENG_INDICE.activos.length).toBe(RENG_CATALOGO.length)
    for (const rengA of RENG_INDICE.activos) {
      expect(rengExisteFicha(rengA.id), rengA.id).toBe(true)
      const rengF = RENG_CATALOGO.find((rengX) => rengX.activo.id === rengA.id)!
      expect(rengA.presentaciones.map((rengP) => rengP.id)).toEqual(rengF.presentaciones.map((rengP) => rengP.id))
    }
    const rengCargada = await rengCargarFicha('ibuprofeno')
    expect(rengCargada?.activo.id).toBe('ibuprofeno')
    expect(await rengCargarFicha('no-existe')).toBeUndefined()
  })
  it('la búsqueda en el índice da lo mismo que la búsqueda en las fichas', () => {
    for (const rengQ of ['', 'zoloft', 'estatina', 'acetaminofen', 'sertralina', 'Pfizer', 'inhibidor', 'prolongada', 'xyzxyz']) {
      for (const rengArea of [null, 'Infecciones', 'Cardiovascular']) {
        expect(rengBuscarEnIndice(RENG_INDICE, rengQ, rengArea).map((rengA) => rengA.id), `${rengQ}|${rengArea}`).toEqual(rengBuscarFichas(rengQ, rengArea).map((rengF) => rengF.activo.id))
      }
    }
    expect(rengAreasDeIndice(RENG_INDICE).length).toBeGreaterThan(5)
  })
  it('el índice marca «con curva» exactamente las presentaciones con un estudio', () => {
    const rengConCurva = new Set(RENG_CURVAS.flatMap((rengC) => rengC.presentaciones))
    for (const rengA of RENG_INDICE.activos) for (const rengP of rengA.presentaciones) expect(!!rengP.curva, rengP.id).toBe(rengConCurva.has(rengP.id))
    expect(rengConCurva.size).toBeGreaterThan(0)
  })
  it('presupuesto de tamaño: menos de 700 bytes de índice por presentación', () => {
    const rengBytes = readFileSync(RENG_RUTA_INDICE).length
    const rengPres = RENG_INDICE.activos.reduce((rengN, rengA) => rengN + rengA.presentaciones.length, 0)
    expect(rengBytes / rengPres).toBeLessThan(700)
  })
})

describe('carga de fichas bajo demanda', () => {
  it('dos peticiones simultáneas comparten la misma carga y la ficha queda en memoria', async () => {
    const rengA = rengCargarFicha('warfarina')
    const rengB = rengCargarFicha('warfarina')
    expect(rengA).toBe(rengB)
    const rengF = await rengA
    expect(rengFichaCargada('warfarina')).toBe(rengF)
  })
  it('la memoria está acotada: se conservan como mucho RENG_MAX_FICHAS_EN_MEMORIA fichas y las últimas usadas', async () => {
    const rengIds = RENG_INDICE.activos.slice(0, RENG_MAX_FICHAS_EN_MEMORIA + 15).map((rengA) => rengA.id)
    for (const rengId of rengIds) await rengCargarFicha(rengId)
    expect(rengFichasEnMemoria()).toBeLessThanOrEqual(RENG_MAX_FICHAS_EN_MEMORIA)
    expect(rengFichaCargada(rengIds.at(-1)!)).toBeDefined()
    expect(rengFichaCargada(rengIds[0]!)).toBeUndefined()
    expect((await rengCargarFicha(rengIds[0]!))?.activo.id).toBe(rengIds[0])
  })
  it('las fuentes de la ficha cargada, las generales y las de los estudios se resuelven; una desconocida no', async () => {
    const rengF = (await rengCargarFicha('ticagrelor'))!
    for (const rengFu of rengF.fuentes) expect(rengFuente(rengFu.id)?.id).toBe(rengFu.id)
    for (const rengC of RENG_CURVAS) expect(rengFuente(rengC.fuente)?.tipo).toBe('estudio')
    expect(rengFuente('fuente-inventada')).toBeUndefined()
  })
})
