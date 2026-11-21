import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tafamidis',
    nombre: 'Tafamidis',
    clase: 'Estabilizador selectivo de la transtiretina',
    sinonimos: [ 'tafamidis meglumine', 'Vyndaqel', 'Vyndamax' ],
    formula: 'C14H7Cl2NO3',
    masaMolar: 308.1,
    smiles: 'C1=CC2=C(C=C1C(=O)O)OC(=N2)C3=CC(=CC(=C3)Cl)Cl',
    inchikey: 'TXEIIPDJKFWEEC-UHFFFAOYSA-N',
    cid: 11001318,
    iupac: '2-(3,5-dichlorophenyl)-1,3-benzoxazole-6-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'tafamidis-oral',
      producto: 'Vyndaqel · cápsula blanda',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '20 mg por cápsula, según la etiqueta',
      sal: { nombre: 'Tafamidis meglumina', ref: { f: 'dailymed-tafamidis', sec: '11 · Descripción', cita: 'tafamidis meglumine', codigo: '34089-3' } },
      excipientes: [
        'ammonia',
        'fd&c blue no. 1',
        'pigment red 48',
        'gelatin, unspecified',
        'glycerin',
        'ferric oxide yellow',
        'polyethylene glycol 400',
        'polysorbate 80',
        'polyvinyl acetate phthalate',
        'propylene glycol',
        'sorbitan monooleate',
        'sorbitol',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la miocardiopatía por amiloidosis de transtiretina, natural o hereditaria, en adultos, para reducir la mortalidad y las hospitalizaciones cardiovasculares.',
        ref: {
          f: 'dailymed-tafamidis',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of the cardiomyopathy of wild-type or hereditary transthyretin-mediated amyloidosis (ATTR-CM) in adults to reduce cardiovascular mortality',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tafamidis',
      reacciones: [
        [
          'La frecuencia de efectos adversos con 20 mg u 80 mg fue similar a la del placebo.',
          '34084-4',
          'The frequency of adverse events in patients treated with VYNDAQEL 20 mg (n=88) or 80 mg (n=176; administered as four 20-mg capsules) was similar to that with placebo'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula blanda: 20 mg por cápsula, según la etiqueta; el activo va como tafamidis meglumina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la miocardiopatía por amiloidosis de transtiretina, natural o hereditaria, en adultos, para reducir la mortalidad y las hospitalizaciones cardiovasculares.',
    actua: 'Estabiliza la transtiretina: se une a sus sitios de unión de la tiroxina, estabiliza el tetrámero y frena su disociación en monómeros, el paso limitante de la formación de amiloide.',
    recorrido: 'La mediana del pico aparece en las 4 primeras horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras 20 mg de tafamidis meglumina, alrededor del 59 % se recuperó en las heces (sobre todo sin cambios) y el 22 % en la orina (sobre todo como glucurónido).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-tafamidis', sec: '3 · Formas y concentraciones', cita: 'yellow, opaque, oblong capsule, printed with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del pico aparece en las 4 primeras horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del pico aparece en las 4 primeras horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-tafamidis',
            sec: '12.3 · Farmacocinética',
            cita: 'Median tafamidis peak concentrations occurred within 4 hours following dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-tafamidis',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in the pharmacokinetics of tafamidis were observed following administration of a high fat, high calorie meal',
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
      ocurre: 'In vitro se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 16 L como meglumina y 18,5 L como ácido libre.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 16 L como meglumina y 18,5 L como ácido libre.',
          ref: { f: 'dailymed-tafamidis', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of tafamidis is >99% in vitro', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 16 L (tafamidis meglumina) y 18,5 L (tafamidis).',
          ref: {
            f: 'dailymed-tafamidis',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent steady state volume of distribution of tafamidis meglumine is 16 liters and 18.5 liters for tafamidis',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transtiretina (TTR)',
        efecto: 'Estabiliza la transtiretina: se une a sus sitios de unión de la tiroxina, estabiliza el tetrámero y frena su disociación en monómeros, el paso limitante de la formación de amiloide.',
        lugar: [],
        datos: [
          {
            t: 'Estabiliza la transtiretina: se une a sus sitios de unión de la tiroxina, estabiliza el tetrámero y frena su disociación en monómeros, el paso limitante de la formación de amiloide.',
            ref: {
              f: 'dailymed-tafamidis',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tafamidis binds to TTR at the thyroxine binding sites, stabilizing the tetramer and slowing dissociation into monomers, the rate-limiting step in the amyloidogenic process',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un estabilizador selectivo de la transtiretina.',
            ref: { f: 'dailymed-tafamidis', sec: '12.1 · Mecanismo de acción', cita: 'Tafamidis is a selective stabilizer of TTR', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolismo no está completamente caracterizado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolismo no está completamente caracterizado.',
          ref: {
            f: 'dailymed-tafamidis',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolism of tafamidis has not been fully characterized',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 20 mg de tafamidis meglumina, alrededor del 59 % se recuperó en las heces (sobre todo sin cambios) y el 22 % en la orina (sobre todo como glucurónido).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 20 mg de tafamidis meglumina, alrededor del 59 % se recuperó en las heces (sobre todo sin cambios) y el 22 % en la orina (sobre todo como glucurónido).',
          ref: {
            f: 'dailymed-tafamidis',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 59% of the dose was recovered in feces (mostly as the unchanged drug) and approximately 22% of the dose was recovered in urine (mostly as the glucuronide metabolite)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de unas 49 horas.',
          ref: {
            f: 'dailymed-tafamidis',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean half-life of tafamidis is approximately 49 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '≤ 4',
      unidad: 'h',
      analito: 'tafamidis',
      ref: {
        f: 'dailymed-tafamidis',
        sec: '12.3 · Farmacocinética',
        cita: 'Median tafamidis peak concentrations occurred within 4 hours following dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '> 99',
      unidad: '%',
      analito: 'tafamidis',
      ref: { f: 'dailymed-tafamidis', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of tafamidis is >99% in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario (meglumina)',
      valor: '16',
      unidad: 'L',
      analito: 'tafamidis',
      ref: {
        f: 'dailymed-tafamidis',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent steady state volume of distribution of tafamidis meglumine is 16 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '49 (aprox.)',
      unidad: 'h',
      analito: 'tafamidis',
      ref: { f: 'dailymed-tafamidis', sec: '12.3 · Farmacocinética', cita: 'The mean half-life of tafamidis is approximately 49 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente (meglumina)',
      valor: '0,228',
      unidad: 'L/h',
      analito: 'tafamidis',
      ref: {
        f: 'dailymed-tafamidis',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent oral clearance of tafamidis meglumine is 0.228 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '59 (aprox.)',
      unidad: '% de la dosis',
      analito: 'tafamidis',
      condiciones: 'dosis oral única de 20 mg de tafamidis meglumina',
      ref: {
        f: 'dailymed-tafamidis',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 59% of the dose was recovered in feces (mostly as the unchanged drug)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tafamidis', '1b4121ee-a733-4456-a917-be2603477839', 'VYNDAQEL (TAFAMIDIS MEGLUMINE) CAPSULE, LIQUID FILLED VYNDAMAX (TAFAMIDIS) CAPSULE, LIQUID FILLED', 'Vyndaqel', '15', '2026-05-13', '2026-11-19'),
    rengPubchem(11001318, 'tafamidis meglumine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
