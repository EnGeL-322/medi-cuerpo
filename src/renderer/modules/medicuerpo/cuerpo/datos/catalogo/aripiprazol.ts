import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'aripiprazol',
    nombre: 'Aripiprazol',
    clase: 'Antipsicótico atípico',
    sinonimos: [ 'aripiprazole' ],
    formula: 'C23H27Cl2N3O2',
    masaMolar: 448.4,
    smiles: 'C1CC(=O)NC2=C1C=CC(=C2)OCCCCN3CCN(CC3)C4=C(C(=CC=C4)Cl)Cl',
    inchikey: 'CEUORZQYGODEFX-UHFFFAOYSA-N',
    cid: 60795,
    iupac: '7-[4-[4-(2,3-dichlorophenyl)piperazin-1-yl]butoxy]-3,4-dihydro-1H-quinolin-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'aripiprazol-oral',
      producto: 'ABILIFY · comprimido',
      titular: 'OTSUKA AMERICA PHARMACEUTICAL, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2 mg',
      excipientes: [
        'starch, corn',
        'hydroxypropyl cellulose (1600000 wamw)',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'ferric oxide yellow',
        'fd&c blue no. 2 aluminum lake'
      ],
      usos: {
        t: 'Entre las indicaciones figuran esquizofrenia y determinados episodios del trastorno bipolar I.',
        ref: { f: 'dailymed-aripiprazol', sec: '1 · Indicaciones', cita: 'associated with Bipolar I Disorder' }
      },
      fuente: 'dailymed-aripiprazol'
    }
  ],
  resumen: {
    contiene: 'Comprimido de aripiprazol para administración oral.',
    usos: 'Entre las indicaciones figuran esquizofrenia y determinados episodios del trastorno bipolar I.',
    actua: 'Su acción se podría deber al agonismo parcial en receptores D₂ y 5-HT₁A y al antagonismo de 5-HT₂A.',
    recorrido: 'El comprimido alcanza el pico plasmático entre 3 y 5 horas y tiene una biodisponibilidad oral absoluta del 87 %. En un estudio oral radiomarcado, se recuperó alrededor del 25 % de la radiactividad en orina y el 55 % en heces. Menos del 1 % salió por orina como aripiprazol sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere ABILIFY por vía oral.',
      ocurre: 'El recorrido corresponde al comprimido oral de ABILIFY. La forma farmacéutica se declara en la etiqueta.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'El recorrido corresponde al comprimido oral de ABILIFY. La forma farmacéutica se declara en la etiqueta.',
          ref: { f: 'dailymed-aripiprazol', sec: '11 · Descripción', cita: 'ABILIFY Tablets are available' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'El comprimido alcanza el pico plasmático entre 3 y 5 horas y tiene una biodisponibilidad oral absoluta del 87 %.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'El comprimido alcanza el pico plasmático entre 3 y 5 horas y tiene una biodisponibilidad oral absoluta del 87 %.',
          ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'bioavailability of the tablet formulation is 87%' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El aripiprazol y su metabolito principal se unen en más del 99 % a proteínas séricas, principalmente albúmina, a concentraciones terapéuticas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El aripiprazol y su metabolito principal se unen en más del 99 % a proteínas séricas, principalmente albúmina, a concentraciones terapéuticas.',
          ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'greater than 99% bound to serum proteins' }
        }
      ],
      accion: {
        diana: 'Receptores D₂, 5-HT₁A y 5-HT₂A (mecanismo propuesto)',
        efecto: 'Su acción se podría deber al agonismo parcial en receptores D₂ y 5-HT₁A y al antagonismo de 5-HT₂A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su acción se podría deber al agonismo parcial en receptores D₂ y 5-HT₁A y al antagonismo de 5-HT₂A.',
            ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'partial agonist activity at D' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'CYP3A4 y CYP2D6 participan en la transformación. El deshidroaripiprazol conserva actividad sobre los receptores D₂.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'CYP3A4 y CYP2D6 participan en la transformación. El deshidroaripiprazol conserva actividad sobre los receptores D₂.',
          ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'CYP3A4 and CYP2D6 enzymes are responsible' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Deshidroaripiprazol',
          actividad: 'activo',
          ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'dehydro-aripiprazole, the active metabolite' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado, se recuperó alrededor del 25 % de la radiactividad en orina y el 55 % en heces. Menos del 1 % salió por orina como aripiprazol sin cambios.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado, se recuperó alrededor del 25 % de la radiactividad en orina y el 55 % en heces. Menos del 1 % salió por orina como aripiprazol sin cambios.',
          ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'radioactivity was recovered in the urine and feces' },
          condiciones: 'Estudio con una administración oral de aripiprazol radiomarcado'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta del comprimido',
      valor: '87',
      unidad: '%',
      ref: { f: 'dailymed-aripiprazol', sec: '12 · Farmacología clínica', cita: 'bioavailability of the tablet formulation is 87%' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-aripiprazol', 'c040bd1d-45b7-49f2-93ea-aed7220b30ac', 'ABILIFY (ARIPIPRAZOLE) TABLET', 'ABILIFY', '73', '2025-02-03', '2026-11-10'),
    rengPubchem(60795, 'aripiprazole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
