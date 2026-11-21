import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bosentan',
    nombre: 'Bosentán',
    clase: 'Antagonista dual de los receptores de endotelina',
    sinonimos: [ 'bosentan', 'Tracleer' ],
    formula: 'C27H29N5O6S',
    masaMolar: 551.6,
    smiles: 'CC(C)(C)C1=CC=C(C=C1)S(=O)(=O)NC2=C(C(=NC(=N2)C3=NC=CC=N3)OCCO)OC4=CC=CC=C4OC',
    inchikey: 'GJPICJJJRGTNOD-UHFFFAOYSA-N',
    cid: 104865,
    iupac: '4-tert-butyl-N-[6-(2-hydroxyethoxy)-5-(2-methoxyphenoxy)-2-pyrimidin-2-ylpyrimidin-4-yl]benzenesulfonamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'bosentan-oral',
      producto: 'Tracleer · comprimido recubierto con película',
      titular: 'ACTELION PHARMACEUTICALS US, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '62.5 mg o 125 mg por comprimido, según la etiqueta',
      excipientes: [
        'sodium starch glycolate type a potato',
        'povidone k90',
        'glyceryl dibehenate',
        'magnesium stearate',
        'hypromellose, unspecified',
        'triacetin',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow',
        'ferric oxide red',
        'ethylcellulose, unspecified',
        'starch, corn'
      ],
      usos: {
        t: 'Hipertensión arterial pulmonar (grupo 1 de la OMS) en adultos, para mejorar la capacidad de ejercicio y reducir el empeoramiento clínico.',
        ref: {
          f: 'dailymed-bosentan',
          sec: '1 · Indicaciones',
          cita: 'in adults to improve exercise ability and to decrease clinical worsening',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bosentan',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Solo se dispensa mediante un programa restringido (REMS) por el riesgo de lesión hepática; las transaminasas subieron más de 3 veces el límite en cerca del 11 % de los pacientes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-bosentan',
            sec: 'Advertencia destacada',
            cita: 'Because of the risk of hepatotoxicity, TRACLEER is available only through a restricted program called the Bosentan Risk Evaluation and Mitigation Strategy (REMS)',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal y está contraindicado en embarazadas.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-bosentan',
            sec: '5 · Advertencias y precauciones',
            cita: 'TRACLEER may cause fetal harm when administered to a pregnant female and is contraindicated in females who are pregnant',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con el comprimido recubierto (≥ 3 % sobre placebo): infección de vías respiratorias y anemia.',
          '34084-4',
          'Common adverse reactions (≥3% more than placebo) for the film-coated tablet are respiratory tract infection and anemia'
        ],
        [
          'Con el comprimido dispersable (≥ 15 %): infecciones de vías respiratorias altas y fiebre.',
          '34084-4',
          'Common adverse reactions (≥15%) for the dispersible tablet are upper respiratory tract infections and pyrexia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 62.5 mg o 125 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Hipertensión arterial pulmonar (grupo 1 de la OMS) en adultos, para mejorar la capacidad de ejercicio y reducir el empeoramiento clínico.',
    actua: 'Es un antagonista específico y competitivo de los receptores de endotelina ET-A y ET-B, con una afinidad algo mayor por el ET-A.',
    recorrido: 'La biodisponibilidad absoluta en voluntarios sanos es de alrededor del 50 % y no la modifican los alimentos; el máximo llega a las 3-5 horas. Se elimina por la bilis tras el metabolismo hepático; en la orina se recupera menos del 3 % de la dosis oral. La semivida terminal es de unas 5 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido naranja y blanco, redondo y biconvexo, de 62,5 mg (también hay de 125 mg).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido naranja y blanco, redondo y biconvexo, de 62,5 mg (también hay de 125 mg).',
          ref: { f: 'dailymed-bosentan', sec: '3 · Formas y concentraciones', cita: 'round, biconvex, orange-white tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta en voluntarios sanos es de alrededor del 50 % y no la modifican los alimentos; el máximo llega a las 3-5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta en voluntarios sanos es de alrededor del 50 % y no la modifican los alimentos; el máximo llega a las 3-5 horas.',
          ref: {
            f: 'dailymed-bosentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of bosentan in normal volunteers is about 50% and is unaffected by food',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones máximas se alcanzan a las 3-5 horas.',
          ref: {
            f: 'dailymed-bosentan',
            sec: '12.3 · Farmacocinética',
            cita: 'maximum plasma concentrations of bosentan are attained within 3-5 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 98 % a proteínas del plasma, sobre todo a albúmina; el volumen de distribución es de unos 18 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 98 % a proteínas del plasma, sobre todo a albúmina; el volumen de distribución es de unos 18 L.',
          ref: {
            f: 'dailymed-bosentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Bosentan is highly bound (>98%) to plasma proteins, mainly albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de endotelina ET-A y ET-B',
        efecto: 'Es un antagonista específico y competitivo de los receptores de endotelina ET-A y ET-B, con una afinidad algo mayor por el ET-A.',
        lugar: [ 'pulmones', 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista específico y competitivo de los receptores de endotelina ET-A y ET-B, con una afinidad algo mayor por el ET-A.',
            ref: {
              f: 'dailymed-bosentan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Bosentan is a specific and competitive antagonist at endothelin receptor types ET A and ET B',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina por excreción biliar tras su metabolismo en el hígado; tiene tres metabolitos, uno de ellos activo. Además es inductor de CYP2C9 y CYP3A, por lo que sus concentraciones bajan con las dosis repetidas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina por excreción biliar tras su metabolismo en el hígado; tiene tres metabolitos, uno de ellos activo. Además es inductor de CYP2C9 y CYP3A, por lo que sus concentraciones bajan con las dosis repetidas.',
          ref: {
            f: 'dailymed-bosentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Bosentan is eliminated by biliary excretion following metabolism in the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Tres metabolitos (uno activo)',
          actividad: 'activo',
          nota: 'Solo uno es activo y aporta del 10 al 20 % del efecto.',
          ref: {
            f: 'dailymed-bosentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Bosentan has three metabolites, one of which is pharmacologically active and may contribute 10%-20% of the effect of bosentan',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por la bilis tras el metabolismo hepático; en la orina se recupera menos del 3 % de la dosis oral. La semivida terminal es de unas 5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por la bilis tras el metabolismo hepático; en la orina se recupera menos del 3 % de la dosis oral. La semivida terminal es de unas 5 horas.',
          ref: {
            f: 'dailymed-bosentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Less than 3% of an administered oral dose is recovered in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '3-5',
      unidad: 'h',
      analito: 'bosentán',
      poblacion: 'voluntarios adultos sanos',
      ref: {
        f: 'dailymed-bosentan',
        sec: '12.3 · Farmacocinética',
        cita: 'maximum plasma concentrations of bosentan are attained within 3-5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'bosentán',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-bosentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of bosentan in normal volunteers is about 50%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '> 98',
      unidad: '%',
      analito: 'bosentán',
      ref: { f: 'dailymed-bosentan', sec: '12.3 · Farmacocinética', cita: 'Bosentan is highly bound (>98%) to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '18 (aprox.)',
      unidad: 'L',
      analito: 'bosentán',
      ref: { f: 'dailymed-bosentan', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution is about 18 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal de eliminación',
      valor: '5 (aprox.)',
      unidad: 'h',
      analito: 'bosentán',
      poblacion: 'voluntarios adultos sanos',
      ref: { f: 'dailymed-bosentan', sec: '12.3 · Farmacocinética', cita: 'the terminal elimination half-life is about 5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '< 3',
      unidad: '% de la dosis',
      analito: 'bosentán',
      ref: {
        f: 'dailymed-bosentan',
        sec: '12.3 · Farmacocinética',
        cita: 'Less than 3% of an administered oral dose is recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bosentan', '749e42fb-2fe0-45dd-9268-b43bb3f4081c', 'TRACLEER (BOSENTAN) TABLET, FILM COATED TRACLEER (BOSENTAN) TABLET, FOR SUSPENSION', 'Tracleer', '36', '2026-01-23', '2026-11-13'),
    rengPubchem(104865, 'bosentan', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
