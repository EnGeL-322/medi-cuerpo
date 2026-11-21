import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fondaparinux',
    nombre: 'Fondaparinux',
    clase: 'Anticoagulante (inhibidor selectivo del factor Xa)',
    sinonimos: [ 'fondaparinux', 'fondaparinux sodium', 'Arixtra' ],
    formula: 'C31H53N3O49S8',
    masaMolar: 1508.3,
    smiles: 'CO[C@@H]1[C@@H]([C@H]([C@@H]([C@H](O1)COS(=O)(=O)O)O[C@H]2[C@@H]([C@H]([C@@H]([C@@H](O2)C(=O)O)O[C@@H]3[C@@H]([C@H]([C@@H]([C@H](O3)COS(=O)(=O)O)O[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)C(=O)O)O[C@@H]5[C@@H]([C@H]([C@@H]([C@H](O5)COS(=O)(=O)O)O)O)NS(=O)(=O)O)O)O)OS(=O)(=O)O)NS(=O)(=O)O)O)OS(=O)(=O)O)O)NS(=O)(=O)O',
    inchikey: 'KANJSNBRCNMZMV-ABRZTLGGSA-N',
    cid: 5282448,
    iupac: '(2S,3S,4R,5R,6R)-6-[(2R,3R,4R,5R,6R)-6-[(2R,3S,4S,5R,6R)-2-carboxy-4-hydroxy-6-[(2R,3S,4R,5R,6S)-4-hydroxy-6-methoxy-5-(sulfoamino)-2-(sulfooxymethyl)oxan-3-yl]oxy-5-sulfooxyoxan-3-yl]oxy-5-(sulfoamino)-4-sulfooxy-2-(sulfooxymethyl)oxan-3-yl]oxy-3-[(2R,3R,4R,5S,6R)-4,5-dihydroxy-3-(sulfoamino)-6-(sulfooxymethyl)oxan-2-yl]oxy-4,5-dihydroxyoxane-2-carboxylic acid',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'fondaparinux-inyectable',
      producto: 'Arixtra · solución inyectable',
      titular: 'MYLAN INSTITUTIONAL LLC',
      mercado: 'EE. UU.',
      forma: 'Solución inyectable',
      formaFuente: 'INJECTION, SOLUTION',
      liberacion: 'no declarada',
      concentraciones: '2,5 mg/0,5 mL, 5 mg/0,4 mL, 7,5 mg/0,6 mL o 10 mg/0,8 mL de fondaparinux sódico en jeringa precargada monodosis, según la etiqueta',
      excipientes: [ 'sodium chloride', 'water' ],
      usos: {
        t: 'Profilaxis de la trombosis venosa profunda en adultos sometidos a cirugía de fractura de cadera, prótesis de cadera o de rodilla o cirugía abdominal, y tratamiento de la trombosis venosa profunda y de la embolia pulmonar aguda.',
        ref: {
          f: 'dailymed-fondaparinux',
          sec: '1 · Indicaciones',
          cita: 'ARIXTRA is a Factor Xa inhibitor (anticoagulant) indicated for',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fondaparinux',
      advertencias: [
        {
          titulo: 'Hematomas espinales o epidurales',
          texto: 'Pueden producirse hematomas epidurales o espinales en pacientes anticoagulados que reciben anestesia neuroaxial o se someten a punción espinal; pueden causar parálisis prolongada o permanente.',
          organos: [ 'nervios' ],
          ref: {
            f: 'dailymed-fondaparinux',
            sec: 'Advertencia destacada',
            cita: 'Epidural or spinal hematomas may occur in patients who are anticoagulated with low molecular weight heparins (LMWH), heparinoids, or fondaparinux sodium and are receiving neuraxial anesthesia or undergoing spinal puncture',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hemorragia',
          texto: 'Aumenta el riesgo de hemorragia en pacientes con riesgo de sangrado.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '5 · Advertencias y precauciones',
            cita: 'ARIXTRA increases the risk of hemorrhage in patients at risk for bleeding',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones graves más importantes son las complicaciones hemorrágicas.',
          '34084-4',
          'The most serious adverse reactions associated with the use of ARIXTRA are bleeding complications'
        ],
        [
          'La etiqueta describe además los hematomas espinales o epidurales, la hemorragia y la trombocitopenia.',
          '34084-4',
          'Spinal or epidural hematomas [see Warnings and Precautions (5.1) ]'
        ]
      ],
      familia: 'inyectable',
      vias: [ 'subcutanea' ],
      formaNormalizada: 'jeringa-precargada'
    }
  ],
  resumen: {
    contiene: 'Solución inyectable: 2,5 mg/0,5 mL, 5 mg/0,4 mL, 7,5 mg/0,6 mL o 10 mg/0,8 mL de fondaparinux sódico en jeringa precargada monodosis, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Profilaxis de la trombosis venosa profunda en adultos sometidos a cirugía de fractura de cadera, prótesis de cadera o de rodilla o cirugía abdominal, y tratamiento de la trombosis venosa profunda y de la embolia pulmonar aguda.',
    actua: 'Su actividad antitrombótica es el resultado de la inhibición selectiva del factor Xa mediada por la antitrombina III.',
    recorrido: 'Administrado por inyección subcutánea se absorbe rápida y completamente (biodisponibilidad absoluta del 100 %). Con función renal normal se elimina por la orina sobre todo como fármaco sin cambios: hasta el 77 % de una dosis en 72 horas; la semivida de eliminación es de 17 a 21 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'piel', 'tejido-adiposo' ],
      llega: 'La solución queda depositada bajo la piel, en el tejido subcutáneo.',
      ocurre: 'Jeringa precargada monodosis con solución inyectable subcutánea: el fármaco ya está disuelto y queda bajo la piel.',
      sigue: 'El fármaco pasa del tejido subcutáneo a la sangre.',
      datos: [
        {
          t: 'Jeringa precargada monodosis con solución inyectable subcutánea: el fármaco ya está disuelto y queda bajo la piel.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '3 · Formas y concentraciones',
            cita: 'Single-dose, prefilled syringes containing clear to practically clear and colorless liquid',
            codigo: '43678-2'
          }
        }
      ]
    },
    absorcion: {
      organos: [ 'piel', 'sangre' ],
      organosGenerales: [],
      llega: 'El fármaco pasa del tejido subcutáneo a la sangre.',
      ocurre: 'Administrado por inyección subcutánea se absorbe rápida y completamente (biodisponibilidad absoluta del 100 %).',
      sigue: 'Circula en la sangre unido sobre todo a la antitrombina III.',
      datos: [
        {
          t: 'Administrado por inyección subcutánea se absorbe rápida y completamente (biodisponibilidad absoluta del 100 %).',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'Fondaparinux sodium administered by subcutaneous injection is rapidly and completely absorbed (absolute bioavailability is 100%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'En varones jóvenes, la Cmax de 0,34 mg/L se alcanza en aproximadamente 2 horas.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'C max of 0.34 mg/L is reached in approximately 2 hours',
            codigo: '43682-4'
          },
          poblacion: 'varones jóvenes',
          condiciones: 'inyección subcutánea única'
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'El fármaco circula en la sangre.',
      ocurre: 'Se distribuye sobre todo en la sangre y solo en pequeña medida en el líquido extravascular (volumen de distribución aparente de 7 a 11 L); se une al menos en un 94 % y de forma específica a la antitrombina III.',
      sigue: 'Se elimina sin cambios sobre todo por la orina.',
      datos: [
        {
          t: 'Se distribuye sobre todo en la sangre y solo en pequeña medida en el líquido extravascular (volumen de distribución aparente de 7 a 11 L); se une al menos en un 94 % y de forma específica a la antitrombina III.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'distributes mainly in blood and only to a minor extent in extravascular fluid as evidenced by steady state and non-steady state apparent volume of distribution of 7 L to 11 L',
            codigo: '43682-4'
          }
        },
        {
          t: 'In vitro, se une en al menos un 94 % y de forma específica a la antitrombina III y no se une de forma significativa a otras proteínas del plasma ni a los glóbulos rojos.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'fondaparinux sodium is highly (at least 94%) and specifically bound to antithrombin III (ATIII)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Factor Xa (mediante antitrombina III)',
        efecto: 'Su actividad antitrombótica es el resultado de la inhibición selectiva del factor Xa mediada por la antitrombina III.',
        lugar: [ 'sangre' ],
        datos: [
          {
            t: 'Su actividad antitrombótica es el resultado de la inhibición selectiva del factor Xa mediada por la antitrombina III.',
            ref: {
              f: 'dailymed-fondaparinux',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The antithrombotic activity of fondaparinux sodium is the result of antithrombin III (ATIII)-mediated selective inhibition of Factor Xa',
              codigo: '43679-0'
            }
          },
          {
            t: 'Al neutralizar el factor Xa se interrumpe la cascada de la coagulación y se inhibe la formación de trombina y de trombos.',
            ref: {
              f: 'dailymed-fondaparinux',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Neutralization of Factor Xa interrupts the blood coagulation cascade and thus inhibits thrombin formation and thrombus development',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La etiqueta indica que no se ha investigado su metabolismo in vivo, porque la mayor parte de la dosis se elimina sin cambios por la orina con función renal normal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La etiqueta indica que no se ha investigado su metabolismo in vivo, porque la mayor parte de la dosis se elimina sin cambios por la orina con función renal normal.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'In vivo metabolism of fondaparinux has not been investigated since the majority of the administered dose is eliminated unchanged in urine in individuals with normal kidney function',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con función renal normal se elimina por la orina sobre todo como fármaco sin cambios: hasta el 77 % de una dosis en 72 horas; la semivida de eliminación es de 17 a 21 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con función renal normal se elimina por la orina sobre todo como fármaco sin cambios: hasta el 77 % de una dosis en 72 horas; la semivida de eliminación es de 17 a 21 horas.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'In individuals with normal kidney function, fondaparinux is eliminated in urine mainly as unchanged drug',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 17 a 21 horas.',
          ref: { f: 'dailymed-fondaparinux', sec: '12.3 · Farmacocinética', cita: 'The elimination half-life is 17 hours to 21 hours', codigo: '43682-4' }
        },
        {
          t: 'Hasta el 77 % de una dosis única subcutánea o intravenosa se elimina por la orina sin cambios en 72 horas.',
          ref: {
            f: 'dailymed-fondaparinux',
            sec: '12.3 · Farmacocinética',
            cita: 'up to 77% of a single subcutaneous or intravenous fondaparinux dose is eliminated in urine as unchanged drug in 72 hours',
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
      nombre: 'Biodisponibilidad absoluta por vía subcutánea',
      valor: '100',
      unidad: '%',
      analito: 'fondaparinux',
      ref: { f: 'dailymed-fondaparinux', sec: '12.3 · Farmacocinética', cita: 'absolute bioavailability is 100%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax tras una dosis subcutánea única',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'fondaparinux',
      poblacion: 'varones jóvenes',
      condiciones: 'dosis subcutánea única',
      ref: { f: 'dailymed-fondaparinux', sec: '12.3 · Farmacocinética', cita: 'C max of 0.34 mg/L is reached in approximately 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima tras una dosis subcutánea única',
      valor: '0,34',
      unidad: 'mg/L',
      analito: 'fondaparinux',
      poblacion: 'varones jóvenes',
      condiciones: 'dosis subcutánea única',
      ref: { f: 'dailymed-fondaparinux', sec: '12.3 · Farmacocinética', cita: 'C max of 0.34 mg/L is reached in approximately 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '7 a 11',
      unidad: 'L',
      analito: 'fondaparinux',
      poblacion: 'adultos sanos',
      condiciones: 'por vía intravenosa o subcutánea',
      ref: { f: 'dailymed-fondaparinux', sec: '12.3 · Farmacocinética', cita: 'apparent volume of distribution of 7 L to 11 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a la antitrombina III',
      valor: '≥ 94',
      unidad: '%',
      analito: 'fondaparinux',
      ref: {
        f: 'dailymed-fondaparinux',
        sec: '12.3 · Farmacocinética',
        cita: 'highly (at least 94%) and specifically bound to antithrombin III (ATIII)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '17 a 21',
      unidad: 'h',
      analito: 'fondaparinux',
      poblacion: 'personas con función renal normal',
      ref: { f: 'dailymed-fondaparinux', sec: '12.3 · Farmacocinética', cita: 'The elimination half-life is 17 hours to 21 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada sin cambios por la orina en 72 horas',
      valor: 'hasta 77',
      unidad: '% de la dosis',
      analito: 'fondaparinux',
      poblacion: 'personas sanas de hasta 75 años',
      ref: {
        f: 'dailymed-fondaparinux',
        sec: '12.3 · Farmacocinética',
        cita: 'up to 77% of a single subcutaneous or intravenous fondaparinux dose is eliminated in urine as unchanged drug in 72 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fondaparinux', 'd3b30c68-cf45-4b46-8ba6-72090f7ba01a', 'ARIXTRA (FONDAPARINUX SODIUM) INJECTION, SOLUTION', 'Arixtra', '13', '2025-02-03', '2026-11-15'),
    rengPubchem(5282448, 'fondaparinux', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
