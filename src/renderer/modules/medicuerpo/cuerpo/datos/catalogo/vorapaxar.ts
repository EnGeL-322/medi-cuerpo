import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vorapaxar',
    nombre: 'Vorapaxar',
    clase: 'Antagonista del receptor activado por proteasas 1 (PAR-1), antiagregante',
    sinonimos: [ 'vorapaxar', 'Zontivity' ],
    formula: 'C29H33FN2O4',
    masaMolar: 492.6,
    smiles: 'CCOC(=O)N[C@@H]1CC[C@@H]2[C@@H](C1)C[C@@H]3[C@H]([C@H]2/C=C/C4=NC=C(C=C4)C5=CC(=CC=C5)F)[C@H](OC3=O)C',
    inchikey: 'ZBGXUVOIWDMMJE-QHNZEKIYSA-N',
    cid: 10077130,
    iupac: 'ethyl N-[(1R,3aR,4aR,6R,8aR,9S,9aS)-9-[(E)-2-[5-(3-fluorophenyl)-2-pyridinyl]ethenyl]-1-methyl-3-oxo-3a,4,4a,5,6,7,8,8a,9,9a-decahydro-1H-benzo[f][2]benzofuran-6-yl]carbamate',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'vorapaxar-oral',
      producto: 'ZONTIVITY · comprimido recubierto con película',
      titular: 'WRASER PHARMACEUTICALS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2.08 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Sulfato de vorapaxar', ref: { f: 'dailymed-vorapaxar', sec: '11 · Descripción', cita: 'vorapaxar sulfate', codigo: '34089-3' } },
      excipientes: [
        'lactose monohydrate',
        'cellulose, microcrystalline',
        'croscarmellose sodium',
        'povidone',
        'magnesium stearate',
        'hypromellose 2910 (15 mpa.s)',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Reducción de los acontecimientos cardiovasculares trombóticos en pacientes con antecedente de infarto de miocardio o con enfermedad arterial periférica.',
        ref: {
          f: 'dailymed-vorapaxar',
          sec: '1 · Indicaciones',
          cita: 'ZONTIVITY ® is indicated for the reduction of thrombotic cardiovascular events in patients with a history of myocardial infarction (MI) or with peripheral arterial disease (PAD)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vorapaxar',
      advertencias: [
        {
          titulo: 'Riesgo de hemorragia',
          texto: 'No debe usarse con antecedentes de ictus, accidente isquémico transitorio o hemorragia intracraneal, ni con hemorragia activa; los antiagregantes aumentan el riesgo de hemorragia, incluida la intracraneal y la mortal.',
          organos: [],
          ref: {
            f: 'dailymed-vorapaxar',
            sec: 'Advertencia destacada',
            cita: 'Antiplatelet agents, including ZONTIVITY, increase the risk of bleeding, including ICH and fatal bleeding',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Inhibidores o inductores potentes de la CYP3A',
          texto: 'Hay que evitar su uso con inhibidores o inductores potentes de la CYP3A.',
          organos: [],
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use with strong CYP3A inhibitors or inducers',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'La reacción adversa más frecuente es la hemorragia, incluidas las potencialmente mortales y las mortales.',
          '34084-4',
          'Bleeding, including life-threatening and fatal bleeding, is the most commonly reported adverse reaction'
        ],
        [
          'La hemorragia se trata en el recuadro de advertencia y en la sección de advertencias.',
          '34084-4',
          'The following serious adverse reaction is also discussed elsewhere in the labeling: Bleeding'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2.08 mg por comprimido, según la etiqueta; el activo va como sulfato de vorapaxar. Los excipientes no son el principio activo.',
    usos: 'Reducción de los acontecimientos cardiovasculares trombóticos en pacientes con antecedente de infarto de miocardio o con enfermedad arterial periférica.',
    actua: 'Antagonista reversible del receptor PAR-1 de las plaquetas, aunque su semivida larga lo hace en la práctica irreversible; inhibe la agregación plaquetaria inducida por la trombina.',
    recorrido: 'Tras una dosis única de 2,08 mg en ayunas, la Cmax aparece a la hora (1 a 2 horas); la biodisponibilidad absoluta media es de alrededor del 100 %. La vía principal de eliminación son las heces: en 6 semanas se recuperó el 84 % de la dosis marcada, el 58 % en las heces y el 25 % en la orina, sin vorapaxar inalterado en la orina.'
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
            f: 'dailymed-vorapaxar',
            sec: '3 · Formas y concentraciones',
            cita: 'ZONTIVITY tablets, 2.08 mg vorapaxar, are yellow, oval-shaped, film-coated tablets',
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
      ocurre: 'Tras una dosis única de 2,08 mg en ayunas, la Cmax aparece a la hora (1 a 2 horas); la biodisponibilidad absoluta media es de alrededor del 100 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis única de 2,08 mg en ayunas, la Cmax aparece a la hora (1 a 2 horas); la biodisponibilidad absoluta media es de alrededor del 100 %.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability as determined from a microdosing study is approximately 100%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis única de 2,08 mg en ayunas, el pico aparece a la hora (de 1 a 2 horas).',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration of a single ZONTIVITY 2.08 mg dose under fasted conditions, peak concentrations (C max ) occur at 1 hour post-dose (range: 1 to 2 h)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC no cambió de forma relevante; la Cmax bajó un 21 % y el pico se retrasó 45 minutos.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'Ingestion of vorapaxar with a high-fat meal resulted in no meaningful change in AUC with a small (21%) decrease in C max and delayed time to peak concentration (45 minutes)',
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
      ocurre: 'El vorapaxar y su metabolito activo M20 se unen mucho (99 % o más) a las proteínas del plasma humano; el volumen de distribución medio es de unos 424 litros y no se reparte preferentemente en los glóbulos rojos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El vorapaxar y su metabolito activo M20 se unen mucho (99 % o más) a las proteínas del plasma humano; el volumen de distribución medio es de unos 424 litros y no se reparte preferentemente en los glóbulos rojos.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'Vorapaxar and the major circulating active metabolite, M20, are extensively bound (≥99%) to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio de unos 424 litros.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean volume of distribution of vorapaxar is approximately 424 liters (95% CI: 351-512)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor activado por proteasas 1 (PAR-1)',
        efecto: 'Antagonista reversible del receptor PAR-1 de las plaquetas, aunque su semivida larga lo hace en la práctica irreversible; inhibe la agregación plaquetaria inducida por la trombina.',
        lugar: [ 'plaquetas' ],
        datos: [
          {
            t: 'Antagonista reversible del receptor PAR-1 de las plaquetas, aunque su semivida larga lo hace en la práctica irreversible; inhibe la agregación plaquetaria inducida por la trombina.',
            ref: {
              f: 'dailymed-vorapaxar',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vorapaxar is a reversible antagonist of the protease-activated receptor-1 (PAR-1) expressed on platelets, but its long half-life makes it effectively irreversible',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro inhibe la agregación plaquetaria inducida por la trombina y por el péptido agonista del receptor de trombina (TRAP).',
            ref: {
              f: 'dailymed-vorapaxar',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vorapaxar inhibits thrombin-induced and thrombin receptor agonist peptide (TRAP)-induced platelet aggregation in in vitro studies',
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
      ocurre: 'Se elimina por metabolismo mediante CYP3A4 y CYP2J2; el metabolito activo circulante principal es M20 y el predominante en las excretas es M19.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina por metabolismo mediante CYP3A4 y CYP2J2; el metabolito activo circulante principal es M20 y el predominante en las excretas es M19.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'Vorapaxar is eliminated by metabolism via CYP3A4 and CYP2J2',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M20 (monohidroxilado)',
          actividad: 'activo',
          nota: 'Metabolito activo circulante principal; su exposición es alrededor del 20 % de la del vorapaxar.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'The major active circulating metabolite is M20 (monohydroxy metabolite)',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'M19 (amina)',
          actividad: 'desconocida',
          nota: 'Metabolito predominante en las excretas; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'the predominant metabolite identified in excreta is M19 (amine metabolite)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de eliminación son las heces: en 6 semanas se recuperó el 84 % de la dosis marcada, el 58 % en las heces y el 25 % en la orina, sin vorapaxar inalterado en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de eliminación son las heces: en 6 semanas se recuperó el 84 % de la dosis marcada, el 58 % en las heces y el 25 % en la orina, sin vorapaxar inalterado en la orina.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'In a 6-week study, 84% of the administered radiolabeled dose was recovered as total radioactivity with 58% collected in feces and 25% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de 3 a 4 días y la semivida terminal aparente de unos 8 días.',
          ref: {
            f: 'dailymed-vorapaxar',
            sec: '12.3 · Farmacocinética',
            cita: 'Vorapaxar exhibits multi-exponential disposition with an effective half-life of 3-4 days and an apparent terminal elimination half-life of 8 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '100 (aprox.)',
      unidad: '%',
      analito: 'vorapaxar',
      ref: {
        f: 'dailymed-vorapaxar',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability as determined from a microdosing study is approximately 100%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax en ayunas',
      valor: '1',
      unidad: 'h',
      analito: 'vorapaxar',
      condiciones: 'dosis única de 2,08 mg en ayunas',
      ref: {
        f: 'dailymed-vorapaxar',
        sec: '12.3 · Farmacocinética',
        cita: 'peak concentrations (C max ) occur at 1 hour post-dose (range: 1 to 2 h)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '424 (aprox.)',
      unidad: 'L',
      analito: 'vorapaxar',
      ref: {
        f: 'dailymed-vorapaxar',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution of vorapaxar is approximately 424 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≥ 99',
      unidad: '%',
      analito: 'vorapaxar y M20',
      ref: { f: 'dailymed-vorapaxar', sec: '12.3 · Farmacocinética', cita: 'are extensively bound (≥99%) to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '3-4',
      unidad: 'días',
      analito: 'vorapaxar',
      ref: {
        f: 'dailymed-vorapaxar',
        sec: '12.3 · Farmacocinética',
        cita: 'with an effective half-life of 3-4 days and an apparent terminal elimination half-life of 8 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis marcada recogida en las heces',
      valor: '58',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'estudio de 6 semanas',
      ref: { f: 'dailymed-vorapaxar', sec: '12.3 · Farmacocinética', cita: '58% collected in feces and 25% in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vorapaxar', 'f2abe3ed-ed3d-4215-a489-b18341ce85bc', 'ZONTIVITY (VORAPAXAR) TABLET, FILM COATED', 'ZONTIVITY', '2', '2022-10-19', '2026-11-19'),
    rengPubchem(10077130, 'vorapaxar', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
