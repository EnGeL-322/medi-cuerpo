import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'belumosudil',
    nombre: 'Belumosudil',
    clase: 'Inhibidor de la cinasa ROCK (enfermedad injerto contra huésped crónica)',
    sinonimos: [ 'belumosudil', 'Rezurock' ],
    formula: 'C26H24N6O2',
    masaMolar: 452.5,
    smiles: 'CC(C)NC(=O)COC1=CC=CC(=C1)C2=NC3=CC=CC=C3C(=N2)NC4=CC5=C(C=C4)NN=C5',
    inchikey: 'GKHIVNAUVKXIIY-UHFFFAOYSA-N',
    cid: 11950170,
    iupac: '2-[3-[4-(1H-indazol-5-ylamino)quinazolin-2-yl]phenoxy]-N-propan-2-ylacetamide',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'belumosudil-oral',
      producto: 'Rezurock · comprimido',
      titular: 'KADMON PHARMACEUTICALS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'hypromellose, unspecified',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de la enfermedad injerto contra huésped crónica en adultos y desde 12 años tras el fracaso de al menos dos líneas de tratamiento sistémico.',
        ref: {
          f: 'dailymed-belumosudil',
          sec: '1 · Indicaciones',
          cita: 'REZUROCK is indicated for the treatment of adult and pediatric patients 12 years and older with chronic graft-versus-host disease (chronic GVHD) after failure of at least two prior lines of systemic therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-belumosudil',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Por los hallazgos en animales y su mecanismo puede dañar al feto; las mujeres con capacidad de gestar deben usar anticoncepción eficaz.',
          organos: [],
          ref: {
            f: 'dailymed-belumosudil',
            sec: '5 · Advertencias y precauciones',
            cita: 'Based on findings in animals and its mechanism of action, REZUROCK can cause fetal harm when administered to a pregnant woman',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más, con alteraciones de laboratorio): infecciones, astenia, náuseas, diarrea, disnea, tos, edema, hemorragia, dolor abdominal y musculoesquelético, cefalea, fosfato bajo, GGT alta, linfocitos bajos e hipertensión.',
          '34084-4',
          'most common (≥20%) adverse reactions, including laboratory abnormalities, are infections, asthenia, nausea, diarrhea, dyspnea, cough, edema, hemorrhage, abdominal pain, musculoskeletal pain, headache'
        ],
        [
          'El 18 % de los pacientes dejó el tratamiento de forma definitiva por reacciones adversas.',
          '34084-4',
          'Permanent discontinuation of REZUROCK due to adverse reactions occurred in 18% of patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la enfermedad injerto contra huésped crónica en adultos y desde 12 años tras el fracaso de al menos dos líneas de tratamiento sistémico.',
    actua: 'Inhibe la cinasa ROCK (sobre todo ROCK2 y también ROCK1); en ensayos ex vivo e in vitro con linfocitos T humanos reduce las respuestas proinflamatorias regulando la fosforilación de STAT3/STAT5 y el equilibrio Th17/Treg.',
    recorrido: 'En estado estacionario la mediana del Tmax fue de 1,26 a 2,53 horas y la biodisponibilidad media de una dosis única del 64 %. Tras una dosis marcada, el 85 % de la radiactividad se recuperó en las heces (30 % sin cambios) y menos del 5 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '3 · Formas y concentraciones',
            cita: 'Each 200 mg belumosudil tablet is a pale yellow film-coated oblong tablet',
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
      ocurre: 'En estado estacionario la mediana del Tmax fue de 1,26 a 2,53 horas y la biodisponibilidad media de una dosis única del 64 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En estado estacionario la mediana del Tmax fue de 1,26 a 2,53 horas y la biodisponibilidad media de una dosis única del 64 %.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (%CV) bioavailability was 64% (17%) following a single belumosudil dose in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del Tmax en estado estacionario fue de 1,26 a 2,53 horas.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'Median T max of belumosudil at steady state was 1.26 to 2.53 hours following administration of 200 mg once daily or twice daily in patients',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas y calorías, la Cmax y el AUC aumentaron 2,2 y 2 veces.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'Belumosudil C max and AUC increased 2.2 times and 2 times, respectively, following administration of a single belumosudil dose with a high-fat and high-calorie meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas y calorías'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 99,9 % a la albúmina sérica humana y en un 98,6 % a la glicoproteína ácida α1; el volumen de distribución medio es de 184 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 99,9 % a la albúmina sérica humana y en un 98,6 % a la glicoproteína ácida α1; el volumen de distribución medio es de 184 L.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'Belumosudil binding to human serum albumin and human α 1 -acid glycoprotein was 99.9% and 98.6%, respectively, in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución geométrico medio tras una dosis única fue de 184 L.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean volume of distribution after a single dose of belumosudil in healthy subjects was 184 L',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'dosis única'
        }
      ],
      accion: {
        diana: 'Cinasas ROCK2 y ROCK1',
        efecto: 'Inhibe la cinasa ROCK (sobre todo ROCK2 y también ROCK1); en ensayos ex vivo e in vitro con linfocitos T humanos reduce las respuestas proinflamatorias regulando la fosforilación de STAT3/STAT5 y el equilibrio Th17/Treg.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la cinasa ROCK (sobre todo ROCK2 y también ROCK1); en ensayos ex vivo e in vitro con linfocitos T humanos reduce las respuestas proinflamatorias regulando la fosforilación de STAT3/STAT5 y el equilibrio Th17/Treg.',
            ref: {
              f: 'dailymed-belumosudil',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Belumosudil is an inhibitor of rho-associated, coiled-coil containing protein kinase (ROCK) which inhibits ROCK2 and ROCK1 with IC 50 values of approximately 100 nM and 3 µM, respectively',
              codigo: '43679-0'
            }
          },
          {
            t: 'Regula la fosforilación de STAT3/STAT5 y desplaza el equilibrio Th17/Treg en ensayos con linfocitos T humanos.',
            ref: {
              f: 'dailymed-belumosudil',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Belumosudil down-regulated proinflammatory responses via regulation of STAT3/STAT5 phosphorylation and shifting Th17/Treg balance in ex-vivo or in vitro -human T cell assays',
              codigo: '43679-0'
            },
            condiciones: 'in vitro'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP3A y en menor medida por CYP2C8, CYP2D6 y UGT1A9.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP3A y en menor medida por CYP2C8, CYP2D6 y UGT1A9.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'Belumosudil is primarily metabolized by CYP3A and to a lesser extent by CYP2C8, CYP2D6, and UGT1A9, in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 85 % de la radiactividad se recuperó en las heces (30 % sin cambios) y menos del 5 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 85 % de la radiactividad se recuperó en las heces (30 % sin cambios) y menos del 5 % en la orina.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: '85% of radioactivity was recovered in feces (30% as unchanged) and less than 5% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media fue de 19 horas y el aclaramiento de 9,83 L/h en pacientes.',
          ref: {
            f: 'dailymed-belumosudil',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (%CV) elimination half-life of belumosudil was 19 hours (39%), and clearance was 9.83 L/hours (46%) in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad media',
      valor: '64',
      unidad: '%',
      analito: 'belumosudil',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-belumosudil',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) bioavailability was 64% (17%) following a single belumosudil dose in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax en estado estacionario',
      valor: '1,26-2,53',
      unidad: 'h',
      analito: 'belumosudil',
      poblacion: 'pacientes',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-belumosudil',
        sec: '12.3 · Farmacocinética',
        cita: 'Median T max of belumosudil at steady state was 1.26 to 2.53 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución geométrico medio',
      valor: '184',
      unidad: 'L',
      analito: 'belumosudil',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-belumosudil',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean volume of distribution after a single dose of belumosudil in healthy subjects was 184 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a la albúmina sérica (in vitro)',
      valor: '99,9',
      unidad: '%',
      analito: 'belumosudil',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-belumosudil',
        sec: '12.3 · Farmacocinética',
        cita: 'Belumosudil binding to human serum albumin and human α 1 -acid glycoprotein was 99.9% and 98.6%, respectively, in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '19',
      unidad: 'h',
      analito: 'belumosudil',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-belumosudil',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) elimination half-life of belumosudil was 19 hours (39%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '85',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-belumosudil',
        sec: '12.3 · Farmacocinética',
        cita: '85% of radioactivity was recovered in feces (30% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-belumosudil', '102e4ef4-7f84-4e34-8df1-479c24d1575d', 'REZUROCK (BELUMOSUDIL) TABLET', 'Rezurock', '11', '2026-04-09', '2026-11-19'),
    rengPubchem(11950170, 'belumosudil', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
