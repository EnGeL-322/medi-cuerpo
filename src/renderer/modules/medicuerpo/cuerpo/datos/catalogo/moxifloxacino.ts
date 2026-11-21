import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'moxifloxacino',
    nombre: 'Moxifloxacino',
    clase: 'Antibiótico fluoroquinolona',
    sinonimos: [ 'moxifloxacin', 'Erelan' ],
    formula: 'C21H24FN3O4',
    masaMolar: 401.4,
    smiles: 'COC1=C2C(=CC(=C1N3C[C@@H]4CCCN[C@@H]4C3)F)C(=O)C(=CN2C5CC5)C(=O)O',
    inchikey: 'FABPRXSRWADJSP-MEDUHNTESA-N',
    cid: 152946,
    iupac: '7-[(4aS,7aS)-1,2,3,4,4a,5,7,7a-octahydropyrrolo[3,4-b]pyridin-6-yl]-1-cyclopropyl-6-fluoro-8-methoxy-4-oxoquinoline-3-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'moxifloxacino-oral',
      producto: 'ERELAN 400 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Medochemie Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '400 mg de moxifloxacino (como hidrocloruro) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de moxifloxacino',
        ref: {
          f: 'cima-83756',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: '400 mg de moxifloxacino (en forma de hidrocloruro)',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Celulosa microcristalina (E 460)',
        'Lactosa monohidrato 230',
        'Croscarmelosa sódica (E 468)',
        'Estearato de magnesio (E 470b)',
        'Hipromelosa (E 464)',
        'Macrogol (E 1521)',
        'Dióxido de titanio (E 171)',
        'Óxido de hierro rojo (E 172)'
      ],
      usos: {
        t: 'Tratamiento de infecciones bacterianas causadas por microorganismos sensibles en pacientes desde 18 años.',
        ref: {
          f: 'cima-83756',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'está indicado para el tratamiento de las siguientes infecciones bacterianas en pacientes con 18 años en adelante',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-83756',
      advertencias: [
        {
          titulo: 'Reacciones adversas graves previas con quinolonas',
          texto: 'Debe evitarse en pacientes que hayan tenido reacciones adversas graves con quinolonas o fluoroquinolonas.',
          organos: [ 'musculos', 'nervios' ],
          ref: {
            f: 'cima-83756',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se debe evitar el uso de moxifloxacino en pacientes que hayan experimentado con anterioridad reacciones adversas graves con el uso de medicamentos que contienen quinolonas o fluoroquinolonas',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Disección aórtica, aneurisma y valvulopatía',
          texto: 'La ficha advierte sobre disección aórtica, aneurisma y regurgitación o insuficiencia de las válvulas cardíacas.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'cima-83756',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Disección aórtica y aneurisma y regurgitación/insuficiencia de las válvulas cardíacas',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Con excepción de la diarrea y las náuseas, las demás reacciones adversas se observaron con una frecuencia inferior al 3 %.',
          'FT 4.8',
          'Con excepción de la diarrea y las náuseas todas las demás reacciones adversas se observaron con una frecuencia inferior al 3%'
        ],
        [
          'Las reacciones adversas proceden de ensayos clínicos y de informes poscomercialización con moxifloxacino 400 mg oral y en terapia secuencial.',
          'FT 4.8',
          'las reacciones adversas observadas en ensayos clínicos y procedentes de informes poscomercialización con moxifloxacino 400 mg'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 400 mg de moxifloxacino (como hidrocloruro) por comprimido, según la ficha técnica; el activo va como hidrocloruro de moxifloxacino. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de infecciones bacterianas causadas por microorganismos sensibles en pacientes desde 18 años.',
    actua: 'Su acción bactericida resulta de la inhibición de las topoisomerasas II (ADN girasa) y IV bacterianas; tiene actividad in vitro frente a un amplio espectro de microorganismos grampositivos y gramnegativos.',
    recorrido: 'Tras la administración oral se absorbe rápida y casi completamente; la biodisponibilidad absoluta es de aproximadamente el 91 %. Tras una dosis de 400 mg, en la orina se recuperó aproximadamente un 19 % de fármaco inalterado, un 2,5 % de M1 y un 14 % de M2, y en las heces el resto, hasta cerca del 96 % en total.'
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
          ref: { f: 'cima-83756', sec: '3 · Forma farmacéutica', cita: 'Comprimidos recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral se absorbe rápida y casi completamente; la biodisponibilidad absoluta es de aproximadamente el 91 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral se absorbe rápida y casi completamente; la biodisponibilidad absoluta es de aproximadamente el 91 %.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras su administración oral, moxifloxacino se absorbe rápida y casi completamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras una dosis oral de 400 mg se alcanzan concentraciones máximas de 3,1 mg/L en 0,5-4 horas.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se alcanzan concentraciones máximas de 3,1 mg/l en 0,5 - 4 horas tras la administración',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'pulmones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye rápidamente a los espacios extravasculares; el volumen de distribución en el estado estacionario es de unos 2 L/kg y la unión a proteínas es de aproximadamente el 40-42 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye rápidamente a los espacios extravasculares; el volumen de distribución en el estado estacionario es de unos 2 L/kg y la unión a proteínas es de aproximadamente el 40-42 %.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Moxifloxacino se distribuye rápidamente a los espacios extravasculares',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución en el estado estacionario es de aproximadamente 2 L/kg.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución en estado estacionario (V ss ) es de aproximadamente 2 l/kg',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En experimentos in vitro y ex vivo se observó una unión a proteínas de aproximadamente el 40-42 %, independiente de la concentración, sobre todo a la albúmina.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se observó una unión a proteínas de aproximadamente un 40 - 42%, independiente de la concentración del fármaco',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'ADN girasa (topoisomerasa II) y topoisomerasa IV bacterianas',
        efecto: 'Su acción bactericida resulta de la inhibición de las topoisomerasas II (ADN girasa) y IV bacterianas; tiene actividad in vitro frente a un amplio espectro de microorganismos grampositivos y gramnegativos.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Su acción bactericida resulta de la inhibición de las topoisomerasas II (ADN girasa) y IV bacterianas; tiene actividad in vitro frente a un amplio espectro de microorganismos grampositivos y gramnegativos.',
            ref: {
              f: 'cima-83756',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La acción bactericida de moxifloxacino resulta de la inhibición de ambos tipos de topoisomerasas II',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Experimenta una biotransformación de fase II y se excreta por vía renal y biliar o fecal como fármaco inalterado y como sulfo-compuesto (M1) y glucurónido (M2); no hay indicios de metabolismo oxidativo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Experimenta una biotransformación de fase II y se excreta por vía renal y biliar o fecal como fármaco inalterado y como sulfo-compuesto (M1) y glucurónido (M2); no hay indicios de metabolismo oxidativo.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Moxifloxacino experimenta una biotransformación en Fase II y es excretado por vía renal y biliar/fecal como fármaco inalterado y en forma de sulfo-compuesto (M1) y glucurónido (M2)',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1 (sulfo-compuesto) y M2 (glucurónido)',
          actividad: 'inactivo',
          nota: 'Microbiológicamente inactivos.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'M1 y M2 son los únicos metabolitos relevantes en el hombre, y ambos son microbiológicamente inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis de 400 mg, en la orina se recuperó aproximadamente un 19 % de fármaco inalterado, un 2,5 % de M1 y un 14 % de M2, y en las heces el resto, hasta cerca del 96 % en total.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis de 400 mg, en la orina se recuperó aproximadamente un 19 % de fármaco inalterado, un 2,5 % de M1 y un 14 % de M2, y en las heces el resto, hasta cerca del 96 % en total.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras una dosis de 400 mg, la recuperación en la orina (aproximadamente 19% de fármaco inalterado, aproximadamente 2,5% de M1 y aproximadamente 14% de M2)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación media del plasma es de aproximadamente 12 horas.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Moxifloxacino se elimina del plasma con una semivida de eliminación media de aproximadamente 12 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El aclaramiento corporal total medio aparente tras 400 mg oscila entre 179 y 246 mL/min.',
          ref: {
            f: 'cima-83756',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El aclaramiento corporal total medio aparente tras una dosis de 400 mg oscila entre 179 y 246 ml/min',
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
      valor: '91 (aprox.)',
      unidad: '%',
      analito: 'moxifloxacino',
      ref: {
        f: 'cima-83756',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta es de aproximadamente del 91%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '0,5-4',
      unidad: 'h',
      analito: 'moxifloxacino',
      condiciones: 'dosis oral de 400 mg',
      ref: {
        f: 'cima-83756',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanzan concentraciones máximas de 3,1 mg/l en 0,5 - 4 horas tras la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '40-42 (aprox.)',
      unidad: '%',
      analito: 'moxifloxacino',
      condiciones: 'in vitro y ex vivo',
      ref: { f: 'cima-83756', sec: '5.2 · Propiedades farmacocinéticas', cita: 'una unión a proteínas de aproximadamente un 40 - 42%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en el estado estacionario',
      valor: '2 (aprox.)',
      unidad: 'L/kg',
      analito: 'moxifloxacino',
      ref: {
        f: 'cima-83756',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución en estado estacionario (V ss ) es de aproximadamente 2 l/kg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'moxifloxacino',
      ref: {
        f: 'cima-83756',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con una semivida de eliminación media de aproximadamente 12 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal total medio aparente',
      valor: '179-246',
      unidad: 'mL/min',
      analito: 'moxifloxacino',
      condiciones: 'dosis de 400 mg',
      ref: { f: 'cima-83756', sec: '5.2 · Propiedades farmacocinéticas', cita: 'oscila entre 179 y 246 ml/min', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-83756', '83756', 'ERELAN 400 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Medochemie Limited)', '2025-08-18', '2026-11-15'),
    rengPubchem(152946, 'moxifloxacin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
