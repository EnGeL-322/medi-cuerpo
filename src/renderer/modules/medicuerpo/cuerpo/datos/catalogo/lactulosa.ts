import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lactulosa',
    nombre: 'Lactulosa',
    clase: 'Laxante osmótico (disacárido sintético)',
    sinonimos: [ 'lactulose' ],
    formula: 'C12H22O11',
    masaMolar: 342.3,
    smiles: 'C([C@@H]1[C@@H]([C@@H]([C@H]([C@@H](O1)O[C@@H]2[C@H](O[C@@]([C@H]2O)(CO)O)CO)O)O)O)O',
    inchikey: 'JCQLYHFGKNRPGE-FCVZTGTOSA-N',
    cid: 11333,
    iupac: '(2S,3R,4S,5R,6R)-2-[(2R,3S,4S,5R)-4,5-dihydroxy-2,5-bis(hydroxymethyl)oxolan-3-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'lactulosa-oral',
      producto: 'Lactulose · solución oral',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Solución oral',
      formaFuente: 'SOLUTION',
      liberacion: 'no declarada',
      concentraciones: '10 g de lactulosa por cada 15 mL de solución (con menos de 1,6 g de galactosa, menos de 1,2 g de lactosa y 1,2 g o menos de otros azúcares)',
      excipientes: [ 'Agua (además, la solución lleva pequeñas cantidades de galactosa, lactosa y otros azúcares)' ],
      usos: {
        t: 'Tratamiento del estreñimiento: aumenta el número de deposiciones al día y de días con deposición.',
        ref: { f: 'dailymed-lactulosa', sec: '1 · Indicaciones', cita: 'For the treatment of constipation', codigo: '34067-9' }
      },
      fuente: 'dailymed-lactulosa',
      advertencias: [
        {
          titulo: 'Electrocauterio en el colon',
          texto: 'Puede acumularse hidrógeno en el colon; en una proctoscopia o colonoscopia con electrocauterio existe un riesgo teórico de explosión.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-lactulosa',
            sec: 'Advertencias',
            cita: 'Accumulation of H 2 gas in significant concentration in the presence of an electrical spark may result in an explosive reaction',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Al principio puede causar flatulencia y retortijones, normalmente pasajeros.',
          '34084-4',
          'Initial dosing may produce flatulence and intestinal cramps, which are usually transient'
        ],
        [
          'Las dosis excesivas pueden causar diarrea, con pérdida de líquidos, hipopotasemia e hipernatremia.',
          '34084-4',
          'Excessive dosage can lead to diarrhea with potential complications such as loss of fluids, hypokalemia, and hypernatremia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Solución oral: 10 g de lactulosa por cada 15 mL de solución (con menos de 1,6 g de galactosa, menos de 1,2 g de lactosa y 1,2 g o menos de otros azúcares). Los excipientes no son el principio activo.',
    usos: 'Tratamiento del estreñimiento: aumenta el número de deposiciones al día y de días con deposición.',
    actua: 'No se digiere en el intestino delgado y llega casi intacta al colon; allí las bacterias la transforman en ácido láctico y pequeñas cantidades de ácidos fórmico y acético, lo que eleva la presión osmótica, retiene agua en las heces y las ablanda.',
    recorrido: 'Se absorbe poco: el tubo digestivo humano no tiene ninguna enzima que la descomponga, así que llega al colon prácticamente sin cambios. Casi toda sale con las heces; la excreción por la orina es del 3 % o menos y termina en 24 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      organosGenerales: [ 'esofago', 'estomago' ],
      llega: 'La solución se toma por la boca.',
      ocurre: 'Solución oral: el disacárido ya va disuelto.',
      sigue: 'La solución baja por el esófago y el estómago hasta el intestino.',
      datos: [
        {
          t: 'Solución oral: el disacárido ya va disuelto.',
          ref: {
            f: 'dailymed-lactulosa',
            sec: '11 · Descripción',
            cita: 'Lactulose is a synthetic disaccharide in solution form for oral administration',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      organosGenerales: [],
      llega: 'La lactulosa recorre el estómago y el intestino delgado.',
      ocurre: 'Se absorbe poco: el tubo digestivo humano no tiene ninguna enzima que la descomponga, así que llega al colon prácticamente sin cambios.',
      sigue: 'Llega al colon casi sin cambios.',
      datos: [
        {
          t: 'Se absorbe poco: el tubo digestivo humano no tiene ninguna enzima que la descomponga, así que llega al colon prácticamente sin cambios.',
          ref: {
            f: 'dailymed-lactulosa',
            sec: '12 · Farmacología clínica',
            cita: 'Lactulose is poorly absorbed from the gastrointestinal tract',
            codigo: '34090-1'
          }
        },
        {
          t: 'Ninguna enzima del tubo digestivo humano la hidroliza.',
          ref: {
            f: 'dailymed-lactulosa',
            sec: '12 · Farmacología clínica',
            cita: 'no enzyme capable of hydrolysis of this disaccharide is present in human gastrointestinal tissue',
            codigo: '34090-1'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'intestino-grueso' ],
      llega: 'La lactulosa llega al colon.',
      ocurre: 'Actúa dentro del colon, no en la sangre; como el tránsito por el colon puede ser lento, el efecto puede tardar de 24 a 48 horas.',
      sigue: 'Allí la transforman las bacterias.',
      datos: [
        {
          t: 'Actúa dentro del colon, no en la sangre; como el tránsito por el colon puede ser lento, el efecto puede tardar de 24 a 48 horas.',
          ref: {
            f: 'dailymed-lactulosa',
            sec: '12 · Farmacología clínica',
            cita: '24 to 48 hours may be required to produce the desired bowel movement',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Contenido del colon (efecto osmótico)',
        efecto: 'No se digiere en el intestino delgado y llega casi intacta al colon; allí las bacterias la transforman en ácido láctico y pequeñas cantidades de ácidos fórmico y acético, lo que eleva la presión osmótica, retiene agua en las heces y las ablanda.',
        lugar: [ 'intestino-grueso' ],
        datos: [
          {
            t: 'No se digiere en el intestino delgado y llega casi intacta al colon; allí las bacterias la transforman en ácido láctico y pequeñas cantidades de ácidos fórmico y acético, lo que eleva la presión osmótica, retiene agua en las heces y las ablanda.',
            ref: {
              f: 'dailymed-lactulosa',
              sec: '12 · Farmacología clínica',
              cita: 'which results in an increase in osmotic pressure and slight acidification of the colonic contents',
              codigo: '34090-1'
            }
          },
          {
            t: 'El aumento de agua en las heces las ablanda.',
            ref: {
              f: 'dailymed-lactulosa',
              sec: '12 · Farmacología clínica',
              cita: 'This in turn causes an increase in stool water content and softens the stool',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-grueso' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las bacterias del colon la descomponen sobre todo en ácido láctico y en pequeñas cantidades de ácidos fórmico y acético.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las bacterias del colon la descomponen sobre todo en ácido láctico y en pequeñas cantidades de ácidos fórmico y acético.',
          ref: {
            f: 'dailymed-lactulosa',
            sec: '12 · Farmacología clínica',
            cita: 'In the colon, lactulose is broken down primarily to lactic acid',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido láctico',
          actividad: 'desconocida',
          nota: 'Formado por las bacterias del colon; contribuye al efecto osmótico.',
          ref: { f: 'dailymed-lactulosa', sec: '12 · Farmacología clínica', cita: 'lactulose is broken down primarily to lactic acid', codigo: '34090-1' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Casi toda sale con las heces; la excreción por la orina es del 3 % o menos y termina en 24 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Casi toda sale con las heces; la excreción por la orina es del 3 % o menos y termina en 24 horas.',
          ref: {
            f: 'dailymed-lactulosa',
            sec: '12 · Farmacología clínica',
            cita: 'Urinary excretion has been determined to be 3% or less and is essentially complete within 24 hours',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'orina',
      nombre: 'Excreción en la orina',
      valor: '≤ 3',
      unidad: '% de la dosis',
      analito: 'lactulosa',
      ref: { f: 'dailymed-lactulosa', sec: '12 · Farmacología clínica', cita: 'Urinary excretion has been determined to be 3% or less', codigo: '34090-1' }
    },
    {
      magnitud: 'otra',
      nombre: 'Tiempo hasta el efecto',
      valor: '24-48',
      unidad: 'h',
      analito: 'lactulosa',
      ref: {
        f: 'dailymed-lactulosa',
        sec: '12 · Farmacología clínica',
        cita: '24 to 48 hours may be required to produce the desired bowel movement',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lactulosa', 'd6975cd8-80e0-43e2-809a-175ea7e40715', 'LACTULOSE SOLUTION', 'Lactulose', '5', '2026-01-30', '2026-11-12'),
    rengPubchem(11333, 'lactulose', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
