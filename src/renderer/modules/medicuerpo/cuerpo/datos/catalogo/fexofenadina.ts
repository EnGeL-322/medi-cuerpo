import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fexofenadina',
    nombre: 'Fexofenadina',
    clase: 'Antihistamínico H1 no sedante',
    sinonimos: [ 'fexofenadine', 'Telfast' ],
    formula: 'C32H39NO4',
    masaMolar: 501.7,
    smiles: 'CC(C)(C1=CC=C(C=C1)C(CCCN2CCC(CC2)C(C3=CC=CC=C3)(C4=CC=CC=C4)O)O)C(=O)O',
    inchikey: 'RWTNPBWLLIMQHL-UHFFFAOYSA-N',
    cid: 3348,
    iupac: '2-[4-[1-hydroxy-4-[4-[hydroxy(diphenyl)methyl]piperidin-1-yl]butyl]phenyl]-2-methylpropanoic acid',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'fexofenadina-oral',
      producto: 'TELFAST 120 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Opella Healthcare Spain S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '120 mg de fexofenadina hidrocloruro por comprimido',
      sal: {
        nombre: 'Fexofenadina hidrocloruro',
        ref: { f: 'cima-61910', sec: '2 · Composición cualitativa y cuantitativa', cita: 'fexofenadina hidrocloruro', codigo: 'FT 2' }
      },
      excipientes: [
        'Celulosa microcristalina',
        'almidón de maíz pregelatinizado',
        'croscarmelosa sódica',
        'estearato de magnesio',
        'hipromelosa',
        'povidona',
        'dióxido de titanio (E171)',
        'sílice coloidal anhidra',
        'macrogol',
        'óxido de hierro rojo (E172)',
        'óxido de hierro amarillo (E172)'
      ],
      usos: {
        t: 'Alivio de los síntomas de la rinitis alérgica en adultos y adolescentes desde 12 años.',
        ref: {
          f: 'cima-61910',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Telfast 120 mg está indicado en adultos y adolescentes a partir de 12 años para el alivio de los síntomas asociados a la rinitis alérgica',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-61910',
      advertencias: [
        {
          titulo: 'Enfermedad cardiovascular',
          texto: 'Los antihistamínicos se han asociado con taquicardia y palpitaciones; hay que advertirlo a personas con antecedentes o enfermedad cardiovascular.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-61910',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'los medicamentos clasificados como antihistamínicos, se han asociado con las siguientes reacciones adversas: taquicardia y palpitaciones',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Con una incidencia parecida a la del placebo: dolor de cabeza, somnolencia y mareos.',
          'FT 4.8',
          'Trastornos del sistema nervioso Frecuentes: dolor de cabeza, somnolencia, mareos'
        ],
        [ 'También náuseas.', 'FT 4.8', 'Trastornos gastrointestinales Frecuentes: náuseas' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 120 mg de fexofenadina hidrocloruro por comprimido. Los excipientes no son el principio activo.',
    usos: 'Alivio de los síntomas de la rinitis alérgica en adultos y adolescentes desde 12 años.',
    actua: 'Es un antihistamínico H1 no sedante, metabolito activo de la terfenadina; en la prueba de la piel su efecto empieza en 1 hora, alcanza el máximo a las 6 horas y dura 24 horas.',
    recorrido: 'Se absorbe rápidamente por vía oral y el máximo llega aproximadamente 1-3 horas después de la dosis; el valor medio de la Cmax fue de unos 427 ng/mL con 120 mg al día. La vía principal es posiblemente la excreción por la bilis; hasta el 10 % de la dosis sale por la orina sin cambios. La semivida terminal es de 11-15 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película, capsular, naranja pálido, de 120 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película, capsular, naranja pálido, de 120 mg.',
          ref: { f: 'cima-61910', sec: '3 · Forma farmacéutica', cita: 'de forma capsular y color naranja pálido', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente por vía oral y el máximo llega aproximadamente 1-3 horas después de la dosis; el valor medio de la Cmax fue de unos 427 ng/mL con 120 mg al día.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente por vía oral y el máximo llega aproximadamente 1-3 horas después de la dosis; el valor medio de la Cmax fue de unos 427 ng/mL con 120 mg al día.',
          ref: {
            f: 'cima-61910',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Fexofenadina hidrocloruro se absorbe rápidamente en el organismo tras la administración oral',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se encuentra unida un 60-70 % a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se encuentra unida un 60-70 % a proteínas del plasma.',
          ref: {
            f: 'cima-61910',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Fexofenadina se encuentra en un 60 - 70% unida a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina',
        efecto: 'Es un antihistamínico H1 no sedante, metabolito activo de la terfenadina; en la prueba de la piel su efecto empieza en 1 hora, alcanza el máximo a las 6 horas y dura 24 horas.',
        lugar: [ 'vias-respiratorias', 'piel' ],
        datos: [
          {
            t: 'Es un antihistamínico H1 no sedante, metabolito activo de la terfenadina; en la prueba de la piel su efecto empieza en 1 hora, alcanza el máximo a las 6 horas y dura 24 horas.',
            ref: {
              f: 'cima-61910',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Fexofenadina hidrocloruro es un antihistamínico H 1 no sedante',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Apenas se metaboliza, ni en el hígado ni fuera de él: fue el único compuesto importante en la orina y las heces.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Apenas se metaboliza, ni en el hígado ni fuera de él: fue el único compuesto importante en la orina y las heces.',
          ref: { f: 'cima-61910', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Apenas se metaboliza (hepática o no hepática)', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal es posiblemente la excreción por la bilis; hasta el 10 % de la dosis sale por la orina sin cambios. La semivida terminal es de 11-15 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal es posiblemente la excreción por la bilis; hasta el 10 % de la dosis sale por la orina sin cambios. La semivida terminal es de 11-15 horas.',
          ref: {
            f: 'cima-61910',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La principal vía de eliminación es posiblemente la excreción por el tracto biliar, mientras que hasta un 10% de la dosis ingerida se excreta en la orina',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '1-3 (aprox.)',
      unidad: 'h',
      analito: 'fexofenadina',
      ref: {
        f: 'cima-61910',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanzándose la T max aproximadamente 1 - 3 horas después de la dosis',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media tras 120 mg',
      valor: '427 (aprox.)',
      unidad: 'ng/mL',
      analito: 'fexofenadina',
      condiciones: 'dosis única diaria de 120 mg',
      ref: {
        f: 'cima-61910',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El valor medio de la C max fue aproximadamente de 427 ng/ml tras la administración de una dosis diaria única de 120 mg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '60-70',
      unidad: '%',
      analito: 'fexofenadina',
      ref: {
        f: 'cima-61910',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Fexofenadina se encuentra en un 60 - 70% unida a proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '11-15',
      unidad: 'h',
      analito: 'fexofenadina',
      condiciones: 'administración repetida',
      ref: {
        f: 'cima-61910',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'semivida de eliminación terminal que oscila entre 11 y 15 horas tras la administración reiterada',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '≤ 10',
      unidad: '% de la dosis',
      analito: 'fexofenadina',
      ref: {
        f: 'cima-61910',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'hasta un 10% de la dosis ingerida se excreta en la orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-61910', '61910', 'TELFAST 120 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Opella Healthcare Spain S.L.)', '2026-03-17', '2026-11-12'),
    rengPubchem(3348, 'fexofenadine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
