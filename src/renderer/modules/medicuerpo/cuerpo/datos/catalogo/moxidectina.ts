import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'moxidectina',
    nombre: 'Moxidectina',
    clase: 'Antihelmíntico lactona macrocíclica',
    sinonimos: [ 'moxidectin' ],
    formula: 'C37H53NO8',
    masaMolar: 639.8,
    smiles: 'C[C@@H]\\1C/C(=C/C[C@@H]2C[C@@H](C[C@@]3(O2)C/C(=N\\OC)/[C@@H]([C@H](O3)/C(=C/C(C)C)/C)C)OC(=O)[C@@H]4C=C([C@H]([C@@H]5[C@]4(/C(=C/C=C1)/CO5)O)O)C)/C',
    inchikey: 'YZBLFMPOMVTDJY-LSGXYNIPSA-N',
    cid: 9832912,
    iupac: "(1R,4S,4'E,5'S,6R,6'S,8R,10E,13R,14E,16E,20R,21R,24S)-21,24-dihydroxy-4'-methoxyimino-5',11,13,22-tetramethyl-6'-[(E)-4-methylpent-2-en-2-yl]spiro[3,7,19-trioxatetracyclo[15.6.1.14,8.020,24]pentacosa-10,14,16,22-tetraene-6,2'-oxane]-2-one",
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'moxidectina-oral',
      producto: 'Moxidectin · comprimido',
      titular: 'MEDICINES DEVELOPMENT FOR GLOBAL HEALTH',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2 mg por comprimido, según la etiqueta',
      excipientes: [ 'silicon dioxide', 'croscarmellose sodium', 'anhydrous lactose', 'magnesium stearate', 'microcrystalline cellulose', 'sodium lauryl sulfate' ],
      usos: {
        t: 'Tratamiento de la oncocercosis por Onchocerca volvulus desde los 4 años y al menos 13 kg.',
        ref: {
          f: 'dailymed-moxidectina',
          sec: '1 · Indicaciones',
          cita: 'Moxidectin Tablets are indicated for the treatment of onchocerciasis due to Onchocerca volvulus in adult and pediatric patients aged 4 years and older and weighing at least 13 kg',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-moxidectina',
      advertencias: [
        {
          titulo: 'Reacción de Mazzotti',
          texto: 'Pueden aparecer reacciones cutáneas, oftalmológicas o sistémicas en la oncocercosis tras el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-moxidectina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cutaneous, Ophthalmological and/or Systemic Adverse Reactions of Varying Severity (Mazzotti Reaction )',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión ortostática sintomática',
          texto: 'Pueden aparecer episodios, incluso con incapacidad para mantenerse de pie sin apoyo.',
          organos: [],
          ref: {
            f: 'dailymed-moxidectina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Episodes of symptomatic orthostatic hypotension including inability to stand without support may occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Encefalopatía en la coinfección por Loa loa',
          texto: 'Puede aparecer una encefalopatía grave o mortal; descartar la loiasis en zonas endémicas.',
          organos: [],
          ref: {
            f: 'dailymed-moxidectina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious or even fatal encephalopathy following treatment with Moxidectin Tablets may occur in patients co-infected with Loa loa',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 %) en el ensayo 1: eosinofilia, prurito, dolor musculoesquelético, cefalea, linfocitopenia, taquicardia, exantema, dolor abdominal, hipotensión, fiebre y leucocitosis, entre otras.',
          '34084-4',
          'most common adverse reactions (incidence > 10%) in adult and pediatric patients (12 to less than 18 years of age) in Trial 1 were eosinophilia, pruritus, musculoskeletal pain, headache'
        ],
        [
          'Entre las reacciones descritas en otras secciones figura la hipotensión ortostática sintomática.',
          '34084-4',
          'Symptomatic Orthostatic Hypotension [see Warnings and Precautions ( 5.2 )]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la oncocercosis por Onchocerca volvulus desde los 4 años y al menos 13 kg.',
    actua: 'No se conoce su mecanismo frente a O. volvulus; en otros nematodos se une a canales de cloruro activados por glutamato, receptores GABA o transportadores ABC, con entrada de cloruro, hiperpolarización y parálisis muscular.',
    recorrido: 'La mediana del tmax tras 8 mg en ayunas es de 4 horas; una comida grasa aumenta la Cmax un 34 % y el AUC un 39 %. Tras 8 mg, el 2 % de la dosis se elimina sin cambios en las heces en 72 horas; la eliminación renal del fármaco intacto es despreciable.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido sin recubrir: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido sin recubrir: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-moxidectina',
            sec: '3 · Formas y concentraciones',
            cita: '2 mg of moxidectin, white to pale yellow, uncoated, oval-shaped',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'con una comida rica en grasas',
      ocurre: 'La mediana del tmax tras 8 mg en ayunas es de 4 horas; una comida grasa aumenta la Cmax un 34 % y el AUC un 39 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax tras 8 mg en ayunas es de 4 horas; una comida grasa aumenta la Cmax un 34 % y el AUC un 39 %.',
          ref: {
            f: 'dailymed-moxidectina',
            sec: '12.3 · Farmacocinética',
            cita: 'Moxidectin mean C max and AUC increased on average by 34% and 39%, respectively, when administered with a standard high fat meal',
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
      ocurre: 'Se une en un 99,92 % a las proteínas plasmáticas humanas; el volumen de distribución aparente es de unos 2 421 L en la oncocercosis.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,92 % a las proteínas plasmáticas humanas; el volumen de distribución aparente es de unos 2 421 L en la oncocercosis.',
          ref: { f: 'dailymed-moxidectina', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding in humans is 99.92%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente medio de 2 421 L en pacientes con oncocercosis.',
          ref: {
            f: 'dailymed-moxidectina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent mean ± SD volume of distribution of moxidectin is 2421 ± 1658 L in patients with onchocerciasis',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con oncocercosis'
        }
      ],
      accion: {
        diana: 'Canales de cloruro activados por glutamato del parásito',
        efecto: 'No se conoce su mecanismo frente a O. volvulus; en otros nematodos se une a canales de cloruro activados por glutamato, receptores GABA o transportadores ABC, con entrada de cloruro, hiperpolarización y parálisis muscular.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'No se conoce su mecanismo frente a O. volvulus; en otros nematodos se une a canales de cloruro activados por glutamato, receptores GABA o transportadores ABC, con entrada de cloruro, hiperpolarización y parálisis muscular.',
            ref: {
              f: 'dailymed-moxidectina',
              sec: '12.4 · Microbiología',
              cita: 'Studies with other nematodes suggest that moxidectin binds to glutamate-gated chloride channels (GluCl), gamma-aminobutyric acid (GABA) receptors and/or ATP-binding cassette (ABC) transporters',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolismo hepático es mínimo.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolismo hepático es mínimo.',
          ref: { f: 'dailymed-moxidectina', sec: '12.3 · Farmacocinética', cita: 'The hepatic metabolism of moxidectin is minimal', codigo: '43682-4' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 8 mg, el 2 % de la dosis se elimina sin cambios en las heces en 72 horas; la eliminación renal del fármaco intacto es despreciable.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 8 mg, el 2 % de la dosis se elimina sin cambios en las heces en 72 horas; la eliminación renal del fármaco intacto es despreciable.',
          ref: {
            f: 'dailymed-moxidectina',
            sec: '12.3 · Farmacocinética',
            cita: '2% of the dose is eliminated unchanged in the feces within the first 72 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 23,3 días (559 horas) en pacientes con oncocercosis.',
          ref: {
            f: 'dailymed-moxidectina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean terminal half-life of moxidectin in patients with onchocerciasis is 23.3 days (559 hours)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con oncocercosis'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en ayunas',
      valor: '4',
      unidad: 'h',
      analito: 'moxidectina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 8 mg en ayunas',
      ref: { f: 'dailymed-moxidectina', sec: '12.3 · Farmacocinética', cita: 'T max * (hours) 4 (2, 8) 4 (1, 4)', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,92',
      unidad: '%',
      analito: 'moxidectina',
      ref: { f: 'dailymed-moxidectina', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding in humans is 99.92%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '2421',
      unidad: 'L',
      analito: 'moxidectina',
      poblacion: 'pacientes con oncocercosis',
      ref: {
        f: 'dailymed-moxidectina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent mean ± SD volume of distribution of moxidectin is 2421 ± 1658 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '23,3',
      unidad: 'd',
      analito: 'moxidectina',
      poblacion: 'pacientes con oncocercosis',
      ref: {
        f: 'dailymed-moxidectina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal half-life of moxidectin in patients with onchocerciasis is 23.3 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente',
      valor: '3,50 (aprox.)',
      unidad: 'L/h',
      analito: 'moxidectina',
      poblacion: 'pacientes con oncocercosis',
      ref: {
        f: 'dailymed-moxidectina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent mean ± SD total clearance of moxidectin is approximately 3.50 ± 1.23 L/hour',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-moxidectina', '6eb02ae9-9065-176f-e053-2991aa0ac891', 'MOXIDECTIN TABLET', 'Moxidectin', '22', '2026-08-03', '2026-11-19'),
    rengPubchem(9832912, 'moxidectin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
