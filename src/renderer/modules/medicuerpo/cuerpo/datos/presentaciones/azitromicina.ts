import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'azitromicina',
  presentaciones: [
    {
  id: 'azitromicina-suspension',
  producto: 'Zithromax · polvo para suspensión oral',
  titular: 'PFIZER LABORATORIES DIV PFIZER INC',
  mercado: 'EE. UU.',
  forma: 'Polvo para suspensión oral',
  formaFuente: 'POWDER, FOR SUSPENSION',
  liberacion: 'no declarada',
  concentraciones: '100 mg/5 mL o 200 mg/5 mL de azitromicina (como dihidrato), según la etiqueta',
  sal: {
    nombre: 'Dihidrato de azitromicina',
    ref: { f: 'dailymed-azitromicina-suspension', sec: '11 · Descripción', cita: 'azithromycin dihydrate', codigo: '34089-3' }
  },
  excipientes: [ 'sucrose', 'sodium phosphate, tribasic, anhydrous', 'hydroxypropyl cellulose (1600000 wamw)', 'xanthan gum', 'fd&c red no. 40' ],
  usos: {
    t: 'Infecciones leves a moderadas causadas por microorganismos sensibles en las condiciones que enumera la etiqueta.',
    ref: {
      f: 'dailymed-azitromicina-suspension',
      sec: '1 · Indicaciones',
      cita: 'ZITHROMAX is a macrolide antibacterial drug indicated for treatment of patients with mild to moderate infections caused by susceptible strains of the designated microorganisms',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-azitromicina-suspension',
  advertencias: [
    {
      titulo: 'Hipersensibilidad',
      texto: 'Se han descrito reacciones alérgicas graves, como angioedema, anafilaxia y reacciones dermatológicas.',
      organos: [ 'piel' ],
      ref: {
        f: 'dailymed-azitromicina-suspension',
        sec: '5 · Advertencias y precauciones',
        cita: 'Serious allergic reactions, including angioedema, anaphylaxis, and dermatologic reactions',
        codigo: '43685-7'
      }
    },
    {
      titulo: 'Prolongación del QT',
      texto: 'Se han observado prolongación de la repolarización cardiaca y del intervalo QT, con riesgo de arritmia y torsades de pointes.',
      organos: [ 'corazon' ],
      ref: {
        f: 'dailymed-azitromicina-suspension',
        sec: '5 · Advertencias y precauciones',
        cita: 'Prolonged cardiac repolarization and QT interval, imparting a risk of developing cardiac arrhythmia and torsades de pointes',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes: diarrea (5 a 14 %), náuseas (3 a 18 %), dolor abdominal (3 a 7 %) y vómitos (2 a 7 %).',
      '34084-4',
      'Most common adverse reactions are diarrhea (5 to 14%), nausea (3 to 18%), abdominal pain (3 to 7%), or vomiting (2 to 7%)'
    ],
    [
      'La etiqueta describe además hipersensibilidad, hepatotoxicidad, prolongación del QT y diarrea por Clostridioides difficile.',
      '34084-4',
      'The following clinically significant adverse reactions are described elsewhere in labeling'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'suspension-oral',
  recorridoPropio: {
    resumen: 'La biodisponibilidad absoluta de las cápsulas de 250 mg es del 38 %; con alimentos, la suspensión oral aumentó la Cmax un 56 % sin cambiar el AUC. La excreción biliar, sobre todo del fármaco sin cambios, es una vía principal de eliminación; en una semana aparece sin cambios en la orina alrededor del 6 % de la dosis.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Polvo para suspensión oral: se toma ya en forma de suspensión líquida.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Polvo para suspensión oral: se toma ya en forma de suspensión líquida.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'When azithromycin oral suspension was administered with food to 28 adult healthy male subjects, C max increased by 56% and AUC was unchanged',
              codigo: '43682-4'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'La biodisponibilidad absoluta de las cápsulas de 250 mg es del 38 %; con alimentos, la suspensión oral aumentó la Cmax un 56 % sin cambiar el AUC.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'La biodisponibilidad absoluta de las cápsulas de 250 mg es del 38 %; con alimentos, la suspensión oral aumentó la Cmax un 56 % sin cambiar el AUC.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'When azithromycin oral suspension was administered with food to 28 adult healthy male subjects, C max increased by 56% and AUC was unchanged',
              codigo: '43682-4'
            }
          },
          {
            t: 'La biodisponibilidad absoluta de las cápsulas de 250 mg es del 38 %.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'The absolute bioavailability of azithromycin 250 mg capsules is 38%',
              codigo: '43682-4'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos', 'pulmones' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'Penetra en los tejidos humanos, entre ellos la piel, el pulmón, la amígdala y el cuello uterino.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Penetra en los tejidos humanos, entre ellos la piel, el pulmón, la amígdala y el cuello uterino.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Azithromycin has been shown to penetrate into human tissues, including skin, lung, tonsil, and cervix',
              codigo: '43682-4'
            }
          },
          {
            t: 'La unión a proteínas del suero es variable: baja del 51 % a 0,02 mcg/mL al 7 % a 2 mcg/mL.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'The serum protein binding of azithromycin is variable in the concentration range approximating human exposure, decreasing from 51% at 0.02 mcg/mL to 7% at 2 mcg/mL',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'ARNr 23S de la subunidad ribosomal 50S',
          efecto: 'Se une al ARNr 23S de la subunidad ribosomal 50S de los microorganismos sensibles, inhibe la síntesis proteica bacteriana e impide el ensamblaje de esa subunidad.',
          lugar: [ 'sitio-infeccion' ],
          datos: [
            {
              t: 'Se une al ARNr 23S de la subunidad ribosomal 50S de los microorganismos sensibles, inhibe la síntesis proteica bacteriana e impide el ensamblaje de esa subunidad.',
              ref: {
                f: 'dailymed-azitromicina-suspension',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Azithromycin acts by binding to the 23S rRNA of the 50S ribosomal subunit of susceptible microorganisms inhibiting bacterial protein synthesis',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'La etiqueta indica que no se han realizado estudios in vitro ni in vivo del metabolismo de la azitromicina.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'La etiqueta indica que no se han realizado estudios in vitro ni in vivo del metabolismo de la azitromicina.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'In vitro and in vivo studies to assess the metabolism of azithromycin have not been performed',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: []
      },
      excrecion: {
        organos: [ 'bilis', 'heces', 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La excreción biliar, sobre todo del fármaco sin cambios, es una vía principal de eliminación; en una semana aparece sin cambios en la orina alrededor del 6 % de la dosis.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La excreción biliar, sobre todo del fármaco sin cambios, es una vía principal de eliminación; en una semana aparece sin cambios en la orina alrededor del 6 % de la dosis.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Biliary excretion of azithromycin, predominantly as unchanged drug, is a major route of elimination',
              codigo: '43682-4'
            }
          },
          {
            t: 'El aclaramiento plasmático aparente medio es de 630 mL/min y la semivida terminal de eliminación, de 68 horas.',
            ref: {
              f: 'dailymed-azitromicina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'mean apparent plasma clearance of 630 mL/min and terminal elimination half-life of 68 hr',
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
    rengEtiquetaFDA('dailymed-azitromicina-suspension', 'db52b91e-79f7-4cc1-9564-f2eee8e31c45', 'ZITHROMAX (AZITHROMYCIN DIHYDRATE) TABLET, FILM COATED ZITHROMAX (AZITHROMYCIN DIHYDRATE) POWDER, FOR SUSPENSION', 'Zithromax', '49', '2026-07-29', '2026-11-10')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta de las cápsulas de 250 mg',
    valor: '38',
    unidad: '%',
    analito: 'azitromicina',
    origen: 'otra-presentacion',
    ref: {
      f: 'dailymed-azitromicina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'The absolute bioavailability of azithromycin 250 mg capsules is 38%',
      codigo: '43682-4'
    },
    presentacion: 'Zithromax · polvo para suspensión oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del suero',
    valor: '51 (a 0,02 mcg/mL) a 7 (a 2 mcg/mL)',
    unidad: '%',
    analito: 'azitromicina',
    ref: {
      f: 'dailymed-azitromicina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'decreasing from 51% at 0.02 mcg/mL to 7% at 2 mcg/mL',
      codigo: '43682-4'
    },
    presentacion: 'Zithromax · polvo para suspensión oral'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal de eliminación',
    valor: '68',
    unidad: 'h',
    analito: 'azitromicina',
    condiciones: 'dosis únicas de 500 mg oral e intravenosa',
    origen: 'otra-via',
    ref: { f: 'dailymed-azitromicina-suspension', sec: '12.3 · Farmacocinética', cita: 'terminal elimination half-life of 68 hr', codigo: '43682-4' },
    presentacion: 'Zithromax · polvo para suspensión oral'
  },
  {
    magnitud: 'aclaramiento',
    nombre: 'Aclaramiento plasmático aparente medio',
    valor: '630',
    unidad: 'mL/min',
    analito: 'azitromicina',
    condiciones: 'dosis únicas de 500 mg oral e intravenosa',
    origen: 'otra-via',
    ref: { f: 'dailymed-azitromicina-suspension', sec: '12.3 · Farmacocinética', cita: 'mean apparent plasma clearance of 630 mL/min', codigo: '43682-4' },
    presentacion: 'Zithromax · polvo para suspensión oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Fármaco sin cambios en la orina en una semana',
    valor: '6 (aprox.)',
    unidad: '% de la dosis',
    analito: 'azitromicina',
    ref: {
      f: 'dailymed-azitromicina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'approximately 6% of the administered dose appears as unchanged drug in urine',
      codigo: '43682-4'
    },
    presentacion: 'Zithromax · polvo para suspensión oral'
  }
]
} satisfies RengExtensionFicha
