import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ertugliflozina',
    nombre: 'Ertugliflozina',
    clase: 'Inhibidor de SGLT2',
    sinonimos: [ 'ertugliflozin' ],
    formula: 'C22H25ClO7',
    masaMolar: 436.9,
    smiles: 'CCOC1=CC=C(C=C1)CC2=C(C=CC(=C2)[C@@]34[C@@H]([C@H]([C@@H]([C@@](O3)(CO4)CO)O)O)O)Cl',
    inchikey: 'MCIACXAZCBVDEE-CUUWFGFTSA-N',
    cid: 44814423,
    iupac: '(1S,2S,3S,4R,5S)-5-[4-chloro-3-[(4-ethoxyphenyl)methyl]phenyl]-1-(hydroxymethyl)-6,8-dioxabicyclo[3.2.1]octane-2,3,4-triol',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'ertugliflozina-oral',
      producto: 'STEGLATRO · comprimido recubierto',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'polyethylene glycol 3350',
        'triacetin',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Control de la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
        ref: { f: 'dailymed-ertugliflozina', sec: '1 · Indicaciones', cita: 'adults with type 2 diabetes mellitus', codigo: '34067-9' }
      },
      fuente: 'dailymed-ertugliflozina',
      sal: {
        nombre: 'Ertugliflozina con ácido L-piroglutámico',
        ref: {
          f: 'dailymed-ertugliflozina',
          sec: '11 · Descripción',
          cita: 'chemical name of ertugliflozin L-pyroglutamic acid',
          codigo: '34089-3'
        }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con Ertugliflozina con ácido L-piroglutámico como ingrediente activo.',
    usos: 'Control de la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
    actua: 'Inhibe SGLT2 en el riñón, con lo que menos glucosa filtrada vuelve a la sangre y más se elimina por orina.',
    recorrido: 'El máximo plasmático mediano llegó a la hora en el estudio oral en ayunas. En el balance radiomarcado se recuperó parte de la ertugliflozina intacta en heces (33,8 %) y una fracción pequeña en orina (1,5 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'STEGLATRO se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'STEGLATRO se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-ertugliflozina',
            sec: '11 · Descripción',
            cita: 'STEGLATRO (ertugliflozin) tablets for oral use contain',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El máximo plasmático mediano llegó a la hora en el estudio oral en ayunas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El máximo plasmático mediano llegó a la hora en el estudio oral en ayunas.',
          ref: { f: 'dailymed-ertugliflozina', sec: '12.3 · Farmacocinética', cita: 'occur at 1 hour', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'La unión a proteínas plasmáticas se cifra en el 93,6 %.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas se cifra en el 93,6 %.',
          ref: {
            f: 'dailymed-ertugliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of ertugliflozin is 93.6%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cotransportador sodio-glucosa SGLT2',
        efecto: 'Inhibe SGLT2 en el riñón, con lo que menos glucosa filtrada vuelve a la sangre y más se elimina por orina.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Inhibe SGLT2 en el riñón, con lo que menos glucosa filtrada vuelve a la sangre y más se elimina por orina.',
            ref: {
              f: 'dailymed-ertugliflozina',
              sec: '12.1 · Mecanismo',
              cita: 'reduces renal reabsorption of filtered glucose',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Predomina la glucuronidación por UGT1A9 y UGT2B7. Sus glucurónidos se consideran inactivos a las concentraciones estudiadas.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Predomina la glucuronidación por UGT1A9 y UGT2B7. Sus glucurónidos se consideran inactivos a las concentraciones estudiadas.',
          ref: {
            f: 'dailymed-ertugliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'UGT1A9 and UGT2B7-mediated O-glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el balance radiomarcado se recuperó parte de la ertugliflozina intacta en heces (33,8 %) y una fracción pequeña en orina (1,5 %).',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el balance radiomarcado se recuperó parte de la ertugliflozina intacta en heces (33,8 %) y una fracción pequeña en orina (1,5 %).',
          ref: {
            f: 'dailymed-ertugliflozina',
            sec: '12.3 · Farmacocinética',
            cita: '33.8% as unchanged ertugliflozin in feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-ertugliflozina', 'e6f3e718-bb99-48f1-ab94-b9f0af05fed6', 'STEGLATRO (ERTUGLIFLOZIN) TABLET, FILM COATED', 'STEGLATRO', '17', '2026-06-23', '2026-11-10'),
    rengPubchem(44814423, 'ertugliflozin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
