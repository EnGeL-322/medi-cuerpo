import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lenalidomida',
    nombre: 'Lenalidomida',
    clase: 'Inmunomodulador análogo de la talidomida',
    sinonimos: [ 'lenalidomide', 'Revlimid' ],
    formula: 'C13H13N3O3',
    masaMolar: 259.26,
    smiles: 'C1CC(=O)NC(=O)C1N2CC3=C(C2=O)C=CC=C3N',
    inchikey: 'GOTYRUGSSMKFNF-UHFFFAOYSA-N',
    cid: 216326,
    iupac: '3-(7-amino-3-oxo-1H-isoindol-2-yl)piperidine-2,6-dione',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'lenalidomida-oral',
      producto: 'Revlimid · cápsula',
      titular: 'CELGENE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg, 10 mg, 15 mg, 20 mg o 25 mg por cápsula, según la etiqueta',
      excipientes: [ 'anhydrous lactose', 'microcrystalline cellulose', 'croscarmellose sodium', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento de adultos con mieloma múltiple (con dexametasona o como mantenimiento tras un trasplante autólogo), entre otras indicaciones.',
        ref: { f: 'dailymed-lenalidomida', sec: '1 · Indicaciones', cita: 'Multiple myeloma (MM), in combination with dexamethasone', codigo: '34067-9' }
      },
      fuente: 'dailymed-lenalidomida',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Es un análogo de la talidomida y está contraindicada durante el embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '5 · Advertencias y precauciones',
            cita: 'REVLIMID is a thalidomide analogue and is contraindicated for use during pregnancy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Anomalías de las extremidades en monos',
          texto: 'La lenalidomida causó anomalías de las extremidades en un estudio de desarrollo en monos.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-lenalidomida',
            sec: 'Advertencia destacada',
            cita: 'Lenalidomide, a thalidomide analogue, caused limb abnormalities in a developmental monkey study',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en el mieloma múltiple (20 % o más): diarrea, fatiga, anemia, estreñimiento, neutropenia, leucopenia, edema periférico, insomnio, calambres, dolor abdominal, dolor de espalda, náuseas, astenia y fiebre, entre otras.',
          '34084-4',
          'MM: Most common adverse reactions (≥20%) include diarrhea, fatigue, anemia, constipation, neutropenia, leukopenia, peripheral edema, insomnia, muscle cramp/spasms, abdominal pain, back pain, nausea, asthenia, pyrexia'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la hipersensibilidad.',
          '34084-4',
          'Hypersensitivity [see Warnings and Precautions (5.15) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 2.5 mg, 5 mg, 10 mg, 15 mg, 20 mg o 25 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con mieloma múltiple (con dexametasona o como mantenimiento tras un trasplante autólogo), entre otras indicaciones.',
    actua: 'Es un análogo de la talidomida con propiedades inmunomoduladoras, antiangiogénicas y antineoplásicas; actúa a través del cereblón, componente de un complejo de ubiquitina ligasa E3.',
    recorrido: 'Tras dosis únicas y múltiples en pacientes con mieloma o síndrome mielodisplásico, las concentraciones plasmáticas máximas se produjeron entre 0,5 y 6 horas después de la dosis. La eliminación es principalmente renal: tras una dosis única marcada, alrededor del 90 % y el 4 % de la radiactividad se eliminó en diez días por la orina y por las heces.'
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
            f: 'dailymed-lenalidomida',
            sec: '11 · Descripción',
            cita: 'REVLIMID, a thalidomide analogue, is an immunomodulatory agent with antiangiogenic and antineoplastic properties',
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
      ocurre: 'Tras dosis únicas y múltiples en pacientes con mieloma o síndrome mielodisplásico, las concentraciones plasmáticas máximas se produjeron entre 0,5 y 6 horas después de la dosis.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras dosis únicas y múltiples en pacientes con mieloma o síndrome mielodisplásico, las concentraciones plasmáticas máximas se produjeron entre 0,5 y 6 horas después de la dosis.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Following single and multiple doses of REVLIMID in patients with MM or MDS, the maximum plasma concentrations occurred between 0.5 and 6 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasa, el AUC bajó alrededor del 20 % y la Cmax, el 50 %.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Administration of a single 25 mg dose of REVLIMID with a high-fat meal in healthy subjects reduces the extent of absorption, with an approximate 20% decrease in AUC and 50% decrease in C max',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasa'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro, la unión de la lenalidomida marcada a las proteínas del plasma es de aproximadamente el 30 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, la unión de la lenalidomida marcada a las proteínas del plasma es de aproximadamente el 30 %.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro [ 14 C]-lenalidomide binding to plasma proteins is approximately 30%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Está presente en el semen a las 2 horas (1379 ng por eyaculado) y a las 24 horas (35 ng por eyaculado) tras una dosis diaria de 25 mg.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Lenalidomide is present in semen at 2 hours (1379 ng/ejaculate) and 24 hours (35 ng/ejaculate) after the administration of REVLIMID 25 mg daily',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cereblón (complejo ubiquitina ligasa E3)',
        efecto: 'Es un análogo de la talidomida con propiedades inmunomoduladoras, antiangiogénicas y antineoplásicas; actúa a través del cereblón, componente de un complejo de ubiquitina ligasa E3.',
        lugar: [ 'sistema-inmunitario', 'medula-osea' ],
        datos: [
          {
            t: 'Es un análogo de la talidomida con propiedades inmunomoduladoras, antiangiogénicas y antineoplásicas; actúa a través del cereblón, componente de un complejo de ubiquitina ligasa E3.',
            ref: {
              f: 'dailymed-lenalidomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lenalidomide is an analogue of thalidomide with immunomodulatory, antiangiogenic, and antineoplastic properties',
              codigo: '43679-0'
            }
          },
          {
            t: 'Sus actividades celulares están mediadas por el cereblón, componente de un complejo enzimático de ubiquitina ligasa E3 de tipo cullin ring.',
            ref: {
              f: 'dailymed-lenalidomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cellular activities of lenalidomide are mediated through its target cereblon, a component of a cullin ring E3 ubiquitin ligase enzyme complex',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un metabolismo limitado: la lenalidomida inalterada es el componente circulante predominante en humanos.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un metabolismo limitado: la lenalidomida inalterada es el componente circulante predominante en humanos.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Lenalidomide undergoes limited metabolism. Unchanged lenalidomide is the predominant circulating component in humans',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-hidroxi-lenalidomida y N-acetil-lenalidomida',
          actividad: 'desconocida',
          nota: 'Cada uno supone menos del 5 % de los niveles del fármaco original en la sangre.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Two identified metabolites are 5-hydroxy-lenalidomide and N-acetyl-lenalidomide; each constitutes less than 5% of parent levels in circulation',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es principalmente renal: tras una dosis única marcada, alrededor del 90 % y el 4 % de la radiactividad se eliminó en diez días por la orina y por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es principalmente renal: tras una dosis única marcada, alrededor del 90 % y el 4 % de la radiactividad se eliminó en diez días por la orina y por las heces.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 90% and 4% of the radioactive dose was eliminated within ten days in urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 82 % de la dosis radiactiva se excretó como lenalidomida por la orina en 24 horas.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 82% of the radioactive dose was excreted as lenalidomide in the urine within 24 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de 3 horas en sujetos sanos y de 3 a 5 horas en pacientes.',
          ref: {
            f: 'dailymed-lenalidomida',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean half-life of lenalidomide is 3 hours in healthy subjects and 3 to 5 hours in patients with MM, MDS or MCL',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '0,5-6',
      unidad: 'h',
      analito: 'lenalidomida',
      poblacion: 'pacientes con mieloma o síndrome mielodisplásico',
      ref: {
        f: 'dailymed-lenalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'the maximum plasma concentrations occurred between 0.5 and 6 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'lenalidomida',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-lenalidomida', sec: '12.3 · Farmacocinética', cita: 'binding to plasma proteins is approximately 30%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '3',
      unidad: 'h',
      analito: 'lenalidomida',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-lenalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean half-life of lenalidomide is 3 hours in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad eliminada por la orina en diez días',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única de lenalidomida marcada',
      ref: {
        f: 'dailymed-lenalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 90% and 4% of the radioactive dose was eliminated within ten days in urine and feces, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad eliminada por las heces en diez días',
      valor: '4 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única de lenalidomida marcada',
      ref: {
        f: 'dailymed-lenalidomida',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 90% and 4% of the radioactive dose was eliminated within ten days in urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lenalidomida', '5fa97bf5-28a2-48f1-8955-f56012d296be', 'REVLIMID (LENALIDOMIDE) CAPSULE', 'Revlimid', '41', '2026-08-06', '2026-11-15'),
    rengPubchem(216326, 'lenalidomide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
