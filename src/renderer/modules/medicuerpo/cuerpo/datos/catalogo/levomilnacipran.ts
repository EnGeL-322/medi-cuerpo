import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'levomilnacipran',
    nombre: 'Levomilnacipran',
    clase: 'Antidepresivo inhibidor de la recaptación de serotonina y noradrenalina (IRSN)',
    sinonimos: [ 'levomilnacipran', 'Fetzima' ],
    formula: 'C15H22N2O',
    masaMolar: 246.35,
    smiles: 'CCN(CC)C(=O)[C@]1(C[C@H]1CN)C2=CC=CC=C2',
    inchikey: 'GJJFMKBJSRMPLA-DZGCQCFKSA-N',
    cid: 6917779,
    iupac: 'cis-(1S,2R)-2-(aminomethyl)-N,N-diethyl-1-phenylcyclopropane-1-carboxamide',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'levomilnacipran-oral',
      producto: 'Fetzima · cápsula de liberación prolongada',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '20 mg, 40 mg, 80 mg o 120 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de levomilnacipran',
        ref: { f: 'dailymed-levomilnacipran', sec: '11 · Descripción', cita: 'levomilnacipran hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'sucrose',
        'ethylcellulose, unspecified',
        'talc',
        'povidone, unspecified',
        'triethyl citrate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'shellac',
        'ferrosoferric oxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento del trastorno depresivo mayor en adultos; no está aprobado para la fibromialgia.',
        ref: {
          f: 'dailymed-levomilnacipran',
          sec: '1 · Indicaciones',
          cita: 'FETZIMA ® is indicated for the treatment of major depressive disorder (MDD) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-levomilnacipran',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños y adultos jóvenes; no está aprobado en niños.',
          organos: [],
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'El riesgo aumenta con otros serotoninérgicos, pero también solo; si aparece, suspender y dar tratamiento de soporte.',
          organos: [],
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serotonin Syndrome: Increased risk when co-administered with other serotonergic agents, but also when taken alone',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la presión arterial y de la frecuencia cardíaca',
          texto: 'Controlar la hipertensión antes de empezar y vigilar la presión arterial durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '5 · Advertencias y precauciones',
            cita: 'Control hypertension before initiating therapy with FETZIMA. Monitor blood pressure regularly during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Dificultad o retención urinaria',
          texto: 'Puede aparecer; si ocurre, suspender o valorar otra intervención.',
          organos: [ 'vias-urinarias' ],
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '5 · Advertencias y precauciones',
            cita: 'Urinary Hesitation or Retention : Can occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Entre las reacciones descritas en otras secciones figuran el síndrome serotoninérgico, el aumento de la presión arterial y de la frecuencia cardíaca y el mayor riesgo de hemorragia.',
          '34084-4',
          'Serotonin Syndrome [see Warnings and Precautions ( 5.2 )] Elevated Blood Pressure [see Warnings and Precautions ( 5.3 )] Elevated Heart Rate'
        ],
        [
          'También figuran el glaucoma de ángulo cerrado, la dificultad o retención urinaria, la activación de manía y las convulsiones.',
          '34084-4',
          'Angle Closure Glaucoma [see Warnings and Precautions ( 5.6 )] Urinary Hesitation or Retention'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada: 20 mg, 40 mg, 80 mg o 120 mg por cápsula, según la etiqueta; el activo va como clorhidrato de levomilnacipran. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno depresivo mayor en adultos; no está aprobado para la fibromialgia.',
    actua: 'Se cree que actúa potenciando la serotonina y la noradrenalina en el sistema nervioso central al inhibir su recaptación en sus transportadores.',
    recorrido: 'La biodisponibilidad relativa frente a una solución oral fue del 92 % y la mediana del Tmax es de 6-8 horas; los alimentos no la afectan de forma significativa. Se elimina sobre todo por excreción renal: alrededor del 58 % de la dosis sale por la orina sin cambios y el N-desetil-levomilnacipran supone alrededor del 18 %.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de liberación prolongada: libera el principio activo poco a poco a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Cápsula de liberación prolongada: libera el principio activo poco a poco a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '3 · Formas y concentraciones',
            cita: 'FETZIMA (levomilnacipran) is available as 20 mg, 40 mg, 80 mg, and 120 mg extended-release capsules',
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
      ocurre: 'La biodisponibilidad relativa frente a una solución oral fue del 92 % y la mediana del Tmax es de 6-8 horas; los alimentos no la afectan de forma significativa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad relativa frente a una solución oral fue del 92 % y la mediana del Tmax es de 6-8 horas; los alimentos no la afectan de forma significativa.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The relative bioavailability of levomilnacipran after administration of FETZIMA was 92% when compared to oral solution',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de 6-8 horas tras la toma oral.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak concentration (T max ) of levomilnacipran is 6-8 hours after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'La concentración no se modificó de forma significativa al tomarlo con alimentos.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Levomilnacipran concentration was not significantly affected when FETZIMA was administered with food',
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
      ocurre: 'Se distribuye ampliamente, con un volumen de distribución aparente de 387-473 L; la unión a las proteínas del plasma es del 22 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye ampliamente, con un volumen de distribución aparente de 387-473 L; la unión a las proteínas del plasma es del 22 %.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Levomilnacipran is widely distributed with an apparent volume of distribution of 387-473 L; plasma protein binding is 22% over concentration range of 10 to 1000 ng/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transportadores de serotonina y noradrenalina',
        efecto: 'Se cree que actúa potenciando la serotonina y la noradrenalina en el sistema nervioso central al inhibir su recaptación en sus transportadores.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que actúa potenciando la serotonina y la noradrenalina en el sistema nervioso central al inhibir su recaptación en sus transportadores.',
            ref: {
              f: 'dailymed-levomilnacipran',
              sec: '12.1 · Mecanismo de acción',
              cita: 'is thought to be related to the potentiation of serotonin and norepinephrine in the central nervous system, through inhibition of reuptake at serotonin and norepinephrine transporters',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre desetilación a desetil-levomilnacipran e hidroxilación a p-hidroxi-levomilnacipran, que luego se conjugan con ácido glucurónico; la desetilación la cataliza sobre todo la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre desetilación a desetil-levomilnacipran e hidroxilación a p-hidroxi-levomilnacipran, que luego se conjugan con ácido glucurónico; la desetilación la cataliza sobre todo la CYP3A4.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The desethylation is catalyzed primarily by CYP3A4 with minor contribution by CYP2C8, 2C19, 2D6, and 2J2',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se desetila a desetil-levomilnacipran y se hidroxila a p-hidroxi-levomilnacipran; ambos se conjugan después con glucurónido.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Levomilnacipran undergoes desethylation to form desethyl levomilnacipran and hydroxylation to form p-hydroxy-levomilnacipran',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del levomilnacipran',
          actividad: 'inactivo',
          nota: 'N-desetil-levomilnacipran (alrededor del 18 % de la dosis en la orina), p-hidroxi-levomilnacipran y sus glucurónidos; todos inactivos.',
          ref: { f: 'dailymed-levomilnacipran', sec: '12.3 · Farmacocinética', cita: 'The metabolites are inactive', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por excreción renal: alrededor del 58 % de la dosis sale por la orina sin cambios y el N-desetil-levomilnacipran supone alrededor del 18 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por excreción renal: alrededor del 58 % de la dosis sale por la orina sin cambios y el N-desetil-levomilnacipran supone alrededor del 18 %.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Levomilnacipran and its metabolites are eliminated primarily by renal excretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 58 % de la dosis se excreta en la orina como levomilnacipran sin cambios.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 58% of the dose is excreted in urine as unchanged levomilnacipran',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal aparente es de unas 12 horas.',
          ref: {
            f: 'dailymed-levomilnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal elimination half-life of levomilnacipran is approximately 12 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a solución oral',
      valor: '92',
      unidad: '%',
      analito: 'levomilnacipran',
      ref: {
        f: 'dailymed-levomilnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'The relative bioavailability of levomilnacipran after administration of FETZIMA was 92% when compared to oral solution',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '6-8',
      unidad: 'h',
      analito: 'levomilnacipran',
      ref: {
        f: 'dailymed-levomilnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak concentration (T max ) of levomilnacipran is 6-8 hours after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '387-473',
      unidad: 'L',
      analito: 'levomilnacipran',
      ref: { f: 'dailymed-levomilnacipran', sec: '12.3 · Farmacocinética', cita: 'with an apparent volume of distribution of 387-473 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '22',
      unidad: '%',
      analito: 'levomilnacipran',
      ref: {
        f: 'dailymed-levomilnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'plasma protein binding is 22% over concentration range of 10 to 1000 ng/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal aparente',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'levomilnacipran',
      ref: {
        f: 'dailymed-levomilnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal elimination half-life of levomilnacipran is approximately 12 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada sin cambios en la orina',
      valor: '58 (aprox.)',
      unidad: '% de la dosis',
      analito: 'levomilnacipran inalterado',
      ref: {
        f: 'dailymed-levomilnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 58% of the dose is excreted in urine as unchanged levomilnacipran',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-levomilnacipran', 'f371258d-91b3-4b6a-ac99-434a1964c3af', 'FETZIMA (LEVOMILNACIPRAN HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE FETZIMA (LEVOMILNACIPRAN HYDROCHLORIDE) KIT', 'Fetzima', '33', '2026-02-23', '2026-11-19'),
    rengPubchem(6917779, 'levomilnacipran', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
