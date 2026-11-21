import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'droxidopa',
    nombre: 'Droxidopa',
    clase: 'Profármaco de la noradrenalina (hipotensión ortostática neurógena)',
    sinonimos: [ 'droxidopa', 'Northera' ],
    formula: 'C9H11NO5',
    masaMolar: 213.19,
    smiles: 'C1=CC(=C(C=C1[C@H]([C@@H](C(=O)O)N)O)O)O',
    inchikey: 'QXWYKJLNLSIPIN-JGVFFNPUSA-N',
    cid: 92974,
    iupac: '(2S,3R)-2-amino-3-(3,4-dihydroxyphenyl)-3-hydroxypropanoic acid',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'droxidopa-oral',
      producto: 'Northera · cápsula',
      titular: 'LUNDBECK PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg, 200 mg o 300 mg por cápsula, según la etiqueta',
      excipientes: [ 'mannitol', 'starch, corn', 'magnesium stearate', 'gelatin', 'titanium dioxide', 'fd&c blue no. 2', 'ferric oxide red', 'ferrosoferric oxide' ],
      usos: {
        t: 'Tratamiento del mareo ortostático o la sensación de desvanecimiento en adultos con hipotensión ortostática neurógena sintomática por insuficiencia autonómica primaria y otras causas.',
        ref: {
          f: 'dailymed-droxidopa',
          sec: '1 · Indicaciones',
          cita: 'NORTHERA is indicated for the treatment of orthostatic dizziness, lightheadedness, or the “feeling that you are about to black out” in adult patients with symptomatic neurogenic orthostatic hypotension (nOH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-droxidopa',
      advertencias: [
        {
          titulo: 'Hipertensión en decúbito',
          texto: 'Hay que vigilar la presión arterial en decúbito antes y durante el tratamiento; elevar la cabecera reduce el riesgo.',
          organos: [],
          ref: {
            f: 'dailymed-droxidopa',
            sec: 'Advertencia destacada',
            cita: 'Monitor supine blood pressure prior to and during treatment and more frequently when increasing doses',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Cardiopatía, arritmias e insuficiencia cardíaca',
          texto: 'Puede empeorar los síntomas de la cardiopatía isquémica, las arritmias y la insuficiencia cardíaca congestiva.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-droxidopa',
            sec: '5 · Advertencias y precauciones',
            cita: 'May exacerbate symptoms in patients with existing ischemic heart disease, arrhythmias, and congestive heart failure',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperpirexia y confusión',
          texto: 'Pueden aparecer hiperpirexia y confusión.',
          organos: [],
          ref: { f: 'dailymed-droxidopa', sec: '5 · Advertencias y precauciones', cita: 'Hyperpyrexia and confusion ( 5.2 )', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 5 % y al menos 3 puntos por encima del placebo): cefalea, mareo, náuseas e hipertensión.',
          '34084-4',
          'most common adverse reactions (>5% and ≥3% compared to placebo) are headache, dizziness, nausea, and hypertension'
        ],
        [
          'Entre las reacciones descritas en otras secciones figura la hipertensión en decúbito.',
          '34084-4',
          'Supine Hypertension [see Warnings and Precautions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 100 mg, 200 mg o 300 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del mareo ortostático o la sensación de desvanecimiento en adultos con hipotensión ortostática neurógena sintomática por insuficiencia autonómica primaria y otras causas.',
    actua: 'Es un aminoácido sintético que la dopa descarboxilasa convierte directamente en noradrenalina, que sube la presión arterial al contraer arterias y venas periféricas.',
    recorrido: 'La concentración máxima se alcanza en 1 a 4 horas (media de unas 2 horas) en voluntarios sanos. La vía principal de eliminación de la droxidopa y sus metabolitos es el riñón; en animales, alrededor del 75 % de la radiactividad salió por la orina en 24 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '3 · Formas y concentraciones',
            cita: 'NORTHERA capsules are available in 100 mg, 200 mg, and 300 mg strengths',
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
      ocurre: 'La concentración máxima se alcanza en 1 a 4 horas (media de unas 2 horas) en voluntarios sanos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La concentración máxima se alcanza en 1 a 4 horas (media de unas 2 horas) en voluntarios sanos.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations (C max ) of droxidopa were reached by 1 to 4 hours post-dose (mean of approximately 2 hours) in healthy volunteers',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, la Cmax y el AUC bajaron un 35 % y un 20 % y la Cmax se retrasó unas 2 horas.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'High-fat meals have a moderate impact on droxidopa exposure with C max and area under the plasma concentration-time curve (AUC) decreasing by 35% and 20%, respectively',
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
      ocurre: 'La unión a las proteínas del plasma es del 75 % a 100 ng/mL y del 26 % a 10 000 ng/mL; el volumen de distribución aparente es de unos 200 L y en estudios preclínicos puede atravesar la barrera hematoencefálica.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es del 75 % a 100 ng/mL y del 26 % a 10 000 ng/mL; el volumen de distribución aparente es de unos 200 L y en estudios preclínicos puede atravesar la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'Droxidopa exhibits plasma protein binding of 75% at 100 ng/mL and 26% at 10,000 ng/mL',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los estudios preclínicos sugieren que puede atravesar la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'Pre-clinical studies suggest that droxidopa can cross the blood brain barrier',
            codigo: '43682-4'
          },
          poblacion: 'animales'
        },
        {
          t: 'El volumen de distribución aparente estimado es de unos 200 L en humanos.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent volume of distribution of droxidopa is about 200 L in humans',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Conversión en noradrenalina (receptores adrenérgicos vasculares)',
        efecto: 'Es un aminoácido sintético que la dopa descarboxilasa convierte directamente en noradrenalina, que sube la presión arterial al contraer arterias y venas periféricas.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Es un aminoácido sintético que la dopa descarboxilasa convierte directamente en noradrenalina, que sube la presión arterial al contraer arterias y venas periféricas.',
            ref: {
              f: 'dailymed-droxidopa',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Norepinephrine increases blood pressure by inducing peripheral arterial and venous vasoconstriction',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un análogo sintético de aminoácido que la dopa descarboxilasa convierte en noradrenalina; se cree que actúa a través de la noradrenalina.',
            ref: {
              f: 'dailymed-droxidopa',
              sec: '12.1 · Mecanismo de acción',
              cita: 'NORTHERA is a synthetic amino acid analog that is directly metabolized to norepinephrine by dopa­-decarboxylase, which is extensively distributed throughout the body',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por la vía de las catecolaminas, no por el citocromo P450: la COMT la convierte en 3-OM-DOPS, la dopa descarboxilasa en noradrenalina y la DOPS aldolasa en protocatecualdehído.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por la vía de las catecolaminas, no por el citocromo P450: la COMT la convierte en 3-OM-DOPS, la dopa descarboxilasa en noradrenalina y la DOPS aldolasa en protocatecualdehído.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolism of droxidopa is mediated by catecholamine pathway and not through the cytochrome P450 system',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Noradrenalina',
          actividad: 'activo',
          nota: 'Producto activo; sus concentraciones plasmáticas son muy bajas y variables.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12 · Farmacología clínica',
            cita: 'NORTHERA is believed to exert its pharmacological effects through norepinephrine and not through the parent molecule or other metabolites',
            codigo: '34090-1'
          }
        },
        {
          nombre: '3-OM-DOPS',
          actividad: 'desconocida',
          nota: 'Metabolito principal formado por la COMT; su contribución al efecto no se conoce bien.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'Droxidopa is initially converted to methoxylated dihydroxyphenylserine (3-OM-DOPS), a major metabolite, by catechol-O-methyltransferase (COMT)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de eliminación de la droxidopa y sus metabolitos es el riñón; en animales, alrededor del 75 % de la radiactividad salió por la orina en 24 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de eliminación de la droxidopa y sus metabolitos es el riñón; en animales, alrededor del 75 % de la radiactividad salió por la orina en 24 horas.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'The major route of elimination of droxidopa and its metabolites is via the kidneys in both animals and in humans',
            codigo: '43682-4'
          }
        },
        {
          t: 'En animales con fármaco marcado, alrededor del 75 % de la radiactividad se excretó en la orina en 24 horas.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'Studies in animals with radiolabeled drug showed that ~75% of the administered radioactivity was excreted in urine within 24 hours of oral dosing',
            codigo: '43682-4'
          },
          poblacion: 'animales'
        },
        {
          t: 'La semivida de eliminación media es de unas 2,5 horas en humanos.',
          ref: {
            f: 'dailymed-droxidopa',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean elimination half-life of droxidopa is approximately 2.5 hours in humans',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio hasta la concentración máxima',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'droxidopa',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-droxidopa',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations (C max ) of droxidopa were reached by 1 to 4 hours post-dose (mean of approximately 2 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (100 ng/mL)',
      valor: '75',
      unidad: '%',
      analito: 'droxidopa',
      condiciones: '100 ng/mL',
      ref: {
        f: 'dailymed-droxidopa',
        sec: '12.3 · Farmacocinética',
        cita: 'Droxidopa exhibits plasma protein binding of 75% at 100 ng/mL and 26% at 10,000 ng/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '200 (aprox.)',
      unidad: 'L',
      analito: 'droxidopa',
      ref: {
        f: 'dailymed-droxidopa',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated apparent volume of distribution of droxidopa is about 200 L in humans',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '2,5 (aprox.)',
      unidad: 'h',
      analito: 'droxidopa',
      ref: {
        f: 'dailymed-droxidopa',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-life of droxidopa is approximately 2.5 hours in humans',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total tras la toma oral (CL/F), unos 400 mL/h',
      valor: '0,4 (aprox.)',
      unidad: 'L/h',
      analito: 'droxidopa',
      condiciones: 'dosis única de 300 mg',
      ref: {
        f: 'dailymed-droxidopa',
        sec: '12.3 · Farmacocinética',
        cita: 'The total clearance of droxidopa after oral administration (CL/F) was approximately 400 mL/hr',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-droxidopa', '2179f02c-48d7-48eb-8007-5ae43d8d16bc', 'NORTHERA (DROXIDOPA) CAPSULE', 'Northera', '26', '2025-12-17', '2026-11-19'),
    rengPubchem(92974, 'droxidopa', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
