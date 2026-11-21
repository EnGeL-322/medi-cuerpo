import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'primaquina',
    nombre: 'Primaquina',
    clase: 'Antipalúdico 8-aminoquinolina',
    sinonimos: [ 'primaquina', 'primaquine' ],
    formula: 'C15H21N3O',
    masaMolar: 259.35,
    smiles: 'CC(CCCN)NC1=C2C(=CC(=C1)OC)C=CC=N2',
    inchikey: 'INDBQLZJXZLFIT-UHFFFAOYSA-N',
    cid: 4908,
    iupac: '4-N-(6-methoxyquinolin-8-yl)pentane-1,4-diamine',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'primaquina-oral',
      producto: 'Primaquine Phosphate · comprimido',
      titular: 'UNICHEM PHARMACEUTICALS (USA), INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '15 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Fosfato de primaquina', ref: { f: 'dailymed-primaquina', sec: '11 · Descripción', cita: 'Primaquine phosphate', codigo: '34089-3' } },
      excipientes: [
        'cellulose, microcrystalline',
        'starch, corn',
        'lactose monohydrate',
        'magnesium stearate',
        'water',
        'hypromelloses',
        'titanium dioxide',
        'polyethylene glycol 400',
        'fd&c red no. 40',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'La etiqueta indica prevención de recaídas de malaria por Plasmodium vivax mediante cura radical.',
        ref: { f: 'dailymed-primaquina', sec: '1 · Indicaciones', cita: 'radical cure (prevention of relapse) of vivax malaria', codigo: '34067-9' }
      },
      fuente: 'dailymed-primaquina',
      reacciones: [
        [ 'Náuseas, vómitos y cólicos abdominales.', '34084-4', 'Nausea, vomiting, epigastric distress, abdominal cramps' ],
        [
          'La etiqueta recoge anemia hemolítica y destaca el riesgo en personas con deficiencia de G6PD.',
          '34084-4',
          'Hemolytic anemia occurs commonly in patients with G6PD deficiency'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 15 mg por comprimido, según la etiqueta; el activo va como fosfato de primaquina. Los excipientes no son el principio activo.',
    usos: 'La etiqueta indica prevención de recaídas de malaria por Plasmodium vivax mediante cura radical.',
    actua: 'El mecanismo no está establecido por completo. La ficha considera probable la participación de metabolitos hidroxilados formados por CYP2D6.',
    recorrido: 'En el estudio de adultos con malaria por P. vivax, el tiempo al pico fue 2,3 ± 1,1 h y la ficha presenta una biodisponibilidad superior al 70 %. El aclaramiento se atribuye principalmente al metabolismo. Se recuperó el 64 % de la dosis en orina, con poca primaquina sin transformar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral de fosfato de primaquina.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral de fosfato de primaquina.',
          ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: 'Primaquine phosphate Tablets', codigo: '34090-1' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En el estudio de adultos con malaria por P. vivax, el tiempo al pico fue 2,3 ± 1,1 h y la ficha presenta una biodisponibilidad superior al 70 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En el estudio de adultos con malaria por P. vivax, el tiempo al pico fue 2,3 ± 1,1 h y la ficha presenta una biodisponibilidad superior al 70 %.',
          ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: 'Bioavailability c >70 % T max 2.3 ± 1.1 hours', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La ficha informa un 74 % de unión a proteínas plasmáticas, principalmente a glucoproteína ácida alfa-1.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La ficha informa un 74 % de unión a proteínas plasmáticas, principalmente a glucoproteína ácida alfa-1.',
          ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: '74% (mainly to alpha 1 acid glycoprotein)', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Formas latentes de Plasmodium vivax',
        efecto: 'El mecanismo no está establecido por completo. La ficha considera probable la participación de metabolitos hidroxilados formados por CYP2D6.',
        lugar: [ 'higado', 'sitio-infeccion' ],
        datos: [
          {
            t: 'El mecanismo no está establecido por completo. La ficha considera probable la participación de metabolitos hidroxilados formados por CYP2D6.',
            ref: {
              f: 'dailymed-primaquina',
              sec: '12 · Farmacología clínica',
              cita: 'activity is probably related to hydroxylated metabolites generated intrahepatically by CYP2D6',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se describen desaminación oxidativa por MAO-A, hidroxilación por CYP2D6 y conjugación directa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se describen desaminación oxidativa por MAO-A, hidroxilación por CYP2D6 y conjugación directa.',
          ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: 'Hydroxylation of the quinoline ring, CYP2D6', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El aclaramiento se atribuye principalmente al metabolismo. Se recuperó el 64 % de la dosis en orina, con poca primaquina sin transformar.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El aclaramiento se atribuye principalmente al metabolismo. Se recuperó el 64 % de la dosis en orina, con poca primaquina sin transformar.',
          ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: '64%, (including 3.6% of primaquine', codigo: '34090-1' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico',
      valor: '2,3 ± 1,1',
      unidad: 'h',
      analito: 'primaquina',
      poblacion: 'adultos con malaria por P. vivax',
      ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: 'T max 2.3 ± 1.1 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '5,6 ± 1,0',
      unidad: 'h',
      analito: 'primaquina',
      poblacion: 'adultos con malaria por P. vivax',
      ref: { f: 'dailymed-primaquina', sec: '12 · Farmacología clínica', cita: '5.6 ± 1.0 hours', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-primaquina', '0c8c2bc6-428b-40b6-8114-6df80290878d', 'PRIMAQUINE PHOSPHATE TABLET', 'Primaquine Phosphate', '9', '2026-03-02', '2026-11-12'),
    rengPubchem(4908, 'primaquina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
