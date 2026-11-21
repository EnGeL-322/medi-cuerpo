import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acoramidis',
    nombre: 'Acoramidis',
    clase: 'Estabilizador selectivo de la transtiretina',
    sinonimos: [ 'acoramidis', 'Attruby' ],
    formula: 'C15H17FN2O3',
    masaMolar: 292.3,
    smiles: 'CC1=C(C(=NN1)C)CCCOC2=C(C=CC(=C2)C(=O)O)F',
    inchikey: 'WBFUHHBPNXWNCC-UHFFFAOYSA-N',
    cid: 71464713,
    iupac: '3-[3-(3,5-dimethyl-1H-pyrazol-4-yl)propoxy]-4-fluorobenzoic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'acoramidis-oral',
      producto: 'Attruby · comprimido recubierto con película',
      titular: 'BRIDGEBIO PHARMA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '356 mg de acoramidis (equivalentes a 400 mg de clorhidrato) por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de acoramidis',
        ref: { f: 'dailymed-acoramidis', sec: '11 · Descripción', cita: 'equivalent to 400 mg acoramidis HCl', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol graft polyethylene glycol copolymer (3:1; 45000 mw)',
        'talc',
        'titanium dioxide',
        'glyceryl mono- and dicaprylocaprate',
        'polyvinyl alcohol, unspecified',
        'ferrosoferric oxide',
        'propylene glycol',
        'hypromellose 2910 (6 mpa.s)'
      ],
      usos: {
        t: 'Tratamiento de la miocardiopatía por amiloidosis de transtiretina, natural o variante, en adultos, para reducir la muerte y las hospitalizaciones cardiovasculares.',
        ref: {
          f: 'dailymed-acoramidis',
          sec: '1 · Indicaciones',
          cita: 'ATTRUBY is indicated for the treatment of the cardiomyopathy of wild-type or variant transthyretin-mediated amyloidosis (ATTR-CM) in adults to reduce cardiovascular death',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acoramidis',
      reacciones: [
        [
          'Las reacciones gastrointestinales fueron más frecuentes que con placebo: diarrea (11,6 % frente a 7,6 %) y dolor en la parte alta del abdomen (5,5 % frente a 1,4 %).',
          '34084-4',
          'There was a higher frequency of gastrointestinal (GI) adverse reactions such as diarrhea 11.6% versus 7.6% and upper abdominal pain 5.5% versus 1.4% in the ATTRUBY versus placebo group'
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
    contiene: 'Comprimido recubierto con película: 356 mg de acoramidis (equivalentes a 400 mg de clorhidrato) por comprimido, según la etiqueta; el activo va como clorhidrato de acoramidis. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la miocardiopatía por amiloidosis de transtiretina, natural o variante, en adultos, para reducir la muerte y las hospitalizaciones cardiovasculares.',
    actua: 'Estabiliza la transtiretina: se une a sus sitios de unión de la tiroxina y frena la disociación del tetrámero en monómeros, el paso limitante de la formación de amiloide.',
    recorrido: 'El pico aparece en alrededor de 1 hora; una comida rica en grasas no cambia de forma relevante la exposición. Tras una dosis marcada en adultos sanos, alrededor del 68 % se recuperó en la orina (menos del 10 % sin cambios) y el 32 % en las heces.'
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
            f: 'dailymed-acoramidis',
            sec: '3 · Formas y concentraciones',
            cita: 'white, film-coated, oval tablets, printed with the BridgeBio company logo',
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
      ocurre: 'El pico aparece en alrededor de 1 hora; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico aparece en alrededor de 1 hora; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to C max of acoramidis (T max ) is approximately 1 hour following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in acoramidis pharmacokinetics were observed following administration of a high-fat meal',
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
      ocurre: 'In vitro se une en un 96 % a las proteínas plasmáticas, sobre todo a la transtiretina; el volumen de distribución aparente en estado estacionario es de 654 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 96 % a las proteínas plasmáticas, sobre todo a la transtiretina; el volumen de distribución aparente en estado estacionario es de 654 L.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'Acoramidis is 96% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 654 L.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent steady-state volume of distribution for acoramidis is 654 liters',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se une sobre todo a la transtiretina.',
          ref: { f: 'dailymed-acoramidis', sec: '12.3 · Farmacocinética', cita: 'Acoramidis primarily binds to TTR', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Transtiretina (TTR)',
        efecto: 'Estabiliza la transtiretina: se une a sus sitios de unión de la tiroxina y frena la disociación del tetrámero en monómeros, el paso limitante de la formación de amiloide.',
        lugar: [],
        datos: [
          {
            t: 'Estabiliza la transtiretina: se une a sus sitios de unión de la tiroxina y frena la disociación del tetrámero en monómeros, el paso limitante de la formación de amiloide.',
            ref: {
              f: 'dailymed-acoramidis',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Acoramidis binds TTR at thyroxine binding sites and slows dissociation of the TTR tetramer into its constituent monomers, the rate-limiting step in amyloidogenesis',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un estabilizador selectivo de la transtiretina.',
            ref: {
              f: 'dailymed-acoramidis',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Acoramidis is a selective stabilizer of transthyretin (TTR)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por glucuronidación mediante la UGT1A9, la UGT1A1 y la UGT2B7.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por glucuronidación mediante la UGT1A9, la UGT1A1 y la UGT2B7.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'Acoramidis is primarily metabolized by glucuronidation via UGT1A9, UGT1A1 and UGT2B7',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Acil-glucurónido de acoramidis (acoramidis-AG)',
          actividad: 'activo',
          nota: 'Un tercio de la actividad del fármaco; según la etiqueta no contribuye a su efecto.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'Acoramidis-AG is approximately 1/3 as pharmacologically active compared with acoramidis',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada en adultos sanos, alrededor del 68 % se recuperó en la orina (menos del 10 % sin cambios) y el 32 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada en adultos sanos, alrededor del 68 % se recuperó en la orina (menos del 10 % sin cambios) y el 32 % en las heces.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 32% of the dose radioactivity was recovered in feces (15% unchanged), and approximately 68% was recovered in urine (<10% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de unas 6 horas y el aclaramiento aparente en estado estacionario, de 16 L/h.',
          ref: {
            f: 'dailymed-acoramidis',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life of acoramidis is approximately 6 hours with a steady state apparent clearance of 16 L/hr',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'acoramidis',
      ref: {
        f: 'dailymed-acoramidis',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to C max of acoramidis (T max ) is approximately 1 hour following oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '96',
      unidad: '%',
      analito: 'acoramidis',
      ref: { f: 'dailymed-acoramidis', sec: '12.3 · Farmacocinética', cita: 'Acoramidis is 96% bound to human plasma proteins in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '654',
      unidad: 'L',
      analito: 'acoramidis',
      ref: {
        f: 'dailymed-acoramidis',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent steady-state volume of distribution for acoramidis is 654 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'acoramidis',
      ref: {
        f: 'dailymed-acoramidis',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life of acoramidis is approximately 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '16',
      unidad: 'L/h',
      analito: 'acoramidis',
      ref: { f: 'dailymed-acoramidis', sec: '12.3 · Farmacocinética', cita: 'with a steady state apparent clearance of 16 L/hr', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '68 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      condiciones: 'dosis oral única marcada de 712 mg',
      ref: { f: 'dailymed-acoramidis', sec: '12.3 · Farmacocinética', cita: 'approximately 68% was recovered in urine (<10% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acoramidis', '913552ef-875d-4cb7-bf05-a7d20a394c38', 'ATTRUBY (ACORAMIDIS HYDROCHLORIDE) TABLET, FILM COATED', 'Attruby', '8', '2026-07-03', '2026-11-19'),
    rengPubchem(71464713, 'acoramidis', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
