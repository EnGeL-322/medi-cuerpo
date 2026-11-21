import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rifapentina',
    nombre: 'Rifapentina',
    clase: 'Antimicobacteriano del grupo de las rifamicinas',
    sinonimos: [ 'rifapentine', 'Priftin' ],
    formula: 'C47H64N4O12',
    masaMolar: 877,
    smiles: 'C[C@H]1/C=C/C=C(\\C(=O)NC2=C(C(=C3C(=C2O)C(=C(C4=C3C(=O)[C@](O4)(O/C=C/[C@@H]([C@H]([C@H]([C@@H]([C@@H]([C@@H]([C@H]1O)C)O)C)OC(=O)C)C)OC)C)C)O)O)/C=N/N5CCN(CC5)C6CCCC6)/C',
    inchikey: 'WDZCUPBHRAEYDL-GZAUEHORSA-N',
    cid: 135403821,
    iupac: '[(7S,9E,11S,12R,13S,14R,15R,16R,17S,18S,19E,21Z)-26-[(E)-(4-cyclopentylpiperazin-1-yl)iminomethyl]-2,15,17,27,29-pentahydroxy-11-methoxy-3,7,12,14,16,18,22-heptamethyl-6,23-dioxo-8,30-dioxa-24-azatetracyclo[23.3.1.14,7.05,28]triaconta-1(29),2,4,9,19,21,25,27-octaen-13-yl] acetate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'rifapentina-oral',
      producto: 'Priftin · comprimido recubierto con película',
      titular: 'SANOFI-AVENTIS U.S. LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg por comprimido, según la etiqueta',
      excipientes: [
        'calcium stearate',
        'edetate disodium',
        'fd&c blue no. 2',
        'aluminum oxide',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose, unspecified',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'starch, corn',
        'propylene glycol',
        'sodium ascorbate',
        'sodium lauryl sulfate',
        'sodium starch glycolate type a corn',
        'ferric oxide red',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la tuberculosis pulmonar activa (en combinación) y de la infección tuberculosa latente, desde los 12 o los 2 años según la indicación.',
        ref: {
          f: 'dailymed-rifapentina',
          sec: '1 · Indicaciones',
          cita: 'PRIFTIN is a rifamycin antimycobacterial drug indicated in patients 12 years of age and older for the treatment of active pulmonary tuberculosis (TB) caused by Mycobacterium tuberculosis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rifapentina',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar los síntomas de lesión hepática y suspender si aparecen.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-rifapentina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for symptoms of liver injury and discontinue PRIFTIN if signs or symptoms or liver injury occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Suspender ante el primer exantema, lesiones mucosas u otro signo de hipersensibilidad.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-rifapentina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue PRIFTIN at the first appearance of skin rash, mucosal lesions, or any other sign of hypersensitivity',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Coloración de los líquidos corporales',
          texto: 'Puede teñir de forma permanente de rojo anaranjado las lentes de contacto o las prótesis dentales.',
          organos: [],
          ref: {
            f: 'dailymed-rifapentina',
            sec: '5 · Advertencias y precauciones',
            cita: 'May permanently stain contact lenses or dentures red-orange',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la tuberculosis activa, las más frecuentes (3 % o más): anemia, linfopenia, hemoptisis, neutropenia, tos, trombocitosis, sudoración, aumento de ALT y AST, dolor de espalda y exantema, entre otras.',
          '34084-4',
          'most common adverse reactions with regimen for active pulmonary tuberculosis (3% and greater) are anemia, lymphopenia, hemoptysis, neutropenia, cough, thrombocytosis, increased sweating'
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
    contiene: 'Comprimido recubierto con película: 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la tuberculosis pulmonar activa (en combinación) y de la infección tuberculosa latente, desde los 12 o los 2 años según la indicación.',
    actua: 'Inhibe la ARN polimerasa dependiente de ADN de Mycobacterium tuberculosis e impide el inicio de la síntesis de la cadena de ARN, sin afectar a las células de mamífero a concentraciones activas.',
    recorrido: 'La biodisponibilidad relativa frente a una solución oral es del 70 %; el pico se alcanza entre 5 y 6 horas y una comida grasa aumenta la Cmax y el AUC un 40 a 50 %. Tras 600 mg marcados se recuperó el 87 %: el 17 % en la orina y el 70 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 150 mg: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 150 mg: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '3 · Formas y concentraciones',
            cita: 'PRIFTIN is supplied as 150 mg round normal convex dark-pink film-coated tablets',
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
      ocurre: 'La biodisponibilidad relativa frente a una solución oral es del 70 %; el pico se alcanza entre 5 y 6 horas y una comida grasa aumenta la Cmax y el AUC un 40 a 50 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad relativa frente a una solución oral es del 70 %; el pico se alcanza entre 5 y 6 horas y una comida grasa aumenta la Cmax y el AUC un 40 a 50 %.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: 'The relative bioavailability (with an oral solution as a reference) of PRIFTIN after a single 600 mg dose to healthy adult volunteers was 70%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó la Cmax y el AUC entre un 40 % y un 50 %.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: 'The administration of PRIFTIN with a high fat meal increased rifapentine C max and AUC by 40% to 50%',
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
      ocurre: 'En voluntarios sanos, la rifapentina y la 25-desacetil rifapentina se unen en un 97,7 % y un 93,2 % a las proteínas plasmáticas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En voluntarios sanos, la rifapentina y la 25-desacetil rifapentina se unen en un 97,7 % y un 93,2 % a las proteínas plasmáticas.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: 'In healthy volunteers, rifapentine and 25-desacetyl rifapentine were 97.7% and 93.2% bound to plasma proteins, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ARN polimerasa dependiente de ADN bacteriana',
        efecto: 'Inhibe la ARN polimerasa dependiente de ADN de Mycobacterium tuberculosis e impide el inicio de la síntesis de la cadena de ARN, sin afectar a las células de mamífero a concentraciones activas.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la ARN polimerasa dependiente de ADN de Mycobacterium tuberculosis e impide el inicio de la síntesis de la cadena de ARN, sin afectar a las células de mamífero a concentraciones activas.',
            ref: {
              f: 'dailymed-rifapentina',
              sec: '12.4 · Microbiología',
              cita: 'Rifapentine, a cyclopentyl rifamycin, inhibits DNA-dependent RNA polymerase in susceptible strains of Mycobacterium tuberculosis',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una esterasa la hidroliza a 25-desacetil rifapentina, metabolito con actividad microbiológica; ambos suponen el 99 % de la radiactividad plasmática.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una esterasa la hidroliza a 25-desacetil rifapentina, metabolito con actividad microbiológica; ambos suponen el 99 % de la radiactividad plasmática.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: 'Rifapentine was hydrolyzed by an esterase enzyme to form a microbiologically active 25-desacetyl rifapentine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '25-Desacetil rifapentina',
          actividad: 'activo',
          nota: 'Metabolito con actividad microbiológica; su AUC es la mitad de la de la rifapentina.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: 'Rifapentine was hydrolyzed by an esterase enzyme to form a microbiologically active 25-desacetyl rifapentine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 600 mg marcados se recuperó el 87 %: el 17 % en la orina y el 70 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 600 mg marcados se recuperó el 87 %: el 17 % en la orina y el 70 % en las heces.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: '87% of the total 14 C-rifapentine was recovered in the urine (17%) and feces (70%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Más del 80 % de la dosis marcada se excretó en 7 días.',
          ref: {
            f: 'dailymed-rifapentina',
            sec: '12.3 · Farmacocinética',
            cita: 'Greater than 80% of the total 14 C-rifapentine dose was excreted from the body within 7 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a solución oral',
      valor: '70',
      unidad: '%',
      analito: 'rifapentina',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-rifapentina',
        sec: '12.3 · Farmacocinética',
        cita: 'The relative bioavailability (with an oral solution as a reference) of PRIFTIN after a single 600 mg dose to healthy adult volunteers was 70%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '5-6',
      unidad: 'h',
      analito: 'rifapentina',
      ref: {
        f: 'dailymed-rifapentina',
        sec: '12.3 · Farmacocinética',
        cita: 'The maximum concentrations were achieved from 5 hours to 6 hours after administration of the 600 mg PRIFTIN dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,7',
      unidad: '%',
      analito: 'rifapentina',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-rifapentina',
        sec: '12.3 · Farmacocinética',
        cita: 'rifapentine and 25-desacetyl rifapentine were 97.7% and 93.2% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '13,19',
      unidad: 'h',
      analito: 'rifapentina',
      poblacion: 'voluntarios sanos',
      condiciones: '600 mg cada 72 h',
      ref: { f: 'dailymed-rifapentina', sec: '12.3 · Farmacocinética', cita: 'T 1/2 (h) 13.19 ± 1.38', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '2,03',
      unidad: 'L/h',
      analito: 'rifapentina',
      poblacion: 'voluntarios sanos',
      condiciones: '600 mg cada 72 h',
      ref: { f: 'dailymed-rifapentina', sec: '12.3 · Farmacocinética', cita: 'Cl/F (L/h) 2.03 ± 0.60', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-rifapentina',
        sec: '12.3 · Farmacocinética',
        cita: '87% of the total 14 C-rifapentine was recovered in the urine (17%) and feces (70%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rifapentina', '3a64fb70-b85e-43d9-8bcd-7e893f568ae1', 'PRIFTIN (RIFAPENTINE) TABLET, FILM COATED', 'Priftin', '14', '2026-02-10', '2026-11-19'),
    rengPubchem(135403821, 'rifapentine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
