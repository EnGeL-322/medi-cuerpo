export type RengDestinoMediCuerpo = 'cuerpo' | 'casos' | 'mesa'
export type RengPestanaCuerpo = 'medicamentos' | 'atlas' | 'modelo'

export interface RengNavMediCuerpo {
  destino: RengDestinoMediCuerpo
  pestana: RengPestanaCuerpo
}

export const RENG_DESTINOS_MEDICUERPO: ReadonlyArray<{ id: RengDestinoMediCuerpo; nombre: string; sub: string }> = [
  { id: 'cuerpo', nombre: 'Cuerpo y medicamentos', sub: 'Fichas, atlas y recorrido' },
  { id: 'casos', nombre: 'Casos del cuerpo', sub: 'La química dentro de ti' },
  { id: 'mesa', nombre: 'Mesa de estructuras', sub: 'Construir y comprobar' }
]

export const RENG_PESTANAS_CUERPO: ReadonlyArray<{ id: RengPestanaCuerpo; nombre: string }> = [
  { id: 'medicamentos', nombre: 'Medicamentos' },
  { id: 'atlas', nombre: 'Atlas del cuerpo' },
  { id: 'modelo', nombre: 'Modelo general de absorción' }
]

export const RENG_NAV_INICIAL: RengNavMediCuerpo = { destino: 'cuerpo', pestana: 'medicamentos' }

const rengEsPestana = (rengS: string): rengS is RengPestanaCuerpo => RENG_PESTANAS_CUERPO.some((rengP) => rengP.id === rengS)

export function rengNavDeSubruta(rengNav: RengNavMediCuerpo, rengSub: string | null): RengNavMediCuerpo {
  if (!rengSub) return rengNav
  if (rengEsPestana(rengSub)) return { destino: 'cuerpo', pestana: rengSub }
  if (rengSub === 'cuerpo') return { ...rengNav, destino: 'cuerpo' }
  if (rengSub === 'casos' || rengSub === 'mesa') return { ...rengNav, destino: rengSub }
  return rengNav
}

export function rengSubrutaDeNav(rengNav: RengNavMediCuerpo): string {
  return rengNav.destino === 'cuerpo' ? rengNav.pestana : rengNav.destino
}

export function rengDescripcionNav(rengNav: RengNavMediCuerpo): { titulo: string; contexto: string } {
  switch (rengNav.destino) {
    case 'cuerpo':
      return { titulo: RENG_PESTANAS_CUERPO.find((rengP) => rengP.id === rengNav.pestana)!.nombre, contexto: 'MediCuerpo · Cuerpo y medicamentos' }
    case 'casos':
      return { titulo: 'Casos del cuerpo', contexto: 'MediCuerpo · Casos del cuerpo' }
    case 'mesa':
      return { titulo: 'Mesa de estructuras', contexto: 'MediCuerpo · Construir y comprobar' }
  }
}
