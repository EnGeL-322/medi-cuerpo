import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ciclobenzaprina',
    nombre: 'Ciclobenzaprina',
    clase: 'Relajante muscular de acción central',
    sinonimos: [ 'cyclobenzaprine' ],
    formula: 'C20H21N',
    masaMolar: 275.4,
    smiles: 'CN(C)CCC=C1C2=CC=CC=C2C=CC3=CC=CC=C31',
    inchikey: 'JURKNVYFZMSNLP-UHFFFAOYSA-N',
    cid: 2895,
    iupac: 'N,N-dimethyl-3-(2-tricyclo[9.4.0.03,8]pentadeca-1(15),3,5,7,9,11,13-heptaenylidene)propan-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'ciclobenzaprina-oral',
      producto: 'AMRIX · cápsula de liberación prolongada',
      titular: 'CEPHALON, LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '15 mg',
      excipientes: [
        'diethyl phthalate',
        'ethylcellulose (10 mpa.s)',
        'gelatin',
        'hypromellose 2910 (6 mpa.s)',
        'polyethylene glycol 400',
        'polyethylene glycol 8000',
        'sucrose',
        'starch, corn',
        'titanium dioxide',
        'd&c yellow no. 10',
        'fd&c green no. 3',
        'fd&c red no. 40'
      ],
      usos: {
        t: 'Alivio de espasmo muscular asociado a afecciones musculoesqueléticas agudas, según la etiqueta.',
        ref: { f: 'dailymed-ciclobenzaprina', sec: '1 · Indicaciones', cita: 'relief of muscle spasm associated with acute', codigo: '34067-9' }
      },
      fuente: 'dailymed-ciclobenzaprina',
      sal: {
        nombre: 'clorhidrato de ciclobenzaprina',
        ref: { f: 'dailymed-ciclobenzaprina', sec: '11 · Descripción', cita: 'cyclobenzaprine hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada oral con clorhidrato de ciclobenzaprina como ingrediente activo.',
    usos: 'Alivio de espasmo muscular asociado a afecciones musculoesqueléticas agudas, según la etiqueta.',
    actua: 'Reduce el espasmo muscular. Los estudios en animales sitúan la acción principalmente en el tronco del encéfalo.',
    recorrido: 'Con la cápsula prolongada, el pico plasmático llegó a las 7–8 horas en las dos concentraciones estudiadas. El riñón es la vía principal de eliminación de sus glucurónidos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'AMRIX se presenta como cápsula de liberación prolongada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'AMRIX se presenta como cápsula de liberación prolongada para administración oral.',
          ref: {
            f: 'dailymed-ciclobenzaprina',
            sec: '3 · Forma farmacéutica',
            cita: 'STRENGTHS Extended-release capsules in the following strengths:',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Con la cápsula prolongada, el pico plasmático llegó a las 7–8 horas en las dos concentraciones estudiadas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Con la cápsula prolongada, el pico plasmático llegó a las 7–8 horas en las dos concentraciones estudiadas.',
          ref: {
            f: 'dailymed-ciclobenzaprina',
            sec: '12.3 · Farmacocinética',
            cita: 'was 7 to 8 hours for both doses of AMRIX',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En el estudio de tomas repetidas en adultos sanos, se observó acumulación plasmática en equilibrio.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En el estudio de tomas repetidas en adultos sanos, se observó acumulación plasmática en equilibrio.',
          ref: {
            f: 'dailymed-ciclobenzaprina',
            sec: '12.3 · Farmacocinética',
            cita: 'a 2.5-fold accumulation of plasma cyclobenzaprine',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Reduce el espasmo muscular. Los estudios en animales sitúan la acción principalmente en el tronco del encéfalo.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Reduce el espasmo muscular. Los estudios en animales sitúan la acción principalmente en el tronco del encéfalo.',
            ref: {
              f: 'dailymed-ciclobenzaprina',
              sec: '12.1 · Mecanismo',
              cita: 'primarily within the central nervous system at the brain stem',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente. La etiqueta describe glucurónidos como productos de eliminación.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente. La etiqueta describe glucurónidos como productos de eliminación.',
          ref: {
            f: 'dailymed-ciclobenzaprina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cyclobenzaprine is extensively metabolized',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El riñón es la vía principal de eliminación de sus glucurónidos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El riñón es la vía principal de eliminación de sus glucurónidos.',
          ref: {
            f: 'dailymed-ciclobenzaprina',
            sec: '12.3 · Farmacocinética',
            cita: 'excreted primarily as glucuronides via the kidney',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-ciclobenzaprina', '3902123b-1365-ac3c-0934-afff9eeeb1bd', 'AMRIX (CYCLOBENZAPRINE HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE', 'AMRIX', '32', '2026-09-02', '2026-11-10'),
    rengPubchem(2895, 'cyclobenzaprine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
