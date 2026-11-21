import { useMemo, useState } from 'react'
import { RENG_INDICE } from '../datos/catalogoDemanda'
import { rengConteoFaceta, rengExplicarSinResultados, rengFiltrarIndice, rengFiltrosActivos, rengOpcionesGlobales, RENG_FILTROS_VACIOS, type RengFiltros } from '../nucleo/filtros'
import { RENG_FAMILIAS, RENG_FORMAS_NORMALIZADAS, RENG_VIAS } from '../nucleo/presentaciones'
import { RengListaVirtual } from './ListaVirtual'

const RENG_FILA_ALTO = 46
const rengNum = (rengN: number): string => rengN.toLocaleString('es-ES')

interface RengProps {
  activoId: string | null
  onSeleccionar: (rengActivoId: string, rengPresentacionId: string) => void
}

function RengSelectorFaceta({ etiqueta: rengEtiqueta, valor: rengValor, opciones: rengOpciones, onCambio: rengOnCambio, todas: rengTodas }: { etiqueta: string; valor: string | null; opciones: Array<{ id: string; nombre: string; n: number }>; onCambio: (rengV: string | null) => void; todas: string }): React.JSX.Element {
  return (
    <label className="sm cm-faceta">
      <span>{rengEtiqueta}</span>
      <select className="select" value={rengValor ?? ''} onChange={(rengE) => rengOnCambio(rengE.target.value || null)}>
        <option value="">{rengTodas}</option>
        {rengOpciones.map((rengO) => (
          <option key={rengO.id} value={rengO.id} disabled={rengO.n === 0 && rengO.id !== rengValor}>
            {rengO.nombre} ({rengNum(rengO.n)})
          </option>
        ))}
      </select>
    </label>
  )
}

