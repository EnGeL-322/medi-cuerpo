import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'triclabendazol',
    nombre: 'Triclabendazol',
    clase: 'Antihelmíntico benzimidazólico (fasciolicida)',
    sinonimos: [ 'triclabendazole', 'Egaten' ],
    formula: 'C14H9Cl3N2OS',
    masaMolar: 359.7,
    smiles: 'CSC1=NC2=CC(=C(C=C2N1)Cl)OC3=C(C(=CC=C3)Cl)Cl',
    inchikey: 'NQPDXQQQCQDHHW-UHFFFAOYSA-N',
    cid: 50248,
    iupac: '6-chloro-5-(2,3-dichlorophenoxy)-2-methylsulfanyl-1H-benzimidazole',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'triclabendazol-oral',
      producto: 'EGATEN · comprimido',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'starch, corn', 'hymetellose (4150 mpa.s)', 'magnesium stearate', 'silicon dioxide', 'ferric oxide red' ],
      usos: {
        t: 'Tratamiento de la fascioliasis desde los 6 años.',
        ref: {
          f: 'dailymed-triclabendazol',
          sec: '1 · Indicaciones',
          cita: 'EGATEN ® is indicated for the treatment of fascioliasis in patients 6 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-triclabendazol',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Prolonga el intervalo QTc; vigilar el ECG si hay antecedentes, alteraciones electrolíticas, inhibidores de la CYP1A2 o insuficiencia hepática.',
          organos: [],
          ref: { f: 'dailymed-triclabendazol', sec: '5 · Advertencias y precauciones', cita: 'EGATEN prolongs the QTc interval', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 2 %) con 20 mg/kg: dolor abdominal, hiperhidrosis, náuseas, disminución del apetito, cefalea, urticaria, diarrea, vómitos, dolor torácico musculoesquelético y prurito.',
          '34084-4',
          'Most common adverse reactions (greater than 2%) with triclabendazole 20 mg/kg dose are abdominal pain, hyperhidrosis, nausea, decreased appetite, headache, urticaria, diarrhea, vomiting'
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
    contiene: 'Comprimido: 250 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la fascioliasis desde los 6 años.',
    actua: 'Su mecanismo no está del todo aclarado: él y sus metabolitos activos (sulfóxido y sulfona) se absorben por el tegumento de los gusanos, reducen el potencial de membrana en reposo e inhiben la función de la tubulina.',
    recorrido: 'Con una comida, la mediana del tmax del fármaco y del sulfóxido es de 3 a 4 horas; la comida aumenta la Cmax y el AUC unas 3 veces. No hay datos de excreción en humanos; en animales se excreta sobre todo por vía biliar con las heces (90 %) y menos del 10 % por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado de 250 mg: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado de 250 mg: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '3 · Formas y concentraciones',
            cita: '250 mg pale red, speckled, capsule shaped, biconvex',
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
      ocurre: 'Con una comida, la mediana del tmax del fármaco y del sulfóxido es de 3 a 4 horas; la comida aumenta la Cmax y el AUC unas 3 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con una comida, la mediana del tmax del fármaco y del sulfóxido es de 3 a 4 horas; la comida aumenta la Cmax y el AUC unas 3 veces.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'the median T max for the parent compound and the sulfoxide metabolite was 3 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida de unas 560 kcal la Cmax y el AUC del triclabendazol aumentaron unas 3 veces.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'C max and AUC of triclabendazole and sulfoxide metabolite increased approximately 3-fold and 2-fold, respectively',
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
      ocurre: 'Se une en un 96,7 % a las proteínas plasmáticas (98,4 % el sulfóxido y 98,8 % la sulfona).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 96,7 % a las proteínas plasmáticas (98,4 % el sulfóxido y 98,8 % la sulfona).',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein-binding of triclabendazole, sulfoxide metabolite and sulfone metabolite in human plasma was 96.7%, 98.4% and 98.8%, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tubulina de Fasciola',
        efecto: 'Su mecanismo no está del todo aclarado: él y sus metabolitos activos (sulfóxido y sulfona) se absorben por el tegumento de los gusanos, reducen el potencial de membrana en reposo e inhiben la función de la tubulina.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Su mecanismo no está del todo aclarado: él y sus metabolitos activos (sulfóxido y sulfona) se absorben por el tegumento de los gusanos, reducen el potencial de membrana en reposo e inhiben la función de la tubulina.',
            ref: {
              f: 'dailymed-triclabendazol',
              sec: '12.4 · Microbiología',
              cita: 'triclabendazole and its active metabolites (sulfoxide and sulfone) are absorbed by the tegument of the immature and mature worms, leading to a decrease of the resting membrane potential, inhibition of tubulin function',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP1A2 (alrededor del 64 %) a su sulfóxido activo, que la CYP2C9 transforma después en la sulfona activa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP1A2 (alrededor del 64 %) a su sulfóxido activo, que la CYP2C9 transforma después en la sulfona activa.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'triclabendazole is primarily metabolized by CYP1A2 (approximately 64%) into its active sulfoxide metabolite',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Sulfóxido de triclabendazol',
          actividad: 'activo',
          nota: 'Metabolito activo principal; semivida de unas 14 horas.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'triclabendazole is primarily metabolized by CYP1A2 (approximately 64%) into its active sulfoxide metabolite',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Sulfona de triclabendazol',
          actividad: 'activo',
          nota: 'Metabolito activo; semivida de unas 11 horas.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'This sulfoxide metabolite is further metabolized primarily by CYP2C9 to the active sulfone metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'No hay datos de excreción en humanos; en animales se excreta sobre todo por vía biliar con las heces (90 %) y menos del 10 % por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'No hay datos de excreción en humanos; en animales se excreta sobre todo por vía biliar con las heces (90 %) y menos del 10 % por la orina.',
          ref: { f: 'dailymed-triclabendazol', sec: '12.3 · Farmacocinética', cita: 'No excretion data is available in humans', codigo: '43682-4' }
        },
        {
          t: 'En animales se excreta sobre todo por la vía biliar con las heces (90 %).',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'in animals, the drug is largely excreted via the biliary tract in the feces (90%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática es de unas 8 horas para el triclabendazol, 14 para el sulfóxido y 11 para la sulfona.',
          ref: {
            f: 'dailymed-triclabendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma elimination half-life (t 1/2 ) of triclabendazole, the sulfoxide and sulfone metabolites in humans is approximately 8, 14, and 11 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax con comida',
      valor: '3-4',
      unidad: 'h',
      analito: 'triclabendazol',
      poblacion: 'pacientes con fascioliasis',
      condiciones: 'con una comida de 560 kcal',
      ref: {
        f: 'dailymed-triclabendazol',
        sec: '12.3 · Farmacocinética',
        cita: 'the median T max for the parent compound and the sulfoxide metabolite was 3 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96,7',
      unidad: '%',
      analito: 'triclabendazol',
      ref: {
        f: 'dailymed-triclabendazol',
        sec: '12.3 · Farmacocinética',
        cita: 'Protein-binding of triclabendazole, sulfoxide metabolite and sulfone metabolite in human plasma was 96.7%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente del sulfóxido',
      valor: '1 (aprox.)',
      unidad: 'L/kg',
      analito: 'sulfóxido de triclabendazol',
      poblacion: 'pacientes con alimentos',
      ref: {
        f: 'dailymed-triclabendazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (V d ) of the sulfoxide metabolite in fed patients is approximately 1 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '8 (aprox.)',
      unidad: 'h',
      analito: 'triclabendazol',
      ref: { f: 'dailymed-triclabendazol', sec: '12.3 · Farmacocinética', cita: 'in humans is approximately 8, 14, and 11 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-triclabendazol', '5552884e-10ea-450c-9658-d3d4f33c946e', 'EGATEN (TRICLABENDAZOLE) TABLET', 'EGATEN', '12', '2026-06-08', '2026-11-19'),
    rengPubchem(50248, 'triclabendazole', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
