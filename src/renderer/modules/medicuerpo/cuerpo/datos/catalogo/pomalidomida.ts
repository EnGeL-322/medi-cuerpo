import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pomalidomida',
    nombre: 'Pomalidomida',
    clase: 'Inmunomodulador análogo de la talidomida',
    sinonimos: [ 'pomalidomide', 'Pomalyst' ],
    formula: 'C13H11N3O4',
    masaMolar: 273.24,
    smiles: 'C1CC(=O)NC(=O)C1N2C(=O)C3=C(C2=O)C(=CC=C3)N',
    inchikey: 'UVSMNLNDYGZFPF-UHFFFAOYSA-N',
    cid: 134780,
    iupac: '4-amino-2-(2,6-dioxopiperidin-3-yl)isoindole-1,3-dione',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'pomalidomida-oral',
      producto: 'Pomalyst · cápsula',
      titular: 'CELGENE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '1 mg, 2 mg, 3 mg o 4 mg por cápsula, según la etiqueta',
      excipientes: [ 'mannitol', 'starch, corn', 'sodium stearyl fumarate' ],
      usos: {
        t: 'Tratamiento, junto con dexametasona, del mieloma múltiple en adultos que han recibido al menos dos tratamientos previos, incluidos la lenalidomida y un inhibidor del proteasoma.',
        ref: {
          f: 'dailymed-pomalidomida',
          sec: '1 · Indicaciones',
          cita: 'in combination with dexamethasone, for patients with multiple myeloma (MM) who have received at least two prior therapies including lenalidomide and a proteasome inhibitor',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pomalidomida',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Es un análogo de la talidomida y está contraindicado durante el embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '5 · Advertencias y precauciones',
            cita: 'POMALYST is a thalidomide analogue and is contraindicated for use during pregnancy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Teratogenicidad de la talidomida',
          texto: 'La talidomida es un teratógeno humano conocido que causa defectos congénitos graves que ponen en peligro la vida.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-pomalidomida',
            sec: 'Advertencia destacada',
            cita: 'Thalidomide is a known human teratogen that causes severe life-threatening birth defects',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en el mieloma múltiple (30 % o más): fatiga y astenia, neutropenia, anemia, estreñimiento, náuseas, diarrea, disnea, infecciones respiratorias altas, dolor de espalda y fiebre.',
          '34084-4',
          'MM: Most common adverse reactions (≥30%) included fatigue and asthenia, neutropenia, anemia, constipation, nausea, diarrhea, dyspnea, upper-respiratory tract infections, back pain, and pyrexia'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura el síndrome de lisis tumoral.',
          '34084-4',
          'Tumor Lysis Syndrome [see Warnings and Precautions (5.11) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 1 mg, 2 mg, 3 mg o 4 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, junto con dexametasona, del mieloma múltiple en adultos que han recibido al menos dos tratamientos previos, incluidos la lenalidomida y un inhibidor del proteasoma.',
    actua: 'Es un análogo de la talidomida con propiedades inmunomoduladoras, antiangiogénicas y antineoplásicas; actúa a través de su diana, el cereblón, componente de un complejo de ubiquitina ligasa E3.',
    recorrido: 'Tras una dosis oral única, la concentración plasmática máxima se produce a las 2-3 horas en pacientes con mieloma múltiple o sarcoma de Kaposi. Tras una dosis oral única marcada, alrededor del 73 % de la radiactividad se eliminó por la orina y el 15 % por las heces; el 2 % y el 8 % de la dosis salieron como pomalidomida inalterada por la orina y las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules:1 mg, dark blue opaque cap and yellow opaque body',
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
      ocurre: 'Tras una dosis oral única, la concentración plasmática máxima se produce a las 2-3 horas en pacientes con mieloma múltiple o sarcoma de Kaposi.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis oral única, la concentración plasmática máxima se produce a las 2-3 horas en pacientes con mieloma múltiple o sarcoma de Kaposi.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'the maximum plasma concentration (C max ) for pomalidomide occurs at 2 to 3 hours postdose in patients with MM or KS',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasa y calorías, el Tmax se retrasa 2,5 horas y la Cmax y el AUC bajan en torno al 27 % y el 8 % en sujetos sanos.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'delays the T max by 2.5 hours, decreased mean plasma C max and AUC in healthy subjects by about 27% and 8%, respectively',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasa y calorías'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a las proteínas del plasma humano va del 12 % al 44 % y no depende de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma humano va del 12 % al 44 % y no depende de la concentración.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of pomalidomide ranges from 12% to 44% and is not concentration dependent',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio en el estado estacionario está entre 62 y 138 L en pacientes con mieloma o sarcoma de Kaposi.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Pomalidomide has a mean apparent volume of distribution (Vd/F) between 62 and 138 L at steady state in patients with MM or KS',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se distribuye en el semen de sujetos sanos a aproximadamente el 67 % de la concentración plasmática.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Pomalidomide is distributed in semen of healthy subjects at a concentration of approximately 67% of plasma level at 4 hours postdose',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'Cereblón (complejo ubiquitina ligasa E3)',
        efecto: 'Es un análogo de la talidomida con propiedades inmunomoduladoras, antiangiogénicas y antineoplásicas; actúa a través de su diana, el cereblón, componente de un complejo de ubiquitina ligasa E3.',
        lugar: [ 'sistema-inmunitario', 'medula-osea' ],
        datos: [
          {
            t: 'Es un análogo de la talidomida con propiedades inmunomoduladoras, antiangiogénicas y antineoplásicas; actúa a través de su diana, el cereblón, componente de un complejo de ubiquitina ligasa E3.',
            ref: {
              f: 'dailymed-pomalidomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pomalidomide is an analogue of thalidomide with immunomodulatory, antiangiogenic, and antineoplastic properties',
              codigo: '43679-0'
            }
          },
          {
            t: 'Sus actividades celulares están mediadas por el cereblón, componente de un complejo enzimático de ubiquitina ligasa E3 de tipo cullin ring.',
            ref: {
              f: 'dailymed-pomalidomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cellular activities of pomalidomide are mediated through its target cereblon, a component of a cullin ring E3 ubiquitin ligase enzyme complex',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado por la CYP1A2 y la CYP3A4; la CYP2C19 y la CYP2D6 contribuyen poco, según estudios in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado por la CYP1A2 y la CYP3A4; la CYP2C19 y la CYP2D6 contribuyen poco, según estudios in vitro.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Pomalidomide is primarily metabolized in the liver by CYP1A2 and CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral única marcada, alrededor del 73 % de la radiactividad se eliminó por la orina y el 15 % por las heces; el 2 % y el 8 % de la dosis salieron como pomalidomida inalterada por la orina y las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral única marcada, alrededor del 73 % de la radiactividad se eliminó por la orina y el 15 % por las heces; el 2 % y el 8 % de la dosis salieron como pomalidomida inalterada por la orina y las heces.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 73% and 15% of the radioactive dose was eliminated in urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática mediana es de 9,5 horas en sujetos sanos y de 7,5 horas en pacientes con mieloma o sarcoma de Kaposi.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Pomalidomide is eliminated with a median plasma half-life of 9.5 hours in healthy subjects and 7.5 hours in patients with MM or KS',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento corporal total medio (CL/F) es de 7-10 L/h.',
          ref: {
            f: 'dailymed-pomalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Pomalidomide has a mean total body clearance (CL/F) of 7-10 L/h in patients with MM or KS',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '2-3',
      unidad: 'h',
      analito: 'pomalidomida',
      poblacion: 'pacientes con mieloma múltiple o sarcoma de Kaposi',
      ref: {
        f: 'dailymed-pomalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'occurs at 2 to 3 hours postdose in patients with MM or KS',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '12-44',
      unidad: '%',
      analito: 'pomalidomida',
      ref: {
        f: 'dailymed-pomalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'Human plasma protein binding of pomalidomide ranges from 12% to 44%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (Vd/F)',
      valor: '62-138',
      unidad: 'L',
      analito: 'pomalidomida',
      poblacion: 'pacientes con mieloma múltiple o sarcoma de Kaposi',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-pomalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'between 62 and 138 L at steady state in patients with MM or KS',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática mediana',
      valor: '9,5',
      unidad: 'h',
      analito: 'pomalidomida',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-pomalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'median plasma half-life of 9.5 hours in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad eliminada por la orina',
      valor: '73 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única de pomalidomida marcada',
      ref: {
        f: 'dailymed-pomalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 73% and 15% of the radioactive dose was eliminated in urine and feces, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad eliminada por las heces',
      valor: '15 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única de pomalidomida marcada',
      ref: {
        f: 'dailymed-pomalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 73% and 15% of the radioactive dose was eliminated in urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pomalidomida', '2b25ef01-5c9e-11e1-b86c-0800200c9a66', 'POMALYST (POMALIDOMIDE) CAPSULE', 'Pomalyst', '26', '2025-05-12', '2026-11-15'),
    rengPubchem(134780, 'pomalidomide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
