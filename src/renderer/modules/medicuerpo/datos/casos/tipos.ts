export type RengCategoria = 'cuerpo'

export const RENG_CATEGORIAS_CASOS: Record<RengCategoria, { nombre: string; descripcion: string }> = {
  cuerpo: { nombre: 'Cuerpo humano', descripcion: 'Por dentro: lo que ocurre dentro de ti' },
}

export interface RengFuente {
  id: string
  corta: string
  texto: string
  url: string
  consultada: string
  acceso: 'abierta' | 'resumen'
}

export interface RengAfirmacion {
  texto: string
  fuente: string | null
}

export interface RengComponente {
  nombre: string
  formula: string
  entrada: string | null
  rol: string
}

export interface RengEcuacion {
  nombre: string
  reactivos: Array<{ coef: number; formula: string }>
  productos: Array<{ coef: number; formula: string }>
  nota?: string
  fuente: string | null
}

export interface RengSimulacionCaso {
  id: string
  nombre: string
  porque: string
}

export interface RengCaso {
  id: string
  categoria: RengCategoria
  titulo: string
  gancho: string
  portada: string
  ideas: RengAfirmacion[]
  componentes: RengComponente[]
  ecuaciones: RengEcuacion[]
  simulaciones?: RengSimulacionCaso[]
  cronologia?: Array<{ cuando: string; hecho: string; fuente: string | null }>
  datos?: Array<{ magnitud: string; valor: string; fuente: string | null }>
  detalles: RengAfirmacion[]
  limites: string[]
}
