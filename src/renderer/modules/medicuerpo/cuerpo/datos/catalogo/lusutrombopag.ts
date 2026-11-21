import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lusutrombopag',
    nombre: 'Lusutrombopag',
    clase: 'Agonista del receptor de trombopoyetina',
    sinonimos: [ 'lusutrombopag', 'Mulpleta' ],
    formula: 'C29H32Cl2N2O5S',
    masaMolar: 591.5,
    smiles: 'CCCCCCO[C@@H](C)C1=CC=CC(=C1OC)C2=CSC(=N2)NC(=O)C3=CC(=C(C(=C3)Cl)/C=C(\\C)/C(=O)O)Cl',
    inchikey: 'NOZIJMHMKORZBA-KJCUYJGMSA-N',
    cid: 49843517,
    iupac: '(E)-3-[2,6-dichloro-4-[[4-[3-[(1S)-1-hexoxyethyl]-2-methoxyphenyl]-1,3-thiazol-2-yl]carbamoyl]phenyl]-2-methylprop-2-enoic acid',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'lusutrombopag-oral',
      producto: 'Mulpleta · comprimido recubierto con película',
      titular: 'VANCOCIN ITALIA SRL',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '3 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'magnesium oxide',
        'sodium lauryl sulfate',
        'hydroxypropyl cellulose, unspecified',
        'carboxymethylcellulose calcium',
        'magnesium stearate',
        'hypromellose, unspecified',
        'triethyl citrate',
        'titanium dioxide',
        'ferric oxide red',
        'talc',
        'mannitol'
      ],
      usos: {
        t: 'Tratamiento de la trombocitopenia en adultos con hepatopatía crónica que van a someterse a un procedimiento.',
        ref: {
          f: 'dailymed-lusutrombopag',
          sec: '1 · Indicaciones',
          cita: 'MULPLETA is indicated for the treatment of thrombocytopenia in adult patients with chronic liver disease who are scheduled to undergo a procedure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lusutrombopag',
      advertencias: [
        {
          titulo: 'Complicaciones trombóticas y tromboembólicas',
          texto: 'Los agonistas del receptor de trombopoyetina se han asociado a complicaciones trombóticas en la hepatopatía crónica, incluida la trombosis de la vena porta; vigilar las plaquetas.',
          organos: [],
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '5 · Advertencias y precauciones',
            cita: 'TPO receptor agonists have been associated with thrombotic and thromboembolic complications in patients with chronic liver disease',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [ 'La reacción adversa más frecuente (3 % o más) fue la cefalea.', '34084-4', 'most common adverse reaction (≥3%): headache' ],
        [
          'Se evaluó en 3 ensayos aleatorizados y controlados con placebo en pacientes con hepatopatía crónica y trombocitopenia (171 con lusutrombopag).',
          '34084-4',
          'was evaluated in 3 randomized, double-blind, placebo-controlled trials, L-PLUS 1, L-PLUS 2, and M0626'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 3 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la trombocitopenia en adultos con hepatopatía crónica que van a someterse a un procedimiento.',
    actua: 'Agonista del receptor de trombopoyetina que actúa sobre el dominio transmembrana del receptor en los megacariocitos e induce la proliferación y diferenciación de progenitores megacariocíticos y la maduración de megacariocitos.',
    recorrido: 'En pacientes con hepatopatía crónica el pico aparece a las 6-8 horas; una comida rica en grasas no afectó al AUC ni a la Cmax. La excreción fecal supuso el 83 % de la dosis (16 % sin cambios) y la urinaria alrededor del 1 %.'
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
            f: 'dailymed-lusutrombopag',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 3 mg lusutrombopag as a light red, round, film-coated tablet',
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
      ocurre: 'En pacientes con hepatopatía crónica el pico aparece a las 6-8 horas; una comida rica en grasas no afectó al AUC ni a la Cmax.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En pacientes con hepatopatía crónica el pico aparece a las 6-8 horas; una comida rica en grasas no afectó al AUC ni a la Cmax.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'In patients with chronic liver disease, the time to peak lusutrombopag concentration (T max ) was observed 6 to 8 hours after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC y la Cmax no cambiaron.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Lusutrombopag AUC and C max were not affected when MULPLETA was co-administered with a high-fat meal',
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
      ocurre: 'Se une en más del 99,9 % a las proteínas del plasma; su volumen de distribución aparente medio en adultos sanos es de 39,5 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99,9 % a las proteínas del plasma; su volumen de distribución aparente medio en adultos sanos es de 39,5 L.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of lusutrombopag is more than 99.9%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio de 39,5 L en adultos sanos.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (%CV) lusutrombopag apparent volume of distribution in healthy adult subjects was 39.5 (23.5) L',
            codigo: '43682-4'
          },
          poblacion: 'adultos sanos'
        }
      ],
      accion: {
        diana: 'Receptor de trombopoyetina (TPO)',
        efecto: 'Agonista del receptor de trombopoyetina que actúa sobre el dominio transmembrana del receptor en los megacariocitos e induce la proliferación y diferenciación de progenitores megacariocíticos y la maduración de megacariocitos.',
        lugar: [],
        datos: [
          {
            t: 'Agonista del receptor de trombopoyetina que actúa sobre el dominio transmembrana del receptor en los megacariocitos e induce la proliferación y diferenciación de progenitores megacariocíticos y la maduración de megacariocitos.',
            ref: {
              f: 'dailymed-lusutrombopag',
              sec: '12.1 · Mecanismo de acción',
              cita: 'interacts with the transmembrane domain of human TPO receptors expressed on megakaryocytes to induce the proliferation and differentiation of megakaryocytic progenitor cells from hematopoietic stem cells and megakaryocyte maturation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por enzimas CYP4, incluida la CYP4A11.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por enzimas CYP4, incluida la CYP4A11.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Lusutrombopag is primarily metabolized by CYP4 enzymes, including CYP4A11',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción fecal supuso el 83 % de la dosis (16 % sin cambios) y la urinaria alrededor del 1 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción fecal supuso el 83 % de la dosis (16 % sin cambios) y la urinaria alrededor del 1 %.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Fecal excretion accounted for 83% of the administered dose, with 16% of the dose excreted as unchanged lusutrombopag, and urinary excretion accounted for approximately 1%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal en adultos sanos es de unas 27 horas.',
          ref: {
            f: 'dailymed-lusutrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life (t 1/2 ) in healthy adult subjects was approximately 27 hours',
            codigo: '43682-4'
          },
          poblacion: 'adultos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '6-8',
      unidad: 'h',
      analito: 'lusutrombopag',
      poblacion: 'pacientes con hepatopatía crónica',
      ref: {
        f: 'dailymed-lusutrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'the time to peak lusutrombopag concentration (T max ) was observed 6 to 8 hours after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99,9',
      unidad: '%',
      analito: 'lusutrombopag',
      ref: {
        f: 'dailymed-lusutrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of lusutrombopag is more than 99.9%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '39,5',
      unidad: 'L',
      analito: 'lusutrombopag',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-lusutrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) lusutrombopag apparent volume of distribution in healthy adult subjects was 39.5 (23.5) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '27 (aprox.)',
      unidad: 'h',
      analito: 'lusutrombopag',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-lusutrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life (t 1/2 ) in healthy adult subjects was approximately 27 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento',
      valor: '1,1',
      unidad: 'L/h',
      analito: 'lusutrombopag',
      poblacion: 'pacientes con hepatopatía crónica',
      ref: {
        f: 'dailymed-lusutrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) clearance of lusutrombopag in patients with chronic liver disease is estimated to be 1.1 (36.1) L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces',
      valor: '83',
      unidad: '% de la dosis',
      analito: 'lusutrombopag y metabolitos',
      ref: {
        f: 'dailymed-lusutrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'Fecal excretion accounted for 83% of the administered dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lusutrombopag', 'a390aec3-6e77-45f8-95d3-d4b8c2eeee40', 'MULPLETA (LUSUTROMBOPAG) TABLET, FILM COATED', 'Mulpleta', '6', '2025-12-10', '2026-11-19'),
    rengPubchem(49843517, 'lusutrombopag', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
