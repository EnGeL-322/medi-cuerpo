import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'valproato',
    nombre: 'Ácido valproico (divalproato)',
    clase: 'Antiepiléptico y estabilizador del ánimo',
    sinonimos: [ 'valproate', 'valproic acid', 'divalproex', 'Depakote' ],
    formula: 'C8H16O2',
    masaMolar: 144.21,
    smiles: 'CCCC(CCC)C(=O)O',
    inchikey: 'NIJJYAXOARWZEE-UHFFFAOYSA-N',
    cid: 3121,
    iupac: '2-propylpentanoic acid',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'valproato-oral',
      producto: 'Depakote · comprimido de liberación retardada',
      titular: 'ABBVIE INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación retardada',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '125 mg, 250 mg o 500 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Divalproato sódico', ref: { f: 'dailymed-valproato', sec: '11 · Descripción', cita: 'Divalproex sodium', codigo: '34089-3' } },
      excipientes: [
        'diacetylated monoglycerides',
        'povidone, unspecified',
        'starch, corn',
        'silicon dioxide',
        'talc',
        'titanium dioxide',
        'vanillin',
        'fd&c blue no. 1',
        'fd&c red no. 40'
      ],
      usos: {
        t: 'Episodios maníacos del trastorno bipolar, varios tipos de crisis epilépticas (sola o con otros antiepilépticos) y prevención de la migraña.',
        ref: { f: 'dailymed-valproato', sec: '1 · Indicaciones', cita: 'Treatment of manic episodes associated with bipolar disorder', codigo: '34067-9' }
      },
      fuente: 'dailymed-valproato',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se ha producido insuficiencia hepática mortal, sobre todo en los primeros seis meses de tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-valproato',
            sec: 'Advertencia destacada',
            cita: 'Hepatic failure resulting in fatalities has occurred in patients receiving valproate and its derivatives',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Pancreatitis',
          texto: 'Se han descrito pancreatitis potencialmente mortales en niños y adultos.',
          organos: [ 'pancreas' ],
          ref: {
            f: 'dailymed-valproato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of life-threatening pancreatitis have been reported in both children and adults receiving valproate',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Daño fetal',
          texto: 'Puede causar daño al feto si se toma durante el embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-valproato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Valproate can cause fetal harm when administered to a pregnant woman',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 15 % en alguna indicación): dolor abdominal, caída del pelo, debilidad, diarrea, visión doble, mareo, dolor de cabeza, infección, insomnio, náuseas, somnolencia, trombocitopenia, temblor y vómitos.',
          '34084-4',
          'are abdominal pain, alopecia, asthenia, diarrhea, diplopia, dizziness, headache'
        ],
        [ 'Somnolencia, trombocitopenia, temblor y vómitos entre las más frecuentes.', '34084-4', 'somnolence, thrombocytopenia, tremor, vomiting' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación retardada: 125 mg, 250 mg o 500 mg por comprimido, según la etiqueta; el activo va como divalproato sódico. Los excipientes no son el principio activo.',
    usos: 'Episodios maníacos del trastorno bipolar, varios tipos de crisis epilépticas (sola o con otros antiepilépticos) y prevención de la migraña.',
    actua: 'En el tubo digestivo el divalproato se separa en ion valproato. Su mecanismo no está establecido; en la epilepsia se ha propuesto que aumenta la concentración cerebral de GABA.',
    recorrido: 'Distintas formas de valproato aportan la misma cantidad total de ion valproato, aunque la velocidad de absorción cambia con la formulación y la comida: con alimentos, el tiempo hasta el pico del comprimido pasó de 4 a 8 horas en estudios de dosis única. Menos del 3 % de la dosis sale sin cambios por la orina. Su semivida terminal en monoterapia fue de 9 a 16 horas con dosis orales de 250 a 1000 mg.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación retardada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación retardada: la cubierta resiste el estómago y el divalproato se libera después y se separa en ion valproato.',
      sigue: 'La cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
      datos: [
        {
          t: 'Comprimido de liberación retardada: la cubierta resiste el estómago y el divalproato se libera después y se separa en ion valproato.',
          ref: { f: 'dailymed-valproato', sec: '3 · Formas y concentraciones', cita: 'divalproex sodium delayed-release tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Distintas formas de valproato aportan la misma cantidad total de ion valproato, aunque la velocidad de absorción cambia con la formulación y la comida: con alimentos, el tiempo hasta el pico del comprimido pasó de 4 a 8 horas en estudios de dosis única.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Distintas formas de valproato aportan la misma cantidad total de ion valproato, aunque la velocidad de absorción cambia con la formulación y la comida: con alimentos, el tiempo hasta el pico del comprimido pasó de 4 a 8 horas en estudios de dosis única.',
          ref: { f: 'dailymed-valproato', sec: '12.3 · Farmacocinética', cita: 'increase in T max from 4 to 8 hours', codigo: '43682-4' }
        },
        {
          t: 'Dosis orales equivalentes de los productos de divalproato y de las cápsulas de ácido valproico aportan cantidades equivalentes de ion valproato.',
          ref: {
            f: 'dailymed-valproato',
            sec: '12.3 · Farmacocinética',
            cita: 'deliver equivalent quantities of valproate ion systemically',
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
      ocurre: 'Su unión a proteínas del plasma depende de la concentración: la fracción libre sube de alrededor del 10 % a 40 mcg/mL al 18,5 % a 130 mcg/mL.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Su unión a proteínas del plasma depende de la concentración: la fracción libre sube de alrededor del 10 % a 40 mcg/mL al 18,5 % a 130 mcg/mL.',
          ref: {
            f: 'dailymed-valproato',
            sec: '12.3 · Farmacocinética',
            cita: 'the free fraction increases from approximately 10% at 40 mcg/mL to 18.5% at 130 mcg/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'GABA cerebral (mecanismo no establecido)',
        efecto: 'En el tubo digestivo el divalproato se separa en ion valproato. Su mecanismo no está establecido; en la epilepsia se ha propuesto que aumenta la concentración cerebral de GABA.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'En el tubo digestivo el divalproato se separa en ion valproato. Su mecanismo no está establecido; en la epilepsia se ha propuesto que aumenta la concentración cerebral de GABA.',
            ref: {
              f: 'dailymed-valproato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It has been suggested that its activity in epilepsy is related to increased brain concentrations of gamma-aminobutyric acid (GABA)',
              codigo: '43679-0'
            }
          },
          {
            t: 'El divalproato sódico se disocia en ion valproato en el tubo digestivo.',
            ref: {
              f: 'dailymed-valproato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Divalproex sodium dissociates to the valproate ion in the gastrointestinal tract',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza casi por completo en el hígado: entre el 30 % y el 50 % de la dosis aparece en la orina como glucurónido y la beta-oxidación mitocondrial suele dar cuenta de más del 40 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza casi por completo en el hígado: entre el 30 % y el 50 % de la dosis aparece en la orina como glucurónido y la beta-oxidación mitocondrial suele dar cuenta de más del 40 %.',
          ref: { f: 'dailymed-valproato', sec: '12.3 · Farmacocinética', cita: 'Valproate is metabolized almost entirely by the liver', codigo: '43682-4' }
        },
        {
          t: 'La beta-oxidación mitocondrial es la otra gran vía metabólica.',
          ref: {
            f: 'dailymed-valproato',
            sec: '12.3 · Farmacocinética',
            cita: 'Mitochondrial β-oxidation is the other major metabolic pathway',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Conjugado con ácido glucurónico',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-valproato',
            sec: '12.3 · Farmacocinética',
            cita: '30-50% of an administered dose appears in urine as a glucuronide conjugate',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Menos del 3 % de la dosis sale sin cambios por la orina. Su semivida terminal en monoterapia fue de 9 a 16 horas con dosis orales de 250 a 1000 mg.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Menos del 3 % de la dosis sale sin cambios por la orina. Su semivida terminal en monoterapia fue de 9 a 16 horas con dosis orales de 250 a 1000 mg.',
          ref: {
            f: 'dailymed-valproato',
            sec: '12.3 · Farmacocinética',
            cita: 'Less than 3% of an administered dose is excreted unchanged in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico del comprimido',
      valor: '4 (ayunas) y 8 (con comida)',
      unidad: 'h',
      analito: 'valproato',
      condiciones: 'estudios de dosis única',
      ref: { f: 'dailymed-valproato', sec: '12.3 · Farmacocinética', cita: 'increase in T max from 4 to 8 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en monoterapia',
      valor: '9-16',
      unidad: 'h',
      analito: 'valproato',
      condiciones: 'dosis orales de 250 a 1000 mg',
      ref: {
        f: 'dailymed-valproato',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean terminal half-life for valproate monotherapy ranged from 9 to 16 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Fracción libre en el plasma',
      valor: '10 (a 40 mcg/mL) a 18,5 (a 130 mcg/mL)',
      unidad: '%',
      analito: 'valproato',
      ref: {
        f: 'dailymed-valproato',
        sec: '12.3 · Farmacocinética',
        cita: 'the free fraction increases from approximately 10% at 40 mcg/mL to 18.5% at 130 mcg/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '< 3',
      unidad: '% de la dosis',
      analito: 'valproato',
      ref: {
        f: 'dailymed-valproato',
        sec: '12.3 · Farmacocinética',
        cita: 'Less than 3% of an administered dose is excreted unchanged in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-valproato', '08a65cf4-7749-4ceb-6895-8f4805e2b01f', 'DEPAKOTE (DIVALPROEX SODIUM) TABLET, DELAYED RELEASE', 'Depakote', '1621', '2026-04-14', '2026-11-12'),
    rengPubchem(3121, 'valproate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
