import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dienogest',
    nombre: 'Dienogest',
    clase: 'Progestágeno',
    sinonimos: [ 'dienogest', 'Visannette' ],
    formula: 'C20H25NO2',
    masaMolar: 311.4,
    smiles: 'C[C@]12CCC3=C4CCC(=O)C=C4CC[C@H]3[C@@H]1CC[C@]2(CC#N)O',
    inchikey: 'AZFLJNIPTRTECV-FUMNGEBKSA-N',
    cid: 68861,
    iupac: '2-[(8S,13S,14S,17R)-17-hydroxy-13-methyl-3-oxo-1,2,6,7,8,11,12,14,15,16-decahydrocyclopenta[a]phenanthren-17-yl]acetonitrile',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'dienogest-oral',
      producto: 'VISANNETTE 2 mg COMPRIMIDOS',
      titular: 'Bayer Hispania S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '2 mg de dienogest por comprimido, según la ficha técnica',
      excipientes: [ 'Crospovidona', 'Lactosa monohidrato', 'Estearato de magnesio', 'Celulosa microcristalina', 'Almidón de patata', 'Povidona K 25', 'Talco' ],
      usos: {
        t: 'Tratamiento de la endometriosis.',
        ref: { f: 'cima-71929', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la endometriosis', codigo: 'FT 4.1' }
      },
      fuente: 'cima-71929',
      advertencias: [
        {
          titulo: 'Sangrado uterino intenso',
          texto: 'El sangrado uterino, por ejemplo en mujeres con adenomiosis o leiomiomas uterinos, puede agravarse.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-71929',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El sangrado uterino, por ejemplo, en las mujeres con adenomiosis o leiomiomas uterinos, puede agravarse con el uso de Visannette',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: cefalea (9,0 %), molestias en las mamas (5,4 %), estado de ánimo deprimido (5,1 %) y acné (5,1 %).',
          'FT 4.8',
          'cefalea (9,0%), molestias en las mamas (5,4%), estado de ánimo deprimido (5,1%) y acné (5,1%)'
        ],
        [
          'Son más frecuentes durante los primeros meses y remiten con el tratamiento continuado.',
          'FT 4.8',
          'Las reacciones adversas son más frecuentes durante los primeros meses después del inicio del tratamiento con Visannette y remiten con el tratamiento continuado'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2 mg de dienogest por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la endometriosis.',
    actua: 'Es un derivado de la nortestosterona sin actividad androgénica y con actividad antiandrogénica, que se une a los receptores de la progesterona del útero humano.',
    recorrido: 'Administrado por vía oral, se absorbe rápida y casi completamente; la biodisponibilidad es de aproximadamente el 91 %. Se excreta en forma de metabolitos, con un cociente urinario/fecal de aproximadamente 3:1; en seis días se elimina alrededor del 86 % de la dosis, sobre todo en las primeras 24 horas y con la orina.'
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
          ref: {
            f: 'cima-71929',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimidos blancos o blanquecinos , redondos, con caras aplanadas',
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
      ocurre: 'Administrado por vía oral, se absorbe rápida y casi completamente; la biodisponibilidad es de aproximadamente el 91 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Administrado por vía oral, se absorbe rápida y casi completamente; la biodisponibilidad es de aproximadamente el 91 %.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El dienogest, administrado por vía oral, se absorbe rápida y casi completamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Se alcanzan concentraciones séricas máximas de 47 ng/mL aproximadamente 1,5 horas después de una dosis única.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se alcanzan unas concentraciones máximas en el suero de 47 ng/ml, aproximadamente 1,5 horas después de la toma de una dosis única',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad es de aproximadamente el 91 %.',
          ref: { f: 'cima-71929', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad es de aproximadamente el 91%', codigo: 'FT 5.2' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El 10 % de la concentración sérica es esteroide libre y el 90 % se une de forma inespecífica a la albúmina; no se une a la SHBG ni a la CBG.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El 10 % de la concentración sérica es esteroide libre y el 90 % se une de forma inespecífica a la albúmina; no se une a la SHBG ni a la CBG.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El 10% de la concentración del medicamento en el suero está presente como esteroide libre; el 90% se une de manera inespecífica a la albúmina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen aparente de distribución (Vd/F) es de 40 litros.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen aparente de distribución (V d /F) del dienogest es de 40 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor de la progesterona',
        efecto: 'Es un derivado de la nortestosterona sin actividad androgénica y con actividad antiandrogénica, que se une a los receptores de la progesterona del útero humano.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Es un derivado de la nortestosterona sin actividad androgénica y con actividad antiandrogénica, que se une a los receptores de la progesterona del útero humano.',
            ref: {
              f: 'cima-71929',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El dienogest se une a los receptores de la progesterona del útero humano',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por completo por las vías conocidas del metabolismo de los esteroides, con metabolitos endocrinológicamente y en su mayoría inactivos; la CYP3A4 es la enzima principal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por completo por las vías conocidas del metabolismo de los esteroides, con metabolitos endocrinológicamente y en su mayoría inactivos; la CYP3A4 es la enzima principal.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El dienogest se metaboliza completamente por las vías conocidas de metabolismo de los esteroides, con la formación de metabolitos endocrinológica y mayormente inactivos',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del dienogest',
          actividad: 'inactivo',
          nota: 'Endocrinológicamente y en su mayoría inactivos; se excretan muy rápidamente.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'con la formación de metabolitos endocrinológica y mayormente inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta en forma de metabolitos, con un cociente urinario/fecal de aproximadamente 3:1; en seis días se elimina alrededor del 86 % de la dosis, sobre todo en las primeras 24 horas y con la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta en forma de metabolitos, con un cociente urinario/fecal de aproximadamente 3:1; en seis días se elimina alrededor del 86 % de la dosis, sobre todo en las primeras 24 horas y con la orina.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El dienogest se excreta en forma de metabolitos que se excretan con un cociente urinario/fecal de aproximadamente 3:1 después de la administración oral de 0,1 mg/kg',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La fase de distribución terminal tiene una semivida de aproximadamente 9 a 10 horas.',
          ref: {
            f: 'cima-71929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fase de distribución terminal se caracteriza por una semivida de aproximadamente 9 a 10 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'dienogest',
      condiciones: 'dosis única',
      ref: {
        f: 'cima-71929',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente 1,5 horas después de la toma de una dosis única',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '91 (aprox.)',
      unidad: '%',
      analito: 'dienogest',
      ref: { f: 'cima-71929', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad es de aproximadamente el 91%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución (Vd/F)',
      valor: '40',
      unidad: 'L',
      analito: 'dienogest',
      ref: {
        f: 'cima-71929',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen aparente de distribución (V d /F) del dienogest es de 40 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de la fase terminal',
      valor: '9-10 (aprox.)',
      unidad: 'h',
      analito: 'dienogest',
      ref: { f: 'cima-71929', sec: '5.2 · Propiedades farmacocinéticas', cita: 'una semivida de aproximadamente 9 a 10 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada en seis días',
      valor: '86 (aprox.)',
      unidad: '% de la dosis',
      analito: 'dienogest y metabolitos',
      ref: {
        f: 'cima-71929',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente el 86% de la dosis administrada se elimina al cabo de seis días',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-71929', '71929', 'VISANNETTE 2 mg COMPRIMIDOS (Bayer Hispania S.L.)', '2023-05-12', '2026-11-15'),
    rengPubchem(68861, 'dienogest', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
