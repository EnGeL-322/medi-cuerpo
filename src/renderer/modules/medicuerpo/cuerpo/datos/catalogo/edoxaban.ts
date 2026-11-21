import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'edoxaban',
    nombre: 'Edoxabán',
    clase: 'Anticoagulante oral (inhibidor directo del factor Xa)',
    sinonimos: [ 'edoxaban', 'Savaysa' ],
    formula: 'C24H30ClN7O4S',
    masaMolar: 548.1,
    smiles: 'CN1CCC2=C(C1)SC(=N2)C(=O)N[C@@H]3C[C@H](CC[C@@H]3NC(=O)C(=O)NC4=NC=C(C=C4)Cl)C(=O)N(C)C',
    inchikey: 'HGVDHZBSSITLCT-JLJPHGGASA-N',
    cid: 10280735,
    iupac: "N'-(5-chloro-2-pyridinyl)-N-[(1S,2R,4S)-4-(dimethylcarbamoyl)-2-[(5-methyl-6,7-dihydro-4H-[1,3]thiazolo[5,4-c]pyridine-2-carbonyl)amino]cyclohexyl]oxamide",
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'edoxaban-oral',
      producto: 'SAVAYSA · comprimido recubierto con película',
      titular: 'DAIICHI SANKYO INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '15 mg, 30 mg o 60 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Tosilato de edoxabán monohidrato',
        ref: { f: 'dailymed-edoxaban', sec: '11 · Descripción', cita: 'edoxaban tosylate monohydrate equivalent to 60 mg of edoxaban', codigo: '34089-3' }
      },
      excipientes: [
        'Manitol',
        'almidón pregelatinizado',
        'crospovidona',
        'hidroxipropilcelulosa',
        'estearato de magnesio',
        'talco',
        'cera de carnauba',
        'recubrimiento de color: hipromelosa, dióxido de titanio, talco, polietilenglicol 8000 y óxidos de hierro'
      ],
      usos: {
        t: 'Reduce el riesgo de ictus y embolia sistémica en la fibrilación auricular no valvular y trata la trombosis venosa profunda y la embolia pulmonar tras 5 a 10 días de un anticoagulante inyectable.',
        ref: {
          f: 'dailymed-edoxaban',
          sec: '1 · Indicaciones',
          cita: 'To reduce the risk of stroke and systemic embolism (SE) in patients with nonvalvular atrial fibrillation (NVAF)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-edoxaban',
      advertencias: [
        {
          titulo: 'Riesgo de hemorragia',
          texto: 'Aumenta el riesgo de sangrado y puede causar hemorragias graves y potencialmente mortales.',
          organos: [ 'sangre', 'vasos' ],
          ref: {
            f: 'dailymed-edoxaban',
            sec: '5 · Advertencias y precauciones',
            cita: 'SAVAYSA increases the risk of bleeding and can cause serious and potentially fatal bleeding',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Interrupción prematura',
          texto: 'Suspender antes de tiempo cualquier anticoagulante oral sin otra anticoagulación aumenta el riesgo de eventos isquémicos.',
          organos: [ 'encefalo', 'vasos' ],
          ref: {
            f: 'dailymed-edoxaban',
            sec: '5 · Advertencias y precauciones',
            cita: 'Premature discontinuation of any oral anticoagulant in the absence of adequate alternative anticoagulation increases the risk of ischemic events',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Hemorragia y anemia: las más frecuentes (≥ 5 %) en la fibrilación auricular no valvular.',
          '34084-4',
          'most common adverse reactions (≥ 5%) are bleeding and anemia'
        ],
        [
          'En la trombosis venosa profunda y la embolia pulmonar (≥ 1 %): hemorragia, erupción, alteraciones de las pruebas hepáticas y anemia.',
          '34084-4',
          'are bleeding, rash, abnormal liver function tests and anemia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 15 mg, 30 mg o 60 mg por comprimido, según la etiqueta; el activo va como tosilato de edoxabán monohidrato. Los excipientes no son el principio activo.',
    usos: 'Reduce el riesgo de ictus y embolia sistémica en la fibrilación auricular no valvular y trata la trombosis venosa profunda y la embolia pulmonar tras 5 a 10 días de un anticoagulante inyectable.',
    actua: 'Inhibe de forma selectiva el factor Xa, libre y en el complejo protrombinasa: se genera menos trombina y se forman menos coágulos.',
    recorrido: 'La concentración máxima en el plasma llega en 1-2 horas. La biodisponibilidad absoluta es del 62 % y la comida no cambia la exposición total. Sale sobre todo sin cambios por la orina: el aclaramiento renal (11 L/h) es alrededor del 50 % del total (22 L/h). El resto, por metabolismo y excreción biliar o intestinal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'El comprimido recubierto con película se disgrega en el tubo digestivo; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'El comprimido recubierto con película se disgrega en el tubo digestivo; la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-edoxaban', sec: '3 · Formas y concentraciones', cita: 'film-coated tablets, debossed with DSC L60', codigo: '43678-2' }
        },
        {
          t: 'Cada comprimido de 60 mg contiene 80,82 mg de tosilato de edoxabán monohidrato, equivalentes a 60 mg de edoxabán.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '11 · Descripción',
            cita: 'Each 60 mg tablet contains 80.82 mg edoxaban tosylate monohydrate equivalent to 60 mg of edoxaban',
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
      ocurre: 'La concentración máxima en el plasma llega en 1-2 horas. La biodisponibilidad absoluta es del 62 % y la comida no cambia la exposición total.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La concentración máxima en el plasma llega en 1-2 horas. La biodisponibilidad absoluta es del 62 % y la comida no cambia la exposición total.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma edoxaban concentrations are observed within 1-2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta del 62 %.',
          ref: { f: 'dailymed-edoxaban', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability is 62%', codigo: '43682-4' }
        },
        {
          t: 'La comida no afecta a la exposición total.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '12.3 · Farmacocinética',
            cita: 'Food does not affect total systemic exposure to edoxaban',
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
      ocurre: 'Se reparte en dos fases, con un volumen de distribución en estado estacionario de unos 107 L; alrededor del 55 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte en dos fases, con un volumen de distribución en estado estacionario de unos 107 L; alrededor del 55 % se une a proteínas del plasma.',
          ref: { f: 'dailymed-edoxaban', sec: '12.3 · Farmacocinética', cita: 'In vitro plasma protein binding is approximately 55%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Factor Xa de la coagulación',
        efecto: 'Inhibe de forma selectiva el factor Xa, libre y en el complejo protrombinasa: se genera menos trombina y se forman menos coágulos.',
        lugar: [ 'sangre', 'vasos' ],
        datos: [
          {
            t: 'Inhibe de forma selectiva el factor Xa, libre y en el complejo protrombinasa: se genera menos trombina y se forman menos coágulos.',
            ref: {
              f: 'dailymed-edoxaban',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibition of FXa in the coagulation cascade reduces thrombin generation and reduces thrombus formation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma poco: en el plasma predomina el edoxabán sin cambios. Una pequeña parte se hidroliza (carboxilesterasa 1), se conjuga o se oxida (CYP3A4). Su metabolito principal, M-4, es activo pero alcanza menos del 10 % de la exposición del original.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma poco: en el plasma predomina el edoxabán sin cambios. Una pequeña parte se hidroliza (carboxilesterasa 1), se conjuga o se oxida (CYP3A4). Su metabolito principal, M-4, es activo pero alcanza menos del 10 % de la exposición del original.',
          ref: { f: 'dailymed-edoxaban', sec: '12.3 · Farmacocinética', cita: 'Unchanged edoxaban is the predominant form in plasma', codigo: '43682-4' }
        },
        {
          t: 'Metabolismo mínimo por hidrólisis, conjugación y oxidación por CYP3A4.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '12.3 · Farmacocinética',
            cita: 'There is minimal metabolism via hydrolysis (mediated by carboxylesterase 1), conjugation, and oxidation by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M-4 (formado por hidrólisis)',
          actividad: 'activo',
          nota: 'Alcanza menos del 10 % de la exposición del edoxabán en personas sanas.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '12.3 · Farmacocinética',
            cita: 'The predominant metabolite M-4, formed by hydrolysis, is human-specific and active',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo sin cambios por la orina: el aclaramiento renal (11 L/h) es alrededor del 50 % del total (22 L/h). El resto, por metabolismo y excreción biliar o intestinal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo sin cambios por la orina: el aclaramiento renal (11 L/h) es alrededor del 50 % del total (22 L/h). El resto, por metabolismo y excreción biliar o intestinal.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '12.3 · Farmacocinética',
            cita: 'Edoxaban is eliminated primarily as unchanged drug in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolismo y la excreción biliar o intestinal explican el resto del aclaramiento.',
          ref: {
            f: 'dailymed-edoxaban',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism and biliary/intestinal excretion account for the remaining clearance',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1-2',
      unidad: 'h',
      analito: 'edoxabán',
      ref: {
        f: 'dailymed-edoxaban',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma edoxaban concentrations are observed within 1-2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '62',
      unidad: '%',
      analito: 'edoxabán',
      ref: { f: 'dailymed-edoxaban', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability is 62%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '10-14',
      unidad: 'h',
      analito: 'edoxabán',
      condiciones: 'tras la administración oral',
      ref: {
        f: 'dailymed-edoxaban',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of edoxaban following oral administration is 10 to 14 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (in vitro)',
      valor: '55 (aprox.)',
      unidad: '%',
      analito: 'edoxabán',
      ref: { f: 'dailymed-edoxaban', sec: '12.3 · Farmacocinética', cita: 'In vitro plasma protein binding is approximately 55%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '107 (DE 19,9)',
      unidad: 'L',
      analito: 'edoxabán',
      ref: {
        f: 'dailymed-edoxaban',
        sec: '12.3 · Farmacocinética',
        cita: 'The steady-state volume of distribution (Vd ss ) is 107 (19.9) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento renal',
      valor: '11',
      unidad: 'L/h',
      analito: 'edoxabán',
      ref: {
        f: 'dailymed-edoxaban',
        sec: '12.3 · Farmacocinética',
        cita: 'Renal clearance (11 L/hour) accounts for approximately 50% of the total clearance',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '22',
      unidad: 'L/h',
      analito: 'edoxabán',
      ref: { f: 'dailymed-edoxaban', sec: '12.3 · Farmacocinética', cita: 'of the total clearance of edoxaban (22 L/hour)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-edoxaban', 'e77d3400-56ad-11e3-949a-0800200c9a66', 'SAVAYSA (EDOXABAN TOSYLATE) TABLET, FILM COATED', 'SAVAYSA', '28', '2025-07-14', '2026-11-12'),
    rengPubchem(10280735, 'edoxaban', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
