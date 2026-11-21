import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zolpidem',
    nombre: 'Zolpidem',
    clase: 'Hipnótico modulador de GABA-A',
    sinonimos: [ 'zolpidem' ],
    formula: 'C19H21N3O',
    masaMolar: 307.4,
    smiles: 'CC1=CC=C(C=C1)C2=C(N3C=C(C=CC3=N2)C)CC(=O)N(C)C',
    inchikey: 'ZAFYATHCZYHLPB-UHFFFAOYSA-N',
    cid: 5732,
    iupac: 'N,N-dimethyl-2-[6-methyl-2-(4-methylphenyl)imidazo[1,2-a]pyridin-3-yl]acetamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'zolpidem-oral',
      producto: 'Ambien · comprimido recubierto',
      titular: 'COSETTE PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      sal: { nombre: 'tartrato de zolpidem', ref: { f: 'dailymed-zolpidem', sec: '11 · Descripción', cita: 'zolpidem tartrate' } },
      excipientes: [
        'hypromellose, unspecified',
        'lactose, unspecified form',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'sodium starch glycolate type a corn',
        'fd&c red no. 40',
        'ferric oxide red',
        'polysorbate 80'
      ],
      usos: {
        t: 'Tratamiento a corto plazo del insomnio con dificultad para iniciar el sueño, según la etiqueta.',
        ref: { f: 'dailymed-zolpidem', sec: '1 · Indicaciones', cita: 'short-term treatment of insomnia' }
      },
      fuente: 'dailymed-zolpidem'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de tartrato de zolpidem para administración oral.',
    usos: 'Tratamiento a corto plazo del insomnio con dificultad para iniciar el sueño, según la etiqueta.',
    actua: 'Modula positivamente receptores GABA-A que contienen la subunidad α₁, aumentando la apertura de canales de cloruro y reduciendo la excitabilidad neuronal.',
    recorrido: 'Se absorbe rápidamente en el tubo digestivo. En el estudio de los dos comprimidos de la etiqueta, el pico medio se alcanzó en 1,6 horas. La vía de salida principal de los metabolitos inactivos es renal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Ambien por vía oral.',
      ocurre: 'La presentación AMBIEN usa comprimidos recubiertos de tartrato de zolpidem para administración oral.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación AMBIEN usa comprimidos recubiertos de tartrato de zolpidem para administración oral.',
          ref: { f: 'dailymed-zolpidem', sec: '3 · Forma farmacéutica', cita: 'strength tablets for oral administration' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe rápidamente en el tubo digestivo. En el estudio de los dos comprimidos de la etiqueta, el pico medio se alcanzó en 1,6 horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe rápidamente en el tubo digestivo. En el estudio de los dos comprimidos de la etiqueta, el pico medio se alcanzó en 1,6 horas.',
          ref: { f: 'dailymed-zolpidem', sec: '12 · Farmacología clínica', cita: 'rapid absorption from the gastrointestinal tract' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'La unión a proteínas plasmáticas fue de aproximadamente el 92,5 % en el intervalo estudiado.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas fue de aproximadamente el 92,5 % en el intervalo estudiado.',
          ref: { f: 'dailymed-zolpidem', sec: '12 · Farmacología clínica', cita: 'Total protein binding was found to be 92.5' }
        }
      ],
      accion: {
        diana: 'Sitio benzodiazepínico del receptor GABA-A con subunidad α₁',
        efecto: 'Modula positivamente receptores GABA-A que contienen la subunidad α₁, aumentando la apertura de canales de cloruro y reduciendo la excitabilidad neuronal.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Modula positivamente receptores GABA-A que contienen la subunidad α₁, aumentando la apertura de canales de cloruro y reduciendo la excitabilidad neuronal.',
            ref: { f: 'dailymed-zolpidem', sec: '12 · Farmacología clínica', cita: 'frequency of chloride channel opening' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma en metabolitos inactivos. La etiqueta de esta presentación no detalla su proporción individual.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma en metabolitos inactivos. La etiqueta de esta presentación no detalla su proporción individual.',
          ref: { f: 'dailymed-zolpidem', sec: '12 · Farmacología clínica', cita: 'AMBIEN is converted to inactive metabolites' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La vía de salida principal de los metabolitos inactivos es renal.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La vía de salida principal de los metabolitos inactivos es renal.',
          ref: { f: 'dailymed-zolpidem', sec: '12 · Farmacología clínica', cita: 'eliminated primarily by renal excretion' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio hasta el pico con ambos comprimidos estudiados',
      valor: '1,6',
      unidad: 'h',
      poblacion: '45 voluntarios sanos',
      condiciones: 'Estudio cruzado tras una administración',
      ref: { f: 'dailymed-zolpidem', sec: '12 · Farmacología clínica', cita: 'of 1.6 hours for both' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zolpidem', '747949c5-2c91-4909-8a07-71b6826f8e97', 'AMBIEN (ZOLPIDEM TARTRATE) TABLET, FILM COATED', 'Ambien', '1', '2025-02-10', '2026-11-10'),
    rengPubchem(5732, 'zolpidem', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
