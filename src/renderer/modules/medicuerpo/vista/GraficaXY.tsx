export type RengEstiloLinea = 'continua' | 'discontinua' | 'punteada' | 'trazo-punto'
export type RengMarcador = 'circulo' | 'cuadrado' | 'triangulo'

export interface RengSerieXY {
  nombre: string
  puntos: Array<[number, number]>
  color: string
  punteada?: boolean
  estilo?: RengEstiloLinea
  marcador?: RengMarcador
  linea?: boolean
  etiqueta?: string
  intervalos?: Array<[number, number, number]>
}

export interface RengMarcaXY {
  x: number
  y: number
  etiqueta?: string
}

interface RengProps {
  series: RengSerieXY[]
  tituloX: string
  tituloY: string
  x?: [number, number]
  y?: [number, number]
  marcas?: RengMarcaXY[]
  descripcion: string
  notaLeyenda?: string
}

const RENG_W = 560
const RENG_H = 300
const RENG_M = { l: 56, r: 16, t: 16, b: 44 }
const RENG_TRAZOS: Record<RengEstiloLinea, string | undefined> = { continua: undefined, discontinua: '7 4', punteada: '2 4', 'trazo-punto': '10 4 2 4' }

const rengNum = (rengV: number): string => (Math.abs(rengV) >= 10000 || (Math.abs(rengV) < 0.01 && rengV !== 0) ? rengV.toExponential(1) : String(Number(rengV.toPrecision(3)))).replace('.', ',')
export function rengPasoRedondo(rengRango: number, rengDivisiones = 4): number {
  if (!(rengRango > 0) || !Number.isFinite(rengRango)) return 1
  const rengBruto = rengRango / rengDivisiones
  const rengPot = 10 ** Math.floor(Math.log10(rengBruto))
  const rengF = rengBruto / rengPot
  return (rengF <= 1 ? 1 : rengF <= 2 ? 2 : rengF <= 2.5 ? 2.5 : rengF <= 5 ? 5 : 10) * rengPot
}

const rengEstilo = (rengS: RengSerieXY): RengEstiloLinea => rengS.estilo ?? (rengS.punteada ? 'discontinua' : 'continua')

function RengSimbolo({ tipo: rengTipo, x: rengX, y: rengY, color: rengColor, r: rengR = 4.5 }: { tipo: RengMarcador; x: number; y: number; color: string; r?: number }): React.JSX.Element {
  const rengE = { fill: rengColor, stroke: 'var(--bg)', strokeWidth: 1.5 }
  if (rengTipo === 'cuadrado') return <rect x={rengX - rengR} y={rengY - rengR} width={rengR * 2} height={rengR * 2} style={rengE} />
  if (rengTipo === 'triangulo') return <polygon points={`${rengX},${rengY - rengR - 1} ${rengX + rengR + 1},${rengY + rengR} ${rengX - rengR - 1},${rengY + rengR}`} style={rengE} />
  return <circle cx={rengX} cy={rengY} r={rengR} style={rengE} />
}

export function RengMuestraSerie({ s: rengS }: { s: RengSerieXY }): React.JSX.Element {
  return (
    <svg className="gxy-muestra" width="30" height="12" viewBox="0 0 30 12" aria-hidden="true">
      {rengS.linea !== false && <line x1="1" x2="29" y1="6" y2="6" strokeWidth="2.5" style={{ stroke: rengS.color }} strokeDasharray={RENG_TRAZOS[rengEstilo(rengS)]} />}
      {rengS.marcador && <RengSimbolo tipo={rengS.marcador} x={15} y={6} color={rengS.color} r={4} />}
    </svg>
  )
}

