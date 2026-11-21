import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lurasidona',
    nombre: 'Lurasidona',
    clase: 'Antipsicótico atípico',
    sinonimos: [ 'lurasidone', 'Latuda' ],
    formula: 'C28H36N4O2S',
    masaMolar: 492.7,
    smiles: 'C1CC[C@H]([C@@H](C1)CN2CCN(CC2)C3=NSC4=CC=CC=C43)CN5C(=O)[C@H]6[C@@H]7CC[C@@H](C7)[C@H]6C5=O',
    inchikey: 'PQXKDMSYBGKCJA-CVTJIBDQSA-N',
    cid: 213046,
    iupac: '(1R,2S,6R,7S)-4-[[(1R,2R)-2-[[4-(1,2-benzothiazol-3-yl)piperazin-1-yl]methyl]cyclohexyl]methyl]-4-azatricyclo[5.2.1.02,6]decane-3,5-dione',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'lurasidona-oral',
      producto: 'Latuda · comprimido recubierto con película',
      titular: 'SUMITOMO PHARMA AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg, 40 mg, 60 mg, 80 mg o 120 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de lurasidona',
        ref: { f: 'dailymed-lurasidona', sec: '11 · Descripción', cita: 'Lurasidone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'mannitol', 'starch, corn', 'croscarmellose sodium', 'hypromellose 2910 (6 mpa.s)', 'magnesium stearate', 'carnauba wax' ],
      usos: {
        t: 'Esquizofrenia en adultos y adolescentes de 13 a 17 años y episodios depresivos del trastorno bipolar I, entre otros usos.',
        ref: {
          f: 'dailymed-lurasidona',
          sec: '1 · Indicaciones',
          cita: 'Treatment of adult and adolescent patients (13 to 17 years) with schizophrenia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lurasidona',
      advertencias: [
        {
          titulo: 'Mortalidad en personas mayores con demencia',
          texto: 'Las personas mayores con psicosis por demencia tratadas con antipsicóticos tienen un mayor riesgo de muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-lurasidona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Se ha descrito este cuadro potencialmente mortal con los antipsicóticos.',
          organos: [ 'encefalo', 'musculos' ],
          ref: {
            f: 'dailymed-lurasidona',
            sec: '5 · Advertencias y precauciones',
            cita: 'has been reported in association with administration of antipsychotic dr',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos con esquizofrenia: somnolencia, acatisia, síntomas extrapiramidales y náuseas (≥ 5 % y el doble que con placebo).',
          '34084-4',
          'Adult patients with schizophrenia: somnolence, akathisia, extrapyramidal symptoms, and nausea'
        ],
        [
          'En la depresión bipolar de adultos: acatisia, síntomas extrapiramidales y somnolencia.',
          '34084-4',
          'Adult patients with bipolar depression: akathisia, extrapyramidal symptoms, and somnolence'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg, 40 mg, 60 mg, 80 mg o 120 mg por comprimido, según la etiqueta; el activo va como clorhidrato de lurasidona. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia en adultos y adolescentes de 13 a 17 años y episodios depresivos del trastorno bipolar I, entre otros usos.',
    actua: 'Su mecanismo no está claro; su eficacia podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2A del cerebro.',
    recorrido: 'Se absorbe solo entre el 9 % y el 19 % de la dosis; el pico llega en 1 a 3 horas. Con comida, la Cmax y el AUC son unas 3 y 2 veces mayores que en ayunas. Con una dosis marcada, alrededor del 80 % salió por las heces y el 9 % por la orina; su semivida media es de 18 horas.'
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
          ref: {
            f: 'dailymed-lurasidona',
            sec: '3 · Formas y concentraciones',
            cita: 'LATUDA tablets are available in the following shape and color',
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
      ocurre: 'Se absorbe solo entre el 9 % y el 19 % de la dosis; el pico llega en 1 a 3 horas. Con comida, la Cmax y el AUC son unas 3 y 2 veces mayores que en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe solo entre el 9 % y el 19 % de la dosis; el pico llega en 1 a 3 horas. Con comida, la Cmax y el AUC son unas 3 y 2 veces mayores que en ayunas.',
          ref: {
            f: 'dailymed-lurasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'It is estimated that 9-19% of an administered dose is absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico sérico llega hacia 1-3 horas.',
          ref: {
            f: 'dailymed-lurasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'reaches peak serum concentrations in approximately 1-3 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99 % a proteínas del suero y tiene un volumen aparente de distribución enorme (unos 6173 L).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99 % a proteínas del suero y tiene un volumen aparente de distribución enorme (unos 6173 L).',
          ref: { f: 'dailymed-lurasidona', sec: '12.3 · Farmacocinética', cita: 'LATUDA is highly bound (~99%) to serum proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores D2 y 5-HT2A',
        efecto: 'Su mecanismo no está claro; su eficacia podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2A del cerebro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo no está claro; su eficacia podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2A del cerebro.',
            ref: {
              f: 'dailymed-lurasidona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'could be mediated through a combination of central dopamine D 2 and serotonin Type 2 (5HT 2A ) receptor antagonism',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por CYP3A4 y forma dos metabolitos activos (ID-14283 e ID-14326) y dos inactivos principales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por CYP3A4 y forma dos metabolitos activos (ID-14283 e ID-14326) y dos inactivos principales.',
          ref: { f: 'dailymed-lurasidona', sec: '12.3 · Farmacocinética', cita: 'LATUDA is metabolized mainly via CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'ID-14283 e ID-14326',
          actividad: 'activo',
          ref: {
            f: 'dailymed-lurasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'LATUDA is metabolized into two active metabolites (ID-14283 and ID-14326)',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'ID-20219 e ID-20220',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-lurasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'two major non-active metabolites (ID-20219 and ID-20220)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con una dosis marcada, alrededor del 80 % salió por las heces y el 9 % por la orina; su semivida media es de 18 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con una dosis marcada, alrededor del 80 % salió por las heces y el 9 % por la orina; su semivida media es de 18 horas.',
          ref: {
            f: 'dailymed-lurasidona',
            sec: '12.3 · Farmacocinética',
            cita: 'about 80% recovered in feces and 9% recovered in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '1-3',
      unidad: 'h',
      analito: 'lurasidona',
      ref: {
        f: 'dailymed-lurasidona',
        sec: '12.3 · Farmacocinética',
        cita: 'reaches peak serum concentrations in approximately 1-3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida estimada',
      valor: '9-19',
      unidad: '%',
      analito: 'lurasidona',
      ref: {
        f: 'dailymed-lurasidona',
        sec: '12.3 · Farmacocinética',
        cita: 'It is estimated that 9-19% of an administered dose is absorbed',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'lurasidona',
      ref: { f: 'dailymed-lurasidona', sec: '12.3 · Farmacocinética', cita: 'LATUDA is highly bound (~99%) to serum proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '6173 (CV 17,2 %)',
      unidad: 'L',
      analito: 'lurasidona',
      condiciones: 'dosis de 40 mg',
      ref: {
        f: 'dailymed-lurasidona',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (%CV) apparent volume of distribution was 6173 (17.2) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '18 (CV 7 %)',
      unidad: 'h',
      analito: 'lurasidona',
      condiciones: 'dosis de 40 mg',
      ref: { f: 'dailymed-lurasidona', sec: '12.3 · Farmacocinética', cita: 'the mean (%CV) elimination half-life was 18 ( 7 ) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la Cmax con comida',
      valor: '3 (aprox.)',
      unidad: 'veces',
      analito: 'lurasidona',
      ref: { f: 'dailymed-lurasidona', sec: '12.3 · Farmacocinética', cita: 'LATUDA mean Cmax and AUC were about 3-times and 2-times', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lurasidona', 'afad3051-9df2-4c54-9684-e8262a133af8', 'LATUDA (LURASIDONE HYDROCHLORIDE) TABLET, FILM COATED', 'Latuda', '37', '2026-01-14', '2026-11-12'),
    rengPubchem(213046, 'lurasidone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
