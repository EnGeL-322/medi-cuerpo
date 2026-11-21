import { useRef, useState } from 'react'
import { RengEtapa as RengTituloEtapa } from '@/shell/ui'
import { RENG_CAPAS, rengEstructura, type RengCapa } from '../datos/anatomia'
import { type RengFichaFarmaco, type RengIdEtapa, type RengPresentacion } from '../datos/modelo'
import { rengAdvertenciasDeEstructura, rengBuscarEstructuras, rengEtapasDeEstructura } from '../nucleo/cuerpo'
import { rengTituloEtapa } from '../nucleo/presentaciones'
import { RENG_FUENTE_MODELO, RENG_INDICE } from './cargarModelo'

interface RengProps {
  capas: ReadonlySet<RengCapa>
  onCapas: (rengC: Set<RengCapa>) => void
  seleccion: string | null
  onSeleccion: (rengId: string | null) => void
  aislar: boolean
  onAislar: (rengV: boolean) => void
  ficha: RengFichaFarmaco | null
  presentacion: RengPresentacion | null
  onIrAEtapa: (rengEtapa: RengIdEtapa) => void
  onElegirMedicamento: () => void
  onCentrar: () => void
}

const RENG_LADO: Record<string, string> = { derecho: 'Lado derecho del cuerpo', izquierdo: 'Lado izquierdo del cuerpo' }

