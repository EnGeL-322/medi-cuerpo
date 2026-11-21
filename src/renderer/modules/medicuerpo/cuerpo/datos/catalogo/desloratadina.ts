import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'desloratadina',
    nombre: 'Desloratadina',
    clase: 'Antihistamínico H1',
    sinonimos: [ 'desloratadine' ],
    formula: 'C19H19ClN2',
    masaMolar: 310.8,
    smiles: 'C1CC2=C(C=CC(=C2)Cl)C(=C3CCNCC3)C4=C1C=CC=N4',
    inchikey: 'JAUOIFJMECXRGI-UHFFFAOYSA-N',
    cid: 124087,
    iupac: '13-chloro-2-piperidin-4-ylidene-4-azatricyclo[9.4.0.03,8]pentadeca-1(11),3(8),4,6,12,14-hexaene',
    area: 'Alergias'
  },
  presentaciones: [
    {
      id: 'desloratadina-oral',
      producto: 'Clarinex · comprimido recubierto',
      titular: 'ORGANON LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'dibasic calcium phosphate dihydrate',
        'microcrystalline cellulose',
        'starch, corn',
        'talc',
        'carnauba wax',
        'white wax',
        'lactose monohydrate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'fd&c blue no. 2',
        'aluminum oxide'
      ],
      usos: {
        t: 'Alivio de síntomas de rinitis alérgica y, según la presentación y población de la etiqueta, urticaria idiopática crónica.',
        ref: { f: 'dailymed-desloratadina', sec: '1 · Indicaciones', cita: 'Seasonal Allergic Rhinitis: relief', codigo: '34067-9' }
      },
      fuente: 'dailymed-desloratadina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con desloratadina como ingrediente activo.',
    usos: 'Alivio de síntomas de rinitis alérgica y, según la presentación y población de la etiqueta, urticaria idiopática crónica.',
    actua: 'Antagoniza receptores H1, reduciendo la señal de histamina que participa en los síntomas alérgicos.',
    recorrido: 'En voluntarios sanos con el comprimido, el máximo plasmático medio llegó aproximadamente a las tres horas. En el estudio de balance se recuperó material radiomarcado en orina y heces, principalmente como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Clarinex se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Clarinex se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-desloratadina',
            sec: '3 · Forma farmacéutica',
            cita: 'STRENGTHS CLARINEX Tablets are supplied as: Light',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En voluntarios sanos con el comprimido, el máximo plasmático medio llegó aproximadamente a las tres horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En voluntarios sanos con el comprimido, el máximo plasmático medio llegó aproximadamente a las tres horas.',
          ref: {
            f: 'dailymed-desloratadina',
            sec: '12.3 · Farmacocinética',
            cita: 'occurred at approximately 3 hours post dose',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Entre el 82 % y el 87 % se une a proteínas plasmáticas. Su metabolito activo también tiene una unión alta.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Entre el 82 % y el 87 % se une a proteínas plasmáticas. Su metabolito activo también tiene una unión alta.',
          ref: { f: 'dailymed-desloratadina', sec: '12.3 · Farmacocinética', cita: '82% to 87% and 85% to 89%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor de histamina H1',
        efecto: 'Antagoniza receptores H1, reduciendo la señal de histamina que participa en los síntomas alérgicos.',
        lugar: [],
        datos: [
          {
            t: 'Antagoniza receptores H1, reduciendo la señal de histamina que participa en los síntomas alérgicos.',
            ref: {
              f: 'dailymed-desloratadina',
              sec: '12.1 · Mecanismo',
              cita: 'selective H 1 -receptor histamine antagonist activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Forma 3-hidroxidesloratadina activa, que después se glucuronida.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Forma 3-hidroxidesloratadina activa, que después se glucuronida.',
          ref: {
            f: 'dailymed-desloratadina',
            sec: '12.3 · Farmacocinética',
            cita: 'an active metabolite, which is subsequently glucuronidated',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '3-hidroxidesloratadina',
          actividad: 'activo',
          ref: {
            f: 'dailymed-desloratadina',
            sec: '12.3 · Farmacocinética',
            cita: 'an active metabolite, which is subsequently glucuronidated',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio de balance se recuperó material radiomarcado en orina y heces, principalmente como metabolitos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio de balance se recuperó material radiomarcado en orina y heces, principalmente como metabolitos.',
          ref: { f: 'dailymed-desloratadina', sec: '12.3 · Farmacocinética', cita: 'in urine and feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-desloratadina', 'c671342e-69a2-4ca5-abc2-8166ed4240d4', 'CLARINEX (DESLORATADINE) TABLET, FILM COATED', 'Clarinex', '6', '2025-05-28', '2026-11-10'),
    rengPubchem(124087, 'desloratadine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
