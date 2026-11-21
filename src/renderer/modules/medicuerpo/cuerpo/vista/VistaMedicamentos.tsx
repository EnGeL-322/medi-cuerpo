import { useMemo, useState } from 'react'
import { rengAnadirSustancia } from '../../estado/acciones'
import { rengDerivarActivo } from '../../estado/derivados'
import { rengDesdeSmiles, rengDibujo2D } from '../../nucleo/molecula'
import { rengModeloDeSmiles } from '../../nucleo/modeloVisor'
import { RengFormula } from '../../vista/Formula'
import { useRengAlmacen, useRengTrabajo } from '../../vista/useTrabajo'
import { RengVisorMolecular } from '../../vista/visor/VisorMolecular'
import { RENG_INDICE } from '../datos/catalogoDemanda'
import { rengReaccionesDe, rengResumenRecorridoDe } from '../datos/fichas'
import { rengActivoDeIndice } from '../datos/indice'
import type { RengActivo, RengFichaFarmaco, RengPresentacion } from '../datos/modelo'
import { rengComprobarFragmento, type RengComprobacion } from '../nucleo/identidadFarmaco'
import { RENG_FAMILIAS, RENG_VIAS, rengFamiliaDe, rengViasDe } from '../nucleo/presentaciones'
import { RengCita, RengFuenteCompleta, RengListaDatos } from './Evidencia'
import { RengPanelBusqueda } from './PanelBusqueda'
import { useRengFicha } from './useFicha'

interface RengProps {
  activoId: string | null
  onActivo: (rengId: string) => void
  presentacionId: string | null
  onPresentacion: (rengId: string) => void
  onIniciarRecorrido: (rengPresentacionId: string) => void
  onVerAbsorcion: (rengPresentacionId: string) => void
  onIrAExplorar: () => void
  onVerEstructura: (rengDestinos: string[]) => void
}

const RENG_LIBERACION: Record<RengPresentacion['liberacion'], string> = {
  inmediata: 'liberación inmediata',
  retardada: 'liberación retardada (gastrorresistente)',
  prolongada: 'liberación prolongada',
  'no declarada': 'la fuente no declara una liberación modificada'
}
const RENG_MAX_PESADOS_AUTO = 60

