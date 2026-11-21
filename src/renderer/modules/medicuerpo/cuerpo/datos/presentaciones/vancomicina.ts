import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'vancomicina',
  presentaciones: [
    {
  id: 'vancomicina-iv',
  producto: 'VANCOMYCIN HYDROCHLORIDE · solución inyectable',
  titular: 'BAXTER HEALTHCARE CORPORATION',
  mercado: 'EE. UU.',
  forma: 'Solución inyectable',
  formaFuente: 'INJECTION, SOLUTION',
  liberacion: 'no declarada',
  concentraciones: '1 g/200 mL de vancomicina (como clorhidrato) en solución inyectable, según la etiqueta',
  excipientes: [ 'dextrose monohydrate', 'water', 'hydrochloric acid', 'sodium hydroxide' ],
  usos: {
    t: 'Tratamiento de septicemia, endocarditis infecciosa, infecciones de piel y partes blandas, de huesos y de vías respiratorias bajas, entre otras que enumera la etiqueta, en adultos y niños.',
    ref: {
      f: 'dailymed-vancomicina-iv',
      sec: '1 · Indicaciones',
      cita: 'Vancomycin Injection is a glycopeptide antibacterial indicated for the treatment of the following infections in adult and pediatric patients',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-vancomicina-iv',
  advertencias: [
    {
      titulo: 'Reacciones a la infusión',
      texto: 'Pueden aparecer hipotensión (incluidos choque y paro cardiaco), sibilancias, disnea, urticaria y dolor muscular y torácico con la administración intravenosa rápida.',
      organos: [ 'corazon', 'vasos' ],
      ref: {
        f: 'dailymed-vancomicina-iv',
        sec: '5 · Advertencias y precauciones',
        cita: 'Hypotension, including shock and cardiac arrest, wheezing, dyspnea, urticaria, muscular and chest pain',
        codigo: '43685-7'
      }
    },
    {
      titulo: 'Nefrotoxicidad',
      texto: 'La etiqueta advierte de nefrotoxicidad y de vigilar la función renal.',
      organos: [ 'rinones' ],
      ref: {
        f: 'dailymed-vancomicina-iv',
        sec: '5 · Advertencias y precauciones',
        cita: 'Monitor renal function in all patients receiving Vancomycin Injection',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'La etiqueta describe como reacciones clínicamente significativas las reacciones a la infusión, la nefrotoxicidad, la ototoxicidad y las reacciones dermatológicas graves.',
      '34084-4',
      'The following clinically significant adverse reactions are described elsewhere in the labeling'
    ],
    [
      'La nefrotoxicidad figura entre las reacciones descritas con detalle en otras secciones de la etiqueta.',
      '34084-4',
      'Nephrotoxicity [see Warnings and Precautions (5.2) ]'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'intravenosa' ],
  formaNormalizada: 'solucion-inyectable',
  recorridoPropio: {
    resumen: 'Entra directamente en la circulación general. En las primeras 24 horas, alrededor del 75 % de la dosis se excreta por la orina por filtración glomerular; la semivida de eliminación media en el plasma es de 4 a 6 horas con función renal normal.',
    etapas: {
      liberacion: {
        organos: [ 'sangre' ],
        llega: 'La solución llega a la sangre por una vena.',
        ocurre: 'Solución inyectable lista para administrarse por infusión intravenosa: el fármaco ya está disuelto y no necesita liberarse.',
        sigue: 'El fármaco, ya disuelto, circula con la sangre.',
        datos: [
          {
            t: 'Solución inyectable lista para administrarse por infusión intravenosa: el fármaco ya está disuelto y no necesita liberarse.',
            ref: {
              f: 'dailymed-vancomicina-iv',
              sec: '12.3 · Farmacocinética',
              cita: 'mean plasma concentrations of approximately 63 mcg/mL immediately after the completion of infusion',
              codigo: '43682-4'
            }
          }
        ]
      },
      absorcion: {
        organos: [ 'sangre' ],
        llega: 'El fármaco ya está en la sangre.',
        ocurre: 'Entra directamente en la circulación general.',
        sigue: 'Sigue hacia los tejidos y la eliminación.',
        datos: [],
        noAplica: {
          motivo: 'En la vía intravenosa no hay absorción: el fármaco entra directamente en la sangre y las concentraciones en plasma se miden ya al terminar la infusión.',
          ref: {
            f: 'dailymed-vancomicina-iv',
            sec: '12.3 · Farmacocinética',
            cita: 'mean plasma concentrations of approximately 63 mcg/mL immediately after the completion of infusion',
            codigo: '43682-4'
          }
        }
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'La unión a proteínas del suero es de alrededor del 55 %; tras la administración intravenosa hay concentraciones inhibidoras en los líquidos pleural, pericárdico, ascítico y sinovial, en la orina y en tejido auricular.',
        sigue: 'Se reparte por líquidos y tejidos y llega a los riñones para eliminarse.',
        datos: [
          {
            t: 'La unión a proteínas del suero es de alrededor del 55 %; tras la administración intravenosa hay concentraciones inhibidoras en los líquidos pleural, pericárdico, ascítico y sinovial, en la orina y en tejido auricular.',
            ref: {
              f: 'dailymed-vancomicina-iv',
              sec: '12.3 · Farmacocinética',
              cita: 'Vancomycin is approximately 55% serum protein bound as measured by ultrafiltration at vancomycin serum concentrations of 10 to 100 mcg/mL',
              codigo: '43682-4'
            }
          },
          {
            t: 'El coeficiente de distribución es de 0,3 a 0,43 L/kg.',
            ref: {
              f: 'dailymed-vancomicina-iv',
              sec: '12.3 · Farmacocinética',
              cita: 'The distribution coefficient is from 0.3 to 0.43 L/kg',
              codigo: '43682-4'
            }
          },
          {
            t: 'No atraviesa con facilidad las meninges normales hacia el líquido cefalorraquídeo; sí lo hace cuando las meninges están inflamadas.',
            ref: {
              f: 'dailymed-vancomicina-iv',
              sec: '12.3 · Farmacocinética',
              cita: 'Vancomycin does not readily diffuse across normal meninges into the spinal fluid; but, when the meninges are inflamed, penetration into the spinal fluid occurs',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Biosíntesis de la pared celular bacteriana',
          efecto: 'Su acción bactericida se debe sobre todo a la inhibición de la biosíntesis de la pared celular; además altera la permeabilidad de la membrana bacteriana y la síntesis de ARN.',
          lugar: [ 'sitio-infeccion' ],
          datos: [
            {
              t: 'Su acción bactericida se debe sobre todo a la inhibición de la biosíntesis de la pared celular; además altera la permeabilidad de la membrana bacteriana y la síntesis de ARN.',
              ref: {
                f: 'dailymed-vancomicina-iv',
                sec: '12.4 · Microbiología',
                cita: 'The bactericidal action of vancomycin results primarily from inhibition of cell-wall biosynthesis',
                codigo: '49489-8'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'La etiqueta indica que no hay un metabolismo aparente de la vancomicina.',
        sigue: 'Sin transformarse, sigue hacia la eliminación.',
        datos: [
          {
            t: 'La etiqueta indica que no hay un metabolismo aparente de la vancomicina.',
            ref: { f: 'dailymed-vancomicina-iv', sec: '12.3 · Farmacocinética', cita: 'There is no apparent metabolism of vancomycin', codigo: '43682-4' }
          }
        ],
        metabolitos: [],
        formas: [ 'disuelto' ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'En las primeras 24 horas, alrededor del 75 % de la dosis se excreta por la orina por filtración glomerular; la semivida de eliminación media en el plasma es de 4 a 6 horas con función renal normal.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'En las primeras 24 horas, alrededor del 75 % de la dosis se excreta por la orina por filtración glomerular; la semivida de eliminación media en el plasma es de 4 a 6 horas con función renal normal.',
            ref: {
              f: 'dailymed-vancomicina-iv',
              sec: '12.3 · Farmacocinética',
              cita: 'In the first 24 hours, about 75% of an administered dose of vancomycin is excreted in urine by glomerular filtration',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida de eliminación media de la vancomicina en el plasma es de 4 a 6 horas en sujetos con función renal normal.',
            ref: {
              f: 'dailymed-vancomicina-iv',
              sec: '12.3 · Farmacocinética',
              cita: 'The mean elimination half-life of vancomycin from plasma is 4 to 6 hours in subjects with normal renal function',
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
    rengEtiquetaFDA('dailymed-vancomicina-iv', '99e523d8-9bde-43cb-8434-497015e5dcbd', 'VANCOMYCIN HYDROCHLORIDE INJECTION, SOLUTION', 'VANCOMYCIN HYDROCHLORIDE', '27', '2026-06-18', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'cmax',
    nombre: 'Concentración plasmática media al terminar la infusión',
    valor: '63 (aprox.)',
    unidad: 'mcg/mL',
    analito: 'vancomicina',
    poblacion: 'sujetos con función renal normal',
    condiciones: 'al terminar una infusión intravenosa de 60 minutos',
    ref: {
      f: 'dailymed-vancomicina-iv',
      sec: '12.3 · Farmacocinética',
      cita: 'mean plasma concentrations of approximately 63 mcg/mL immediately after the completion of infusion',
      codigo: '43682-4'
    },
    presentacion: 'VANCOMYCIN HYDROCHLORIDE · solución inyectable'
  },
  {
    magnitud: 'vd',
    nombre: 'Coeficiente de distribución',
    valor: '0,3 a 0,43',
    unidad: 'L/kg',
    analito: 'vancomicina',
    ref: { f: 'dailymed-vancomicina-iv', sec: '12.3 · Farmacocinética', cita: 'The distribution coefficient is from 0.3 to 0.43 L/kg', codigo: '43682-4' },
    presentacion: 'VANCOMYCIN HYDROCHLORIDE · solución inyectable'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del suero',
    valor: '55 (aprox.)',
    unidad: '%',
    analito: 'vancomicina',
    ref: {
      f: 'dailymed-vancomicina-iv',
      sec: '12.3 · Farmacocinética',
      cita: 'Vancomycin is approximately 55% serum protein bound as measured by ultrafiltration',
      codigo: '43682-4'
    },
    presentacion: 'VANCOMYCIN HYDROCHLORIDE · solución inyectable'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación media en el plasma',
    valor: '4 a 6',
    unidad: 'h',
    analito: 'vancomicina',
    poblacion: 'sujetos con función renal normal',
    ref: {
      f: 'dailymed-vancomicina-iv',
      sec: '12.3 · Farmacocinética',
      cita: 'The mean elimination half-life of vancomycin from plasma is 4 to 6 hours in subjects with normal renal function',
      codigo: '43682-4'
    },
    presentacion: 'VANCOMYCIN HYDROCHLORIDE · solución inyectable'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada por la orina en 24 horas',
    valor: '75 (aprox.)',
    unidad: '% de la dosis',
    analito: 'vancomicina',
    ref: {
      f: 'dailymed-vancomicina-iv',
      sec: '12.3 · Farmacocinética',
      cita: 'In the first 24 hours, about 75% of an administered dose of vancomycin is excreted in urine by glomerular filtration',
      codigo: '43682-4'
    },
    presentacion: 'VANCOMYCIN HYDROCHLORIDE · solución inyectable'
  }
]
} satisfies RengExtensionFicha
