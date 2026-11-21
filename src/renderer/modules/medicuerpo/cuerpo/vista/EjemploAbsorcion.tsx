import { useEffect, useMemo, useState } from 'react'
import { RengGraficaXY, type RengSerieXY } from '../../vista/GraficaXY'
import {
  rengAbsorcionMasLenta,
  rengAbsorcionMasRapida,
  rengAjustar,
  rengAlternarFraccion,
  rengCompararVisible,
  rengDescribirVelocidad,
  rengEjemploDeComparacion,
  rengFraccionesVisibles,
  rengFrasePico,
  rengNombreEjemplo,
  rengPicoEjemplo,
  rengPuedeAcelerar,
  rengPuedeFrenar,
  rengTablaValores,
  rengUsarEjemplo,
  RENG_EJEMPLO_LENTO,
  RENG_EJEMPLO_RAPIDO,
  RENG_HORIZONTE,
  RENG_K_DESLIZADOR,
  type RengEstadoAbsorcion,
  type RengFraccionVisible
} from '../nucleo/estadoAbsorcion'
import { rengCurvas, RENG_LIMITES_MODELO } from '../nucleo/modeloAbsorcion'

const rengFmt = (rengX: number, rengP = 3): string => String(Number(rengX.toPrecision(rengP))).replace('.', ',')
const rengPct = (rengX: number): string => `${Math.round(rengX * 100)} %`

const RENG_FRACCIONES: Record<RengFraccionVisible, { nombre: string; color: string; estilo: RengSerieXY['estilo']; etiqueta: string; pregunta: string }> = {
  pendiente: { nombre: 'Pendiente de absorber', color: 'var(--warn)', estilo: 'punteada', etiqueta: 'pendiente', pregunta: '¿Cuánto queda por absorber?' },
  central: { nombre: 'En circulación', color: 'var(--accent)', estilo: 'continua', etiqueta: 'en circulación', pregunta: '' },
  retirada: { nombre: 'Retirada por el cuerpo', color: 'var(--ok)', estilo: 'trazo-punto', etiqueta: 'retirada', pregunta: '¿Cuánto ha retirado ya el cuerpo?' }
}

interface RengProps {
  estado: RengEstadoAbsorcion
  onEstado: (rengF: (rengE: RengEstadoAbsorcion) => RengEstadoAbsorcion) => void
  contexto?: string
}

function RengVelocidad({ id: rengId, nombre: rengNombre, explicacion: rengExplicacion, valor: rengValor, onCambio: rengOnCambio }: { id: string; nombre: string; explicacion: string; valor: number; onCambio: (rengV: number) => void }): React.JSX.Element {
  return (
    <div className="field abs-velocidad">
      <label htmlFor={rengId}>
        {rengNombre}: <b>{rengDescribirVelocidad(rengValor)}</b>
      </label>
      <input id={rengId} type="range" min={RENG_K_DESLIZADOR.min} max={RENG_K_DESLIZADOR.max} step={RENG_K_DESLIZADOR.paso} value={rengValor} onChange={(rengE) => rengOnCambio(Number(rengE.target.value))} aria-valuetext={`${rengDescribirVelocidad(rengValor)} (${rengFmt(rengValor)} por unidad de tiempo)`} aria-describedby={`${rengId}-ayuda`} />
      <small id={`${rengId}-ayuda`} className="muted">
        {rengExplicacion}
      </small>
    </div>
  )
}

