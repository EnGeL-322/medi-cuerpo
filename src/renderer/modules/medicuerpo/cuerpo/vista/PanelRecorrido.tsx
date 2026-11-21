import { rengEtapasDe, rengRecorridoDe } from '../datos/fichas'
import { rengFamiliaDe, rengRelacionDe, rengTituloEtapa } from '../nucleo/presentaciones'
import { RENG_SIN_DATOS, type RengEtapa, type RengFichaFarmaco, type RengIdEtapa, type RengMetabolito, type RengPresentacion } from '../datos/modelo'
import { rengDestino, rengMallasDe } from '../datos/organos'
import { RengCita, RengListaDatos } from './Evidencia'

export function RengLeyendaFormas({ p: rengP }: { p?: Pick<RengPresentacion, 'familia' | 'vias' | 'forma'> | null }): React.JSX.Element {
  const rengFam = rengP ? rengFamiliaDe(rengP) : 'solido-oral'
  const rengRel = rengP ? rengRelacionDe(rengP) : 'digestiva'
  return (
    <ul className="cm-leyenda" aria-label="Qué representa cada forma">
      {rengFam === 'solido-oral' && (
        <li>
          <span className="cm-forma tableta" aria-hidden="true" /> Presentación (comprimido, cápsula…)
        </li>
      )}
      {rengFam === 'inyectable' && (rengRel === 'deposito' || rengRel === 'mixta') && (
        <li>
          <span className="cm-forma deposito" aria-hidden="true" /> Depósito en el lugar de inyección
        </li>
      )}
      <li>
        <span className="cm-forma disuelto" aria-hidden="true" /> Principio activo
      </li>
      <li>
        <span className="cm-forma metabolito" aria-hidden="true" /> Metabolitos
      </li>
    </ul>
  )
}

const RENG_ACTIVIDAD: Record<RengMetabolito['actividad'], string> = { activo: 'activo', inactivo: 'inactivo', 'tóxico': 'tóxico', desconocida: 'actividad no indicada' }

function RengDestinos({ ids: rengIds, onSeleccionar: rengOnSeleccionar }: { ids: readonly string[]; onSeleccionar?: (rengMallas: string[]) => void }): React.JSX.Element {
  return (
    <span className="cm-destinos">
      {rengIds.map((rengId) => {
        const rengD = rengDestino(rengId)
        if (!rengD) return null
        const { propias: rengPropias, sistema: rengSistema } = rengMallasDe([rengId])
        if (rengPropias.length && rengOnSeleccionar)
          return (
            <button key={rengId} type="button" className="chip-fragmento cm-destino" onClick={() => rengOnSeleccionar(rengPropias)} title="Señalarlo en el atlas">
              {rengD.nombre}
            </button>
          )
        return (
          <span key={rengId} className="chip-fragmento cm-destino sin-malla" title={rengD.nota}>
            {rengD.nombre}
            <small> · {rengPropias.length ? 'en el atlas' : rengSistema.length ? `sin malla; se señala: sistema ${rengD.sistema.toLowerCase()}` : `sin malla (sistema ${rengD.sistema.toLowerCase()})`}</small>
          </span>
        )
      })}
    </span>
  )
}

