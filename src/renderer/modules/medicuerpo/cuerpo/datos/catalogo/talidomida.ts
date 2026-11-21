import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'talidomida',
    nombre: 'Talidomida',
    clase: 'Inmunomodulador (se une al cereblón)',
    sinonimos: [ 'thalidomide', 'Thalomid' ],
    formula: 'C13H10N2O4',
    masaMolar: 258.23,
    smiles: 'C1CC(=O)NC(=O)C1N2C(=O)C3=CC=CC=C3C2=O',
    inchikey: 'UEJJHQNACJXSKW-UHFFFAOYSA-N',
    cid: 5426,
    iupac: '2-(2,6-dioxopiperidin-3-yl)isoindole-1,3-dione',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'talidomida-oral',
      producto: 'Thalomid · cápsula',
      titular: 'CELGENE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg, 150 mg o 200 mg por cápsula, según la etiqueta',
      excipientes: [ 'starch, corn', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento, con dexametasona, del mieloma múltiple de nuevo diagnóstico y tratamiento agudo de las manifestaciones cutáneas del eritema nudoso leproso.',
        ref: {
          f: 'dailymed-talidomida',
          sec: '1 · Indicaciones',
          cita: 'in combination with dexamethasone is indicated for the treatment of patients with newly diagnosed multiple myeloma (MM)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-talidomida',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Tomada en el embarazo puede causar defectos congénitos graves o la muerte embriofetal.',
          organos: [],
          ref: {
            f: 'dailymed-talidomida',
            sec: 'Advertencia destacada',
            cita: 'If THALOMID is taken during pregnancy, it can cause severe birth defects or embryo-fetal death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Neuropatía periférica',
          texto: 'Suspenderla si aparecen síntomas de neuropatía periférica inducida, si procede.',
          organos: [],
          ref: {
            f: 'dailymed-talidomida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue THALOMID if symptoms of drug-induced peripheral neuropathy occur, if clinically appropriate',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Tromboembolia venosa y arterial',
          texto: 'Valorar la tromboprofilaxis según los factores de riesgo de cada paciente.',
          organos: [],
          ref: {
            f: 'dailymed-talidomida',
            sec: '5 · Advertencias y precauciones',
            cita: "Consider thromboprophylaxis based on an assessment of individual patients' underlying risk factors",
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Suspenderla ante reacciones graves.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-talidomida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Cutaneous Reactions: Discontinue THALOMID for severe reactions',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el mieloma múltiple, las más frecuentes (20 % o más): fatiga, hipocalcemia, edema, estreñimiento, neuropatía sensitiva, disnea, debilidad muscular, leucopenia y neutropenia, entre otras.',
          '34084-4',
          'The most common adverse reactions (≥20%) are fatigue, hypocalcemia, edema, constipation, neuropathy-sensory, dyspnea, muscle weakness, leukopenia, neutropenia'
        ],
        [
          'En el eritema nudoso leproso, las más frecuentes (10 % o más): somnolencia, exantema y cefalea.',
          '34084-4',
          'The most common adverse reactions (≥10%) are somnolence, rash, and headache'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 50 mg, 100 mg, 150 mg o 200 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con dexametasona, del mieloma múltiple de nuevo diagnóstico y tratamiento agudo de las manifestaciones cutáneas del eritema nudoso leproso.',
    actua: 'Su mecanismo no se conoce del todo; sus acciones celulares se deben a su diana, el cereblón, parte de un complejo enzimático ligasa de ubiquitina E3; tiene propiedades inmunomoduladoras, antiinflamatorias y antiangiogénicas.',
    recorrido: 'Más del 90 % de la radiactividad se recupera en la orina, lo que indica una buena absorción oral; su baja solubilidad en agua parece frenar la velocidad de absorción. Se excreta sobre todo por la orina (91,9 % de la dosis marcada), casi todo como metabolitos de hidrólisis; la excreción fecal es menor del 2 %.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-talidomida', sec: '3 · Formas y concentraciones', cita: '50 mg white, printed with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Más del 90 % de la radiactividad se recupera en la orina, lo que indica una buena absorción oral; su baja solubilidad en agua parece frenar la velocidad de absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Más del 90 % de la radiactividad se recupera en la orina, lo que indica una buena absorción oral; su baja solubilidad en agua parece frenar la velocidad de absorción.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'greater than 90% of the total radioactivity is recovered in urine suggesting good oral absorption',
            codigo: '43682-4'
          }
        },
        {
          t: 'La escasa solubilidad acuosa de la talidomida puede frenar la velocidad de absorción.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'the poor solubility of thalidomide in aqueous media may be hindering the rate of absorption',
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
      ocurre: 'En el plasma humano, la unión a proteínas es del 55 % para la (+)-(R)-talidomida y del 66 % para la (-)-(S)-talidomida.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En el plasma humano, la unión a proteínas es del 55 % para la (+)-(R)-talidomida y del 66 % para la (-)-(S)-talidomida.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'In human plasma, the geometric mean plasma protein binding was 55% and 66%, respectively, for (+)-(R)- and (-)-(S)-thalidomide',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cereblón',
        efecto: 'Su mecanismo no se conoce del todo; sus acciones celulares se deben a su diana, el cereblón, parte de un complejo enzimático ligasa de ubiquitina E3; tiene propiedades inmunomoduladoras, antiinflamatorias y antiangiogénicas.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no se conoce del todo; sus acciones celulares se deben a su diana, el cereblón, parte de un complejo enzimático ligasa de ubiquitina E3; tiene propiedades inmunomoduladoras, antiinflamatorias y antiangiogénicas.',
            ref: {
              f: 'dailymed-talidomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cellular activities of thalidomide are mediated through its target cereblon, a component of a cullin ring E3 ubiquitin ligase enzyme complex',
              codigo: '43679-0'
            }
          },
          {
            t: 'Tiene propiedades inmunomoduladoras, antiinflamatorias y antiangiogénicas.',
            ref: {
              f: 'dailymed-talidomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'THALOMID possesses immunomodulatory, anti-inflammatory and antiangiogenic properties',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No es sustrato del citocromo P450; el fármaco inalterado es el componente circulante predominante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'No es sustrato del citocromo P450; el fármaco inalterado es el componente circulante predominante.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Thalidomide is not a substrate of the cytochrome P450 system',
            codigo: '43682-4'
          }
        },
        {
          t: 'El fármaco inalterado es el componente circulante predominante.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'In a 14 C-radiolabel ADME study in humans, unchanged drug is the predominant circulating component',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta sobre todo por la orina (91,9 % de la dosis marcada), casi todo como metabolitos de hidrólisis; la excreción fecal es menor del 2 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta sobre todo por la orina (91,9 % de la dosis marcada), casi todo como metabolitos de hidrólisis; la excreción fecal es menor del 2 %.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'In humans, 14 C-thalidomide is primarily excreted in urine (91.9% of the radioactive dose) mainly as hydrolytic metabolites while fecal excretion is minor (<2% of the dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La talidomida inalterada apenas se elimina por el riñón (menos del 3,5 % de la dosis).',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Unchanged thalidomide is not eliminated by the kidney to a notable degree (<3.5% of the dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media tras dosis únicas de 50 a 400 mg es de 5,5 a 7,3 horas.',
          ref: {
            f: 'dailymed-talidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean elimination half-life of thalidomide in plasma following single oral doses between 50 mg and 400 mg was 5.5 to 7.3 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (enantiómeros R y S)',
      valor: '55-66',
      unidad: '%',
      analito: 'talidomida',
      ref: {
        f: 'dailymed-talidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'the geometric mean plasma protein binding was 55% and 66%, respectively, for (+)-(R)- and (-)-(S)-thalidomide',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '5,5-7,3',
      unidad: 'h',
      analito: 'talidomida',
      condiciones: 'dosis únicas de 50 a 400 mg',
      ref: {
        f: 'dailymed-talidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-life of thalidomide in plasma following single oral doses between 50 mg and 400 mg was 5.5 to 7.3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada en la orina',
      valor: '91,9',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-talidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'primarily excreted in urine (91.9% of the radioactive dose)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-talidomida', '2eda833b-1357-4ed4-a093-194524fcb061', 'THALOMID (THALIDOMIDE) CAPSULE', 'Thalomid', '26', '2026-10-26', '2026-11-19'),
    rengPubchem(5426, 'thalidomide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
