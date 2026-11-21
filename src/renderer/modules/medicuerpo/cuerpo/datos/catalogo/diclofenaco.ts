import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'diclofenaco',
    nombre: 'Diclofenaco',
    clase: 'Antiinflamatorio no esteroideo',
    sinonimos: [ 'diclofenaco', 'diclofenac' ],
    formula: 'C14H11Cl2NO2',
    masaMolar: 296.1,
    smiles: 'C1=CC=C(C(=C1)CC(=O)O)NC2=C(C=CC=C2Cl)Cl',
    inchikey: 'DCOPUUMXTXDBNB-UHFFFAOYSA-N',
    cid: 3033,
    iupac: '2-[2-(2,6-dichloroanilino)phenyl]acetic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'diclofenaco-oral',
      producto: 'Diclofenac Sodium · comprimido de liberación retardada',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación retardada',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '75 mg, 50 mg o 25 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Diclofenaco sódico',
        ref: { f: 'dailymed-diclofenaco', sec: '11 · Descripción', cita: 'benzeneacetic acid, monosodium salt', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose 101',
        'croscarmellose sodium',
        'povidone',
        'talc',
        'magnesium stearate',
        'methacrylic acid - ethyl acrylate copolymer (1:1) type a',
        'polyethylene glycol 6000',
        'titanium dioxide',
        'hypromelloses',
        'ferric oxide red',
        'ferric oxide yellow',
        'shellac',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Los comprimidos de liberación retardada se usan para aliviar signos y síntomas de artrosis y artritis reumatoide, entre otras indicaciones.',
        ref: {
          f: 'dailymed-diclofenaco',
          sec: '1 · Indicaciones',
          cita: 'symptoms of osteoarthritis For relief of the signs and symptoms of rheumatoid arthritis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-diclofenaco',
      advertencias: [
        {
          titulo: 'Eventos cardiovasculares y gastrointestinales graves',
          texto: 'La advertencia destacada recoge riesgo de eventos cardiovasculares y gastrointestinales graves con los antiinflamatorios no esteroideos.',
          organos: [ 'corazon', 'vasos', 'estomago', 'intestino-delgado' ],
          ref: {
            f: 'dailymed-diclofenaco',
            sec: 'Advertencia destacada',
            cita: 'RISK OF SERIOUS CARDIOVASCULAR AND GASTROINTESTINAL EVENTS',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [ 'Dolor abdominal, diarrea y dispepsia.', '34084-4', 'abdominal pain, constipation, diarrhea, dyspepsia' ],
        [ 'Acidez y náuseas entre los efectos digestivos descritos.', '34084-4', 'heartburn, nausea, GI ulcers' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación retardada: 75 mg, 50 mg o 25 mg por comprimido, según la etiqueta; el activo va como diclofenaco sódico. Los excipientes no son el principio activo.',
    usos: 'Los comprimidos de liberación retardada se usan para aliviar signos y síntomas de artrosis y artritis reumatoide, entre otras indicaciones.',
    actua: 'Inhibe las ciclooxigenasas COX-1 y COX-2 y la síntesis de prostaglandinas, aunque su mecanismo completo no se conoce.',
    recorrido: 'La absorción se estimó completa a partir de la recuperación urinaria, pero solo cerca de la mitad de la fracción absorbida llega a la circulación general por el primer paso. Tras la transformación, se elimina por las vías urinaria y biliar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación retardada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de diclofenaco sódico de liberación retardada.',
      sigue: 'La cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
      datos: [
        {
          t: 'Comprimido de diclofenaco sódico de liberación retardada.',
          ref: { f: 'dailymed-diclofenaco', sec: '12.3 · Farmacocinética', cita: 'diclofenac sodium delayed-release tablets', codigo: '43682-4' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción se estimó completa a partir de la recuperación urinaria, pero solo cerca de la mitad de la fracción absorbida llega a la circulación general por el primer paso.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción se estimó completa a partir de la recuperación urinaria, pero solo cerca de la mitad de la fracción absorbida llega a la circulación general por el primer paso.',
          ref: {
            f: 'dailymed-diclofenaco',
            sec: '12.3 · Farmacocinética',
            cita: 'only about 50% of the absorbed dose is systemically available',
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
      ocurre: 'La unión a proteínas séricas supera el 99 %, principalmente a albúmina. La etiqueta considera incierto el papel de la difusión articular.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas séricas supera el 99 %, principalmente a albúmina. La etiqueta considera incierto el papel de la difusión articular.',
          ref: {
            f: 'dailymed-diclofenaco',
            sec: '12.3 · Farmacocinética',
            cita: 'more than 99% bound to human serum proteins, primarily to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'COX-1 y COX-2',
        efecto: 'Inhibe las ciclooxigenasas COX-1 y COX-2 y la síntesis de prostaglandinas, aunque su mecanismo completo no se conoce.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Inhibe las ciclooxigenasas COX-1 y COX-2 y la síntesis de prostaglandinas, aunque su mecanismo completo no se conoce.',
            ref: { f: 'dailymed-diclofenaco', sec: '12.1 · Mecanismo de acción', cita: 'cyclooxygenase (COX-1 and COX-2)', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En plasma y orina se identifican varios derivados. CYP2C9 participa en la formación del principal, 4′-hidroxidiclofenaco, de actividad muy débil.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En plasma y orina se identifican varios derivados. CYP2C9 participa en la formación del principal, 4′-hidroxidiclofenaco, de actividad muy débil.',
          ref: {
            f: 'dailymed-diclofenaco',
            sec: '12.3 · Farmacocinética',
            cita: 'major diclofenac metabolite, 4’-hydroxy-diclofenac, has very weak pharmacologic activity',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la transformación, se elimina por las vías urinaria y biliar.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la transformación, se elimina por las vías urinaria y biliar.',
          ref: {
            f: 'dailymed-diclofenaco',
            sec: '12.3 · Farmacocinética',
            cita: 'eliminated through metabolism and subsequent urinary and biliary excretion',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico, media',
      valor: '2,3',
      unidad: 'h',
      analito: 'diclofenaco',
      poblacion: 'adultos sanos de 20 a 48 años',
      ref: { f: 'dailymed-diclofenaco', sec: '12.3 · Farmacocinética', cita: 'Tmax (hr) [N = 56] 2.3 69', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-diclofenaco', '3330ea92-fc9d-4541-b378-be399b0995d3', 'DICLOFENAC SODIUM TABLET, DELAYED RELEASE', 'Diclofenac Sodium', '20', '2025-08-13', '2026-11-12'),
    rengPubchem(3033, 'diclofenaco', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