export function RengDetalleEtapa({ f: rengF, p: rengP, id: rengId, e: rengE, onSeleccionar: rengOnSeleccionar, encabezado: rengEncabezado = true }: { f: RengFichaFarmaco; p?: RengPresentacion; id: RengIdEtapa; e: RengEtapa; onSeleccionar?: (rengMallas: string[]) => void; encabezado?: boolean }): React.JSX.Element {
  const rengPropios = rengE.datos.filter((rengD) => rengD.alcance !== 'general')
  const rengGenerales = rengE.datos.filter((rengD) => rengD.alcance === 'general')
  const rengRecorrido = rengRecorridoDe(rengF, rengP)
  const rengAccion = rengId === 'distribucion' ? rengRecorrido.distribucion.accion : null
  const rengMetabolitos = rengId === 'metabolismo' ? rengRecorrido.metabolismo.metabolitos : null
  return (
    <div className="stack tight">
      {rengEncabezado && <h3 className="cm-ficha-nombre">{rengTituloEtapa(rengId, rengP ?? rengF.presentaciones[0]!).titulo}</h3>}
      {rengE.noAplica && (
        <div className="notice sm cm-no-aplica" role="note">
          <b>No aplica en esta presentación:</b> {rengE.noAplica.motivo}
          <RengCita r={rengE.noAplica.ref} />
        </div>
      )}
      <dl className="cm-dl cm-que sm">
        <dt>Qué llega</dt>
        <dd>{rengE.llega}</dd>
        <dt>Qué ocurre</dt>
        <dd>{rengE.ocurre}</dd>
        <dt>Qué sigue</dt>
        <dd>{rengE.sigue}</dd>
      </dl>
      {rengE.simultaneo && (
        <p className="notice sm cm-simultaneo" role="note">
          <b>A la vez:</b> {rengE.simultaneo}
        </p>
      )}
      <div className="sm">
        <b>Dónde lo sitúa la fuente:</b> {rengE.organos.length ? <RengDestinos ids={rengE.organos} onSeleccionar={rengOnSeleccionar} /> : <span className="faint">la fuente no nombra un órgano para esta etapa.</span>}
      </div>
      {!!rengE.organosGenerales?.length && (
        <div className="sm faint">
          <b>Por farmacocinética general (no específico de este medicamento):</b> <RengDestinos ids={rengE.organosGenerales} onSeleccionar={rengOnSeleccionar} />
        </div>
      )}
      {rengAccion && (
        <div className="cm-accion-bloque sm">
          <b>Acción</b>
          <dl className="cm-dl">
            <dt>Diana</dt>
            <dd>{rengAccion.diana ?? `${RENG_SIN_DATOS}: no se conoce una diana concreta.`}</dd>
            <dt>Efecto</dt>
            <dd>{rengAccion.efecto}</dd>
            <dt>Dónde se manifiesta</dt>
            <dd>
              <RengDestinos ids={rengAccion.lugar} onSeleccionar={rengOnSeleccionar} />
            </dd>
          </dl>
          <span className="faint">El lugar de acción no es necesariamente el del metabolismo (etapa 4).</span>
        </div>
      )}
      {rengMetabolitos && (
        <div className="stack tight sm">
          <b>Fármaco original y metabolitos</b>
          <span>
            <span className="cm-forma disuelto" aria-hidden="true" /> Original: {rengF.activo.nombre} ({rengF.activo.formula})
          </span>
          {rengMetabolitos.length === 0 && <span className="faint">La fuente no describe metabolitos relevantes.</span>}
          {rengMetabolitos.map((rengM) => (
            <span key={rengM.nombre}>
              <span className="cm-forma metabolito" aria-hidden="true" /> {rengM.nombre} · <i>{RENG_ACTIVIDAD[rengM.actividad]}</i>
              {rengM.cid ? ` · CID ${rengM.cid}` : ''}
              {rengM.nota ? <span className="faint"> — {rengM.nota}</span> : null}
            </span>
          ))}
        </div>
      )}
      {(rengE.sinDatos ?? []).map((rengS) => (
        <span key={rengS} className="faint sm">
          {rengS}: <b>{RENG_SIN_DATOS}</b>.
        </span>
      ))}
      <details className="panel-seccion">
        <summary>Evidencia de esta etapa ({rengPropios.length + (rengAccion?.datos.length ?? 0)})</summary>
        <RengListaDatos datos={[...rengPropios, ...(rengAccion?.datos ?? [])]} />
        {rengMetabolitos && rengMetabolitos.length > 0 && <RengListaDatos datos={rengMetabolitos.map((rengM) => ({ t: `${rengM.nombre} (${RENG_ACTIVIDAD[rengM.actividad]})`, ref: rengM.ref }))} />}
      </details>
      {rengGenerales.length > 0 && (
        <details className="panel-seccion">
          <summary>Contexto general de farmacocinética ({rengGenerales.length})</summary>
          <RengListaDatos datos={rengGenerales} />
        </details>
      )}
    </div>
  )
}

interface RengProps {
  f: RengFichaFarmaco
  p: RengPresentacion
  etapa: RengIdEtapa
  onEtapa: (rengE: RengIdEtapa) => void
  reproduciendo: boolean
  onReproducir: (rengV: boolean) => void
  reducido: boolean
  onReducido: (rengV: boolean) => void
  onSeleccionar: (rengMallas: string[]) => void
  onEncuadrar: () => void
  onTexto: () => void
  onVolver: () => void
  segundosPorEtapa: number
}

