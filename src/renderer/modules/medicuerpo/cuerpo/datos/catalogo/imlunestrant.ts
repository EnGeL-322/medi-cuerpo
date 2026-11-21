import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'imlunestrant',
    nombre: 'Imlunestrant',
    clase: 'Antagonista y degradador del receptor de estrógenos alfa',
    sinonimos: [ 'imlunestrant', 'Inluriyo' ],
    formula: 'C29H24F4N2O3',
    masaMolar: 524.5,
    smiles: 'C1C(CN1CCOC2=CC=C(C=C2)[C@@H]3C4=C5C=CC(=CC5=NC=C4C6=C(O3)C=C(C=C6)C(F)(F)F)O)CF',
    inchikey: 'UVBQMXOKKDCBJN-MUUNZHRXSA-N',
    cid: 146603228,
    iupac: '(5R)-5-[4-[2-[3-(fluoromethyl)azetidin-1-yl]ethoxy]phenyl]-8-(trifluoromethyl)-5H-chromeno[4,3-c]quinolin-2-ol',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'imlunestrant-oral',
      producto: 'Inluriyo · comprimido recubierto con película',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento, en monoterapia o con abemaciclib, del cáncer de mama avanzado con receptores de estrógenos positivos y HER2 negativo, con mutación de ESR1 en monoterapia, según la etiqueta.',
        ref: {
          f: 'dailymed-imlunestrant',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adults with estrogen receptor (ER)-positive, human epidermal growth factor receptor 2 (HER2)-negative, estrogen receptor-1 (ESR1 )-mutated advanced or metastatic breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-imlunestrant',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede dañar al feto si se toma en el embarazo.',
          organos: [],
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '5 · Advertencias y precauciones',
            cita: 'INLURIYO can cause fetal harm when administered to a pregnant woman',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia, las más frecuentes (10 % o más, con laboratorio): descenso de hemoglobina, dolor musculoesquelético, descenso de calcio y neutrófilos, aumento de AST, fatiga y diarrea, entre otras.',
          '34084-4',
          'The most common (≥10%) adverse reactions, including laboratory abnormalities, were decreased hemoglobin, musculoskeletal pain, decreased calcium, decreased neutrophils, increased AST, fatigue, diarrhea'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, en monoterapia o con abemaciclib, del cáncer de mama avanzado con receptores de estrógenos positivos y HER2 negativo, con mutación de ESR1 en monoterapia, según la etiqueta.',
    actua: 'Se une al receptor de estrógenos alfa y lo antagoniza; in vitro induce su degradación y frena la transcripción génica dependiente del receptor y la proliferación de células de cáncer de mama.',
    recorrido: 'La biodisponibilidad oral absoluta es del 10 % y la mediana del tiempo hasta el pico, de 4 horas; una comida pobre en grasas duplica el AUC. Tras 400 mg marcados en sujetos sanos, el 97 % se recuperó en las heces (62 % sin cambios) y el 0,3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '3 · Formas y concentraciones',
            cita: 'white, film coated-capsule-shaped tablets, with',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral absoluta es del 10 % y la mediana del tiempo hasta el pico, de 4 horas; una comida pobre en grasas duplica el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es del 10 % y la mediana del tiempo hasta el pico, de 4 horas; una comida pobre en grasas duplica el AUC.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Imlunestrant absolute oral bioavailability after a single oral 400 mg dose is 10% (32%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de 4 horas.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Imlunestrant median (min, max) time to maximum plasma concentration (T max ) is 4 (2, 8) hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida pobre en grasas el AUC se duplicó y la Cmax aumentó 3,6 veces.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Imlunestrant AUC increased 2-fold and C max increased 3.6-fold following administration with a low-fat meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 8120 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 8120 L.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Imlunestrant protein binding is >99% and is not concentration dependent',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 8120 L.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent (oral) volume of distribution is 8,120 L (69%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de estrógenos alfa',
        efecto: 'Se une al receptor de estrógenos alfa y lo antagoniza; in vitro induce su degradación y frena la transcripción génica dependiente del receptor y la proliferación de células de cáncer de mama.',
        lugar: [],
        datos: [
          {
            t: 'Se une al receptor de estrógenos alfa y lo antagoniza; in vitro induce su degradación y frena la transcripción génica dependiente del receptor y la proliferación de células de cáncer de mama.',
            ref: {
              f: 'dailymed-imlunestrant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Imlunestrant is an estrogen receptor (ER) antagonist that binds to ERα',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro indujo la degradación del receptor alfa, con inhibición de la transcripción dependiente de él y de la proliferación celular.',
            ref: {
              f: 'dailymed-imlunestrant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'imlunestrant induced degradation of ERα, leading to inhibition of ER-dependent gene transcription and cellular proliferation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por sulfatación, por la CYP3A4 y por glucuronidación directa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por sulfatación, por la CYP3A4 y por glucuronidación directa.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Imlunestrant is metabolized by sulfation, CYP3A4, and direct glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 400 mg marcados en sujetos sanos, el 97 % se recuperó en las heces (62 % sin cambios) y el 0,3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 400 mg marcados en sujetos sanos, el 97 % se recuperó en las heces (62 % sin cambios) y el 0,3 % en la orina.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: '97% of the dose was recovered in feces (62% unchanged) and 0.3% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 30 horas y el aclaramiento aparente estimado, de 166 L/h.',
          ref: {
            f: 'dailymed-imlunestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Imlunestrant elimination half-life is 30 hours with an estimated apparent clearance of 166 L/h (51%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta (400 mg)',
      valor: '10',
      unidad: '%',
      analito: 'imlunestrant',
      ref: {
        f: 'dailymed-imlunestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'Imlunestrant absolute oral bioavailability after a single oral 400 mg dose is 10% (32%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '4',
      unidad: 'h',
      analito: 'imlunestrant',
      ref: {
        f: 'dailymed-imlunestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum plasma concentration (T max ) is 4 (2, 8) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99',
      unidad: '%',
      analito: 'imlunestrant',
      ref: { f: 'dailymed-imlunestrant', sec: '12.3 · Farmacocinética', cita: 'Imlunestrant protein binding is >99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '8120',
      unidad: 'L',
      analito: 'imlunestrant',
      ref: {
        f: 'dailymed-imlunestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent (oral) volume of distribution is 8,120 L (69%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '30',
      unidad: 'h',
      analito: 'imlunestrant',
      ref: { f: 'dailymed-imlunestrant', sec: '12.3 · Farmacocinética', cita: 'Imlunestrant elimination half-life is 30 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente estimado',
      valor: '166',
      unidad: 'L/h',
      analito: 'imlunestrant',
      ref: { f: 'dailymed-imlunestrant', sec: '12.3 · Farmacocinética', cita: 'an estimated apparent clearance of 166 L/h (51%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '97',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 400 mg',
      ref: { f: 'dailymed-imlunestrant', sec: '12.3 · Farmacocinética', cita: '97% of the dose was recovered in feces (62% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-imlunestrant', '5bc172e4-e8a2-441a-be52-279a7f890196', 'INLURIYO (IMLUNESTRANT) TABLET, FILM COATED', 'Inluriyo', '8', '2026-10-01', '2026-11-19'),
    rengPubchem(146603228, 'imlunestrant', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
