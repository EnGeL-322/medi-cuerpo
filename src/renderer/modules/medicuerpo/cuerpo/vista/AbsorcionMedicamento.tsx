import { RengGraficaXY, type RengMarcador, type RengSerieXY } from '../../vista/GraficaXY'
import { rengFuente } from '../datos/catalogoDemanda'
import { rengRecorridoDe } from '../datos/fichas'
import type { RengCifra, RengCurvaEstudio, RengFichaFarmaco, RengPresentacion, RengSerieEstudio } from '../datos/modelo'
import type { RengEstadoAbsorcion, RengNivelAbsorcion } from '../nucleo/estadoAbsorcion'
import { rengComparablesCon, rengComparacion, rengCurvaModelo, rengMaximoObservado, rengSeriesPorAnalito, RENG_TITULO_EVIDENCIA, type RengEvidenciaAbsorcion } from '../nucleo/evidenciaAbsorcion'
import { RengEjemploAbsorcion } from './EjemploAbsorcion'
import { RengCita, RengFuenteCorta, RengLineaFuente } from './Evidencia'

const RENG_LIBERACION: Record<RengPresentacion['liberacion'], string> = {
  inmediata: 'liberación inmediata',
  retardada: 'liberación retardada (gastrorresistente)',
  prolongada: 'liberación prolongada',
  'no declarada': 'la fuente no declara una liberación modificada'
}
const RENG_NOMBRE_CORTO: Partial<Record<RengCifra['magnitud'], string>> = { tmax: 'Tiempo hasta el pico', cmax: 'Concentración máxima', semivida: 'Semivida', biodisponibilidad: 'Biodisponibilidad', auc: 'Exposición total (AUC)' }
const RENG_MARCADORES: RengMarcador[] = ['circulo', 'cuadrado', 'triangulo']
const RENG_COLORES = ['var(--accent)', 'var(--lab)', 'var(--warn)']
const rengFmt = (rengX: number): string => String(rengX).replace('.', ',')

interface RengProps {
  f: RengFichaFarmaco
  p: RengPresentacion
  evidencia: RengEvidenciaAbsorcion
  estado: RengEstadoAbsorcion
  onEstado: (rengF: (rengE: RengEstadoAbsorcion) => RengEstadoAbsorcion) => void
}

function RengContexto({ c: rengC, sinAnalito: rengSinAnalito = false }: { c: RengCifra; sinAnalito?: boolean }): React.JSX.Element {
  const rengPartes = [!rengSinAnalito && rengC.analito && `analito: ${rengC.analito}`, rengC.poblacion && `población: ${rengC.poblacion}`, rengC.condiciones && `condiciones: ${rengC.condiciones}`, rengC.presentacion && `presentación: ${rengC.presentacion}`, rengC.origen === 'otra-presentacion' && 'dato de otra presentación', rengC.origen === 'otra-via' && 'dato de otra vía de administración'].filter(Boolean)
  return <span className="faint sm">{rengPartes.length ? rengPartes.join(' · ') : 'Sin población ni condiciones indicadas en la fuente.'}</span>
}