export function RengPanelRecorrido({ f: rengF, p: rengP, etapa: rengEtapa, onEtapa: rengOnEtapa, reproduciendo: rengReproduciendo, onReproducir: rengOnReproducir, reducido: rengReducido, onReducido: rengOnReducido, onSeleccionar: rengOnSeleccionar, onEncuadrar: rengOnEncuadrar, onTexto: rengOnTexto, onVolver: rengOnVolver, segundosPorEtapa: rengSegundosPorEtapa }: RengProps): React.JSX.Element {
  const rengEtapas = rengEtapasDe(rengRecorridoDe(rengF, rengP))
  const rengI = Math.max(0, rengEtapas.findIndex((rengX) => rengX.id === rengEtapa))
  const rengE = rengEtapas[rengI]!
  const rengPrincipal = rengP.recorridoDe ? rengF.presentaciones.find((rengX) => rengX.id === rengP.recorridoDe) : null
  return (
    <div className="stack tight cm-panel-contenido">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <button type="button" className="btn ghost sm" onClick={rengOnVolver}>
          ← Ficha
        </button>
        <button type="button" className="btn ghost sm" onClick={rengOnTexto}>
          Ver todo como texto
        </button>
      </div>
      <h2 className="cm-ficha-nombre">{rengF.activo.nombre}</h2>
      <span className="faint sm">
        {rengP.producto} · {rengP.mercado}
      </span>
      {rengPrincipal && (
        <span className="notice sm" role="note">
          Recorrido documentado con «{rengPrincipal.producto}», otra presentación del mismo activo.
        </span>
      )}
      <div className="row cm-controles" role="group" aria-label="Controles del recorrido">
        <button type="button" className="btn sm" onClick={() => rengOnEtapa(rengEtapas[Math.max(0, rengI - 1)]!.id)} disabled={rengI === 0} aria-label="Etapa anterior">
          ◀
        </button>
        <button type="button" className="btn primary sm" onClick={() => rengOnReproducir(!rengReproduciendo)}>
          {rengReproduciendo ? '⏸ Pausar' : '▶ Reproducir'}
        </button>
        <button type="button" className="btn sm" onClick={() => rengOnEtapa(rengEtapas[Math.min(rengEtapas.length - 1, rengI + 1)]!.id)} disabled={rengI === rengEtapas.length - 1} aria-label="Etapa siguiente">
          ▶
        </button>
        <button type="button" className="btn sm" onClick={rengOnEncuadrar} title="Volver a encuadrar el cuerpo entero">
          ⟲ Encuadrar
        </button>
        <label className="sm row" style={{ gap: 6 }}>
          <input type="checkbox" checked={rengReducido} onChange={(rengEv) => rengOnReducido(rengEv.target.checked)} /> Movimiento reducido
        </label>
      </div>
      <p className="faint sm">La reproducción avanza una etapa cada {rengSegundosPorEtapa} s: representa el orden de las etapas, no el tiempo real. Las etapas se separan para estudiarlas; en el cuerpo se solapan.</p>
      <ol className="cm-etapas" aria-label="Etapas">
        {rengEtapas.map((rengX) => (
          <li key={rengX.id}>
            <button type="button" className={`cm-etapa${rengX.id === rengE.id ? ' activa' : ''}`} aria-current={rengX.id === rengE.id ? 'step' : undefined} onClick={() => rengOnEtapa(rengX.id)}>
              {rengTituloEtapa(rengX.id, rengP).titulo}
            </button>
          </li>
        ))}
      </ol>
      <section className="card" aria-live="polite" aria-label={`Etapa: ${rengTituloEtapa(rengE.id, rengP).titulo}`}>
        <RengDetalleEtapa f={rengF} p={rengP} id={rengE.id} e={rengE} onSeleccionar={rengOnSeleccionar} />
      </section>
      <RengLeyendaFormas p={rengP} />
      <span className="faint sm">Uso educativo: describe una presentación documentada; no calcula dosis ni predice lo que le pasará a una persona.</span>
    </div>
  )
}

export function RengRecorridoTexto({ f: rengF, p: rengP, onVolver: rengOnVolver, onAtlas: rengOnAtlas }: { f: RengFichaFarmaco; p: RengPresentacion; onVolver: () => void; onAtlas: () => void }): React.JSX.Element {
  return (
    <div className="cm-pagina">
      <div className="stack cm-pagina-contenido">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <button type="button" className="btn ghost sm" onClick={rengOnVolver}>
            ← Ficha
          </button>
          <button type="button" className="btn sm" onClick={rengOnAtlas}>
            Ver el recorrido en el atlas
          </button>
        </div>
        <h2 className="ejq-titulo">Recorrido de {rengF.activo.nombre.toLowerCase()} en el cuerpo</h2>
        <span className="muted sm">
          {rengP.producto} · {rengP.mercado} · {rengP.forma}
        </span>
        <p className="faint sm">Cinco etapas que en el cuerpo se solapan. Cada dato lleva su fuente en «Evidencia».</p>
        {rengEtapasDe(rengRecorridoDe(rengF, rengP)).map((rengE) => (
          <section key={rengE.id} className="card" aria-label={rengTituloEtapa(rengE.id, rengP).titulo}>
            <RengDetalleEtapa f={rengF} p={rengP} id={rengE.id} e={rengE} />
          </section>
        ))}
      </div>
    </div>
  )
}
