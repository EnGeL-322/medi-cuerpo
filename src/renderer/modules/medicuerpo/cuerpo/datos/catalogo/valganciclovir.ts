import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'valganciclovir',
    nombre: 'Valganciclovir',
    clase: 'Antiviral (profármaco del ganciclovir)',
    sinonimos: [ 'valganciclovir', 'Valcyte' ],
    formula: 'C14H22N6O5',
    masaMolar: 354.36,
    smiles: 'CC(C)[C@@H](C(=O)OCC(CO)OCN1C=NC2=C1N=C(NC2=O)N)N',
    inchikey: 'WPVFJKSGQUFQAP-GKAPJAKFSA-N',
    cid: 135413535,
    iupac: '[2-[(2-amino-6-oxo-1H-purin-9-yl)methoxy]-3-hydroxypropyl] (2S)-2-amino-3-methylbutanoate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'valganciclovir-oral',
      producto: 'Valcyte · comprimido recubierto con película',
      titular: 'H2-PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '450 mg de valganciclovir por comprimido (496,3 mg de clorhidrato de valganciclovir)',
      sal: {
        nombre: 'Clorhidrato de valganciclovir',
        ref: {
          f: 'dailymed-valganciclovir',
          sec: '11 · Descripción',
          cita: 'Each tablet contains 496.3 mg of valganciclovir HCl (corresponding to 450 mg of valganciclovir)',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'microcrystalline cellulose',
        'povidone k30',
        'crospovidone (120 .mu.m)',
        'stearic acid',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'polyethylene glycol 400',
        'ferric oxide red',
        'polysorbate 80'
      ],
      usos: {
        t: 'Retinitis por citomegalovirus (CMV) en personas con sida y prevención de la enfermedad por CMV en trasplantados de riñón, corazón y riñón-páncreas con alto riesgo.',
        ref: {
          f: 'dailymed-valganciclovir',
          sec: '1 · Indicaciones',
          cita: 'Treatment of CMV retinitis in patients with acquired immunodeficiency syndrome (AIDS)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-valganciclovir',
      advertencias: [
        {
          titulo: 'Toxicidad hematológica',
          texto: 'Se han descrito leucopenia, neutropenia, anemia y trombocitopenia graves, pancitopenia e insuficiencia de la médula ósea.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'dailymed-valganciclovir',
            sec: 'Advertencia destacada',
            cita: 'Severe leukopenia, neutropenia, anemia, thrombocytopenia, pancytopenia, and bone marrow failure including aplastic anemia have been reported',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Insuficiencia renal aguda',
          texto: 'Puede aparecer insuficiencia renal aguda, por ejemplo en personas mayores.',
          organos: [ 'rinones' ],
          ref: { f: 'dailymed-valganciclovir', sec: '5 · Advertencias y precauciones', cita: 'Acute renal failure may occur in', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Diarrea, fiebre, cansancio, náuseas y temblor, entre las más frecuentes (≥ 20 % de los adultos en al menos una indicación).',
          '34084-4',
          'are diarrhea, pyrexia, fatigue, nausea, tremor, neutropenia, anemia'
        ],
        [
          'Alteraciones de la sangre: neutropenia, anemia, leucopenia y trombocitopenia (≥ 20 %).',
          '34084-4',
          'neutropenia, anemia, leukopenia, thrombocytopenia, headache'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 450 mg de valganciclovir por comprimido (496,3 mg de clorhidrato de valganciclovir). Los excipientes no son el principio activo.',
    usos: 'Retinitis por citomegalovirus (CMV) en personas con sida y prevención de la enfermedad por CMV en trasplantados de riñón, corazón y riñón-páncreas con alto riesgo.',
    actua: 'Es un profármaco: las esterasas del intestino y del hígado lo convierten en ganciclovir. En las células infectadas, el ganciclovir se fosforila (primero por la quinasa viral pUL97) hasta trifosfato, que frena la replicación del citomegalovirus.',
    recorrido: 'Se absorbe y se convierte rápido en ganciclovir: el valganciclovir apenas se ve en la sangre (su Cmax es cerca del 1 % de la del ganciclovir). La biodisponibilidad absoluta del ganciclovir desde el comprimido, tomado con comida, ronda el 59 %. El ganciclovir sale por los riñones, por filtración glomerular y secreción tubular activa. Su semivida es de unas 4 horas en voluntarios sanos y adultos con VIH y CMV.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 450 mg; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 450 mg; la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-valganciclovir',
            sec: '3 · Formas y concentraciones',
            cita: '450 mg, pink, film-coated convex oval tablets',
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
      ocurre: 'Se absorbe y se convierte rápido en ganciclovir: el valganciclovir apenas se ve en la sangre (su Cmax es cerca del 1 % de la del ganciclovir). La biodisponibilidad absoluta del ganciclovir desde el comprimido, tomado con comida, ronda el 59 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe y se convierte rápido en ganciclovir: el valganciclovir apenas se ve en la sangre (su Cmax es cerca del 1 % de la del ganciclovir). La biodisponibilidad absoluta del ganciclovir desde el comprimido, tomado con comida, ronda el 59 %.',
          ref: {
            f: 'dailymed-valganciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Valganciclovir C max and AUC are approximately 1% and 3% of those of ganciclovir',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad oral absoluta del ganciclovir: 59,4 % (media).',
          ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: 'Absolute oral bioavailability (%) 32 59.4', codigo: '43682-4' },
          condiciones: 'con comida'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El ganciclovir apenas se une a proteínas del plasma (1-2 %) y llega al líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El ganciclovir apenas se une a proteínas del plasma (1-2 %) y llega al líquido cefalorraquídeo.',
          ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: '1–2% over 0.5– 51 mcg/mL', codigo: '43682-4' }
        },
        {
          t: 'El ganciclovir penetra en el líquido cefalorraquídeo.',
          ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: 'Cerebrospinal fluid penetration Unknown Yes', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'ADN polimerasa del citomegalovirus',
        efecto: 'Es un profármaco: las esterasas del intestino y del hígado lo convierten en ganciclovir. En las células infectadas, el ganciclovir se fosforila (primero por la quinasa viral pUL97) hasta trifosfato, que frena la replicación del citomegalovirus.',
        lugar: [ 'sitio-infeccion', 'ojos' ],
        datos: [
          {
            t: 'Es un profármaco: las esterasas del intestino y del hígado lo convierten en ganciclovir. En las células infectadas, el ganciclovir se fosforila (primero por la quinasa viral pUL97) hasta trifosfato, que frena la replicación del citomegalovirus.',
            ref: {
              f: 'dailymed-valganciclovir',
              sec: '12.1 · Mecanismo de acción',
              cita: 'both diastereomers are rapidly converted to ganciclovir by intestinal and hepatic esterases',
              codigo: '43679-0'
            }
          },
          {
            t: "El ganciclovir es un análogo de la 2'-desoxiguanosina que inhibe la replicación del CMV.",
            ref: {
              f: 'dailymed-valganciclovir',
              sec: '12.1 · Mecanismo de acción',
              cita: "Ganciclovir is a synthetic analogue of 2'-deoxyguanosine, which inhibits replication of human CMV",
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las esterasas del intestino y del hígado hidrolizan el valganciclovir a ganciclovir, que después no se metaboliza de forma significativa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las esterasas del intestino y del hígado hidrolizan el valganciclovir a ganciclovir, que después no se metaboliza de forma significativa.',
          ref: {
            f: 'dailymed-valganciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Hydrolyzed by intestinal and liver esterases No significant metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ganciclovir',
          actividad: 'activo',
          nota: 'Forma activa que se obtiene al hidrolizarse el profármaco.',
          ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: 'Valganciclovir is a prodrug of ganciclovir', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El ganciclovir sale por los riñones, por filtración glomerular y secreción tubular activa. Su semivida es de unas 4 horas en voluntarios sanos y adultos con VIH y CMV.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El ganciclovir sale por los riñones, por filtración glomerular y secreción tubular activa. Su semivida es de unas 4 horas en voluntarios sanos y adultos con VIH y CMV.',
          ref: {
            f: 'dailymed-valganciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Glomerular filtration and active tubular secretion',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '5,61 (DE 1,52)',
      unidad: 'mcg/mL',
      analito: 'ganciclovir',
      poblacion: 'voluntarios sanos y adultos con VIH y CMV',
      condiciones: '900 mg de valganciclovir una vez al día con comida',
      ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: 'C max (mcg/mL) 58 5.61', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '59,4 (DE 6,1)',
      unidad: '%',
      analito: 'ganciclovir (desde valganciclovir)',
      poblacion: 'voluntarios sanos y adultos con VIH y CMV',
      condiciones: 'con comida',
      ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: 'Absolute oral bioavailability (%) 32 59.4', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '4,08 (DE 0,76)',
      unidad: 'h',
      analito: 'ganciclovir',
      poblacion: 'voluntarios sanos y adultos con VIH y CMV',
      condiciones: '900 mg de valganciclovir una vez al día con comida',
      ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: 'Elimination half-life (hr) 73 4.08', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '1-2',
      unidad: '%',
      analito: 'ganciclovir',
      ref: { f: 'dailymed-valganciclovir', sec: '12.3 · Farmacocinética', cita: '1–2% over 0.5– 51 mcg/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax del profármaco respecto de la del ganciclovir',
      valor: '1 (aprox.)',
      unidad: '%',
      analito: 'valganciclovir (profármaco)',
      ref: {
        f: 'dailymed-valganciclovir',
        sec: '12.3 · Farmacocinética',
        cita: 'Valganciclovir C max and AUC are approximately 1% and 3% of those of ganciclovir',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-valganciclovir', '4c517a39-2ded-4c5a-8d56-276853414b31', 'VALCYTE (VALGANCICLOVIR) TABLET, FILM COATED VALCYTE (VALGANCICLOVIR HYDROCHLORIDE) POWDER, FOR SOLUTION', 'Valcyte', '24', '2025-12-10', '2026-11-12'),
    rengPubchem(135413535, 'valganciclovir', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
