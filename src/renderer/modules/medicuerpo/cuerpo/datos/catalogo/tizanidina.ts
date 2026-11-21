import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tizanidina',
    nombre: 'Tizanidina',
    clase: 'Agonista adrenérgico alfa-2',
    sinonimos: [ 'tizanidine' ],
    formula: 'C9H8ClN5S',
    masaMolar: 253.71,
    smiles: 'C1CN=C(N1)NC2=C(C=CC3=NSN=C32)Cl',
    inchikey: 'XFYDIVBRZNQMJC-UHFFFAOYSA-N',
    cid: 5487,
    iupac: '5-chloro-N-(4,5-dihydro-1H-imidazol-2-yl)-2,1,3-benzothiadiazol-4-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'tizanidina-oral',
      producto: 'Zanaflex · comprimido',
      titular: 'LEGACY PHARMA USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '4 mg',
      excipientes: [ 'silicon dioxide', 'stearic acid', 'microcrystalline cellulose', 'anhydrous lactose' ],
      usos: {
        t: 'Espasticidad en adultos según la etiqueta.',
        ref: { f: 'dailymed-tizanidina', sec: '1 · Indicaciones', cita: 'treatment of spasticity in adults', codigo: '34067-9' }
      },
      fuente: 'dailymed-tizanidina',
      sal: {
        nombre: 'clorhidrato de tizanidina',
        ref: { f: 'dailymed-tizanidina', sec: '11 · Descripción', cita: 'tizanidine hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con clorhidrato de tizanidina como ingrediente activo.',
    usos: 'Espasticidad en adultos según la etiqueta.',
    actua: 'Activa receptores alfa-2 centrales. Se cree que reduce la facilitación de las neuronas motoras de la médula espinal.',
    recorrido: 'Tras la toma se absorbe casi completamente, pero la biodisponibilidad ronda el 40 % por el primer paso hepático. En el estudio oral radiomarcado, se recuperó un promedio del 60 % en orina y del 20 % en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Zanaflex se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Zanaflex se presenta como comprimido para administración oral.',
          ref: { f: 'dailymed-tizanidina', sec: '3 · Forma farmacéutica', cita: 'the cap Tablets 4 mg white, uncoated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Tras la toma se absorbe casi completamente, pero la biodisponibilidad ronda el 40 % por el primer paso hepático.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Tras la toma se absorbe casi completamente, pero la biodisponibilidad ronda el 40 % por el primer paso hepático.',
          ref: {
            f: 'dailymed-tizanidina',
            sec: '12.3 · Farmacocinética',
            cita: 'due to extensive first-pass hepatic metabolism',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une en cerca del 30 % a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une en cerca del 30 % a proteínas plasmáticas.',
          ref: {
            f: 'dailymed-tizanidina',
            sec: '12.3 · Farmacocinética',
            cita: 'Tizanidine is approximately 30% bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico alfa-2',
        efecto: 'Activa receptores alfa-2 centrales. Se cree que reduce la facilitación de las neuronas motoras de la médula espinal.',
        lugar: [ 'nervios' ],
        datos: [
          {
            t: 'Activa receptores alfa-2 centrales. Se cree que reduce la facilitación de las neuronas motoras de la médula espinal.',
            ref: { f: 'dailymed-tizanidina', sec: '12.1 · Mecanismo', cita: 'reduce facilitation of spinal motor neurons', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma alrededor del 95 % de la dosis. CYP1A2 es la principal enzima implicada.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma alrededor del 95 % de la dosis. CYP1A2 es la principal enzima implicada.',
          ref: {
            f: 'dailymed-tizanidina',
            sec: '12.3 · Farmacocinética',
            cita: 'primary cytochrome P450 isoenzyme involved in tizanidine metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio oral radiomarcado, se recuperó un promedio del 60 % en orina y del 20 % en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio oral radiomarcado, se recuperó un promedio del 60 % en orina y del 20 % en heces.',
          ref: { f: 'dailymed-tizanidina', sec: '12.3 · Farmacocinética', cita: 'recovered in the urine and feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-tizanidina', '60c27d35-7349-4fc6-86ad-70fffdbe3e08', 'ZANAFLEX (TIZANIDINE HYDROCHLORIDE) CAPSULE ZANAFLEX (TIZANIDINE HYDROCHLORIDE) TABLET', 'Zanaflex', '2', '2026-01-05', '2026-11-10'),
    rengPubchem(5487, 'tizanidine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