function RengNumero({ id: rengId, etiqueta: rengEtiqueta, unidad: rengUnidad, valor: rengValor, min: rengMin, max: rengMax, paso: rengPaso, onCambio: rengOnCambio }: { id: string; etiqueta: React.ReactNode; unidad: string; valor: number; min: number; max: number; paso: number; onCambio: (rengV: number) => void }): React.JSX.Element {
  const [rengTexto, rengSetTexto] = useState(String(rengValor))
  const [rengEditando, rengSetEditando] = useState(false)
  useEffect(() => {
    if (!rengEditando) rengSetTexto(String(rengValor))
  }, [rengValor, rengEditando])
  const rengN = Number(rengTexto.replace(',', '.'))
  const rengValido = rengTexto.trim() !== '' && Number.isFinite(rengN) && rengN >= rengMin && rengN <= rengMax
  return (
    <div className="field abs-numero">
      <label htmlFor={rengId}>{rengEtiqueta}</label>
      <div className="row" style={{ flexWrap: 'nowrap' }}>
        <input
          id={rengId}
          className="input mono"
          type="text"
          inputMode="decimal"
          value={rengTexto}
          aria-invalid={!rengValido}
          aria-describedby={`${rengId}-u`}
          onFocus={() => rengSetEditando(true)}
          onBlur={() => {
            rengSetEditando(false)
            rengSetTexto(String(rengValor))
          }}
          onKeyDown={(rengEv) => {
            if (rengEv.key !== 'ArrowUp' && rengEv.key !== 'ArrowDown') return
            rengEv.preventDefault()
            const rengSig = Math.min(rengMax, Math.max(rengMin, Number(((rengValido ? rengN : rengValor) + (rengEv.key === 'ArrowUp' ? rengPaso : -rengPaso)).toFixed(4))))
            rengSetTexto(String(rengSig))
            rengOnCambio(rengSig)
          }}
          onChange={(rengEv) => {
            rengSetTexto(rengEv.target.value)
            const rengV = Number(rengEv.target.value.replace(',', '.'))
            if (rengEv.target.value.trim() !== '' && Number.isFinite(rengV) && rengV >= rengMin && rengV <= rengMax) rengOnCambio(rengV)
          }}
        />
        <small id={`${rengId}-u`} className="faint">
          {rengUnidad}
          {!rengValido && <span className="abs-invalido"> · fuera de rango: se mantiene {String(rengValor).replace('.', ',')}</span>}
        </small>
      </div>
    </div>
  )
}

