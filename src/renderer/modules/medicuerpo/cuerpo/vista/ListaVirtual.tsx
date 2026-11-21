import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { rengDesplazamientoParaVer, rengVentana } from '../nucleo/ventana'

const RENG_MARGEN = 4

interface RengProps {
  total: number
  filaAlto: number
  etiqueta: string
  className?: string
  indiceActivo: number
  idActivo?: string
  onTecla: (rengEv: React.KeyboardEvent<HTMLUListElement>) => void
  fila: (rengIndice: number) => React.ReactNode
}

export function RengListaVirtual({ total: rengTotal, filaAlto: rengFilaAlto, etiqueta: rengEtiqueta, className: rengClase, indiceActivo: rengIndiceActivo, idActivo: rengIdActivo, onTecla: rengOnTecla, fila: rengFila }: RengProps): React.JSX.Element {
  const rengRef = useRef<HTMLUListElement>(null)
  const [rengScroll, rengSetScroll] = useState(0)
  const [rengAlto, rengSetAlto] = useState(300)

  useLayoutEffect(() => {
    const rengUl = rengRef.current
    if (!rengUl) return
    rengSetAlto(rengUl.clientHeight || 300)
    if (typeof ResizeObserver === 'undefined') return
    const rengObs = new ResizeObserver(() => rengSetAlto(rengUl.clientHeight || 300))
    rengObs.observe(rengUl)
    return () => rengObs.disconnect()
  }, [])

  useEffect(() => {
    const rengUl = rengRef.current
    if (!rengUl || rengIndiceActivo < 0) return
    const rengNuevo = rengDesplazamientoParaVer(rengIndiceActivo, rengUl.scrollTop, rengUl.clientHeight, rengFilaAlto, RENG_MARGEN)
    if (rengNuevo !== null) rengUl.scrollTop = rengNuevo
  }, [rengIndiceActivo, rengFilaAlto])

  useEffect(() => {
    const rengUl = rengRef.current
    if (rengUl && rengUl.scrollTop > Math.max(0, rengTotal * rengFilaAlto - rengUl.clientHeight)) rengUl.scrollTop = 0
  }, [rengTotal, rengFilaAlto])

  const { inicio: rengInicio, fin: rengFin } = rengVentana(rengScroll, rengAlto, rengFilaAlto, rengTotal)
  const rengFilas: React.ReactNode[] = []
  for (let rengI = rengInicio; rengI < rengFin; rengI++) rengFilas.push(rengFila(rengI))
  return (
    <ul
      ref={rengRef}
      className={rengClase}
      role="listbox"
      aria-label={rengEtiqueta}
      aria-activedescendant={rengIdActivo}
      tabIndex={0}
      onKeyDown={rengOnTecla}
      onScroll={(rengEv) => rengSetScroll(rengEv.currentTarget.scrollTop)}
    >
      <li className="cm-espaciador" role="presentation" aria-hidden="true" style={{ height: rengInicio * rengFilaAlto }} />
      {rengFilas}
      <li className="cm-espaciador" role="presentation" aria-hidden="true" style={{ height: (rengTotal - rengFin) * rengFilaAlto }} />
    </ul>
  )
}
