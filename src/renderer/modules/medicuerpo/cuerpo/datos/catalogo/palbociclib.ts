import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'palbociclib',
    nombre: 'Palbociclib',
    clase: 'Inhibidor de las cinasas dependientes de ciclina 4 y 6',
    sinonimos: [ 'palbociclib', 'Ibrance' ],
    formula: 'C24H29N7O2',
    masaMolar: 447.5,
    smiles: 'CC1=C(C(=O)N(C2=NC(=NC=C12)NC3=NC=C(C=C3)N4CCNCC4)C5CCCC5)C(=O)C',
    inchikey: 'AHJRHEGDXFFMBM-UHFFFAOYSA-N',
    cid: 5330286,
    iupac: '6-acetyl-8-cyclopentyl-5-methyl-2-[(5-piperazin-1-yl-2-pyridinyl)amino]pyrido[2,3-d]pyrimidin-7-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'palbociclib-oral',
      producto: 'Ibrance · comprimido recubierto con película',
      titular: 'U.S. PHARMACEUTICALS',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '75 mg, 100 mg o 125 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'silicon dioxide',
        'magnesium stearate',
        'ferric oxide red',
        'titanium dioxide',
        'crospovidone, unspecified',
        'succinic acid',
        'hypromellose 2910 (6 mpa.s)',
        'triacetin',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Cáncer de mama avanzado o metastásico con receptores hormonales positivos y HER2 negativo, en combinación con un inhibidor de la aromatasa o con fulvestrant.',
        ref: {
          f: 'dailymed-palbociclib',
          sec: '1 · Indicaciones',
          cita: 'treatment of adult patients with hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative advanced or metastatic breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-palbociclib',
      advertencias: [
        {
          titulo: 'Neutropenia',
          texto: 'Fue la reacción adversa más frecuente en los ensayos PALOMA (incidencia del 80 % y del 83 %).',
          organos: [ 'sangre', 'medula-osea' ],
          ref: {
            f: 'dailymed-palbociclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neutropenia was the most frequently reported adverse reaction in PALOMA-2 with an incidence of 80%',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial/neumonitis',
          texto: 'Pueden producirse casos graves, potencialmente mortales o mortales con inhibidores de CDK4/6.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-palbociclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe, life-threatening, or fatal interstitial lung disease (ILD) and/or pneumonitis can occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 20 %) con letrozol o fulvestrant: descenso de leucocitos y neutrófilos, aumento de creatinina, descenso de hemoglobina y plaquetas.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20%) in combination with either letrozole or fulvestrant, including laboratory abnormalities, were white blood cell count decreased, neutrophils decreased'
        ],
        [
          'También infecciones, aumento de AST y ALT, cansancio, náuseas, estomatitis, diarrea y alopecia.',
          '34084-4',
          'infections, aspartate aminotransferase increased, alanine aminotransferase increased, fatigue, nausea, stomatitis, diarrhea, and alopecia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 75 mg, 100 mg o 125 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cáncer de mama avanzado o metastásico con receptores hormonales positivos y HER2 negativo, en combinación con un inhibidor de la aromatasa o con fulvestrant.',
    actua: 'Inhibe las cinasas dependientes de ciclina CDK4 y CDK6: impide que la célula pase de la fase G1 a la fase S y frena su proliferación.',
    recorrido: 'El máximo llega entre 4 y 12 horas después de tomar el comprimido; la biodisponibilidad absoluta tras 125 mg es del 46 %. En 15 días se recuperó una mediana del 91,6 % de la radiactividad: el 74,1 % por las heces y el 17,5 % por la orina; casi todo como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos ovalados recubiertos con película, de 75, 100 o 125 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos ovalados recubiertos con película, de 75, 100 o 125 mg.',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '3 · Formas y concentraciones',
            cita: 'Oval, light purple, film-coated tablets debossed with',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega entre 4 y 12 horas después de tomar el comprimido; la biodisponibilidad absoluta tras 125 mg es del 46 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega entre 4 y 12 horas después de tomar el comprimido; la biodisponibilidad absoluta tras 125 mg es del 46 %.',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The maximum observed concentration (C max ) of palbociclib is generally observed between 4 to 12 hours (time to reach maximum concentration, T max ) following oral administration of IBRANCE tablets',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta de IBRANCE tras una dosis oral de 125 mg es del 46 %.',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of IBRANCE after an oral 125 mg dose is 46%',
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
      ocurre: 'In vitro se une en un 85 % a proteínas del plasma; el volumen aparente de distribución es de 2583 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 85 % a proteínas del plasma; el volumen aparente de distribución es de 2583 L.',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding of palbociclib to human plasma proteins in vitro was approximately 85%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'CDK4 y CDK6',
        efecto: 'Inhibe las cinasas dependientes de ciclina CDK4 y CDK6: impide que la célula pase de la fase G1 a la fase S y frena su proliferación.',
        lugar: [ 'mama' ],
        datos: [
          {
            t: 'Inhibe las cinasas dependientes de ciclina CDK4 y CDK6: impide que la célula pase de la fase G1 a la fase S y frena su proliferación.',
            ref: {
              f: 'dailymed-palbociclib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Palbociclib is an inhibitor of cyclin-dependent kinases (CDK) 4 and 6',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en el hígado, sobre todo por oxidación y sulfonación (con acilación y glucuronidación como vías menores); intervienen CYP3A y SULT2A1.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en el hígado, sobre todo por oxidación y sulfonación (con acilación y glucuronidación como vías menores); intervienen CYP3A y SULT2A1.',
          ref: { f: 'dailymed-palbociclib', sec: '12.3 · Farmacocinética', cita: 'palbociclib undergoes hepatic metabolism in humans', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Conjugado glucurónido',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The major circulating metabolite was a glucuronide conjugate of palbociclib',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Conjugado del ácido sulfámico',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'In feces, the sulfamic acid conjugate of palbociclib was the major drug-related component',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 15 días se recuperó una mediana del 91,6 % de la radiactividad: el 74,1 % por las heces y el 17,5 % por la orina; casi todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 15 días se recuperó una mediana del 91,6 % de la radiactividad: el 74,1 % por las heces y el 17,5 % por la orina; casi todo como metabolitos.',
          ref: {
            f: 'dailymed-palbociclib',
            sec: '12.3 · Farmacocinética',
            cita: 'feces (74.1% of dose) was the major route of excretion, with 17.5% of the dose recovered in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '4-12',
      unidad: 'h',
      analito: 'palbociclib',
      ref: { f: 'dailymed-palbociclib', sec: '12.3 · Farmacocinética', cita: 'is generally observed between 4 to 12 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '46',
      unidad: '%',
      analito: 'palbociclib',
      condiciones: '125 mg por boca',
      ref: {
        f: 'dailymed-palbociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of IBRANCE after an oral 125 mg dose is 46%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma (in vitro)',
      valor: '85 (aprox.)',
      unidad: '%',
      analito: 'palbociclib',
      ref: {
        f: 'dailymed-palbociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'Binding of palbociclib to human plasma proteins in vitro was approximately 85%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '2583 (CV 26 %)',
      unidad: 'L',
      analito: 'palbociclib',
      ref: {
        f: 'dailymed-palbociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean apparent volume of distribution (V z /F) was 2583 L with a coefficient of variation (CV) of 26%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '29 ± 5',
      unidad: 'h',
      analito: 'palbociclib',
      poblacion: 'pacientes con cáncer de mama avanzado',
      ref: {
        f: 'dailymed-palbociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (± standard deviation) plasma elimination half-life was 29 (±5) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '63,1 (CV 29 %)',
      unidad: 'L/h',
      analito: 'palbociclib',
      poblacion: 'pacientes con cáncer de mama avanzado',
      ref: {
        f: 'dailymed-palbociclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean apparent oral clearance (CL/F) of palbociclib was 63.1 L/hr (29% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '74,1',
      unidad: '% de la dosis',
      analito: 'palbociclib y metabolitos',
      poblacion: '6 varones sanos',
      condiciones: 'dosis única marcada; 15 días',
      ref: { f: 'dailymed-palbociclib', sec: '12.3 · Farmacocinética', cita: 'feces (74.1% of dose) was the major route of excretion', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '17,5',
      unidad: '% de la dosis',
      analito: 'palbociclib y metabolitos',
      poblacion: '6 varones sanos',
      condiciones: 'dosis única marcada; 15 días',
      ref: { f: 'dailymed-palbociclib', sec: '12.3 · Farmacocinética', cita: 'with 17.5% of the dose recovered in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-palbociclib', '89a142d5-7e61-48bf-9e77-e2cd124c4792', 'IBRANCE (PALBOCICLIB) TABLET, FILM COATED', 'Ibrance', '11', '2026-07-09', '2026-11-12'),
    rengPubchem(5330286, 'palbociclib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
