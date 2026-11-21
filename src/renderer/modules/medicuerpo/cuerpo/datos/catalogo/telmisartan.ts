import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'telmisartan',
    nombre: 'Telmisartán',
    clase: 'Antagonista de los receptores de la angiotensina II',
    sinonimos: [ 'telmisartan', 'telmisartán', 'Micardis' ],
    formula: 'C33H30N4O2',
    masaMolar: 514.6,
    smiles: 'CCCC1=NC2=C(N1CC3=CC=C(C=C3)C4=CC=CC=C4C(=O)O)C=C(C=C2C)C5=NC6=CC=CC=C6N5C',
    inchikey: 'RMMXLENWKUUMAY-UHFFFAOYSA-N',
    cid: 65999,
    iupac: '2-[4-[[4-methyl-6-(1-methylbenzimidazol-2-yl)-2-propylbenzimidazol-1-yl]methyl]phenyl]benzoic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'telmisartan-oral',
      producto: 'TELMISARTAN CINFA 40 MG COMPRIMIDOS EFG',
      titular: 'Laboratorios Cinfa S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '20, 40 u 80 mg de telmisartán por comprimido, según la ficha técnica',
      excipientes: [
        'Manitol (E-421)',
        'Hidróxido sódico',
        'Meglumina',
        'Povidona PVPK25',
        'Kollidon CL',
        'Lactosa de compresión directa',
        'Estearato de magnesio'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión esencial en adultos y reducción de la morbilidad cardiovascular en adultos con enfermedad cardiovascular aterotrombótica o diabetes tipo 2 con lesión de órgano diana.',
        ref: { f: 'cima-77605', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipertensión esencial en adultos', codigo: 'FT 4.1' }
      },
      fuente: 'cima-77605',
      advertencias: [
        {
          titulo: 'Embarazo',
          texto: 'No se debe iniciar ningún tratamiento con antagonistas de los receptores de la angiotensina II durante el embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-77605',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'No se debe iniciar ningún tratamiento con Antagonistas de los Receptores de la Angiotensina II (ARA II) durante el embarazo',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Insuficiencia hepática y obstrucción biliar',
          texto: 'No debe administrarse a pacientes con colestasis, trastornos obstructivos biliares o insuficiencia hepática grave.',
          organos: [ 'higado', 'bilis' ],
          ref: {
            f: 'cima-77605',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Telmisartán no debe administrarse a pacientes con colestasis, trastornos obstructivos biliares o insuficiencia hepática grave',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones graves incluyen reacción anafiláctica y angioedema (raras) e insuficiencia renal aguda.',
          'FT 4.8',
          'Las reacciones adversas graves incluyen reacción anafiláctica y angioedema, que pueden ocurrir raramente'
        ],
        [
          'La incidencia global de reacciones adversas fue comparable a la del placebo (41,4 % frente a 43,9 %) en ensayos controlados en hipertensión.',
          'FT 4.8',
          '(41,4% vs. 43,9%), en ensayos controlados en pacientes tratados para la hipertensión'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 20, 40 u 80 mg de telmisartán por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión esencial en adultos y reducción de la morbilidad cardiovascular en adultos con enfermedad cardiovascular aterotrombótica o diabetes tipo 2 con lesión de órgano diana.',
    actua: 'Es un antagonista específico de los receptores de la angiotensina II (tipo AT1), activo por vía oral; se une de forma selectiva a ese receptor y su unión es de larga duración.',
    recorrido: 'La absorción es rápida aunque la cantidad absorbida varía; la biodisponibilidad absoluta media es de aproximadamente el 50 %. Se excreta de forma casi exclusiva por las heces, principalmente como compuesto inalterado; la excreción urinaria acumulativa es inferior al 1 % de la dosis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido sin recubrir: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido sin recubrir: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: {
            f: 'cima-77605',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimidos de color blanco, cilíndricos, biconvexos, no ranurados',
            codigo: 'FT 3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción es rápida aunque la cantidad absorbida varía; la biodisponibilidad absoluta media es de aproximadamente el 50 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es rápida aunque la cantidad absorbida varía; la biodisponibilidad absoluta media es de aproximadamente el 50 %.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta media para telmisartán es de aproximadamente el 50 %',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimento, la reducción del AUC varía de aproximadamente el 6 % (dosis de 40 mg) al 19 % (dosis de 160 mg).',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'varía de aproximadamente el 6 % (dosis de 40 mg) a aproximadamente el 19 % (dosis de 160 mg)',
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
      ocurre: 'Se une de forma elevada a las proteínas plasmáticas (más del 99,5 %), sobre todo a la albúmina y a la glucoproteína alfa-1 ácida.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une de forma elevada a las proteínas plasmáticas (más del 99,5 %), sobre todo a la albúmina y a la glucoproteína alfa-1 ácida.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Telmisartán se une de forma elevada a las proteínas plasmáticas (>99,5 %), principalmente a la albúmina y a la glucoproteína alfa-1 ácida',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución aparente medio en el estado de equilibrio es de aproximadamente 500 litros.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución aparente medio en el estado de equilibrio (V dss ) es de aproximadamente 500 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor AT1 de la angiotensina II',
        efecto: 'Es un antagonista específico de los receptores de la angiotensina II (tipo AT1), activo por vía oral; se une de forma selectiva a ese receptor y su unión es de larga duración.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista específico de los receptores de la angiotensina II (tipo AT1), activo por vía oral; se une de forma selectiva a ese receptor y su unión es de larga duración.',
            ref: {
              f: 'cima-77605',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Telmisartán es un antagonista específico de los receptores de la angiotensina II',
              codigo: 'FT 5.1'
            }
          },
          {
            t: 'Se une selectivamente al receptor AT1.',
            ref: {
              f: 'cima-77605',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Telmisartán se une selectivamente al receptor AT 1',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por conjugación al glucurónido de la sustancia original; el conjugado no tiene actividad farmacológica demostrada.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por conjugación al glucurónido de la sustancia original; el conjugado no tiene actividad farmacológica demostrada.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Telmisartán se metaboliza por conjugación al glucurónido de la sustancia original',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de telmisartán',
          actividad: 'inactivo',
          nota: 'Sin actividad farmacológica demostrada.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'No se ha demostrado actividad farmacológica para el conjugado',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta de forma casi exclusiva por las heces, principalmente como compuesto inalterado; la excreción urinaria acumulativa es inferior al 1 % de la dosis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta de forma casi exclusiva por las heces, principalmente como compuesto inalterado; la excreción urinaria acumulativa es inferior al 1 % de la dosis.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'telmisartán se excreta de forma casi exclusiva por las heces, principalmente como compuesto inalterado',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media de eliminación terminal es superior a 20 horas.',
          ref: {
            f: 'cima-77605',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'con una vida media de eliminación terminal >20 horas',
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
      nombre: 'Biodisponibilidad absoluta media',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'telmisartán',
      ref: {
        f: 'cima-77605',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta media para telmisartán es de aproximadamente el 50 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99,5',
      unidad: '%',
      analito: 'telmisartán',
      ref: {
        f: 'cima-77605',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Telmisartán se une de forma elevada a las proteínas plasmáticas (>99,5 %)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en equilibrio',
      valor: '500 (aprox.)',
      unidad: 'L',
      analito: 'telmisartán',
      ref: {
        f: 'cima-77605',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución aparente medio en el estado de equilibrio (V dss ) es de aproximadamente 500 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación terminal',
      valor: '> 20',
      unidad: 'h',
      analito: 'telmisartán',
      ref: { f: 'cima-77605', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una vida media de eliminación terminal >20 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excreción urinaria acumulativa',
      valor: '< 1',
      unidad: '% de la dosis',
      analito: 'telmisartán',
      ref: { f: 'cima-77605', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La excreción urinaria acumulativa es <1% de la dosis', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático total',
      valor: '1.000 (aprox.)',
      unidad: 'mL/min',
      analito: 'telmisartán',
      ref: {
        f: 'cima-77605',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El aclaramiento plasmático total (Cltot) es elevado (aproximadamente 1.000 ml/min)',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-77605', '77605', 'TELMISARTAN CINFA 40 MG COMPRIMIDOS EFG (Laboratorios Cinfa S.A.)', '2026-03-20', '2026-11-15'),
    rengPubchem(65999, 'telmisartan', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
