import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mitotano',
    nombre: 'Mitotano',
    clase: 'Citotóxico suprarrenal',
    sinonimos: [ 'mitotane', 'Lysodren' ],
    formula: 'C14H10Cl4',
    masaMolar: 320,
    smiles: 'C1=CC=C(C(=C1)C(C2=CC=C(C=C2)Cl)C(Cl)Cl)Cl',
    inchikey: 'JWBOIMRXGHLCPP-UHFFFAOYSA-N',
    cid: 4211,
    iupac: '1-chloro-2-[2,2-dichloro-1-(4-chlorophenyl)ethyl]benzene',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'mitotano-oral',
      producto: 'Lysodren · comprimido',
      titular: 'ESTEVE PHARMACEUTICALS, S.A.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '500 mg por comprimido, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'polyethylene glycol 3350', 'silicon dioxide', 'starch, corn' ],
      usos: {
        t: 'Tratamiento del carcinoma corticosuprarrenal inoperable, funcionante o no funcionante.',
        ref: {
          f: 'dailymed-mitotano',
          sec: '1 · Indicaciones',
          cita: 'LYSODREN is indicated for the treatment of patients with inoperable, functional or nonfunctional, adrenocortical carcinoma (ACC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mitotano',
      advertencias: [
        {
          titulo: 'Crisis suprarrenal en el shock, el traumatismo grave o la infección',
          texto: 'Aumenta el riesgo de crisis suprarrenal en esas situaciones, que puede ser mortal; suspenderlo y dar esteroides.',
          organos: [],
          ref: {
            f: 'dailymed-mitotano',
            sec: 'Advertencia destacada',
            cita: 'Patients treated with LYSODREN are at increased risk for developing adrenal crisis in the setting of shock, severe trauma or infection that may lead to death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Toxicidad del sistema nervioso central',
          texto: 'Hacer valoraciones conductuales y neurológicas y medir el mitotano en plasma de forma periódica.',
          organos: [],
          ref: {
            f: 'dailymed-mitotano',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor behavioral and neurologic assessments and mitotane plasma levels at regular intervals',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas antes de empezar, durante el ajuste de dosis y periódicamente.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-mitotano',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests prior to starting treatment with LYSODREN, during dose titration, and periodically during treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: anorexia, molestias epigástricas, náuseas, vómitos, diarrea, mareo, vértigo, exantema, hipercolesterolemia, hipertrigliceridemia e hipotiroidismo, entre otras.',
          '34084-4',
          'Most common adverse reactions include: anorexia, epigastric discomfort, nausea, vomiting, diarrhea, dizziness, vertigo, rash, hypercholesterolemia, hypertriglyceridemia, hypothyroidism'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del carcinoma corticosuprarrenal inoperable, funcionante o no funcionante.',
    actua: 'Su mecanismo se desconoce: modifica el metabolismo periférico de los esteroides y suprime directamente la corteza suprarrenal.',
    recorrido: 'Tras su administración oral se absorbe el 40 % de la dosis; los datos sugieren que la comida grasa aumenta la absorción. Alrededor del 10 % de la dosis aparece en la orina como metabolito hidrosoluble y entre el 1 y el 17 % sale por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 500 mg white, round, biconvex, scored tablets',
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
      ocurre: 'Tras su administración oral se absorbe el 40 % de la dosis; los datos sugieren que la comida grasa aumenta la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras su administración oral se absorbe el 40 % de la dosis; los datos sugieren que la comida grasa aumenta la absorción.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of LYSODREN, 40% of the dose is absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con distintas formulaciones, la comida rica en grasas parece aumentar la absorción.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'Data with various mitotane formulations suggest that administration with high fat food enhances absorption of mitotane',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'tejidos', 'tejido-adiposo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se encuentra en la mayoría de los tejidos, pero se distribuye sobre todo en la grasa.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se encuentra en la mayoría de los tejidos, pero se distribuye sobre todo en la grasa.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'Mitotane is found in most tissues of the body; however, fat is the primary site of distribution',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Corteza suprarrenal',
        efecto: 'Su mecanismo se desconoce: modifica el metabolismo periférico de los esteroides y suprime directamente la corteza suprarrenal.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo se desconoce: modifica el metabolismo periférico de los esteroides y suprime directamente la corteza suprarrenal.',
            ref: {
              f: 'dailymed-mitotano',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Mitotane modifies the peripheral metabolism of steroids and directly suppresses the adrenal cortex',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "Tiene metabolismo hepático y extrahepático; se transforma en un metabolito hidrosoluble y su metabolito circulante principal es el o,p'-DDA.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "Tiene metabolismo hepático y extrahepático; se transforma en un metabolito hidrosoluble y su metabolito circulante principal es el o,p'-DDA.",
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'Mitotane metabolism includes hepatic and extrahepatic metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: "o,p'-DDA (ácido 1,1-(o,p'-diclorodifenil)acético)",
          actividad: 'desconocida',
          nota: 'Metabolito circulante principal; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: "Mitotane is metabolized to 1,1-(o,p'-dichlorodiphenyl) acetic acid (o,p'-DDA), as the major circulating metabolite",
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 10 % de la dosis aparece en la orina como metabolito hidrosoluble y entre el 1 y el 17 % sale por la bilis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 10 % de la dosis aparece en la orina como metabolito hidrosoluble y entre el 1 y el 17 % sale por la bilis.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 10% of the administered dose is recovered in the urine as a water-soluble metabolite',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una cantidad variable de metabolito (1-17 %) se excreta en la bilis.',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'A variable amount of metabolite (1%-17%) is excreted in the bile',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras suspenderlo, la semivida plasmática terminal va de 18 a 159 días (mediana de 53 días).',
          ref: {
            f: 'dailymed-mitotano',
            sec: '12.3 · Farmacocinética',
            cita: 'the plasma terminal half-life ranges from 18 to 159 days (median 53 days)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'otra',
      nombre: 'Fracción absorbida',
      valor: '40',
      unidad: '% de la dosis',
      analito: 'mitotano',
      ref: {
        f: 'dailymed-mitotano',
        sec: '12.3 · Farmacocinética',
        cita: 'Following oral administration of LYSODREN, 40% of the dose is absorbed',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Mediana de la semivida plasmática terminal',
      valor: '53',
      unidad: 'días',
      analito: 'mitotano',
      condiciones: 'tras suspenderlo',
      ref: {
        f: 'dailymed-mitotano',
        sec: '12.3 · Farmacocinética',
        cita: 'the plasma terminal half-life ranges from 18 to 159 days (median 53 days)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina como metabolito',
      valor: '10 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolito hidrosoluble',
      ref: {
        f: 'dailymed-mitotano',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 10% of the administered dose is recovered in the urine as a water-soluble metabolite',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mitotano', '4046a224-8832-daa2-e063-6294a90a11d7', 'LYSODREN (MITOTANE) TABLET', 'Lysodren', '18', '2026-08-06', '2026-11-19'),
    rengPubchem(4211, 'mitotane', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
