import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'memantina',
    nombre: 'Memantina',
    clase: 'Antagonista del receptor NMDA',
    sinonimos: [ 'memantine' ],
    formula: 'C12H21N',
    masaMolar: 179.3,
    smiles: 'CC12CC3CC(C1)(CC(C3)(C2)N)C',
    inchikey: 'BUGYDGFZZOZRHP-UHFFFAOYSA-N',
    cid: 4054,
    iupac: '3,5-dimethyladamantan-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'memantina-oral',
      producto: 'Namenda\nXR · cápsula de liberación prolongada',
      titular: 'CARILION MATERIALS MANAGEMENT',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '14 mg',
      sal: { nombre: 'clorhidrato de memantina', ref: { f: 'dailymed-memantina', sec: '11 · Descripción', cita: 'memantine hydrochloride' } },
      excipientes: [
        'sucrose',
        'povidone k30',
        'hypromellose 2910 (15 mpa.s)',
        'talc',
        'polyethylene glycol 400',
        'polyethylene glycol 8000',
        'ethylcellulose (100 mpa.s)',
        'ammonia'
      ],
      usos: {
        t: 'Demencia de tipo Alzheimer moderada a grave según la etiqueta.',
        ref: { f: 'dailymed-memantina', sec: '1 · Indicaciones', cita: 'treatment of moderate to severe dementia' }
      },
      fuente: 'dailymed-memantina'
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada de clorhidrato de memantina para administración oral.',
    usos: 'Demencia de tipo Alzheimer moderada a grave según la etiqueta.',
    actua: 'Se propone que bloquea de forma no competitiva el canal de receptores NMDA activados por glutamato, modulando así parte de la señal excitadora.',
    recorrido: 'Con la cápsula XR en el estudio de administraciones repetidas, el pico plasmático se alcanzó entre 9 y 12 horas. Alrededor del 48 % se excreta intacto en la orina. La etiqueta también describe metabolitos polares de actividad antagonista mínima.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Namenda\nXR por vía oral.',
      ocurre: 'La ficha corresponde a NAMENDA XR, cápsula oral de liberación prolongada.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La ficha corresponde a NAMENDA XR, cápsula oral de liberación prolongada.',
          ref: { f: 'dailymed-memantina', sec: '3 · Forma farmacéutica', cita: 'NAMENDA XR is available as' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Con la cápsula XR en el estudio de administraciones repetidas, el pico plasmático se alcanzó entre 9 y 12 horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Con la cápsula XR en el estudio de administraciones repetidas, el pico plasmático se alcanzó entre 9 y 12 horas.',
          ref: { f: 'dailymed-memantina', sec: '12 · Farmacología clínica', cita: 'peak concentrations occur around 9-12 hours' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'La unión a proteínas plasmáticas es del 45 %. Su volumen medio de distribución es de 9 a 11 L/kg.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es del 45 %. Su volumen medio de distribución es de 9 a 11 L/kg.',
          ref: { f: 'dailymed-memantina', sec: '12 · Farmacología clínica', cita: 'plasma protein binding is low (45%)' }
        }
      ],
      accion: {
        diana: 'Canal del receptor NMDA (mecanismo propuesto)',
        efecto: 'Se propone que bloquea de forma no competitiva el canal de receptores NMDA activados por glutamato, modulando así parte de la señal excitadora.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se propone que bloquea de forma no competitiva el canal de receptores NMDA activados por glutamato, modulando así parte de la señal excitadora.',
            ref: { f: 'dailymed-memantina', sec: '12 · Farmacología clínica', cita: 'low to moderate affinity uncompetitive' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Parte se metaboliza en el hígado. Las enzimas CYP hepáticas no tienen un papel significativo en su metabolismo.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Parte se metaboliza en el hígado. Las enzimas CYP hepáticas no tienen un papel significativo en su metabolismo.',
          ref: { f: 'dailymed-memantina', sec: '12 · Farmacología clínica', cita: 'Memantine undergoes partial hepatic metabolism' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Alrededor del 48 % se excreta intacto en la orina. La etiqueta también describe metabolitos polares de actividad antagonista mínima.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Alrededor del 48 % se excreta intacto en la orina. La etiqueta también describe metabolitos polares de actividad antagonista mínima.',
          ref: { f: 'dailymed-memantina', sec: '12 · Farmacología clínica', cita: 'excreted unchanged in urine' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '60–80',
      unidad: 'h',
      ref: { f: 'dailymed-memantina', sec: '12 · Farmacología clínica', cita: 'terminal elimination half-life of about 60-80 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-memantina', '1fa2b7bc-94e5-4566-a7c5-419f8fd393a7', 'NAMENDA XR (MEMANTINE HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE NAMENDA XR (MEMANTINE HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE', 'Namenda\nXR', '6', '2018-02-28', '2026-11-10'),
    rengPubchem(4054, 'memantine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
