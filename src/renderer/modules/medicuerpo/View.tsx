import { useCallback, useEffect, useRef, useState } from 'react'
import { rengReemplazarSubruta, rengRegistrarReciente, useRengSubruta } from '@/shell/navegacion'
import { RengDestinos } from '@/shell/ui'
import './quimica.css'
import { rengCrearTrabajo } from './estado/trabajo'
import RengCasos from './modos/Casos'
import RengCuerpoMedicamentos from './modos/CuerpoMedicamentos'
import RengExplorar from './modos/Explorar'
import { rengDescripcionNav, RENG_DESTINOS_MEDICUERPO, RENG_NAV_INICIAL, rengNavDeSubruta, rengSubrutaDeNav, type RengDestinoMediCuerpo, type RengNavMediCuerpo, type RengPestanaCuerpo } from './navegacion'
import { RengActividadContext } from './vista/actividad'
import { RengBarraTrabajo } from './vista/BarraTrabajo'
import { rengEsCampoDeTexto, rengGuardarNivel, rengLeerNivel, RengNivelContext, type RengNivel } from './vista/nivel'
import { useRengMesa } from './vista/useMesa'
import { RengTrabajoContext } from './vista/useTrabajo'

const RENG_ID_MODULO = 'medicuerpo'

export default function RengView(): React.JSX.Element {
  const rengAlmacen = useRef(rengCrearTrabajo()).current
  const rengMesa = useRengMesa(rengAlmacen)
  const rengRuta = useRengSubruta(RENG_ID_MODULO)
  const [rengNav, rengSetNav] = useState<RengNavMediCuerpo>(() => rengNavDeSubruta(RENG_NAV_INICIAL, rengRuta.sub))
  const [rengPedido, rengSetPedido] = useState<{ pestana: RengPestanaCuerpo; n: number }>(() => ({ pestana: rengNav.pestana, n: 0 }))
  const [rengNivel, rengSetNivelEstado] = useState<RengNivel>(rengLeerNivel)
  const rengSetNivel = (rengN: RengNivel): void => {
    rengSetNivelEstado(rengN)
    rengGuardarNivel(rengN)
  }
  const { destino: rengDestino } = rengNav

  const rengUltima = useRef(rengRuta.n)
  useEffect(() => {
    if (rengRuta.n === rengUltima.current) return
    rengUltima.current = rengRuta.n
    rengSetNav((rengN) => {
      const rengSig = rengNavDeSubruta(rengN, rengRuta.sub)
      if (rengSig.destino === 'cuerpo' && rengSig.pestana !== rengN.pestana) rengSetPedido((rengP) => ({ pestana: rengSig.pestana, n: rengP.n + 1 }))
      return rengSig
    })
  }, [rengRuta])

  useEffect(() => {
    rengReemplazarSubruta(RENG_ID_MODULO, rengSubrutaDeNav(rengNav))
    rengRegistrarReciente({ id: RENG_ID_MODULO, sub: rengSubrutaDeNav(rengNav), ...rengDescripcionNav(rengNav) })
  }, [rengNav])

  const rengAtajos = useRef({ mesa: rengMesa, setNivel: rengSetNivel, destino: rengDestino })
  rengAtajos.current = { mesa: rengMesa, setNivel: rengSetNivel, destino: rengDestino }
  useEffect(() => {
    const rengTecla = (rengEv: KeyboardEvent): void => {
      const rengA = rengAtajos.current
      if (rengEv.defaultPrevented || rengEsCampoDeTexto(rengEv.target)) return
      const rengK = rengEv.key.toLowerCase()
      const rengActivaMesa = rengA.destino === 'mesa'
      if ((rengEv.ctrlKey || rengEv.metaKey) && rengK === 'z' && !rengEv.shiftKey) {
        if (!rengActivaMesa) return
        rengEv.preventDefault()
        rengA.mesa.deshacer()
      } else if ((rengEv.ctrlKey || rengEv.metaKey) && (rengK === 'y' || (rengK === 'z' && rengEv.shiftKey))) {
        if (!rengActivaMesa) return
        rengEv.preventDefault()
        rengA.mesa.rehacer()
      } else if (rengEv.ctrlKey || rengEv.metaKey || rengEv.altKey) return
      else if (rengK === 'b') rengA.setNivel('basico')
      else if (rengK === 'a') rengA.setNivel('avanzado')
    }
    window.addEventListener('keydown', rengTecla)
    return () => window.removeEventListener('keydown', rengTecla)
  }, [])

  const rengSetDestino = useCallback((rengD: RengDestinoMediCuerpo): void => rengSetNav((rengN) => ({ ...rengN, destino: rengD })), [])
  const rengIrAMesa = useCallback((): void => rengSetDestino('mesa'), [rengSetDestino])
  const rengAlCambiarPestana = useCallback((rengP: RengPestanaCuerpo): void => rengSetNav((rengN) => (rengN.pestana === rengP ? rengN : { ...rengN, pestana: rengP })), [])

  return (
    <RengTrabajoContext.Provider value={rengAlmacen}>
      <RengNivelContext.Provider value={rengNivel}>
        <div className="quimica-modulo" data-disciplina="cuerpo">
          <RengDestinos etiqueta="MediCuerpo" idBase="medicuerpo" valor={rengDestino} items={RENG_DESTINOS_MEDICUERPO} onCambio={rengSetDestino} redundante>
            <div className="destinos-extra" hidden={rengDestino === 'cuerpo'}>
              <div className="segmentado" role="group" aria-label="Nivel de detalle (atajos B y A)">
                <button type="button" aria-pressed={rengNivel === 'basico'} onClick={() => rengSetNivel('basico')} title="Solo lo esencial (B)">
                  Básico
                </button>
                <button type="button" aria-pressed={rengNivel === 'avanzado'} onClick={() => rengSetNivel('avanzado')} title="Más datos y métodos (A)">
                  Avanzado
                </button>
              </div>
            </div>
          </RengDestinos>

          <div className="lab" data-nivel={rengNivel} id="medicuerpo-panel-cuerpo" role="tabpanel" aria-labelledby="medicuerpo-tab-cuerpo" hidden={rengDestino !== 'cuerpo'}>
            <div className="lab-panel" id="panel-cuerpo">
              <RengActividadContext.Provider value={rengDestino === 'cuerpo'}>
                <RengCuerpoMedicamentos onIrAExplorar={rengIrAMesa} pedido={rengPedido} onPestana={rengAlCambiarPestana} />
              </RengActividadContext.Provider>
            </div>
          </div>

          <div className="lab" data-nivel={rengNivel} id="medicuerpo-panel-casos" role="tabpanel" aria-labelledby="medicuerpo-tab-casos" hidden={rengDestino !== 'casos'}>
            <div className="lab-panel quimica-scroll" id="panel-casos">
              <RengActividadContext.Provider value={rengDestino === 'casos'}>
                <RengCasos mesa={rengMesa} onIrAExplorar={rengIrAMesa} />
              </RengActividadContext.Provider>
            </div>
          </div>

          <div className="lab" data-nivel={rengNivel} id="medicuerpo-panel-mesa" role="tabpanel" aria-labelledby="medicuerpo-tab-mesa" hidden={rengDestino !== 'mesa'}>
            <div className="lab-cuerpo">
              <RengBarraTrabajo onAnadir={rengIrAMesa} />
              <div className="lab-panel" id="panel-explorar">
                <RengActividadContext.Provider value={rengDestino === 'mesa'}>
                  <RengExplorar mesa={rengMesa} />
                </RengActividadContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </RengNivelContext.Provider>
    </RengTrabajoContext.Provider>
  )
}
