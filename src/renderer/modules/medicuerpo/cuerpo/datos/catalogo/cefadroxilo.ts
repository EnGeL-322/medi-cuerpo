import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cefadroxilo',
    nombre: 'Cefadroxilo',
    clase: 'Antibiótico cefalosporina de primera generación',
    sinonimos: [ 'cefadroxil', 'Duricef' ],
    formula: 'C16H17N3O5S',
    masaMolar: 363.4,
    smiles: 'CC1=C(N2[C@@H]([C@@H](C2=O)NC(=O)[C@@H](C3=CC=C(C=C3)O)N)SC1)C(=O)O',
    inchikey: 'BOEGTKLJZSQCCD-UEKVPHQBSA-N',
    cid: 47965,
    iupac: '(6R,7R)-7-[[(2R)-2-amino-2-(4-hydroxyphenyl)acetyl]amino]-3-methyl-8-oxo-5-thia-1-azabicyclo[4.2.0]oct-2-ene-2-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'cefadroxilo-oral',
      producto: 'Cefadroxil · cápsula',
      titular: 'LUPIN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '500 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Cefadroxilo monohidrato',
        ref: {
          f: 'dailymed-cefadroxilo',
          sec: '11 · Descripción',
          cita: 'Cefadroxil monohydrate is a semisynthetic cephalosporin antibiotic',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'd&c red no. 28',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'gelatin',
        'cellulose, microcrystalline',
        'shellac',
        'potassium hydroxide',
        'magnesium stearate',
        'propylene glycol',
        'titanium dioxide',
        'ferrosoferric oxide',
        'crospovidone'
      ],
      usos: {
        t: 'Infecciones urinarias, de la piel y de la faringe y amígdalas por bacterias sensibles.',
        ref: { f: 'dailymed-cefadroxilo', sec: '1 · Indicaciones', cita: 'Urinary tract infections caused by E. coli', codigo: '34067-9' }
      },
      fuente: 'dailymed-cefadroxilo',
      advertencias: [
        {
          titulo: 'Hipersensibilidad cruzada',
          texto: 'Antes de empezar hay que preguntar por alergias a cefalosporinas o penicilinas: la sensibilidad cruzada entre betalactámicos está documentada.',
          organos: [ 'piel', 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-cefadroxilo',
            sec: 'Advertencias',
            cita: 'CROSS-SENSITIVITY AMONG BETA-LACTAM ANTIBIOTICS HAS BEEN CLEARLY',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Puede aparecer colitis pseudomembranosa durante o después del tratamiento; también diarrea, dispepsia, náuseas y vómitos.',
          '34084-4',
          'Onset of pseudomembranous colitis symptoms may occur during or after antibiotic treatment'
        ],
        [
          'Alergias (erupción, urticaria, angioedema y picor), que suelen ceder al suspenderlo; también se ha descrito anafilaxia.',
          '34084-4',
          'Allergies (in the form of rash, urticaria, angioedema, and pruritus) have been observed'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 500 mg por cápsula, según la etiqueta; el activo va como cefadroxilo monohidrato. Los excipientes no son el principio activo.',
    usos: 'Infecciones urinarias, de la piel y de la faringe y amígdalas por bacterias sensibles.',
    actua: 'Como las cefalosporinas, es bactericida porque inhibe la síntesis de la pared celular de las bacterias.',
    recorrido: 'Se absorbe rápido tras la toma oral; con 500 y 1000 mg, los picos séricos medios rondan los 16 y 28 mcg/mL. Más del 90 % sale sin cambios por la orina en 24 horas; tras 500 mg, la orina alcanza unos 1800 mcg/mL.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula para tomar por boca; el cefadroxilo es estable en medio ácido.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula para tomar por boca; el cefadroxilo es estable en medio ácido.',
          ref: { f: 'dailymed-cefadroxilo', sec: '11 · Descripción', cita: 'It is soluble in water and it is acid-stable', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido tras la toma oral; con 500 y 1000 mg, los picos séricos medios rondan los 16 y 28 mcg/mL.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido tras la toma oral; con 500 y 1000 mg, los picos séricos medios rondan los 16 y 28 mcg/mL.',
          ref: {
            f: 'dailymed-cefadroxilo',
            sec: '12 · Farmacología clínica',
            cita: 'Cefadroxil monohydrate is rapidly absorbed after oral administration',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vias-urinarias' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Llega a la sangre (picos de 16 y 28 mcg/mL con 500 y 1000 mg) y se concentra mucho en la orina, por encima de las concentraciones que frenan a los patógenos urinarios durante 20-22 horas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Llega a la sangre (picos de 16 y 28 mcg/mL con 500 y 1000 mg) y se concentra mucho en la orina, por encima de las concentraciones que frenan a los patógenos urinarios durante 20-22 horas.',
          ref: {
            f: 'dailymed-cefadroxilo',
            sec: '12 · Farmacología clínica',
            cita: 'The urine antibiotic concentration, following a 1-g dose, was maintained well above the MIC of susceptible urinary pathogens for 20 to 22 hours',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de la pared bacteriana',
        efecto: 'Como las cefalosporinas, es bactericida porque inhibe la síntesis de la pared celular de las bacterias.',
        lugar: [ 'sitio-infeccion', 'vias-urinarias' ],
        datos: [
          {
            t: 'Como las cefalosporinas, es bactericida porque inhibe la síntesis de la pared celular de las bacterias.',
            ref: {
              f: 'dailymed-cefadroxilo',
              sec: '12.4 · Microbiología',
              cita: 'the cephalosporins are bactericidal because of their inhibition of cell-wall synthesis',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Más del 90 % sale sin cambios: la etiqueta no describe un metabolismo relevante.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Más del 90 % sale sin cambios: la etiqueta no describe un metabolismo relevante.',
          ref: {
            f: 'dailymed-cefadroxilo',
            sec: '12 · Farmacología clínica',
            cita: 'Over 90% of the drug is excreted unchanged in the urine within 24 hours',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 90 % sale sin cambios por la orina en 24 horas; tras 500 mg, la orina alcanza unos 1800 mcg/mL.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 90 % sale sin cambios por la orina en 24 horas; tras 500 mg, la orina alcanza unos 1800 mcg/mL.',
          ref: {
            f: 'dailymed-cefadroxilo',
            sec: '12 · Farmacología clínica',
            cita: 'Over 90% of the drug is excreted unchanged in the urine within 24 hours',
            codigo: '34090-1'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Pico sérico medio',
      valor: '16 (500 mg) y 28 (1000 mg)',
      unidad: 'mcg/mL',
      analito: 'cefadroxilo',
      condiciones: 'dosis únicas de 500 y 1000 mg',
      ref: {
        f: 'dailymed-cefadroxilo',
        sec: '12 · Farmacología clínica',
        cita: 'average peak serum concentrations were approximately 16 and 28 mcg/mL',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina en 24 h',
      valor: '> 90',
      unidad: '% de la dosis',
      analito: 'cefadroxilo',
      ref: {
        f: 'dailymed-cefadroxilo',
        sec: '12 · Farmacología clínica',
        cita: 'Over 90% of the drug is excreted unchanged in the urine within 24 hours',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cefadroxilo', '5fe066ce-2f97-49d7-81bd-a672be1ebecd', 'CEFADROXIL CAPSULE', 'Cefadroxil', '8', '2025-11-17', '2026-11-12'),
    rengPubchem(47965, 'cefadroxil', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
