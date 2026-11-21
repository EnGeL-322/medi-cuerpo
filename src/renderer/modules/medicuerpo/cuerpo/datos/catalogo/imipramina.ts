import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'imipramina',
    nombre: 'Imipramina',
    clase: 'Antidepresivo tricíclico (inhibidor no selectivo de la recaptación de monoaminas)',
    sinonimos: [ 'imipramine', 'Tofranil' ],
    formula: 'C19H24N2',
    masaMolar: 280.4,
    smiles: 'CN(C)CCCN1C2=CC=CC=C2CCC3=CC=CC=C31',
    inchikey: 'BCGWQEUPMDMJNV-UHFFFAOYSA-N',
    cid: 3696,
    iupac: '3-(5,6-dihydrobenzo[b][1]benzazepin-11-yl)-N,N-dimethylpropan-1-amine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'imipramina-oral',
      producto: 'TOFRANIL 10 mg COMPRIMIDOS RECUBIERTOS',
      titular: 'Amdipharm Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '10 mg, y otras concentraciones, de hidrocloruro de imipramina por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de imipramina',
        ref: { f: 'cima-40366', sec: '2 · Composición cualitativa y cuantitativa', cita: '10 mg de imipramina hidrocloruro', codigo: 'FT 2' }
      },
      excipientes: [
        'Sílice coloidal',
        'Almidón de maíz',
        'Ácido esteárico',
        'Talco',
        'Estearato de magnesio',
        'Hipromelosa',
        'Acetato de vinilpirrolidona',
        'Dióxido de titanio (E171)',
        'Povidona',
        'Polietilenglicol',
        'Celulosa microcristalina',
        'Rojo óxido de hierro (E172)',
        'Sacarosa',
        'Lactosa',
        'Glicerol (E422, en las concentraciones de 10 y 25 mg)'
      ],
      usos: {
        t: 'Tratamiento en adultos de la depresión, las crisis de ansiedad y el dolor crónico; en niños mayores de 5 años, de la enuresis nocturna.',
        ref: { f: 'cima-40366', sec: '4.1 · Indicaciones terapéuticas', cita: 'Adultos Depresión. Crisis de Ansiedad Dolor Crónico', codigo: 'FT 4.1' }
      },
      fuente: 'cima-40366',
      advertencias: [
        {
          titulo: 'Suicidio y pensamientos suicidas',
          texto: 'La depresión se asocia a un incremento del riesgo de pensamientos suicidas, autolesiones y suicidio.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-40366',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La depresión se asocia a un incremento del riesgo de pensamientos suicidas, autolesiones y suicidio (hechos relacionados con el suicidio)',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones adversas suelen ser leves y pasajeras y suelen desaparecer con la continuación del tratamiento o con una reducción de la dosis.',
          'FT 4.8',
          'Las reacciones adversas son generalmente leves y pasajeras, y suelen desaparecer con la continuación del tratamiento o con una reducción de la dosis'
        ],
        [
          'Los pacientes de edad avanzada son especialmente sensibles a los efectos anticolinérgicos, neurológicos, psiquiátricos o cardiovasculares.',
          'FT 4.8',
          'Los pacientes de edad avanzada son particularmente sensibles a los efectos anticolinérgicos, neurológicos, psiquiátricos o cardiovasculares'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 10 mg, y otras concentraciones, de hidrocloruro de imipramina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento en adultos de la depresión, las crisis de ansiedad y el dolor crónico; en niños mayores de 5 años, de la enuresis nocturna.',
    actua: 'Se cree que su actividad terapéutica principal se basa en la inhibición de la recaptación neuronal de monoaminas; además tiene propiedades alfa-adrenolíticas, antihistamínicas y anticolinérgicas.',
    recorrido: 'Se absorbe rápidamente y casi por completo en el tubo digestivo; la biodisponibilidad tiene una gran variabilidad interindividual (de 25 a 50 % aproximadamente). Un 80 % se excreta por la orina y alrededor del 20 % por las heces, principalmente como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-40366', sec: '3 · Forma farmacéutica', cita: '10 mg: comprimido recubierto de color marrón rojizo', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente y casi por completo en el tubo digestivo; la biodisponibilidad tiene una gran variabilidad interindividual (de 25 a 50 % aproximadamente).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente y casi por completo en el tubo digestivo; la biodisponibilidad tiene una gran variabilidad interindividual (de 25 a 50 % aproximadamente).',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La imipramina hidrocloruro se absorbe rápidamente y casi completamente del tracto gastrointestinal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad tiene una gran variabilidad interindividual, de 25 a 50 % aproximadamente.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad de imipramina tiene una gran variabilidad interindividual (de 25 a 50% aproximadamente)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La ingesta de alimentos no ejerce ningún efecto sobre la absorción y la biodisponibilidad.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta de alimentos no ejerce ningún efecto sobre la absorción y la biodisponibilidad',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es de aproximadamente el 86 %, el volumen aparente de distribución medio es de unos 21 L/kg y atraviesa la barrera hematoencefálica.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es de aproximadamente el 86 %, el volumen aparente de distribución medio es de unos 21 L/kg y atraviesa la barrera hematoencefálica.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas es del 86% aproximadamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen aparente de distribución medio es de aproximadamente 21 L/kg.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen aparente de distribución medio es de aproximadamente 21 l/kg del peso',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Atraviesa la barrera hematoencefálica.',
          ref: { f: 'cima-40366', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La imipramina atraviesa la barrera hematoencefálica', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Transportadores de recaptación de monoaminas',
        efecto: 'Se cree que su actividad terapéutica principal se basa en la inhibición de la recaptación neuronal de monoaminas; además tiene propiedades alfa-adrenolíticas, antihistamínicas y anticolinérgicas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que su actividad terapéutica principal se basa en la inhibición de la recaptación neuronal de monoaminas; además tiene propiedades alfa-adrenolíticas, antihistamínicas y anticolinérgicas.',
            ref: {
              f: 'cima-40366',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Se cree que la actividad terapéutica principal se basa en su capacidad de inhibir la recaptación',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza extensamente en el hígado, que interviene primero por el efecto de primer paso y después por la biotransformación; se desmetila a desipramina sobre todo por la CYP3A4, la CYP2C19 y la CYP1A2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza extensamente en el hígado, que interviene primero por el efecto de primer paso y después por la biotransformación; se desmetila a desipramina sobre todo por la CYP3A4, la CYP2C19 y la CYP1A2.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La imipramina se metaboliza extensamente en el hígado',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desipramina (desmetilimipramina)',
          actividad: 'activo',
          nota: 'Metabolito activo principal.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito activo principal, la desmetilimipramina o desipramina, tiene una vida media ligeramente más alta que la de la molécula parental',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: '2-hidroxiimipramina y 2-hidroxidesipramina',
          actividad: 'activo',
          nota: 'Metabolitos activos que se inactivan por conjugación con ácido glucurónico.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: '2-hidroximipramina (metabolito activo) y 2-hidroxidesipramina (metabolito activo)',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Un 80 % se excreta por la orina y alrededor del 20 % por las heces, principalmente como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Un 80 % se excreta por la orina y alrededor del 20 % por las heces, principalmente como metabolitos.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Un 80 % se excreta por la orina y aproximadamente un 20% con las heces, principalmente como metabolitos inalterados',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media de eliminación en plasma varía entre 9 y 20 horas según la persona.',
          ref: {
            f: 'cima-40366',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La vida media de eliminación en plasma de imipramina varia de un sujeto a otro entre 9 y 20 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '25-50 (aprox.)',
      unidad: '%',
      analito: 'imipramina',
      ref: { f: 'cima-40366', sec: '5.2 · Propiedades farmacocinéticas', cita: 'de 25 a 50% aproximadamente', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '86 (aprox.)',
      unidad: '%',
      analito: 'imipramina',
      ref: {
        f: 'cima-40366',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a proteínas plasmáticas es del 86% aproximadamente',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución medio',
      valor: '21 (aprox.)',
      unidad: 'L/kg',
      analito: 'imipramina',
      ref: {
        f: 'cima-40366',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen aparente de distribución medio es de aproximadamente 21 l/kg del peso',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación en plasma',
      valor: '9-20',
      unidad: 'h',
      analito: 'imipramina',
      ref: {
        f: 'cima-40366',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación en plasma de imipramina varia de un sujeto a otro entre 9 y 20 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '80',
      unidad: '% de la dosis',
      analito: 'imipramina y metabolitos',
      ref: { f: 'cima-40366', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Un 80 % se excreta por la orina', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-40366', '40366', 'TOFRANIL 10 mg COMPRIMIDOS RECUBIERTOS (Amdipharm Limited)', '2025-09-15', '2026-11-15'),
    rengPubchem(3696, 'imipramine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
