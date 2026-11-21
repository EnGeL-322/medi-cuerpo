import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gepotidacina',
    nombre: 'Gepotidacina',
    clase: 'Antibacteriano triazaacenaftileno inhibidor de topoisomerasas de tipo II',
    sinonimos: [ 'gepotidacin mesylate', 'Blujepa' ],
    formula: 'C24H28N6O3',
    masaMolar: 448.5,
    smiles: 'C1CC2=CC(=NC=C2OC1)CNC3CCN(CC3)C[C@@H]4CN5C(=O)C=CC6=C5N4C(=O)C=N6',
    inchikey: 'PZFAZQUREQIODZ-LJQANCHMSA-N',
    cid: 25101874,
    iupac: '(3R)-3-[[4-(3,4-dihydro-2H-pyrano[2,3-c]pyridin-6-ylmethylamino)piperidin-1-yl]methyl]-1,4,7-triazatricyclo[6.3.1.04,12]dodeca-6,8(12),9-triene-5,11-dione',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'gepotidacina-oral',
      producto: 'Blujepa · comprimido recubierto con película',
      titular: 'GLAXOSMITHKLINE LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '750 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Mesilato de gepotidacina dihidrato',
        ref: { f: 'dailymed-gepotidacina', sec: '11 · Descripción', cita: 'Gepotidacin mesylate dihydrate chemical structure', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de las infecciones urinarias no complicadas en mujeres y de la gonorrea urogenital no complicada por microorganismos sensibles.',
        ref: {
          f: 'dailymed-gepotidacina',
          sec: '1 · Indicaciones',
          cita: 'Uncomplicated urinary tract infections (uUTI) in female adult an',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-gepotidacina',
      advertencias: [
        {
          titulo: 'Prolongación del QTc',
          texto: 'Evitar si hay antecedentes de QTc prolongado, cardiopatía relevante o fármacos que prolongan el QTc.',
          organos: [],
          ref: {
            f: 'dailymed-gepotidacina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use of BLUJEPA in patients with a history of QTc prolongation, or with relevant pre‑existing cardiac disease',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la infección urinaria, las más frecuentes (1 % o más): diarrea, náuseas, dolor abdominal, flatulencia, cefalea, heces blandas, mareo, vómitos y candidiasis vulvovaginal.',
          '34084-4',
          'most common adverse reactions occurring in ≥1% of patients are diarrhea, nausea, abdominal pain, flatulence, headache, soft feces, dizziness, vomiting, and vulvovaginal candidiasis'
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
    contiene: 'Comprimido recubierto con película: 750 mg por comprimido, según la etiqueta; el activo va como mesilato de gepotidacina dihidrato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las infecciones urinarias no complicadas en mujeres y de la gonorrea urogenital no complicada por microorganismos sensibles.',
    actua: 'Inhibe las topoisomerasas bacterianas de tipo II, la ADN girasa y la topoisomerasa IV, y así bloquea la replicación del ADN; es bactericida.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 45 % y el tmax de unas 2,0 horas; una comida de grasa moderada no cambia la farmacocinética de forma significativa. Alrededor del 52 % se excreta en las heces (30 % sin cambios) y el 31 % en la orina (20 % sin cambios), principal vía para el fármaco absorbido.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 750 mg: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 750 mg: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-gepotidacina',
            sec: '3 · Formas y concentraciones',
            cita: 'Each film coated tablet of BLUJEPA contains 750 mg of gepotidacin',
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
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 45 % y el tmax de unas 2,0 horas; una comida de grasa moderada no cambia la farmacocinética de forma significativa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 45 % y el tmax de unas 2,0 horas; una comida de grasa moderada no cambia la farmacocinética de forma significativa.',
          ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Absolute Bioavailability ~45% T max (hours) ~2.0', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas plasmáticas es baja (alrededor del 25 al 41 %); el volumen de distribución en estado estacionario es de unos 173 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es baja (alrededor del 25 al 41 %); el volumen de distribución en estado estacionario es de unos 173 L.',
          ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Plasma Protein Binding ~25 to ~41%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'ADN girasa y topoisomerasa IV bacterianas',
        efecto: 'Inhibe las topoisomerasas bacterianas de tipo II, la ADN girasa y la topoisomerasa IV, y así bloquea la replicación del ADN; es bactericida.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe las topoisomerasas bacterianas de tipo II, la ADN girasa y la topoisomerasa IV, y así bloquea la replicación del ADN; es bactericida.',
            ref: {
              f: 'dailymed-gepotidacina',
              sec: '12.4 · Microbiología',
              cita: 'BLUJEPA is a triazaacenaphthylene antibacterial that inhibits Type II topoisomerases including bacterial topoisomerase II (DNA gyrase) and topoisomerase IV, thereby inhibiting DNA replication',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su vía principal es el metabolismo oxidativo por la CYP3A4; el metabolito principal, M4, es alrededor del 11 % del material circulante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su vía principal es el metabolismo oxidativo por la CYP3A4; el metabolito principal, M4, es alrededor del 11 % del material circulante.',
          ref: {
            f: 'dailymed-gepotidacina',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxidative metabolism mediated by CYP3A4, producing several circulating metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 52 % se excreta en las heces (30 % sin cambios) y el 31 % en la orina (20 % sin cambios), principal vía para el fármaco absorbido.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 52 % se excreta en las heces (30 % sin cambios) y el 31 % en la orina (20 % sin cambios), principal vía para el fármaco absorbido.',
          ref: {
            f: 'dailymed-gepotidacina',
            sec: '12.3 · Farmacocinética',
            cita: 'Feces ~52% (30% unchanged drug) Urine ~31% (20% unchanged drug; major route of elimination for absorbed gepotidacin)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 9,3 horas.',
          ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Terminal Half-life (hours) a 9.3 (1.3)', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '45 (aprox.)',
      unidad: '%',
      analito: 'gepotidacina',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Absolute Bioavailability ~45%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2,0 (aprox.)',
      unidad: 'h',
      analito: 'gepotidacina',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'T max (hours) ~2.0', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '25-41 (aprox.)',
      unidad: '%',
      analito: 'gepotidacina',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Plasma Protein Binding ~25 to ~41%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '172,9',
      unidad: 'L',
      analito: 'gepotidacina',
      poblacion: 'pacientes con ITU no complicada',
      condiciones: '1 500 mg cada 12 h',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'V ss (L) a 172.9 (42.5)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '9,3',
      unidad: 'h',
      analito: 'gepotidacina',
      poblacion: 'pacientes con ITU no complicada',
      condiciones: '1 500 mg cada 12 h',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Terminal Half-life (hours) a 9.3 (1.3)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '33,4',
      unidad: 'L/h',
      analito: 'gepotidacina',
      poblacion: 'pacientes con ITU no complicada',
      condiciones: '1 500 mg cada 12 h',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Total Clearance (L/hour) a 33.4 (6.7)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '31 (aprox.)',
      unidad: '% de la dosis',
      analito: 'gepotidacina y metabolitos',
      ref: { f: 'dailymed-gepotidacina', sec: '12.3 · Farmacocinética', cita: 'Urine ~31% (20% unchanged drug', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-gepotidacina', '80b57cfe-7819-4d95-a57d-014af42f118d', 'BLUJEPA (GEPOTIDACIN) TABLET, FILM COATED', 'Blujepa', '3', '2026-02-23', '2026-11-19'),
    rengPubchem(25101874, 'gepotidacin mesylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
