import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'granisetron',
    nombre: 'Granisetrón',
    clase: 'Antagonista de serotonina 5-HT3',
    sinonimos: [ 'granisetron' ],
    formula: 'C18H24N4O',
    masaMolar: 312.4,
    smiles: 'CN1[C@@H]2CCC[C@H]1CC(C2)NC(=O)C3=NN(C4=CC=CC=C43)C',
    inchikey: 'MFWNKCLOYSRHCJ-AGUYFDCRSA-N',
    cid: 5284566,
    iupac: '1-methyl-N-[(1R,5S)-9-methyl-9-azabicyclo[3.3.1]nonan-3-yl]indazole-3-carboxamide',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'granisetron-oral',
      producto: 'Granisetron Hydrochloride · comprimido recubierto',
      titular: 'BIONPHARMA INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '1 mg',
      excipientes: [
        'cellulose, microcrystalline',
        'sodium starch glycolate type a potato',
        'lactose monohydrate',
        'hypromellose 2910 (3 mpa.s)',
        'magnesium stearate'
      ],
      usos: {
        t: 'Prevención de náuseas y vómitos asociados a quimioterapia emetógena y a determinadas modalidades de radioterapia.',
        ref: {
          f: 'dailymed-granisetron',
          sec: '1 · Indicaciones',
          cita: 'Nausea and vomiting associated with initial and repeat courses',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-granisetron',
      sal: {
        nombre: 'clorhidrato de granisetrón',
        ref: { f: 'dailymed-granisetron', sec: '11 · Descripción', cita: 'Granisetron hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con clorhidrato de granisetrón como ingrediente activo.',
    usos: 'Prevención de náuseas y vómitos asociados a quimioterapia emetógena y a determinadas modalidades de radioterapia.',
    actua: 'Bloquea receptores 5-HT3 en vías que transmiten la señal del vómito.',
    recorrido: 'En el estudio de voluntarios, los alimentos redujeron ligeramente la exposición total y aumentaron el máximo plasmático. En los voluntarios, aproximadamente el 11 % se eliminó intacto en orina. Los metabolitos aparecieron en orina y heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Granisetron Hydrochloride se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Granisetron Hydrochloride se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-granisetron',
            sec: '11 · Descripción',
            cita: 'Granisetron hydrochloride tablets USP contain granisetron hydrochloride',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio de voluntarios, los alimentos redujeron ligeramente la exposición total y aumentaron el máximo plasmático.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio de voluntarios, los alimentos redujeron ligeramente la exposición total y aumentaron el máximo plasmático.',
          ref: { f: 'dailymed-granisetron', sec: '12.3 · Farmacocinética', cita: 'AUC was decreased by 5%', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 65 % se une a proteínas plasmáticas. Puede repartirse entre plasma y glóbulos rojos.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 65 % se une a proteínas plasmáticas. Puede repartirse entre plasma y glóbulos rojos.',
          ref: {
            f: 'dailymed-granisetron',
            sec: '12.3 · Farmacocinética',
            cita: 'distributes freely between plasma and red blood cells',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor 5-HT3 de serotonina',
        efecto: 'Bloquea receptores 5-HT3 en vías que transmiten la señal del vómito.',
        lugar: [ 'nervios', 'encefalo' ],
        datos: [
          {
            t: 'Bloquea receptores 5-HT3 en vías que transmiten la señal del vómito.',
            ref: { f: 'dailymed-granisetron', sec: '12 · Farmacología clínica', cita: 'a selective 5-hydroxytryptamine 3', codigo: '34090-1' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma por desmetilación, oxidación y conjugación. La etiqueta describe predominio del metabolismo hepático.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma por desmetilación, oxidación y conjugación. La etiqueta describe predominio del metabolismo hepático.',
          ref: {
            f: 'dailymed-granisetron',
            sec: '12.3 · Farmacocinética',
            cita: 'Clearance is predominantly by hepatic metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'rinones', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En los voluntarios, aproximadamente el 11 % se eliminó intacto en orina. Los metabolitos aparecieron en orina y heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En los voluntarios, aproximadamente el 11 % se eliminó intacto en orina. Los metabolitos aparecieron en orina y heces.',
          ref: { f: 'dailymed-granisetron', sec: '12.3 · Farmacocinética', cita: '48% in the urine and 38% in the feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-granisetron', '50b713d3-7ca8-465a-aefa-65ddbe17b934', 'GRANISETRON HYDROCHLORIDE TABLET, FILM COATED', 'Granisetron Hydrochloride', '2', '2023-12-19', '2026-11-10'),
    rengPubchem(5284566, 'granisetron', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
