import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vericiguat',
    nombre: 'Vericiguat',
    clase: 'Estimulador de la guanilato ciclasa soluble (GCs)',
    sinonimos: [ 'vericiguat', 'Verquvo' ],
    formula: 'C19H16F2N8O2',
    masaMolar: 426.4,
    smiles: 'COC(=O)NC1=C(N=C(N=C1N)C2=NN(C3=C2C=C(C=N3)F)CC4=CC=CC=C4F)N',
    inchikey: 'QZFHIXARHDBPBY-UHFFFAOYSA-N',
    cid: 54674461,
    iupac: 'methyl N-[4,6-diamino-2-[5-fluoro-1-[(2-fluorophenyl)methyl]pyrazolo[5,4-b]pyridin-3-yl]pyrimidin-5-yl]carbamate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'vericiguat-oral',
      producto: 'VERQUVO · comprimido recubierto con película',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hypromellose 2910 (5 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'sodium lauryl sulfate',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Reducir el riesgo de muerte cardiovascular y de hospitalización por insuficiencia cardíaca tras una hospitalización o la necesidad de diuréticos intravenosos ambulatorios, en adultos con insuficiencia cardíaca crónica sintomática y fracción de eyección inferior al 45 %.',
        ref: {
          f: 'dailymed-vericiguat',
          sec: '1 · Indicaciones',
          cita: 'indicated to reduce the risk of cardiovascular death and heart failure (HF) hospitalization following a hospitalization for heart failure or need for outpatient IV diuretics, in adults with symptomatic chronic HF and ejection fraction less than 45%',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vericiguat',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'No debe administrarse a una embarazada porque puede dañar al feto.',
          organos: [],
          ref: {
            f: 'dailymed-vericiguat',
            sec: 'Advertencia destacada',
            cita: 'Do not administer VERQUVO to a pregnant female because it may cause fetal harm',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prueba de embarazo y anticoncepción',
          texto: 'Antes de empezar hay que hacer una prueba de embarazo; las mujeres con capacidad de gestar deben usar anticoncepción eficaz durante el tratamiento y al menos un mes después.',
          organos: [],
          ref: {
            f: 'dailymed-vericiguat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Obtain a pregnancy test before the start of treatment. Advise females of reproductive potential to use effective contraception during treatment with VERQUVO and for at least one month after the final dose',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más) fueron hipotensión y anemia.',
          '34084-4',
          'Most common adverse reactions reported in ≥5% are hypotension and anemia'
        ],
        [
          'En el estudio VICTORIA, la hipotensión apareció en el 16 % con vericiguat frente al 15 % con placebo y la anemia en el 10 % frente al 7 %.',
          '34084-4',
          'Adverse Drug Reaction VERQUVO % N = 2,519 Placebo % N = 2,515 Hypotension 16 15 Anemia 10 7'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir el riesgo de muerte cardiovascular y de hospitalización por insuficiencia cardíaca tras una hospitalización o la necesidad de diuréticos intravenosos ambulatorios, en adultos con insuficiencia cardíaca crónica sintomática y fracción de eyección inferior al 45 %.',
    actua: 'Estimula directamente la guanilato ciclasa soluble, con independencia del óxido nítrico y en sinergia con él, y aumenta el GMPc intracelular, lo que relaja el músculo liso y dilata los vasos.',
    recorrido: 'La biodisponibilidad absoluta es del 93 % cuando se toma con alimentos. Tras una dosis oral marcada en sujetos sanos, alrededor del 53 % de la dosis se excretó en la orina (sobre todo como metabolito inactivo) y el 45 % en las heces (sobre todo como fármaco inalterado).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '11 · Descripción',
            cita: 'available as film-coated tablets for oral administration, containing 2.5 mg of vericiguat',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es del 93 % cuando se toma con alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es del 93 % cuando se toma con alimentos.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of vericiguat is 93% when taken with food',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas y calorías, el Tmax pasa de alrededor de 1 hora (en ayunas) a unas 4 horas, disminuye la variabilidad y aumentan el AUC un 44 % y la Cmax un 41 % respecto al ayuno.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'increases T max from about 1 hour (fasted) to about 4 hours (fed), reduces PK variability, and increases vericiguat AUC by 44% and C max by 41% compared with administration in the fasted state',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los resultados fueron comparables con el comprimido entero o triturado en agua.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'Results were comparable when VERQUVO was administered orally as a whole tablet or as a crushed tablet in water',
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
      ocurre: 'Se une a las proteínas en alrededor de un 98 %, sobre todo a la albúmina sérica; el volumen de distribución medio en estado estacionario es de unos 44 L en sujetos sanos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a las proteínas en alrededor de un 98 %, sobre todo a la albúmina sérica; el volumen de distribución medio en estado estacionario es de unos 44 L en sujetos sanos.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding (primarily to serum albumin) of vericiguat is about 98%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio en estado estacionario de unos 44 L.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean steady-state volume of distribution of vericiguat is approximately 44 L in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'Guanilato ciclasa soluble (GCs)',
        efecto: 'Estimula directamente la guanilato ciclasa soluble, con independencia del óxido nítrico y en sinergia con él, y aumenta el GMPc intracelular, lo que relaja el músculo liso y dilata los vasos.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Estimula directamente la guanilato ciclasa soluble, con independencia del óxido nítrico y en sinergia con él, y aumenta el GMPc intracelular, lo que relaja el músculo liso y dilata los vasos.',
            ref: {
              f: 'dailymed-vericiguat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'By directly stimulating sGC, independently of and synergistically with NO, vericiguat augments levels of intracellular cGMP, leading to smooth muscle relaxation and vasodilation',
              codigo: '43679-0'
            }
          },
          {
            t: 'El GMPc es un segundo mensajero que interviene en la regulación del tono vascular, la contractilidad cardíaca y el remodelado cardíaco.',
            ref: {
              f: 'dailymed-vericiguat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'a second messenger that plays a role in the regulation of vascular tone, cardiac contractility, and cardiac remodeling',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por glucuronidación mediante la UGT1A9 y, en menor medida, la UGT1A1, que forman un N-glucurónido inactivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por glucuronidación mediante la UGT1A9 y, en menor medida, la UGT1A1, que forman un N-glucurónido inactivo.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'Vericiguat primarily undergoes glucuronidation by UGT1A9 and to a lesser extent, by UGT1A1 to form an inactive N-glucuronide metabolite',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolismo por enzimas CYP es una vía de aclaramiento menor (menos del 5 %).',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP-mediated metabolism is a minor clearance pathway (<5%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-glucurónido de vericiguat',
          actividad: 'inactivo',
          nota: 'Metabolito principal, sin actividad; es lo que sale sobre todo por la orina.',
          ref: { f: 'dailymed-vericiguat', sec: '12.3 · Farmacocinética', cita: 'to form an inactive N-glucuronide metabolite', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada en sujetos sanos, alrededor del 53 % de la dosis se excretó en la orina (sobre todo como metabolito inactivo) y el 45 % en las heces (sobre todo como fármaco inalterado).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada en sujetos sanos, alrededor del 53 % de la dosis se excretó en la orina (sobre todo como metabolito inactivo) y el 45 % en las heces (sobre todo como fármaco inalterado).',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 53% of the dose was excreted in urine (primarily as inactive metabolite) and 45% in feces (primarily as unchanged drug)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de 30 horas en pacientes con insuficiencia cardíaca.',
          ref: {
            f: 'dailymed-vericiguat',
            sec: '12.3 · Farmacocinética',
            cita: 'The half-life of vericiguat is 30 hours in patients with heart failure',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con insuficiencia cardíaca'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '93',
      unidad: '%',
      analito: 'vericiguat',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-vericiguat',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of vericiguat is 93% when taken with food',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en ayunas',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'vericiguat',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-vericiguat',
        sec: '12.3 · Farmacocinética',
        cita: 'increases T max from about 1 hour (fasted) to about 4 hours (fed)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio en estado estacionario',
      valor: '44 (aprox.)',
      unidad: 'L',
      analito: 'vericiguat',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-vericiguat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean steady-state volume of distribution of vericiguat is approximately 44 L in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'vericiguat',
      ref: {
        f: 'dailymed-vericiguat',
        sec: '12.3 · Farmacocinética',
        cita: 'Protein binding (primarily to serum albumin) of vericiguat is about 98%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '30',
      unidad: 'h',
      analito: 'vericiguat',
      poblacion: 'pacientes con insuficiencia cardíaca',
      ref: {
        f: 'dailymed-vericiguat',
        sec: '12.3 · Farmacocinética',
        cita: 'The half-life of vericiguat is 30 hours in patients with heart failure',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento',
      valor: '1,6',
      unidad: 'L/h',
      analito: 'vericiguat',
      poblacion: 'sujetos sanos',
      ref: { f: 'dailymed-vericiguat', sec: '12.3 · Farmacocinética', cita: 'Clearance in healthy subjects is 1.6 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '53 (aprox.)',
      unidad: '% de la dosis',
      analito: 'vericiguat y metabolitos',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral marcada',
      ref: { f: 'dailymed-vericiguat', sec: '12.3 · Farmacocinética', cita: 'approximately 53% of the dose was excreted in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vericiguat', '17056d73-1b1b-4bf2-9c07-b7a9367f0d6d', 'VERQUVO (VERICIGUAT) TABLET, FILM COATED', 'VERQUVO', '13', '2026-02-06', '2026-11-18'),
    rengPubchem(54674461, 'vericiguat', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