function RengTarjetas({ cifras: rengCifras, nivel: rengNivel }: { cifras: RengCifra[]; nivel: RengNivelAbsorcion }): React.JSX.Element {
  const rengVer = rengNivel === 'basico' ? rengCifras.filter((rengC) => ['tmax', 'cmax', 'semivida'].includes(rengC.magnitud)).slice(0, 3) : rengCifras
  return (
    <ul className="abs-tarjetas" aria-label="Resultados de la fuente">
      {(rengVer.length ? rengVer : rengCifras.slice(0, 3)).map((rengC, rengI) => (
        <li key={rengI} className="abs-tarjeta">
          <span className="cm-etq">{rengNivel === 'basico' ? (RENG_NOMBRE_CORTO[rengC.magnitud] ?? rengC.nombre) : rengC.nombre}</span>
          <b className="abs-valor">
            {rengC.valor} <span className="abs-unidad">{rengC.unidad}</span>
          </b>
          {rengC.analito && <span className="sm">{rengC.analito}</span>}
          {rengNivel !== 'basico' && (
            <>
              <RengContexto c={rengC} sinAnalito />
              {rengNivel === 'avanzado' ? <RengCita r={rengC.ref} /> : <RengFuenteCorta r={rengC.ref} />}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

function RengTablaCifras({ cifras: rengCifras, titulo: rengTitulo }: { cifras: RengCifra[]; titulo: string }): React.JSX.Element {
  return (
    <div className="cm-tabla-envoltura">
      <table className="table cm-cifras">
        <caption className="sr-only">{rengTitulo}</caption>
        <thead>
          <tr>
            <th scope="col">Magnitud</th>
            <th scope="col">Valor</th>
            <th scope="col">Contexto y fuente</th>
          </tr>
        </thead>
        <tbody>
          {rengCifras.map((rengC, rengI) => (
            <tr key={rengI}>
              <th scope="row">{rengC.nombre}</th>
              <td className="mono">
                {rengC.valor} {rengC.unidad}
              </td>
              <td>
                <RengContexto c={rengC} />
                <RengCita r={rengC.ref} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const rengSerieXY = (rengS: RengSerieEstudio, rengI: number, rengConIntervalos: boolean): RengSerieXY => ({
  nombre: `${rengS.nombre} (${rengS.estadistico.toLowerCase()})`,
  puntos: rengS.puntos.map((rengP) => [rengP.t, rengP.c]),
  color: RENG_COLORES[rengI % RENG_COLORES.length]!,
  estilo: rengI === 0 ? 'continua' : 'discontinua',
  marcador: RENG_MARCADORES[rengI % RENG_MARCADORES.length],
  intervalos: rengConIntervalos ? rengS.puntos.filter((rengP) => rengP.intervalo).map((rengP) => [rengP.t, rengP.intervalo![0], rengP.intervalo![1]]) : undefined
})

function RengGraficaSeries({ curva: rengC, series: rengSeries, intervalos: rengIntervalos }: { curva: RengCurvaEstudio; series: RengSerieEstudio[]; intervalos: boolean }): React.JSX.Element {
  const rengTMax = Math.max(...rengSeries.flatMap((rengS) => rengS.puntos.map((rengP) => rengP.t)))
  const rengDesc = rengSeries.map((rengS) => `${rengS.nombre}: ${rengS.puntos.map((rengP) => `${rengFmt(rengP.c)} ${rengC.unidades.concentracion} a las ${rengFmt(rengP.t)} ${rengC.unidades.tiempo}`).join('; ')}`).join('. ')
  return (
    <RengGraficaXY
      descripcion={`Concentraciones medidas en ${rengC.matriz} (${rengC.unidades.concentracion}) frente al tiempo (${rengC.unidades.tiempo}). ${rengDesc}.`}
      tituloX={`tiempo desde la toma (${rengC.unidades.tiempo})`}
      tituloY={`concentración (${rengC.unidades.concentracion})`}
      x={[0, rengTMax * 1.1]}
      series={rengSeries.map((rengS, rengI) => rengSerieXY(rengS, rengI, rengIntervalos))}
      notaLeyenda="Los símbolos son valores medidos; la línea solo los une."
    />
  )
}

function RengTablaSerie({ curva: rengC, serie: rengS }: { curva: RengCurvaEstudio; serie: RengSerieEstudio }): React.JSX.Element {
  return (
    <div className="cm-tabla-envoltura">
      <table className="table abs-tabla">
        <caption className="sm abs-caption">
          {rengS.nombre} · {rengS.analito} · {rengS.estadistico}
        </caption>
        <thead>
          <tr>
            <th scope="col">Tiempo ({rengC.unidades.tiempo})</th>
            <th scope="col">Concentración ({rengC.unidades.concentracion})</th>
            <th scope="col">Intervalo</th>
          </tr>
        </thead>
        <tbody>
          {rengS.puntos.map((rengP) => (
            <tr key={rengP.t}>
              <th scope="row" className="mono">{rengFmt(rengP.t)}</th>
              <td className="mono">{rengFmt(rengP.c)}</td>
              <td className="mono">{rengP.intervalo ? `${rengFmt(rengP.intervalo[0])} – ${rengFmt(rengP.intervalo[1])}` : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RengFrasePicoSerie({ curva: rengC, serie: rengS }: { curva: RengCurvaEstudio; serie: RengSerieEstudio }): React.JSX.Element {
  const rengRol = rengS.rol
  const rengTmax = rengC.resultados.find((rengX) => rengX.magnitud === 'tmax' && (rengRol === 'original' ? !/metabolito/i.test(rengX.analito ?? '') : /metabolito/i.test(rengX.analito ?? '')))
  const rengMax = rengMaximoObservado(rengS)
  return (
    <p className="abs-frase-pico" role="status">
      El pico es el momento en que la concentración en la sangre es más alta.{' '}
      {rengTmax ? `En este estudio llegó, como mediana, a las ${rengTmax.valor.split(' (')[0]} ${rengTmax.unidad}.` : ''}
      {rengMax ? ` El valor más alto de esta tabla es ${rengFmt(rengMax.c)} ${rengC.unidades.concentracion} a las ${rengFmt(rengMax.t)} ${rengC.unidades.tiempo}.` : ''}
    </p>
  )
}

function RengVistaSerie({ f: rengF, curva: rengC, estado: rengE, onEstado: rengOnEstado }: { f: RengFichaFarmaco; curva: RengCurvaEstudio; estado: RengEstadoAbsorcion; onEstado: RengProps['onEstado'] }): React.JSX.Element {
  const rengNivel = rengE.nivel
  const rengPrincipal = rengC.series.find((rengS) => rengS.id === rengC.principal) ?? rengC.series[0]!
  const rengOpciones = rengComparablesCon(rengC, rengPrincipal.id)
  const rengComparada = rengNivel !== 'basico' && rengE.serieComparada ? rengC.series.find((rengS) => rengS.id === rengE.serieComparada && rengComparacion(rengC, rengPrincipal.id, rengS.id).ok) : undefined
  const rengMotivo = rengComparada ? rengComparacion(rengC, rengPrincipal.id, rengComparada.id).motivo : null
  const rengGrupos = rengSeriesPorAnalito(rengC)
  const rengFuenteC = rengFuente(rengC.fuente)
  return (
    <div className="stack tight">
      <section className="card stack tight" aria-labelledby="abs-serie-titulo">
        <div className="row abs-cabecera-ejemplo">
          <h3 id="abs-serie-titulo" className="abs-titulo">
            {rengPrincipal.analito}
          </h3>
          <span className="badge abs-insignia-estudio">{RENG_TITULO_EVIDENCIA.serie}</span>
        </div>
        <p className="sm muted">
          {rengC.productoEstudio}. {rengC.poblacion}, {rengNivel === 'basico' ? 'dosis única en ayunas' : rengC.condiciones.charAt(0).toLowerCase() + rengC.condiciones.slice(1)}
        </p>
        <div className="abs-figura">
          <div className="abs-figura-grafica">
            <RengGraficaSeries curva={rengC} series={rengComparada ? [rengPrincipal, rengComparada] : [rengPrincipal]} intervalos={rengNivel === 'avanzado'} />
          </div>
          <div className="abs-figura-lateral stack tight">
            <RengFrasePicoSerie curva={rengC} serie={rengPrincipal} />
            {rengNivel !== 'basico' && rengOpciones.length > 0 && (
              <div className="stack tight">
                <label className="sm abs-casilla">
                  <input type="checkbox" checked={!!rengComparada} onChange={(rengEv) => rengOnEstado((rengX) => ({ ...rengX, serieComparada: rengEv.target.checked ? rengOpciones[0]!.id : null }))} /> Añadir comparación: {rengOpciones[0]!.nombre.toLowerCase()} (mismo estudio)
                </label>
                {rengMotivo && <span className="sm muted">Comparable porque: {rengMotivo}</span>}
              </div>
            )}
            <span className="faint sm">
              Fuente: <RengLineaFuente f={rengFuenteC} seccion={rengPrincipal.ref.sec} />
            </span>
          </div>
        </div>
        {rengNivel !== 'basico' && <RengCita r={rengPrincipal.ref} />}
      </section>

      {rengNivel !== 'basico' && (
        <section className="card stack tight" aria-label="Resultados del estudio">
          <b className="sm">Resultados del estudio (tabla 1 del artículo)</b>
          <RengTarjetas cifras={rengC.resultados.filter((rengX) => rengX.magnitud !== 'auc' || rengNivel === 'avanzado')} nivel={rengNivel} />
          <span className="faint sm">Valores del grupo estudiado; no sirven para calcular dosis ni para predecir lo que le ocurrirá a una persona.</span>
        </section>
      )}

      {rengNivel === 'avanzado' && (
        <>
          {rengGrupos
            .filter((rengG) => rengG.analito !== rengPrincipal.analito)
            .map((rengG) => (
              <section key={rengG.analito} className="card stack tight" aria-label={rengG.analito}>
                <b className="sm">{rengG.analito}</b>
                <span className="sm muted">Otra sustancia: se muestra en su propia gráfica y no se compara con el fármaco original.</span>
                <RengGraficaSeries curva={rengC} series={rengG.series} intervalos />
              </section>
            ))}
          <details className="panel-seccion" open>
            <summary>Estudio: diseño, población, método y límites</summary>
            <dl className="cm-dl sm abs-estudio">
              <dt>Producto del estudio</dt>
              <dd>{rengC.productoEstudio}</dd>
              <dt>Relación con la presentación</dt>
              <dd>{rengC.relacion}</dd>
              <dt>Diseño</dt>
              <dd>{rengC.diseno}</dd>
              <dt>Población</dt>
              <dd>
                {rengC.poblacion} (n = {rengC.n})
              </dd>
              <dt>Condiciones</dt>
              <dd>{rengC.condiciones}</dd>
              <dt>Método</dt>
              <dd>{rengC.metodo}</dd>
              <dt>Muestra</dt>
              <dd>
                {rengC.matriz}; unidades: {rengC.unidades.concentracion} y {rengC.unidades.tiempo}
              </dd>
            </dl>
            <b className="sm">Límites de aplicación</b>
            <ul className="sm abs-limites">
              {rengC.limites.map((rengL) => (
                <li key={rengL}>{rengL}</li>
              ))}
            </ul>
            <b className="sm">Citas que respaldan el diseño</b>
            {rengC.apoyos.map((rengA) => (
              <div key={rengA.que} className="sm">
                <b>{rengA.que}:</b> <RengCita r={rengA.ref} />
              </div>
            ))}
            {rengFuenteC && (
              <p className="faint sm">
                {rengFuenteC.autores}. {rengFuenteC.titulo}. {rengFuenteC.organismo}. Licencia: {rengFuenteC.licencia}. <span className="mono cm-url">{rengFuenteC.url}</span>
              </p>
            )}
          </details>
          <details className="panel-seccion">
            <summary>Tablas de valores ({rengC.series.length})</summary>
            {rengC.series.map((rengS) => (
              <RengTablaSerie key={rengS.id} curva={rengC} serie={rengS} />
            ))}
          </details>
          <details className="panel-seccion">
            <summary>Todos los resultados ({rengC.resultados.length})</summary>
            <RengTablaCifras cifras={rengC.resultados} titulo={`Resultados del estudio para ${rengF.activo.nombre.toLowerCase()}`} />
          </details>
        </>
      )}
    </div>
  )
}

function RengVistaModeloPublicado({ curva: rengC, estado: rengE }: { curva: RengCurvaEstudio; estado: RengEstadoAbsorcion }): React.JSX.Element | null {
  const rengM = rengC.modelo
  if (!rengM) return null
  const rengPuntos = rengCurvaModelo(rengM, 24, 240)
  return (
    <section className="card stack tight" aria-labelledby="abs-modelo-titulo">
      <div className="row abs-cabecera-ejemplo">
        <h3 id="abs-modelo-titulo" className="abs-titulo">
          {rengM.analito}
        </h3>
        <span className="badge abs-insignia-estudio">{RENG_TITULO_EVIDENCIA.modelo}</span>
      </div>
      <p className="sm muted">
        Curva calculada con el modelo publicado para {rengM.sujeto}; no son mediciones. {rengC.productoEstudio}.
      </p>
      <RengGraficaXY
        descripcion={`Simulación del modelo publicado: ${rengM.analito} frente al tiempo.`}
        tituloX={`tiempo (${rengC.unidades.tiempo})`}
        tituloY={`concentración (${rengC.unidades.concentracion})`}
        series={[{ nombre: 'Simulación del modelo publicado', puntos: rengPuntos, color: 'var(--accent)', estilo: 'continua' }]}
      />
      {rengE.nivel === 'avanzado' && (
        <dl className="cm-dl sm">
          <dt>Estructura</dt>
          <dd>Un compartimento con absorción y eliminación de primer orden</dd>
          <dt>Parámetros</dt>
          <dd className="mono">
            kₐ = {rengFmt(rengM.parametros.ka)} {rengM.unidadesParametros.ka} · CL/F = {rengFmt(rengM.parametros.cl)} {rengM.unidadesParametros.cl} · V/F = {rengFmt(rengM.parametros.v)} {rengM.unidadesParametros.v}
          </dd>
          <dt>Dosis del estudio</dt>
          <dd>
            {rengFmt(rengM.dosis.valor)} {rengM.dosis.unidad}
          </dd>
        </dl>
      )}
      <RengCita r={rengM.ref} />
    </section>
  )
}

export function RengAbsorcionMedicamento({ f: rengF, p: rengP, evidencia: rengEv, estado: rengE, onEstado: rengOnEstado }: RengProps): React.JSX.Element {
  const rengNivel = rengE.nivel
  const rengDatosAbs = rengRecorridoDe(rengF, rengP).absorcion.datos.filter((rengD) => rengD.alcance !== 'general')
  const rengNoAplica = rengRecorridoDe(rengF, rengP).absorcion.noAplica
  return (
    <div className="stack">
      {rengNoAplica && (
        <div className="notice sm" role="note" data-campo="sin-absorcion">
          <b>En esta vía no hay absorción:</b> {rengNoAplica.motivo}
          <RengCita r={rengNoAplica.ref} />
        </div>
      )}
      <section className="card stack tight" aria-label="Qué ocurre al tomarlo">
        <span className="cm-etq">Qué ocurre en la absorción</span>
        <p className="abs-resumen">{rengEv.resumen}</p>
        {rengNivel !== 'basico' && (
          <dl className="cm-dl sm">
            <dt>Presentación</dt>
            <dd>
              {rengP.producto} · {rengP.mercado}
            </dd>
            <dt>Forma</dt>
            <dd>
              {rengP.forma} ({RENG_LIBERACION[rengP.liberacion]}) · {rengP.concentraciones}
            </dd>
            <dt>Datos de</dt>
            <dd>{rengEv.deOtraPresentacion ? `otra presentación del mismo activo: ${rengEv.presentacionDatos.producto}` : 'esta presentación'}</dd>
          </dl>
        )}
        {rengNivel === 'avanzado' && rengDatosAbs.length > 0 && (
          <ul className="cm-datos">
            {rengDatosAbs.map((rengD, rengI) => (
              <li key={rengI} className="sm">
                {rengD.t}
                <RengCita r={rengD.ref} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {rengEv.curva && rengEv.nivel === 'serie' && <RengVistaSerie f={rengF} curva={rengEv.curva} estado={rengE} onEstado={rengOnEstado} />}
      {rengEv.curva && rengEv.nivel === 'modelo' && <RengVistaModeloPublicado curva={rengEv.curva} estado={rengE} />}

      {!rengEv.curva && rengEv.puntuales.length > 0 && (
        <section className="card stack tight" aria-labelledby="abs-puntuales-titulo">
          <div className="row abs-cabecera-ejemplo">
            <h3 id="abs-puntuales-titulo" className="abs-titulo">
              Resultados de la fuente
            </h3>
            <span className="badge abs-insignia-estudio">{RENG_TITULO_EVIDENCIA.puntuales}</span>
          </div>
          <RengTarjetas cifras={rengEv.puntuales} nivel={rengNivel} />
          <p className="abs-frase-pico">
            {rengEv.puntuales.some((rengC) => rengC.magnitud === 'tmax') ? 'El tiempo hasta el pico (Tmax) es lo que tarda la concentración en la sangre en llegar a su valor más alto.' : 'Estos valores resumen cómo se absorbe y cuánto dura en el cuerpo.'} No se dibuja una curva: con valores sueltos no se conoce su forma.
          </p>
          {rengNivel === 'avanzado' && (
            <>
              <span className="faint sm">Generar una curva a partir de estos valores requeriría evidencia adicional (mediciones a distintos tiempos o un modelo publicado con sus parámetros).</span>
              {rengEv.otras.length > 0 && (
                <details className="panel-seccion">
                  <summary>Otros datos farmacocinéticos ({rengEv.otras.length})</summary>
                  <RengTablaCifras cifras={rengEv.otras} titulo={`Otros datos de ${rengF.activo.nombre.toLowerCase()}`} />
                </details>
              )}
            </>
          )}
        </section>
      )}

      {!rengEv.curva && rengEv.puntuales.length === 0 && (
        <>
          <section className="card stack tight" aria-labelledby="abs-insuf-titulo">
            <div className="row abs-cabecera-ejemplo">
              <h3 id="abs-insuf-titulo" className="abs-titulo">
                Sin cifras de absorción
              </h3>
              <span className="badge abs-insignia-estudio">{RENG_TITULO_EVIDENCIA.insuficiente}</span>
            </div>
            <p className="sm">La fuente de esta presentación no da tiempos, concentraciones ni semividas que permitan dibujar o resumir su absorción con números. El resumen de arriba es lo que documenta.</p>
            {rengNivel === 'avanzado' && rengEv.otras.length > 0 && <RengTablaCifras cifras={rengEv.otras} titulo={`Otros datos de ${rengF.activo.nombre.toLowerCase()}`} />}
          </section>
          <RengEjemploAbsorcion estado={rengE} onEstado={rengOnEstado} contexto={`Este ejemplo no representa a ${rengF.activo.nombre.toLowerCase()} ni a ninguna persona.`} />
        </>
      )}
    </div>
  )
}