export function RengPanelBusqueda({ activoId: rengActivoId, onSeleccionar: rengOnSeleccionar }: RengProps): React.JSX.Element {
  const [rengF, rengSetF] = useState<RengFiltros>(RENG_FILTROS_VACIOS)
  const rengGlobales = useMemo(() => rengOpcionesGlobales(RENG_INDICE), [])
  const rengResultado = useMemo(() => rengFiltrarIndice(RENG_INDICE, rengF), [rengF])
  const rengPorFamilia = useMemo(() => rengConteoFaceta(RENG_INDICE, rengF, 'familia'), [rengF])
  const rengPorForma = useMemo(() => rengConteoFaceta(RENG_INDICE, rengF, 'forma'), [rengF])
  const rengPorVia = useMemo(() => rengConteoFaceta(RENG_INDICE, rengF, 'via'), [rengF])
  const rengPorMercado = useMemo(() => rengConteoFaceta(RENG_INDICE, rengF, 'mercado'), [rengF])
  const rengActivos = rengFiltrosActivos(rengF)
  const rengFiltrosDePresentacion = rengActivos.some((rengK) => rengK === 'familia' || rengK === 'forma' || rengK === 'via' || rengK === 'mercado' || rengK === 'conCurva')
  const rengFiltrosAvanzados = rengActivos.filter((rengK) => rengK !== 'q' && rengK !== 'area')
  const rengIndiceActivo = rengActivoId ? rengResultado.activos.findIndex((rengR) => rengR.activo.id === rengActivoId) : -1
  const rengCambiar = (rengCambios: Partial<RengFiltros>): void => rengSetF((rengPrev) => ({ ...rengPrev, ...rengCambios }))
  const rengElegir = (rengI: number): void => {
    const rengR = rengResultado.activos[rengI]
    if (rengR) rengOnSeleccionar(rengR.activo.id, rengR.coincidentes[0]!.id)
  }

  const rengTecla = (rengEv: React.KeyboardEvent<HTMLUListElement>): void => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown', 'PageUp'].includes(rengEv.key) || !rengResultado.activos.length) return
    rengEv.preventDefault()
    const rengN = rengResultado.activos.length
    const rengSalto = rengEv.key === 'PageDown' || rengEv.key === 'PageUp' ? 8 : 1
    const rengBase = Math.max(0, rengIndiceActivo)
    const rengJ = rengEv.key === 'Home' ? 0 : rengEv.key === 'End' ? rengN - 1 : Math.min(rengN - 1, Math.max(0, rengIndiceActivo < 0 ? 0 : rengBase + (rengEv.key === 'ArrowDown' || rengEv.key === 'PageDown' ? rengSalto : -rengSalto)))
    rengElegir(rengJ)
  }

  const rengOpciones = (rengMapa: Map<string, number>, rengIds: string[], rengNombre: (rengId: string) => string): Array<{ id: string; nombre: string; n: number }> => rengIds.map((rengId) => ({ id: rengId, nombre: rengNombre(rengId), n: rengMapa.get(rengId) ?? 0 }))

  return (
    <aside className="cm-med-lista" aria-label="Buscar un medicamento">
      <label className="sm" htmlFor="cm-buscar-med">
        <b>1. Busca un medicamento</b>
      </label>
      <input id="cm-buscar-med" className="input" type="search" placeholder="Nombre, clase o marca: «estatina», «Zoloft»…" value={rengF.q} onChange={(rengE) => rengCambiar({ q: rengE.target.value })} />
      <select className="select" aria-label="Filtrar por área" value={rengF.area ?? ''} onChange={(rengE) => rengCambiar({ area: rengE.target.value || null })}>
        <option value="">Todas las áreas</option>
        {rengGlobales.areas.map((rengX) => (
          <option key={rengX} value={rengX}>
            {rengX}
          </option>
        ))}
      </select>
      <details className="cm-filtros" open={rengFiltrosAvanzados.length > 0 ? true : undefined}>
        <summary>Más filtros{rengFiltrosAvanzados.length ? ` (${rengFiltrosAvanzados.length})` : ''}</summary>
        <div className="stack tight">
          <RengSelectorFaceta etiqueta="Tipo" valor={rengF.familia} todas="Todos los tipos" opciones={rengOpciones(rengPorFamilia, rengGlobales.familias, (rengId) => RENG_FAMILIAS[rengId as keyof typeof RENG_FAMILIAS])} onCambio={(rengV) => rengCambiar({ familia: rengV as RengFiltros['familia'] })} />
          <RengSelectorFaceta etiqueta="Forma" valor={rengF.forma} todas="Todas las formas" opciones={rengOpciones(rengPorForma, rengGlobales.formas, (rengId) => RENG_FORMAS_NORMALIZADAS[rengId]?.nombre ?? rengId)} onCambio={(rengV) => rengCambiar({ forma: rengV })} />
          <RengSelectorFaceta etiqueta="Vía" valor={rengF.via} todas="Todas las vías" opciones={rengOpciones(rengPorVia, rengGlobales.vias, (rengId) => RENG_VIAS[rengId as keyof typeof RENG_VIAS].nombre)} onCambio={(rengV) => rengCambiar({ via: rengV as RengFiltros['via'] })} />
          <RengSelectorFaceta etiqueta="Mercado" valor={rengF.mercado} todas="Todos los mercados" opciones={rengOpciones(rengPorMercado, rengGlobales.mercados, (rengId) => rengId)} onCambio={(rengV) => rengCambiar({ mercado: rengV as RengFiltros['mercado'] })} />
          <label className="sm cm-faceta cm-faceta-ancha">
            <span>Clase (escribe parte del nombre)</span>
            <input className="input" type="search" list="cm-clases" value={rengF.clase} onChange={(rengE) => rengCambiar({ clase: rengE.target.value })} placeholder="«estatina», «opioide»…" />
          </label>
          <datalist id="cm-clases">
            {rengGlobales.clases.map((rengC) => (
              <option key={rengC} value={rengC} />
            ))}
          </datalist>
          <label className="sm row cm-faceta-ancha" style={{ gap: 6 }}>
            <input type="checkbox" checked={rengF.conCurva} disabled={!rengGlobales.hayCurvas} onChange={(rengE) => rengCambiar({ conCurva: rengE.target.checked })} /> Con curva publicada
          </label>
        </div>
      </details>
      {rengActivos.length > 0 && (
        <button type="button" className="btn ghost sm" onClick={() => rengSetF(RENG_FILTROS_VACIOS)}>
          Quitar filtros ({rengActivos.length})
        </button>
      )}
      <span className="faint sm" role="status" data-campo="contador">
        {rengNum(rengResultado.activos.length)} de {rengNum(rengResultado.totalActivos)} principios activos · {rengNum(rengResultado.presentacionesCoincidentes)} de {rengNum(rengResultado.totalPresentaciones)} presentaciones ({rengNum(rengResultado.completas)} activos con ficha completa).
      </span>
      <RengListaVirtual
        total={rengResultado.activos.length}
        filaAlto={RENG_FILA_ALTO}
        etiqueta={`Medicamentos (${rengResultado.activos.length})`}
        className="cm-lista cm-lista-med"
        indiceActivo={rengIndiceActivo}
        idActivo={rengActivoId && rengIndiceActivo >= 0 ? `cm-med-${rengActivoId}` : undefined}
        onTecla={rengTecla}
        fila={(rengI) => {
          const { activo: rengX, coincidentes: rengC } = rengResultado.activos[rengI]!
          return (
            <li key={rengX.id} id={`cm-med-${rengX.id}`} data-id={rengX.id} role="option" aria-posinset={rengI + 1} aria-setsize={rengResultado.activos.length} aria-selected={rengX.id === rengActivoId} className={rengX.id === rengActivoId ? 'sel' : ''} title={`${rengX.nombre} · ${rengX.area} · ${rengC.length} de ${rengX.presentaciones.length} presentaciones`} onClick={() => rengElegir(rengI)}>
              <span>
                {rengX.nombre}
                {rengX.componentes && <small className="faint"> · combinación</small>}
                {rengX.estado === 'parcial' && <small className="faint"> · parcial</small>}
              </span>
              <small className="faint">
                {rengX.area}
                {rengFiltrosDePresentacion ? ` · ${rengC.length} de ${rengX.presentaciones.length} presentaciones` : ''}
              </small>
            </li>
          )
        }}
      />
      {rengResultado.activos.length === 0 && (
        <p className="faint sm" role="status" data-campo="sin-resultados">
          {rengExplicarSinResultados(RENG_INDICE, rengF)}
        </p>
      )}
      <span className="faint sm">Con la lista enfocada, ↑/↓, Inicio, Fin y Re Pág/Av Pág cambian la selección.</span>
    </aside>
  )
}
