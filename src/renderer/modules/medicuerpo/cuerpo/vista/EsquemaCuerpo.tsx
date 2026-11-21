import { useMemo } from 'react'
import { RENG_ESTRUCTURAS, type RengCapa } from '../datos/anatomia'
import { RENG_INDICE } from './cargarModelo'

interface RengProps {
  capas: ReadonlySet<RengCapa>
  seleccion: string | null
  resaltadas?: readonly string[]
  aislar: boolean
  onSeleccion: (rengId: string) => void
}

const RENG_W = 320
const RENG_H = 560

export function RengEsquemaCuerpo({ capas: rengCapas, seleccion: rengSeleccion, resaltadas: rengResaltadas = [], aislar: rengAislar, onSeleccion: rengOnSeleccion }: RengProps): React.JSX.Element {
  const rengEscala = useMemo(() => {
    let rengX0 = Infinity
    let rengX1 = -Infinity
    let rengY0 = Infinity
    let rengY1 = -Infinity
    for (const rengI of Object.values(RENG_INDICE)) {
      rengX0 = Math.min(rengX0, rengI.min[0])
      rengX1 = Math.max(rengX1, rengI.max[0])
      rengY0 = Math.min(rengY0, rengI.min[1])
      rengY1 = Math.max(rengY1, rengI.max[1])
    }
    const rengK = Math.min((RENG_W - 20) / (rengX1 - rengX0), (RENG_H - 20) / (rengY1 - rengY0))
    return { k: rengK, cx: (rengX0 + rengX1) / 2, y1: rengY1 }
  }, [])
  const rengVisibles = RENG_ESTRUCTURAS.filter((rengE) => rengCapas.has(rengE.capa) && (!rengAislar || !rengSeleccion || rengE.id === rengSeleccion))
    .map((rengE) => ({ e: rengE, i: RENG_INDICE[rengE.id]! }))
    .filter((rengX) => rengX.i)
    .sort((rengA, rengB) => (rengB.i.max[0] - rengB.i.min[0]) * (rengB.i.max[1] - rengB.i.min[1]) - (rengA.i.max[0] - rengA.i.min[0]) * (rengA.i.max[1] - rengA.i.min[1]))
  const rengPx = (rengX: number): number => RENG_W / 2 + (rengX - rengEscala.cx) * rengEscala.k
  const rengPy = (rengY: number): number => 10 + (rengEscala.y1 - rengY) * rengEscala.k
  return (
    <figure className="cm-esquema">
      <svg viewBox={`0 0 ${RENG_W} ${RENG_H}`} role="group" aria-label="Esquema anatómico frontal: cada estructura es un óvalo en su posición real">
        {rengVisibles.map(({ e: rengE, i: rengI }) => {
          const rengSel = rengE.id === rengSeleccion
          const rengEnEtapa = rengResaltadas.includes(rengE.id)
          return (
            <ellipse
              key={rengE.id}
              cx={(rengPx(rengI.min[0]) + rengPx(rengI.max[0])) / 2}
              cy={(rengPy(rengI.min[1]) + rengPy(rengI.max[1])) / 2}
              rx={Math.max(2.5, (rengPx(rengI.max[0]) - rengPx(rengI.min[0])) / 2)}
              ry={Math.max(2.5, (rengPy(rengI.min[1]) - rengPy(rengI.max[1])) / 2)}
              className={`cm-esq cm-esq-${rengE.capa}${rengSel ? ' sel' : ''}${rengEnEtapa ? ' etapa' : ''}`}
              tabIndex={0}
              role="button"
              aria-pressed={rengSel}
              aria-label={rengE.nombre}
              onClick={() => rengOnSeleccion(rengE.id)}
              onKeyDown={(rengEv) => {
                if (rengEv.key === 'Enter' || rengEv.key === ' ') {
                  rengEv.preventDefault()
                  rengOnSeleccion(rengE.id)
                }
              }}
            >
              <title>{rengE.nombre}</title>
            </ellipse>
          )
        })}
      </svg>
      <figcaption className="faint sm">Esquema de posiciones (vista frontal; la derecha del cuerpo, a tu izquierda). No muestra la forma real.</figcaption>
    </figure>
  )
}