export function RengEjemploAbsorcion({ estado: rengE, onEstado: rengOnEstado, contexto: rengContexto }: RengProps): React.JSX.Element {
  const { ka: rengKa, ke: rengKe, horizonte: rengH } = rengE.ejemplo
  const rengNivel = rengE.nivel
  const rengCurva = useMemo(() => rengCurvas({ ka: rengKa, ke: rengKe }, rengH, 240), [rengKa, rengKe, rengH])
  const rengComp = rengEjemploDeComparacion({ ka: rengKa, ke: rengKe })
  const rengVerComp = rengCompararVisible(rengE)
  const rengCurvaComp = useMemo(() => (rengVerComp ? rengCurvas(rengComp.parametros, rengH, 240) : []), [rengVerComp, rengComp.parametros, rengH])
  const rengVisibles = rengFraccionesVisibles(rengE)
  const rengTitulo = rengNombreEjemplo({ ka: rengKa, ke: rengKe })
  const rengPico = rengPicoEjemplo({ ka: rengKa, ke: rengKe }, rengH)
  const rengPicoComp = rengVerComp ? rengPicoEjemplo(rengComp.parametros, rengH) : null

  const rengSeries: RengSerieXY[] = [
    ...rengVisibles.map((rengF) => ({
      nombre: rengVisibles.length > 1 ? RENG_FRACCIONES[rengF].nombre : `${RENG_FRACCIONES.central.nombre} · ${rengTitulo.toLowerCase()}`,
      puntos: rengCurva.map((rengP) => [rengP.t, rengP[rengF]] as [number, number]),
      color: RENG_FRACCIONES[rengF].color,
      estilo: RENG_FRACCIONES[rengF].estilo,
      etiqueta: rengVisibles.length > 1 || rengVerComp ? RENG_FRACCIONES[rengF].etiqueta : undefined
    })),
    ...(rengVerComp ? [{ nombre: `En circulación · ${rengComp.nombre.toLowerCase()}`, puntos: rengCurvaComp.map((rengP) => [rengP.t, rengP.central] as [number, number]), color: 'var(--lab)', estilo: 'discontinua' as const, etiqueta: rengComp.nombre.replace('Ejemplo de ', '') }] : [])
  ]
  const rengMarcas = [
    ...(rengPico.dentro && rengKe > 0 && rengKa > 0 ? [{ x: rengPico.t, y: rengPico.fraccion, etiqueta: 'pico' }] : []),
    ...(rengPicoComp?.dentro ? [{ x: rengPicoComp.t, y: rengPicoComp.fraccion, etiqueta: 'pico' }] : [])
  ]

  return (
    <section className="card stack tight abs-ejemplo" aria-labelledby="abs-ejemplo-titulo">
      <div className="row abs-cabecera-ejemplo">
        <h3 id="abs-ejemplo-titulo" className="abs-titulo">
          {rengTitulo}
        </h3>
        <span className="badge abs-insignia-ejemplo">Ejemplo didáctico</span>
      </div>
      <p className="sm muted" role="note">
        {rengContexto ?? 'No representa a ningún medicamento ni a ninguna persona.'} La dosis se cuenta como 1 (fracciones de la dosis) y el tiempo va en unidades normalizadas, sin horas reales.
      </p>

      <div className="abs-figura">
        <div className="abs-figura-grafica">
          <RengGraficaXY
            descripcion={`${rengTitulo}. Fracción de la dosis frente al tiempo normalizado, de 0 a ${rengFmt(rengH)}. ${rengFrasePico({ ka: rengKa, ke: rengKe }, rengH)}`}
            tituloX="tiempo (unidades normalizadas)"
            tituloY="fracción de la dosis"
            x={[0, rengH]}
            y={[0, 1]}
            series={rengSeries}
            marcas={rengMarcas}
          />
        </div>
        <div className="abs-figura-lateral stack tight">
          <p className="abs-frase-pico" role="status">
            {rengFrasePico({ ka: rengKa, ke: rengKe }, rengH)}
          </p>
          {rengNivel === 'basico' && (
            <div className="row abs-botones" role="group" aria-label="Cambiar la velocidad de absorción del ejemplo">
              <button type="button" className="btn" onClick={() => rengOnEstado(rengAbsorcionMasLenta)} disabled={!rengPuedeFrenar(rengKa)}>
                ◀ Absorción más lenta
              </button>
              <button type="button" className="btn" onClick={() => rengOnEstado(rengAbsorcionMasRapida)} disabled={!rengPuedeAcelerar(rengKa)}>
                Absorción más rápida ▶
              </button>
              <span className="sm muted" aria-live="polite">
                Absorción {rengDescribirVelocidad(rengKa)} · eliminación {rengDescribirVelocidad(rengKe)}
              </span>
            </div>
          )}
          {rengNivel !== 'basico' && (
            <div className="abs-velocidades stack tight">
              <RengVelocidad id="abs-vel-absorcion" nombre="Velocidad de absorción" explicacion="Lo rápido que el fármaco pasa del tubo digestivo a la sangre. Si sube, el pico llega antes y es más alto." valor={rengKa} onCambio={(rengV) => rengOnEstado((rengX) => rengAjustar(rengX, { ka: rengV }))} />
              <RengVelocidad id="abs-vel-eliminacion" nombre="Velocidad de eliminación" explicacion="Lo rápido que el cuerpo lo retira de la sangre. Si sube, el pico es más bajo y la curva cae antes." valor={rengKe} onCambio={(rengV) => rengOnEstado((rengX) => rengAjustar(rengX, { ke: rengV }))} />
            </div>
          )}
          {rengNivel !== 'basico' && (
            <div className="stack tight">
              <label className="sm abs-casilla">
                <input type="checkbox" checked={rengE.comparar} onChange={(rengEv) => rengOnEstado((rengX) => ({ ...rengX, comparar: rengEv.target.checked }))} /> Comparar con el {rengComp.nombre.toLowerCase()} (línea discontinua)
              </label>
              {rengVerComp && rengPicoComp && (
                <span className="sm muted">
                  Pico: {rengPico.dentro ? `${rengPct(rengPico.fraccion)} de la dosis en t ≈ ${rengFmt(rengPico.analitico ?? rengPico.t, 2)}` : 'fuera de la gráfica'} ({rengTitulo.toLowerCase()}) frente a {rengPicoComp.dentro ? `${rengPct(rengPicoComp.fraccion)} en t ≈ ${rengFmt(rengPicoComp.analitico ?? rengPicoComp.t, 2)}` : 'fuera de la gráfica'} ({rengComp.nombre.toLowerCase()}).
                </span>
              )}
              <div className="row abs-botones">
                <button type="button" className="btn ghost sm" onClick={() => rengOnEstado((rengX) => rengUsarEjemplo(rengX, RENG_EJEMPLO_RAPIDO))}>
                  Usar el ejemplo de absorción rápida
                </button>
                <button type="button" className="btn ghost sm" onClick={() => rengOnEstado((rengX) => rengUsarEjemplo(rengX, RENG_EJEMPLO_LENTO))}>
                  Usar el ejemplo de absorción lenta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {rengNivel === 'avanzado' && (
        <div className="abs-numeros" role="group" aria-label="Parámetros exactos del ejemplo">
          <RengNumero id="abs-ka" etiqueta={<>Constante de absorción k<sub>a</sub></>} unidad="1/u. t." valor={rengKa} min={RENG_LIMITES_MODELO.kMin} max={RENG_LIMITES_MODELO.kMax} paso={0.05} onCambio={(rengV) => rengOnEstado((rengX) => rengAjustar(rengX, { ka: rengV }))} />
          <RengNumero id="abs-ke" etiqueta={<>Constante de eliminación k<sub>e</sub></>} unidad="1/u. t." valor={rengKe} min={RENG_LIMITES_MODELO.kMin} max={RENG_LIMITES_MODELO.kMax} paso={0.05} onCambio={(rengV) => rengOnEstado((rengX) => rengAjustar(rengX, { ke: rengV }))} />
          <RengNumero id="abs-horizonte" etiqueta="Horizonte temporal" unidad="u. t." valor={rengH} min={RENG_HORIZONTE.min} max={RENG_HORIZONTE.max} paso={1} onCambio={(rengV) => rengOnEstado((rengX) => rengAjustar(rengX, { horizonte: rengV }))} />
          <small className="faint abs-numeros-nota">
            k<sub>a</sub> y k<sub>e</sub> entre {RENG_LIMITES_MODELO.kMin} y {RENG_LIMITES_MODELO.kMax}; horizonte entre {RENG_HORIZONTE.min} y {RENG_HORIZONTE.max}. Los valores fuera de rango no se aplican.
          </small>
        </div>
      )}

      {rengNivel === 'avanzado' && (
        <>
          <fieldset className="abs-preguntas">
            <legend className="sm">
              <b>Añadir otras fracciones de la dosis</b>
            </legend>
            {(['pendiente', 'retirada'] as const).map((rengF) => (
              <label key={rengF} className="sm abs-casilla">
                <input type="checkbox" checked={rengE.fracciones.has(rengF)} onChange={() => rengOnEstado((rengX) => rengAlternarFraccion(rengX, rengF))} /> {RENG_FRACCIONES[rengF].pregunta} <span className="faint">({RENG_FRACCIONES[rengF].nombre.toLowerCase()})</span>
              </label>
            ))}
            <small className="faint">Pendiente de absorber + en circulación + retirada = 1 en cada instante.</small>
          </fieldset>
          <details className="panel-seccion">
            <summary>Tabla de valores</summary>
            <div className="cm-tabla-envoltura">
              <table className="table abs-tabla">
                <caption className="sr-only">Fracciones de la dosis del {rengTitulo.toLowerCase()} en el tiempo</caption>
                <thead>
                  <tr>
                    <th scope="col">t (u. t.)</th>
                    <th scope="col">Pendiente</th>
                    <th scope="col">En circulación</th>
                    <th scope="col">Retirada</th>
                    <th scope="col">Suma</th>
                  </tr>
                </thead>
                <tbody>
                  {rengTablaValores({ ka: rengKa, ke: rengKe }, rengH).map((rengF) => (
                    <tr key={rengF.t}>
                      <th scope="row" className="mono">{rengFmt(rengF.t)}</th>
                      <td className="mono">{rengF.pendiente.toFixed(3).replace('.', ',')}</td>
                      <td className="mono">{rengF.central.toFixed(3).replace('.', ',')}</td>
                      <td className="mono">{rengF.retirada.toFixed(3).replace('.', ',')}</td>
                      <td className="mono">{(rengF.pendiente + rengF.central + rengF.retirada).toFixed(3).replace('.', ',')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
          <details className="panel-seccion">
            <summary>Ecuaciones y supuestos</summary>
            <div className="stack tight sm abs-ecuaciones">
              <span>Un compartimento con absorción y eliminación de primer orden. P: pendiente de absorber; C: en circulación; R: retirada.</span>
              <span className="mono">dP/dt = −kₐ·P · dC/dt = kₐ·P − kₑ·C · dR/dt = kₑ·C · P(0) = 1, C(0) = R(0) = 0</span>
              <span className="mono">P = e^(−kₐ·t) · C = kₐ·(e^(−kₑ·t) − e^(−kₐ·t))/(kₐ − kₑ) · si kₐ = kₑ = k: C = k·t·e^(−k·t) · R = 1 − P − C</span>
              <span className="mono">Pico de C en t = ln(kₐ/kₑ)/(kₐ − kₑ) · si kₐ = kₑ = k: t = 1/k</span>
              <span>Supuestos: toda la dosis llega a absorberse y sin retraso; un solo compartimento bien mezclado; velocidades proporcionales a la cantidad; constantes que no cambian con el tiempo. Sirve para entender la forma de la curva, no para calcular dosis ni predecir lo que le ocurre a una persona.</span>
              <span className="faint">Comprobado contra una integración numérica independiente (RK4) en las pruebas de la aplicación (tests/cuerpo/cuerpo-modelo-absorcion.test.ts). Marco general: Manual MSD, «Overview of Pharmacokinetics».</span>
            </div>
          </details>
        </>
      )}
    </section>
  )
}
