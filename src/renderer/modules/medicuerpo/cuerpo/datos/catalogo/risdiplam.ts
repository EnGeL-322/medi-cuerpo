import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'risdiplam',
    nombre: 'Risdiplam',
    clase: 'Modificador del empalme del gen SMN2',
    sinonimos: [ 'risdiplam', 'Evrysdi' ],
    formula: 'C22H23N7O',
    masaMolar: 401.5,
    smiles: 'CC1=CC(=NN2C1=NC(=C2)C)C3=CC(=O)N4C=C(C=CC4=N3)N5CCNC6(C5)CC6',
    inchikey: 'ASKZRYGFUPSJPN-UHFFFAOYSA-N',
    cid: 118513932,
    iupac: '7-(4,7-diazaspiro[2.5]octan-7-yl)-2-(2,8-dimethylimidazo[1,2-b]pyridazin-6-yl)pyrido[1,2-a]pyrimidin-4-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'risdiplam-oral',
      producto: 'EVRYSDI · comprimido',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg por comprimido, según la etiqueta',
      excipientes: [
        'tartaric acid',
        'mannitol',
        'microcrystalline cellulose',
        'silicon dioxide',
        'crospovidone, unspecified',
        'sodium stearyl fumarate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc'
      ],
      usos: {
        t: 'Tratamiento de la atrofia muscular espinal en pacientes pediátricos y adultos.',
        ref: {
          f: 'dailymed-risdiplam',
          sec: '1 · Indicaciones',
          cita: 'EVRYSDI is indicated for the treatment of spinal muscular atrophy (SMA) in pediatric and adult patients',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-risdiplam',
      reacciones: [
        [
          'En la atrofia muscular espinal de inicio tardío, las más frecuentes (al menos 10 % y más que con el control): fiebre, diarrea y erupción.',
          '34084-4',
          'most common adverse reactions in later-onset SMA (incidence at least 10% of patients treated with EVRYSDI and more frequent than control) were fever, diarrhea, and rash'
        ],
        [
          'En la forma de inicio infantil, las reacciones más frecuentes fueron parecidas a las de la forma de inicio tardío.',
          '34084-4',
          'The most common adverse reactions in infantile-onset SMA were similar to those observed in later-onset SMA patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la atrofia muscular espinal en pacientes pediátricos y adultos.',
    actua: 'Modifica el empalme del gen SMN2: en ensayos in vitro y en modelos animales aumenta la inclusión del exón 7 en el ARNm de SMN2 y la producción de proteína SMN completa en el cerebro.',
    recorrido: 'En ayunas, la mediana del tiempo hasta la concentración máxima fue de 3,26 a 4 horas; con alimentos el Tmax se retrasó hasta 1 hora, sin efecto relevante en la exposición. Tras una dosis de 18 mg, alrededor del 53 % se excretó en las heces (14 % inalterado) y el 28 % en la orina (8 % inalterado).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada (la etiqueta incluye también un polvo para solución oral).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada (la etiqueta incluye también un polvo para solución oral).',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '3 · Formas y concentraciones',
            cita: 'EVRYSDI for oral solution: 60 mg as a light yellow',
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
      ocurre: 'En ayunas, la mediana del tiempo hasta la concentración máxima fue de 3,26 a 4 horas; con alimentos el Tmax se retrasó hasta 1 hora, sin efecto relevante en la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas, la mediana del tiempo hasta la concentración máxima fue de 3,26 a 4 horas; con alimentos el Tmax se retrasó hasta 1 hora, sin efecto relevante en la exposición.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of risdiplam in fasted state, the median time to reach maximum plasma concentration (T max ) was 3.26 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Un desayuno rico en grasas y calorías no tuvo efecto relevante en la exposición.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'Food (high-fat, high calorie breakfast) had no relevant effect on the exposure of risdiplam',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une sobre todo a la albúmina sérica, sin unirse a la glicoproteína ácida α1, con una fracción libre del 11 %; el volumen de distribución aparente en estado estacionario es de 190,4 L para un paciente de 31,3 kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une sobre todo a la albúmina sérica, sin unirse a la glicoproteína ácida α1, con una fracción libre del 11 %; el volumen de distribución aparente en estado estacionario es de 190,4 L para un paciente de 31,3 kg.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'Risdiplam is predominantly bound to serum albumin, without any binding to alpha-1 acid glycoprotein, with a free fraction of 11%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 190,4 L para un paciente de 31,3 kg.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution at steady state is 190.4 L for a 31.3 kg patient',
            codigo: '43682-4'
          },
          poblacion: 'paciente de 31,3 kg'
        }
      ],
      accion: {
        diana: 'ARNm precursor de SMN2 (empalme)',
        efecto: 'Modifica el empalme del gen SMN2: en ensayos in vitro y en modelos animales aumenta la inclusión del exón 7 en el ARNm de SMN2 y la producción de proteína SMN completa en el cerebro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Modifica el empalme del gen SMN2: en ensayos in vitro y en modelos animales aumenta la inclusión del exón 7 en el ARNm de SMN2 y la producción de proteína SMN completa en el cerebro.',
            ref: {
              f: 'dailymed-risdiplam',
              sec: '12.1 · Mecanismo de acción',
              cita: 'risdiplam was shown to increase exon 7 inclusion in SMN2 messenger ribonucleic acid (mRNA) transcripts and production of full-length SMN protein in the brain',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro e in vivo también puede causar empalme alternativo de otros genes, como FOXM1 y MADD.',
            ref: {
              f: 'dailymed-risdiplam',
              sec: '12.1 · Mecanismo de acción',
              cita: 'risdiplam may cause alternative splicing of additional genes, including FOXM1 and MADD',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por las flavina monooxigenasas 1 y 3 y también por las CYP 1A1, 2J2, 3A4 y 3A7; el fármaco original es el 83 % del material circulante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por las flavina monooxigenasas 1 y 3 y también por las CYP 1A1, 2J2, 3A4 y 3A7; el fármaco original es el 83 % del material circulante.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'Risdiplam is primarily metabolized by flavin monooxygenase 1 and 3 (FMO1 and FMO3) and also by CYPs 1A1, 2J2, 3A4, and 3A7',
            codigo: '43682-4'
          }
        },
        {
          t: 'El fármaco original fue el componente principal en el plasma, con el 83 % del material circulante.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'Parent drug was the major component found in plasma, accounting for 83% of drug-related material in circulation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1',
          actividad: 'inactivo',
          nota: 'Metabolito circulante principal, sin actividad farmacológica.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'The pharmacologically-inactive metabolite M1 was identified as the major circulating metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis de 18 mg, alrededor del 53 % se excretó en las heces (14 % inalterado) y el 28 % en la orina (8 % inalterado).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis de 18 mg, alrededor del 53 % se excretó en las heces (14 % inalterado) y el 28 % en la orina (8 % inalterado).',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a dose of 18 mg, approximately 53% of the dose (14% unchanged risdiplam) was excreted in the feces and 28% in urine (8% unchanged risdiplam)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal fue de unas 50 horas en adultos sanos.',
          ref: {
            f: 'dailymed-risdiplam',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life of risdiplam was approximately 50 hours in healthy adults',
            codigo: '43682-4'
          },
          poblacion: 'adultos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima en ayunas',
      valor: '3,26-4',
      unidad: 'h',
      analito: 'risdiplam',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-risdiplam',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to reach maximum plasma concentration (T max ) was 3.26 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción libre en el plasma',
      valor: '11',
      unidad: '%',
      analito: 'risdiplam',
      ref: { f: 'dailymed-risdiplam', sec: '12.3 · Farmacocinética', cita: 'with a free fraction of 11%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '190,4',
      unidad: 'L',
      analito: 'risdiplam',
      poblacion: 'paciente de 31,3 kg',
      ref: {
        f: 'dailymed-risdiplam',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution at steady state is 190.4 L for a 31.3 kg patient',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente (CL/F)',
      valor: '2,45',
      unidad: 'L/h',
      analito: 'risdiplam',
      poblacion: 'paciente de 31,3 kg',
      ref: {
        f: 'dailymed-risdiplam',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent clearance (CL/F) of risdiplam is 2.45 L/h for a 31.3 kg patient',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '50 (aprox.)',
      unidad: 'h',
      analito: 'risdiplam',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-risdiplam',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of risdiplam was approximately 50 hours in healthy adults',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '53 (aprox.)',
      unidad: '% de la dosis',
      analito: 'risdiplam y metabolitos',
      condiciones: 'dosis de 18 mg',
      ref: {
        f: 'dailymed-risdiplam',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 53% of the dose (14% unchanged risdiplam) was excreted in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-risdiplam', 'eceb9a99-7191-4be5-87c3-0102707cf98e', 'EVRYSDI (RISDIPLAM) POWDER, FOR SOLUTION EVRYSDI (RISDIPLAM) TABLET', 'EVRYSDI', '28', '2026-11-05', '2026-11-19'),
    rengPubchem(118513932, 'risdiplam', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
