import type { RengAcceso } from '../../module-api'

export const RENG_ACCESOS_MEDICUERPO: readonly RengAcceso[] = [
  { sub: 'medicamentos', nombre: 'Catálogo de medicamentos', descripcion: '300 fichas con presentaciones, efectos adversos, advertencias y fuentes.', grupo: 'MediCuerpo · Cuerpo y medicamentos', etiquetas: ['medicamento', 'farmaco', 'ficha', 'presentacion', 'efectos adversos', 'advertencias', 'paracetamol', 'ibuprofeno'] },
  { sub: 'atlas', nombre: 'Atlas del cuerpo', descripcion: 'Huesos, músculos y órganos en 3D por capas.', grupo: 'MediCuerpo · Cuerpo y medicamentos', etiquetas: ['atlas', 'anatomia', 'organos', 'huesos', 'musculos', '3d'] },
  { sub: 'modelo', nombre: 'Modelo general de absorción', descripcion: 'Modelo didáctico de un compartimento con sus ecuaciones.', grupo: 'MediCuerpo · Cuerpo y medicamentos', etiquetas: ['absorcion', 'eliminacion', 'farmacocinetica', 'modelo'] },
  { sub: 'casos', nombre: 'Casos del cuerpo', descripcion: 'Agua, respiración, estómago, huesos y hemoglobina, con sus fuentes.', grupo: 'MediCuerpo · Casos del cuerpo', etiquetas: ['casos', 'cuerpo', 'vida real', 'atp', 'hemoglobina', 'calcio'] },
  { sub: 'mesa', nombre: 'Mesa de estructuras', descripcion: 'Construye la estructura de un principio activo y compruébala.', grupo: 'MediCuerpo · Construir y comprobar', etiquetas: ['mesa', 'construir', 'estructura', 'molecula', 'comprobar'] }
]
