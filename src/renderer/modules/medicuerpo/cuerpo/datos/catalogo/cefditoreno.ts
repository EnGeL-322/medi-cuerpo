import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cefditoreno',
    nombre: 'Cefditoreno',
    clase: 'Antibiótico cefalosporina de tercera generación',
    sinonimos: [ 'cefditoren', 'cefditoren pivoxil', 'Meiact' ],
    formula: 'C25H28N6O7S3',
    masaMolar: 620.7,
    smiles: 'CC1=C(SC=N1)/C=C\\C2=C(N3[C@@H]([C@@H](C3=O)NC(=O)/C(=N\\OC)/C4=CSC(=N4)N)SC2)C(=O)OCOC(=O)C(C)(C)C',
    inchikey: 'AFZFFLVORLEPPO-UVYJNCLZSA-N',
    cid: 6437877,
    iupac: '2,2-dimethylpropanoyloxymethyl (6R,7R)-7-[[(2Z)-2-(2-amino-1,3-thiazol-4-yl)-2-methoxyiminoacetyl]amino]-3-[(Z)-2-(4-methyl-1,3-thiazol-5-yl)ethenyl]-8-oxo-5-thia-1-azabicyclo[4.2.0]oct-2-ene-2-carboxylate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'cefditoreno-oral',
      producto: 'MEIACT 200 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Meiji Pharma Spain S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '200 mg de cefditoreno (como pivoxilo) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Pivoxilo de cefditoreno',
        ref: { f: 'cima-65943', sec: '2 · Composición cualitativa y cuantitativa', cita: '245,1 mg de pivoxilo de cefditoren', codigo: 'FT 2' }
      },
      excipientes: [
        'Caseinato de sodio',
        'Croscarmelosa de sodio',
        'Manitol E-421',
        'Tripolifosfato de sodio',
        'Estearato de magnesio',
        'Hipromelosa',
        'Dióxido de titanio E-171',
        'Macrogol 400',
        'Cera carnauba',
        'Tinta de impresión azul'
      ],
      usos: {
        t: 'Tratamiento de infecciones producidas por microorganismos sensibles, como la faringoamigdalitis aguda y la sinusitis.',
        ref: {
          f: 'cima-65943',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'MEIACT está indicado en el tratamiento de las siguientes infecciones producidas por microorganismos sensibles',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-65943',
      advertencias: [
        {
          titulo: 'Diarrea asociada a antibióticos',
          texto: 'Se han detectado diarrea asociada a antibióticos, colitis y colitis pseudomembranosa con el uso de cefditoreno.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'cima-65943',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se ha detectado diarrea asociada a antibióticos, colitis y colitis pseudomembranosa con el uso de cefditoreno',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Hipersensibilidad previa',
          texto: 'Antes de empezar hay que preguntar por reacciones de hipersensibilidad anteriores a cefalosporinas, penicilinas u otros betalactámicos.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'cima-65943',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'se debe solicitar información para determinar si el paciente ha tenido reacciones de hipersensibilidad anteriores',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Alrededor del 24 % de los pacientes comunicó al menos una reacción adversa.',
          'FT 4.8',
          'Aproximadamente el 24% de los pacientes comunicaron al menos una reacción adversa'
        ],
        [ 'Las más comunes fueron las de tipo gastrointestinal.', 'FT 4.8', 'Las reacciones adversas más comunes fueron las de tipo gastrointestinal' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg de cefditoreno (como pivoxilo) por comprimido, según la ficha técnica; el activo va como pivoxilo de cefditoreno. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de infecciones producidas por microorganismos sensibles, como la faringoamigdalitis aguda y la sinusitis.',
    actua: 'Ejerce su acción antibacteriana mediante la inhibición de la síntesis de la pared bacteriana, por su afinidad por las proteínas fijadoras de penicilina (PBP).',
    recorrido: 'Cefditoreno pivoxilo se absorbe en el tubo digestivo y se hidroliza a cefditoreno por acción de esterasas. Hasta el 18 % de la dosis se recupera sin metabolizar en la orina; la fracción no absorbida se elimina por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-65943', sec: '3 · Forma farmacéutica', cita: 'Comprimido blanco de forma elíptica', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Cefditoreno pivoxilo se absorbe en el tubo digestivo y se hidroliza a cefditoreno por acción de esterasas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Cefditoreno pivoxilo se absorbe en el tubo digestivo y se hidroliza a cefditoreno por acción de esterasas.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de la administración oral, cefditoreno pivoxilo se absorbe en el tracto gastrointestinal y se hidroliza a cefditoreno por acción de esterasas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta por vía oral es aproximadamente del 15-20 %.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta de cefditoreno administrado por vía oral es aproximadamente del 15-20%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Los alimentos incrementan la absorción: la Cmax y el AUC son aproximadamente un 50 % a un 70 % mayores que en ayunas.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La presencia de alimentos en el tracto gastrointestinal incrementa la absorción de cefditoreno pivoxilo',
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
      ocurre: 'Se une en un 88 % a las proteínas del plasma; el volumen de distribución en estado estacionario es de unos 40-65 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 88 % a las proteínas del plasma; el volumen de distribución en estado estacionario es de unos 40-65 litros.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Cefditoreno se une en un 88% a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución en estado estacionario es relativamente independiente de la dosis (40-65 litros).',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'es relativamente independiente de la dosis (40- 65 litros )',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Proteínas fijadoras de penicilina (PBP)',
        efecto: 'Ejerce su acción antibacteriana mediante la inhibición de la síntesis de la pared bacteriana, por su afinidad por las proteínas fijadoras de penicilina (PBP).',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Ejerce su acción antibacteriana mediante la inhibición de la síntesis de la pared bacteriana, por su afinidad por las proteínas fijadoras de penicilina (PBP).',
            ref: {
              f: 'cima-65943',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Cefditoreno ejerce su acción antibacteriana mediante la inhibición de la síntesis de la pared bacteriana debido a su afinidad por las proteínas fijadoras de penicilina (PBPs)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El pivoxilo se hidroliza a cefditoreno; la mayor parte del cefditoreno que aparece en las heces lo hace como metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El pivoxilo se hidroliza a cefditoreno; la mayor parte del cefditoreno que aparece en las heces lo hace como metabolitos inactivos.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'donde aparece la mayor parte del cefditoren administrado en forma de metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos fecales de cefditoreno',
          actividad: 'inactivo',
          nota: 'Inactivos; aparecen en las heces.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'donde aparece la mayor parte del cefditoren administrado en forma de metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Hasta el 18 % de la dosis se recupera sin metabolizar en la orina; la fracción no absorbida se elimina por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Hasta el 18 % de la dosis se recupera sin metabolizar en la orina; la fracción no absorbida se elimina por las heces.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Cefditoreno se recupera hasta en un 18% de la dosis administrada sin metabolizar a través de orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación en plasma es de aproximadamente 1 a 1,5 horas.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación de cefditoreno en plasma es de aproximadamente 1 a 1,5 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La porción de pivalato se elimina por vía renal conjugada como pivaloilcarnitina.',
          ref: {
            f: 'cima-65943',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La porción de pivalato se elimina por vía renal conjugado como pivaloilcarnitina',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '15-20',
      unidad: '%',
      analito: 'cefditoreno',
      ref: { f: 'cima-65943', sec: '5.2 · Propiedades farmacocinéticas', cita: 'aproximadamente del 15-20%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '88',
      unidad: '%',
      analito: 'cefditoreno',
      ref: { f: 'cima-65943', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Cefditoreno se une en un 88% a proteínas plasmáticas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación en plasma',
      valor: '1-1,5 (aprox.)',
      unidad: 'h',
      analito: 'cefditoreno',
      ref: { f: 'cima-65943', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de aproximadamente 1 a 1,5 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada sin metabolizar en la orina',
      valor: '18',
      unidad: '% de la dosis',
      analito: 'cefditoreno',
      ref: {
        f: 'cima-65943',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'hasta en un 18% de la dosis administrada sin metabolizar a través de orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-65943', '65943', 'MEIACT 200 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Meiji Pharma Spain S.A.)', '2026-04-17', '2026-11-15'),
    rengPubchem(6437877, 'cefditoren', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
