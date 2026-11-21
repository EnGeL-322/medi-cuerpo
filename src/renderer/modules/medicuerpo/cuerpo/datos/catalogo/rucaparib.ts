import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rucaparib',
    nombre: 'Rucaparib',
    clase: 'Inhibidor de la poli (ADP-ribosa) polimerasa (PARP)',
    sinonimos: [ 'rucaparib camsylate', 'Rubraca' ],
    formula: 'C19H18FN3O',
    masaMolar: 323.4,
    smiles: 'CNCC1=CC=C(C=C1)C2=C3CCNC(=O)C4=C3C(=CC(=C4)F)N2',
    inchikey: 'HMABYWSNWIZPAG-UHFFFAOYSA-N',
    cid: 9931954,
    iupac: '6-fluoro-2-[4-(methylaminomethyl)phenyl]-3,10-diazatricyclo[6.4.1.04,13]trideca-1,4,6,8(13)-tetraen-9-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'rucaparib-oral',
      producto: 'Rubraca · comprimido recubierto con película',
      titular: 'PHARMAAND GMBH',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg, 300 mg o 250 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Camsilato de rucaparib',
        ref: { f: 'dailymed-rucaparib', sec: '11 · Descripción', cita: 'The chemical formula of rucaparib camsylate is', codigo: '34089-3' }
      },
      excipientes: [
        'sodium starch glycolate type a potato',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'fd&c blue no. 1',
        'fd&c blue no. 2',
        'cellulose, microcrystalline'
      ],
      usos: {
        t: 'Mantenimiento del cáncer epitelial de ovario, trompa o peritoneo recurrente con mutación de BRCA y tratamiento del cáncer de próstata resistente a la castración con mutación de BRCA, según la etiqueta.',
        ref: {
          f: 'dailymed-rucaparib',
          sec: '1 · Indicaciones',
          cita: 'Ovarian cancer for the maintenance treatment of adult patients with a deleterious BRCA mutation (germline and/or somatic)-associated recurrent epithelial ovarian',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rucaparib',
      advertencias: [
        {
          titulo: 'Síndrome mielodisplásico y leucemia mieloide aguda',
          texto: 'Han aparecido, algunos mortales; vigilar la toxicidad hematológica al inicio y cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-rucaparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'MDS/AML occurred in patients exposed to RUBRACA, and some cases were fatal',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; usar anticoncepción eficaz.',
          organos: [],
          ref: {
            f: 'dailymed-rucaparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Embryo-Fetal Toxicity: RUBRACA can cause fetal harm',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En cáncer de ovario, las más frecuentes (10 % o más): náuseas, fatiga, anemia, aumento de ALT/AST, vómitos, diarrea, disminución del apetito, trombocitopenia, disgeusia y neutropenia, entre otras.',
          '34084-4',
          'Most common adverse reactions (≥10%) among patients with ovarian cancer were nausea, fatigue (including asthenia), anemia, ALT/AST increased, vomiting, diarrhea, decreased appetite, thrombocytopenia'
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
    contiene: 'Comprimido recubierto con película: 200 mg, 300 mg o 250 mg por comprimido, según la etiqueta; el activo va como camsilato de rucaparib. Los excipientes no son el principio activo.',
    usos: 'Mantenimiento del cáncer epitelial de ovario, trompa o peritoneo recurrente con mutación de BRCA y tratamiento del cáncer de próstata resistente a la castración con mutación de BRCA, según la etiqueta.',
    actua: 'Inhibe las enzimas PARP-1, PARP-2 y PARP-3, implicadas en la reparación del ADN; aumenta los complejos PARP-ADN y causa daño del ADN, apoptosis y muerte de células tumorales.',
    recorrido: 'La biodisponibilidad absoluta media es del 36 % y la mediana del tmax en estado estacionario de 1,9 horas; una comida grasa aumenta la Cmax un 20 % y el AUC un 38 %. Tras una dosis marcada, el rucaparib inalterado fue el 64 % de la radiactividad; supuso el 45 % de la radiactividad de la orina y el 95 % de la de las heces.'
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
            f: 'dailymed-rucaparib',
            sec: '11 · Descripción',
            cita: 'Rubraca tablets include: microcrystalline cellulose, sodium starch glycolate, colloidal silicon dioxide, and magnesium stearate',
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
      ocurre: 'La biodisponibilidad absoluta media es del 36 % y la mediana del tmax en estado estacionario de 1,9 horas; una comida grasa aumenta la Cmax un 20 % y el AUC un 38 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 36 % y la mediana del tmax en estado estacionario de 1,9 horas; una comida grasa aumenta la Cmax un 20 % y el AUC un 38 %.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (min, max) absolute bioavailability is 36% (30%, 45%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax subió un 20 %, el AUC un 38 % y el tmax se retrasó 2,5 horas.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'the C max was increased by 20%, AUC 0-24h was increased by 38%, and the T max was delayed by 2.5 hours',
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
      ocurre: 'Se une en un 70 % a las proteínas in vitro y se reparte preferentemente en los glóbulos rojos (cociente sangre/plasma 1,8); el volumen de distribución aparente es de 2 300 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 70 % a las proteínas in vitro y se reparte preferentemente en los glóbulos rojos (cociente sangre/plasma 1,8); el volumen de distribución aparente es de 2 300 L.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Rucaparib is 70% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se distribuye preferentemente en los glóbulos rojos, con un cociente sangre/plasma de 1,8.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Rucaparib preferentially distributed to red blood cells with a blood-to-plasma concentration ratio of 1.8',
            codigo: '43682-4'
          },
          poblacion: 'sangre'
        },
        {
          t: 'Volumen de distribución aparente medio de 2 300 L.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution is 2300 L (21%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PARP-1, PARP-2 y PARP-3',
        efecto: 'Inhibe las enzimas PARP-1, PARP-2 y PARP-3, implicadas en la reparación del ADN; aumenta los complejos PARP-ADN y causa daño del ADN, apoptosis y muerte de células tumorales.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las enzimas PARP-1, PARP-2 y PARP-3, implicadas en la reparación del ADN; aumenta los complejos PARP-ADN y causa daño del ADN, apoptosis y muerte de células tumorales.',
            ref: {
              f: 'dailymed-rucaparib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Rucaparib is an inhibitor of poly (ADP-ribose) polymerase (PARP) enzymes, including PARP-1, PARP-2, and PARP-3, which play a role in DNA repair',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP2D6 y, en menor medida, por la CYP1A2 y la CYP3A4; además sufre N-desmetilación, N-metilación y glucuronidación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP2D6 y, en menor medida, por la CYP1A2 y la CYP3A4; además sufre N-desmetilación, N-metilación y glucuronidación.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro, rucaparib is primarily metabolized by CYP2D6 and to a lesser extent by CYP1A2 and CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el rucaparib inalterado fue el 64 % de la radiactividad; supuso el 45 % de la radiactividad de la orina y el 95 % de la de las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el rucaparib inalterado fue el 64 % de la radiactividad; supuso el 45 % de la radiactividad de la orina y el 95 % de la de las heces.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Rucaparib accounted for 45% and 95% of radioactivity in urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 26 horas y el aclaramiento aparente de 44,2 L/h.',
          ref: {
            f: 'dailymed-rucaparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent total clearance at steady state is 44.2 L/h (45%) and the mean terminal elimination half-life is 26 (39%) hours',
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
      valor: '36',
      unidad: '%',
      analito: 'rucaparib',
      ref: {
        f: 'dailymed-rucaparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (min, max) absolute bioavailability is 36% (30%, 45%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en estado estacionario',
      valor: '1,9',
      unidad: 'h',
      analito: 'rucaparib',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-rucaparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max (min, max) at the steady state is 1.9 hours (0, 5.98)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '70',
      unidad: '%',
      analito: 'rucaparib',
      ref: { f: 'dailymed-rucaparib', sec: '12.3 · Farmacocinética', cita: 'Rucaparib is 70% bound to human plasma proteins in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '2300',
      unidad: 'L',
      analito: 'rucaparib',
      ref: { f: 'dailymed-rucaparib', sec: '12.3 · Farmacocinética', cita: 'The mean apparent volume of distribution is 2300 L (21%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '26',
      unidad: 'h',
      analito: 'rucaparib',
      ref: { f: 'dailymed-rucaparib', sec: '12.3 · Farmacocinética', cita: 'the mean terminal elimination half-life is 26 (39%) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente en estado estacionario',
      valor: '44,2',
      unidad: 'L/h',
      analito: 'rucaparib',
      ref: {
        f: 'dailymed-rucaparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent total clearance at steady state is 44.2 L/h (45%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rucaparib', '0295d202-1cfe-7659-e063-6294a90a476e', 'RUBRACA (RUCAPARIB) TABLET, FILM COATED', 'Rubraca', '20', '2026-10-19', '2026-11-19'),
    rengPubchem(9931954, 'rucaparib camsylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
