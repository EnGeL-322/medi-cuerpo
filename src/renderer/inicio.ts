import type { RengIconName } from '@shared/manifest'

export interface RengAtajoInicio {
  modulo: string
  sub: string | null
  nombre: string
}

export interface RengTarjetaInicio {
  modulo: string
  sub: string | null
  titulo: string
  texto: string
  disciplina: string
  icono: RengIconName
  contarExperimentos?: boolean
  atajos: RengAtajoInicio[]
}

export const RENG_INICIO: {
  titulo: string
  intro: string
  tarjetas: RengTarjetaInicio[]
  cuaderno: RengAtajoInicio | null
  contexto: Partial<Record<string, string>>
  vacioReanudar: string
} = {
  titulo: 'Empezar',
  intro: 'Busca un medicamento, mira qué contiene y sigue su recorrido por el cuerpo, o explora el atlas anatómico. Todo ocurre en tu propio equipo. Uso educativo: no da dosis ni pautas.',
  tarjetas: [
    {
      modulo: 'medicuerpo',
      sub: 'medicamentos',
      titulo: 'Medicamentos',
      texto: 'Elige entre 300 fichas, cambia de presentación y sigue el recorrido del principio activo en 3D o en texto.',
      disciplina: 'cuerpo',
      icono: 'pill',
      atajos: [
        { modulo: 'medicuerpo', sub: 'medicamentos', nombre: 'Catálogo de medicamentos' },
        { modulo: 'medicuerpo', sub: 'modelo', nombre: 'Modelo general de absorción' }
      ]
    },
    {
      modulo: 'medicuerpo',
      sub: 'atlas',
      titulo: 'Atlas del cuerpo',
      texto: 'Explora huesos, músculos y órganos por capas, y la química que ocurre dentro de ti.',
      disciplina: 'cuerpo',
      icono: 'body',
      atajos: [
        { modulo: 'medicuerpo', sub: 'atlas', nombre: 'Atlas del cuerpo' },
        { modulo: 'medicuerpo', sub: 'casos', nombre: 'Casos del cuerpo' },
        { modulo: 'medicuerpo', sub: 'mesa', nombre: 'Mesa de estructuras' }
      ]
    }
  ],
  cuaderno: null,
  contexto: {
    cuerpo: 'Medicamentos, atlas, casos del cuerpo y mesa de estructuras'
  },
  vacioReanudar: 'Todavía no hay trabajo reciente. Cuando abras una ficha, el atlas o la mesa, aparecerá aquí para retomarlo con un clic.'
}
