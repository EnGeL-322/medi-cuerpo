import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'amisulprida',
    nombre: 'Amisulprida',
    clase: 'Antipsicótico (benzamida)',
    sinonimos: [ 'amisulpride', 'Solian' ],
    formula: 'C17H27N3O4S',
    masaMolar: 369.5,
    smiles: 'CCN1CCCC1CNC(=O)C2=CC(=C(C=C2OC)N)S(=O)(=O)CC',
    inchikey: 'NTJOBXMMWNYJFB-UHFFFAOYSA-N',
    cid: 2159,
    iupac: '4-amino-N-[(1-ethylpyrrolidin-2-yl)methyl]-5-ethylsulfonyl-2-methoxybenzamide',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'amisulprida-oral',
      producto: 'SOLIAN 100 mg COMPRIMIDOS',
      titular: 'Sanofi Aventis S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '100 mg de amisulprida por comprimido, según la ficha técnica',
      excipientes: [ 'Lactosa monohidrato', 'Celulosa microcristalina', 'Carboximetilalmidón de sodio', 'Hipromelosa', 'Estearato de magnesio' ],
      usos: {
        t: 'Tratamiento de la esquizofrenia.',
        ref: {
          f: 'cima-63994',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Amisulprida está indicado para el tratamiento de la esquizofrenia',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-63994',
      advertencias: [
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Puede producirse este síndrome, una complicación potencialmente mortal con hipertermia, rigidez muscular y alteración de la conciencia.',
          organos: [ 'encefalo', 'musculos' ],
          ref: {
            f: 'cima-63994',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'puede producirse síndrome neuroléptico maligno (SNM), una complicación potencialmente mortal',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Enfermedad de Parkinson',
          texto: 'Debe usarse con precaución en la enfermedad de Parkinson, que puede empeorar.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-63994',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'la prescripción de amisulprida debe realizarse con precaución a pacientes con enfermedad de Parkinson, ya que puede empeorar esta enfermedad',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Frecuente: aumento reversible de la prolactina plasmática, que puede dar galactorrea, amenorrea, ginecomastia, dolor en las mamas y disfunción eréctil.',
          'FT 4.8',
          'Amisulprida causa un incremento de los niveles plasmáticos de prolactina que es reversible después de interrumpir la administración del fármaco'
        ],
        [ 'Poco frecuentes: leucopenia y neutropenia; raro: agranulocitosis.', 'FT 4.8', 'Poco frecuentes : leucopenia, neutropenia' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg de amisulprida por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la esquizofrenia.',
    actua: 'Es un antipsicótico con afinidad por los subtipos D2 y D3 del receptor dopaminérgico humano y sin afinidad por los subtipos D1, D4 y D5.',
    recorrido: 'Muestra dos picos de absorción: uno rápido, una hora después de la dosis, y otro entre 3 y 4 horas después; la biodisponibilidad absoluta es del 48 %. Se elimina inalterada por la orina: el 50 % de una dosis intravenosa se excreta por la orina, el 90 % de ello en las primeras 24 horas.'
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
          ref: { f: 'cima-63994', sec: '3 · Forma farmacéutica', cita: 'SOLIAN 100 mg comprimidos / SOLIAN 200 mg comprimidos', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Muestra dos picos de absorción: uno rápido, una hora después de la dosis, y otro entre 3 y 4 horas después; la biodisponibilidad absoluta es del 48 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Muestra dos picos de absorción: uno rápido, una hora después de la dosis, y otro entre 3 y 4 horas después; la biodisponibilidad absoluta es del 48 %.',
          ref: {
            f: 'cima-63994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'amisulprida muestra dos picos de absorción: uno al que se llega rápidamente, una hora después de la dosis, y un segundo entre 3 y 4 horas después de la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es del 48 %.',
          ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es del 48%', codigo: 'FT 5.2' }
        },
        {
          t: 'Una comida rica en hidratos de carbono reduce significativamente el AUC, el Tmax y la Cmax; tras una comida rica en grasas no se observaron cambios.',
          ref: {
            f: 'cima-63994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Una comida rica en hidratos de carbono (que contenga un 68% de líquidos) disminuye significativamente los siguientes parámetros de amisulprida AUC, Tmax y Cmax, pero no se observaron cambios después de una comida rica en grasas',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La fijación a proteínas del plasma es baja (16 %) y el volumen de distribución es de 5,8 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La fijación a proteínas del plasma es baja (16 %) y el volumen de distribución es de 5,8 L/kg.',
          ref: {
            f: 'cima-63994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Como la fijación a proteínas plasmáticas es baja (16%)',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores dopaminérgicos D2 y D3',
        efecto: 'Es un antipsicótico con afinidad por los subtipos D2 y D3 del receptor dopaminérgico humano y sin afinidad por los subtipos D1, D4 y D5.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un antipsicótico con afinidad por los subtipos D2 y D3 del receptor dopaminérgico humano y sin afinidad por los subtipos D1, D4 y D5.',
            ref: {
              f: 'cima-63994',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Amisulprida es un agente antipsicótico con afinidad a los subtipos D 2 /D 3 del receptor dopaminérgico humano',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza débilmente: se han identificado dos metabolitos inactivos, que suponen aproximadamente el 4 % de la dosis.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza débilmente: se han identificado dos metabolitos inactivos, que suponen aproximadamente el 4 % de la dosis.',
          ref: {
            f: 'cima-63994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Amisulprida se metaboliza débilmente: se han identificado dos metabolitos inactivos, representando aproximadamente el 4% de la dosis',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Dos metabolitos identificados',
          actividad: 'inactivo',
          nota: 'Inactivos; aproximadamente el 4 % de la dosis.',
          ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se han identificado dos metabolitos inactivos', codigo: 'FT 5.2' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina inalterada por la orina: el 50 % de una dosis intravenosa se excreta por la orina, el 90 % de ello en las primeras 24 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina inalterada por la orina: el 50 % de una dosis intravenosa se excreta por la orina, el 90 % de ello en las primeras 24 horas.',
          ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Amisulprida se elimina inalterado por la orina', codigo: 'FT 5.2' }
        },
        {
          t: 'La semivida de eliminación es de aproximadamente 12 horas tras una dosis oral.',
          ref: {
            f: 'cima-63994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación de amisulprida se produce aproximadamente 12 horas después de una dosis oral',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '48',
      unidad: '%',
      analito: 'amisulprida',
      ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es del 48%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '16',
      unidad: '%',
      analito: 'amisulprida',
      ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Como la fijación a proteínas plasmáticas es baja (16%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '5,8',
      unidad: 'L/kg',
      analito: 'amisulprida',
      ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de 5,8 l/kg', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'amisulprida',
      ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'aproximadamente 12 horas después de una dosis oral', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis intravenosa excretada por la orina',
      valor: '50',
      unidad: '% de la dosis',
      analito: 'amisulprida',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: { f: 'cima-63994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El 50% de una dosis intravenosa se excreta por la orina', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-63994', '63994', 'SOLIAN 100 mg COMPRIMIDOS (Sanofi Aventis S.A.)', '2022-11-11', '2026-11-15'),
    rengPubchem(2159, 'amisulpride', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
