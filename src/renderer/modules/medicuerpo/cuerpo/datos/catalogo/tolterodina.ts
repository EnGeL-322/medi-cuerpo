import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tolterodina',
    nombre: 'Tolterodina',
    clase: 'Antagonista muscarínico',
    sinonimos: [ 'tolterodine' ],
    formula: 'C22H31NO',
    masaMolar: 325.5,
    smiles: 'CC1=CC(=C(C=C1)O)[C@H](CCN(C(C)C)C(C)C)C2=CC=CC=C2',
    inchikey: 'OOGJQPCLVADCPB-HXUWFJFHSA-N',
    cid: 443879,
    iupac: '2-[(1R)-3-[di(propan-2-yl)amino]-1-phenylpropyl]-4-methylphenol',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'tolterodina-oral',
      producto: 'Detrol LA · cápsula de liberación prolongada',
      titular: 'AVERA MCKENNAN HOSPITAL',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '2 mg',
      excipientes: [
        'sucrose',
        'hypromelloses',
        'ethylcelluloses',
        'medium-chain triglycerides',
        'oleic acid',
        'gelatin',
        'fd&c blue no. 2',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Vejiga hiperactiva con urgencia, frecuencia urinaria o incontinencia de urgencia según la etiqueta.',
        ref: { f: 'dailymed-tolterodina', sec: '1 · Indicaciones', cita: 'treatment of overactive bladder with symptoms', codigo: '34067-9' }
      },
      fuente: 'dailymed-tolterodina',
      sal: {
        nombre: 'tartrato de tolterodina',
        ref: { f: 'dailymed-tolterodina', sec: '11 · Descripción', cita: 'tolterodine tartrate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada oral con tartrato de tolterodina como ingrediente activo.',
    usos: 'Vejiga hiperactiva con urgencia, frecuencia urinaria o incontinencia de urgencia según la etiqueta.',
    actua: 'Compite con la acetilcolina en receptores muscarínicos que intervienen en la contracción vesical.',
    recorrido: 'Con la cápsula de liberación prolongada el máximo sérico se observa entre 2 y 6 horas. La etiqueta informa recuperación principalmente urinaria en un estudio radiomarcado con solución oral, una presentación distinta de esta cápsula.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Detrol LA se presenta como cápsula de liberación prolongada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Detrol LA se presenta como cápsula de liberación prolongada para administración oral.',
          ref: { f: 'dailymed-tolterodina', sec: '3 · Forma farmacéutica', cita: '2 mg capsules are blue-green with symbol', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Con la cápsula de liberación prolongada el máximo sérico se observa entre 2 y 6 horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Con la cápsula de liberación prolongada el máximo sérico se observa entre 2 y 6 horas.',
          ref: {
            f: 'dailymed-tolterodina',
            sec: '12.3 · Farmacocinética',
            cita: 'observed 2 to 6 hours after dose administration',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une ampliamente a proteínas plasmáticas. Su metabolito 5-HMT presenta una fracción libre mayor.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une ampliamente a proteínas plasmáticas. Su metabolito 5-HMT presenta una fracción libre mayor.',
          ref: {
            f: 'dailymed-tolterodina',
            sec: '12.3 · Farmacocinética',
            cita: 'Tolterodine is highly bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores muscarínicos',
        efecto: 'Compite con la acetilcolina en receptores muscarínicos que intervienen en la contracción vesical.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Compite con la acetilcolina en receptores muscarínicos que intervienen en la contracción vesical.',
            ref: { f: 'dailymed-tolterodina', sec: '12.1 · Mecanismo', cita: 'competitive antagonist of acetylcholine', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'En el hígado, CYP2D6 forma 5-hidroximetiltolterodina activa. Cuando esta vía es lenta cambia el perfil de metabolitos.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'En el hígado, CYP2D6 forma 5-hidroximetiltolterodina activa. Cuando esta vía es lenta cambia el perfil de metabolitos.',
          ref: {
            f: 'dailymed-tolterodina',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively metabolized by the liver following oral dosing',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-hidroximetiltolterodina (5-HMT)',
          actividad: 'activo',
          ref: {
            f: 'dailymed-tolterodina',
            sec: '12 · Farmacología clínica',
            cita: 'the major pharmacologically active metabolite',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción eliminable.',
      ocurre: 'La etiqueta informa recuperación principalmente urinaria en un estudio radiomarcado con solución oral, una presentación distinta de esta cápsula.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La etiqueta informa recuperación principalmente urinaria en un estudio radiomarcado con solución oral, una presentación distinta de esta cápsula.',
          ref: {
            f: 'dailymed-tolterodina',
            sec: '12.3 · Farmacocinética',
            cita: '77% of radioactivity was recovered in urine',
            codigo: '43682-4'
          },
          condiciones: 'Balance con solución oral de tolterodina.'
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-tolterodina', '88df13b1-090d-4894-a60a-878b370409c0', 'DETROL LA (TOLTERODINE TARTRATE) CAPSULE, EXTENDED RELEASE', 'Detrol LA', '1', '2017-04-11', '2026-11-10'),
    rengPubchem(443879, 'tolterodine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
