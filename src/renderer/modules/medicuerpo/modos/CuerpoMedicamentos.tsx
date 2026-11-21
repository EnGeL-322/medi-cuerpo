import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { rengPestanaPorTecla } from '@/shell/nucleo/pestanas'
import type { RengCapa } from '../cuerpo/datos/anatomia'
import { RENG_INDICE } from '../cuerpo/datos/catalogoDemanda'
import { rengDibujoEtapa, rengEtapasDe, rengRecorridoDe } from '../cuerpo/datos/fichas'
import { rengActivoDeIndice } from '../cuerpo/datos/indice'
import type { RengIdEtapa } from '../cuerpo/datos/modelo'
import { rengMallasDe } from '../cuerpo/datos/organos'
import { RengEsquemaCuerpo } from '../cuerpo/vista/EsquemaCuerpo'
import { RengPanelAtlas } from '../cuerpo/vista/PanelAtlas'
import { RengLeyendaFormas, RengPanelRecorrido, RengRecorridoTexto } from '../cuerpo/vista/PanelRecorrido'
import { RengVisorCuerpo, type RengVisorApi } from '../cuerpo/vista/VisorCuerpo'
import { RengVistaMedicamentos } from '../cuerpo/vista/VistaMedicamentos'
import { useRengFicha } from '../cuerpo/vista/useFicha'
import { RengVistaModelo } from '../cuerpo/vista/VistaModelo'
import { rengConModo, rengConNivel, rengEstadoInicial, rengGuardarNivelAbsorcion, rengLeerNivelAbsorcion, type RengEstadoAbsorcion, type RengNivelAbsorcion } from '../cuerpo/nucleo/estadoAbsorcion'
import '../cuerpo/cuerpo.css'
import { RengActividadContext, useRengActivo } from '../vista/actividad'
import { rengMovimientoReducido } from '../vista/nivel'

type RengVistaCM = 'medicamentos' | 'recorrido' | 'texto' | 'atlas' | 'modelo'
type RengPestana = 'medicamentos' | 'atlas' | 'modelo'

const RENG_PESTANAS: ReadonlyArray<{ id: RengPestana; nombre: string }> = [
  { id: 'medicamentos', nombre: 'Medicamentos' },
  { id: 'atlas', nombre: 'Atlas del cuerpo' },
  { id: 'modelo', nombre: 'Modelo general de absorción' }
]
const rengPestanaDe = (rengV: RengVistaCM): RengPestana => (rengV === 'atlas' ? 'atlas' : rengV === 'modelo' ? 'modelo' : 'medicamentos')
const RENG_CAPAS_RECORRIDO: ReadonlySet<RengCapa> = new Set(['organos'])
const RENG_SEGUNDOS_POR_ETAPA = 7
const rengAlmacenLocal = (): Storage | null => {
  try {
    return window.localStorage
  } catch {
    return null
  }
}

interface RengProps {
  onIrAExplorar: () => void
  pedido?: { pestana: RengPestana; n: number }
  onPestana?: (rengP: RengPestana) => void
}

