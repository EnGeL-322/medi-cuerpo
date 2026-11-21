import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eprosartan',
    nombre: 'Eprosartán',
    clase: 'Antagonista de los receptores de la angiotensina II',
    sinonimos: [ 'eprosartan', 'Futuran' ],
    formula: 'C23H24N2O4S',
    masaMolar: 424.5,
    smiles: 'CCCCC1=NC=C(N1CC2=CC=C(C=C2)C(=O)O)/C=C(\\CC3=CC=CS3)/C(=O)O',
    inchikey: 'OROAFUQRIXKEMV-LDADJPATSA-N',
    cid: 5281037,
    iupac: '4-[[2-butyl-5-[(E)-2-carboxy-3-thiophen-2-ylprop-1-enyl]imidazol-1-yl]methyl]benzoic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'eprosartan-oral',
      producto: 'FUTURAN 600 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Viatris Healthcare Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '600 mg de eprosartán (como mesilato de eprosartán dihidrato) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Mesilato de eprosartán dihidrato',
        ref: {
          f: 'cima-64578',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'Eprosartán (como mesilato de eprosartán dihidrato) 600 mg',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Celulosa microcristalina',
        'Almidón de maíz pregelatinizado sin gluten',
        'Estearato de magnesio',
        'Crospovidona',
        'Hipromelosa',
        'Dióxido de titanio',
        'Macrogol 400',
        'Polisorbato 80'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial esencial.',
        ref: { f: 'cima-64578', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipertensión arterial esencial', codigo: 'FT 4.1' }
      },
      fuente: 'cima-64578',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática',
          texto: 'En la insuficiencia hepática leve o moderada debe usarse con precaución por la poca experiencia disponible.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-64578',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En caso de insuficiencia hepática leve o moderada, eprosartán debe utilizarse con precaución debido a la poca experiencia disponible en esta población de pacientes',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: cefalea (alrededor del 11 %) y molestias gastrointestinales inespecíficas (alrededor del 8 %).',
          'FT 4.8',
          'Las reacciones adversas notificadas con mayor frecuencia en pacientes tratados con eprosartán son cefalea y molestias gastrointestinales inespecíficas, que se produjeron en aproximadamente el 11% y el 8% de los pacientes, respectivamente'
        ],
        [
          'La tabla de la ficha recoge las reacciones de los 2316 pacientes de los ensayos clínicos.',
          'FT 4.8',
          'Reacciones adversas experimentadas por los pacientes tratados con eprosartán que participaron en los ensayos clínicos (n = 2316)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 600 mg de eprosartán (como mesilato de eprosartán dihidrato) por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial esencial.',
    actua: 'Es un antagonista de los receptores de la angiotensina II, sintético, no peptídico y activo por vía oral, que se une selectivamente al receptor AT1.',
    recorrido: 'La biodisponibilidad absoluta tras una dosis oral única de 300 mg es de aproximadamente el 13 %, porque la absorción por vía oral es limitada. Tras una dosis oral marcada, el 90 % de la radiactividad se recuperó en las heces y el 7 % en la orina; la excreción biliar y renal contribuye a la eliminación.'
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
          ref: { f: 'cima-64578', sec: '3 · Forma farmacéutica', cita: 'Comprimidos blancos, en forma ovalada', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta tras una dosis oral única de 300 mg es de aproximadamente el 13 %, porque la absorción por vía oral es limitada.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras una dosis oral única de 300 mg es de aproximadamente el 13 %, porque la absorción por vía oral es limitada.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta después de una dosis oral única de 300 mg de eprosartán es de aproximadamente un 13% debido a que la absorción por vía oral es limitada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan 1 o 2 horas después de una dosis oral en ayunas.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones plasmáticas máximas de eprosartán se alcanzan 1 o 2 horas después de una dosis oral en ayunas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con las comidas se retrasa la absorción y hay cambios poco importantes (menos del 25 %) en la Cmax y el AUC, sin repercusión clínica.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La administración de este medicamento con las comidas retrasa la absorción y produce cambios poco importantes (< 25%) en Cmáx y AUC, que carecen de repercusión clínica',
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
      ocurre: 'La unión a las proteínas del plasma es elevada (aproximadamente el 98 %) y constante en el intervalo de concentraciones terapéuticas; el volumen de distribución es de unos 13 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es elevada (aproximadamente el 98 %) y constante en el intervalo de concentraciones terapéuticas; el volumen de distribución es de unos 13 litros.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El grado de unión de eprosartán a las proteínas plasmáticas es elevado (aproximadamente un 98%) y constante en el intervalo de concentración alcanzado con dosis terapéuticas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución es de unos 13 litros.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución de este fármaco es de unos 13 litros',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor AT1 de la angiotensina II',
        efecto: 'Es un antagonista de los receptores de la angiotensina II, sintético, no peptídico y activo por vía oral, que se une selectivamente al receptor AT1.',
        lugar: [ 'vasos', 'corazon', 'rinones' ],
        datos: [
          {
            t: 'Es un antagonista de los receptores de la angiotensina II, sintético, no peptídico y activo por vía oral, que se une selectivamente al receptor AT1.',
            ref: {
              f: 'cima-64578',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El eprosartán es un antagonista de los receptores de la angiotensina II, sintético, no peptídico, no tetrazol, no bifenilo y activo por vía oral, que se une selectivamente al receptor AT 1',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza poco: en el plasma y en las heces solo se encontró eprosartán, y en la orina, cerca del 20 % de la radiactividad excretada fue un acilglucurónido y el 80 % restante, eprosartán inalterado.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza poco: en el plasma y en las heces solo se encontró eprosartán, y en la orina, cerca del 20 % de la radiactividad excretada fue un acilglucurónido y el 80 % restante, eprosartán inalterado.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'en el plasma y en las heces solo se encontró eprosartán',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Acilglucurónido de eprosartán',
          actividad: 'desconocida',
          nota: 'Cerca del 20 % de la radiactividad urinaria; la ficha no precisa su actividad.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En la orina, cerca del 20% de la radiactividad excretada correspondió a un acilglucurónido de eprosartán',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 90 % de la radiactividad se recuperó en las heces y el 7 % en la orina; la excreción biliar y renal contribuye a la eliminación.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 90 % de la radiactividad se recuperó en las heces y el 7 % en la orina; la excreción biliar y renal contribuye a la eliminación.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras una dosis oral de eprosartán marcado con 14 C, un 90% de la radiactividad se recuperó en las heces y un 7% en la orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida terminal de eliminación tras la administración oral es normalmente de 5 a 9 horas.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida terminal de eliminación del eprosartán después de la administración oral es normalmente de 5 a 9 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La excreción biliar y renal contribuye a la eliminación.',
          ref: {
            f: 'cima-64578',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La excreción biliar y renal contribuye a la eliminación del eprosartán',
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
      nombre: 'Biodisponibilidad absoluta (dosis de 300 mg)',
      valor: '13 (aprox.)',
      unidad: '%',
      analito: 'eprosartán',
      condiciones: 'dosis oral única de 300 mg',
      ref: { f: 'cima-64578', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de aproximadamente un 13%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '1-2',
      unidad: 'h',
      analito: 'eprosartán',
      condiciones: 'en ayunas',
      ref: {
        f: 'cima-64578',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanzan 1 o 2 horas después de una dosis oral en ayunas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'eprosartán',
      ref: { f: 'cima-64578', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es elevado (aproximadamente un 98%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '13 (aprox.)',
      unidad: 'L',
      analito: 'eprosartán',
      ref: {
        f: 'cima-64578',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución de este fármaco es de unos 13 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal de eliminación',
      valor: '5-9',
      unidad: 'h',
      analito: 'eprosartán',
      ref: { f: 'cima-64578', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es normalmente de 5 a 9 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces tras una dosis oral',
      valor: '90',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de eprosartán marcado',
      ref: { f: 'cima-64578', sec: '5.2 · Propiedades farmacocinéticas', cita: 'un 90% de la radiactividad se recuperó en las heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-64578', '64578', 'FUTURAN 600 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Viatris Healthcare Limited)', '2025-01-27', '2026-11-15'),
    rengPubchem(5281037, 'eprosartan', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
