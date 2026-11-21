import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lazertinib',
    nombre: 'Lazertinib',
    clase: 'Inhibidor del EGFR con mutaciones activadoras',
    sinonimos: [ 'lazertinib', 'Lazcluze' ],
    formula: 'C30H34N8O3',
    masaMolar: 554.6,
    smiles: 'CN(C)CC1=CN(N=C1C2=CC=CC=C2)C3=NC(=NC=C3)NC4=C(C=C(C(=C4)NC(=O)C=C)N5CCOCC5)OC',
    inchikey: 'RRMJMHOQSALEJJ-UHFFFAOYSA-N',
    cid: 121269225,
    iupac: 'N-[5-[[4-[4-[(dimethylamino)methyl]-3-phenylpyrazol-1-yl]pyrimidin-2-yl]amino]-4-methoxy-2-morpholin-4-ylphenyl]prop-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'lazertinib-oral',
      producto: 'LAZCLUZE · comprimido recubierto con película',
      titular: 'JANSSEN BIOTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '240 mg o 80 mg por comprimido, según la etiqueta',
      excipientes: [
        'ferric oxide red',
        'silicon dioxide',
        'croscarmellose sodium',
        'microcrystalline cellulose',
        'mannitol',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'glyceryl monocaprylocaprate',
        'titanium dioxide',
        'talc',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento de primera línea, con amivantamab, del cáncer de pulmón no microcítico avanzado con deleciones del exón 19 o sustitución L858R del exón 21 del EGFR.',
        ref: {
          f: 'dailymed-lazertinib',
          sec: '1 · Indicaciones',
          cita: 'for the first-line treatment of adult patients with locally advanced or metastatic non-small cell lung cancer (NSCLC) with epidermal growth factor receptor (EGFR) exon 19 deletions or exon 21 L858R substitution mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lazertinib',
      advertencias: [
        {
          titulo: 'Episodios tromboembólicos venosos',
          texto: 'Vigilar los signos y síntomas de tromboembolia venosa y tratarla.',
          organos: [],
          ref: {
            f: 'dailymed-lazertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for signs and symptoms of VTE and treat as medically appropriate',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas nuevos o que empeoran, como disnea, tos o fiebre.',
          organos: [],
          ref: {
            f: 'dailymed-lazertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening symptoms indicative of ILD/pneumonitis (e.g., dyspnea, cough, fever)',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones dermatológicas',
          texto: 'Limitar la exposición al sol durante el tratamiento y hasta 2 meses después.',
          organos: [],
          ref: {
            f: 'dailymed-lazertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Instruct patients to limit sun exposure during and for 2 months after treatment with LAZCLUZE in combination with amivantamab',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas antes de empezar y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-lazertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Perform liver function tests (including ALT, AST, and total bilirubin) before initiation of LAZCLUZE and during treatment, as clinically indicated',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con amivantamab, las más frecuentes (20 % o más): exantema, toxicidad ungueal, reacción a la infusión del amivantamab, dolor musculoesquelético, edema, estomatitis, tromboembolia venosa, parestesias, fatiga y diarrea, entre otras.',
          '34084-4',
          'The most common adverse reactions (≥ 20%) were rash, nail toxicity, infusion-related reaction (amivantamab), musculoskeletal pain, edema, stomatitis, VTE, paresthesia, fatigue, diarrhea'
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
    contiene: 'Comprimido recubierto con película: 240 mg o 80 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de primera línea, con amivantamab, del cáncer de pulmón no microcítico avanzado con deleciones del exón 19 o sustitución L858R del exón 21 del EGFR.',
    actua: 'Inhibe el EGFR con deleciones del exón 19 o sustitución L858R del exón 21 a concentraciones menores que el EGFR normal.',
    recorrido: 'Una comida rica en grasas no tuvo un efecto clínicamente relevante sobre su farmacocinética frente al ayuno. Tras una dosis marcada, alrededor del 86 % se recuperó en las heces (menos del 5 % sin cambios) y el 4 % en la orina.'
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
          ref: { f: 'dailymed-lazertinib', sec: '3 · Formas y concentraciones', cita: 'yellow, oval film-coated tablet, debossed with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Una comida rica en grasas no tuvo un efecto clínicamente relevante sobre su farmacocinética frente al ayuno.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Una comida rica en grasas no tuvo un efecto clínicamente relevante sobre su farmacocinética frente al ayuno.',
          ref: {
            f: 'dailymed-lazertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal (800 to 1000 kcal, approximately 50% fat) did not have a clinically significant effect on lazertinib pharmacokinetics compared to that under fasted conditions',
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
      ocurre: 'Se une en alrededor del 99,2 % a las proteínas plasmáticas; el volumen de distribución aparente es de 2680 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 99,2 % a las proteínas plasmáticas; el volumen de distribución aparente es de 2680 L.',
          ref: {
            f: 'dailymed-lazertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Lazertinib is approximately 99.2% bound to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio de 2680 L.',
          ref: {
            f: 'dailymed-lazertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution is 2680 L (51%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'EGFR mutado',
        efecto: 'Inhibe el EGFR con deleciones del exón 19 o sustitución L858R del exón 21 a concentraciones menores que el EGFR normal.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe el EGFR con deleciones del exón 19 o sustitución L858R del exón 21 a concentraciones menores que el EGFR normal.',
            ref: {
              f: 'dailymed-lazertinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lazertinib is a kinase inhibitor of epidermal growth factor receptor (EGFR) that inhibits EGFR exon 19 deletions and exon 21 L858R substitution mutations at lower concentrations than wild-type EGFR',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por conjugación con glutatión, enzimática o no, y también por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por conjugación con glutatión, enzimática o no, y también por la CYP3A4.',
          ref: {
            f: 'dailymed-lazertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Lazertinib is primarily metabolized by glutathione conjugation, either enzymatic via glutathione-S-transferase (GST) or non-enzymatic, as well as by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 86 % se recuperó en las heces (menos del 5 % sin cambios) y el 4 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 86 % se recuperó en las heces (menos del 5 % sin cambios) y el 4 % en la orina.',
          ref: {
            f: 'dailymed-lazertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 86% of the dose was recovered in feces (< 5% as unchanged) and 4% in urine (< 0.2% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 3,7 días.',
          ref: { f: 'dailymed-lazertinib', sec: '12.3 · Farmacocinética', cita: 'The mean terminal half-life is 3.7 days (56%)', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,2 (aprox.)',
      unidad: '%',
      analito: 'lazertinib',
      ref: {
        f: 'dailymed-lazertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Lazertinib is approximately 99.2% bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '2680',
      unidad: 'L',
      analito: 'lazertinib',
      ref: { f: 'dailymed-lazertinib', sec: '12.3 · Farmacocinética', cita: 'The mean apparent volume of distribution is 2680 L (51%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '3,7',
      unidad: 'días',
      analito: 'lazertinib',
      ref: { f: 'dailymed-lazertinib', sec: '12.3 · Farmacocinética', cita: 'The mean terminal half-life is 3.7 days (56%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '36,4',
      unidad: 'L/h',
      analito: 'lazertinib',
      ref: { f: 'dailymed-lazertinib', sec: '12.3 · Farmacocinética', cita: 'The mean apparent clearance is 36.4 L/h (47%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '86 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-lazertinib', sec: '12.3 · Farmacocinética', cita: 'approximately 86% of the dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lazertinib', 'c417f9ee-2027-4ed5-92ad-3c19266de16c', 'LAZCLUZE (LAZERTINIB) TABLET, FILM COATED', 'LAZCLUZE', '6', '2026-05-07', '2026-11-19'),
    rengPubchem(121269225, 'lazertinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
