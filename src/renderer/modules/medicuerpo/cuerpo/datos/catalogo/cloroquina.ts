import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cloroquina',
    nombre: 'Cloroquina',
    clase: 'Antipalúdico (4-aminoquinolina)',
    sinonimos: [ 'chloroquine', 'Aralen' ],
    formula: 'C18H26ClN3',
    masaMolar: 319.9,
    smiles: 'CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl',
    inchikey: 'WHTVZRBIWZFKQO-UHFFFAOYSA-N',
    cid: 2719,
    iupac: '4-N-(7-chloroquinolin-4-yl)-1-N,1-N-diethylpentane-1,4-diamine',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'cloroquina-oral',
      producto: 'Chloroquine Phosphate · comprimido',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '500 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fosfato de cloroquina',
        ref: {
          f: 'dailymed-cloroquina',
          sec: '11 · Descripción',
          cita: 'Chloroquine phosphate tablet, USP, is a 4-aminoquinoline compound',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'silicon dioxide',
        'anhydrous dibasic calcium phosphate',
        'hypromelloses',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol',
        'polysorbate 80',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la malaria no complicada por cepas sensibles, prevención donde no hay resistencia y amebiasis extraintestinal.',
        ref: { f: 'dailymed-cloroquina', sec: '1 · Indicaciones', cita: 'Treatment of uncomplicated malaria due to susceptible strains', codigo: '34067-9' }
      },
      fuente: 'dailymed-cloroquina',
      advertencias: [
        {
          titulo: 'Resistencia',
          texto: 'No es eficaz frente a cepas resistentes a la cloroquina, frecuentes en P. falciparum.',
          organos: [ 'sangre' ],
          ref: { f: 'dailymed-cloroquina', sec: 'Advertencias', cita: 'Chloroquine resistance is widespread in P. falciparum', codigo: '34071-1' }
        }
      ],
      reacciones: [
        [
          'Maculopatía y degeneración macular, a veces irreversibles; retinopatía con tratamientos largos o dosis altas.',
          '34084-4',
          'Maculopathy and macular degeneration have been reported and may be irreversible'
        ],
        [
          'Retinopatía irreversible con cambios de pigmentación y defectos del campo visual.',
          '34084-4',
          'Irreversible retinopathy with retinal pigmentation changes'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 500 mg por comprimido, según la etiqueta; el activo va como fosfato de cloroquina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la malaria no complicada por cepas sensibles, prevención donde no hay resistencia y amebiasis extraintestinal.',
    actua: 'Su mecanismo exacto se desconoce; puede concentrarse en las vesículas ácidas del parásito e impedir la polimerización del grupo hemo.',
    recorrido: 'Se absorbe rápido y casi por completo en el tubo digestivo; solo una pequeña parte aparece en las heces. Se excreta despacio por la orina, más deprisa si la orina es ácida; algo más de la mitad de lo que sale por la orina es cloroquina sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca.',
          ref: {
            f: 'dailymed-cloroquina',
            sec: '11 · Descripción',
            cita: 'Chloroquine phosphate tablet, USP, is a 4-aminoquinoline compound for oral administration',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y casi por completo en el tubo digestivo; solo una pequeña parte aparece en las heces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y casi por completo en el tubo digestivo; solo una pequeña parte aparece en las heces.',
          ref: {
            f: 'dailymed-cloroquina',
            sec: '12 · Farmacología clínica',
            cita: 'Chloroquine is rapidly and almost completely absorbed from the gastrointestinal tract',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 55 % de la cloroquina del plasma va unida a componentes no difusibles.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 55 % de la cloroquina del plasma va unida a componentes no difusibles.',
          ref: {
            f: 'dailymed-cloroquina',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 55% of the drug in the plasma is bound to nondiffusible plasma constituents',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Polimerización del hemo en el parásito',
        efecto: 'Su mecanismo exacto se desconoce; puede concentrarse en las vesículas ácidas del parásito e impedir la polimerización del grupo hemo.',
        lugar: [ 'sangre', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; puede concentrarse en las vesículas ácidas del parásito e impedir la polimerización del grupo hemo.',
            ref: {
              f: 'dailymed-cloroquina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'may exert its effect against Plasmodium species by concentrating in the acid vesicles of the parasite and by inhibiting polymerization of heme',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolito principal es la desetilcloroquina (un cuarto de lo que aparece en la orina); hay pequeñas cantidades de bisdesetilcloroquina y otros productos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolito principal es la desetilcloroquina (un cuarto de lo que aparece en la orina); hay pequeñas cantidades de bisdesetilcloroquina y otros productos.',
          ref: { f: 'dailymed-cloroquina', sec: '12 · Farmacología clínica', cita: 'The main metabolite is desethylchloroquine', codigo: '34090-1' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desetilcloroquina',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-cloroquina',
            sec: '12 · Farmacología clínica',
            cita: 'which accounts for one fourth of the total material appearing in the urine',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta despacio por la orina, más deprisa si la orina es ácida; algo más de la mitad de lo que sale por la orina es cloroquina sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta despacio por la orina, más deprisa si la orina es ácida; algo más de la mitad de lo que sale por la orina es cloroquina sin cambios.',
          ref: {
            f: 'dailymed-cloroquina',
            sec: '12 · Farmacología clínica',
            cita: 'Excretion of chloroquine is quite slow, but is increased by acidification of the urine',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a componentes no difusibles del plasma',
      valor: '55 (aprox.)',
      unidad: '%',
      analito: 'cloroquina',
      ref: {
        f: 'dailymed-cloroquina',
        sec: '12 · Farmacología clínica',
        cita: 'Approximately 55% of the drug in the plasma is bound to nondiffusible plasma constituents',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cloroquina', '06c69e2b-211b-4746-9f3a-f86d36520570', 'CHLOROQUINE PHOSPHATE TABLET', 'Chloroquine Phosphate', '8', '2026-11-02', '2026-11-12'),
    rengPubchem(2719, 'chloroquine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
