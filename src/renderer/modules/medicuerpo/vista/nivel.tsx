import { createContext, useContext } from 'react'
import { RENG_ELEMENTOS } from '../chemistry'
import { rengMuestra, type RengClaveNivel, type RengNivel } from '../nucleo/niveles'

export type { RengNivel }

export const RengNivelContext = createContext<RengNivel>('basico')
export const useRengNivel = (): RengNivel => useContext(RengNivelContext)

export function useRengMuestra(): (rengClave: RengClaveNivel) => boolean {
  const rengNivel = useRengNivel()
  return (rengClave) => rengMuestra(rengNivel, rengClave)
}

const RENG_CLAVE = 'quimica.nivel'

export function rengLeerNivel(): RengNivel {
  try {
    return window.localStorage.getItem(RENG_CLAVE) === 'avanzado' ? 'avanzado' : 'basico'
  } catch {
    return 'basico'
  }
}

export function rengGuardarNivel(rengN: RengNivel): void {
  try {
    window.localStorage.setItem(RENG_CLAVE, rengN)
  } catch {
  }
}

export function rengColorCpk(rengSimbolo: string): string {
  const rengC = RENG_ELEMENTOS[rengSimbolo]?.color
  return rengC === undefined ? '' : `#${rengC.toString(16).padStart(6, '0')}`
}

export const rengEstiloCpk = (rengSimbolo: string): React.CSSProperties => ({ ['--cpk' as string]: rengColorCpk(rengSimbolo) || undefined }) as React.CSSProperties

export function rengColorTema(rengVariable: string, rengPorDefecto: number): number {
  try {
    const rengV = getComputedStyle(document.documentElement).getPropertyValue(rengVariable).trim()
    const rengM = /^#([0-9a-f]{6})$/i.exec(rengV)
    return rengM ? parseInt(rengM[1] as string, 16) : rengPorDefecto
  } catch {
    return rengPorDefecto
  }
}

export function rengMovimientoReducido(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

export function rengEsCampoDeTexto(rengT: EventTarget | null): boolean {
  const rengEl = rengT as HTMLElement | null
  if (!rengEl) return false
  return rengEl.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(rengEl.tagName)
}