export default function RengCuerpoMedicamentos({ onIrAExplorar: rengOnIrAExplorar, pedido: rengPedido, onPestana: rengOnPestana }: RengProps): React.JSX.Element {
  const rengLabActivo = useRengActivo()
  const [rengVista, rengSetVista] = useState<RengVistaCM>(() => rengPedido?.pestana ?? 'medicamentos')
  const [rengCapas, rengSetCapas] = useState<Set<RengCapa>>(() => new Set(['esqueleto', 'organos']))
  const [rengSeleccion, rengSetSeleccion] = useState<string | null>(null)
  const [rengAislar, rengSetAislar] = useState(false)
  const [rengActivoId, rengSetActivoId] = useState<string | null>(null)
  const [rengPresentacionId, rengSetPresentacionId] = useState<string | null>(null)
  const [rengEtapa, rengSetEtapa] = useState<RengIdEtapa>('liberacion')
  const [rengReproduciendo, rengSetReproduciendo] = useState(false)
  const [rengReducido, rengSetReducido] = useState(rengMovimientoReducido)
  const [rengFalloWebGL, rengSetFalloWebGL] = useState<string | null>(null)
  const [rengEsquema, rengSetEsquema] = useState(false)
  const [rengAbs, rengSetAbs] = useState<RengEstadoAbsorcion>(() => rengEstadoInicial(rengLeerNivelAbsorcion(rengAlmacenLocal())))
  const rengOnEstadoAbs = useCallback((rengF: (rengE: RengEstadoAbsorcion) => RengEstadoAbsorcion) => rengSetAbs(rengF), [])
  const rengOnNivelAbs = useCallback((rengN: RengNivelAbsorcion) => {
    rengSetAbs((rengE) => rengConNivel(rengE, rengN))
    rengGuardarNivelAbsorcion(rengAlmacenLocal(), rengN)
  }, [])
  const rengVisor = useRef<RengVisorApi>(null)
  const rengBotones = useRef(new Map<RengPestana, HTMLButtonElement>())

  const rengF = useRengFicha(rengActivoId).ficha
  const rengP = rengF ? (rengF.presentaciones.find((rengX) => rengX.id === rengPresentacionId) ?? rengF.presentaciones[0]!) : undefined
  const rengConVisor = rengVista === 'atlas' || rengVista === 'recorrido'
  const rengSin3D = rengEsquema || rengFalloWebGL !== null
  const rengEnRecorrido = rengVista === 'recorrido' && !!rengF
  const rengEtapaDatos = rengF ? rengEtapasDe(rengRecorridoDe(rengF, rengP)).find((rengE) => rengE.id === rengEtapa) : undefined
  const rengDibujo = useMemo(() => {
    if (!rengF || !rengEtapaDatos) return null
    const rengD = rengDibujoEtapa(rengEtapaDatos.id, rengEtapaDatos, rengP)
    const rengAccion = rengEtapaDatos.id === 'distribucion' ? rengMallasDe(rengRecorridoDe(rengF, rengP).distribucion.accion.lugar) : { propias: [], sistema: [] }
    const rengResaltadas = [...new Set([...rengD.resaltadas, ...rengD.sistema, ...rengAccion.propias, ...rengAccion.sistema])]
    return { ...rengD, resaltadas: rengResaltadas }
  }, [rengF, rengEtapaDatos, rengP])

  const rengElegirActivo = (rengId: string): void => {
    rengSetActivoId(rengId)
    const rengPresentaciones = rengActivoDeIndice(RENG_INDICE, rengId)?.presentaciones ?? []
    rengSetPresentacionId((rengPrev) => (rengPrev && rengPresentaciones.some((rengX) => rengX.id === rengPrev) ? rengPrev : (rengPresentaciones[0]?.id ?? null)))
  }
  const rengIniciarRecorrido = (rengId: string): void => {
    rengSetPresentacionId(rengId)
    rengSetEtapa('liberacion')
    rengSetReproduciendo(!rengReducido)
    rengSetSeleccion(null)
    rengSetVista('recorrido')
  }
  const rengOnFallo = useCallback((rengM: string) => rengSetFalloWebGL(rengM), [])

  useEffect(() => {
    if (rengEnRecorrido && rengDibujo) rengVisor.current?.encuadrar(rengDibujo.resaltadas.length ? rengDibujo.resaltadas : rengDibujo.ruta)
  }, [rengEnRecorrido, rengDibujo])
  useEffect(() => {
    if (!rengReproduciendo || rengVista !== 'recorrido' || !rengF || !rengLabActivo) return
    const rengEtapas = rengEtapasDe(rengRecorridoDe(rengF, rengP))
    const rengI = rengEtapas.findIndex((rengE) => rengE.id === rengEtapa)
    const rengT = window.setTimeout(() => {
      if (rengI < rengEtapas.length - 1) rengSetEtapa(rengEtapas[rengI + 1]!.id)
      else rengSetReproduciendo(false)
    }, RENG_SEGUNDOS_POR_ETAPA * 1000)
    return () => window.clearTimeout(rengT)
  }, [rengReproduciendo, rengVista, rengF, rengEtapa, rengLabActivo])

  const rengAnimacion = useMemo(
    () => (rengEnRecorrido && rengDibujo && rengF ? { clave: `${rengF.activo.id}|${rengEtapa}`, ruta: rengDibujo.ruta, formas: rengDibujo.formas, reproduciendo: rengReproduciendo, reducido: rengReducido } : null),
    [rengEnRecorrido, rengDibujo, rengF, rengEtapa, rengReproduciendo, rengReducido]
  )

  const rengIrAPestana = (rengT: RengPestana): void => {
    rengSetReproduciendo(false)
    rengSetVista(rengT === 'medicamentos' ? (rengVista === 'recorrido' || rengVista === 'texto' ? rengVista : 'medicamentos') : rengT)
  }
  const rengIrAPestanaRef = useRef(rengIrAPestana)
  rengIrAPestanaRef.current = rengIrAPestana
  useEffect(() => {
    if (rengPedido && rengPedido.n > 0) rengIrAPestanaRef.current(rengPedido.pestana)
  }, [rengPedido])
  const rengPestanaVisible = rengPestanaDe(rengVista)
  useEffect(() => {
    rengOnPestana?.(rengPestanaVisible)
  }, [rengPestanaVisible, rengOnPestana])
  const rengTecla = (rengEv: React.KeyboardEvent): void => {
    const rengSig = rengPestanaPorTecla(RENG_PESTANAS.map((rengV) => rengV.id), rengPestanaDe(rengVista), rengEv.key)
    if (!rengSig) return
    rengEv.preventDefault()
    rengIrAPestana(rengSig)
    rengBotones.current.get(rengSig)?.focus()
  }

  return (
    <div className="cm">
      <div className="tabs cm-nav" role="tablist" aria-label="Cuerpo y medicamentos" onKeyDown={rengTecla}>
        {RENG_PESTANAS.map((rengV) => (
          <button
            key={rengV.id}
            ref={(rengB) => {
              if (rengB) rengBotones.current.set(rengV.id, rengB)
              else rengBotones.current.delete(rengV.id)
            }}
            type="button"
            role="tab"
            aria-selected={rengPestanaDe(rengVista) === rengV.id}
            tabIndex={rengPestanaDe(rengVista) === rengV.id ? 0 : -1}
            className={`tab${rengPestanaDe(rengVista) === rengV.id ? ' active' : ''}`}
            onClick={() => rengIrAPestana(rengV.id)}
          >
            {rengV.nombre}
          </button>
        ))}
        {(rengVista === 'recorrido' || rengVista === 'texto') && rengF && (
          <span className="cm-migas faint sm">
            <button type="button" className="btn ghost sm" onClick={() => rengSetVista('medicamentos')}>
              {rengF.activo.nombre}
            </button>{' '}
            › {rengVista === 'texto' ? 'Recorrido en texto' : 'Recorrido en el cuerpo'}
          </span>
        )}
      </div>

      <div className="cm-pagina-contenedor" hidden={rengVista !== 'medicamentos'}>
        <RengActividadContext.Provider value={rengLabActivo && rengVista === 'medicamentos'}>
          <RengVistaMedicamentos
            activoId={rengActivoId}
            onActivo={rengElegirActivo}
            presentacionId={rengP?.id ?? null}
            onPresentacion={rengSetPresentacionId}
            onIniciarRecorrido={rengIniciarRecorrido}
            onIrAExplorar={rengOnIrAExplorar}
            onVerAbsorcion={(rengId) => {
              rengSetPresentacionId(rengId)
              rengSetAbs((rengE) => rengConModo(rengE, 'medicamento'))
              rengSetReproduciendo(false)
              rengSetVista('modelo')
            }}
            onVerEstructura={(rengDestinos) => {
              const rengM = rengMallasDe(rengDestinos)
              rengSetSeleccion(rengM.propias[0] ?? rengM.sistema[0] ?? null)
              rengSetVista('atlas')
            }}
          />
        </RengActividadContext.Provider>
      </div>

      {rengVista === 'texto' && rengF && rengP && <RengRecorridoTexto f={rengF} p={rengP} onVolver={() => rengSetVista('medicamentos')} onAtlas={() => rengSetVista('recorrido')} />}

      <div className="cm-cuerpo" hidden={!rengConVisor}>
        <div className="cm-principal">
          <div className="cm-herramientas row" role="group" aria-label="Vista del modelo">
            {!rengSin3D && (
              <>
                <button type="button" className="btn sm" onClick={() => rengVisor.current?.restablecer()}>
                  ⟲ Cuerpo entero
                </button>
                <button type="button" className="btn sm" onClick={() => rengVisor.current?.acercar(0.8)} aria-label="Acercar">
                  ＋
                </button>
                <button type="button" className="btn sm" onClick={() => rengVisor.current?.acercar(1.25)} aria-label="Alejar">
                  －
                </button>
              </>
            )}
            <button type="button" className="btn sm" aria-pressed={rengEsquema} onClick={() => rengSetEsquema(!rengEsquema)} disabled={rengFalloWebGL !== null}>
              {rengSin3D ? 'Ver en 3D' : 'Ver como esquema'}
            </button>
            {rengEnRecorrido && <RengLeyendaFormas p={rengP} />}
          </div>
          {rengFalloWebGL && (
            <div className="notice warn sm" role="status">
              {rengFalloWebGL} Se muestra el esquema anatómico; el recorrido completo también se puede leer como texto.
            </div>
          )}
          <div className="cm-visor" hidden={rengSin3D}>
            {rengFalloWebGL === null && (
              <RengVisorCuerpo
                ref={rengVisor}
                activo={rengLabActivo && rengConVisor && !rengSin3D}
                capas={rengVista === 'recorrido' ? RENG_CAPAS_RECORRIDO : rengCapas}
                seleccion={rengSeleccion}
                resaltadas={rengEnRecorrido && rengDibujo ? rengDibujo.resaltadas : []}
                aislar={rengVista === 'atlas' && rengAislar}
                onSeleccion={rengSetSeleccion}
                onFallo={rengOnFallo}
                animacion={rengAnimacion}
                etiqueta="Cuerpo humano de referencia en 3D (BodyParts3D)"
              />
            )}
            {!rengSin3D && <p className="cm-ayuda faint sm">Arrastra para girar · rueda para acercar · botón derecho para desplazar · clic para seleccionar</p>}
          </div>
          {rengSin3D && <RengEsquemaCuerpo capas={rengVista === 'recorrido' ? RENG_CAPAS_RECORRIDO : rengCapas} seleccion={rengSeleccion} resaltadas={rengEnRecorrido && rengDibujo ? rengDibujo.resaltadas : []} aislar={rengVista === 'atlas' && rengAislar} onSeleccion={rengSetSeleccion} />}
        </div>
        <aside className="cm-panel" aria-label={rengVista === 'atlas' ? 'Información de la parte seleccionada' : 'Recorrido del medicamento'}>
          {rengVista === 'atlas' && (
            <RengPanelAtlas
              capas={rengCapas}
              onCapas={rengSetCapas}
              seleccion={rengSeleccion}
              onSeleccion={rengSetSeleccion}
              aislar={rengAislar}
              onAislar={(rengV) => {
                rengSetAislar(rengV)
                if (rengV && rengSeleccion) rengVisor.current?.encuadrar([rengSeleccion])
              }}
              ficha={rengF ?? null}
              presentacion={rengP ?? null}
              onIrAEtapa={(rengE) => {
                rengSetEtapa(rengE)
                rengSetReproduciendo(false)
                rengSetVista('recorrido')
              }}
              onElegirMedicamento={() => rengSetVista('medicamentos')}
              onCentrar={() => rengSeleccion && rengVisor.current?.encuadrar([rengSeleccion])}
            />
          )}
          {rengVista === 'recorrido' && rengF && rengP && (
            <RengPanelRecorrido
              f={rengF}
              p={rengP}
              etapa={rengEtapa}
              onEtapa={(rengE) => {
                rengSetEtapa(rengE)
                rengSetReproduciendo(false)
              }}
              reproduciendo={rengReproduciendo}
              onReproducir={rengSetReproduciendo}
              reducido={rengReducido}
              onReducido={rengSetReducido}
              onSeleccionar={(rengMallas) => {
                rengSetSeleccion(rengMallas[0] ?? null)
                rengVisor.current?.encuadrar(rengMallas)
              }}
              onEncuadrar={() => rengVisor.current?.restablecer()}
              onTexto={() => {
                rengSetReproduciendo(false)
                rengSetVista('texto')
              }}
              onVolver={() => {
                rengSetReproduciendo(false)
                rengSetVista('medicamentos')
              }}
              segundosPorEtapa={RENG_SEGUNDOS_POR_ETAPA}
            />
          )}
        </aside>
      </div>

      {rengVista === 'modelo' && (
        <RengVistaModelo
          estado={rengAbs}
          onEstado={rengOnEstadoAbs}
          onNivel={rengOnNivelAbs}
          activoId={rengActivoId}
          presentacionId={rengP?.id ?? null}
          onActivo={rengElegirActivo}
          onPresentacion={rengSetPresentacionId}
          onVerFicha={() => rengSetVista('medicamentos')}
          onRecorrido={rengIniciarRecorrido}
        />
      )}
    </div>
  )
}
