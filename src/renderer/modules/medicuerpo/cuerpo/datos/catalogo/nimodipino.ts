import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nimodipino',
    nombre: 'Nimodipino',
    clase: 'Bloqueante de canales de calcio (dihidropiridina)',
    sinonimos: [ 'nimodipine', 'Brainal' ],
    formula: 'C21H26N2O7',
    masaMolar: 418.4,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OC(C)C)C2=CC(=CC=C2)[N+](=O)[O-])C(=O)OCCOC',
    inchikey: 'UIAGMCDKSXEBJQ-UHFFFAOYSA-N',
    cid: 4497,
    iupac: '3-O-(2-methoxyethyl) 5-O-propan-2-yl 2,6-dimethyl-4-(3-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'nimodipino-oral',
      producto: 'BRAINAL 30 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Aristo Pharma Iberia S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '30 mg de nimodipino por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina (E-460)',
        'Almidón de maíz pregelatinizado',
        'Crospovidona',
        'Povidona (E-1201)',
        'Estearato de magnesio (E-572)',
        'Hidroxipropilmetilcelulosa',
        'Polietilenglicol 400',
        'Dióxido de titanio (E 171)'
      ],
      usos: {
        t: 'Prevención del deterioro neurológico causado por el vasoespasmo cerebral secundario a hemorragia subaracnoidea por rotura de aneurisma.',
        ref: {
          f: 'cima-58780',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Prevención del deterioro neurológico ocasionado por vasoespasmo cerebral secundario a hemorragia subaracnoidea por rotura de aneurisma',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-58780',
      advertencias: [
        {
          titulo: 'Hemorragia subaracnoidea de origen traumático',
          texto: 'No debe utilizarse en pacientes con hemorragia subaracnoidea de origen traumático.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-58780',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Nimodipino no debe ser utilizado en pacientes con hemorragia subaracnoidea de origen traumático',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Insuficiencia renal grave',
          texto: 'Debe evaluarse con cuidado la necesidad del tratamiento y controlarse la función renal a intervalos regulares.',
          organos: [ 'rinones' ],
          ref: {
            f: 'cima-58780',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'deberá evaluarse cuidadosamente la necesidad del tratamiento y se realizarán controles de la función renal a intervalos regulares',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'La reacción adversa notificada con más frecuencia es la hipotensión arterial.',
          'FT 4.8',
          'La reacción adversa que se ha notificado con más frecuencia es la hipotensión arterial'
        ],
        [
          'La hipotensión puede ocurrir en el 8 % de los pacientes tratados, pero muy raramente obliga a interrumpir el tratamiento.',
          'FT 4.8',
          'Puede ocurrir en el 8% de los pacientes tratados con Brainal'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 30 mg de nimodipino por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Prevención del deterioro neurológico causado por el vasoespasmo cerebral secundario a hemorragia subaracnoidea por rotura de aneurisma.',
    actua: 'Es un antagonista del calcio indicado en la profilaxis y el tratamiento de los déficits neurológicos de tipo isquémico causados por vasoespasmo cerebral tras una hemorragia subaracnoidea.',
    recorrido: 'Administrado por vía oral se absorbe casi por completo y la absorción digestiva es rápida. En el hombre, alrededor del 50 % de los metabolitos se excreta por vía renal y el 30 % por la bilis.'
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
          ref: { f: 'cima-58780', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Administrado por vía oral se absorbe casi por completo y la absorción digestiva es rápida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Administrado por vía oral se absorbe casi por completo y la absorción digestiva es rápida.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principio activo, nimodipino administrado por vía oral se absorbe casi por completo',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan entre 30 minutos y una hora después de la administración oral.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción digestiva es rápida: se alcanzan concentraciones plasmáticas máximas entre 30 minutos y una hora después de la administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad es baja, del orden del 8-10 %, por el importante efecto de primer paso.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Su biodisponibilidad es baja, del orden del 8-10%, como consecuencia del importante efecto de primer paso que tiene lugar',
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
      ocurre: 'La unión a proteínas del plasma es alta (alrededor del 98 %) y el volumen de distribución es de 0,9 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es alta (alrededor del 98 %) y el volumen de distribución es de 0,9 L/kg.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas es alta, del orden de 98%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución es de 0,9 L/kg.',
          ref: { f: 'cima-58780', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su volumen de distribución es de 0,9 l/kg', codigo: 'FT 5.2' }
        },
        {
          t: 'Después de la administración oral e intravenosa se detecta en el líquido cefalorraquídeo a concentraciones de aproximadamente el 0,5 % de las plasmáticas.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el nimodipino se puede detectar en el líquido cefalorraquídeo (LCR) a concentraciones de aprox. 0,5% de las concentraciones plasmáticas medidas',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Canales de calcio',
        efecto: 'Es un antagonista del calcio indicado en la profilaxis y el tratamiento de los déficits neurológicos de tipo isquémico causados por vasoespasmo cerebral tras una hemorragia subaracnoidea.',
        lugar: [ 'encefalo', 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista del calcio indicado en la profilaxis y el tratamiento de los déficits neurológicos de tipo isquémico causados por vasoespasmo cerebral tras una hemorragia subaracnoidea.',
            ref: {
              f: 'cima-58780',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Nimodipino (Brainal) es un antagonista del calcio indicado en la profilaxis y tratamiento de déficits neurológicos de tipo isquémico causados por vasoespasmo cerebral tras hemorragia subaracnoidea',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina por vía metabólica a través de la CYP3A4, sobre todo por deshidrogenación del anillo dihidropiridínico y o-desmetilación oxidativa; la glucuronidación es otro paso importante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina por vía metabólica a través de la CYP3A4, sobre todo por deshidrogenación del anillo dihidropiridínico y o-desmetilación oxidativa; la glucuronidación es otro paso importante.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Nimodipino se elimina por vía metabólica a través de la isoenzima 3A4 del citocromo P450, principalmente, mediante la deshidrogenación del anillo dihidropiridínico y la o-desmetilación oxidativa',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Tres metabolitos principales del plasma',
          actividad: 'inactivo',
          nota: 'Actividad residual nula o terapéuticamente insignificante.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los 3 metabolitos principales que aparecen en plasma muestran una actividad residual nula o terapéuticamente insignificante',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En el hombre, alrededor del 50 % de los metabolitos se excreta por vía renal y el 30 % por la bilis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En el hombre, alrededor del 50 % de los metabolitos se excreta por vía renal y el 30 % por la bilis.',
          ref: {
            f: 'cima-58780',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En el hombre, alrededor del 50% de los metabolitos se excreta por vía renal y el 30% por la bilis',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Su vida media es de aproximadamente una a dos horas.',
          ref: { f: 'cima-58780', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su vida media es de aproximadamente una a dos horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones plasmáticas máximas',
      valor: '30-60',
      unidad: 'min',
      analito: 'nimodipino',
      ref: {
        f: 'cima-58780',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanzan concentraciones plasmáticas máximas entre 30 minutos y una hora después de la administración oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '8-10',
      unidad: '%',
      analito: 'nimodipino',
      ref: { f: 'cima-58780', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su biodisponibilidad es baja, del orden del 8-10%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'nimodipino',
      ref: {
        f: 'cima-58780',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a proteínas plasmáticas es alta, del orden de 98%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,9',
      unidad: 'L/kg',
      analito: 'nimodipino',
      ref: { f: 'cima-58780', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su volumen de distribución es de 0,9 l/kg', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media',
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'nimodipino',
      ref: { f: 'cima-58780', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su vida media es de aproximadamente una a dos horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Metabolitos excretados por vía renal',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'nimodipino',
      ref: {
        f: 'cima-58780',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alrededor del 50% de los metabolitos se excreta por vía renal',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-58780', '58780', 'BRAINAL 30 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Aristo Pharma Iberia S.L.)', '2024-09-13', '2026-11-15'),
    rengPubchem(4497, 'nimodipine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
