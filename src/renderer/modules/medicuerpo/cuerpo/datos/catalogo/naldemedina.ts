import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'naldemedina',
    nombre: 'Naldemedina',
    clase: 'Antagonista opioide de acción periférica',
    sinonimos: [ 'naldemedine', 'Symproic' ],
    formula: 'C32H34N4O6',
    masaMolar: 570.6,
    smiles: 'CC(C)(C1=NC(=NO1)C2=CC=CC=C2)NC(=O)C3=C([C@H]4[C@@]56CCN([C@@H]([C@@]5(C3)O)CC7=C6C(=C(C=C7)O)O4)CC8CC8)O',
    inchikey: 'AXQACEQYCPKDMV-RZAWKFBISA-N',
    cid: 54732242,
    iupac: '(4R,4aS,7aR,12bS)-3-(cyclopropylmethyl)-4a,7,9-trihydroxy-N-[2-(3-phenyl-1,2,4-oxadiazol-5-yl)propan-2-yl]-1,2,4,5,7a,13-hexahydro-4,12-methanobenzofuro[3,2-e]isoquinoline-6-carboxamide',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'naldemedina-oral',
      producto: 'SYMPROIC · comprimido',
      titular: 'BIODELIVERY SCIENCES INTERNATIONAL INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.2 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Tosilato de naldemedina',
        ref: { f: 'dailymed-naldemedina', sec: '11 · Descripción', cita: 'naldemedine tosylate', codigo: '34089-3' }
      },
      excipientes: [ 'mannitol', 'croscarmellose sodium', 'magnesium stearate', 'hypromellose, unspecified', 'talc', 'ferric oxide yellow' ],
      usos: {
        t: 'Tratamiento del estreñimiento inducido por opioides en adultos con dolor crónico no oncológico.',
        ref: {
          f: 'dailymed-naldemedina',
          sec: '1 · Indicaciones',
          cita: 'SYMPROIC is indicated for the treatment of opioid-induced constipation (OIC) in adult patients with chronic non-cancer pain',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-naldemedina',
      advertencias: [
        {
          titulo: 'Perforación gastrointestinal',
          texto: 'Valorar el riesgo en lesiones conocidas o sospechadas del tubo digestivo y vigilar el dolor abdominal intenso o persistente.',
          organos: [],
          ref: {
            f: 'dailymed-naldemedina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Consider the overall risk benefit in patients with known or suspected lesions of the GI tract',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Abstinencia de opioides',
          texto: 'Valorar el riesgo si la barrera hematoencefálica está alterada y vigilar los síntomas de abstinencia.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-naldemedina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Consider the overall risk benefit in patients with disruptions to the blood-brain barrier',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más) son dolor abdominal, diarrea, náuseas y gastroenteritis.',
          '34084-4',
          'Most common adverse reactions (≥2%) are: abdominal pain, diarrhea, nausea and gastroenteritis'
        ],
        [
          'Los datos proceden de 1 163 pacientes de los ensayos, 487 de ellos expuestos más de seis meses.',
          '34084-4',
          'The data described below reflect exposure to SYMPROIC in 1163 patients in clinical trials'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.2 mg por comprimido, según la etiqueta; el activo va como tosilato de naldemedina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del estreñimiento inducido por opioides en adultos con dolor crónico no oncológico.',
    actua: 'Antagonista de los receptores opioides mu, delta y kappa que actúa de forma periférica en tejidos como el tubo digestivo y reduce el efecto estreñidor de los opioides; su estructura limita el paso de la barrera hematoencefálica.',
    recorrido: 'Se absorbe con un tmax de unas 0,75 horas en ayunas; una comida grasa reduce la velocidad pero no la magnitud de la absorción. Del total marcado, el 57 % se excretó en la orina y el 35 % en las heces; entre el 16 % y el 18 % salió sin cambios por la orina.'
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
          ref: { f: 'dailymed-naldemedina', sec: '3 · Formas y concentraciones', cita: 'supplied as yellow, round, film-coated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con un tmax de unas 0,75 horas en ayunas; una comida grasa reduce la velocidad pero no la magnitud de la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con un tmax de unas 0,75 horas en ayunas; una comida grasa reduce la velocidad pero no la magnitud de la absorción.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'naldemedine is absorbed with a time to achieve peak concentrations (T max ) of approximately 0.75 hours in a fasted state',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó alrededor de un 35 % y el tmax se retrasó a 2,5 horas, sin cambio relevante del AUC.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max was decreased by approximately 35% and time to achieve C max was delayed from 0.75 hours in the fasted state to 2.5 hours in the fed state',
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
      ocurre: 'Se une en un 93 a 94 % a las proteínas del plasma; el volumen de distribución aparente en la fase terminal es de 155 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 93 a 94 % a las proteínas del plasma; el volumen de distribución aparente en la fase terminal es de 155 L.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of naldemedine in humans is 93% to 94%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio en la fase terminal de 155 L.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution during the terminal phase (Vz/F) is 155 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores opioides mu, delta y kappa',
        efecto: 'Antagonista de los receptores opioides mu, delta y kappa que actúa de forma periférica en tejidos como el tubo digestivo y reduce el efecto estreñidor de los opioides; su estructura limita el paso de la barrera hematoencefálica.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'Antagonista de los receptores opioides mu, delta y kappa que actúa de forma periférica en tejidos como el tubo digestivo y reduce el efecto estreñidor de los opioides; su estructura limita el paso de la barrera hematoencefálica.',
            ref: {
              f: 'dailymed-naldemedina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Naldemedine functions as a peripherally-acting mu-opioid receptor antagonist in tissues such as the gastrointestinal tract, thereby decreasing the constipating effects of opioids',
              codigo: '43679-0'
            }
          },
          {
            t: 'Una cadena lateral añadida aumenta su peso molecular y su superficie polar y reduce su capacidad de atravesar la barrera hematoencefálica.',
            ref: {
              f: 'dailymed-naldemedina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'thereby reducing its ability to cross the blood-brain barrier (BBB)',
              codigo: '43679-0'
            },
            poblacion: 'encefalo'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A a nor-naldemedina, con una pequeña contribución de la UGT1A3; en el tubo digestivo se escinde además a benzamidina y ácido carboxílico de naldemedina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A a nor-naldemedina, con una pequeña contribución de la UGT1A3; en el tubo digestivo se escinde además a benzamidina y ácido carboxílico de naldemedina.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'Naldemedine is primarily metabolized by CYP3A to nor-naldemedine, with minor contribution from UGT1A3 to form naldemedine 3-G',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Nor-naldemedina',
          actividad: 'activo',
          nota: 'Metabolito principal en plasma, antagonista opioide menos potente.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'Nor-naldemedine and naldemedine 3-G have been shown to have antagonistic activity for opioid receptors, with less potent effect than naldemedine',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Benzamidina',
          actividad: 'desconocida',
          nota: 'Metabolito más abundante en orina y heces; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'Benzamidine was the most predominant metabolite excreted in the urine and feces',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Del total marcado, el 57 % se excretó en la orina y el 35 % en las heces; entre el 16 % y el 18 % salió sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Del total marcado, el 57 % se excretó en la orina y el 35 % en las heces; entre el 16 % y el 18 % salió sin cambios por la orina.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'the total amount of radioactivity excreted in the urine and feces was 57% and 35% of the administered dose of naldemedine, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal es de 11 horas.',
          ref: {
            f: 'dailymed-naldemedina',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life of naldemedine is 11 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en ayunas',
      valor: '0,75 (aprox.)',
      unidad: 'h',
      analito: 'naldemedina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-naldemedina',
        sec: '12.3 · Farmacocinética',
        cita: 'time to achieve peak concentrations (T max ) of approximately 0.75 hours in a fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '93-94',
      unidad: '%',
      analito: 'naldemedina',
      ref: {
        f: 'dailymed-naldemedina',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of naldemedine in humans is 93% to 94%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en la fase terminal',
      valor: '155',
      unidad: 'L',
      analito: 'naldemedina',
      ref: {
        f: 'dailymed-naldemedina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution during the terminal phase (Vz/F) is 155 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '11',
      unidad: 'h',
      analito: 'naldemedina',
      ref: {
        f: 'dailymed-naldemedina',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of naldemedine is 11 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada sin cambios en la orina',
      valor: '16-18 (aprox.)',
      unidad: '% de la dosis',
      analito: 'naldemedina inalterada',
      ref: {
        f: 'dailymed-naldemedina',
        sec: '12.3 · Farmacocinética',
        cita: 'The amount of naldemedine excreted unchanged in the urine was approximately 16% to 18% of the administered dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-naldemedina', 'b1a1256c-a1eb-4abe-ab1e-30e4711afd16', 'SYMPROIC (NALDEMEDINE) TABLET', 'SYMPROIC', '10', '2025-07-31', '2026-11-19'),
    rengPubchem(54732242, 'naldemedine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
