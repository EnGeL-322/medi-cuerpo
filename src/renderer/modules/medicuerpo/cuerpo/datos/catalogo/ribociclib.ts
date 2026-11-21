import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ribociclib',
    nombre: 'Ribociclib',
    clase: 'Inhibidor de las cinasas dependientes de ciclinas 4 y 6 (CDK4/6)',
    sinonimos: [ 'ribociclib succinate', 'Kisqali' ],
    formula: 'C23H30N8O',
    masaMolar: 434.5,
    smiles: 'CN(C)C(=O)C1=CC2=CN=C(N=C2N1C3CCCC3)NC4=NC=C(C=C4)N5CCNCC5',
    inchikey: 'RHXHGRAEPCAFML-UHFFFAOYSA-N',
    cid: 44631912,
    iupac: '7-cyclopentyl-N,N-dimethyl-2-[(5-piperazin-1-yl-2-pyridinyl)amino]pyrrolo[2,3-d]pyrimidine-6-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ribociclib-oral',
      producto: 'KISQALI · comprimido recubierto con película',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Succinato de ribociclib',
        ref: {
          f: 'dailymed-ribociclib',
          sec: '11 · Descripción',
          cita: '200 mg of ribociclib free base (equivalent to 254.40 mg ribociclib succinate)',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'ferrosoferric oxide',
        'ferric oxide red',
        'lecithin, soybean',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'xanthan gum'
      ],
      usos: {
        t: 'Tratamiento del cáncer de mama HR+/HER2− precoz (adyuvante) o avanzado, en combinación con hormonoterapia.',
        ref: {
          f: 'dailymed-ribociclib',
          sec: '1 · Indicaciones',
          cita: 'in combination with an aromatase inhibitor for the adjuvant treatment of adults with hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative stage II and III earl',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ribociclib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Puede ser grave o mortal; vigilar los síntomas pulmonares y suspender si es recurrente o grave.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-ribociclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Pueden aparecer síndrome de Stevens-Johnson, necrólisis epidérmica tóxica y DRESS; suspender de forma definitiva.',
          organos: [],
          ref: {
            f: 'dailymed-ribociclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'SCARs including Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN), and drug-reaction with eosinophilia and systemic symptoms (DRESS) can occur with KISQALI treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Prolonga el QT de forma dependiente de la concentración; hacer ECG y electrolitos antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-ribociclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'KISQALI has been shown to prolong the QT interval in a concentration-dependent manner',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En cáncer de mama precoz, las más frecuentes (20 % o más, con laboratorio): descensos de linfocitos, leucocitos, neutrófilos y hemoglobina, aumento de ALT y AST, infecciones y aumento de creatinina.',
          '34084-4',
          'the most common (incidence ≥ 20%) adverse reactions, including laboratory abnormalities, are lymphocytes decreased, leukocytes decreased, neutrophils decreased, hemoglobin decreased'
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
    contiene: 'Comprimido recubierto con película: 200 mg por comprimido, según la etiqueta; el activo va como succinato de ribociclib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de mama HR+/HER2− precoz (adyuvante) o avanzado, en combinación con hormonoterapia.',
    actua: 'Inhibe CDK4 y CDK6, reduce la fosforilación de la proteína del retinoblastoma y detiene el ciclo celular en G1.',
    recorrido: 'El tmax está entre 1 y 4 horas y la biodisponibilidad absoluta media es del 65,8 %; una comida grasa no produce cambios relevantes. De la dosis marcada se recuperó el 92 % en 22 días: el 69 % en las heces y el 23 % en la orina.'
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
            f: 'dailymed-ribociclib',
            sec: '11 · Descripción',
            cita: 'KISQALI film-coated tablets are supplied for oral administration',
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
      ocurre: 'El tmax está entre 1 y 4 horas y la biodisponibilidad absoluta media es del 65,8 %; una comida grasa no produce cambios relevantes.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tmax está entre 1 y 4 horas y la biodisponibilidad absoluta media es del 65,8 %; una comida grasa no produce cambios relevantes.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of ribociclib after a single oral dose of 600 mg was 65.8%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El tmax tras la toma está entre 1 y 4 horas.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The T max following KISQALI administration was between 1 and 4 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor del 70 % a las proteínas in vitro; el volumen de distribución aparente en estado estacionario es de 1 090 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 70 % a las proteínas in vitro; el volumen de distribución aparente en estado estacionario es de 1 090 L.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ribociclib protein binding in vitro was approximately 70% and independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 1 090 L.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution at steady-state (Vss/F) was 1090 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'CDK4 y CDK6',
        efecto: 'Inhibe CDK4 y CDK6, reduce la fosforilación de la proteína del retinoblastoma y detiene el ciclo celular en G1.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe CDK4 y CDK6, reduce la fosforilación de la proteína del retinoblastoma y detiene el ciclo celular en G1.',
            ref: {
              f: 'dailymed-ribociclib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ribociclib is an inhibitor of cyclin-dependent kinase (CDK) 4 and 6',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro reduce la fosforilación de pRb, detiene el ciclo en G1 y disminuye la proliferación.',
            ref: {
              f: 'dailymed-ribociclib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'ribociclib decreased pRb phosphorylation, resulting in arrest in the G1 phase of the cell cycle and reduced proliferation in breast cancer-derived models',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un metabolismo hepático extenso, sobre todo por la CYP3A4, por oxidación; el ribociclib es el 44 % de lo circulante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un metabolismo hepático extenso, sobre todo por la CYP3A4, por oxidación; el ribociclib es el 44 % de lo circulante.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ribociclib undergoes extensive hepatic metabolism mainly via CYP3A4 in humans',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'LEQ803 (M4, N-desmetil)',
          actividad: 'desconocida',
          nota: 'Metabolito circulante principal; la etiqueta no precisa su actividad en esta sección.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolite LEQ803 represented approximately 14% and 4% of the administered dose in feces and urine, respectively',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'De la dosis marcada se recuperó el 92 % en 22 días: el 69 % en las heces y el 23 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'De la dosis marcada se recuperó el 92 % en 22 días: el 69 % en las heces y el 23 % en la orina.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: '92% of the total administered radioactive dose was recovered within 22 days; 69% in feces and 23% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media es de 32,0 horas con 600 mg en pacientes con cáncer avanzado.',
          ref: {
            f: 'dailymed-ribociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma effective half-life (CV%) was 32.0 hours (63%)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer avanzado'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '65,8',
      unidad: '%',
      analito: 'ribociclib',
      ref: {
        f: 'dailymed-ribociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of ribociclib after a single oral dose of 600 mg was 65.8%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-4',
      unidad: 'h',
      analito: 'ribociclib',
      ref: {
        f: 'dailymed-ribociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The T max following KISQALI administration was between 1 and 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'ribociclib',
      ref: { f: 'dailymed-ribociclib', sec: '12.3 · Farmacocinética', cita: 'Ribociclib protein binding in vitro was approximately 70%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '1090',
      unidad: 'L',
      analito: 'ribociclib',
      ref: {
        f: 'dailymed-ribociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution at steady-state (Vss/F) was 1090 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media',
      valor: '32,0',
      unidad: 'h',
      analito: 'ribociclib',
      poblacion: 'pacientes con cáncer avanzado',
      condiciones: '600 mg',
      ref: {
        f: 'dailymed-ribociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma effective half-life (CV%) was 32.0 hours (63%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '25,5',
      unidad: 'L/h',
      analito: 'ribociclib',
      poblacion: 'pacientes con cáncer avanzado',
      condiciones: '600 mg',
      ref: {
        f: 'dailymed-ribociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean apparent oral clearance (CL/F) was 25.5 L/hr (66%) at steady-state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '69',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-ribociclib',
        sec: '12.3 · Farmacocinética',
        cita: '92% of the total administered radioactive dose was recovered within 22 days; 69% in feces and 23% in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ribociclib', 'aaeaef94-f3f5-4367-8ea2-b181d7be2da8', 'KISQALI (RIBOCICLIB) TABLET, FILM COATED', 'KISQALI', '28', '2026-07-13', '2026-11-19'),
    rengPubchem(44631912, 'ribociclib succinate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
