import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'osimertinib',
    nombre: 'Osimertinib',
    clase: 'Inhibidor de la tirosina cinasa del EGFR (irreversible)',
    sinonimos: [ 'osimertinib', 'Tagrisso' ],
    formula: 'C28H33N7O2',
    masaMolar: 499.6,
    smiles: 'CN1C=C(C2=CC=CC=C21)C3=NC(=NC=C3)NC4=C(C=C(C(=C4)NC(=O)C=C)N(C)CCN(C)C)OC',
    inchikey: 'DUYJMQONPNNFPI-UHFFFAOYSA-N',
    cid: 71496458,
    iupac: 'N-[2-[2-(dimethylamino)ethyl-methylamino]-4-methoxy-5-[[4-(1-methylindol-3-yl)pyrimidin-2-yl]amino]phenyl]prop-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'osimertinib-oral',
      producto: 'TAGRISSO · comprimido recubierto con película',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '40 mg o 80 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'sodium stearyl fumarate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide yellow',
        'ferric oxide red',
        'ferrosoferric oxide',
        'low-substituted hydroxypropyl cellulose, unspecified'
      ],
      usos: {
        t: 'Cáncer de pulmón no microcítico con deleciones del exón 19 o mutaciones L858R del EGFR, como tratamiento adyuvante tras la resección, y otras indicaciones.',
        ref: {
          f: 'dailymed-osimertinib',
          sec: '1 · Indicaciones',
          cita: 'adjuvant therapy after tumor resection in adult patients with non-small cell lung cancer (NSCLC) whose tumors have epidermal growth factor receptor (EGFR) exon 19 deletions or exon 21 L858R mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-osimertinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial/neumonitis',
          texto: 'Puede causar ILD/neumonitis grave y mortal.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-osimertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'TAGRISSO can cause severe and fatal ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del intervalo QTc',
          texto: 'Puede prolongar el intervalo QTc; hay que vigilar electrocardiogramas y electrolitos si hay predisposición.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-osimertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'TAGRISSO can cause heart rate-corrected QT (QTc) interval prolongation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Monoterapia (≥ 20 %): leucopenia, linfopenia, trombocitopenia, anemia, diarrea, erupción, dolor musculoesquelético, neutropenia, toxicidad en las uñas, piel seca, estomatitis y cansancio.',
          '34084-4',
          'TAGRISSO monotherapy: leukopenia, lymphopenia, thrombocytopenia, anemia, diarrhea, rash, musculoskeletal pain, neutropenia, nail toxicity, dry skin, stomatitis, and fatigue'
        ],
        [
          'Tras quimiorradioterapia con platino: también enfermedad pulmonar intersticial/neumonitis, tos y COVID-19.',
          '34084-4',
          'TAGRISSO monotherapy following platinum-based chemoradiation therapy: lymphopenia, leukopenia, ILD/pneumonitis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 40 mg o 80 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cáncer de pulmón no microcítico con deleciones del exón 19 o mutaciones L858R del EGFR, como tratamiento adyuvante tras la resección, y otras indicaciones.',
    actua: 'Se une de forma irreversible a ciertas formas mutantes del EGFR (T790M, L858R, deleciones del exón 19) con concentraciones unas 9 veces menores que para el normal.',
    recorrido: 'El máximo llega con una mediana de 6 horas (3-24 h); una comida rica en grasa y calorías no cambia de forma comparable la Cmax ni el AUC. Se elimina sobre todo por las heces (68 %) y menos por la orina (14 %); el osimertinib sin cambios es cerca del 2 % de la eliminación.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido beige de 40 mg (redondo) o de 80 mg (ovalado).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido beige de 40 mg (redondo) o de 80 mg (ovalado).',
          ref: {
            f: 'dailymed-osimertinib',
            sec: '3 · Formas y concentraciones',
            cita: '80 mg tablets: beige, oval and biconvex tablet marked with',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega con una mediana de 6 horas (3-24 h); una comida rica en grasa y calorías no cambia de forma comparable la Cmax ni el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega con una mediana de 6 horas (3-24 h); una comida rica en grasa y calorías no cambia de forma comparable la Cmax ni el AUC.',
          ref: {
            f: 'dailymed-osimertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to C max of osimertinib was 6 hours (range 3-24 hours)',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución en estado estacionario es de 918 L y la unión a proteínas del plasma es del 95 %; llega al cerebro en estudios de imagen.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en estado estacionario es de 918 L y la unión a proteínas del plasma es del 95 %; llega al cerebro en estudios de imagen.',
          ref: { f: 'dailymed-osimertinib', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of osimertinib was 95%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Cinasa del receptor del factor de crecimiento epidérmico (EGFR) mutante',
        efecto: 'Se une de forma irreversible a ciertas formas mutantes del EGFR (T790M, L858R, deleciones del exón 19) con concentraciones unas 9 veces menores que para el normal.',
        lugar: [ 'pulmones' ],
        datos: [
          {
            t: 'Se une de forma irreversible a ciertas formas mutantes del EGFR (T790M, L858R, deleciones del exón 19) con concentraciones unas 9 veces menores que para el normal.',
            ref: {
              f: 'dailymed-osimertinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Osimertinib is a kinase inhibitor of the epidermal growth factor receptor (EGFR), which binds irreversibly to certain mutant forms of EGFR',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las vías principales son oxidación (sobre todo CYP3A) y desalquilación; dos metabolitos activos (AZ7550 y AZ5104) circulan a cerca del 10 % del fármaco original.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las vías principales son oxidación (sobre todo CYP3A) y desalquilación; dos metabolitos activos (AZ7550 y AZ5104) circulan a cerca del 10 % del fármaco original.',
          ref: {
            f: 'dailymed-osimertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The main metabolic pathways of osimertinib were oxidation (predominantly CYP3A) and dealkylation in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'AZ7550',
          actividad: 'activo',
          nota: 'AUC de aproximadamente el 10 % del fármaco original en el estado estacionario.',
          ref: {
            f: 'dailymed-osimertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Two pharmacologically active metabolites (AZ7550 and AZ5104) have been identified in the plasma after TAGRISSO oral administration',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'AZ5104',
          actividad: 'activo',
          ref: {
            f: 'dailymed-osimertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean exposure (AUC) of each metabolite (AZ5104 and AZ7550) was approximately 10% of the exposure of osimertinib at steady-state',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por las heces (68 %) y menos por la orina (14 %); el osimertinib sin cambios es cerca del 2 % de la eliminación.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por las heces (68 %) y menos por la orina (14 %); el osimertinib sin cambios es cerca del 2 % de la eliminación.',
          ref: {
            f: 'dailymed-osimertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Osimertinib is primarily eliminated in the feces (68%) and to a lesser extent in the urine (14%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '6 (3-24)',
      unidad: 'h',
      analito: 'osimertinib',
      ref: {
        f: 'dailymed-osimertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to C max of osimertinib was 6 hours (range 3-24 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '918',
      unidad: 'L',
      analito: 'osimertinib',
      ref: {
        f: 'dailymed-osimertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution at steady-state (V ss /F) of osimertinib was 918 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '95',
      unidad: '%',
      analito: 'osimertinib',
      ref: { f: 'dailymed-osimertinib', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of osimertinib was 95%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media poblacional',
      valor: '48',
      unidad: 'h',
      analito: 'osimertinib',
      poblacion: 'análisis poblacional',
      ref: {
        f: 'dailymed-osimertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'a population estimated mean half-life of osimertinib was 48 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral',
      valor: '14,3',
      unidad: 'L/h',
      analito: 'osimertinib',
      poblacion: 'análisis poblacional',
      ref: { f: 'dailymed-osimertinib', sec: '12.3 · Farmacocinética', cita: 'oral clearance (CL/F) was 14.3 (L/h)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Eliminado por las heces',
      valor: '68',
      unidad: '%',
      analito: 'osimertinib y metabolitos',
      ref: {
        f: 'dailymed-osimertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Osimertinib is primarily eliminated in the feces (68%) and to a lesser extent in the urine (14%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminado por la orina',
      valor: '14',
      unidad: '%',
      analito: 'osimertinib y metabolitos',
      ref: {
        f: 'dailymed-osimertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Osimertinib is primarily eliminated in the feces (68%) and to a lesser extent in the urine (14%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-osimertinib', '5e81b4a7-b971-45e1-9c31-29cea8c87ce7', 'TAGRISSO (OSIMERTINIB) TABLET, FILM COATED', 'TAGRISSO', '37', '2026-09-25', '2026-11-12'),
    rengPubchem(71496458, 'osimertinib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
