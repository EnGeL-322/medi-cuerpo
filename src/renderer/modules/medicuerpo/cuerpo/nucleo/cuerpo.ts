import { rengNormalizarNombre } from '../../nucleo/nomenclatura'
import { RENG_CAPAS, RENG_ESTRUCTURAS, type RengCapa, type RengEstructura } from '../datos/anatomia'
import { rengEtapasDe, rengRecorridoDe } from '../datos/fichas'
import type { RengFichaFarmaco, RengIdEtapa, RengPresentacion } from '../datos/modelo'
import { rengMallasDe } from '../datos/organos'

const rengNorm = (rengS: string): string => rengNormalizarNombre(rengS)

export function rengBuscarEstructuras(rengQ: string, rengCapas?: ReadonlySet<RengCapa>): RengEstructura[] {
  const rengT = rengNorm(rengQ.trim())
  return RENG_ESTRUCTURAS.filter((rengE) => {
    if (rengCapas && !rengCapas.has(rengE.capa)) return false
    if (!rengT) return true
    const rengCapa = RENG_CAPAS.find((rengC) => rengC.id === rengE.capa)?.nombre ?? ''
    return [rengE.nombre, ...(rengE.otros ?? []), rengE.sistema, rengCapa, rengE.lado ?? ''].some((rengX) => rengNorm(rengX).includes(rengT))
  })
}

export function rengEtapasDeEstructura(rengF: RengFichaFarmaco, rengEstructuraId: string, rengPresentacion?: RengPresentacion): RengIdEtapa[] {
  const rengRecorrido = rengRecorridoDe(rengF, rengPresentacion)
  return rengEtapasDe(rengRecorrido)
    .filter((rengE) => {
      const rengDestinos = rengE.id === 'distribucion' ? [...rengE.organos, ...rengRecorrido.distribucion.accion.lugar] : rengE.organos
      return rengMallasDe(rengDestinos).propias.includes(rengEstructuraId)
    })
    .map((rengE) => rengE.id)
}

export function rengAdvertenciasDeEstructura(rengP: RengPresentacion, rengEstructuraId: string): Array<{ titulo: string; texto: string }> {
  return (rengP.advertencias ?? []).filter((rengA) => rengMallasDe(rengA.organos).propias.includes(rengEstructuraId))
}
