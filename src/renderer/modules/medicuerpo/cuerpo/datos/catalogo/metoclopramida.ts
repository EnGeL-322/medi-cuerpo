import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metoclopramida',
    nombre: 'Metoclopramida',
    clase: 'Procinético y antagonista dopaminérgico',
    sinonimos: [ 'metoclopramide' ],
    formula: 'C14H22ClN3O2',
    masaMolar: 299.79,
    smiles: 'CCN(CC)CCNC(=O)C1=CC(=C(C=C1OC)N)Cl',
    inchikey: 'TTWJBBZEZQICBI-UHFFFAOYSA-N',
    cid: 4168,
    iupac: '4-amino-5-chloro-N-[2-(diethylamino)ethyl]-2-methoxybenzamide',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'metoclopramida-oral',
      producto: 'Reglan · comprimido',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'starch, corn',
        'silicon dioxide',
        'microcrystalline cellulose',
        'stearic acid',
        'anhydrous lactose',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'aluminum oxide'
      ],
      usos: {
        t: 'La etiqueta de estos comprimidos incluye reflujo documentado en casos concretos y gastroparesia diabética en adultos.',
        ref: {
          f: 'dailymed-metoclopramida',
          sec: '1 · Indicaciones',
          cita: 'symptomatic, documented gastroesophageal reflux',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-metoclopramida',
      sal: {
        nombre: 'clorhidrato de metoclopramida',
        ref: { f: 'dailymed-metoclopramida', sec: '11 · Descripción', cita: 'Metoclopramide hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con clorhidrato de metoclopramida como ingrediente activo.',
    usos: 'La etiqueta de estos comprimidos incluye reflujo documentado en casos concretos y gastroparesia diabética en adultos.',
    actua: 'Estimula la motilidad del tubo digestivo superior. Su mecanismo exacto en estas indicaciones no está establecido por completo.',
    recorrido: 'Tras una toma oral el pico plasmático se observó aproximadamente a las 1–2 horas. En el estudio oral radiomarcado, cerca del 85 % de la radiactividad apareció en la orina en 72 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Reglan se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Reglan se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-metoclopramida',
            sec: '11 · Descripción',
            cita: 'is: Reglan tablets are for oral administration.',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Tras una toma oral el pico plasmático se observó aproximadamente a las 1–2 horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Tras una toma oral el pico plasmático se observó aproximadamente a las 1–2 horas.',
          ref: { f: 'dailymed-metoclopramida', sec: '12.3 · Farmacocinética', cita: 'occurred at about 1 to 2 hours', codigo: '43682-4' }
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
            f: 'dailymed-metoclopramida',
            sec: '12.3 · Farmacocinética',
            cita: 'not extensively bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Estimula la motilidad del tubo digestivo superior. Su mecanismo exacto en estas indicaciones no está establecido por completo.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Estimula la motilidad del tubo digestivo superior. Su mecanismo exacto en estas indicaciones no está establecido por completo.',
            ref: {
              f: 'dailymed-metoclopramida',
              sec: '12.1 · Mecanismo',
              cita: 'stimulates motility of the upper gastrointestinal tract',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma por oxidación y conjugación en el hígado. CYP2D6 participa en la formación de un metabolito principal.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma por oxidación y conjugación en el hígado. CYP2D6 participa en la formación de un metabolito principal.',
          ref: {
            f: 'dailymed-metoclopramida',
            sec: '12.3 · Farmacocinética',
            cita: 'major oxidative metabolite, is formed primarily by CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio oral radiomarcado, cerca del 85 % de la radiactividad apareció en la orina en 72 horas.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio oral radiomarcado, cerca del 85 % de la radiactividad apareció en la orina en 72 horas.',
          ref: { f: 'dailymed-metoclopramida', sec: '12.3 · Farmacocinética', cita: 'appeared in the urine within 72 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-metoclopramida', 'de55c133-eb08-4a35-91a2-5dc093027397', 'REGLAN (METOCLOPRAMIDE HYDROCHLORIDE) TABLET', 'Reglan', '8', '2026-02-16', '2026-11-10'),
    rengPubchem(4168, 'metoclopramide', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
