import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'trospio',
    nombre: 'Trospio',
    clase: 'Antimuscarínico (amina cuaternaria)',
    sinonimos: [ 'trospium', 'Sanctura' ],
    formula: 'C25H30NO3',
    masaMolar: 392.5,
    smiles: 'C1CC[N+]2(C1)[C@@H]3CC[C@H]2CC(C3)OC(=O)C(C4=CC=CC=C4)(C5=CC=CC=C5)O',
    inchikey: 'OYYDSUSKLWTMMQ-AIZNXBIQSA-N',
    cid: 5284632,
    iupac: "[(1R,5S)-spiro[8-azoniabicyclo[3.2.1]octane-8,1'-azolidin-1-ium]-3-yl] 2-hydroxy-2,2-diphenylacetate",
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'trospio-oral',
      producto: 'Trospium Chloride · comprimido recubierto con película',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Cloruro de trospio',
        ref: {
          f: 'dailymed-trospio',
          sec: '3 · Formas y concentraciones',
          cita: 'Trospium chloride tablets are supplied as 20 mg tablets',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'croscarmellose sodium',
        'hypromelloses',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol, unspecified',
        'povidone',
        'propylene glycol',
        'shellac',
        'talc',
        'titanium dioxide',
        'ferrosoferric oxide',
        'sucrose',
        'silicon dioxide'
      ],
      usos: {
        t: 'Vejiga hiperactiva con incontinencia de urgencia, urgencia y aumento de la frecuencia urinaria.',
        ref: {
          f: 'dailymed-trospio',
          sec: '1 · Indicaciones',
          cita: 'treatment of overactive bladder (OAB) with symptoms of urge urinary incontinence, urgency, and urinary frequency',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-trospio',
      advertencias: [
        {
          titulo: 'Retención urinaria o gástrica',
          texto: 'Debe usarse con precaución si hay obstrucción importante de la salida de la vejiga o trastornos obstructivos digestivos por el riesgo de retención.',
          organos: [ 'vejiga', 'estomago' ],
          ref: {
            f: 'dailymed-trospio',
            sec: '5 · Advertencias y precauciones',
            cita: 'Trospium chloride tablets should be administered with caution to patients with clinically significant bladder outflow obstruction or gastrointestinal obstructive disorders due to risk of urinary or gastric retention',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Angioedema',
          texto: 'Se ha descrito angioedema de la cara, los labios, la lengua o la laringe.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-trospio',
            sec: '5 · Advertencias y precauciones',
            cita: 'Angioedema of the face, lips, tongue and/or larynx has been reported with trospium chloride',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 1 %): boca seca (20,1 %), estreñimiento (9,6 %) y dolor de cabeza (4,2 %).',
          '34084-4',
          'most common adverse reactions (greater than or equal to 1%) with trospium chloride are dry mouth (20.1%)'
        ],
        [ 'Estreñimiento (9,6 %) y dolor de cabeza (4,2 %).', '34084-4', 'constipation (9.6%), and headache (4.2%)' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg por comprimido, según la etiqueta; el activo va como cloruro de trospio. Los excipientes no son el principio activo.',
    usos: 'Vejiga hiperactiva con incontinencia de urgencia, urgencia y aumento de la frecuencia urinaria.',
    actua: 'Antagoniza la acetilcolina en los receptores muscarínicos de los órganos con inervación colinérgica, entre ellos la vejiga, y reduce el tono del músculo liso vesical.',
    recorrido: 'Se absorbe menos del 10 % de la dosis (biodisponibilidad absoluta media del 9,6 %); el máximo llega entre 5 y 6 horas. Una comida rica en grasa reduce la absorción un 70-80 %. La mayor parte de la dosis (85,2 %) se recuperó en las heces y el 5,8 % en la orina, de la cual el 60 % era trospio sin cambios; la secreción tubular activa es una vía importante de eliminación.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo, blanco o blanquecino, recubierto con película, de 20 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo, blanco o blanquecino, recubierto con película, de 20 mg.',
          ref: { f: 'dailymed-trospio', sec: '3 · Formas y concentraciones', cita: 'round, white to off white, film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe menos del 10 % de la dosis (biodisponibilidad absoluta media del 9,6 %); el máximo llega entre 5 y 6 horas. Una comida rica en grasa reduce la absorción un 70-80 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe menos del 10 % de la dosis (biodisponibilidad absoluta media del 9,6 %); el máximo llega entre 5 y 6 horas. Una comida rica en grasa reduce la absorción un 70-80 %.',
          ref: {
            f: 'dailymed-trospio',
            sec: '12 · Farmacología clínica',
            cita: 'After oral administration, less than 10% of the dose is absorbed',
            codigo: '34090-1'
          }
        },
        {
          t: 'Con una comida rica en grasa, el AUC y la Cmax fueron un 70-80 % menores que en ayunas.',
          ref: {
            f: 'dailymed-trospio',
            sec: '12 · Farmacología clínica',
            cita: 'Administration with a high (50%) fat-content meal resulted in reduced absorption, with AUC and C max values 70 to 80% lower',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del suero in vitro va del 50 al 85 %; el volumen aparente de distribución con 20 mg es de unos 395 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del suero in vitro va del 50 al 85 %; el volumen aparente de distribución con 20 mg es de unos 395 L.',
          ref: {
            f: 'dailymed-trospio',
            sec: '12 · Farmacología clínica',
            cita: 'Protein binding ranged from 50 to 85% when concentration levels of trospium chloride (0.5 to 50 ng/mL) were incubated with human serum in vitro',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptor muscarínico de la vejiga',
        efecto: 'Antagoniza la acetilcolina en los receptores muscarínicos de los órganos con inervación colinérgica, entre ellos la vejiga, y reduce el tono del músculo liso vesical.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Antagoniza la acetilcolina en los receptores muscarínicos de los órganos con inervación colinérgica, entre ellos la vejiga, y reduce el tono del músculo liso vesical.',
            ref: {
              f: 'dailymed-trospio',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Trospium chloride antagonizes the effect of acetylcholine on muscarinic receptors in cholinergically innervated organs including the bladder',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía metabólica no está bien definida: de lo absorbido, los metabolitos son cerca del 40 % de lo excretado; se supone hidrólisis del éster y conjugación con ácido glucurónico. El citocromo P450 no contribuye de forma importante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía metabólica no está bien definida: de lo absorbido, los metabolitos son cerca del 40 % de lo excretado; se supone hidrólisis del éster y conjugación con ácido glucurónico. El citocromo P450 no contribuye de forma importante.',
          ref: {
            f: 'dailymed-trospio',
            sec: '12 · Farmacología clínica',
            cita: 'The metabolic pathway of trospium in humans has not been fully defined',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Azoniaspironortropanol (conjugado)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-trospio',
            sec: '12 · Farmacología clínica',
            cita: 'The major metabolic pathway is hypothesized as ester hydrolysis with subsequent conjugation of benzylic acid to form azoniaspironortropanol with glucuronic acid',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La mayor parte de la dosis (85,2 %) se recuperó en las heces y el 5,8 % en la orina, de la cual el 60 % era trospio sin cambios; la secreción tubular activa es una vía importante de eliminación.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayor parte de la dosis (85,2 %) se recuperó en las heces y el 5,8 % en la orina, de la cual el 60 % era trospio sin cambios; la secreción tubular activa es una vía importante de eliminación.',
          ref: {
            f: 'dailymed-trospio',
            sec: '12 · Farmacología clínica',
            cita: 'the majority of the dose (85.2%) was recovered in feces and a smaller amount (5.8% of the dose) was recovered in urine; 60% of the radioactivity excreted in urine was unchanged trospium',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '9,6 (4-16,1)',
      unidad: '%',
      analito: 'trospio',
      condiciones: 'dosis de 20 mg',
      ref: {
        f: 'dailymed-trospio',
        sec: '12 · Farmacología clínica',
        cita: 'Mean absolute bioavailability of a 20 mg dose is 9.6% (range: 4 to 16.1%)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '5-6',
      unidad: 'h',
      analito: 'trospio',
      ref: {
        f: 'dailymed-trospio',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma concentrations (C max ) occur between 5 to 6 hours post-dose',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media (dosis única de 20 mg)',
      valor: '3,5 ± 4,0',
      unidad: 'ng/mL',
      analito: 'trospio',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de 20 mg',
      ref: { f: 'dailymed-trospio', sec: '12 · Farmacología clínica', cita: '3.5 ± 4.0 36.4 ± 21.8 5.3 ± 1.2 18.3 ± 3.2', codigo: '34090-1' }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC 0-∞ media (dosis única de 20 mg)',
      valor: '36,4 ± 21,8',
      unidad: 'ng·h/mL',
      analito: 'trospio',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de 20 mg',
      ref: { f: 'dailymed-trospio', sec: '12 · Farmacología clínica', cita: '3.5 ± 4.0 36.4 ± 21.8 5.3 ± 1.2 18.3 ± 3.2', codigo: '34090-1' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero (in vitro)',
      valor: '50-85',
      unidad: '%',
      analito: 'trospio',
      ref: { f: 'dailymed-trospio', sec: '12 · Farmacología clínica', cita: 'Protein binding ranged from 50 to 85%', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '395 ± 140',
      unidad: 'L',
      analito: 'trospio',
      condiciones: 'dosis oral de 20 mg',
      ref: {
        f: 'dailymed-trospio',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent volume of distribution for a 20 mg oral dose is 395 (± 140) liters',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática tras la vía oral',
      valor: '20 (aprox.)',
      unidad: 'h',
      analito: 'trospio',
      ref: {
        f: 'dailymed-trospio',
        sec: '12 · Farmacología clínica',
        cita: 'The plasma half-life for trospium chloride following oral administration is approximately 20 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '85,2',
      unidad: '% de la dosis',
      analito: 'trospio y metabolitos',
      condiciones: 'dosis marcada de liberación inmediata',
      ref: { f: 'dailymed-trospio', sec: '12 · Farmacología clínica', cita: 'the majority of the dose (85.2%) was recovered in feces', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '5,8',
      unidad: '% de la dosis',
      analito: 'trospio y metabolitos',
      condiciones: 'dosis marcada de liberación inmediata',
      ref: {
        f: 'dailymed-trospio',
        sec: '12 · Farmacología clínica',
        cita: 'a smaller amount (5.8% of the dose) was recovered in urine',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-trospio', '570c3ae7-8011-4944-8935-57d0a66102aa', 'TROSPIUM CHLORIDE TABLET, FILM COATED', 'Trospium Chloride', '14', '2026-09-17', '2026-11-12'),
    rengPubchem(5284632, 'trospium', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