export function RengGraficaXY({ series: rengSeries, tituloX: rengTituloX, tituloY: rengTituloY, x: rengX, y: rengY, marcas: rengMarcas = [], descripcion: rengDescripcion, notaLeyenda: rengNota }: RengProps): React.JSX.Element {
  const rengTodos = rengSeries.flatMap((rengS) => [...rengS.puntos, ...(rengS.intervalos ?? []).map(([rengA, , rengB]) => [rengA, rengB] as [number, number])]).filter(([rengA, rengB]) => Number.isFinite(rengA) && Number.isFinite(rengB))
  const [rengXa, rengXb] = rengX ?? [Math.min(0, ...rengTodos.map((rengP) => rengP[0])), Math.max(1e-9, ...rengTodos.map((rengP) => rengP[0]))]
  const [rengYa, rengYb] = rengY ?? [Math.min(0, ...rengTodos.map((rengP) => rengP[1])), Math.max(1e-9, ...rengTodos.map((rengP) => rengP[1])) * 1.05]
  const rengPasoX = rengPasoRedondo(rengXb - rengXa)
  const rengPasoY = rengPasoRedondo(rengYb - rengYa)
  const [rengX0, rengX1] = rengX ?? [Math.floor(rengXa / rengPasoX) * rengPasoX, Math.ceil(rengXb / rengPasoX - 1e-9) * rengPasoX]
  const [rengY0, rengY1] = rengY ?? [Math.floor(rengYa / rengPasoY) * rengPasoY, Math.ceil(rengYb / rengPasoY - 1e-9) * rengPasoY]
  const rengSx = (rengV: number): number => RENG_M.l + ((rengV - rengX0) / (rengX1 - rengX0 || 1)) * (RENG_W - RENG_M.l - RENG_M.r)
  const rengSy = (rengV: number): number => RENG_H - RENG_M.b - ((rengV - rengY0) / (rengY1 - rengY0 || 1)) * (RENG_H - RENG_M.t - RENG_M.b)
  const rengTicks = (rengA: number, rengB: number): number[] => {
    const rengP = rengPasoRedondo(rengB - rengA)
    const rengOut: number[] = []
    for (let rengV = Math.ceil(rengA / rengP - 1e-9) * rengP; rengV <= rengB + rengP * 1e-6 && rengOut.length < 12; rengV += rengP) rengOut.push(Number(rengV.toPrecision(12)))
    return rengOut
  }
  const rengValidos = (rengS: RengSerieXY): Array<[number, number]> => rengS.puntos.filter(([rengA, rengB]) => Number.isFinite(rengA) && Number.isFinite(rengB))
  return (
    <figure className="grafica-xy">
      <svg viewBox={`0 0 ${RENG_W} ${RENG_H}`} role="img" aria-label={rengDescripcion}>
        {rengTicks(rengX0, rengX1).map((rengT) => (
          <g key={`x${rengT}`}>
            <line x1={rengSx(rengT)} x2={rengSx(rengT)} y1={RENG_M.t} y2={RENG_H - RENG_M.b} className="gxy-rejilla" />
            <text x={rengSx(rengT)} y={RENG_H - RENG_M.b + 16} textAnchor="middle" className="gxy-tick">{rengNum(rengT)}</text>
          </g>
        ))}
        {rengTicks(rengY0, rengY1).map((rengT) => (
          <g key={`y${rengT}`}>
            <line x1={RENG_M.l} x2={RENG_W - RENG_M.r} y1={rengSy(rengT)} y2={rengSy(rengT)} className="gxy-rejilla" />
            <text x={RENG_M.l - 6} y={rengSy(rengT) + 4} textAnchor="end" className="gxy-tick">{rengNum(rengT)}</text>
          </g>
        ))}
        <rect x={RENG_M.l} y={RENG_M.t} width={RENG_W - RENG_M.l - RENG_M.r} height={RENG_H - RENG_M.t - RENG_M.b} className="gxy-marco" />
        {rengSeries.map((rengS) => (
          <g key={rengS.nombre}>
            {(rengS.intervalos ?? []).map(([rengT, rengA, rengB]) => (
              <line key={rengT} x1={rengSx(rengT)} x2={rengSx(rengT)} y1={rengSy(rengA)} y2={rengSy(rengB)} strokeWidth="1.5" style={{ stroke: rengS.color }} opacity={0.75} />
            ))}
            {rengS.linea !== false && <polyline fill="none" strokeWidth="2.5" style={{ stroke: rengS.color }} strokeDasharray={RENG_TRAZOS[rengEstilo(rengS)]} strokeLinecap="round" points={rengValidos(rengS).map(([rengA, rengB]) => `${rengSx(rengA).toFixed(1)},${rengSy(rengB).toFixed(1)}`).join(' ')} />}
            {rengS.marcador && rengValidos(rengS).map(([rengA, rengB]) => <RengSimbolo key={`${rengA}-${rengB}`} tipo={rengS.marcador!} x={rengSx(rengA)} y={rengSy(rengB)} color={rengS.color} />)}
            {rengS.etiqueta &&
              (() => {
                const rengU = rengValidos(rengS).at(-1)
                if (!rengU) return null
                const rengXe = Math.min(rengSx(rengU[0]), RENG_W - RENG_M.r - 4)
                return (
                  <text x={rengXe} y={rengSy(rengU[1]) - 9} textAnchor="end" className="gxy-etiqueta" style={{ fill: rengS.color }}>
                    {rengS.etiqueta}
                  </text>
                )
              })()}
          </g>
        ))}
        {rengMarcas.map((rengM, rengI) => (
          <g key={rengI}>
            <circle cx={rengSx(rengM.x)} cy={rengSy(rengM.y)} r="5" className="gxy-marca" />
            {rengM.etiqueta && <text x={rengSx(rengM.x) + 8} y={rengSy(rengM.y) - 8} className="gxy-etiqueta">{rengM.etiqueta}</text>}
          </g>
        ))}
        <text x={(RENG_M.l + RENG_W - RENG_M.r) / 2} y={RENG_H - 6} textAnchor="middle" className="gxy-titulo">{rengTituloX}</text>
        <text transform={`translate(14 ${(RENG_M.t + RENG_H - RENG_M.b) / 2}) rotate(-90)`} textAnchor="middle" className="gxy-titulo">{rengTituloY}</text>
      </svg>
      <figcaption className="gxy-leyenda">
        {rengSeries.map((rengS) => (
          <span key={rengS.nombre}>
            <RengMuestraSerie s={rengS} /> {rengS.nombre}
          </span>
        ))}
        {rengNota && <span className="faint">{rengNota}</span>}
      </figcaption>
    </figure>
  )
}
