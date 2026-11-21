import { RENG_CASOS_CUERPO } from './cuerpo'
import type { RengCaso } from './tipos'

export * from './tipos'
export { RENG_FUENTES, rengFuentePorId } from './fuentes'

export const RENG_CASOS: RengCaso[] = [...RENG_CASOS_CUERPO]

export const rengCasoPorId = (rengId: string): RengCaso | undefined => RENG_CASOS.find((rengC) => rengC.id === rengId)
