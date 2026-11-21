import { rengFuente } from '../datos/catalogoDemanda'
import type { RengAlcance, RengDato, RengFuente, RengRef } from '../datos/modelo'

const RENG_ALCANCE: Record<RengAlcance, string> = {
  presentacion: 'De esta presentación',
  'otra-presentacion': 'De otra presentación',
  general: 'General (cualquier fármaco)'
}

export function RengLineaFuente({ f: rengF, seccion: rengSeccion }: { f: RengFuente | undefined; seccion?: string }): React.JSX.Element {
  if (!rengF) return <span className="faint">Fuente desconocida</span>
  return (
    <span className="cm-cita">
      {rengF.titulo}
      {rengF.version ? `, versión ${rengF.version}` : ''}
      {rengF.fecha ? ` (${rengF.fecha})` : ''}
      {rengSeccion ? ` · sección «${rengSeccion}»` : ''} · {rengF.organismo}
      {rengF.mercado ? ` · ${rengF.mercado}` : ''} · consultada el {rengF.consultado}
    </span>
  )
}

export function RengCita({ r: rengR }: { r: RengRef }): React.JSX.Element {
  const rengF = rengFuente(rengR.f)
  return (
    <div className="faint sm cm-ref">
      <span className="cm-literal" lang={rengF?.tipo === 'ficha-ue' ? 'es' : 'en'}>
        «{rengR.cita}»
      </span>{' '}
      — <RengLineaFuente f={rengF} seccion={rengR.sec} />
    </div>
  )
}

export function RengFuenteCorta({ r: rengR }: { r: RengRef }): React.JSX.Element {
  const rengF = rengFuente(rengR.f)
  return (
    <span className="faint sm cm-ref" title={`«${rengR.cita}»`}>
      Fuente: {rengF ? rengF.titulo : 'desconocida'} · {rengR.sec}
    </span>
  )
}

export function RengListaDatos({ datos: rengDatos }: { datos: readonly RengDato[] }): React.JSX.Element {
  return (
    <ul className="cm-datos">
      {rengDatos.map((rengD, rengI) => {
        const rengAlcance = rengD.alcance ?? 'presentacion'
        return (
          <li key={`${rengI}-${rengD.t.slice(0, 20)}`} className="sm">
            <span className={`badge cm-alcance ${rengAlcance}`}>{RENG_ALCANCE[rengAlcance]}</span> {rengD.t}
            {(rengD.poblacion || rengD.condiciones) && (
              <div className="faint">
                {rengD.poblacion ? `Población: ${rengD.poblacion}` : ''}
                {rengD.poblacion && rengD.condiciones ? ' · ' : ''}
                {rengD.condiciones ? `Condiciones: ${rengD.condiciones}` : ''}
              </div>
            )}
            <RengCita r={rengD.ref} />
          </li>
        )
      })}
    </ul>
  )
}

export function RengFuenteCompleta({ f: rengF }: { f: RengFuente }): React.JSX.Element {
  return (
    <li className="sm">
      <b>{rengF.titulo}</b>
      <div className="faint">
        {rengF.organismo}
        {rengF.producto ? ` · producto: ${rengF.producto}` : ''}
        {rengF.mercado ? ` · mercado: ${rengF.mercado}` : ''}
        {rengF.version ? ` · versión ${rengF.version}` : ''}
        {rengF.fecha ? ` · ${rengF.fecha}` : ''} · consultada el {rengF.consultado}
      </div>
      <div className="row" style={{ gap: 6 }}>
        <span className="mono faint cm-url">{rengF.url}</span>
        <button type="button" className="btn ghost sm" onClick={() => void navigator.clipboard?.writeText(rengF.url)} aria-label={`Copiar el enlace de la fuente: ${rengF.titulo}`}>
          Copiar enlace
        </button>
      </div>
    </li>
  )
}
