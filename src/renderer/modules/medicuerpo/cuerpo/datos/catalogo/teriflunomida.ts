import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'teriflunomida',
    nombre: 'Teriflunomida',
    clase: 'Inmunomodulador (inhibidor de la dihidroorotato deshidrogenasa)',
    sinonimos: [ 'teriflunomide' ],
    formula: 'C12H9F3N2O2',
    masaMolar: 270.21,
    smiles: 'C/C(=C(\\C#N)/C(=O)NC1=CC=C(C=C1)C(F)(F)F)/O',
    inchikey: 'UTNUDOFZCWSZMS-YFHOEESVSA-N',
    cid: 54684141,
    iupac: '(Z)-2-cyano-3-hydroxy-N-[4-(trifluoromethyl)phenyl]but-2-enamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'teriflunomida-oral',
      producto: 'TERIFLUNOMIDA KRKA 14 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Krka D.D. Novo Mesto',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '14 mg de teriflunomida por comprimido, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Almidón de maíz',
        'Hidroxipropilcelulosa (E463)',
        'Celulosa microcristalina (E460)',
        'Carboximetilalmidón sódico (tipo A)',
        'Estearato de magnesio (E470b)',
        'Sílice coloidal anhidra',
        'Hipromelosa',
        'Dióxido de titanio (E171)',
        'Macrogol',
        'Laca de aluminio carmín índigo (E132)'
      ],
      usos: {
        t: 'Tratamiento de adultos y de pacientes pediátricos desde 10 años con esclerosis múltiple remitente recurrente.',
        ref: { f: 'cima-88753', sec: '4.1 · Indicaciones terapéuticas', cita: 'con esclerosis múltiple (EM) remitente recurrente', codigo: 'FT 4.1' }
      },
      fuente: 'cima-88753',
      advertencias: [
        {
          titulo: 'Control de las enzimas hepáticas',
          texto: 'Las enzimas hepáticas se deben evaluar al menos cada cuatro semanas durante los primeros 6 meses de tratamiento y después de forma regular.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-88753',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Las enzimas hepáticas se deben evaluar al menos cada cuatro semanas durante los primeros 6 meses de tratamiento, y después regularmente',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes con 7 y 14 mg: cefalea, diarrea, aumento de ALT, náuseas y alopecia.',
          'FT 4.8',
          'cefalea (17,8%, 15,7%), diarrea (13,1%, 13,6%), aumento de ALT (13%, 15%), náuseas (8%, 10,7%) y alopecia (9,8%, 13,5%)'
        ],
        [ 'La teriflunomida es el metabolito principal de la leflunomida.', 'FT 4.8', 'Teriflunomida es el metabolito principal de leflunomida' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 14 mg de teriflunomida por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos y de pacientes pediátricos desde 10 años con esclerosis múltiple remitente recurrente.',
    actua: 'Es un inmunomodulador con propiedades antiinflamatorias que inhibe de forma selectiva y reversible la enzima mitocondrial dihidroorotato deshidrogenasa (DHO-DH).',
    recorrido: 'Con la administración oral repetida, el pico plasmático se alcanza entre 1 y 4 horas después de la dosis; la biodisponibilidad es alta (aproximadamente el 100 %). Se excreta por el tubo digestivo, sobre todo por la bilis como principio activo inalterado: tras 21 días, el 60,1 % de la dosis sale por las heces (37,5 %) y la orina (22,6 %).'
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
          ref: { f: 'cima-88753', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película (comprimido o comp.)', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Con la administración oral repetida, el pico plasmático se alcanza entre 1 y 4 horas después de la dosis; la biodisponibilidad es alta (aproximadamente el 100 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con la administración oral repetida, el pico plasmático se alcanza entre 1 y 4 horas después de la dosis; la biodisponibilidad es alta (aproximadamente el 100 %).',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'está entre 1 y 4 horas después de la dosis tras la administración oral repetida de teriflunomida',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La comida no tiene un efecto clínicamente relevante en la farmacocinética.',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La comida no tiene un efecto clínicamente relevante en la farmacocinética de la teriflunomida',
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
      ocurre: 'Se une ampliamente a las proteínas del plasma (más del 99 %), probablemente a la albúmina, y se distribuye sobre todo en el plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une ampliamente a las proteínas del plasma (más del 99 %), probablemente a la albúmina, y se distribuye sobre todo en el plasma.',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La teriflunomida está ampliamente ligada a las proteínas plasmáticas (>99%), probablemente albúmina, y se distribuye principalmente en el plasma',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución es de 11 litros tras una dosis intravenosa, aunque parece una subestimación: en ratas se observó una distribución amplia por los órganos.',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución es de 11 l tras una sola administración intravenosa (IV)',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Dihidroorotato deshidrogenasa (DHODH)',
        efecto: 'Es un inmunomodulador con propiedades antiinflamatorias que inhibe de forma selectiva y reversible la enzima mitocondrial dihidroorotato deshidrogenasa (DHO-DH).',
        lugar: [ 'sistema-inmunitario', 'encefalo' ],
        datos: [
          {
            t: 'Es un inmunomodulador con propiedades antiinflamatorias que inhibe de forma selectiva y reversible la enzima mitocondrial dihidroorotato deshidrogenasa (DHO-DH).',
            ref: {
              f: 'cima-88753',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Teriflunomida es un agente inmunomodulador con propiedades antiinflamatorias que inhibe de forma selectiva y reversible la enzima mitocondrial dehidroorotato-deshidrogenasa (DHO-DH)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma moderada y es el único componente detectado en el plasma; la principal vía es la hidrólisis, y la oxidación es menor.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma moderada y es el único componente detectado en el plasma; la principal vía es la hidrólisis, y la oxidación es menor.',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La principal forma de biotransformación de la teriflunomida es la hidrólisis, siendo la oxidación una forma menor',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta por el tubo digestivo, sobre todo por la bilis como principio activo inalterado: tras 21 días, el 60,1 % de la dosis sale por las heces (37,5 %) y la orina (22,6 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta por el tubo digestivo, sobre todo por la bilis como principio activo inalterado: tras 21 días, el 60,1 % de la dosis sale por las heces (37,5 %) y la orina (22,6 %).',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La teriflunomida se excreta por el tracto gastrointestinal principalmente a través de la bilis como principio activo inalterado',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida estimada es de unos 19 días tras dosis repetidas.',
          ref: {
            f: 'cima-88753',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la t1/2z fue de aproximadamente 19 días tras dosis repetidas de 14 mg',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-4',
      unidad: 'h',
      analito: 'teriflunomida',
      condiciones: 'administración oral repetida',
      ref: {
        f: 'cima-88753',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'está entre 1 y 4 horas después de la dosis tras la administración oral repetida de teriflunomida',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'teriflunomida',
      ref: {
        f: 'cima-88753',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La teriflunomida está ampliamente ligada a las proteínas plasmáticas (>99%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '11',
      unidad: 'L',
      analito: 'teriflunomida',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'cima-88753',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución es de 11 l tras una sola administración intravenosa (IV)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '19',
      unidad: 'd',
      analito: 'teriflunomida',
      condiciones: 'dosis repetidas de 14 mg',
      ref: {
        f: 'cima-88753',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la t1/2z fue de aproximadamente 19 días tras dosis repetidas de 14 mg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces a los 21 días',
      valor: '37,5',
      unidad: '% de la dosis',
      analito: 'teriflunomida',
      ref: {
        f: 'cima-88753',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'el 60,1% de la dosis administrada se excreta a través de las heces (37,5%) y la orina (22,6%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina a los 21 días',
      valor: '22,6',
      unidad: '% de la dosis',
      analito: 'teriflunomida',
      ref: {
        f: 'cima-88753',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'el 60,1% de la dosis administrada se excreta a través de las heces (37,5%) y la orina (22,6%)',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-88753', '88753', 'TERIFLUNOMIDA KRKA 14 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Krka D.D. Novo Mesto)', '2026-03-13', '2026-11-15'),
    rengPubchem(54684141, 'teriflunomide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
