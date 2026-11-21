import { useMemo } from 'react'
import RengCombobox, { type RengOpcionCombobox } from '@/shell/Combobox'
import { RENG_CURVAS, RENG_INDICE } from '../datos/catalogoDemanda'
import { rengBuscarEnIndice } from '../datos/indice'
import type { RengPresentacion } from '../datos/modelo'
import { rengConModo, RENG_NIVELES_ABSORCION, type RengEstadoAbsorcion, type RengNivelAbsorcion } from '../nucleo/estadoAbsorcion'
import { rengEvidenciaAbsorcion, RENG_TITULO_EVIDENCIA } from '../nucleo/evidenciaAbsorcion'
import { RengAbsorcionMedicamento } from './AbsorcionMedicamento'
import { useRengFicha } from './useFicha'
import { RengEjemploAbsorcion } from './EjemploAbsorcion'

const RENG_LIBERACION_CORTA: Record<RengPresentacion['liberacion'], string> = {
  inmediata: 'liberación inmediata',
  retardada: 'liberación retardada',
  prolongada: 'liberación prolongada',
  'no declarada': 'liberación no declarada'
}

export const rengEtiquetaPresentacion = (rengP: RengPresentacion): string => `${rengP.producto} · ${rengP.forma.toLowerCase()}, ${RENG_LIBERACION_CORTA[rengP.liberacion]} · ${rengP.mercado}`

interface RengProps {
  estado: RengEstadoAbsorcion
  onEstado: (rengF: (rengE: RengEstadoAbsorcion) => RengEstadoAbsorcion) => void
  onNivel: (rengN: RengNivelAbsorcion) => void
  activoId: string | null
  presentacionId: string | null
  onActivo: (rengId: string) => void
  onPresentacion: (rengId: string) => void
  onVerFicha: () => void
  onRecorrido: (rengPresentacionId: string) => void
}

