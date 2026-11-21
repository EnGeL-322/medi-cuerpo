import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'istradefilina',
    nombre: 'Istradefilina',
    clase: 'Antagonista del receptor de adenosina A2A',
    sinonimos: [ 'istradefylline', 'Nourianz' ],
    formula: 'C20H24N4O4',
    masaMolar: 384.4,
    smiles: 'CCN1C2=C(C(=O)N(C1=O)CC)N(C(=N2)/C=C/C3=CC(=C(C=C3)OC)OC)C',
    inchikey: 'IQVRBWUUXZMOPW-PKNBQFBNSA-N',
    cid: 5311037,
    iupac: '8-[(E)-2-(3,4-dimethoxyphenyl)ethenyl]-1,3-diethyl-7-methylpurine-2,6-dione',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'istradefilina-oral',
      producto: 'NOURIANZ · comprimido recubierto con película',
      titular: 'KYOWA KIRIN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg o 40 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'microcrystalline cellulose', 'crospovidone', 'polyvinyl alcohol, unspecified', 'magnesium stearate', 'carnauba wax' ],
      usos: {
        t: 'Tratamiento complementario de levodopa/carbidopa en adultos con enfermedad de Parkinson que presentan episodios «off».',
        ref: {
          f: 'dailymed-istradefilina',
          sec: '1 · Indicaciones',
          cita: `NOURIANZ is indicated as adjunctive treatment to levodopa/carbidopa in adult patients with Parkinson's disease (PD) experiencing "off" episodes`,
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-istradefilina',
      advertencias: [
        {
          titulo: 'Discinesia',
          texto: 'Junto con levodopa puede causar o empeorar la discinesia (15 % con 20 mg, 17 % con 40 mg y 8 % con placebo).',
          organos: [],
          ref: {
            f: 'dailymed-istradefilina',
            sec: '5 · Advertencias y precauciones',
            cita: 'NOURIANZ in combination with levodopa may cause dyskinesia or exacerbate pre-existing dyskinesia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alucinaciones y conducta psicótica',
          texto: 'No debe usarse en pacientes con un trastorno psicótico mayor; valorar reducir o suspender si aparecen.',
          organos: [],
          ref: {
            f: 'dailymed-istradefilina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Because of the potential risk of exacerbating psychosis, patients with a major psychotic disorder should not be treated with NOURIANZ',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Trastornos del control de impulsos',
          texto: 'Valorar reducir la dosis o suspender si aparecen.',
          organos: [],
          ref: {
            f: 'dailymed-istradefilina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Impulse Control / Compulsive Behaviors: Consider dosage reduction or stopping NOURIANZ if occurs',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos 5 % y más que con placebo): discinesia, mareo, estreñimiento, náuseas, alucinaciones e insomnio.',
          '34084-4',
          'The most common adverse reactions (at least 5% and more frequent than placebo) were dyskinesia, dizziness, constipation, nausea, hallucination, and insomnia'
        ],
        [
          'Entre las reacciones clínicamente significativas figuran la discinesia, las alucinaciones o conducta psicótica y los trastornos del control de impulsos.',
          '34084-4',
          'Dyskinesia [see Warnings and Precautions (5.1) ] Hallucinations / Psychotic Behavior'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg o 40 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de levodopa/carbidopa en adultos con enfermedad de Parkinson que presentan episodios «off».',
    actua: 'Su mecanismo exacto en la enfermedad de Parkinson se desconoce; en estudios in vitro y en animales es un antagonista del receptor de adenosina A2A.',
    recorrido: 'La mediana del tiempo hasta la concentración máxima fue de unas 4 horas en ayunas. Tras una dosis oral marcada de 40 mg, alrededor del 48 % se eliminó en las heces y el 39 % en la orina, sin istradefilina inalterada en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '3 · Formas y concentraciones',
            cita: 'Peach-colored, pillow-shaped, film-coated tablets',
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
      ocurre: 'La mediana del tiempo hasta la concentración máxima fue de unas 4 horas en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta la concentración máxima fue de unas 4 horas en ayunas.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to reach the maximum concentration (T max ) for istradefylline was about 4 hours under fasted dosing conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, el AUC aumentó 1,25 veces y la Cmax 1,64 veces, y el Tmax se acortó 1 hora; no se esperan diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'Istradefylline maximum plasma concentrations (C max ) increased by 1.64-fold and T max was shortened by 1 hour when NOURIANZ was administered with a high-fat meal',
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
      ocurre: 'La unión a las proteínas del plasma es de alrededor del 98 % y el volumen de distribución aparente de unos 557 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es de alrededor del 98 % y el volumen de distribución aparente de unos 557 litros.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of istradefylline was approximately 98%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 557 litros.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (V d /F) of istradefylline is approximately 557 liters',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de adenosina A2A',
        efecto: 'Su mecanismo exacto en la enfermedad de Parkinson se desconoce; en estudios in vitro y en animales es un antagonista del receptor de adenosina A2A.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo exacto en la enfermedad de Parkinson se desconoce; en estudios in vitro y en animales es un antagonista del receptor de adenosina A2A.',
            ref: {
              f: 'dailymed-istradefilina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In in vitro studies and in in vivo animal studies, istradefylline was demonstrated to be an adenosine A 2A receptor antagonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En humanos se elimina exclusivamente por metabolismo; in vitro se metaboliza sobre todo por CYP1A1 y CYP3A4, con contribución menor de otras CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En humanos se elimina exclusivamente por metabolismo; in vitro se metaboliza sobre todo por CYP1A1 y CYP3A4, con contribución menor de otras CYP.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies indicate that istradefylline is primarily metabolized via CYP1A1 and CYP3A4, with minor contribution from CYP1A2, 2B6, 2C8, CYP2C9, CYP2C18, and 2D6',
            codigo: '43682-4'
          }
        },
        {
          t: 'En humanos se elimina exclusivamente por metabolismo.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'In humans, istradefylline is exclusively eliminated via metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Seis metabolitos plasmáticos',
          actividad: 'desconocida',
          nota: 'Cada uno supone menos del 10 % de la exposición al fármaco; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'Six metabolites have been identified in human plasma. These metabolites each account for less than 10% of the exposure of the parent drug',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada de 40 mg, alrededor del 48 % se eliminó en las heces y el 39 % en la orina, sin istradefilina inalterada en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada de 40 mg, alrededor del 48 % se eliminó en las heces y el 39 % en la orina, sin istradefilina inalterada en la orina.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 48% of a 40-mg oral dose of 14 C-istradefylline was eliminated in feces, and 39% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media en estado estacionario es de unas 83 horas.',
          ref: {
            f: 'dailymed-istradefilina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean terminal half-life (t 1/2 ) for istradefylline at steady-state is approximately 83 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'istradefilina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-istradefilina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to reach the maximum concentration (T max ) for istradefylline was about 4 hours under fasted dosing conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'istradefilina',
      ref: {
        f: 'dailymed-istradefilina',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of istradefylline was approximately 98%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '557 (aprox.)',
      unidad: 'L',
      analito: 'istradefilina',
      ref: {
        f: 'dailymed-istradefilina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (V d /F) of istradefylline is approximately 557 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '4,6 (aprox.)',
      unidad: 'L/h',
      analito: 'istradefilina',
      ref: {
        f: 'dailymed-istradefilina',
        sec: '12.3 · Farmacocinética',
        cita: 'The total clearance of istradefylline is approximately 4.6 L/hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '83 (aprox.)',
      unidad: 'h',
      analito: 'istradefilina',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-istradefilina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal half-life (t 1/2 ) for istradefylline at steady-state is approximately 83 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis eliminada en las heces',
      valor: '48 (aprox.)',
      unidad: '% de la dosis',
      analito: 'istradefilina y metabolitos',
      condiciones: 'dosis oral marcada de 40 mg',
      ref: {
        f: 'dailymed-istradefilina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 48% of a 40-mg oral dose of 14 C-istradefylline was eliminated in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-istradefilina', 'a7d008cb-b273-4049-a5d2-9c6902910d58', 'NOURIANZ (ISTRADEFYLLINE) TABLET, FILM COATED', 'NOURIANZ', '6', '2025-05-23', '2026-11-19'),
    rengPubchem(5311037, 'istradefylline', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
