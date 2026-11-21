import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'aprepitant',
    nombre: 'Aprepitant',
    clase: 'Antagonista de neurocinina 1',
    sinonimos: [ 'aprepitant' ],
    formula: 'C23H21F7N4O3',
    masaMolar: 534.4,
    smiles: 'C[C@H](C1=CC(=CC(=C1)C(F)(F)F)C(F)(F)F)O[C@@H]2[C@@H](N(CCO2)CC3=NNC(=O)N3)C4=CC=C(C=C4)F',
    inchikey: 'ATALOFNDEOCMKK-OITMNORJSA-N',
    cid: 135413536,
    iupac: '3-[[(2R,3S)-2-[(1R)-1-[3,5-bis(trifluoromethyl)phenyl]ethoxy]-3-(4-fluorophenyl)morpholin-4-yl]methyl]-1,4-dihydro-1,2,4-triazol-5-one',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'aprepitant-oral',
      producto: 'EMEND · cápsula',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '80 mg',
      excipientes: [
        'sucrose',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (1600000 wamw)',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'titanium dioxide',
        'silicon dioxide'
      ],
      usos: {
        t: 'Prevención de náuseas y vómitos asociados a determinados tratamientos de quimioterapia, en combinación con otros antieméticos según la etiqueta.',
        ref: { f: 'dailymed-aprepitant', sec: '1 · Indicaciones', cita: 'acute and delayed nausea and vomiting', codigo: '34067-9' }
      },
      fuente: 'dailymed-aprepitant'
    }
  ],
  resumen: {
    contiene: 'Cápsula oral con aprepitant como ingrediente activo.',
    usos: 'Prevención de náuseas y vómitos asociados a determinados tratamientos de quimioterapia, en combinación con otros antieméticos según la etiqueta.',
    actua: 'Bloquea receptores NK1 de la sustancia P y reduce la señal que participa en el reflejo del vómito.',
    recorrido: 'La biodisponibilidad oral media de la cápsula fue de alrededor del 60–65 % en el intervalo estudiado. El original se elimina principalmente por metabolismo. La etiqueta aclara que el balance radiomarcado se estudió con un profármaco intravenoso, por lo que no da porcentajes de salida para esta cápsula.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'EMEND se presenta como cápsula para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'EMEND se presenta como cápsula para administración oral.',
          ref: {
            f: 'dailymed-aprepitant',
            sec: '11 · Descripción',
            cita: 'DESCRIPTION EMEND capsules contain the active ingredient,',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad oral media de la cápsula fue de alrededor del 60–65 % en el intervalo estudiado.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad oral media de la cápsula fue de alrededor del 60–65 % en el intervalo estudiado.',
          ref: {
            f: 'dailymed-aprepitant',
            sec: '12.3 · Farmacocinética',
            cita: 'mean absolute oral bioavailability of EMEND',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Más del 95 % se une a proteínas plasmáticas. En humanos atraviesa la barrera hematoencefálica.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Más del 95 % se une a proteínas plasmáticas. En humanos atraviesa la barrera hematoencefálica.',
          ref: { f: 'dailymed-aprepitant', sec: '12.3 · Farmacocinética', cita: 'crosses the blood brain barrier in humans', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor NK1 de sustancia P',
        efecto: 'Bloquea receptores NK1 de la sustancia P y reduce la señal que participa en el reflejo del vómito.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Bloquea receptores NK1 de la sustancia P y reduce la señal que participa en el reflejo del vómito.',
            ref: {
              f: 'dailymed-aprepitant',
              sec: '12.1 · Mecanismo',
              cita: 'selective high-affinity antagonist of human substance P',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se metaboliza extensamente. Ensayos con microsomas hepáticos identifican CYP3A4 como la vía enzimática principal.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza extensamente. Ensayos con microsomas hepáticos identifican CYP3A4 como la vía enzimática principal.',
          ref: { f: 'dailymed-aprepitant', sec: '12.3 · Farmacocinética', cita: 'metabolized primarily by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El original se elimina principalmente por metabolismo. La etiqueta aclara que el balance radiomarcado se estudió con un profármaco intravenoso, por lo que no da porcentajes de salida para esta cápsula.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El original se elimina principalmente por metabolismo. La etiqueta aclara que el balance radiomarcado se estudió con un profármaco intravenoso, por lo que no da porcentajes de salida para esta cápsula.',
          ref: { f: 'dailymed-aprepitant', sec: '12.3 · Farmacocinética', cita: 'aprepitant is not renally excreted', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-aprepitant', '696f9e80-9cae-403b-de9e-078343ce4713', 'EMEND (APREPITANT) CAPSULE EMEND (APREPITANT) KIT EMEND (APREPITANT) POWDER, FOR SUSPENSION', 'EMEND', '43', '2026-11-06', '2026-11-10'),
    rengPubchem(135413536, 'aprepitant', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
