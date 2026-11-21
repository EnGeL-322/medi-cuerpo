import type { RengEntradaMenu } from '../../module-api'

export const RENG_MENU_MEDICUERPO: readonly RengEntradaMenu[] = [
  { sub: 'medicamentos', nombre: 'Medicamentos', seccion: 'Cuerpo y medicamentos', tambien: [null, 'cuerpo'] },
  { sub: 'atlas', nombre: 'Atlas del cuerpo', seccion: 'Cuerpo y medicamentos' },
  { sub: 'modelo', nombre: 'Modelo general de absorción', seccion: 'Cuerpo y medicamentos' },
  { sub: 'casos', nombre: 'Casos del cuerpo', seccion: 'Explorar' },
  { sub: 'mesa', nombre: 'Mesa de estructuras', seccion: 'Explorar' }
]
