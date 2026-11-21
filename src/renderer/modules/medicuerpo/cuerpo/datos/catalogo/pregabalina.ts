import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pregabalina',
    nombre: 'Pregabalina',
    clase: 'Gabapentinoide',
    sinonimos: [ 'pregabalin' ],
    formula: 'C8H17NO2',
    masaMolar: 159.23,
    smiles: 'CC(C)C[C@@H](CC(=O)O)CN',
    inchikey: 'AYXYPKUFHZROOJ-ZETCQYMHSA-N',
    cid: 5486971,
    iupac: '(3S)-3-(aminomethyl)-5-methylhexanoic acid',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'pregabalina-oral',
      producto: 'Lyrica · cápsula',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'talc',
        'gelatin, unspecified',
        'titanium dioxide',
        'sodium lauryl sulfate',
        'silicon dioxide',
        'shellac',
        'ferrosoferric oxide',
        'propylene glycol',
        'potassium hydroxide'
      ],
      usos: {
        t: 'La etiqueta contempla ciertos dolores neuropáticos, fibromialgia y tratamiento complementario para crisis de inicio parcial.',
        ref: { f: 'dailymed-pregabalina', sec: '1 · Indicaciones', cita: 'LYRICA is indicated for' }
      },
      fuente: 'dailymed-pregabalina'
    }
  ],
  resumen: {
    contiene: 'Cápsula de pregabalina para administración oral.',
    usos: 'La etiqueta contempla ciertos dolores neuropáticos, fibromialgia y tratamiento complementario para crisis de inicio parcial.',
    actua: 'Se une a la subunidad auxiliar α₂δ de canales de calcio dependientes del voltaje en el sistema nervioso central. Su mecanismo clínico no se conoce por completo.',
    recorrido: 'En ayunas, el pico plasmático se alcanza en aproximadamente 1,5 horas. Con alimentos, el pico llega más tarde sin un cambio clínicamente relevante de la absorción total. En el estudio radiomarcado, se recuperó aproximadamente el 90 % de la dosis en orina como pregabalina sin modificar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Lyrica por vía oral.',
      ocurre: 'El recorrido corresponde a las cápsulas orales, diferenciadas de la solución de LYRICA.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'El recorrido corresponde a las cápsulas orales, diferenciadas de la solución de LYRICA.',
          ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'Following oral administration of LYRICA capsules' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En ayunas, el pico plasmático se alcanza en aproximadamente 1,5 horas. Con alimentos, el pico llega más tarde sin un cambio clínicamente relevante de la absorción total.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En ayunas, el pico plasmático se alcanza en aproximadamente 1,5 horas. Con alimentos, el pico llega más tarde sin un cambio clínicamente relevante de la absorción total.',
          ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'peak plasma concentrations occur within 1.5 hours' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'No se une a proteínas plasmáticas. El volumen aparente de distribución tras tomarla por vía oral es de unos 0,5 L/kg.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'No se une a proteínas plasmáticas. El volumen aparente de distribución tras tomarla por vía oral es de unos 0,5 L/kg.',
          ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'Pregabalin does not bind to plasma proteins' }
        }
      ],
      accion: {
        diana: 'Subunidad α₂δ de canales de calcio',
        efecto: 'Se une a la subunidad auxiliar α₂δ de canales de calcio dependientes del voltaje en el sistema nervioso central. Su mecanismo clínico no se conoce por completo.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se une a la subunidad auxiliar α₂δ de canales de calcio dependientes del voltaje en el sistema nervioso central. Su mecanismo clínico no se conoce por completo.',
            ref: {
              f: 'dailymed-pregabalina',
              sec: '12 · Farmacología clínica',
              cita: 'an auxiliary subunit of voltage-gated calcium channels'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'En humanos su metabolismo es mínimo. El derivado N-metilado representa cerca del 0,9 % de la dosis en el estudio radiomarcado.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'En humanos su metabolismo es mínimo. El derivado N-metilado representa cerca del 0,9 % de la dosis en el estudio radiomarcado.',
          ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'undergoes negligible metabolism in humans' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Derivado N-metilado de pregabalina',
          actividad: 'desconocida',
          ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'The N-methylated derivative of pregabalin' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio radiomarcado, se recuperó aproximadamente el 90 % de la dosis en orina como pregabalina sin modificar.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio radiomarcado, se recuperó aproximadamente el 90 % de la dosis en orina como pregabalina sin modificar.',
          ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'recovered in the urine as unchanged pregabalin' },
          condiciones: 'Estudio con pregabalina radiomarcada'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida media de eliminación',
      valor: '6,3',
      unidad: 'h',
      poblacion: 'Personas con función renal normal',
      ref: { f: 'dailymed-pregabalina', sec: '12 · Farmacología clínica', cita: 'mean elimination half-life of 6.3 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pregabalina', 'd4734e7d-5079-455e-8ff5-8f4539c998a9', 'LYRICA (PREGABALIN) CAPSULE LYRICA (PREGABALIN) SOLUTION', 'Lyrica', '18', '2025-09-29', '2026-11-10'),
    rengPubchem(5486971, 'pregabalin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
