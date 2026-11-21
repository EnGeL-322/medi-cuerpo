import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'lamivudina',
  presentaciones: [
    {
  id: 'lamivudina-solucion',
  producto: 'EPIVIR · solución oral',
  titular: 'VIIV HEALTHCARE COMPANY',
  mercado: 'EE. UU.',
  forma: 'Solución oral',
  formaFuente: 'SOLUTION',
  liberacion: 'no declarada',
  concentraciones: '10 mg/mL de lamivudina, según la etiqueta',
  excipientes: [ 'anhydrous citric acid', 'methylparaben', 'propylene glycol', 'propylparaben', 'trisodium citrate dihydrate', 'sucrose' ],
  usos: {
    t: 'Infección por el VIH-1, en combinación con otros antirretrovirales.',
    ref: {
      f: 'dailymed-lamivudina-solucion',
      sec: '1 · Indicaciones',
      cita: 'EPIVIR is a nucleoside analogue indicated in combination with other antiretroviral agents for the treatment of human immunodeficiency virus type 1 (HIV-1) infection',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-lamivudina-solucion',
  advertencias: [
    {
      titulo: 'Exacerbaciones de la hepatitis B',
      texto: 'Se han descrito exacerbaciones agudas graves de la hepatitis B en pacientes coinfectados por VHB y VIH-1 que han suspendido el fármaco.',
      organos: [ 'higado' ],
      ref: {
        f: 'dailymed-lamivudina-solucion',
        sec: 'Advertencia destacada',
        cita: 'Severe acute exacerbations of hepatitis B have been reported in patients who are co-infected with hepatitis B virus (HBV) and human immunodeficiency virus (HIV-1) and have discontinued EPIVIR',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Acidosis láctica y hepatomegalia con esteatosis',
      texto: 'La etiqueta advierte de acidosis láctica y hepatomegalia grave con esteatosis.',
      organos: [ 'higado', 'sangre' ],
      ref: {
        f: 'dailymed-lamivudina-solucion',
        sec: '5 · Advertencias y precauciones',
        cita: 'Lactic Acidosis and Severe Hepatomegaly with Steatosis',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (incidencia ≥ 15 %) en adultos: dolor de cabeza, náuseas, malestar y fatiga, síntomas nasales, diarrea y tos.',
      '34084-4',
      'The most common reported adverse reactions (incidence greater than or equal to 15%) in adults were headache, nausea, malaise and fatigue, nasal signs and symptoms, diarrhea, and cough'
    ],
    [
      'La etiqueta describe además las exacerbaciones de la hepatitis B, la acidosis láctica con hepatomegalia grave y la pancreatitis.',
      '34084-4',
      'The following adverse reactions are discussed in other sections of the labeling'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'solucion-oral',
  recorridoPropio: {
    resumen: 'La biodisponibilidad absoluta en 12 adultos fue del 86 % ± 16 % con el comprimido de 150 mg y del 87 % ± 13 % con la solución oral. La mayor parte de la lamivudina se elimina sin cambios por la orina mediante secreción catiónica orgánica activa.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Solución oral: líquido que ya contiene el principio activo disuelto.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Solución oral: líquido que ya contiene el principio activo disuelto.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Absolute bioavailability in 12 adult subjects was 86% ± 16% (mean ± SD) for the 150-mg tablet and 87% ± 13% for the oral solution',
              codigo: '43682-4'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'La biodisponibilidad absoluta en 12 adultos fue del 86 % ± 16 % con el comprimido de 150 mg y del 87 % ± 13 % con la solución oral.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'La biodisponibilidad absoluta en 12 adultos fue del 86 % ± 16 % con el comprimido de 150 mg y del 87 % ± 13 % con la solución oral.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Absolute bioavailability in 12 adult subjects was 86% ± 16% (mean ± SD) for the 150-mg tablet and 87% ± 13% for the oral solution',
              codigo: '43682-4'
            }
          },
          {
            t: 'La absorción fue más lenta con comida (Tmax 3,2 ± 1,3 horas) que en ayunas (Tmax 0,9 ± 0,3 horas).',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Absorption of lamivudine was slower in the fed state (T max : 3.2 ± 1.3 hours) compared with the fasted state (T max : 0.9 ± 0.3 hours)',
              codigo: '43682-4'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'El volumen de distribución aparente tras una dosis intravenosa fue de 1,3 ± 0,4 L/kg, lo que indica distribución a los espacios extravasculares; la unión a proteínas del plasma es inferior al 36 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El volumen de distribución aparente tras una dosis intravenosa fue de 1,3 ± 0,4 L/kg, lo que indica distribución a los espacios extravasculares; la unión a proteínas del plasma es inferior al 36 %.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The apparent volume of distribution after IV administration of lamivudine to 20 subjects was 1.3 ± 0.4 L per kg',
              codigo: '43682-4'
            }
          },
          {
            t: 'La unión de la lamivudina a proteínas plasmáticas humanas es inferior al 36 %.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Binding of lamivudine to human plasma proteins is less than 36%',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: null,
          efecto: 'La etiqueta la describe como un agente antirretroviral y remite a su sección de microbiología para el mecanismo.',
          lugar: [ 'sistema-inmunitario' ],
          datos: [
            {
              t: 'La etiqueta la describe como un agente antirretroviral y remite a su sección de microbiología para el mecanismo.',
              ref: {
                f: 'dailymed-lamivudina-solucion',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Lamivudine is an antiretroviral agent',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'El metabolismo es una vía menor de eliminación; el único metabolito conocido es el trans-sulfóxido y no se metaboliza de forma significativa por el citocromo P450.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'El metabolismo es una vía menor de eliminación; el único metabolito conocido es el trans-sulfóxido y no se metaboliza de forma significativa por el citocromo P450.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Metabolism of lamivudine is a minor route of elimination',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolito trans-sulfóxido',
            actividad: 'desconocida',
            nota: 'Alrededor del 5 % de una dosis oral a las 12 horas; la etiqueta no indica su actividad.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'the only known metabolite of lamivudine is the trans-sulfoxide metabolite (approximately 5% of an oral dose after 12 hours)',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La mayor parte de la lamivudina se elimina sin cambios por la orina mediante secreción catiónica orgánica activa.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La mayor parte de la lamivudina se elimina sin cambios por la orina mediante secreción catiónica orgánica activa.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The majority of lamivudine is eliminated unchanged in urine by active organic cationic secretion',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida de eliminación media observada fue de 5 a 7 horas.',
            ref: {
              f: 'dailymed-lamivudina-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'the observed mean elimination half-life (t½) ranged from 5 to 7 hours',
              codigo: '43682-4'
            }
          }
        ],
        formas: [ 'disuelto' ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lamivudina-solucion', '89226149-47fa-4f7d-bb1f-1aa7034486b8', 'EPIVIR (LAMIVUDINE) TABLET, FILM COATED EPIVIR (LAMIVUDINE) SOLUTION', 'EPIVIR', '24', '2026-09-14', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta de la solución oral',
    valor: '87 ± 13',
    unidad: '%',
    analito: 'lamivudina',
    poblacion: '12 adultos',
    ref: {
      f: 'dailymed-lamivudina-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Absolute bioavailability in 12 adult subjects was 86% ± 16% (mean ± SD) for the 150-mg tablet and 87% ± 13% for the oral solution',
      codigo: '43682-4'
    },
    presentacion: 'EPIVIR · solución oral'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico en ayunas',
    valor: '0,9 ± 0,3',
    unidad: 'h',
    analito: 'lamivudina',
    condiciones: 'en ayunas',
    origen: 'otra-presentacion',
    ref: {
      f: 'dailymed-lamivudina-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'compared with the fasted state (T max : 0.9 ± 0.3 hours)',
      codigo: '43682-4'
    },
    presentacion: 'EPIVIR · solución oral'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución aparente',
    valor: '1,3 ± 0,4',
    unidad: 'L/kg',
    analito: 'lamivudina',
    poblacion: '20 sujetos',
    condiciones: 'dosis intravenosa',
    origen: 'otra-via',
    ref: {
      f: 'dailymed-lamivudina-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'The apparent volume of distribution after IV administration of lamivudine to 20 subjects was 1.3 ± 0.4 L per kg',
      codigo: '43682-4'
    },
    presentacion: 'EPIVIR · solución oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del plasma',
    valor: '< 36',
    unidad: '%',
    analito: 'lamivudina',
    ref: {
      f: 'dailymed-lamivudina-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Binding of lamivudine to human plasma proteins is less than 36%',
      codigo: '43682-4'
    },
    presentacion: 'EPIVIR · solución oral'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación media observada',
    valor: '5 a 7',
    unidad: 'h',
    analito: 'lamivudina',
    ref: {
      f: 'dailymed-lamivudina-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'the observed mean elimination half-life (t½) ranged from 5 to 7 hours',
      codigo: '43682-4'
    },
    presentacion: 'EPIVIR · solución oral'
  }
]
} satisfies RengExtensionFicha