function rengSvgDe(rengSmiles: string): string | null {
  try {
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(rengDibujo2D(rengSmiles))))}`
  } catch {
    return null
  }
}

function RengConstruir({ a: rengA, onIrAExplorar: rengOnIrAExplorar, onActivo: rengOnActivo }: { a: RengActivo; onIrAExplorar: () => void; onActivo: (rengId: string) => void }): React.JSX.Element {
  const rengT = useRengAlmacen()
  const rengEstado = useRengTrabajo((rengE) => rengE)
  const rengD = useMemo(() => rengDerivarActivo(rengEstado), [rengEstado])
  const [rengR, rengSetR] = useState<RengComprobacion | null>(null)
  const [rengAviso, rengSetAviso] = useState('')
  const rengConstruir = (): void => {
    const rengRes = rengAnadirSustancia(rengT.obtener(), rengA.smiles)
    if (!rengRes.ok) {
      rengSetAviso('error' in rengRes ? rengRes.error : rengRes.nota)
      return
    }
    rengT.aplicar(() => rengRes.estado)
    rengSetAviso('')
    rengOnIrAExplorar()
  }
  const rengOk = rengR?.tipo === 'coincide' || rengR?.tipo === 'coincide-enantiomero'
  return (
    <div className="stack tight">
      <div className="row">
        <button type="button" className="btn sm" onClick={rengConstruir}>
          Construir en la mesa
        </button>
        <button type="button" className="btn sm" onClick={() => rengSetR(rengComprobarFragmento(rengD, rengA))}>
          Comprobar mi estructura
        </button>
      </div>
      <span className="faint sm">Se comprueba el fragmento seleccionado en la mesa{rengD ? ` (ahora: ${rengD.nombre ?? rengD.formula})` : ' (no hay ninguno)'}. La mesa admite moléculas de hasta 60 átomos.</span>
      {rengAviso && (
        <div className="notice warn sm" role="status">
          {rengAviso}
        </div>
      )}
      {rengR && (
        <div className={`notice ${rengOk ? 'ok' : rengR.tipo === 'conectividad' ? '' : 'warn'}`} role="status">
          <b>{rengR.titulo}.</b> {rengR.explicacion}
          {rengR.reconocido && rengR.reconocido !== rengA.id && (
            <div className="sm" style={{ marginTop: 4 }}>
              Tu estructura es {rengActivoDeIndice(RENG_INDICE, rengR.reconocido)?.nombre.toLowerCase()}.{' '}
              <button type="button" className="btn ghost sm" onClick={() => rengOnActivo(rengR.reconocido!)}>
                Abrir su ficha
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function RengQuimica({ f: rengF, p: rengP, onIrAExplorar: rengOnIrAExplorar, onActivo: rengOnActivo }: { f: RengFichaFarmaco; p: RengPresentacion; onIrAExplorar: () => void; onActivo: (rengId: string) => void }): React.JSX.Element {
  const rengA = rengF.activo
  const rengPesados = useMemo(() => rengDesdeSmiles(rengA.smiles).atomos.filter((rengX) => rengX.el !== 'H').length, [rengA])
  const [rengPedir3D, rengSetPedir3D] = useState(false)
  const rengVer3D = rengPesados <= RENG_MAX_PESADOS_AUTO || rengPedir3D
  const rengSvg = useMemo(() => rengSvgDe(rengA.smiles), [rengA])
  const rengModelo = useMemo(() => (rengVer3D ? rengModeloDeSmiles(rengA.smiles, rengA.nombre) : null), [rengA, rengVer3D])
  return (
    <div className="stack tight">
      <div className="cm-activo-ficha">
        {rengSvg && <img className="cm-2d" src={rengSvg} alt={`Estructura 2D de ${rengA.nombre.toLowerCase()}`} />}
        <dl className="cm-dl sm">
          <dt>Fórmula</dt>
          <dd>
            <RengFormula texto={rengA.formula} /> · {rengA.masaMolar.toString().replace('.', ',')} g/mol
          </dd>
          <dt>Nombre IUPAC</dt>
          <dd>{rengA.iupac ?? 'No incluido'}</dd>
          {rengA.estereo && (
            <>
              <dt>Estereoquímica</dt>
              <dd>{rengA.estereo.descripcion}</dd>
            </>
          )}
          <dt>Identificadores</dt>
          <dd>
            PubChem CID {rengA.cid} · InChIKey <span className="mono">{rengA.inchikey}</span>
          </dd>
          <dt>Activo y sal</dt>
          <dd>{rengP.sal ? `En esta presentación va como ${rengP.sal.nombre.charAt(0).toLowerCase()}${rengP.sal.nombre.slice(1)}. La estructura representa la forma de referencia del activo.` : 'Se muestra la estructura de referencia del principio activo.'}</dd>
        </dl>
      </div>
      {rengVer3D && rengModelo ? (
        <RengVisorMolecular modelo={rengModelo} contexto="Principio activo" alto={280} />
      ) : (
        <div className="notice sm" role="note">
          Molécula grande ({rengPesados} átomos sin contar hidrógenos): su modelo 3D tarda en calcularse.{' '}
          <button type="button" className="btn sm" onClick={() => rengSetPedir3D(true)}>
            Calcular el modelo 3D
          </button>
        </div>
      )}
      <span className="faint sm">
        SMILES: <span className="mono cm-cita">{rengA.smiles}</span>
      </span>
      <RengConstruir a={rengA} onIrAExplorar={rengOnIrAExplorar} onActivo={rengOnActivo} />
    </div>
  )
}

export function RengVistaMedicamentos({ activoId: rengActivoId, onActivo: rengOnActivo, presentacionId: rengPresentacionId, onPresentacion: rengOnPresentacion, onIniciarRecorrido: rengOnIniciarRecorrido, onVerAbsorcion: rengOnVerAbsorcion, onIrAExplorar: rengOnIrAExplorar, onVerEstructura: rengOnVerEstructura }: RengProps): React.JSX.Element {
  const rengEstadoFicha = useRengFicha(rengActivoId)
  const rengF = rengEstadoFicha.ficha
  const rengP = rengF ? (rengF.presentaciones.find((rengX) => rengX.id === rengPresentacionId) ?? rengF.presentaciones[0]!) : null
  const rengReacciones = rengP ? rengReaccionesDe(rengP) : []
  const rengEsReaccion = ({ ref: rengRef }: (typeof rengReacciones)[number]): boolean => rengRef.codigo === '34084-4' || rengRef.codigo === 'FT 4.8'
  const rengObservadas = rengReacciones.filter(rengEsReaccion)
  const rengAdvertencias = rengReacciones.filter((rengDato) => !rengEsReaccion(rengDato))
  return (
    <div className="cm-med">
      <RengPanelBusqueda
        activoId={rengActivoId}
        onSeleccionar={(rengId, rengPresentacion) => {
          rengOnActivo(rengId)
          rengOnPresentacion(rengPresentacion)
        }}
      />

      <section className="cm-med-ficha" aria-label="Ficha del medicamento" aria-live="polite">
        {rengEstadoFicha.cargando ? (
          <p className="muted" role="status">
            Cargando la ficha…
          </p>
        ) : rengEstadoFicha.error ? (
          <div className="notice warn sm" role="alert">
            {rengEstadoFicha.error}
          </div>
        ) : !rengF || !rengP ? (
          <div className="cm-med-vacio">
            <h2 className="ejq-titulo">Medicamentos y su recorrido por el cuerpo</h2>
            <p className="muted">Elige un principio activo en la lista. Verás qué contiene una presentación concreta, para qué se usa según su ficha técnica, cómo actúa y qué le ocurre en el cuerpo, etapa por etapa, con cada dato enlazado a su fuente.</p>
            <p className="faint sm">Uso educativo: no calcula dosis, no recomienda tratamientos y no predice qué le pasará a una persona concreta.</p>
          </div>
        ) : (
          <div className="stack">
            <header className="stack tight">
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h2 className="cm-med-nombre">{rengF.activo.nombre}</h2>
                <span className={`badge ${rengF.estado === 'completa' ? 'cm-alcance presentacion' : 'cm-alcance otra-presentacion'}`}>{rengF.estado === 'completa' ? 'Ficha completa' : 'Ficha parcial'}</span>
              </div>
              <span className="muted sm">
                {rengF.activo.clase} · {rengF.activo.area}
              </span>
            </header>

            <dl className="cm-resumen">
              <div>
                <dt>Qué contiene</dt>
                <dd>{rengF.resumen.contiene}</dd>
              </div>
              <div>
                <dt>Para qué se usa</dt>
                <dd>{rengF.resumen.usos}</dd>
              </div>
              <div>
                <dt>Cómo actúa</dt>
                <dd>{rengF.resumen.actua}</dd>
              </div>
              <div>
                <dt>Qué ocurre al tomarlo</dt>
                <dd>{rengResumenRecorridoDe(rengF, rengP)}</dd>
              </div>
            </dl>
            {rengF.estado === 'parcial' && (
              <div className="notice warn sm" role="note">
                <b>Datos parciales:</b> {rengF.pendientes?.join(' · ')}
              </div>
            )}

            <section className="card stack tight" aria-label="Presentación">
              <label className="sm" htmlFor="cm-presentacion">
                <b>2. Elige la presentación</b>
              </label>
              {rengF.presentaciones.length > 1 ? (
                <select id="cm-presentacion" className="select" value={rengP.id} onChange={(rengE) => rengOnPresentacion(rengE.target.value)}>
                  {rengF.presentaciones.map((rengX) => (
                    <option key={rengX.id} value={rengX.id}>
                      {rengX.producto} · {rengX.mercado}
                    </option>
                  ))}
                </select>
              ) : (
                <span id="cm-presentacion" className="sm">
                  {rengP.producto} · {rengP.mercado}
                </span>
              )}
              <span className="sm">
                <b>{rengP.forma}</b> ({RENG_LIBERACION[rengP.liberacion]}) · {rengP.concentraciones} · titular: {rengP.titular}
              </span>
              <span className="sm faint" data-campo="familia-vias">
                {RENG_FAMILIAS[rengFamiliaDe(rengP)]} · vía {rengViasDe(rengP).map((rengV) => RENG_VIAS[rengV].nombre.toLowerCase()).join(' y ')}
              </span>
              <span className="sm">
                <b>Usos según la fuente:</b> {rengP.usos.t}
              </span>
              {rengP.nota && <span className="faint sm">{rengP.nota}</span>}
              {rengP.recorridoDe && (
                <div className="notice sm" role="note">
                  Esta presentación no documenta su farmacocinética: el recorrido usa la de «{rengF.presentaciones.find((rengX) => rengX.id === rengP.recorridoDe)?.producto}».
                </div>
              )}
              <div className="row">
                <button type="button" className="btn primary" onClick={() => rengOnIniciarRecorrido(rengP.id)}>
                  ▶ 3. Iniciar recorrido por el cuerpo
                </button>
                <button type="button" className="btn" onClick={() => rengOnVerAbsorcion(rengP.id)}>
                  Ver absorción
                </button>
              </div>
            </section>

            <details className="panel-seccion">
              <summary>Efectos adversos documentados</summary>
              {rengReacciones.length ? (
                <>
                  <p className="sm faint">Selección de efectos y advertencias descritos para esta presentación en su etiqueta o ficha técnica. La fuente indica el contexto de cada dato.</p>
                  {rengObservadas.length > 0 && (
                    <>
                      <b className="sm">Reacciones descritas</b>
                      <RengListaDatos datos={rengObservadas} />
                    </>
                  )}
                  {rengAdvertencias.length > 0 && (
                    <>
                      <b className="sm">Advertencias destacadas</b>
                      <RengListaDatos datos={rengAdvertencias} />
                    </>
                  )}
                </>
              ) : (
                <p className="sm faint">Todavía no hay un resumen de efectos adversos para esta presentación. Su etiqueta está en «Fuentes».</p>
              )}
            </details>

            <details className="panel-seccion">
              <summary>Composición: activo, sal y excipientes</summary>
              <div className="cm-tableta">
                <div className="cm-activo" aria-label="Principio activo">
                  <span className="cm-etq">Principio activo</span>
                  <b>{rengF.activo.nombre}</b>
                  <span className="sm">{rengP.concentraciones}</span>
                  {rengP.sal && <span className="sm">Forma química declarada: {rengP.sal.nombre}</span>}
                </div>
                <div className="cm-excipientes" aria-label="Excipientes">
                  <span className="cm-etq">Excipientes declarados ({rengP.excipientes.length})</span>
                  <ul>
                    {rengP.excipientes.map((rengX) => (
                      <li key={rengX}>{rengX}</li>
                    ))}
                  </ul>
                  <span className="faint sm">Con el nombre de la fuente; no son el principio activo.</span>
                </div>
              </div>
              {rengP.sal && <RengCita r={rengP.sal.ref} />}
              <RengCita r={rengP.usos.ref} />
              {!!rengP.excipientesRiesgo?.length && (
                <div className="stack tight sm" data-campo="excipientes-riesgo">
                  <b>Excipientes que la etiqueta destaca</b>
                  {rengP.excipientesRiesgo.map((rengX) => (
                    <div key={rengX.nombre}>
                      <b>{rengX.nombre}</b> (vía {rengX.vias.map((rengV) => RENG_VIAS[rengV].nombre.toLowerCase()).join(' y ')}): {rengX.motivo}
                      <RengCita r={rengX.ref} />
                    </div>
                  ))}
                </div>
              )}
            </details>

            {rengF.combinacion && (
              <section className="card stack tight" aria-label="Componentes de la combinación" data-campo="componentes">
                <b className="sm">Componentes de la combinación</b>
                <ul className="sm">
                  {rengF.combinacion.componentes.map((rengC) => (
                    <li key={rengC.activoId}>
                      {rengActivoDeIndice(RENG_INDICE, rengC.activoId)?.nombre ?? rengC.activoId}{' '}
                      <button type="button" className="btn ghost sm" onClick={() => rengOnActivo(rengC.activoId)}>
                        Abrir su ficha
                      </button>
                      {rengC.nota && <span className="faint"> — {rengC.nota}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {!rengF.combinacion && (
              <details className="panel-seccion">
                <summary>Química: estructura e identidad en 3D</summary>
                <RengQuimica f={rengF} p={rengP} onIrAExplorar={rengOnIrAExplorar} onActivo={rengOnActivo} />
              </details>
            )}

            <details className="panel-seccion">
              <summary>Datos cuantitativos ({rengF.cifras.length})</summary>
              <div className="cm-tabla-envoltura">
                <table className="table cm-cifras">
                  <thead>
                    <tr>
                      <th scope="col">Magnitud</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Contexto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rengF.cifras.map((rengC, rengI) => (
                      <tr key={rengI}>
                        <th scope="row">{rengC.nombre}</th>
                        <td className="mono">
                          {rengC.valor} {rengC.unidad}
                        </td>
                        <td className="sm">
                          {[rengC.poblacion && `población: ${rengC.poblacion}`, rengC.condiciones && `condiciones: ${rengC.condiciones}`, rengC.presentacion && `presentación: ${rengC.presentacion}`].filter(Boolean).join(' · ') || '—'}
                          <RengCita r={rengC.ref} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <span className="faint sm">Cifras de la fuente, para la población y las condiciones indicadas. No sirven para calcular dosis ni para predecir lo que le pasará a una persona.</span>
            </details>

            {!!rengP.advertencias?.length && (
              <details className="panel-seccion">
                <summary>Advertencias de la etiqueta ({rengP.advertencias.length})</summary>
                <div className="stack tight sm">
                  {rengP.advertencias.map((rengW) => (
                    <div key={rengW.titulo}>
                      <b>{rengW.titulo}.</b> {rengW.texto}{' '}
                      {rengW.organos.length > 0 && (
                        <button type="button" className="btn ghost sm" onClick={() => rengOnVerEstructura(rengW.organos)}>
                          Ver en el cuerpo
                        </button>
                      )}
                      <RengCita r={rengW.ref} />
                    </div>
                  ))}
                </div>
              </details>
            )}

            <details className="panel-seccion">
              <summary>Fuentes ({rengF.fuentes.length})</summary>
              <ul className="cm-datos">
                {rengF.fuentes.map((rengX) => (
                  <RengFuenteCompleta key={rengX.id} f={rengX} />
                ))}
              </ul>
            </details>
            <span className="faint sm">Contenido educativo, redactado con palabras propias a partir de las fuentes citadas. No sustituye a la ficha técnica ni al consejo de un profesional, y no da instrucciones de dosis.</span>
          </div>
        )}
      </section>
    </div>
  )
}
