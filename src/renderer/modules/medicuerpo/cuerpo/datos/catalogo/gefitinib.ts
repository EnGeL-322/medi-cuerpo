import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gefitinib',
    nombre: 'Gefitinib',
    clase: 'Inhibidor de la tirosina cinasa del EGFR',
    sinonimos: [ 'gefitinib', 'Iressa' ],
    formula: 'C22H24ClFN4O3',
    masaMolar: 446.9,
    smiles: 'COC1=C(C=C2C(=C1)N=CN=C2NC3=CC(=C(C=C3)F)Cl)OCCCN4CCOCC4',
    inchikey: 'XGALLCVXEZPNRQ-UHFFFAOYSA-N',
    cid: 123631,
    iupac: 'N-(3-chloro-4-fluorophenyl)-7-methoxy-6-(3-morpholin-4-ylpropoxy)quinazolin-4-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'gefitinib-oral',
      producto: 'IRESSA · comprimido recubierto',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '250 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'povidone, unspecified',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'hypromellose, unspecified',
        'polyethylene glycol 300',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de primera línea del cáncer de pulmón no microcítico metastásico con deleciones del exón 19 o sustitución L858R del EGFR.',
        ref: {
          f: 'dailymed-gefitinib',
          sec: '1 · Indicaciones',
          cita: 'first-line treatment of patients with metastatic non-small cell lung cancer (NSCLC) whose tumors have epidermal growth factor receptor (EGFR) exon 19 deletions or exon 21 (L858R) substitution mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-gefitinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial',
          texto: 'Ocurrió en el 1,3 % de 2462 pacientes, con infiltrados, neumonitis, síndrome de dificultad respiratoria o fibrosis pulmonar.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-gefitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'ILD or ILD-like adverse drug reactions (e.g., lung infiltration, pneumonitis, acute respiratory distress syndrome, or pulmonary fibrosis) occurred in 1.3% of the 2462 patients',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Aumentaron las enzimas hepáticas (ALT en el 11,4 % de los pacientes).',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-gefitinib',
            sec: '5 · Advertencias y precauciones',
            cita: '11.4% of patients had increased alanine aminotransferase (ALT)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 20 % y más que placebo): reacciones en la piel y diarrea.',
          '34084-4',
          'reported in more than 20% of the patients and greater than placebo were skin reactions and diarrhea'
        ],
        [ 'La seguridad se basa en 2462 pacientes con cáncer de pulmón.', '34084-4', 'The safety of IRESSA is based on the data from 2462 patients' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 250 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de primera línea del cáncer de pulmón no microcítico metastásico con deleciones del exón 19 o sustitución L858R del EGFR.',
    actua: 'Inhibe de forma reversible la actividad cinasa del EGFR normal y de algunas variantes activadoras, lo que frena el crecimiento de las células tumorales.',
    recorrido: 'La biodisponibilidad oral media es del 60 % y el máximo llega 3-7 horas después; la comida no la modifica de forma significativa. La excreción es sobre todo por las heces (86 %) y la renal es menos del 4 % de la dosis; la semivida de eliminación es de 48 horas tras vía intravenosa.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido marrón de 250 mg, redondo y recubierto.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido marrón de 250 mg, redondo y recubierto.',
          ref: {
            f: 'dailymed-gefitinib',
            sec: '3 · Formas y concentraciones',
            cita: '250 mg tablets: round, biconvex, brown film-coated',
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
      ocurre: 'La biodisponibilidad oral media es del 60 % y el máximo llega 3-7 horas después; la comida no la modifica de forma significativa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral media es del 60 % y el máximo llega 3-7 horas después; la comida no la modifica de forma significativa.',
          ref: {
            f: 'dailymed-gefitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean oral bioavailability of gefitinib is 60%, with peak plasma levels occurring 3-7 hours after dosing',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye ampliamente por el cuerpo (volumen en estado estacionario de 1400 L tras vía intravenosa); in vitro se une un 90 % a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye ampliamente por el cuerpo (volumen en estado estacionario de 1400 L tras vía intravenosa); in vitro se une un 90 % a proteínas del plasma.',
          ref: {
            f: 'dailymed-gefitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Gefitinib is extensively distributed throughout the body with a mean steady state volume of distribution of 1400 L following intravenous administration',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa del receptor del factor de crecimiento epidérmico (EGFR)',
        efecto: 'Inhibe de forma reversible la actividad cinasa del EGFR normal y de algunas variantes activadoras, lo que frena el crecimiento de las células tumorales.',
        lugar: [ 'pulmones' ],
        datos: [
          {
            t: 'Inhibe de forma reversible la actividad cinasa del EGFR normal y de algunas variantes activadoras, lo que frena el crecimiento de las células tumorales.',
            ref: {
              f: 'dailymed-gefitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Gefitinib reversibly inhibits the kinase activity of wild-type and certain activating mutations of EGFR',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho en el hígado, sobre todo por el CYP3A4; el componente activo principal, el O-desmetilgefitinib, lo forma el CYP2D6 (14 % de la dosis).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho en el hígado, sobre todo por el CYP3A4; el componente activo principal, el O-desmetilgefitinib, lo forma el CYP2D6 (14 % de la dosis).',
          ref: {
            f: 'dailymed-gefitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Gefitinib undergoes extensive hepatic metabolism in humans, predominantly by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'O-desmetilgefitinib',
          actividad: 'activo',
          nota: 'Potencia similar en la enzima aislada, pero solo 1/14 en un ensayo celular.',
          ref: {
            f: 'dailymed-gefitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the major active component was O-desmethyl gefitinib produced by CYP2D6 metabolism and accounted for 14% of the dose',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción es sobre todo por las heces (86 %) y la renal es menos del 4 % de la dosis; la semivida de eliminación es de 48 horas tras vía intravenosa.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción es sobre todo por las heces (86 %) y la renal es menos del 4 % de la dosis; la semivida de eliminación es de 48 horas tras vía intravenosa.',
          ref: {
            f: 'dailymed-gefitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Excretion of gefitinib and its metabolites is predominantly via the feces (86%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral media',
      valor: '60',
      unidad: '%',
      analito: 'gefitinib',
      ref: { f: 'dailymed-gefitinib', sec: '12.3 · Farmacocinética', cita: 'The mean oral bioavailability of gefitinib is 60%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '3-7',
      unidad: 'h',
      analito: 'gefitinib',
      ref: { f: 'dailymed-gefitinib', sec: '12.3 · Farmacocinética', cita: 'peak plasma levels occurring 3-7 hours after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '1400',
      unidad: 'L',
      analito: 'gefitinib',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-gefitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'mean steady state volume of distribution of 1400 L following intravenous administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma (in vitro)',
      valor: '90',
      unidad: '%',
      analito: 'gefitinib',
      ref: {
        f: 'dailymed-gefitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro binding of gefitinib to human plasma proteins (serum albumin and α1-acid glycoprotein) is 90%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación tras vía intravenosa',
      valor: '48',
      unidad: 'h',
      analito: 'gefitinib',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-gefitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'total plasma clearance and elimination half-life of 48 hours after intravenous administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado por las heces',
      valor: '86',
      unidad: '%',
      analito: 'gefitinib y metabolitos',
      ref: {
        f: 'dailymed-gefitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Excretion of gefitinib and its metabolites is predominantly via the feces (86%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excreción renal',
      valor: '< 4',
      unidad: '% de la dosis',
      analito: 'gefitinib y metabolitos',
      ref: {
        f: 'dailymed-gefitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'with renal elimination accounting for less than 4% of the administered dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-gefitinib', '827d60e8-7e07-41b7-c28b-49ef1c4a5a41', 'IRESSA (GEFITINIB) TABLET, COATED', 'IRESSA', '19', '2025-08-18', '2026-11-12'),
    rengPubchem(123631, 'gefitinib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
