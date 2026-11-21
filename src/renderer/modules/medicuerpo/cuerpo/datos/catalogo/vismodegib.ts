import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vismodegib',
    nombre: 'Vismodegib',
    clase: 'Inhibidor de la vía Hedgehog (antagonista de Smoothened)',
    sinonimos: [ 'vismodegib', 'Erivedge' ],
    formula: 'C19H14Cl2N2O3S',
    masaMolar: 421.3,
    smiles: 'CS(=O)(=O)C1=CC(=C(C=C1)C(=O)NC2=CC(=C(C=C2)Cl)C3=CC=CC=N3)Cl',
    inchikey: 'BPQMGSKTAYIVFO-UHFFFAOYSA-N',
    cid: 24776445,
    iupac: '2-chloro-N-(4-chloro-3-pyridin-2-ylphenyl)-4-methylsulfonylbenzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'vismodegib-oral',
      producto: 'ERIVEDGE · cápsula',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg por cápsula, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'sodium lauryl sulfate',
        'povidone k30',
        'sodium starch glycolate type a potato',
        'talc',
        'magnesium stearate',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferric oxide red',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con carcinoma basocelular metastásico o localmente avanzado que no es candidato a cirugía ni a radioterapia.',
        ref: {
          f: 'dailymed-vismodegib',
          sec: '1 · Indicaciones',
          cita: 'ERIVEDGE is indicated for the treatment of adults with metastatic basal cell carcinoma, or with locally advanced basal cell carcinoma that has recurred following surgery',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vismodegib',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar la muerte embriofetal o defectos congénitos graves si se toma en el embarazo.',
          organos: [],
          ref: {
            f: 'dailymed-vismodegib',
            sec: 'Advertencia destacada',
            cita: 'ERIVEDGE can cause embryo-fetal death or severe birth defects when administered to a pregnant woman',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Donación de sangre',
          texto: 'No donar sangre ni hemoderivados durante el tratamiento ni hasta 24 meses después de la última dosis.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-vismodegib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise patients not to donate blood or blood products while receiving ERIVEDGE and for 24 months after the final dose of ERIVEDGE',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones adversas cutáneas graves',
          texto: 'Suspenderlo definitivamente si aparecen.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-vismodegib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Cutaneous Adverse Reactions: Permanently discontinue ERIVEDGE in patients with these reactions',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más): espasmos musculares, alopecia, disgeusia, pérdida de peso, fatiga, náuseas, diarrea, disminución del apetito, estreñimiento, artralgias, vómitos y ageusia.',
          '34084-4',
          'The most common adverse reactions (incidence of ≥ 10%) are muscle spasms, alopecia, dysgeusia, weight loss, fatigue, nausea, diarrhea, decreased appetite, constipation, arthralgias, vomiting, and ageusia'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 150 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con carcinoma basocelular metastásico o localmente avanzado que no es candidato a cirugía ni a radioterapia.',
    actua: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
    recorrido: 'La biodisponibilidad absoluta tras una dosis es del 32 %; la comida no modifica la Cmax ni el AUC en estado estacionario. Se elimina sobre todo por vía hepática: el 82 % de la dosis se recupera en las heces y el 4,4 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-vismodegib', sec: '3 · Formas y concentraciones', cita: 'printed on pink opaque body and', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta tras una dosis es del 32 %; la comida no modifica la Cmax ni el AUC en estado estacionario.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras una dosis es del 32 %; la comida no modifica la Cmax ni el AUC en estado estacionario.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'The single dose absolute bioavailability of vismodegib is 32%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La Cmax y el AUC en estado estacionario no se ven afectados por la comida.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'C max and AUC 0-24hr of vismodegib at steady state are not affected by food',
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
      ocurre: 'Se une en más del 99 % a las proteínas plasmáticas (albúmina y alfa-1 glucoproteína ácida); el volumen de distribución es de 16,4 a 26,6 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas plasmáticas (albúmina y alfa-1 glucoproteína ácida); el volumen de distribución es de 16,4 a 26,6 L.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vismodegib plasma protein binding in patients is > 99%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución de 16,4 a 26,6 L.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution of vismodegib ranges from 16.4 to 26.6 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Smoothened (vía Hedgehog)',
        efecto: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
        lugar: [],
        datos: [
          {
            t: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
            ref: {
              f: 'dailymed-vismodegib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vismodegib binds to and inhibits Smoothened, a transmembrane protein involved in Hedgehog signal transduction',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sus vías metabólicas son la oxidación, la glucuronidación y la apertura del anillo de piridina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sus vías metabólicas son la oxidación, la glucuronidación y la apertura del anillo de piridina.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolic pathways of vismodegib in humans include oxidation, glucuronidation, and pyridine ring cleavage',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los dos metabolitos oxidativos más abundantes en las heces se forman in vitro por la CYP2C9 y la CYP3A.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'The two most abundant oxidative metabolites recovered in feces are produced in vitro by recombinant CYP2C9 and CYP3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por vía hepática: el 82 % de la dosis se recupera en las heces y el 4,4 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por vía hepática: el 82 % de la dosis se recupera en las heces y el 4,4 % en la orina.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vismodegib and its metabolites are eliminated primarily by the hepatic route with 82% of the administered dose recovered in the feces and 4.4% recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida estimada es de 4 días con dosis diarias continuas y de 12 días tras una dosis única.',
          ref: {
            f: 'dailymed-vismodegib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated elimination half-life (t 1/2 ) of vismodegib is 4 days after continuous once-daily dosing and 12 days after a single dose',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (dosis única)',
      valor: '32',
      unidad: '%',
      analito: 'vismodegib',
      ref: {
        f: 'dailymed-vismodegib',
        sec: '12.3 · Farmacocinética',
        cita: 'The single dose absolute bioavailability of vismodegib is 32%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'vismodegib',
      poblacion: 'pacientes',
      ref: { f: 'dailymed-vismodegib', sec: '12.3 · Farmacocinética', cita: 'Vismodegib plasma protein binding in patients is > 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '16,4-26,6',
      unidad: 'L',
      analito: 'vismodegib',
      ref: {
        f: 'dailymed-vismodegib',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of vismodegib ranges from 16.4 to 26.6 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación con dosis diarias',
      valor: '4',
      unidad: 'días',
      analito: 'vismodegib',
      condiciones: 'dosis diarias continuas',
      ref: {
        f: 'dailymed-vismodegib',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated elimination half-life (t 1/2 ) of vismodegib is 4 days after continuous once-daily dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '82',
      unidad: '% de la dosis',
      analito: 'vismodegib y metabolitos',
      ref: { f: 'dailymed-vismodegib', sec: '12.3 · Farmacocinética', cita: '82% of the administered dose recovered in the feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vismodegib', 'eb368bb6-80e3-4df9-8a85-91df0a2ada6a', 'ERIVEDGE (VISMODEGIB) CAPSULE', 'ERIVEDGE', '15', '2024-12-10', '2026-11-19'),
    rengPubchem(24776445, 'vismodegib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
