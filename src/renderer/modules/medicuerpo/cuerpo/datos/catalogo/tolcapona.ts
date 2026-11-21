import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tolcapona',
    nombre: 'Tolcapona',
    clase: 'Inhibidor de la catecol-O-metiltransferasa (COMT)',
    sinonimos: [ 'tolcapone', 'Tasmar' ],
    formula: 'C14H11NO5',
    masaMolar: 273.24,
    smiles: 'CC1=CC=C(C=C1)C(=O)C2=CC(=C(C(=C2)O)O)[N+](=O)[O-]',
    inchikey: 'MIQPIUSUKVNLNT-UHFFFAOYSA-N',
    cid: 4659569,
    iupac: '(3,4-dihydroxy-5-nitrophenyl)-(4-methylphenyl)methanone',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'tolcapona-oral',
      producto: 'Tasmar · comprimido recubierto con película',
      titular: 'BAUSCH HEALTH US LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'anhydrous dibasic calcium phosphate',
        'sodium starch glycolate type a potato',
        'povidone k30',
        'talc',
        'magnesium stearate',
        'water',
        'hypromellose, unspecified',
        'titanium dioxide',
        'triacetin',
        'sodium lauryl sulfate',
        'ferric oxide yellow',
        'ferric oxide red',
        'ethylcellulose, unspecified'
      ],
      usos: {
        t: 'Tratamiento complementario de la levodopa y la carbidopa en los signos y síntomas de la enfermedad de Parkinson idiopática.',
        ref: {
          f: 'dailymed-tolcapona',
          sec: '1 · Indicaciones',
          cita: "TASMAR is indicated as an adjunct to levodopa and carbidopa for the treatment of the signs and symptoms of idiopathic Parkinson's disease",
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tolcapona',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática fulminante',
          texto: 'Por el riesgo de insuficiencia hepática aguda fulminante potencialmente mortal, solo debe usarse en pacientes con Parkinson que no respondan o no sean candidatos a otros tratamientos complementarios.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-tolcapona',
            sec: 'Advertencia destacada',
            cita: "Because of the risk of potentially fatal, acute fulminant liver failure, TASMAR (tolcapone) should ordinarily be used in patients with Parkinson's disease on l-dopa/carbidopa",
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Se han notificado tres casos de insuficiencia hepática fulminante mortal en más de 40.000 años-paciente de uso mundial.',
          '34084-4',
          'three cases of fatal fulminant hepatic failure have been reported from more than 40,000 patient years of worldwide use'
        ],
        [
          'Los tres casos se notificaron en los seis primeros meses de tratamiento.',
          '34084-4',
          'All three cases were reported within the first six months of initiation of treatment with TASMAR'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de la levodopa y la carbidopa en los signos y síntomas de la enfermedad de Parkinson idiopática.',
    actua: 'Es un inhibidor selectivo y reversible de la catecol-O-metiltransferasa (COMT), enzima que se encuentra sobre todo en el hígado y el riñón y que metila a las catecolaminas.',
    recorrido: 'Se absorbe con rapidez, con un Tmax de aproximadamente 2 horas; la biodisponibilidad absoluta tras la administración oral es de alrededor del 65 %. Tras una dosis oral marcada, el 60 % del material marcado se excreta por la orina y el 40 % por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-tolcapona', sec: '11 · Descripción', cita: 'TASMAR is available as tablets containing 100 mg tolcapone', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez, con un Tmax de aproximadamente 2 horas; la biodisponibilidad absoluta tras la administración oral es de alrededor del 65 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez, con un Tmax de aproximadamente 2 horas; la biodisponibilidad absoluta tras la administración oral es de alrededor del 65 %.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Tolcapone is rapidly absorbed, with a T max of approximately 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta por vía oral es de alrededor del 65 %.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability following oral administration is about 65%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos tomados hasta 1 hora antes y 2 horas después reducen la biodisponibilidad relativa entre un 10 % y un 20 %.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Food given within 1 hour before and 2 hours after dosing of tolcapone decreases the relative bioavailability by 10% to 20%',
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
      ocurre: 'El volumen de distribución en el estado estacionario es pequeño (9 L) y la unión a las proteínas del plasma, sobre todo a la albúmina, supera el 99,9 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en el estado estacionario es pequeño (9 L) y la unión a las proteínas del plasma, sobre todo a la albúmina, supera el 99,9 %.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'The steady-state volume of distribution of tolcapone is small (9 L)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas del plasma es superior al 99,9 % en el intervalo de 0,32 a 210 mcg/mL.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of tolcapone is >99.9% over the concentration range of 0.32 to 210 mcg/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Catecol-O-metiltransferasa (COMT)',
        efecto: 'Es un inhibidor selectivo y reversible de la catecol-O-metiltransferasa (COMT), enzima que se encuentra sobre todo en el hígado y el riñón y que metila a las catecolaminas.',
        lugar: [ 'higado', 'encefalo' ],
        datos: [
          {
            t: 'Es un inhibidor selectivo y reversible de la catecol-O-metiltransferasa (COMT), enzima que se encuentra sobre todo en el hígado y el riñón y que metila a las catecolaminas.',
            ref: {
              f: 'dailymed-tolcapona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tolcapone is a selective and reversible inhibitor of catechol- O -methyltransferase (COMT)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza casi por completo antes de excretarse: solo el 0,5 % de la dosis aparece inalterado en la orina; la vía principal es la glucuronidación, y también la metila la COMT.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza casi por completo antes de excretarse: solo el 0,5 % de la dosis aparece inalterado en la orina; la vía principal es la glucuronidación, y también la metila la COMT.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Tolcapone is almost completely metabolized prior to excretion, with only a very small amount (0.5% of dose) found unchanged in urine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de tolcapona',
          actividad: 'inactivo',
          nota: 'Conjugado inactivo; vía metabólica principal.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'The main metabolic pathway of tolcapone is glucuronidation; the glucuronide conjugate is inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 60 % del material marcado se excreta por la orina y el 40 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 60 % del material marcado se excreta por la orina y el 40 % por las heces.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration of a 14 C-labeled dose of tolcapone, 60% of labeled material is excreted in urine and 40% in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 2 a 3 horas y no hay acumulación significativa.',
          ref: {
            f: 'dailymed-tolcapona',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of tolcapone is 2 to 3 hours and there is no significant accumulation',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'tolcapona',
      ref: {
        f: 'dailymed-tolcapona',
        sec: '12.3 · Farmacocinética',
        cita: 'Tolcapone is rapidly absorbed, with a T max of approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '65 (aprox.)',
      unidad: '%',
      analito: 'tolcapona',
      ref: {
        f: 'dailymed-tolcapona',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability following oral administration is about 65%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99,9',
      unidad: '%',
      analito: 'tolcapona',
      ref: {
        f: 'dailymed-tolcapona',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of tolcapone is >99.9% over the concentration range of 0.32 to 210 mcg/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '9',
      unidad: 'L',
      analito: 'tolcapona',
      ref: {
        f: 'dailymed-tolcapona',
        sec: '12.3 · Farmacocinética',
        cita: 'The steady-state volume of distribution of tolcapone is small (9 L)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2-3',
      unidad: 'h',
      analito: 'tolcapona',
      ref: { f: 'dailymed-tolcapona', sec: '12.3 · Farmacocinética', cita: 'The elimination half-life of tolcapone is 2 to 3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '60',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de tolcapona marcada',
      ref: {
        f: 'dailymed-tolcapona',
        sec: '12.3 · Farmacocinética',
        cita: '60% of labeled material is excreted in urine and 40% in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tolcapona', 'a0e47a9d-78e7-4523-983a-aa259f221736', 'TASMAR (TOLCAPONE) TABLET, FILM COATED', 'Tasmar', '13', '2021-01-05', '2026-11-15'),
    rengPubchem(4659569, 'tolcapone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
