import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'etambutol',
    nombre: 'Etambutol',
    clase: 'Antituberculoso',
    sinonimos: [ 'ethambutol', 'Myambutol' ],
    formula: 'C10H24N2O2',
    masaMolar: 204.31,
    smiles: 'CC[C@@H](CO)NCCN[C@@H](CC)CO',
    inchikey: 'AEUTYOVWOVBAKS-UWVGGRQHSA-N',
    cid: 14052,
    iupac: '(2S)-2-[2-[[(2S)-1-hydroxybutan-2-yl]amino]ethylamino]butan-1-ol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'etambutol-oral',
      producto: 'Ethambutol Hydrochloride · comprimido',
      titular: 'LUPIN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 400 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de etambutol',
        ref: { f: 'dailymed-etambutol', sec: '11 · Descripción', cita: 'ETHAMBUTOL HYDROCHLORIDE', codigo: '34089-3' }
      },
      excipientes: [
        'ethylcelluloses',
        'hypromelloses',
        'magnesium stearate',
        'polyethylene glycol 4000',
        'povidone',
        'propylene glycol',
        'silicon dioxide',
        'starch, corn',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tuberculosis pulmonar, siempre junto con al menos otro antituberculoso.',
        ref: {
          f: 'dailymed-etambutol',
          sec: '1 · Indicaciones',
          cita: 'Ethambutol hydrochloride is indicated for the treatment of pulmonary tuberculosis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-etambutol',
      advertencias: [
        {
          titulo: 'Neuritis óptica',
          texto: 'Puede reducir la agudeza visual; suele revertir si se suspende pronto, aunque se ha descrito ceguera irreversible.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-etambutol',
            sec: 'Advertencias',
            cita: 'Ethambutol hydrochloride may produce decreases in visual acuity which appear to be due to optic neuritis',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Disminución de la agudeza visual, incluida ceguera irreversible, por neuritis óptica.',
          '34084-4',
          'may produce decreases in visual acuity, including irreversible blindness, which appear to be due to optic neuritis'
        ],
        [
          'La neuropatía óptica puede manifestarse con menos visión, escotomas, ceguera para los colores o defectos del campo visual.',
          '34084-4',
          'decreased visual acuity, scotoma, color blindness, and/or visual defect'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg o 400 mg por comprimido, según la etiqueta; el activo va como clorhidrato de etambutol. Los excipientes no son el principio activo.',
    usos: 'Tuberculosis pulmonar, siempre junto con al menos otro antituberculoso.',
    actua: 'Parece inhibir la síntesis de uno o más metabolitos de la micobacteria, lo que altera su metabolismo, frena su multiplicación y causa su muerte; es activo frente a Mycobacterium tuberculosis.',
    recorrido: 'Tras una dosis de 25 mg/kg, alcanza un pico de 2 a 5 mcg/mL en el suero a las 2-4 horas. En 24 horas, alrededor del 50 % sale sin cambios por la orina y otro 8-15 % como metabolitos; del 20 % al 22 % sale sin cambios por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca.',
          ref: { f: 'dailymed-etambutol', sec: '11 · Descripción', cita: 'Ethambutol hydrochloride is an oral chemotherapeutic agent', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras una dosis de 25 mg/kg, alcanza un pico de 2 a 5 mcg/mL en el suero a las 2-4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis de 25 mg/kg, alcanza un pico de 2 a 5 mcg/mL en el suero a las 2-4 horas.',
          ref: {
            f: 'dailymed-etambutol',
            sec: '12 · Farmacología clínica',
            cita: 'attains a peak of 2 to 5 mcg/mL in serum 2 to 4 hours after administration',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'pulmones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'En los glóbulos rojos alcanza picos de alrededor del doble que en el plasma y mantiene esa proporción durante 24 horas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En los glóbulos rojos alcanza picos de alrededor del doble que en el plasma y mantiene esa proporción durante 24 horas.',
          ref: {
            f: 'dailymed-etambutol',
            sec: '12 · Farmacología clínica',
            cita: 'The intercellular concentrations of erythrocytes reach peak values approximately twice those of plasma',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Micobacterias en crecimiento activo',
        efecto: 'Parece inhibir la síntesis de uno o más metabolitos de la micobacteria, lo que altera su metabolismo, frena su multiplicación y causa su muerte; es activo frente a Mycobacterium tuberculosis.',
        lugar: [ 'pulmones', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Parece inhibir la síntesis de uno o más metabolitos de la micobacteria, lo que altera su metabolismo, frena su multiplicación y causa su muerte; es activo frente a Mycobacterium tuberculosis.',
            ref: {
              f: 'dailymed-etambutol',
              sec: '12 · Farmacología clínica',
              cita: 'Ethambutol appears to inhibit the synthesis of one or more metabolites, thus causing impairment of cell metabolism, arrest of multiplication, and cell death',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una parte se metaboliza: la vía principal oxida el alcohol a un aldehído intermedio y después a un ácido dicarboxílico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una parte se metaboliza: la vía principal oxida el alcohol a un aldehído intermedio y después a un ácido dicarboxílico.',
          ref: {
            f: 'dailymed-etambutol',
            sec: '12 · Farmacología clínica',
            cita: 'The main path of metabolism appears to be an initial oxidation of the alcohol to an aldehydic intermediate',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido dicarboxílico',
          actividad: 'desconocida',
          ref: { f: 'dailymed-etambutol', sec: '12 · Farmacología clínica', cita: 'followed by conversion to a dicarboxylic acid', codigo: '34090-1' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 24 horas, alrededor del 50 % sale sin cambios por la orina y otro 8-15 % como metabolitos; del 20 % al 22 % sale sin cambios por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 24 horas, alrededor del 50 % sale sin cambios por la orina y otro 8-15 % como metabolitos; del 20 % al 22 % sale sin cambios por las heces.',
          ref: {
            f: 'dailymed-etambutol',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 50 percent of the initial dose is excreted unchanged in the urine',
            codigo: '34090-1'
          }
        },
        {
          t: 'Del 20 % al 22 % sale sin cambios por las heces.',
          ref: {
            f: 'dailymed-etambutol',
            sec: '12 · Farmacología clínica',
            cita: 'From 20 to 22 percent of the initial dose is excreted in the feces as unchanged drug',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Pico sérico',
      valor: '2-5',
      unidad: 'mcg/mL',
      analito: 'etambutol',
      condiciones: 'dosis única de 25 mg/kg',
      ref: { f: 'dailymed-etambutol', sec: '12 · Farmacología clínica', cita: 'attains a peak of 2 to 5 mcg/mL in serum', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '2-4',
      unidad: 'h',
      analito: 'etambutol',
      condiciones: 'dosis única de 25 mg/kg',
      ref: { f: 'dailymed-etambutol', sec: '12 · Farmacología clínica', cita: 'in serum 2 to 4 hours after administration', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina en 24 h',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'etambutol',
      ref: {
        f: 'dailymed-etambutol',
        sec: '12 · Farmacología clínica',
        cita: 'approximately 50 percent of the initial dose is excreted unchanged in the urine',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado sin cambios en las heces',
      valor: '20-22',
      unidad: '% de la dosis',
      analito: 'etambutol',
      ref: {
        f: 'dailymed-etambutol',
        sec: '12 · Farmacología clínica',
        cita: 'From 20 to 22 percent of the initial dose is excreted in the feces as unchanged drug',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-etambutol', 'c732b415-e1f9-478f-896d-1dc8b6362da4', 'ETHAMBUTOL HYDROCHLORIDE TABLET', 'Ethambutol Hydrochloride', '11', '2025-11-17', '2026-11-12'),
    rengPubchem(14052, 'ethambutol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
