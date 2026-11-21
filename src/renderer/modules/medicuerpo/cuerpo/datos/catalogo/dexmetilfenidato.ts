import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dexmetilfenidato',
    nombre: 'Dexmetilfenidato',
    clase: 'Estimulante del sistema nervioso central (enantiómero d-treo del metilfenidato)',
    sinonimos: [ 'dexmethylphenidate', 'Focalin' ],
    formula: 'C14H19NO2',
    masaMolar: 233.31,
    smiles: 'COC(=O)[C@@H]([C@H]1CCCCN1)C2=CC=CC=C2',
    inchikey: 'DUGOZIWVEXMGBE-CHWSQXEVSA-N',
    cid: 154101,
    iupac: 'methyl (2R)-2-phenyl-2-[(2R)-piperidin-2-yl]acetate',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'dexmetilfenidato-oral',
      producto: 'Focalin · comprimido',
      titular: 'SANDOZ INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de dexmetilfenidato',
        ref: { f: 'dailymed-dexmetilfenidato', sec: '11 · Descripción', cita: 'DEXMETHYLPHENIDATE HYDROCHLORIDE', codigo: '34089-3' }
      },
      excipientes: [
        'fd&c blue no. 1',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'starch, corn',
        'sodium starch glycolate type a potato'
      ],
      usos: {
        t: 'Tratamiento del trastorno por déficit de atención con hiperactividad (TDAH).',
        ref: {
          f: 'dailymed-dexmetilfenidato',
          sec: '1 · Indicaciones',
          cita: 'Focalin is indicated for the treatment of Attention Deficit Hyperactivity Disorder (ADHD)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dexmetilfenidato',
      advertencias: [
        {
          titulo: 'Abuso, uso indebido y adicción',
          texto: 'Tiene un alto potencial de abuso y uso indebido, que puede llevar a un trastorno por consumo, incluida la adicción, con riesgo de sobredosis y muerte.',
          organos: [],
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: 'Advertencia destacada',
            cita: 'Focalin has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Riesgos en la cardiopatía grave',
          texto: 'Evitarlo en anomalías cardíacas estructurales, miocardiopatía, arritmias graves, enfermedad coronaria u otra cardiopatía grave.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use in patients with known structural cardiac abnormalities, cardiomyopathy, serious cardiac arrhythmias, coronary artery disease, or other serious cardiac disease',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la presión arterial y la frecuencia cardíaca',
          texto: 'Hay que vigilar la presión arterial y el pulso.',
          organos: [],
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Increased Blood Pressure and Heart Rate : Monitor blood pressure and pulse',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En pacientes de 6 a 17 años, las más frecuentes (5 % o más y el doble que con placebo): dolor abdominal, fiebre, náuseas y anorexia.',
          '34084-4',
          'most common adverse reactions (greater than or equal to 5% and twice the rate of placebo) in pediatric patients 6 to 17 years were abdominal pain, fever, nausea, and anorexia'
        ],
        [
          'El 7,3 % de los pacientes pediátricos dejó el tratamiento por una reacción adversa, sobre todo tics, anorexia, insomnio y taquicardia.',
          '34084-4',
          'Overall, 50 of 684 (7.3%) pediatric patients treated with Focalin experienced an adverse reaction that resulted in discontinuation'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de dexmetilfenidato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno por déficit de atención con hiperactividad (TDAH).',
    actua: 'Es un estimulante del sistema nervioso central; su modo de acción terapéutica en el TDAH se desconoce.',
    recorrido: 'Se absorbe con facilidad; en pacientes con TDAH alcanza el máximo en ayunas a las 1-1,5 horas, y por el primer paso la biodisponibilidad absoluta media es del 22 %-25 %. Con metilfenidato racémico marcado, alrededor del 90 % de la radiactividad se recuperó en la orina, sobre todo como ácido ritalínico (alrededor del 80 % de la dosis).'
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
            f: 'dailymed-dexmetilfenidato',
            sec: '3 · Formas y concentraciones',
            cita: 'Focalin (dexmethylphenidate hydrochloride) tablets are D-shaped',
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
      ocurre: 'Se absorbe con facilidad; en pacientes con TDAH alcanza el máximo en ayunas a las 1-1,5 horas, y por el primer paso la biodisponibilidad absoluta media es del 22 %-25 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con facilidad; en pacientes con TDAH alcanza el máximo en ayunas a las 1-1,5 horas, y por el primer paso la biodisponibilidad absoluta media es del 22 %-25 %.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'In patients with ADHD, plasma dexmethylphenidate concentrations increase rapidly, reaching a maximum in the fasted state at about 1 to 1.5 hours postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Por el metabolismo de primer paso, la biodisponibilidad absoluta media fue del 22 % al 25 %.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'However, due to first pass metabolism the mean absolute bioavailability of dexmethylphenidate when administered in various formulations was 22% to 25%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Un desayuno rico en grasas no cambió de forma significativa la Cmax ni el AUC, pero retrasó el Tmax de 1,5 a 2,9 horas.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'High fat breakfast did not significantly affect C max or AUC 0-inf of dexmethylphenidate when two 10 mg Focalin tablets were administered, but delayed T max from 1.5 hours post dose to 2.9 hours post dose',
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
      ocurre: 'Se desconoce la unión a proteínas del dexmetilfenidato; el metilfenidato racémico se une en un 12 %-15 % a las proteínas del plasma. El volumen de distribución es de 2,65 ± 1,11 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se desconoce la unión a proteínas del dexmetilfenidato; el metilfenidato racémico se une en un 12 %-15 % a las proteínas del plasma. El volumen de distribución es de 2,65 ± 1,11 L/kg.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'racemic methylphenidate is bound to plasma proteins by 12% to 15%, independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución de 2,65 ± 1,11 L/kg.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'Dexmethylphenidate shows a volume of distribution of 2.65 ± 1.11 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Mecanismo no establecido',
        efecto: 'Es un estimulante del sistema nervioso central; su modo de acción terapéutica en el TDAH se desconoce.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un estimulante del sistema nervioso central; su modo de acción terapéutica en el TDAH se desconoce.',
            ref: {
              f: 'dailymed-dexmetilfenidato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Dexmethylphenidate hydrochloride is a CNS stimulant. The mode of therapeutic action in ADHD is not known',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por desesterificación a ácido d-α-fenilpiperidinacético (ácido d-ritalínico), con poca o ninguna actividad; sufre metabolismo de primer paso.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por desesterificación a ácido d-α-fenilpiperidinacético (ácido d-ritalínico), con poca o ninguna actividad; sufre metabolismo de primer paso.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'In humans, dexmethylphenidate is metabolized primarily via de-esterification to d -α-phenyl-piperidine acetic acid (also known as d -ritalinic acid)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Por el metabolismo de primer paso, la biodisponibilidad absoluta es baja.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'due to first pass metabolism the mean absolute bioavailability of dexmethylphenidate when administered in various formulations was 22% to 25%',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido d-ritalínico',
          actividad: 'inactivo',
          nota: 'Metabolito principal, con poca o ninguna actividad farmacológica.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'This metabolite has little or no pharmacological activity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con metilfenidato racémico marcado, alrededor del 90 % de la radiactividad se recuperó en la orina, sobre todo como ácido ritalínico (alrededor del 80 % de la dosis).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con metilfenidato racémico marcado, alrededor del 90 % de la radiactividad se recuperó en la orina, sobre todo como ácido ritalínico (alrededor del 80 % de la dosis).',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral dosing of radiolabeled racemic methylphenidate in humans, about 90% of the radioactivity was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal media es de unas 2,2 horas.',
          ref: {
            f: 'dailymed-dexmetilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean terminal elimination half-life of dexmethylphenidate was approximately 2.2 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo en ayunas',
      valor: '1-1,5 (aprox.)',
      unidad: 'h',
      analito: 'dexmetilfenidato',
      poblacion: 'pacientes con TDAH',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-dexmetilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'reaching a maximum in the fasted state at about 1 to 1.5 hours postdose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '22-25',
      unidad: '%',
      analito: 'dexmetilfenidato',
      ref: {
        f: 'dailymed-dexmetilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean absolute bioavailability of dexmethylphenidate when administered in various formulations was 22% to 25%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '2,65 ± 1,11',
      unidad: 'L/kg',
      analito: 'dexmetilfenidato',
      ref: {
        f: 'dailymed-dexmetilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'Dexmethylphenidate shows a volume of distribution of 2.65 ± 1.11 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal media',
      valor: '2,2 (aprox.)',
      unidad: 'h',
      analito: 'dexmetilfenidato',
      ref: {
        f: 'dailymed-dexmetilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal elimination half-life of dexmethylphenidate was approximately 2.2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metilfenidato racémico y metabolitos',
      condiciones: 'metilfenidato racémico marcado',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-dexmetilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'about 90% of the radioactivity was recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dexmetilfenidato', '2016f5c2-95d2-4655-af65-c588c2bf5e6d', 'FOCALIN (DEXMETHYLPHENIDATE HYDROCHLORIDE) TABLET', 'Focalin', '2', '2025-12-12', '2026-11-19'),
    rengPubchem(154101, 'dexmethylphenidate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
