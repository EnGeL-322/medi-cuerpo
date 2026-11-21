import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ziprasidona',
    nombre: 'Ziprasidona',
    clase: 'Antipsicótico atípico',
    sinonimos: [ 'ziprasidone', 'Geodon' ],
    formula: 'C21H21ClN4OS',
    masaMolar: 412.9,
    smiles: 'C1CN(CCN1CCC2=C(C=C3C(=C2)CC(=O)N3)Cl)C4=NSC5=CC=CC=C54',
    inchikey: 'MVWVFYHBGMAFLY-UHFFFAOYSA-N',
    cid: 60854,
    iupac: '5-[2-[4-(1,2-benzothiazol-3-yl)piperazin-1-yl]ethyl]-6-chloro-1,3-dihydroindol-2-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'ziprasidona-oral',
      producto: 'Geodon · cápsula',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '20 mg, 40 mg, 60 mg o 80 mg por cápsula, según la etiqueta',
      excipientes: [ 'lactose, unspecified form', 'magnesium stearate', 'starch, corn' ],
      usos: {
        t: 'Esquizofrenia, episodios maníacos o mixtos del trastorno bipolar y mantenimiento del trastorno bipolar junto con litio o valproato.',
        ref: { f: 'dailymed-ziprasidona', sec: '1 · Indicaciones', cita: 'GEODON is indicated for the treatment of schizophrenia', codigo: '34067-9' }
      },
      fuente: 'dailymed-ziprasidona',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Debe evitarse con otros fármacos que alargan el intervalo QTc.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-ziprasidona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Ziprasidone use should be avoided in combination with other drugs that are known to prolong the QTc interval',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mortalidad en personas mayores con demencia',
          texto: 'Las personas mayores con psicosis por demencia tratadas con antipsicóticos tienen un mayor riesgo de muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-ziprasidona',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'En la esquizofrenia: somnolencia e infección respiratoria (≥ 5 % y el doble que con placebo).',
          '34084-4',
          'Somnolence, respiratory tract infection'
        ],
        [
          'En la manía bipolar: somnolencia, síntomas extrapiramidales, mareo, acatisia, visión anormal, debilidad y vómitos.',
          '34084-4',
          'Somnolence, extrapyramidal symptoms, dizziness, akathisia, abnormal vision, asthenia, vomiting'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 20 mg, 40 mg, 60 mg o 80 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia, episodios maníacos o mixtos del trastorno bipolar y mantenimiento del trastorno bipolar junto con litio o valproato.',
    actua: 'Su acción podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2.',
    recorrido: 'Se absorbe bien y el pico llega en 6 a 8 horas; con comida, la biodisponibilidad absoluta de 20 mg ronda el 60 % y la absorción puede duplicarse. Alrededor del 20 % de la dosis sale por la orina y el 66 % por las heces; casi nada sin cambios. Su semivida terminal media ronda las 7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula para tomar por boca.',
          ref: {
            f: 'dailymed-ziprasidona',
            sec: '3 · Formas y concentraciones',
            cita: 'GEODON capsules are supplied for oral administration',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien y el pico llega en 6 a 8 horas; con comida, la biodisponibilidad absoluta de 20 mg ronda el 60 % y la absorción puede duplicarse.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien y el pico llega en 6 a 8 horas; con comida, la biodisponibilidad absoluta de 20 mg ronda el 60 % y la absorción puede duplicarse.',
          ref: { f: 'dailymed-ziprasidona', sec: '12.3 · Farmacocinética', cita: 'reaching peak plasma concentrations in 6 to 8 hours', codigo: '43682-4' }
        },
        {
          t: 'Biodisponibilidad absoluta de unos 60 % con comida.',
          ref: {
            f: 'dailymed-ziprasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of a 20 mg dose under fed conditions is approximately 60%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Más del 99 % se une a proteínas del plasma (albúmina y alfa-1-glucoproteína ácida); volumen aparente de 1,5 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99 % se une a proteínas del plasma (albúmina y alfa-1-glucoproteína ácida); volumen aparente de 1,5 L/kg.',
          ref: { f: 'dailymed-ziprasidona', sec: '12.3 · Farmacocinética', cita: 'It is greater than 99% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores D2 y 5-HT2',
        efecto: 'Su acción podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su acción podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2.',
            ref: {
              f: 'dailymed-ziprasidona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'could be mediated through a combination of dopamine type 2 (D 2 ) and serotonin type 2 (5HT 2 ) antagonism',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente: dos tercios por reducción y menos de un tercio por oxidación (sobre todo CYP3A4), con cuatro metabolitos circulantes principales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente: dos tercios por reducción y menos de un tercio por oxidación (sobre todo CYP3A4), con cuatro metabolitos circulantes principales.',
          ref: {
            f: 'dailymed-ziprasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'Ziprasidone is primarily cleared via three metabolic routes to yield four major circulating metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Sulfóxido y sulfona de BITP, sulfóxido de ziprasidona y S-metildihidroziprasidona',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-ziprasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'benzisothiazole (BITP) sulphoxide, BITP-sulphone, ziprasidone sulphoxide, and S-methyldihydroziprasidone',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 20 % de la dosis sale por la orina y el 66 % por las heces; casi nada sin cambios. Su semivida terminal media ronda las 7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 20 % de la dosis sale por la orina y el 66 % por las heces; casi nada sin cambios. Su semivida terminal media ronda las 7 horas.',
          ref: {
            f: 'dailymed-ziprasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 20% of the dose is excreted in the urine, with approximately 66% being eliminated in the feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '6-8',
      unidad: 'h',
      analito: 'ziprasidona',
      ref: { f: 'dailymed-ziprasidona', sec: '12.3 · Farmacocinética', cita: 'reaching peak plasma concentrations in 6 to 8 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'ziprasidona',
      condiciones: 'dosis de 20 mg con comida',
      ref: {
        f: 'dailymed-ziprasidona',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of a 20 mg dose under fed conditions is approximately 60%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'ziprasidona',
      ref: { f: 'dailymed-ziprasidona', sec: '12.3 · Farmacocinética', cita: 'It is greater than 99% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '1,5',
      unidad: 'L/kg',
      analito: 'ziprasidona',
      ref: {
        f: 'dailymed-ziprasidona',
        sec: '12.3 · Farmacocinética',
        cita: 'Ziprasidone has a mean apparent volume of distribution of 1.5 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '7 (aprox.)',
      unidad: 'h',
      analito: 'ziprasidona',
      ref: { f: 'dailymed-ziprasidona', sec: '12.3 · Farmacocinética', cita: 'with a mean terminal half-life of about 7 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ziprasidona', 'a2b4cc65-6a6d-49c4-adfc-a4458562a167', 'GEODON (ZIPRASIDONE) CAPSULE GEODON (ZIPRASIDONE MESYLATE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION', 'Geodon', '4', '2026-09-18', '2026-11-12'),
    rengPubchem(60854, 'ziprasidone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
