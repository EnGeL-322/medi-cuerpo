import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bromazepam',
    nombre: 'Bromazepam',
    clase: 'Benzodiazepina (ansiolítico)',
    sinonimos: [ 'bromazepam', 'Lexatin' ],
    formula: 'C14H10BrN3O',
    masaMolar: 316.15,
    smiles: 'C1C(=O)NC2=C(C=C(C=C2)Br)C(=N1)C3=CC=CC=N3',
    inchikey: 'VMIYHDSEFNYJSL-UHFFFAOYSA-N',
    cid: 2441,
    iupac: '7-bromo-5-pyridin-2-yl-1,3-dihydro-1,4-benzodiazepin-2-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'bromazepam-oral',
      producto: 'LEXATIN 3 mg CAPSULAS DURAS',
      titular: 'Cheplapharm Arzneimittel Gmbh',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '1,5 y 3 mg de bromazepam por cápsula, según la ficha técnica',
      excipientes: [
        'Lactosa',
        'Almidón de maíz',
        'Talco',
        'Estearato magnésico',
        'Índigo carmín E-132',
        'Eritrosina E-127',
        'Dióxido de titanio E-171',
        'Gelatina',
        'Óxido de hierro rojo E-172',
        'Óxido de hierro amarillo E-172'
      ],
      usos: {
        t: 'Tratamiento de enfermedades con síntomas como ansiedad, angustia, obsesiones, compulsiones, fobias e hipocondrías.',
        ref: {
          f: 'cima-55751',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Lexatin está indicado para el tratamiento de enfermedades que cursen con síntomas tales como ansiedad, angustia, obsesiones, compulsiones, fobias e hipocondrías',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-55751',
      advertencias: [
        {
          titulo: 'Amnesia',
          texto: 'Las benzodiazepinas pueden inducir amnesia anterógrada.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-55751',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Las benzodiazepinas pueden inducir amnesia anterógrada',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Reacciones psiquiátricas y paradójicas',
          texto: 'Pueden producir intranquilidad, agitación, irritabilidad, agresividad, ansiedad y delirios, entre otros efectos.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-55751',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Las benzodiazepinas pueden producir reacciones tales como intranquilidad, agitación, irritabilidad, agresividad,ansiedad,delirios',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Entre las reacciones de frecuencia no conocida figuran la hipersensibilidad, el shock anafiláctico y el angioedema.',
          'FT 4.8',
          'Hipersensibilidad, shock anafiláctico, angioedema'
        ],
        [
          'También se describen confusión, desorientación, alteraciones del humor, trastornos de la libido, dependencia, abuso y síndrome de abstinencia.',
          'FT 4.8',
          'Confusión*,desorientación, alteraciones emocionales del humor*, trastornos de la libido, dependencia al medicamento**, abuso del medicamento**, síndrome de abstinencia**'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 1,5 y 3 mg de bromazepam por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de enfermedades con síntomas como ansiedad, angustia, obsesiones, compulsiones, fobias e hipocondrías.',
    actua: 'Sus acciones centrales están mediadas por un aumento de la neurotransmisión GABAérgica en la sinapsis inhibitoria.',
    recorrido: 'Se absorbe rápidamente y alcanza las concentraciones plasmáticas máximas dentro de las 2 horas siguientes a la toma; la biodisponibilidad absoluta es del 60 %. El metabolismo es la vía de eliminación clave: solo el 2 % de la dosis se recupera inalterado en la orina, el resto como conjugados glucurónidos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula dura tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-55751', sec: '3 · Forma farmacéutica', cita: 'Lexatin 1,5 mg: cápsula dura opaca, de color blanco y rojo', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente y alcanza las concentraciones plasmáticas máximas dentro de las 2 horas siguientes a la toma; la biodisponibilidad absoluta es del 60 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente y alcanza las concentraciones plasmáticas máximas dentro de las 2 horas siguientes a la toma; la biodisponibilidad absoluta es del 60 %.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El Bromazepam se absorbe rápidamente y alcanza las concentraciones plasmáticas máximas dentro de las 2 horas siguientes a la administración por vía oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La ingesta de alimento puede retrasar la biodisponibilidad, aunque no se ha establecido su relevancia clínica.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta de alimento puede retrasar la biodisponibilidad del Lexatin aunque la relevancia clínica no ha sido establecida',
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
      ocurre: 'Se distribuye rápidamente en el organismo; la unión a proteínas del plasma es del 70 % por término medio, a la albúmina y a la glucoproteína ácida alfa-1.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye rápidamente en el organismo; la unión a proteínas del plasma es del 70 % por término medio, a la albúmina y a la glucoproteína ácida alfa-1.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión del bromazepam a las proteínas plasmáticas por interacción hidrófoba es del 70%, por término medio',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución es de aproximadamente 50 litros.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución es aproximadamente de 50 litros',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor GABA-A (modulación alostérica positiva)',
        efecto: 'Sus acciones centrales están mediadas por un aumento de la neurotransmisión GABAérgica en la sinapsis inhibitoria.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Sus acciones centrales están mediadas por un aumento de la neurotransmisión GABAérgica en la sinapsis inhibitoria.',
            ref: {
              f: 'cima-55751',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Las acciones centrales de las benzodiazepinas están mediadas por un aumento de la neurotransmisión GABAérgica en la sinapsis inhibitoria',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza generalmente en el hígado, al menos en parte por el citocromo P450; no se forman metabolitos con una semivida más larga que la del fármaco original.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza generalmente en el hígado, al menos en parte por el citocromo P450; no se forman metabolitos con una semivida más larga que la del fármaco original.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El bromazepam se metaboliza generalmente en el hígado',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '3-hidroxi-bromazepam',
          actividad: 'activo',
          nota: 'Menos activo que el bromazepam.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Cuantitativamente dominan dos metabolitos, el 3-hidroxi-bromazepam (menos activo que el bromazepam)',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: '2-(2-amino-5-bromo-3-hidroxibenzoil)piridina',
          actividad: 'inactivo',
          nota: 'Inactivo.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: '2-(2-amino-5-bromo-3-hidroxibenzoil) piridina (inactivo)',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El metabolismo es la vía de eliminación clave: solo el 2 % de la dosis se recupera inalterado en la orina, el resto como conjugados glucurónidos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El metabolismo es la vía de eliminación clave: solo el 2 % de la dosis se recupera inalterado en la orina, el resto como conjugados glucurónidos.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La tasa de recuperación urinaria de bromazepam inalterado es únicamente del 2%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 20 horas y el aclaramiento renal, de aproximadamente 40 mL/min.',
          ref: {
            f: 'cima-55751',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación del bromazepam es de unas 20 horas y el aclaramiento renal es aproximadamente de 40 ml/min',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '≤ 2',
      unidad: 'h',
      analito: 'bromazepam',
      ref: {
        f: 'cima-55751',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanza las concentraciones plasmáticas máximas dentro de las 2 horas siguientes a la administración por vía oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '60',
      unidad: '%',
      analito: 'bromazepam',
      ref: { f: 'cima-55751', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta del bromazepam es del 60%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '70 (media)',
      unidad: '%',
      analito: 'bromazepam',
      ref: { f: 'cima-55751', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es del 70%, por término medio', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '50 (aprox.)',
      unidad: 'L',
      analito: 'bromazepam',
      ref: {
        f: 'cima-55751',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución es aproximadamente de 50 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '20 (aprox.)',
      unidad: 'h',
      analito: 'bromazepam',
      ref: {
        f: 'cima-55751',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación del bromazepam es de unas 20 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado inalterado en la orina',
      valor: '2',
      unidad: '% de la dosis',
      analito: 'bromazepam',
      ref: { f: 'cima-55751', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es únicamente del 2%', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-55751', '55751', 'LEXATIN 3 mg CAPSULAS DURAS (Cheplapharm Arzneimittel Gmbh)', '2020-04-14', '2026-11-15'),
    rengPubchem(2441, 'bromazepam', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
