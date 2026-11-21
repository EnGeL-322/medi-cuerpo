import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'amlodipino',
  presentaciones: [
    {
  id: 'amlodipino-cinfa',
  producto: 'AMLODIPINO CINFA 10 mg COMPRIMIDOS EFG',
  titular: 'Laboratorios Cinfa S.A.',
  mercado: 'España (UE)',
  forma: 'Comprimido',
  formaFuente: 'COMPRIMIDO',
  liberacion: 'no declarada',
  concentraciones: '13,87 mg de amlodipino besilato por comprimido (equivalente a 10 mg de amlodipino), según la ficha técnica',
  excipientes: [ 'Celulosa microcristalina', 'Hidrogenofosfato de calcio', 'Carboximetilalmidón sódico (tipo A) (de patata)', 'Estearato de magnesio' ],
  usos: {
    t: 'Hipertensión arterial, angina de pecho crónica estable y angina vasoespástica (de Prinzmetal).',
    ref: {
      f: 'cima-65461',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Hipertensión arterial. Angina de pecho crónica estable. Angina vasoespástica (de Prinzmetal)',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-65461',
  advertencias: [
    {
      titulo: 'Insuficiencia hepática',
      texto: 'La semivida se prolonga y los valores de AUC son mayores en pacientes con insuficiencia hepática.',
      organos: [ 'higado' ],
      ref: {
        f: 'cima-65461',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'La semivida de amlodipino se prolonga y los valores AUC son mayores en pacientes con insuficiencia hepática',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Insuficiencia cardiaca',
      texto: 'Los antagonistas del calcio se deben usar con precaución en la insuficiencia cardiaca congestiva.',
      organos: [ 'corazon' ],
      ref: {
        f: 'cima-65461',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Los antagonistas de los canales del calcio, incluyendo amlodipino, se deben utilizar con precaución en pacientes con insuficiencia cardíaca congestiva',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes: somnolencia, mareos, dolor de cabeza, palpitaciones, sofocos, dolor abdominal, náuseas, hinchazón de los tobillos, edema y fatiga.',
      'FT 4.8',
      'somnolencia, mareos, dolor de cabeza, palpitaciones, sofocos, dolor abdominal, náuseas, hinchazón de los tobillos, edema y fatiga'
    ],
    [ 'El edema y la hinchazón de los tobillos figuran entre las reacciones más frecuentes.', 'FT 4.8', 'hinchazón de los tobillos, edema y fatiga' ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoDe: 'amlodipino-norvasc'
}
  ],
  fuentes: [
    rengFichaCIMA('cima-65461', '65461', 'AMLODIPINO CINFA 10 mg COMPRIMIDOS EFG (Laboratorios Cinfa S.A.)', '2025-08-19', '2026-11-15')
  ]
} satisfies RengExtensionFicha
