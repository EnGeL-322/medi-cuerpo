import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'olaparib',
    nombre: 'Olaparib',
    clase: 'Inhibidor de la polimerasa PARP',
    sinonimos: [ 'olaparib', 'Lynparza' ],
    formula: 'C24H23FN4O3',
    masaMolar: 434.5,
    smiles: 'C1CC1C(=O)N2CCN(CC2)C(=O)C3=C(C=CC(=C3)CC4=NNC(=O)C5=CC=CC=C54)F',
    inchikey: 'FDLYAMZZIXQODN-UHFFFAOYSA-N',
    cid: 23725625,
    iupac: '4-[[3-[4-(cyclopropanecarbonyl)piperazine-1-carbonyl]-4-fluorophenyl]methyl]-2H-phthalazin-1-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'olaparib-oral',
      producto: 'Lynparza · comprimido recubierto con película',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 150 mg por comprimido, según la etiqueta',
      excipientes: [
        'copovidone k25-31',
        'ferric oxide yellow',
        'ferrosoferric oxide',
        'hypromellose, unspecified',
        'mannitol',
        'polyethylene glycol 400',
        'silicon dioxide',
        'sodium stearyl fumarate',
        'titanium dioxide',
        'water'
      ],
      usos: {
        t: 'Cáncer de ovario, trompa de Falopio o peritoneo primario avanzado con mutación BRCA, como tratamiento de mantenimiento; también cáncer de mama, páncreas y próstata en indicaciones concretas.',
        ref: {
          f: 'dailymed-olaparib',
          sec: '1 · Indicaciones',
          cita: 'maintenance treatment of adult patients with deleterious or suspected deleterious germline or somatic BRCA -mutated advanced epithelial ovarian, fallopian tube or primary peritoneal cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-olaparib',
      advertencias: [
        {
          titulo: 'Síndrome mielodisplásico y leucemia mieloide aguda',
          texto: 'Han ocurrido en pacientes tratados y algunos casos fueron mortales.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'dailymed-olaparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Myelodysplastic syndrome (MDS)/Acute Myeloid Leukemia (AML) has occurred in patients treated with Lynparza and some cases were fatal',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Neumonitis',
          texto: 'Ocurrió en el 1,0 % de los expuestos y algunos casos fueron mortales.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-olaparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Pneumonitis, including severe and fatal cases, has occurred in patients treated with Lynparza',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia (≥ 10 %): náuseas, cansancio, anemia, vómitos, diarrea, disminución del apetito, dolor de cabeza, disgeusia y tos, entre otras.',
          '34084-4',
          'as a single agent were nausea, fatigue (including asthenia), anemia, vomiting, diarrhea, decreased appetite, headache, dysgeusia, cough, neutropenia, dyspnea, dizziness, dyspepsia, leukopenia, and thrombocytopenia'
        ],
        [
          'Con bevacizumab: náuseas, cansancio, anemia, linfopenia, vómitos y diarrea, entre otras.',
          '34084-4',
          'in combination with bevacizumab were nausea, fatigue (including asthenia), anemia, lymphopenia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 100 mg o 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cáncer de ovario, trompa de Falopio o peritoneo primario avanzado con mutación BRCA, como tratamiento de mantenimiento; también cáncer de mama, páncreas y próstata en indicaciones concretas.',
    actua: 'Inhibe las enzimas PARP (PARP1, PARP2 y PARP3), que intervienen en la reparación del ADN; las células con deficiencia de BRCA1/2 son más sensibles a esa inhibición.',
    recorrido: 'Tras la toma por boca, el máximo llega con una mediana de 1,5 horas; una comida rica en grasa retrasa el máximo 2,5 horas sin cambiar de forma importante la cantidad absorbida. En 7 días se recuperó el 86 % de la radiactividad: el 44 % por la orina y el 42 % por las heces; la mayor parte como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos ovalados, recubiertos con película, de 100 mg (amarillos) o 150 mg (verdes).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos ovalados, recubiertos con película, de 100 mg (amarillos) o 150 mg (verdes).',
          ref: {
            f: 'dailymed-olaparib',
            sec: '3 · Formas y concentraciones',
            cita: '150 mg: green to green/grey, oval, bi-convex, film-coated',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la toma por boca, el máximo llega con una mediana de 1,5 horas; una comida rica en grasa retrasa el máximo 2,5 horas sin cambiar de forma importante la cantidad absorbida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma por boca, el máximo llega con una mediana de 1,5 horas; una comida rica en grasa retrasa el máximo 2,5 horas sin cambiar de forma importante la cantidad absorbida.',
          ref: {
            f: 'dailymed-olaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of olaparib, the median time to peak plasma concentration is 1.5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comida rica en grasa y calorías el máximo se retrasó 2,5 horas y el AUC aumentó un 8 % aproximadamente.',
          ref: {
            f: 'dailymed-olaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'slowed the rate (t max delayed by 2.5 hours) of absorption, but did not significantly alter the extent of olaparib absorption',
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
      ocurre: 'In vitro, la unión a proteínas es del 82 % aproximadamente; el volumen aparente de distribución es de 158 ± 136 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, la unión a proteínas es del 82 % aproximadamente; el volumen aparente de distribución es de 158 ± 136 L.',
          ref: {
            f: 'dailymed-olaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The protein binding of olaparib is approximately 82% in vitro',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Enzimas PARP',
        efecto: 'Inhibe las enzimas PARP (PARP1, PARP2 y PARP3), que intervienen en la reparación del ADN; las células con deficiencia de BRCA1/2 son más sensibles a esa inhibición.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Inhibe las enzimas PARP (PARP1, PARP2 y PARP3), que intervienen en la reparación del ADN; las células con deficiencia de BRCA1/2 son más sensibles a esa inhibición.',
            ref: {
              f: 'dailymed-olaparib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Olaparib is an inhibitor of poly (ADP-ribose) polymerase (PARP) enzymes, including PARP1, PARP2, and PARP3',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza el CYP3A in vitro; el olaparib sin cambios es el 70 % de la radiactividad circulante y el resto son metabolitos de oxidación, algunos conjugados con glucurónido o sulfato.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza el CYP3A in vitro; el olaparib sin cambios es el 70 % de la radiactividad circulante y el resto son metabolitos de oxidación, algunos conjugados con glucurónido o sulfato.',
          ref: {
            f: 'dailymed-olaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Olaparib is metabolized by cytochrome P450 (CYP) 3A in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 7 días se recuperó el 86 % de la radiactividad: el 44 % por la orina y el 42 % por las heces; la mayor parte como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 7 días se recuperó el 86 % de la radiactividad: el 44 % por la orina y el 42 % por las heces; la mayor parte como metabolitos.',
          ref: {
            f: 'dailymed-olaparib',
            sec: '12.3 · Farmacocinética',
            cita: '86% of the dosed radioactivity was recovered within a 7-day collection period, 44% via the urine and 42% via the feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '1,5',
      unidad: 'h',
      analito: 'olaparib',
      ref: { f: 'dailymed-olaparib', sec: '12.3 · Farmacocinética', cita: 'the median time to peak plasma concentration is 1.5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media tras una dosis de 300 mg',
      valor: '5,4 (CV 32 %)',
      unidad: 'µg/mL',
      analito: 'olaparib',
      condiciones: 'dosis única de 300 mg',
      ref: { f: 'dailymed-olaparib', sec: '12.3 · Farmacocinética', cita: 'The mean (CV%) olaparib C max is 5.4 μg/mL (32%)', codigo: '43682-4' }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC media tras una dosis de 300 mg',
      valor: '39,2 (CV 44 %)',
      unidad: 'µg·h/mL',
      analito: 'olaparib',
      condiciones: 'dosis única de 300 mg',
      ref: { f: 'dailymed-olaparib', sec: '12.3 · Farmacocinética', cita: 'AUC is 39.2 μg*h/mL (44%) following a single 300 mg dose', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas (in vitro)',
      valor: '82 (aprox.)',
      unidad: '%',
      analito: 'olaparib',
      ref: {
        f: 'dailymed-olaparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The protein binding of olaparib is approximately 82% in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '158 ± 136',
      unidad: 'L',
      analito: 'olaparib',
      condiciones: 'dosis única de 300 mg',
      ref: {
        f: 'dailymed-olaparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (± standard deviation) apparent volume of distribution of olaparib is 158 ± 136 L following a single 300 mg dose of Lynparza',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática terminal',
      valor: '14,9 ± 8,2',
      unidad: 'h',
      analito: 'olaparib',
      condiciones: 'dosis única de 300 mg',
      ref: { f: 'dailymed-olaparib', sec: '12.3 · Farmacocinética', cita: 'terminal plasma half-life of olaparib is 14.9 ± 8.2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático aparente',
      valor: '7,4 ± 3,9',
      unidad: 'L/h',
      analito: 'olaparib',
      condiciones: 'dosis única de 300 mg',
      ref: {
        f: 'dailymed-olaparib',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent plasma clearance is 7.4 ± 3.9 L/h following a single 300 mg dose of Lynparza',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '44',
      unidad: '% de la dosis',
      analito: 'olaparib y metabolitos',
      condiciones: '7 días; dosis marcada',
      ref: { f: 'dailymed-olaparib', sec: '12.3 · Farmacocinética', cita: '44% via the urine and 42% via the feces', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '42',
      unidad: '% de la dosis',
      analito: 'olaparib y metabolitos',
      condiciones: '7 días; dosis marcada',
      ref: { f: 'dailymed-olaparib', sec: '12.3 · Farmacocinética', cita: '44% via the urine and 42% via the feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-olaparib', '741ff3e3-dc1a-45a6-84e5-2481b27131aa', 'LYNPARZA (OLAPARIB) TABLET, FILM COATED', 'Lynparza', '38', '2025-07-25', '2026-11-12'),
    rengPubchem(23725625, 'olaparib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
