import type { RengCurvaEstudio, RengFuente, RengModuloCurvas } from './modelo'

const rengModulosCurvas = import.meta.glob<{ default: RengModuloCurvas }>('./curvas/*.ts', { eager: true })

export const RENG_CURVAS: RengCurvaEstudio[] = Object.values(rengModulosCurvas).flatMap((rengM) => rengM.default.curvas)
export const RENG_FUENTES_CURVAS: RengFuente[] = Object.values(rengModulosCurvas).flatMap((rengM) => rengM.default.fuentes)
export const rengCurvasDePresentacion = (rengPresentacionId: string): RengCurvaEstudio[] => RENG_CURVAS.filter((rengC) => rengC.presentaciones.includes(rengPresentacionId))