export function RengVistaModelo({ estado: rengE, onEstado: rengOnEstado, onNivel: rengOnNivel, activoId: rengActivoId, presentacionId: rengPresentacionId, onActivo: rengOnActivo, onPresentacion: rengOnPresentacion, onVerFicha: rengOnVerFicha, onRecorrido: rengOnRecorrido }: RengProps): React.JSX.Element {
  const rengF = useRengFicha(rengActivoId).ficha
  const rengP = rengF ? (rengF.presentaciones.find((rengX) => rengX.id === rengPresentacionId) ?? rengF.presentaciones[0]!) : undefined
  const rengEv = useMemo(() => (rengF && rengP ? rengEvidenciaAbsorcion(rengF, rengP, RENG_CURVAS) : null), [rengF, rengP])
  const rengOpciones = useMemo<RengOpcionCombobox<string>[]>(
    () =>
      RENG_INDICE.activos.map((rengX) => ({
        id: rengX.id,
        valor: rengX.id,
        grupo: '',
        texto: rengX.nombre,
        detalle: [rengX.clase, ...new Set(rengX.presentaciones.map((rengY) => rengY.producto.split(' · ')[0]!))].join(' · ')
      })),
    []
  )
  const rengFiltrar = (rengQ: string): Array<{ entrada: RengOpcionCombobox<string>; puntos: number; indice: number }> =>
    rengBuscarEnIndice(RENG_INDICE, rengQ)
      .slice(0, 40)
      .map((rengX, rengI) => ({ entrada: rengOpciones.find((rengO) => rengO.id === rengX.id)!, puntos: 1, indice: rengI }))
  const rengModo = rengE.modo === 'medicamento' && !rengF ? 'inicio' : rengE.modo

  return (
    <div className="cm-pagina abs-pagina">
      <div className="stack cm-pagina-contenido">
        <header className="abs-encabezado">
          <div className="stack tight abs-encabezado-texto">
            <h2 className="abs-h2">Modelo general de absorción</h2>
            <span className="sm muted">Elige un medicamento o un ejemplo, mira qué ocurre y después explora los detalles.</span>
          </div>
          <div className="segmentado abs-niveles" role="group" aria-label="Nivel de detalle del modelo de absorción">
            {RENG_NIVELES_ABSORCION.map((rengN) => (
              <button key={rengN.id} type="button" aria-pressed={rengE.nivel === rengN.id} title={rengN.detalle} onClick={() => rengOnNivel(rengN.id)}>
                {rengN.nombre}
              </button>
            ))}
          </div>
        </header>

        <section className="card abs-eleccion" aria-label="Elegir un medicamento o un ejemplo">
          <div className="abs-eleccion-buscar">
            <RengCombobox
              etiqueta="Buscar un medicamento"
              opciones={rengOpciones}
              seleccion={rengModo === 'medicamento' ? (rengF?.activo.id ?? null) : null}
              onElegir={(rengO) => {
                rengOnActivo(rengO.id)
                rengOnEstado((rengX) => rengConModo(rengX, 'medicamento'))
              }}
              filtrar={rengFiltrar}
              placeholder="Principio activo, sinónimo o marca: «acetaminofen», «Brilinta»…"
              sinResultados={(rengQ) => `Ningún medicamento del catálogo coincide con «${rengQ}».`}
              idEntrada="abs-buscar"
              mostrarDetalle={false}
            />
          </div>
          {rengModo === 'medicamento' && rengF && rengP && rengF.presentaciones.length > 1 && (
            <div className="field abs-eleccion-presentacion">
              <label htmlFor="abs-presentacion">Presentación: forma y liberación</label>
              <select id="abs-presentacion" className="select" value={rengP.id} onChange={(rengEv2) => rengOnPresentacion(rengEv2.target.value)}>
                {rengF.presentaciones.map((rengX) => (
                  <option key={rengX.id} value={rengX.id}>
                    {rengEtiquetaPresentacion(rengX)}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="abs-eleccion-ejemplo">
            <span className="label" aria-hidden="true">
              o bien
            </span>
            <button type="button" className={`btn${rengModo === 'ejemplo' ? ' primary' : ''}`} aria-pressed={rengModo === 'ejemplo'} onClick={() => rengOnEstado((rengX) => rengConModo(rengX, 'ejemplo'))}>
              Probar un ejemplo
            </button>
          </div>
        </section>

        {rengModo === 'inicio' && (
          <div className="abs-vacio stack tight">
            <p>Busca un medicamento para ver qué dice su fuente sobre cómo se absorbe, o prueba un ejemplo para ver cómo cambia la curva al cambiar la velocidad de absorción.</p>
            <p className="faint sm">Herramienta educativa: no calcula dosis ni predice lo que le ocurrirá a una persona.</p>
          </div>
        )}

        {rengModo === 'ejemplo' && <RengEjemploAbsorcion estado={rengE} onEstado={rengOnEstado} />}

        {rengModo === 'medicamento' && rengF && rengP && rengEv && (
          <>
            <section className="abs-medicamento-cabecera" aria-label="Medicamento elegido">
              <div className="stack tight">
                <h3 className="abs-med-nombre">
                  {rengF.activo.nombre} <span className="sm muted">· {rengP.producto}</span>
                </h3>
                <span className="sm muted">
                  {rengP.forma} · {RENG_LIBERACION_CORTA[rengP.liberacion]} · evidencia: <b>{RENG_TITULO_EVIDENCIA[rengEv.nivel].toLowerCase()}</b>
                </span>
              </div>
              <div className="row abs-enlaces">
                <button type="button" className="btn sm" onClick={rengOnVerFicha}>
                  ← Ver la ficha
                </button>
                <button type="button" className="btn sm" onClick={() => rengOnRecorrido(rengP.id)}>
                  Iniciar el recorrido en el atlas
                </button>
              </div>
            </section>
            <RengAbsorcionMedicamento key={`${rengF.activo.id}|${rengP.id}`} f={rengF} p={rengP} evidencia={rengEv} estado={rengE} onEstado={rengOnEstado} />
          </>
        )}
        <span className="faint sm">Contenido educativo con fuentes citadas. No sustituye a la ficha técnica ni al consejo de un profesional, no da dosis y no predice lo que le ocurrirá a una persona.</span>
      </div>
    </div>
  )
}
