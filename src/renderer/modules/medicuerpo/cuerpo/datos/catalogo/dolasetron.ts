import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dolasetron',
    nombre: 'Dolasetrón',
    clase: 'Antagonista del receptor 5-HT3 (antiemético)',
    sinonimos: [ 'dolasetron mesylate', 'Anzemet' ],
    formula: 'C19H20N2O3',
    masaMolar: 324.4,
    smiles: 'C1[C@@H]2CC(C[C@H]3N2CC(=O)C1C3)OC(=O)C4=CNC5=CC=CC=C54',
    inchikey: 'UKTAZPQNNNJVKR-AKJUYKBHSA-N',
    cid: 3033818,
    iupac: '[(3S,7R)-10-oxo-8-azatricyclo[5.3.1.03,8]undecan-5-yl] 1H-indole-3-carboxylate',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'dolasetron-oral',
      producto: 'ANZEMET · comprimido recubierto con película',
      titular: 'VALIDUS PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Mesilato de dolasetrón', ref: { f: 'dailymed-dolasetron', sec: '11 · Descripción', cita: 'dolasetron mesylate', codigo: '34089-3' } },
      excipientes: [
        'croscarmellose sodium',
        'hypromelloses',
        'lactose, unspecified form',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'polysorbate 80',
        'starch, corn',
        'ferric oxide red',
        'titanium dioxide'
      ],
      usos: {
        t: 'Prevención de las náuseas y los vómitos de la quimioterapia moderadamente emetógena en adultos y niños desde los 2 años.',
        ref: {
          f: 'dailymed-dolasetron',
          sec: '1 · Indicaciones',
          cita: 'ANZEMET Tablets are indicated for the prevention of nausea and vomiting associated with moderately emetogenic cancer chemotherapy, including initial and repeat courses in adults and children 2 years and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dolasetron',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Prolonga el QT según la dosis; se han descrito torsade de pointes.',
          organos: [],
          ref: { f: 'dailymed-dolasetron', sec: 'Advertencias', cita: 'ANZEMET prolongs the QT interval in a dose dependent fashion', codigo: '34071-1' }
        },
        {
          titulo: 'Contraindicaciones de riesgo',
          texto: 'Evitarlo en el síndrome de QT largo congénito, la hipomagnesemia o la hipopotasemia.',
          organos: [],
          ref: {
            f: 'dailymed-dolasetron',
            sec: 'Advertencias',
            cita: 'Avoid ANZEMET in patients with congenital long QT syndrome, hypomagnesemia, or hypokalemia',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Prolongación del PR y del QRS',
          texto: 'Puede prolongar el PR y el QRS y causar bloqueo auriculoventricular, parada cardíaca y arritmias ventriculares graves.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-dolasetron',
            sec: 'Advertencias',
            cita: 'ANZEMET has been shown to cause dose dependent prolongation of the PR and QRS interval and reports of second or third degree atrioventricular block',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Con 25 o 100 mg, la más frecuente fue la cefalea (17,9 % y 22,9 %), seguida de fatiga, diarrea y bradicardia.',
          '34084-4',
          'Headache 42 (17.9%) 52 (22.9%) Fatigue 6 (2.6%) 13 (5.7%) Diarrhea 5 (2.1%) 12 (5.3%) Bradycardia 12 (5.1%)'
        ],
        [
          'Son los efectos descritos en 2 % o más de los pacientes con comprimidos de 25 o 100 mg en ensayos de náuseas y vómitos por quimioterapia.',
          '34084-4',
          'The following adverse events were reported in ≥2% of patients receiving either ANZEMET 25 mg or ANZEMET 100 mg tablets'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg por comprimido, según la etiqueta; el activo va como mesilato de dolasetrón. Los excipientes no son el principio activo.',
    usos: 'Prevención de las náuseas y los vómitos de la quimioterapia moderadamente emetógena en adultos y niños desde los 2 años.',
    actua: 'El dolasetrón y su metabolito activo, el hidrodolasetrón, son antagonistas selectivos del receptor 5-HT3 de la serotonina, con poca afinidad por los receptores de la dopamina.',
    recorrido: 'Se absorbe bien, pero apenas se detecta en plasma porque se transforma rápida y completamente en hidrodolasetrón, cuya biodisponibilidad aparente es de alrededor del 75 %; la comida no la modifica. Dos tercios de la dosis se recuperan en la orina y un tercio en las heces; el 61 % sale por la orina como hidrodolasetrón sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '11 · Descripción',
            cita: 'Each ANZEMET Tablet for oral administration contains dolasetron mesylate (as the monohydrate)',
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
      ocurre: 'Se absorbe bien, pero apenas se detecta en plasma porque se transforma rápida y completamente en hidrodolasetrón, cuya biodisponibilidad aparente es de alrededor del 75 %; la comida no la modifica.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien, pero apenas se detecta en plasma porque se transforma rápida y completamente en hidrodolasetrón, cuya biodisponibilidad aparente es de alrededor del 75 %; la comida no la modifica.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Oral dolasetron is well absorbed, although parent drug is rarely detected in plasma due to rapid and complete metabolism to the most clinically relevant species, hydrodolasetron',
            codigo: '34090-1'
          }
        },
        {
          t: 'La biodisponibilidad absoluta aparente, medida por el hidrodolasetrón, es de alrededor del 75 %.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'The apparent absolute bioavailability of oral dolasetron, determined by the major active metabolite hydrodolasetron, is approximately 75%',
            codigo: '34090-1'
          }
        },
        {
          t: 'La comida no afecta a la biodisponibilidad.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Food does not affect the bioavailability of dolasetron taken by mouth',
            codigo: '34090-1'
          }
        },
        {
          t: 'El hidrodolasetrón alcanza el pico hacia la hora de la toma.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Hydrodolasetron appears rapidly in plasma, with a maximum concentration occurring approximately 1 hour after dosing',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El hidrodolasetrón se une en un 69-77 % a las proteínas plasmáticas y se distribuye ampliamente, con un volumen aparente de 5,8 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El hidrodolasetrón se une en un 69-77 % a las proteínas plasmáticas y se distribuye ampliamente, con un volumen aparente de 5,8 L/kg.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Sixty-nine to 77% of hydrodolasetron is bound to plasma protein',
            codigo: '34090-1'
          }
        },
        {
          t: 'Se distribuye ampliamente, con un volumen de distribución aparente medio de 5,8 L/kg.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Hydrodolasetron is widely distributed in the body with a mean apparent volume of distribution of 5.8 L/kg',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptor 5-HT3',
        efecto: 'El dolasetrón y su metabolito activo, el hidrodolasetrón, son antagonistas selectivos del receptor 5-HT3 de la serotonina, con poca afinidad por los receptores de la dopamina.',
        lugar: [],
        datos: [
          {
            t: 'El dolasetrón y su metabolito activo, el hidrodolasetrón, son antagonistas selectivos del receptor 5-HT3 de la serotonina, con poca afinidad por los receptores de la dopamina.',
            ref: {
              f: 'dailymed-dolasetron',
              sec: '12 · Farmacología clínica',
              cita: 'Dolasetron mesylate and its active metabolite, hydrodolasetron (MDL 74,156), are selective serotonin 5-HT 3 receptor antagonists',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hidrodolasetrón se hidroxila sobre todo por la CYP2D6 y se N-oxida por la CYP3A y la flavina monooxigenasa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hidrodolasetrón se hidroxila sobre todo por la CYP2D6 y se N-oxida por la CYP3A y la flavina monooxigenasa.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Cytochrome P-450 (CYP) 2D6 is primarily responsible for the subsequent hydroxylation of hydrodolasetron and both CYP3A and flavin monooxygenase are responsible for the N-oxidation of hydrodolasetron',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidrodolasetrón',
          actividad: 'activo',
          nota: 'Metabolito activo principal y especie de mayor relevancia clínica.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Dolasetron mesylate and its active metabolite, hydrodolasetron (MDL 74,156)',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Dos tercios de la dosis se recuperan en la orina y un tercio en las heces; el 61 % sale por la orina como hidrodolasetrón sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Dos tercios de la dosis se recuperan en la orina y un tercio en las heces; el 61 % sale por la orina como hidrodolasetrón sin cambios.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Two thirds of the administered dose is recovered in the urine and one third in the feces',
            codigo: '34090-1'
          }
        },
        {
          t: 'El hidrodolasetrón se excreta sin cambios por la orina (61 % de la dosis oral).',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'Hydrodolasetron is excreted in the urine unchanged (61.0% of administered oral dose)',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida media del hidrodolasetrón es de 8,1 horas.',
          ref: {
            f: 'dailymed-dolasetron',
            sec: '12 · Farmacología clínica',
            cita: 'is eliminated with a mean half-life of 8.1 hours (%CV=18%)',
            codigo: '34090-1'
          },
          poblacion: 'adultos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta aparente (como hidrodolasetrón)',
      valor: '75 (aprox.)',
      unidad: '%',
      analito: 'hidrodolasetrón',
      ref: {
        f: 'dailymed-dolasetron',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent absolute bioavailability of oral dolasetron, determined by the major active metabolite hydrodolasetron, is approximately 75%',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico del hidrodolasetrón',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'hidrodolasetrón',
      ref: {
        f: 'dailymed-dolasetron',
        sec: '12 · Farmacología clínica',
        cita: 'with a maximum concentration occurring approximately 1 hour after dosing',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '69-77',
      unidad: '%',
      analito: 'hidrodolasetrón',
      ref: {
        f: 'dailymed-dolasetron',
        sec: '12 · Farmacología clínica',
        cita: 'Sixty-nine to 77% of hydrodolasetron is bound to plasma protein',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '5,8',
      unidad: 'L/kg',
      analito: 'hidrodolasetrón',
      poblacion: 'adultos',
      ref: { f: 'dailymed-dolasetron', sec: '12 · Farmacología clínica', cita: 'a mean apparent volume of distribution of 5.8 L/kg', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '8,1',
      unidad: 'h',
      analito: 'hidrodolasetrón',
      poblacion: 'adultos',
      ref: { f: 'dailymed-dolasetron', sec: '12 · Farmacología clínica', cita: 'is eliminated with a mean half-life of 8.1 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excreción urinaria sin cambios',
      valor: '61',
      unidad: '% de la dosis',
      analito: 'hidrodolasetrón',
      ref: {
        f: 'dailymed-dolasetron',
        sec: '12 · Farmacología clínica',
        cita: 'Hydrodolasetron is excreted in the urine unchanged (61.0% of administered oral dose)',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dolasetron', '201b0eb8-4a1e-4e22-ab4b-addb642710d6', 'ANZEMET (DOLASETRON MESYLATE) TABLET, FILM COATED', 'ANZEMET', '6', '2023-12-15', '2026-11-19'),
    rengPubchem(3033818, 'dolasetron mesylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
