import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'enasidenib',
    nombre: 'Enasidenib',
    clase: 'Inhibidor de la isocitrato deshidrogenasa 2 mutada (IDH2)',
    sinonimos: [ 'enasidenib mesylate', 'Idhifa' ],
    formula: 'C19H17F6N7O',
    masaMolar: 473.4,
    smiles: 'CC(C)(CNC1=NC(=NC(=N1)C2=NC(=CC=C2)C(F)(F)F)NC3=CC(=NC=C3)C(F)(F)F)O',
    inchikey: 'DYLUUSLLRIQKOE-UHFFFAOYSA-N',
    cid: 89683805,
    iupac: '2-methyl-1-[[4-[6-(trifluoromethyl)-2-pyridinyl]-6-[[2-(trifluoromethyl)-4-pyridinyl]amino]-1,3,5-triazin-2-yl]amino]propan-2-ol',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'enasidenib-oral',
      producto: 'Idhifa · comprimido recubierto con película',
      titular: 'CELGENE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 100 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Mesilato de enasidenib', ref: { f: 'dailymed-enasidenib', sec: '11 · Descripción', cita: 'enasidenib mesylate', codigo: '34089-3' } },
      excipientes: [
        'microcrystalline cellulose',
        'hydroxypropyl cellulose, unspecified',
        'sodium starch glycolate type a potato',
        'sodium lauryl sulfate',
        'hypromellose acetate succinate 06081224 (3 mpa.s)',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de adultos con leucemia mieloide aguda recidivante o refractaria con mutación de IDH2.',
        ref: {
          f: 'dailymed-enasidenib',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of adult patients with relapsed or refractory acute myeloid leukemia (AML) with an isocitrate dehydrogenase-2 (IDH2) mutation as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-enasidenib',
      advertencias: [
        {
          titulo: 'Síndrome de diferenciación',
          texto: 'Puede ser mortal si no se trata; ante la sospecha, iniciar corticoides y vigilancia hemodinámica.',
          organos: [],
          ref: {
            f: 'dailymed-enasidenib',
            sec: 'Advertencia destacada',
            cita: 'Patients treated with IDHIFA have experienced symptoms of differentiation syndrome, which can be fatal if not treated',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Advertir a las embarazadas del riesgo para el feto.',
          organos: [],
          ref: {
            f: 'dailymed-enasidenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise pregnant women of the potential risk to the fetus',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): náuseas, vómitos, diarrea, aumento de la bilirrubina y disminución del apetito.',
          '34084-4',
          'The most common adverse reactions (≥20%) of any grade were nausea, vomiting, diarrhea, elevated bilirubin and decreased appetite'
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
    contiene: 'Comprimido recubierto con película: 50 mg o 100 mg por comprimido, según la etiqueta; el activo va como mesilato de enasidenib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia mieloide aguda recidivante o refractaria con mutación de IDH2.',
    actua: 'Inhibe la enzima IDH2, sobre todo sus variantes mutadas; reduce el 2-hidroxiglutarato e induce la diferenciación mieloide.',
    recorrido: 'La biodisponibilidad absoluta de 100 mg es de alrededor del 57 % y la mediana del tiempo hasta el pico, de 4 horas. El 89 % se elimina en las heces y el 11 % en la orina.'
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
            f: 'dailymed-enasidenib',
            sec: '3 · Formas y concentraciones',
            cita: 'Pale yellow to yellow oval-shaped film-coated tablet debossed',
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
      ocurre: 'La biodisponibilidad absoluta de 100 mg es de alrededor del 57 % y la mediana del tiempo hasta el pico, de 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta de 100 mg es de alrededor del 57 % y la mediana del tiempo hasta el pico, de 4 horas.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability after 100 mg oral dose of enasidenib is approximately 57%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis oral la mediana del tiempo hasta el pico es de 4 horas.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'After a single oral dose, the median time to C max (T max ) is 4 hours',
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
      ocurre: 'In vitro se une en un 98,5 % a las proteínas plasmáticas, y su metabolito AGI-16903 en un 96,6 %; el volumen de distribución medio es de 55,8 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 98,5 % a las proteínas plasmáticas, y su metabolito AGI-16903 en un 96,6 %; el volumen de distribución medio es de 55,8 L.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of enasidenib is 98.5% and of its metabolite AGI-16903 is 96.6% in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio de 55,8 L.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean volume of distribution (Vd) of enasidenib is 55.8 L (CV% 29)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'IDH2 mutada',
        efecto: 'Inhibe la enzima IDH2, sobre todo sus variantes mutadas; reduce el 2-hidroxiglutarato e induce la diferenciación mieloide.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la enzima IDH2, sobre todo sus variantes mutadas; reduce el 2-hidroxiglutarato e induce la diferenciación mieloide.',
            ref: {
              f: 'dailymed-enasidenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Enasidenib is a small molecule inhibitor of the isocitrate dehydrogenase 2 (IDH2) enzyme',
              codigo: '43679-0'
            }
          },
          {
            t: 'La inhibición de la IDH2 mutada redujo el 2-hidroxiglutarato e indujo diferenciación mieloide in vitro e in vivo.',
            ref: {
              f: 'dailymed-enasidenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibition of the mutant IDH2 enzyme by enasidenib led to decreased 2-hydroxyglutarate (2-HG) levels and induced myeloid differentiation in vitro and in vivo',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan varias enzimas del citocromo P450 (entre ellas la CYP3A4) y varias UGT.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan varias enzimas del citocromo P450 (entre ellas la CYP3A4) y varias UGT.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism of enasidenib is mediated by multiple cytochrome P450 (CYP) enzymes (e.g., CYP1A2, CYP2B6, CYP2C8, CYP2C9, CYP2C19, CYP2D6, and CYP3A4)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'AGI-16903',
          actividad: 'desconocida',
          nota: 'Metabolito N-desalquilado; supone el 10 % de la radiactividad circulante.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'AGI-16903, the N-dealkylated metabolite, represented 10% of the circulating radioactivity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 89 % se elimina en las heces y el 11 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 89 % se elimina en las heces y el 11 % en la orina.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Eighty-nine percent (89%) of enasidenib is eliminated in feces and 11% in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de 7,9 días y el aclaramiento corporal total, de 0,70 L/h.',
          ref: {
            f: 'dailymed-enasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Enasidenib has a terminal half-life of 7.9 days and a mean total body clearance (CL/F) of 0.70 L/hour (CV% 62.5)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (100 mg)',
      valor: '57 (aprox.)',
      unidad: '%',
      analito: 'enasidenib',
      ref: {
        f: 'dailymed-enasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability after 100 mg oral dose of enasidenib is approximately 57%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '4',
      unidad: 'h',
      analito: 'enasidenib',
      ref: { f: 'dailymed-enasidenib', sec: '12.3 · Farmacocinética', cita: 'the median time to C max (T max ) is 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '98,5',
      unidad: '%',
      analito: 'enasidenib',
      ref: { f: 'dailymed-enasidenib', sec: '12.3 · Farmacocinética', cita: 'Human plasma protein binding of enasidenib is 98.5%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '55,8',
      unidad: 'L',
      analito: 'enasidenib',
      ref: {
        f: 'dailymed-enasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution (Vd) of enasidenib is 55.8 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '7,9',
      unidad: 'días',
      analito: 'enasidenib',
      ref: { f: 'dailymed-enasidenib', sec: '12.3 · Farmacocinética', cita: 'Enasidenib has a terminal half-life of 7.9 days', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal total',
      valor: '0,70',
      unidad: 'L/h',
      analito: 'enasidenib',
      ref: { f: 'dailymed-enasidenib', sec: '12.3 · Farmacocinética', cita: 'a mean total body clearance (CL/F) of 0.70 L/hour', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis eliminada en las heces',
      valor: '89',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-enasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Eighty-nine percent (89%) of enasidenib is eliminated in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-enasidenib', 'a5b4cdf0-3fa8-4c6c-80f6-8d8a00e3a5b6', 'IDHIFA (ENASIDENIB MESYLATE) TABLET, FILM COATED', 'Idhifa', '12', '2025-01-30', '2026-11-19'),
    rengPubchem(89683805, 'enasidenib mesylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
