import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cladribina',
    nombre: 'Cladribina',
    clase: 'Análogo de nucleósido (inmunosupresor selectivo de linfocitos)',
    sinonimos: [ 'cladribine', 'Mavenclad' ],
    formula: 'C10H12ClN5O3',
    masaMolar: 285.69,
    smiles: 'C1[C@@H]([C@H](O[C@H]1N2C=NC3=C(N=C(N=C32)Cl)N)CO)O',
    inchikey: 'PTOAARAWEBMLNO-KVQBGUIXSA-N',
    cid: 20279,
    iupac: '(2R,3S,5R)-5-(6-amino-2-chloropurin-9-yl)-2-(hydroxymethyl)oxolan-3-ol',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'cladribina-oral',
      producto: 'Mavenclad · comprimido',
      titular: 'EMD SERONO, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg por comprimido, según la etiqueta',
      excipientes: [ 'sorbitol', 'magnesium stearate', 'hydroxypropyl betadex' ],
      usos: {
        t: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidas la enfermedad recurrente-remitente y la secundaria progresiva activa.',
        ref: {
          f: 'dailymed-cladribina',
          sec: '1 · Indicaciones',
          cita: 'MAVENCLAD is indicated for the treatment of relapsing forms of multiple sclerosis (MS), to include relapsing-remitting disease and active secondary progressive disease, in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cladribina',
      advertencias: [
        {
          titulo: 'Neoplasias malignas',
          texto: 'El tratamiento puede aumentar el riesgo de neoplasias malignas.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-cladribina',
            sec: 'Advertencia destacada',
            cita: 'Treatment with MAVENCLAD may increase the risk of malignancy',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Teratogenicidad',
          texto: 'Puede causar daño fetal si se administra a mujeres embarazadas.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-cladribina',
            sec: '5 · Advertencias y precauciones',
            cita: 'MAVENCLAD may cause fetal harm when administered to pregnant women',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (incidencia superior al 20 %): infección respiratoria alta, cefalea y linfopenia.',
          '34084-4',
          'Most common adverse reactions (incidence > 20%) are upper respiratory tract infection, headache, and lymphopenia'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la insuficiencia cardíaca.',
          '34084-4',
          'Cardiac Failure [see Warnings and Precautions (5.9) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidas la enfermedad recurrente-remitente y la secundaria progresiva activa.',
    actua: 'No se conoce del todo su mecanismo en la esclerosis múltiple; se cree que implica efectos citotóxicos sobre los linfocitos B y T por alteración de la síntesis de ADN, con la consiguiente depleción de linfocitos.',
    recorrido: 'La biodisponibilidad fue de aproximadamente el 40 %; en ayunas, la mediana del tiempo hasta la concentración máxima fue de 0,5 horas. Tras 10 mg por vía oral en pacientes con esclerosis múltiple, el 28,5 % de la dosis se excretó inalterada por vía renal, con secreción renal activa.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '3 · Formas y concentraciones',
            cita: 'The tablets are uncoated, white, round, biconvex',
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
      ocurre: 'La biodisponibilidad fue de aproximadamente el 40 %; en ayunas, la mediana del tiempo hasta la concentración máxima fue de 0,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad fue de aproximadamente el 40 %; en ayunas, la mediana del tiempo hasta la concentración máxima fue de 0,5 horas.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'The bioavailability of cladribine was approximately 40%. Following fasted administration of cladribine, the median time to maximum concentration (T max ) was 0.5 h (range 0.5 to 1.5 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasa, la Cmax media geométrica bajó un 29 % y el AUC no cambió; el Tmax se prolongó a 1,5 horas.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following administration of cladribine with a high fat meal, the geometric mean C max decreased by 29% and AUC was unchanged',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'sistema-inmunitario' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es del 20 % in vitro, independiente de la concentración; el volumen de distribución aparente medio va de 480 a 490 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es del 20 % in vitro, independiente de la concentración; el volumen de distribución aparente medio va de 480 a 490 litros.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of cladribine is 20% and is independent of concentration, in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio va de 480 a 490 litros.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cladribine mean apparent volume of distribution ranges from 480 to 490 liters',
            codigo: '43682-4'
          }
        },
        {
          t: 'Puede atravesar la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cladribine has the potential to penetrate the blood brain barrier',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ADN de los linfocitos B y T',
        efecto: 'No se conoce del todo su mecanismo en la esclerosis múltiple; se cree que implica efectos citotóxicos sobre los linfocitos B y T por alteración de la síntesis de ADN, con la consiguiente depleción de linfocitos.',
        lugar: [ 'sistema-inmunitario', 'sangre' ],
        datos: [
          {
            t: 'No se conoce del todo su mecanismo en la esclerosis múltiple; se cree que implica efectos citotóxicos sobre los linfocitos B y T por alteración de la síntesis de ADN, con la consiguiente depleción de linfocitos.',
            ref: {
              f: 'dailymed-cladribina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'is thought to involve cytotoxic effects on B and T lymphocytes through impairment of DNA synthesis, resulting in depletion of lymphocytes',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sistema-inmunitario' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Es un profármaco que la desoxicitidina cinasa fosforila a Cd-AMP en los linfocitos; este se fosforila después a difosfato (Cd-ADP) y al trifosfato activo (Cd-ATP).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Es un profármaco que la desoxicitidina cinasa fosforila a Cd-AMP en los linfocitos; este se fosforila después a difosfato (Cd-ADP) y al trifosfato activo (Cd-ATP).',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cladribine is a prodrug that is phosphorylated to Cd-AMP by deoxycytidine kinase (and also by deoxyguanosine kinase in the mitochondria) in lymphocytes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Cd-ATP (trifosfato de cladribina)',
          actividad: 'activo',
          nota: 'Forma activa.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cd-AMP is further phosphorylated to cladribine diphosphate (Cd-ADP) and the active moiety Cd-ATP',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 10 mg por vía oral en pacientes con esclerosis múltiple, el 28,5 % de la dosis se excretó inalterada por vía renal, con secreción renal activa.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 10 mg por vía oral en pacientes con esclerosis múltiple, el 28,5 % de la dosis se excretó inalterada por vía renal, con secreción renal activa.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'After administration of 10 mg oral cladribine in MS patients, 28.5 [20] (mean [SD]) percent of the dose was excreted unchanged via the renal route',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal estimada es de aproximadamente 1 día.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cladribine estimated terminal half-life is approximately 1 day',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento renal mediano aparente estimado es de 22,2 L/h y el no renal, de 23,4 L/h.',
          ref: {
            f: 'dailymed-cladribina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cladribine estimated median apparent renal clearance is 22.2 liter per hour and non-renal clearance is 23.4 liter per hour',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'cladribina',
      ref: { f: 'dailymed-cladribina', sec: '12.3 · Farmacocinética', cita: 'The bioavailability of cladribine was approximately 40%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '0,5',
      unidad: 'h',
      analito: 'cladribina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-cladribina',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to maximum concentration (T max ) was 0.5 h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '20',
      unidad: '%',
      analito: 'cladribina',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-cladribina', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding of cladribine is 20%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '480-490',
      unidad: 'L',
      analito: 'cladribina',
      ref: {
        f: 'dailymed-cladribina',
        sec: '12.3 · Farmacocinética',
        cita: 'Cladribine mean apparent volume of distribution ranges from 480 to 490 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal estimada',
      valor: '1',
      unidad: 'd',
      analito: 'cladribina',
      ref: {
        f: 'dailymed-cladribina',
        sec: '12.3 · Farmacocinética',
        cita: 'Cladribine estimated terminal half-life is approximately 1 day',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cladribina', '9c75e30a-a410-40f1-b653-04d532bd9144', 'MAVENCLAD (CLADRIBINE) TABLET', 'Mavenclad', '10', '2026-05-29', '2026-11-15'),
    rengPubchem(20279, 'cladribine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
