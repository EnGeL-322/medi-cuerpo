import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'niraparib',
    nombre: 'Niraparib',
    clase: 'Inhibidor de la poli (ADP-ribosa) polimerasa (PARP)',
    sinonimos: [ 'niraparib tosylate', 'Zejula' ],
    formula: 'C19H20N4O',
    masaMolar: 320.4,
    smiles: 'C1C[C@H](CNC1)C2=CC=C(C=C2)N3C=C4C=CC=C(C4=N3)C(=O)N',
    inchikey: 'PCHKPVIQAHNQLW-CQSZACIVSA-N',
    cid: 24958200,
    iupac: '2-[4-[(3S)-piperidin-3-yl]phenyl]indazole-7-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'niraparib-oral',
      producto: 'ZEJULA · comprimido recubierto con película',
      titular: 'GLAXOSMITHKLINE LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg, 200 mg o 300 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Tosilato de niraparib monohidrato',
        ref: { f: 'dailymed-niraparib', sec: '11 · Descripción', cita: 'The chemical name for niraparib tosylate monohydrate is', codigo: '34089-3' }
      },
      excipientes: [
        'crospovidone, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'silicon dioxide',
        'water'
      ],
      usos: {
        t: 'Mantenimiento en cáncer epitelial de ovario, trompa o peritoneo primario avanzado con respuesta a quimioterapia con platino, según la etiqueta.',
        ref: {
          f: 'dailymed-niraparib',
          sec: '1 · Indicaciones',
          cita: 'for the maintenance treatment of adult patients with advanced epithelial ovarian, fallopian tube, or primary peritoneal cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-niraparib',
      advertencias: [
        {
          titulo: 'Síndrome mielodisplásico y leucemia mieloide aguda',
          texto: 'Han aparecido, algunos mortales; vigilar la toxicidad hematológica.',
          organos: [],
          ref: {
            f: 'dailymed-niraparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'MDS/AML occurred in patients exposed to ZEJULA, and some cases were fatal',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Supresión de la médula ósea',
          texto: 'Hacer hemograma semanal el primer mes, mensual los 11 siguientes y después periódico.',
          organos: [ 'medula-osea' ],
          ref: {
            f: 'dailymed-niraparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Bone Marrow Suppression: Test complete blood counts weekly for the first month',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión y efectos cardiovasculares',
          texto: 'Vigilar la presión arterial y la frecuencia cardíaca al menos cada semana los 2 primeros meses.',
          organos: [],
          ref: {
            f: 'dailymed-niraparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood pressure and heart rate at least weekly for the first 2 months',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más): náuseas, trombocitopenia, anemia, fatiga, estreñimiento, dolor musculoesquelético, dolor abdominal, vómitos, neutropenia y disminución del apetito, entre otras.',
          '34084-4',
          'Most common adverse reactions (incidence ≥10%) in patients who received ZEJULA were nausea, thrombocytopenia, anemia, fatigue, constipation, musculoskeletal pain, abdominal pain, vomiting, neutropenia'
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
    contiene: 'Comprimido recubierto con película: 100 mg, 200 mg o 300 mg por comprimido, según la etiqueta; el activo va como tosilato de niraparib monohidrato. Los excipientes no son el principio activo.',
    usos: 'Mantenimiento en cáncer epitelial de ovario, trompa o peritoneo primario avanzado con respuesta a quimioterapia con platino, según la etiqueta.',
    actua: 'Inhibe las enzimas PARP-1 y PARP-2, que intervienen en la reparación del ADN; aumenta los complejos PARP-ADN, con daño del ADN, apoptosis y muerte celular.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 73 % y el tmax se alcanza en 5 horas; una comida grasa aumenta poco la exposición. Tras 300 mg marcados, el 48 % se recuperó en la orina (11 % sin cambios) y el 39 % en las heces (19 % sin cambios).'
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
            f: 'dailymed-niraparib',
            sec: '11 · Descripción',
            cita: 'The film-coating consists of Opadry II Gray (100 mg), Opadry II Blue (200 mg), or Opadry II Green (300 mg)',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 73 % y el tmax se alcanza en 5 horas; una comida grasa aumenta poco la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 73 % y el tmax se alcanza en 5 horas; una comida grasa aumenta poco la exposición.',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of niraparib is approximately 73%. Time to maximum plasma concentration (T max ) is reached within 5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax subió un 11 % y el AUC un 28 %.',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Niraparib C max increased by 11% and AUC by 28%, following administration with a high-fat meal',
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
      ocurre: 'Se une en un 83 % a las proteínas del plasma humano; el volumen de distribución aparente medio es de 1 220 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 83 % a las proteínas del plasma humano; el volumen de distribución aparente medio es de 1 220 L.',
          ref: { f: 'dailymed-niraparib', sec: '12.3 · Farmacocinética', cita: 'Niraparib is 83% bound to human plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente medio de 1 220 L.',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Niraparib mean (±SD) apparent (oral) volume of distribution (Vd/F) is 1,220 (±1,114) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PARP-1 y PARP-2',
        efecto: 'Inhibe las enzimas PARP-1 y PARP-2, que intervienen en la reparación del ADN; aumenta los complejos PARP-ADN, con daño del ADN, apoptosis y muerte celular.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las enzimas PARP-1 y PARP-2, que intervienen en la reparación del ADN; aumenta los complejos PARP-ADN, con daño del ADN, apoptosis y muerte celular.',
            ref: {
              f: 'dailymed-niraparib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Niraparib is an inhibitor of PARP enzymes, including PARP-1 and PARP-2, that play a role in DNA repair',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las carboxilesterasas lo transforman en el metabolito inactivo principal M1, que después se glucuronida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las carboxilesterasas lo transforman en el metabolito inactivo principal M1, que después se glucuronida.',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Niraparib is metabolized by carboxylesterases to form a major inactive metabolite M1, which subsequently undergoes glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1',
          actividad: 'inactivo',
          nota: 'Metabolito principal inactivo, que luego se glucuronida.',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Niraparib is metabolized by carboxylesterases to form a major inactive metabolite M1',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 300 mg marcados, el 48 % se recuperó en la orina (11 % sin cambios) y el 39 % en las heces (19 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 300 mg marcados, el 48 % se recuperó en la orina (11 % sin cambios) y el 39 % en las heces (19 % sin cambios).',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: '48% of the dose was recovered in urine (11% unchanged) and 39% in feces (19% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de 50 horas y el aclaramiento total aparente de 15,9 L/h.',
          ref: {
            f: 'dailymed-niraparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Niraparib apparent (oral) total clearance (CL/F) is 15.9 (±3.8) L/h and mean half-life (t 1/2 ) is 50 (±15) hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '73 (aprox.)',
      unidad: '%',
      analito: 'niraparib',
      ref: {
        f: 'dailymed-niraparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of niraparib is approximately 73%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '≤ 5',
      unidad: 'h',
      analito: 'niraparib',
      ref: {
        f: 'dailymed-niraparib',
        sec: '12.3 · Farmacocinética',
        cita: 'Time to maximum plasma concentration (T max ) is reached within 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '83',
      unidad: '%',
      analito: 'niraparib',
      ref: { f: 'dailymed-niraparib', sec: '12.3 · Farmacocinética', cita: 'Niraparib is 83% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '1220',
      unidad: 'L',
      analito: 'niraparib',
      ref: {
        f: 'dailymed-niraparib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent (oral) volume of distribution (Vd/F) is 1,220 (±1,114) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '50',
      unidad: 'h',
      analito: 'niraparib',
      ref: { f: 'dailymed-niraparib', sec: '12.3 · Farmacocinética', cita: 'mean half-life (t 1/2 ) is 50 (±15) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente',
      valor: '15,9',
      unidad: 'L/h',
      analito: 'niraparib',
      ref: {
        f: 'dailymed-niraparib',
        sec: '12.3 · Farmacocinética',
        cita: 'Niraparib apparent (oral) total clearance (CL/F) is 15.9 (±3.8) L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '48',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 300 mg',
      ref: { f: 'dailymed-niraparib', sec: '12.3 · Farmacocinética', cita: '48% of the dose was recovered in urine (11% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-niraparib', 'b7f675e2-159c-490c-b6f4-3f16d9492b7d', 'ZEJULA (NIRAPARIB) TABLET, FILM COATED', 'ZEJULA', '10', '2026-08-06', '2026-11-19'),
    rengPubchem(24958200, 'niraparib tosylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
