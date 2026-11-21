import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'levocetirizina',
    nombre: 'Levocetirizina',
    clase: 'Antihistamínico H₁',
    sinonimos: [ 'levocetirizina', 'levocetirizine' ],
    formula: 'C21H25ClN2O3',
    masaMolar: 388.9,
    smiles: 'C1CN(CCN1CCOCC(=O)O)[C@H](C2=CC=CC=C2)C3=CC=C(C=C3)Cl',
    inchikey: 'ZKLPARSLTMPFCP-OAQYLSRUSA-N',
    cid: 1549000,
    iupac: '2-[2-[4-[(R)-(4-chlorophenyl)-phenylmethyl]piperazin-1-yl]ethoxy]acetic acid',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'levocetirizina-oral',
      producto: 'Levocetirizine Dihydrochloride · comprimido recubierto con película',
      titular: 'MICRO LABS LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Diclorhidrato de levocetirizina',
        ref: { f: 'dailymed-levocetirizina', sec: '11 · Descripción', cita: 'Levocetirizine dihydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'cellulose, microcrystalline',
        'lactose monohydrate',
        'silicon dioxide',
        'magnesium stearate',
        'hypromellose 2910 (5 mpa.s)',
        'titanium dioxide',
        'polyethylene glycol 400'
      ],
      usos: {
        t: 'La ficha incluye el alivio de síntomas de rinitis alérgica perenne.',
        ref: {
          f: 'dailymed-levocetirizina',
          sec: '1 · Indicaciones',
          cita: 'relief of symptoms associated with perennial allergic rhinitis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-levocetirizina',
      reacciones: [
        [ 'Somnolencia y fatiga descritas a partir de los 12 años.', '34084-4', 'were somnolence, nasopharyngitis, fatigue, dry mouth' ],
        [ 'Boca seca y faringitis en esa población.', '34084-4', 'dry mouth, and pharyngitis in subjects 12 years of age and older' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg por comprimido, según la etiqueta; el activo va como diclorhidrato de levocetirizina. Los excipientes no son el principio activo.',
    usos: 'La ficha incluye el alivio de síntomas de rinitis alérgica perenne.',
    actua: 'Es el enantiómero activo de cetirizina y actúa principalmente inhibiendo receptores H₁ de histamina.',
    recorrido: 'Se absorbe rápidamente. En adultos, tras el comprimido el pico plasmático llega alrededor de 0,9 h. La vía principal es urinaria. Se recupera una media del 85,4 % en orina y del 12,9 % en heces, contando el fármaco y sus metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral recubierto con película.',
          ref: { f: 'dailymed-levocetirizina', sec: '3 · Formas y concentraciones', cita: 'oval shaped biconvex film coated tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente. En adultos, tras el comprimido el pico plasmático llega alrededor de 0,9 h.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente. En adultos, tras el comprimido el pico plasmático llega alrededor de 0,9 h.',
          ref: {
            f: 'dailymed-levocetirizina',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations are achieved 0.9 hour after administration of the oral tablet',
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
      ocurre: 'En pruebas in vitro, la unión media a proteínas plasmáticas se situó entre 91 % y 92 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En pruebas in vitro, la unión media a proteínas plasmáticas se situó entre 91 % y 92 %.',
          ref: {
            f: 'dailymed-levocetirizina',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma protein binding of levocetirizine in vitro ranged from 91 to 92%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de histamina H₁',
        efecto: 'Es el enantiómero activo de cetirizina y actúa principalmente inhibiendo receptores H₁ de histamina.',
        lugar: [ 'vias-respiratorias', 'piel' ],
        datos: [
          {
            t: 'Es el enantiómero activo de cetirizina y actúa principalmente inhibiendo receptores H₁ de histamina.',
            ref: {
              f: 'dailymed-levocetirizina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'its principal effects are mediated via selective inhibition of H 1 receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma menos del 14 % de la dosis. Entre las vías descritas están oxidación, desalquilación y conjugación con taurina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma menos del 14 % de la dosis. Entre las vías descritas están oxidación, desalquilación y conjugación con taurina.',
          ref: {
            f: 'dailymed-levocetirizina',
            sec: '12.3 · Farmacocinética',
            cita: 'extent of metabolism of levocetirizine in humans is less than 14% of the dose',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal es urinaria. Se recupera una media del 85,4 % en orina y del 12,9 % en heces, contando el fármaco y sus metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal es urinaria. Se recupera una media del 85,4 % en orina y del 12,9 % en heces, contando el fármaco y sus metabolitos.',
          ref: { f: 'dailymed-levocetirizina', sec: '12.3 · Farmacocinética', cita: 'accounting for a mean of 85.4% of the dose', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico con el comprimido',
      valor: '0,9',
      unidad: 'h',
      analito: 'levocetirizina',
      poblacion: 'adultos',
      ref: {
        f: 'dailymed-levocetirizina',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations are achieved 0.9 hour after administration of the oral tablet',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '≈8–9',
      unidad: 'h',
      analito: 'levocetirizina',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-levocetirizina',
        sec: '12.3 · Farmacocinética',
        cita: 'plasma half-life in adult healthy subjects was about 8 to 9 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-levocetirizina', '717eb542-3a05-485e-be76-3930efb40d33', 'LEVOCETIRIZINE DIHYDROCHLORIDE (LEVOCETIRIZINE DIHYDROCHLORIDE) TABLET, FILM COATED', 'Levocetirizine Dihydrochloride', '23', '2026-10-02', '2026-11-12'),
    rengPubchem(1549000, 'levocetirizina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
