export interface RengVentana {
  inicio: number
  fin: number
}

export function rengVentana(rengScrollTop: number, rengAlto: number, rengFilaAlto: number, rengTotal: number, rengExtra = 6): RengVentana {
  if (rengTotal <= 0 || rengFilaAlto <= 0) return { inicio: 0, fin: 0 }
  const rengPrimera = Math.floor(Math.max(0, rengScrollTop) / rengFilaAlto)
  const rengUltima = Math.ceil((Math.max(0, rengScrollTop) + Math.max(0, rengAlto)) / rengFilaAlto)
  return { inicio: Math.max(0, Math.min(rengTotal, rengPrimera - rengExtra)), fin: Math.min(rengTotal, Math.max(rengPrimera, rengUltima) + rengExtra) }
}

export function rengDesplazamientoParaVer(rengIndice: number, rengScrollTop: number, rengAlto: number, rengFilaAlto: number, rengMargen = 0): number | null {
  const rengArriba = rengIndice * rengFilaAlto + rengMargen
  const rengAbajo = rengArriba + rengFilaAlto
  if (rengArriba - rengMargen < rengScrollTop) return Math.max(0, rengArriba - rengMargen)
  if (rengAbajo + rengMargen > rengScrollTop + rengAlto) return rengAbajo + rengMargen - rengAlto
  return null
}
