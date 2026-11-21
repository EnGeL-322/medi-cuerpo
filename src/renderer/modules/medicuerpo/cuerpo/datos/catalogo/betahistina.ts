import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'betahistina',
    nombre: 'Betahistina',
    clase: 'Análogo de la histamina (antivertiginoso)',
    sinonimos: [ 'betahistine', 'Serc' ],
    formula: 'C8H12N2',
    masaMolar: 136.19,
    smiles: 'CNCCC1=CC=CC=N1',
    inchikey: 'UUQMNUMQCIQDMZ-UHFFFAOYSA-N',
    cid: 2366,
    iupac: 'N-methyl-2-pyridin-2-ylethanamine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'betahistina-oral',
      producto: 'SERC 8 mg COMPRIMIDOS',
      titular: 'Neuraxpharm Spain S.L.U.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '8 mg de dihidrocloruro de betahistina por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Dihidrocloruro de betahistina',
        ref: { f: 'cima-55296', sec: '2 · Composición cualitativa y cuantitativa', cita: '8mg de dihidrocloruro de betahistina', codigo: 'FT 2' }
      },
      excipientes: [
        'Celulosa microcristalina',
        'Manitol',
        'Ácido cítrico monohidrato',
        'Sílice coloidal anhidra',
        'Talco',
        'Clorhidrato de L-cisteína monohidrato',
        'Galato de propilo'
      ],
      usos: {
        t: 'Tratamiento del síndrome de Menière, definido por la tríada de vértigo (con náuseas y vómitos), pérdida de audición y acúfenos.',
        ref: {
          f: 'cima-55296',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento del síndrome de Menière, definido por la tríada de síntomas',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-55296',
      advertencias: [
        {
          titulo: 'Asma bronquial y úlcera péptica',
          texto: 'Se recomienda vigilar con cuidado a los pacientes con asma bronquial o antecedentes de úlcera péptica.',
          organos: [ 'pulmones', 'estomago' ],
          ref: {
            f: 'cima-55296',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'asma bronquial y/o historia de úlcera péptica',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Frecuentes: náuseas y dispepsia.', 'FT 4.8', 'Frecuentes: náuseas y dispepsia' ],
        [ 'Frecuente: cefalea.', 'FT 4.8', 'Frecuentes: cefalea' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 8 mg de dihidrocloruro de betahistina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del síndrome de Menière, definido por la tríada de vértigo (con náuseas y vómitos), pérdida de audición y acúfenos.',
    actua: 'Su mecanismo es solo parcialmente conocido: actúa como agonista débil del receptor H1 de la histamina y como antagonista del receptor H3, también en el tejido neuronal.',
    recorrido: 'Se absorbe fácilmente y casi por completo en todas las partes del tracto gastrointestinal. El 2-PAA se excreta fácilmente por la orina: se recupera aproximadamente el 85 % de la dosis original.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-55296', sec: '3 · Forma farmacéutica', cita: 'Comprimido redondo, plano, blanco o blanquecino', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe fácilmente y casi por completo en todas las partes del tracto gastrointestinal.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe fácilmente y casi por completo en todas las partes del tracto gastrointestinal.',
          ref: {
            f: 'cima-55296',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La betahistina administrada por vía oral se absorbe fácilmente y casi completamente en todas las partes del tracto gastrointestinal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones de betahistina inalterada alcanzan su máximo 1 hora después de la administración; con alimento la Cmax es menor, aunque la absorción total es similar.',
          ref: {
            f: 'cima-55296',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Con alimento la Cmax es menor comparada con el estado de ayuno',
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
      ocurre: 'El porcentaje de betahistina unido a proteínas del plasma es inferior al 5 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El porcentaje de betahistina unido a proteínas del plasma es inferior al 5 %.',
          ref: {
            f: 'cima-55296',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El porcentaje de betahistina que se une a proteínas plasmáticas en sangre es inferior al 5 %',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores H1 y H3 de la histamina',
        efecto: 'Su mecanismo es solo parcialmente conocido: actúa como agonista débil del receptor H1 de la histamina y como antagonista del receptor H3, también en el tejido neuronal.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'Su mecanismo es solo parcialmente conocido: actúa como agonista débil del receptor H1 de la histamina y como antagonista del receptor H3, también en el tejido neuronal.',
            ref: {
              f: 'cima-55296',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La betahistina actúa como agonista débil del receptor de la histamina H 1 y también como antagonista del receptor de la histamina H 3 también en el tejido neuronal',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras la absorción se metaboliza rápida y casi por completo a ácido 2-piridilacético (2-PAA), que carece de actividad farmacológica.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras la absorción se metaboliza rápida y casi por completo a ácido 2-piridilacético (2-PAA), que carece de actividad farmacológica.',
          ref: {
            f: 'cima-55296',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la betahistina se metaboliza rápidamente y casi completamente en 2-PAA',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido 2-piridilacético (2-PAA)',
          actividad: 'inactivo',
          nota: 'Sin actividad farmacológica.',
          ref: { f: 'cima-55296', sec: '5.2 · Propiedades farmacocinéticas', cita: '2-PAA (que no tiene actividad farmacológica)', codigo: 'FT 5.2' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 2-PAA se excreta fácilmente por la orina: se recupera aproximadamente el 85 % de la dosis original.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 2-PAA se excreta fácilmente por la orina: se recupera aproximadamente el 85 % de la dosis original.',
          ref: {
            f: 'cima-55296',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'aproximadamente el 85 % de la dosis original se recupera en la orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración de 2-PAA declina con una semivida de unas 3,5 horas.',
          ref: {
            f: 'cima-55296',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'declina con una semivida de aproximadamente 3,5 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de betahistina inalterada',
      valor: '1',
      unidad: 'h',
      analito: 'betahistina',
      ref: {
        f: 'cima-55296',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'las concentraciones plasmáticas de la betahistina inalterada alcanzan su máximo en 1 hora después de la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '< 5',
      unidad: '%',
      analito: 'betahistina',
      ref: {
        f: 'cima-55296',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El porcentaje de betahistina que se une a proteínas plasmáticas en sangre es inferior al 5 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida del metabolito 2-PAA',
      valor: '3,5 (aprox.)',
      unidad: 'h',
      analito: '2-PAA',
      ref: { f: 'cima-55296', sec: '5.2 · Propiedades farmacocinéticas', cita: 'declina con una semivida de aproximadamente 3,5 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '85 (aprox.)',
      unidad: '% de la dosis',
      analito: '2-PAA',
      condiciones: 'rango de dosis de 8 a 48 mg',
      ref: {
        f: 'cima-55296',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente el 85 % de la dosis original se recupera en la orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-55296', '55296', 'SERC 8 mg COMPRIMIDOS (Neuraxpharm Spain S.L.U.)', '2026-10-13', '2026-11-15'),
    rengPubchem(2366, 'betahistine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
