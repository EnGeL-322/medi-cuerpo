import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'prucaloprida',
    nombre: 'Prucaloprida',
    clase: 'Agonista de serotonina 5-HT4',
    sinonimos: [ 'prucalopride' ],
    formula: 'C18H26ClN3O3',
    masaMolar: 367.9,
    smiles: 'COCCCN1CCC(CC1)NC(=O)C2=CC(=C(C3=C2OCC3)N)Cl',
    inchikey: 'ZPMNHBXQOOVQJL-UHFFFAOYSA-N',
    cid: 3052762,
    iupac: '4-amino-5-chloro-N-[1-(3-methoxypropyl)piperidin-4-yl]-2,3-dihydro-1-benzofuran-7-carboxamide',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'prucaloprida-oral',
      producto: 'MOTEGRITY · comprimido recubierto',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '1 mg',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'silicon dioxide',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'triacetin',
        'titanium dioxide',
        'polyethylene glycol 3000'
      ],
      usos: {
        t: 'Estreñimiento idiopático crónico en adultos según la etiqueta.',
        ref: { f: 'dailymed-prucaloprida', sec: '1 · Indicaciones', cita: 'treatment of chronic idiopathic constipation', codigo: '34067-9' }
      },
      fuente: 'dailymed-prucaloprida',
      sal: {
        nombre: 'succinato de prucaloprida',
        ref: { f: 'dailymed-prucaloprida', sec: '11 · Descripción', cita: 'prucalopride succinate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con succinato de prucaloprida como ingrediente activo.',
    usos: 'Estreñimiento idiopático crónico en adultos según la etiqueta.',
    actua: 'Activa receptores 5-HT4 y estimula el peristaltismo del colon.',
    recorrido: 'En el estudio oral el pico llegó en 2–3 horas. La biodisponibilidad absoluta supera el 90 %. Tras una toma radiomarcada, se recuperó sin cambios un 60–65 % de la dosis en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'MOTEGRITY se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'MOTEGRITY se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-prucaloprida',
            sec: '3 · Forma farmacéutica',
            cita: 'biconvex film-coated tablet debossed with "PRU 1"',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio oral el pico llegó en 2–3 horas. La biodisponibilidad absoluta supera el 90 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio oral el pico llegó en 2–3 horas. La biodisponibilidad absoluta supera el 90 %.',
          ref: { f: 'dailymed-prucaloprida', sec: '12.3 · Farmacocinética', cita: 'observed within 2 to 3 hours', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 30 % se une a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 30 % se une a proteínas plasmáticas.',
          ref: {
            f: 'dailymed-prucaloprida',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma protein binding of prucalopride is approximately 30%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor 5-HT4',
        efecto: 'Activa receptores 5-HT4 y estimula el peristaltismo del colon.',
        lugar: [ 'intestino-grueso' ],
        datos: [
          {
            t: 'Activa receptores 5-HT4 y estimula el peristaltismo del colon.',
            ref: { f: 'dailymed-prucaloprida', sec: '12.1 · Mecanismo', cita: 'stimulates colonic peristalsis', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El original representó el 92–94 % del material radiomarcado en plasma. Se describieron siete metabolitos minoritarios.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El original representó el 92–94 % del material radiomarcado en plasma. Se describieron siete metabolitos minoritarios.',
          ref: { f: 'dailymed-prucaloprida', sec: '12.3 · Farmacocinética', cita: '7 different known minor metabolites', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Tras una toma radiomarcada, se recuperó sin cambios un 60–65 % de la dosis en la orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Tras una toma radiomarcada, se recuperó sin cambios un 60–65 % de la dosis en la orina.',
          ref: {
            f: 'dailymed-prucaloprida',
            sec: '12.3 · Farmacocinética',
            cita: '60 to 65% of the administered dose is excreted unchanged',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-prucaloprida', 'bca1e4c6-4b2b-4876-8ab3-654629c4ff1b', 'MOTEGRITY (PRUCALOPRIDE) TABLET, FILM COATED', 'MOTEGRITY', '12', '2025-07-21', '2026-11-10'),
    rengPubchem(3052762, 'prucalopride', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
