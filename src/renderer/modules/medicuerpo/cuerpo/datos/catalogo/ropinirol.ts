import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ropinirol',
    nombre: 'Ropinirol',
    clase: 'Agonista dopaminérgico no ergótico',
    sinonimos: [ 'ropinirole', 'Requip' ],
    formula: 'C16H24N2O',
    masaMolar: 260.37,
    smiles: 'CCCN(CCC)CCC1=C2CC(=O)NC2=CC=C1',
    inchikey: 'UHSKFQJFRQCDBE-UHFFFAOYSA-N',
    cid: 5095,
    iupac: '4-[2-(dipropylamino)ethyl]-1,3-dihydroindol-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'ropinirol-oral',
      producto: 'ropinirole hydrochloride · comprimido recubierto con película',
      titular: 'SOLCO HEALTHCARE US, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.25 mg, 0.5 mg, 1 mg, 2 mg, 3 mg, 4 mg o 5 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de ropinirol',
        ref: { f: 'dailymed-ropinirol', sec: '11 · Descripción', cita: 'ropinirole hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'croscarmellose sodium',
        'hydroxypropyl cellulose (1600000 wamw)',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'soybean lecithin',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Enfermedad de Parkinson y síndrome de piernas inquietas primario moderado o grave.',
        ref: {
          f: 'dailymed-ropinirol',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of Parkinson’s disease (PD) and moderate-to-severe primary Restless Legs Syndrome (RLS)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ropinirol',
      advertencias: [
        {
          titulo: 'Dormirse en actividades diarias',
          texto: 'Algunas personas se han dormido mientras hacían actividades cotidianas, incluso conduciendo.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-ropinirol',
            sec: '5 · Advertencias y precauciones',
            cita: 'have reported falling asleep while engaged in activities of daily living',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el Parkinson inicial (≥ 5 % más que con placebo): náuseas, somnolencia, mareo, síncope, debilidad, infección vírica, edema en piernas, vómitos y dispepsia.',
          '34084-4',
          'Early PD: Nausea, somnolence, dizziness, syncope'
        ],
        [
          'En las piernas inquietas: náuseas, vómitos, somnolencia, mareo y debilidad.',
          '34084-4',
          'RLS: Nausea, vomiting, somnolence, dizziness, and asthenic condition'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 0.25 mg, 0.5 mg, 1 mg, 2 mg, 3 mg, 4 mg o 5 mg por comprimido, según la etiqueta; el activo va como clorhidrato de ropinirol. Los excipientes no son el principio activo.',
    usos: 'Enfermedad de Parkinson y síndrome de piernas inquietas primario moderado o grave.',
    actua: 'Es un agonista dopaminérgico no ergótico; en el Parkinson se cree que actúa estimulando los receptores de dopamina D2 del caudado-putamen del cerebro.',
    recorrido: 'Se absorbe rápido y el pico llega en 1-2 horas; su biodisponibilidad absoluta es del 45 % al 55 %, lo que indica un primer paso de alrededor del 50 %. Menos del 10 % sale sin cambios por la orina; en la orina predominan el N-despropil (40 %), el ácido carboxílico (10 %) y el glucurónido del hidroxi (10 %). Su semivida ronda las 6 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-ropinirol', sec: '3 · Formas y concentraciones', cita: 'color coated, round, biconvex tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y el pico llega en 1-2 horas; su biodisponibilidad absoluta es del 45 % al 55 %, lo que indica un primer paso de alrededor del 50 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y el pico llega en 1-2 horas; su biodisponibilidad absoluta es del 45 % al 55 %, lo que indica un primer paso de alrededor del 50 %.',
          ref: {
            f: 'dailymed-ropinirol',
            sec: '12.3 · Farmacocinética',
            cita: 'Ropinirole is rapidly absorbed after oral administration, reaching peak concentration in approximately 1 to 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta del 45 % al 55 %.',
          ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'the absolute bioavailability was 45% to 55%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte ampliamente (7,5 L/kg) y hasta el 40 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente (7,5 L/kg) y hasta el 40 % se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-ropinirol',
            sec: '12.3 · Farmacocinética',
            cita: 'Ropinirole is widely distributed throughout the body, with an apparent volume of distribution of 7.5 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de dopamina D2',
        efecto: 'Es un agonista dopaminérgico no ergótico; en el Parkinson se cree que actúa estimulando los receptores de dopamina D2 del caudado-putamen del cerebro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un agonista dopaminérgico no ergótico; en el Parkinson se cree que actúa estimulando los receptores de dopamina D2 del caudado-putamen del cerebro.',
            ref: {
              f: 'dailymed-ropinirol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'it is thought to be related to its ability to stimulate dopamine D 2 receptors within the caudate-putamen in the brain',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en el hígado, sobre todo por CYP1A2, por N-despropilación e hidroxilación, a metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en el hígado, sobre todo por CYP1A2, por N-despropilación e hidroxilación, a metabolitos inactivos.',
          ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'Ropinirole is extensively metabolized by the liver', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-despropil ropinirol',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-ropinirol',
            sec: '12.3 · Farmacocinética',
            cita: 'to form the inactive N-despropyl metabolite and hydroxy metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Menos del 10 % sale sin cambios por la orina; en la orina predominan el N-despropil (40 %), el ácido carboxílico (10 %) y el glucurónido del hidroxi (10 %). Su semivida ronda las 6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Menos del 10 % sale sin cambios por la orina; en la orina predominan el N-despropil (40 %), el ácido carboxílico (10 %) y el glucurónido del hidroxi (10 %). Su semivida ronda las 6 horas.',
          ref: {
            f: 'dailymed-ropinirol',
            sec: '12.3 · Farmacocinética',
            cita: 'N-despropyl ropinirole is the predominant metabolite found in urine (40%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-2',
      unidad: 'h',
      analito: 'ropinirol',
      ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'reaching peak concentration in approximately 1 to 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '45-55',
      unidad: '%',
      analito: 'ropinirol',
      ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'the absolute bioavailability was 45% to 55%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '7,5',
      unidad: 'L/kg',
      analito: 'ropinirol',
      ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'with an apparent volume of distribution of 7.5 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '≤ 40',
      unidad: '%',
      analito: 'ropinirol',
      ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'It is up to 40% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'ropinirol',
      ref: { f: 'dailymed-ropinirol', sec: '12.3 · Farmacocinética', cita: 'its elimination half-life is approximately 6 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ropinirol', '7734ef0b-584f-42dd-a8b5-adbdf4e4df93', 'ROPINIROLE HYDROCHLORIDE TABLET, FILM COATED', 'ropinirole hydrochloride', '17', '2025-09-08', '2026-11-12'),
    rengPubchem(5095, 'ropinirole', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
