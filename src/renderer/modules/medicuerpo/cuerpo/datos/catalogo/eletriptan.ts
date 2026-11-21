import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eletriptan',
    nombre: 'Eletriptán',
    clase: 'Antimigrañoso (agonista 5-HT1B/1D, triptán)',
    sinonimos: [ 'eletriptan', 'Relpax' ],
    formula: 'C22H26N2O2S',
    masaMolar: 382.5,
    smiles: 'CN1CCC[C@@H]1CC2=CNC3=C2C=C(C=C3)CCS(=O)(=O)C4=CC=CC=C4',
    inchikey: 'PWVXXGRKLHYWKM-LJQANCHMSA-N',
    cid: 77993,
    iupac: '5-[2-(benzenesulfonyl)ethyl]-3-[[(2R)-1-methylpyrrolidin-2-yl]methyl]-1H-indole',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'eletriptan-oral',
      producto: 'Relpax · comprimido',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '20 mg o 40 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Bromhidrato de eletriptán',
        ref: { f: 'dailymed-eletriptan', sec: '11 · Descripción', cita: 'eletriptan hydrobromide', codigo: '34089-3' }
      },
      excipientes: [
        'croscarmellose sodium',
        'fd&c yellow no. 6',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'Tratamiento agudo de la migraña con o sin aura en adultos.',
        ref: {
          f: 'dailymed-eletriptan',
          sec: '1 · Indicaciones',
          cita: 'indicated for the acute treatment of migraine with or without aura in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-eletriptan',
      advertencias: [
        {
          titulo: 'Opresión en el pecho, garganta, cuello o mandíbula',
          texto: 'Es frecuente notar opresión, dolor o presión, que suele no ser de origen cardiaco.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-eletriptan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Sensations of tightness, pain, and pressure in the chest, throat, neck, and jaw commonly occur after treatment with RELPAX',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % y más que con placebo): debilidad, náuseas, mareo y somnolencia, que parecen depender de la dosis.',
          '34084-4',
          'were asthenia, nausea, dizziness, and somnolence'
        ],
        [ 'Datos de 4597 pacientes que trataron su primera migraña.', '34084-4', 'Among 4,597 patients who treated the first migraine headach' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 20 mg o 40 mg por comprimido, según la etiqueta; el activo va como bromhidrato de eletriptán. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la migraña con o sin aura en adultos.',
    actua: 'Se une con gran afinidad a los receptores 5-HT1B, 5-HT1D y 5-HT1F; su efecto se atribuye a su acción agonista 5-HT1B/1D sobre los vasos intracraneales.',
    recorrido: 'Se absorbe bien; el pico llega hacia 1,5 horas en personas sanas y la biodisponibilidad absoluta media ronda el 50 %. Una comida rica en grasa aumenta el AUC y la Cmax un 20-30 %. El aclaramiento no renal supone alrededor del 90 % del total; su semivida terminal es de unas 4 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo recubierto con película.',
          ref: { f: 'dailymed-eletriptan', sec: '3 · Formas y concentraciones', cita: 'Orange, round, convex shaped, film-coated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien; el pico llega hacia 1,5 horas en personas sanas y la biodisponibilidad absoluta media ronda el 50 %. Una comida rica en grasa aumenta el AUC y la Cmax un 20-30 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien; el pico llega hacia 1,5 horas en personas sanas y la biodisponibilidad absoluta media ronda el 50 %. Una comida rica en grasa aumenta el AUC y la Cmax un 20-30 %.',
          ref: {
            f: 'dailymed-eletriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Eletriptan is well absorbed after oral administration with peak plasma levels occurring approximately 1.5 hours after dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta media de alrededor del 50 %.',
          ref: {
            f: 'dailymed-eletriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of eletriptan is approximately 50%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución de 138 L tras la vía intravenosa; alrededor del 85 % se une a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución de 138 L tras la vía intravenosa; alrededor del 85 % se une a proteínas.',
          ref: {
            f: 'dailymed-eletriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding is moderate and approximately 85%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT1B y 5-HT1D',
        efecto: 'Se une con gran afinidad a los receptores 5-HT1B, 5-HT1D y 5-HT1F; su efecto se atribuye a su acción agonista 5-HT1B/1D sobre los vasos intracraneales.',
        lugar: [ 'encefalo', 'vasos' ],
        datos: [
          {
            t: 'Se une con gran afinidad a los receptores 5-HT1B, 5-HT1D y 5-HT1F; su efecto se atribuye a su acción agonista 5-HT1B/1D sobre los vasos intracraneales.',
            ref: {
              f: 'dailymed-eletriptan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Eletriptan binds with high affinity to 5-HT 1B , 5-HT 1D and 5-HT 1F receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por CYP3A4; su único metabolito activo conocido, el N-desmetilado, alcanza el 10-20 % de la concentración del original.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por CYP3A4; su único metabolito activo conocido, el N-desmetilado, alcanza el 10-20 % de la concentración del original.',
          ref: {
            f: 'dailymed-eletriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'eletriptan is primarily metabolized by cytochrome P-450 enzyme CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Eletriptán N-desmetilado',
          actividad: 'activo',
          nota: 'Concentración del 10-20 % del original; semivida de unas 13 horas.',
          ref: {
            f: 'dailymed-eletriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The N-demethylated metabolite of eletriptan is the only known active metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El aclaramiento no renal supone alrededor del 90 % del total; su semivida terminal es de unas 4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El aclaramiento no renal supone alrededor del 90 % del total; su semivida terminal es de unas 4 horas.',
          ref: {
            f: 'dailymed-eletriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Non-renal clearance accounts for about 90% of the total clearance',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'eletriptán',
      poblacion: 'personas sanas',
      ref: {
        f: 'dailymed-eletriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma levels occurring approximately 1.5 hours after dosing to healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'eletriptán',
      ref: {
        f: 'dailymed-eletriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of eletriptan is approximately 50%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '85 (aprox.)',
      unidad: '%',
      analito: 'eletriptán',
      ref: { f: 'dailymed-eletriptan', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is moderate and approximately 85%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'eletriptán',
      ref: {
        f: 'dailymed-eletriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of eletriptan is approximately 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento renal medio',
      valor: '3,9 (aprox.)',
      unidad: 'L/h',
      analito: 'eletriptán',
      ref: {
        f: 'dailymed-eletriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean renal clearance (CL R ) following oral administration is approximately 3.9 L/h',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-eletriptan', '2a501dbd-3ea8-47e4-9fcb-07035b8c8c9e', 'RELPAX (ELETRIPTAN HYDROBROMIDE) TABLET', 'Relpax', '4', '2025-05-12', '2026-11-12'),
    rengPubchem(77993, 'eletriptan', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
