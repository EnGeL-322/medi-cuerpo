import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ciclofosfamida',
    nombre: 'Ciclofosfamida',
    clase: 'Agente alquilante (profármaco)',
    sinonimos: [ 'cyclophosphamide' ],
    formula: 'C7H15Cl2N2O2P',
    masaMolar: 261.08,
    smiles: 'C1CNP(=O)(OC1)N(CCCl)CCCl',
    inchikey: 'CMSMOCZEIVJLDB-UHFFFAOYSA-N',
    cid: 2907,
    iupac: 'N,N-bis(2-chloroethyl)-2-oxo-1,3,2lambda5-oxazaphosphinan-2-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ciclofosfamida-oral',
      producto: 'Cyclophosphamide · cápsula',
      titular: 'AMNEAL PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 50 mg por cápsula, según la etiqueta',
      sal: { nombre: 'Cyclophosphamide', ref: { f: 'dailymed-ciclofosfamida', sec: '11 · Descripción', cita: 'Cyclophosphamide', codigo: '34089-3' } },
      excipientes: [
        'starch, corn',
        'sodium stearyl fumarate',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'gelatin',
        'titanium dioxide',
        'ferrosoferric oxide',
        'isopropyl alcohol',
        'propylene glycol',
        'ammonia',
        'butyl alcohol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de enfermedades malignas como linfomas malignos, mieloma múltiple, leucemias o cáncer de mama, entre otras.',
        ref: {
          f: 'dailymed-ciclofosfamida',
          sec: '1 · Indicaciones',
          cita: 'Cyclophosphamide capsules are an alkylating drug indicated for treatment of',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ciclofosfamida',
      advertencias: [
        {
          titulo: 'Mielosupresión e inmunosupresión',
          texto: 'Puede causar mielosupresión (leucopenia, neutropenia, trombocitopenia y anemia), insuficiencia de la médula ósea e inmunosupresión grave.',
          organos: [ 'medula-osea', 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cyclophosphamide can cause myelosuppression (leukopenia, neutropenia, thrombocytopenia and anemia), bone marrow failure, and severe immunosuppression',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad urinaria y renal',
          texto: 'Se han notificado cistitis hemorrágica, pielitis, ureteritis y hematuria.',
          organos: [ 'vejiga', 'rinones', 'vias-urinarias' ],
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hemorrhagic cystitis, pyelitis, ureteritis, and hematuria have been reported with cyclophos',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: neutropenia, neutropenia febril, fiebre y alopecia, entre otras.',
          '34084-4',
          'Adverse reactions reported most often include neutropenia, febrile neutropenia, fever, alopecia'
        ],
        [
          'Entre las reacciones que la etiqueta trata aparte figuran la mielosupresión, la inmunosupresión, la insuficiencia de la médula ósea y las infecciones.',
          '34084-4',
          'Myelosuppression, Immunosuppression, Bone Marrow Failure, and Infections [see Warnings and Precautions (5.1) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg o 50 mg por cápsula, según la etiqueta; el activo va como cyclophosphamide. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de enfermedades malignas como linfomas malignos, mieloma múltiple, leucemias o cáncer de mama, entre otras.',
    actua: 'Se cree que actúa por el entrecruzamiento del ADN de las células tumorales.',
    recorrido: 'Tras la administración oral, las concentraciones máximas se producen a la hora. Se excreta sobre todo como metabolitos; tras la vía intravenosa, entre el 10 % y el 20 % sale inalterado por la orina y el 4 % por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '3 · Formas y concentraciones',
            cita: '25 mg capsule for oral administration contains 25 mg of cyclophosphamide, USP',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral, las concentraciones máximas se producen a la hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral, las concentraciones máximas se producen a la hora.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration, peak concentrations of cyclophosphamide occurred at one hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'El cociente de áreas bajo la curva entre la vía oral y la intravenosa fue de 0,87 a 0,96.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Area under the curve ratio for the drug after oral and IV administration (AUC po : AUC iv ) ranged from 0.87 to 0.96',
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
      ocurre: 'Aproximadamente el 20 % de la ciclofosfamida está unida a proteínas, sin cambios con la dosis; algunos metabolitos se unen en más del 60 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Aproximadamente el 20 % de la ciclofosfamida está unida a proteínas, sin cambios con la dosis; algunos metabolitos se unen en más del 60 %.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 20% of cyclophosphamide is protein bound, with no dose dependent changes',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución se aproxima al del agua corporal total (30 a 50 L).',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Volume of distribution approximates total body water (30 L to 50 L)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ADN de las células tumorales',
        efecto: 'Se cree que actúa por el entrecruzamiento del ADN de las células tumorales.',
        lugar: [ 'tejidos', 'medula-osea' ],
        datos: [
          {
            t: 'Se cree que actúa por el entrecruzamiento del ADN de las células tumorales.',
            ref: {
              f: 'dailymed-ciclofosfamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action is thought to involve cross-linking of tumor cell DNA',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado es el principal lugar de activación: alrededor del 75 % de la dosis se activa por los citocromos P450 microsomales hepáticos (sobre todo la CYP2B6).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado es el principal lugar de activación: alrededor del 75 % de la dosis se activa por los citocromos P450 microsomales hepáticos (sobre todo la CYP2B6).',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The liver is the major site of cyclophosphamide activation. Approximately 75% of the administered dose of cyclophosphamide is activated by hepatic microsomal cytochrome P450s',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '4-hidroxiciclofosfamida y aldofosfamida',
          actividad: 'activo',
          nota: 'Formas de activación; después se oxidan a metabolitos inactivos (4-cetociclofosfamida y carboxifosfamida).',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Cyclophosphamide is activated to form 4-hydroxycyclophosphamide, which is in equilibrium with its ring-open tautomer aldophosphamide',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Fosforamida mostaza y acroleína',
          actividad: 'activo',
          nota: 'Metabolitos activos.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Aldophosphamide can undergo β-elimination to form active metabolites phosphoramide mustard and acrolein',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta sobre todo como metabolitos; tras la vía intravenosa, entre el 10 % y el 20 % sale inalterado por la orina y el 4 % por la bilis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta sobre todo como metabolitos; tras la vía intravenosa, entre el 10 % y el 20 % sale inalterado por la orina y el 4 % por la bilis.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Cyclophosphamide is primarily excreted as metabolites. 10% to 20% is excreted unchanged in the urine and 4% is excreted in the bile following IV administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras la vía intravenosa, la semivida de eliminación va de 3 a 12 horas, con un aclaramiento corporal total de 4 a 5,6 L/h.',
          ref: {
            f: 'dailymed-ciclofosfamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Following IV administration, elimination half-life (t 1/2 ) ranges from 3 to 12 hours with total body clearance (CL) values of 4 to 5.6 L/h',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '1',
      unidad: 'h',
      analito: 'ciclofosfamida',
      ref: {
        f: 'dailymed-ciclofosfamida',
        sec: '12.3 · Farmacocinética',
        cita: 'After oral administration, peak concentrations of cyclophosphamide occurred at one hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '20 (aprox.)',
      unidad: '%',
      analito: 'ciclofosfamida',
      ref: {
        f: 'dailymed-ciclofosfamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 20% of cyclophosphamide is protein bound',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '30-50',
      unidad: 'L',
      analito: 'ciclofosfamida',
      ref: {
        f: 'dailymed-ciclofosfamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Volume of distribution approximates total body water (30 L to 50 L)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '3-12',
      unidad: 'h',
      analito: 'ciclofosfamida',
      condiciones: 'vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-ciclofosfamida',
        sec: '12.3 · Farmacocinética',
        cita: 'elimination half-life (t 1/2 ) ranges from 3 to 12 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal total',
      valor: '4-5,6',
      unidad: 'L/h',
      analito: 'ciclofosfamida',
      condiciones: 'vía intravenosa',
      origen: 'otra-via',
      ref: { f: 'dailymed-ciclofosfamida', sec: '12.3 · Farmacocinética', cita: 'total body clearance (CL) values of 4 to 5.6 L/h', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ciclofosfamida', 'b75d72ab-861c-4463-884b-d499d306bbd2', 'CYCLOPHOSPHAMIDE CAPSULE', 'Cyclophosphamide', '4', '2026-11-04', '2026-11-15'),
    rengPubchem(2907, 'cyclophosphamide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
