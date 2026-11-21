import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nintedanib',
    nombre: 'Nintedanib',
    clase: 'Inhibidor de tirosina quinasas (antifibrótico)',
    sinonimos: [ 'nintedanib', 'Ofev' ],
    formula: 'C31H33N5O4',
    masaMolar: 539.6,
    smiles: 'CN1CCN(CC1)CC(=O)N(C)C2=CC=C(C=C2)N=C(C3=CC=CC=C3)C4=C(NC5=C4C=CC(=C5)C(=O)OC)O',
    inchikey: 'CPMDPSXJELVGJG-UHFFFAOYSA-N',
    cid: 135423438,
    iupac: 'methyl 2-hydroxy-3-[N-[4-[methyl-[2-(4-methylpiperazin-1-yl)acetyl]amino]phenyl]-C-phenylcarbonimidoyl]-1H-indole-6-carboxylate',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'nintedanib-oral',
      producto: 'Ofev · cápsula',
      titular: 'BOEHRINGER INGELHEIM PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg o 100 mg por cápsula, según la etiqueta',
      sal: { nombre: 'Nintedanib esylate', ref: { f: 'dailymed-nintedanib', sec: '11 · Descripción', cita: 'Nintedanib esylate', codigo: '34089-3' } },
      excipientes: [ 'Grasa dura', 'Lecitina', 'Triglicéridos', 'Óxido de hierro rojo', 'Óxido de hierro amarillo', 'Gelatina', 'Glicerol', 'Dióxido de titanio' ],
      usos: {
        t: 'Tratamiento de la fibrosis pulmonar idiopática y de otras enfermedades pulmonares intersticiales fibrosantes crónicas con fenotipo progresivo, en adultos.',
        ref: { f: 'dailymed-nintedanib', sec: '1 · Indicaciones', cita: 'Treatment of idiopathic pulmonary fibrosis (IPF)', codigo: '34067-9' }
      },
      fuente: 'dailymed-nintedanib',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática moderada o grave',
          texto: 'No se recomienda el tratamiento en pacientes con insuficiencia hepática moderada (Child Pugh B) o grave (Child Pugh C).',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-nintedanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Treatment with OFEV is not recommended in patients with moderate (Child Pugh B) or severe (Child Pugh C) hepatic impairment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enzimas hepáticas elevadas y lesión hepática',
          texto: 'Se han producido elevaciones de ALT, AST y bilirrubina, incluidos casos de lesión hepática inducida por fármacos.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-nintedanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Elevated liver enzymes and drug-induced liver injury: ALT, AST, and bilirubin elevations have occurred with OFEV',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): diarrea, náuseas, dolor abdominal, vómitos, aumento de enzimas hepáticas, disminución del apetito, cefalea, pérdida de peso e hipertensión.',
          '34084-4',
          'Most common adverse reactions (≥5%) are: diarrhea, nausea, abdominal pain, vomiting, liver enzyme elevation, decreased appetite, headache, weight decreased, and hypertension'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la perforación gastrointestinal.',
          '34084-4',
          'Gastrointestinal Perforation [see Warnings and Precautions (5.7) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 150 mg o 100 mg por cápsula, según la etiqueta; el activo va como nintedanib esylate. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la fibrosis pulmonar idiopática y de otras enfermedades pulmonares intersticiales fibrosantes crónicas con fenotipo progresivo, en adultos.',
    actua: 'Es una molécula pequeña que inhibe varias tirosina quinasas de receptor y no de receptor, entre ellas los receptores PDGFR, FGFR y VEGFR, implicadas en la patogenia de la fibrosis pulmonar.',
    recorrido: 'Alcanzó concentraciones plasmáticas máximas unas 2 a 4 horas después de la administración oral como cápsula de gelatina blanda con comida. La vía principal de eliminación de la radiactividad tras la dosis oral marcada fue la excreción fecal y biliar (93,4 % de la dosis), sobre todo como BIBF 1202.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-nintedanib', sec: '3 · Formas y concentraciones', cita: '150 mg, brown, opaque, oblong, soft capsules', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Alcanzó concentraciones plasmáticas máximas unas 2 a 4 horas después de la administración oral como cápsula de gelatina blanda con comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Alcanzó concentraciones plasmáticas máximas unas 2 a 4 horas después de la administración oral como cápsula de gelatina blanda con comida.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'Nintedanib reached maximum plasma concentrations approximately 2 to 4 hours after oral administration as a soft gelatin capsule under fed conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta de una dosis de 100 mg fue del 4,7 % en voluntarios sanos.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of a 100 mg dose was 4.7% (90% CI: 3.62 to 6.08) in healthy volunteers',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'dosis de 100 mg'
        },
        {
          t: 'Tras la comida, la exposición aumentó alrededor de un 20 % respecto al ayuno y la absorción se retrasó.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'After food intake, nintedanib exposure increased by approximately 20% compared to administration under fasted conditions',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma humano in vitro es alta (fracción unida del 97,8 %), sobre todo a la albúmina; tras una infusión intravenosa, el volumen de distribución es mayor que el volumen corporal total (1050 L).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma humano in vitro es alta (fracción unida del 97,8 %), sobre todo a la albúmina; tras una infusión intravenosa, el volumen de distribución es mayor que el volumen corporal total (1050 L).',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The in vitro protein binding of nintedanib in human plasma was high, with a bound fraction of 97.8%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una infusión intravenosa se observó un volumen de distribución elevado, mayor que el volumen corporal total (Vss: 1050 L).',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'After intravenous infusion, a high volume of distribution which was larger than total body volume (V ss : 1050 L) was observed',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores PDGFR, FGFR y VEGFR (tirosina quinasas)',
        efecto: 'Es una molécula pequeña que inhibe varias tirosina quinasas de receptor y no de receptor, entre ellas los receptores PDGFR, FGFR y VEGFR, implicadas en la patogenia de la fibrosis pulmonar.',
        lugar: [ 'pulmones' ],
        datos: [
          {
            t: 'Es una molécula pequeña que inhibe varias tirosina quinasas de receptor y no de receptor, entre ellas los receptores PDGFR, FGFR y VEGFR, implicadas en la patogenia de la fibrosis pulmonar.',
            ref: {
              f: 'dailymed-nintedanib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Nintedanib is a small molecule that inhibits multiple receptor tyrosine kinases (RTKs) and non-receptor tyrosine kinases (nRTKs)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La reacción metabólica predominante es la escisión hidrolítica por esterasas, que da el ácido libre BIBF 1202; las vías del CYP (sobre todo la CYP3A4) son menores.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La reacción metabólica predominante es la escisión hidrolítica por esterasas, que da el ácido libre BIBF 1202; las vías del CYP (sobre todo la CYP3A4) son menores.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The prevalent metabolic reaction for nintedanib is hydrolytic cleavage by esterases resulting in the free acid moiety BIBF 1202',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'BIBF 1202 y su glucurónido',
          actividad: 'desconocida',
          nota: 'Metabolito ácido libre, que luego se glucuronida; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'BIBF 1202 is subsequently glucuronidated by UGT enzymes',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de eliminación de la radiactividad tras la dosis oral marcada fue la excreción fecal y biliar (93,4 % de la dosis), sobre todo como BIBF 1202.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de eliminación de la radiactividad tras la dosis oral marcada fue la excreción fecal y biliar (93,4 % de la dosis), sobre todo como BIBF 1202.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The major route of elimination of drug-related radioactivity after oral administration of [ 14 C] nintedanib was via fecal/biliary excretion (93.4% of dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva en pacientes con fibrosis pulmonar idiopática fue de 9,5 horas.',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life of nintedanib in patients with IPF was 9.5 hours (gCV 31.9%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La contribución de la excreción renal al aclaramiento total fue baja (0,65 % de la dosis).',
          ref: {
            f: 'dailymed-nintedanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The contribution of renal excretion to the total clearance was low (0.65% of dose)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '2-4 (aprox.)',
      unidad: 'h',
      analito: 'nintedanib',
      condiciones: 'con comida',
      ref: { f: 'dailymed-nintedanib', sec: '12.3 · Farmacocinética', cita: 'approximately 2 to 4 hours after oral administration', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (dosis de 100 mg)',
      valor: '4,7',
      unidad: '%',
      analito: 'nintedanib',
      poblacion: 'voluntarios sanos',
      ref: { f: 'dailymed-nintedanib', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability of a 100 mg dose was 4.7%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Fracción unida a proteínas plasmáticas',
      valor: '97,8',
      unidad: '%',
      analito: 'nintedanib',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-nintedanib', sec: '12.3 · Farmacocinética', cita: 'with a bound fraction of 97.8%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '1.050',
      unidad: 'L',
      analito: 'nintedanib',
      condiciones: 'infusión intravenosa',
      origen: 'otra-via',
      ref: { f: 'dailymed-nintedanib', sec: '12.3 · Farmacocinética', cita: 'V ss : 1050 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '9,5',
      unidad: 'h',
      analito: 'nintedanib',
      poblacion: 'pacientes con fibrosis pulmonar idiopática',
      ref: {
        f: 'dailymed-nintedanib',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life of nintedanib in patients with IPF was 9.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por vía fecal y biliar',
      valor: '93,4',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de nintedanib marcado',
      ref: { f: 'dailymed-nintedanib', sec: '12.3 · Farmacocinética', cita: 'fecal/biliary excretion (93.4% of dose)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nintedanib', 'da1c9f37-779e-4682-816f-93d0faa4cfc9', 'OFEV (NINTEDANIB) CAPSULE', 'Ofev', '21', '2025-11-21', '2026-11-15'),
    rengPubchem(135423438, 'nintedanib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
