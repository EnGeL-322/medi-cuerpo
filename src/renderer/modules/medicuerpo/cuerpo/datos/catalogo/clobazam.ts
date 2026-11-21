import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clobazam',
    nombre: 'Clobazam',
    clase: 'Benzodiazepina (antiepiléptico)',
    sinonimos: [ 'clobazam', 'Onfi' ],
    formula: 'C16H13ClN2O2',
    masaMolar: 300.74,
    smiles: 'CN1C(=O)CC(=O)N(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3',
    inchikey: 'CXOXHMZGEKVPMT-UHFFFAOYSA-N',
    cid: 2789,
    iupac: '7-chloro-1-methyl-5-phenyl-1,5-benzodiazepine-2,4-dione',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'clobazam-oral',
      producto: 'Onfi · comprimido',
      titular: 'LUNDBECK PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 20 mg por comprimido, según la etiqueta',
      excipientes: [ 'starch, corn', 'lactose monohydrate', 'magnesium stearate', 'silicon dioxide', 'talc' ],
      usos: {
        t: 'Tratamiento complementario de las crisis asociadas al síndrome de Lennox-Gastaut en pacientes desde 2 años.',
        ref: {
          f: 'dailymed-clobazam',
          sec: '1 · Indicaciones',
          cita: 'ONFI ® (clobazam) is indicated for the adjunctive treatment of seizures associated with Lennox-Gastaut syndrome (LGS) in patients 2 years of age or older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-clobazam',
      advertencias: [
        {
          titulo: 'Uso con opioides',
          texto: 'El uso concomitante de benzodiazepinas y opioides puede producir sedación profunda, depresión respiratoria, coma y muerte.',
          organos: [ 'encefalo', 'pulmones' ],
          ref: {
            f: 'dailymed-clobazam',
            sec: '5 · Advertencias y precauciones',
            cita: 'Concomitant use of benzodiazepines, including ONFI, and opioids may result in profound sedation, respiratory depression, coma, and death',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Embarazo',
          texto: 'El uso durante el embarazo puede causar sedación y síndrome de abstinencia neonatales.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-clobazam',
            sec: '5 · Advertencias y precauciones',
            cita: 'ONFI use during pregnancy can result in neonatal sedation and/or neonatal withdrawal',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Los motivos más frecuentes de suspensión del tratamiento fueron, por orden decreciente, letargo, somnolencia, ataxia, agresividad, fatiga e insomnio.',
          '34084-4',
          'in decreasing order of frequency included lethargy, somnolence, ataxia, aggression, fatigue, and insomnia'
        ],
        [
          'La tabla de la etiqueta recoge las reacciones del 5 % o más de los pacientes tratados, con una tasa mayor que con placebo.',
          '34084-4',
          'Table 3 lists the adverse reactions that occurred in ≥5% of ONFI-treated patients (at any dose), and at a rate greater than placebo-treated patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg o 20 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de las crisis asociadas al síndrome de Lennox-Gastaut en pacientes desde 2 años.',
    actua: 'Su mecanismo exacto no se conoce del todo, pero se cree que potencia la neurotransmisión GABAérgica al unirse al sitio de las benzodiazepinas del receptor GABA-A.',
    recorrido: 'Se absorbe de forma rápida y extensa tras la administración oral. El N-desmetilclobazam y sus metabolitos suponen alrededor del 94 % de los componentes relacionados con el fármaco en la orina.'
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
            f: 'dailymed-clobazam',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 10 mg and 20 mg with a functional score for oral administration',
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
      ocurre: 'Se absorbe de forma rápida y extensa tras la administración oral.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe de forma rápida y extensa tras la administración oral.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'Clobazam is rapidly and extensively absorbed following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'En ayunas, el Tmax del comprimido osciló entre 0,5 y 4 horas tras dosis únicas o múltiples.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to peak concentrations (T max ) of clobazam tablets under fasted conditions ranged from 0.5 to 4 hours after single- or multiple-dose administrations',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad relativa del comprimido frente a una solución oral es de aproximadamente el 100 %.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'The relative bioavailability of clobazam tablets compared to an oral solution is approximately 100%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tomar el comprimido con alimento o triturado en compota de manzana no afecta a la absorción.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'The administration of ONFI tablets with food or when crushed in applesauce does not affect absorption',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Es lipofílico y se distribuye rápidamente por todo el cuerpo; el volumen de distribución aparente en el estado estacionario fue de unos 100 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Es lipofílico y se distribuye rápidamente por todo el cuerpo; el volumen de distribución aparente en el estado estacionario fue de unos 100 L.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'Clobazam is lipophilic and distributes rapidly throughout the body. The apparent volume of distribution at steady state was approximately 100 L',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas del plasma in vitro es de aproximadamente el 80-90 % para el clobazam y el 70 % para el N-desmetilclobazam.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'The in vitro plasma protein binding of clobazam and N-desmethylclobazam is approximately 80-90% and 70%, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor GABA-A (sitio de las benzodiazepinas)',
        efecto: 'Su mecanismo exacto no se conoce del todo, pero se cree que potencia la neurotransmisión GABAérgica al unirse al sitio de las benzodiazepinas del receptor GABA-A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo exacto no se conoce del todo, pero se cree que potencia la neurotransmisión GABAérgica al unirse al sitio de las benzodiazepinas del receptor GABA-A.',
            ref: {
              f: 'dailymed-clobazam',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The exact mechanism of action for clobazam, a 1,5-benzodiazepine, is not fully understood but is thought to involve potentiation of GABAergic neurotransmission resulting from binding at the benzodiazepine site of the GABA A receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa en el hígado: solo alrededor del 2 % de la dosis aparece inalterado en la orina y el 1 % en las heces; la vía principal es la N-desmetilación, sobre todo por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa en el hígado: solo alrededor del 2 % de la dosis aparece inalterado en la orina y el 1 % en las heces; la vía principal es la N-desmetilación, sobre todo por la CYP3A4.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'Clobazam is extensively metabolized in the liver, with approximately 2% of the dose recovered in urine and 1% in feces as unchanged drug',
            codigo: '43682-4'
          }
        },
        {
          t: 'La vía metabólica principal es la N-desmetilación, sobre todo por la CYP3A4 y, en menor medida, por la CYP2C19 y la CYP2B6.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'The major metabolic pathway of clobazam involves N-demethylation, primarily by CYP3A4 and to a lesser extent by CYP2C19 and CYP2B6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetilclobazam',
          actividad: 'activo',
          nota: 'Metabolito activo y principal circulante: de 1/5 a igual potencia que el clobazam; sus concentraciones son 3-5 veces mayores.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'N-desmethylclobazam, an active metabolite, is the major circulating metabolite in humans, and at therapeutic doses, plasma concentrations are 3-5 times higher than those of the parent compound',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El N-desmetilclobazam y sus metabolitos suponen alrededor del 94 % de los componentes relacionados con el fármaco en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El N-desmetilclobazam y sus metabolitos suponen alrededor del 94 % de los componentes relacionados con el fármaco en la orina.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'N-desmethylclobazam and its metabolites comprise ~94% of the total drug-related components in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las semividas de eliminación medias estimadas son de 36-42 horas para el clobazam y de 71-82 horas para el N-desmetilclobazam.',
          ref: {
            f: 'dailymed-clobazam',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated mean elimination half-lives (t 1/2 ) of clobazam and N-desmethylclobazam were 36-42 hours and 71-82 hours, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (comprimido, en ayunas)',
      valor: '0,5-4',
      unidad: 'h',
      analito: 'clobazam',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-clobazam',
        sec: '12.3 · Farmacocinética',
        cita: 'ranged from 0.5 to 4 hours after single- or multiple-dose administrations',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a una solución oral',
      valor: '≈ 100',
      unidad: '%',
      analito: 'clobazam',
      ref: {
        f: 'dailymed-clobazam',
        sec: '12.3 · Farmacocinética',
        cita: 'The relative bioavailability of clobazam tablets compared to an oral solution is approximately 100%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '80-90',
      unidad: '%',
      analito: 'clobazam',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-clobazam',
        sec: '12.3 · Farmacocinética',
        cita: 'plasma protein binding of clobazam and N-desmethylclobazam is approximately 80-90% and 70%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en el estado estacionario',
      valor: '100 (aprox.)',
      unidad: 'L',
      analito: 'clobazam',
      ref: {
        f: 'dailymed-clobazam',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution at steady state was approximately 100 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación del clobazam',
      valor: '36-42',
      unidad: 'h',
      analito: 'clobazam',
      ref: {
        f: 'dailymed-clobazam',
        sec: '12.3 · Farmacocinética',
        cita: 'clobazam and N-desmethylclobazam were 36-42 hours and 71-82 hours, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-clobazam', 'de03bd69-2dca-459c-93b4-541fd3e9571c', 'ONFI (CLOBAZAM) TABLET ONFI (CLOBAZAM) SUSPENSION', 'Onfi', '44', '2026-11-13', '2026-11-15'),
    rengPubchem(2789, 'clobazam', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