export function RengPanelAtlas({ capas: rengCapas, onCapas: rengOnCapas, seleccion: rengSeleccion, onSeleccion: rengOnSeleccion, aislar: rengAislar, onAislar: rengOnAislar, ficha: rengFicha, presentacion: rengPres, onIrAEtapa: rengOnIrAEtapa, onElegirMedicamento: rengOnElegirMedicamento, onCentrar: rengOnCentrar }: RengProps): React.JSX.Element {
  const [rengQ, rengSetQ] = useState('')
  const rengLista = rengBuscarEstructuras(rengQ, rengCapas)
  const rengListaRef = useRef<HTMLUListElement>(null)
  const rengE = rengSeleccion ? rengEstructura(rengSeleccion) : undefined
  const rengInfo = rengSeleccion ? RENG_INDICE[rengSeleccion] : undefined
  const rengEtapas = rengE && rengFicha ? rengEtapasDeEstructura(rengFicha, rengE.id, rengPres ?? undefined) : []
  const rengAvisos = rengE && rengPres ? rengAdvertenciasDeEstructura(rengPres, rengE.id) : []

  const rengTeclaLista = (rengEv: React.KeyboardEvent<HTMLUListElement>): void => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(rengEv.key)) return
    rengEv.preventDefault()
    const rengI = Math.max(0, rengLista.findIndex((rengX) => rengX.id === rengSeleccion))
    const rengJ = rengEv.key === 'Home' ? 0 : rengEv.key === 'End' ? rengLista.length - 1 : Math.min(rengLista.length - 1, Math.max(0, rengI + (rengEv.key === 'ArrowDown' ? 1 : -1)))
    const rengSig = rengLista[rengJ]
    if (!rengSig) return
    rengOnSeleccion(rengSig.id)
    rengListaRef.current?.querySelector<HTMLElement>(`[data-id="${rengSig.id}"]`)?.scrollIntoView({ block: 'nearest' })
  }

  return (
    <div className="stack tight cm-panel-contenido">
      <RengTituloEtapa n={1} titulo="Elige qué capas ver" />
      <div className="segmentado cm-capas" role="group" aria-label="Capas del cuerpo">
        {RENG_CAPAS.map((rengC) => (
          <button
            key={rengC.id}
            type="button"
            aria-pressed={rengCapas.has(rengC.id)}
            onClick={() => {
              const rengN = new Set(rengCapas)
              if (rengN.has(rengC.id)) rengN.delete(rengC.id)
              else rengN.add(rengC.id)
              rengOnCapas(rengN)
            }}
          >
            {rengC.nombre}
          </button>
        ))}
      </div>

      <RengTituloEtapa n={2} titulo="Selecciona una parte" />
      <input className="input" type="search" placeholder="Buscar: hígado, fémur, riñón izquierdo…" aria-label="Buscar estructura" value={rengQ} onChange={(rengEv) => rengSetQ(rengEv.target.value)} />
      <ul ref={rengListaRef} className="cm-lista" role="listbox" aria-label={`Estructuras (${rengLista.length})`} tabIndex={0} aria-activedescendant={rengSeleccion ? `cm-est-${rengSeleccion}` : undefined} onKeyDown={rengTeclaLista}>
        {rengLista.map((rengX) => (
          <li key={rengX.id} id={`cm-est-${rengX.id}`} data-id={rengX.id} role="option" aria-selected={rengX.id === rengSeleccion} className={rengX.id === rengSeleccion ? 'sel' : ''} onClick={() => rengOnSeleccion(rengX.id)}>
            <span>{rengX.nombre}</span>
            <small className="faint">{RENG_CAPAS.find((rengC) => rengC.id === rengX.capa)?.nombre}</small>
          </li>
        ))}
        {rengLista.length === 0 && <li className="faint sm">{rengCapas.size === 0 ? 'Activa alguna capa (paso 1).' : `Nada coincide con «${rengQ}».`}</li>}
      </ul>
      <span className="faint sm">También puedes hacer clic en el modelo. Con la lista enfocada, ↑/↓ cambian la selección.</span>

      <RengTituloEtapa n={3} titulo="Ver su función" />
      {!rengE ? (
        <p className="muted sm">Selecciona una parte en la lista o en el modelo.</p>
      ) : (
        <section className="card stack tight cm-ficha" aria-label={`Ficha: ${rengE.nombre}`} aria-live="polite">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 className="cm-ficha-nombre">{rengE.nombre}</h3>
            <span className="badge">Seleccionada</span>
          </div>
          <span className="faint sm">
            {RENG_CAPAS.find((rengC) => rengC.id === rengE.capa)?.nombre} · sistema {rengE.sistema.toLowerCase()}
            {rengE.lado ? ` · ${RENG_LADO[rengE.lado]}` : ''}
          </span>
          <p className="sm">
            <b>Dónde está.</b> {rengE.ubicacion}
          </p>
          <p className="sm">
            <b>Qué hace.</b> {rengE.funcion}
          </p>
          {rengE.nota && <p className="faint sm">{rengE.nota}</p>}
          <div className="row">
            <button type="button" className="btn sm" aria-pressed={rengAislar} onClick={() => rengOnAislar(!rengAislar)}>
              {rengAislar ? 'Mostrar todo' : 'Aislar'}
            </button>
            <button type="button" className="btn sm" onClick={rengOnCentrar}>
              Centrar
            </button>
            <button type="button" className="btn ghost sm" onClick={() => rengOnSeleccion(null)}>
              Quitar selección
            </button>
          </div>
          {rengFicha ? (
            rengEtapas.length > 0 ? (
              <div className="stack tight">
                <span className="sm">
                  <b>En el recorrido de {rengFicha.activo.nombre.toLowerCase()}:</b>
                </span>
                <div className="row">
                  {rengEtapas.map((rengX) => (
                    <button key={rengX} type="button" className="btn primary sm" onClick={() => rengOnIrAEtapa(rengX)}>
                      Ver la etapa «{rengTituloEtapa(rengX, rengPres ?? rengFicha.presentaciones[0]!).titulo}»
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <span className="faint sm">Las fuentes de {rengFicha.activo.nombre.toLowerCase()} no sitúan ninguna etapa en esta estructura.</span>
            )
          ) : (
            <button type="button" className="btn ghost sm" onClick={rengOnElegirMedicamento}>
              Elige un medicamento para ver si participa en su recorrido
            </button>
          )}
          {rengAvisos.map((rengA) => (
            <div key={rengA.titulo} className="notice warn sm" role="note">
              <b>Advertencia de la etiqueta · {rengA.titulo}.</b> {rengA.texto}
            </div>
          ))}
          {rengInfo && (
            <details className="panel-seccion">
              <summary>Identificadores y origen de la malla</summary>
              <div className="stack tight sm">
                <span>
                  Conceptos FMA ({rengE.bp3d.arbol === 'partof' ? 'árbol PART-OF' : 'árbol IS-A'}): {rengE.bp3d.conceptos.join(', ')}
                </span>
                <span>
                  {rengInfo.piezas.length} piezas de BodyParts3D ({rengInfo.piezas.slice(0, 6).map((rengP) => rengP.fj).join(', ')}
                  {rengInfo.piezas.length > 6 ? '…' : ''}) · {rengInfo.triangulosOrigen.toLocaleString('es')} → {rengInfo.triangulos.toLocaleString('es')} triángulos
                </span>
                <span className="faint">Ubicación y función: anatomía básica (conocimiento general, sin fuente por estructura).</span>
              </div>
            </details>
          )}
        </section>
      )}
      <details className="panel-seccion">
        <summary>Créditos del modelo 3D</summary>
        <div className="stack tight sm">
          <span>BodyParts3D, © The Database Center for Life Science (DOI {RENG_FUENTE_MODELO.doi}).</span>
          <span>{RENG_FUENTE_MODELO.modelo}. Versión {RENG_FUENTE_MODELO.version}.</span>
          <span>Licencia: la página oficial declara CC BY 4.0 y los archivos OBJ, CC BY-SA 2.1 Japón; las mallas de la app se distribuyen bajo CC BY-SA 2.1 Japón con ambas atribuciones.</span>
          <span className="faint">Mallas reducidas y convertidas a GLB sin cambiar escala relativa, posición ni lateralidad (ver cuerpo/modelo/CREDITOS.md).</span>
        </div>
      </details>
    </div>
  )
}
