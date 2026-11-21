import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'praziquantel',
    nombre: 'Praziquantel',
    clase: 'Antihelmíntico',
    sinonimos: [ 'praziquantel', 'Biltricide' ],
    formula: 'C19H24N2O2',
    masaMolar: 312.4,
    smiles: 'C1CCC(CC1)C(=O)N2CC3C4=CC=CC=C4CCN3C(=O)C2',
    inchikey: 'FSVJFNAIGNNGKK-UHFFFAOYSA-N',
    cid: 4891,
    iupac: '2-(cyclohexanecarbonyl)-3,6,7,11b-tetrahydro-1H-pyrazino[2,1-a]isoquinolin-4-one',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'praziquantel-oral',
      producto: 'Biltricide · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '600 mg por comprimido, según la etiqueta',
      excipientes: [
        'starch, corn',
        'magnesium stearate',
        'microcrystalline cellulose',
        'crospovidone, unspecified',
        'sodium lauryl sulfate',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'hypromellose, unspecified'
      ],
      usos: {
        t: 'Esquistosomiasis y clonorquiasis u opistorquiasis (duelas hepáticas) desde 1 año de edad.',
        ref: { f: 'dailymed-praziquantel', sec: '1 · Indicaciones', cita: 'Schistosomiasis due to all species of schistosoma', codigo: '34067-9' }
      },
      fuente: 'dailymed-praziquantel',
      advertencias: [
        {
          titulo: 'Efectos en el sistema nervioso',
          texto: 'Puede empeorar lesiones del sistema nervioso central por esquistosomiasis, paragonimiasis o cisticercosis.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-praziquantel',
            sec: '5 · Advertencias y precauciones',
            cita: 'Biltricide can exacerbate central nervous system pathology due to schistosomiasis, paragonimiasis, or Taenia solium cysticercosis',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Malestar, fiebre, dolor de cabeza, mareo, molestias abdominales, náuseas y urticaria, en adultos y niños.',
          '34084-4',
          'Gastrointestinal disorders: abdominal discomfort, nausea'
        ],
        [
          'Estas reacciones pueden ser más frecuentes o graves en personas con mucha carga de parásitos.',
          '34084-4',
          'Such adverse reactions may be more frequent and/or serious in patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 600 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Esquistosomiasis y clonorquiasis u opistorquiasis (duelas hepáticas) desde 1 año de edad.',
    actua: 'Es un antihelmíntico; la etiqueta remite su acción a la sección de microbiología.',
    recorrido: 'Se absorbe el 80 % de la dosis y el pico sérico llega en 1 a 3 horas. Alrededor del 80 % de la dosis sale por los riñones, casi todo (más del 99 %) como metabolitos; su semivida sérica es de 0,8 a 1,5 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 600 mg con tres ranuras, recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 600 mg con tres ranuras, recubierto con película.',
          ref: {
            f: 'dailymed-praziquantel',
            sec: '3 · Formas y concentraciones',
            cita: 'The tablets are white to orange tinged, film-coated, oblong with three scores',
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
      ocurre: 'Se absorbe el 80 % de la dosis y el pico sérico llega en 1 a 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe el 80 % de la dosis y el pico sérico llega en 1 a 3 horas.',
          ref: {
            f: 'dailymed-praziquantel',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration, 80% of an administered Biltricide dose is absorbed',
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
      ocurre: 'Llega a la sangre en 1 a 3 horas; la etiqueta no describe su reparto por los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Llega a la sangre en 1 a 3 horas; la etiqueta no describe su reparto por los tejidos.',
          ref: {
            f: 'dailymed-praziquantel',
            sec: '12.3 · Farmacocinética',
            cita: 'with maximal serum concentrations of praziquantel achieved 1 to 3 hours after dosing',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Parásitos (esquistosomas y duelas)',
        efecto: 'Es un antihelmíntico; la etiqueta remite su acción a la sección de microbiología.',
        lugar: [ 'sitio-infeccion', 'higado' ],
        datos: [
          {
            t: 'Es un antihelmíntico; la etiqueta remite su acción a la sección de microbiología.',
            ref: { f: 'dailymed-praziquantel', sec: '12.1 · Mecanismo de acción', cita: 'Praziquantel is an anthelmintic drug', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza rápido por el citocromo P450 y tiene efecto de primer paso.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza rápido por el citocromo P450 y tiene efecto de primer paso.',
          ref: {
            f: 'dailymed-praziquantel',
            sec: '12.3 · Farmacocinética',
            cita: 'Praziquantel is rapidly metabolized by the cytochrome P450 enzyme system',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 80 % de la dosis sale por los riñones, casi todo (más del 99 %) como metabolitos; su semivida sérica es de 0,8 a 1,5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 80 % de la dosis sale por los riñones, casi todo (más del 99 %) como metabolitos; su semivida sérica es de 0,8 a 1,5 horas.',
          ref: {
            f: 'dailymed-praziquantel',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 80% of an oral dose of Biltricide is excreted in the kidneys',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '80',
      unidad: '%',
      analito: 'praziquantel',
      ref: { f: 'dailymed-praziquantel', sec: '12.3 · Farmacocinética', cita: '80% of an administered Biltricide dose is absorbed', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '1-3',
      unidad: 'h',
      analito: 'praziquantel',
      ref: { f: 'dailymed-praziquantel', sec: '12.3 · Farmacocinética', cita: 'achieved 1 to 3 hours after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida sérica',
      valor: '0,8-1,5',
      unidad: 'h',
      analito: 'praziquantel',
      ref: {
        f: 'dailymed-praziquantel',
        sec: '12.3 · Farmacocinética',
        cita: 'the elimination half-life of praziquantel in serum ranges between 0.8 to 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado por los riñones',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos de praziquantel',
      ref: {
        f: 'dailymed-praziquantel',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 80% of an oral dose of Biltricide is excreted in the kidneys',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-praziquantel', '34ce1cdd-648e-4f1e-8512-bf3d4cc22eb9', 'BILTRICIDE (PRAZIQUANTEL) TABLET, FILM COATED', 'Biltricide', '13', '2026-03-04', '2026-11-12'),
    rengPubchem(4891, 'praziquantel', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
