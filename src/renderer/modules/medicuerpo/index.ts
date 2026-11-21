import { rengDefineModule } from '@/module-api'
import { RENG_ACCESOS_MEDICUERPO } from './accesos'
import { RENG_MENU_MEDICUERPO } from './menu'

export default rengDefineModule({
  manifest: {
    id: 'medicuerpo',
    nombre: 'Cuerpo y medicamentos',
    nombreCorto: 'MediCuerpo',
    descripcion: 'Atlas anatómico en 3D, 300 fichas de medicamentos con presentaciones, efectos adversos, advertencias y fuentes, el recorrido de cada uno por el cuerpo y una mesa para construir y comprobar su estructura.',
    icono: 'body',
    categoria: 'cuerpo',
    principal: true,
    nivel: 'todos',
    etiquetas: ['cuerpo', 'anatomia', 'atlas', 'medicamento', 'farmaco', 'recorrido', 'absorcion', 'metabolismo', 'casos', 'estructura'],
    orden: 10
  },
  flush: true,
  accesos: RENG_ACCESOS_MEDICUERPO,
  menu: RENG_MENU_MEDICUERPO,
  load: () => import('./View')
})
