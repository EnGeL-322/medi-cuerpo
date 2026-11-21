import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sorafenib',
    nombre: 'Sorafenib',
    clase: 'Inhibidor de múltiples cinasas',
    sinonimos: [ 'sorafenib', 'Nexavar' ],
    formula: 'C21H16ClF3N4O3',
    masaMolar: 464.8,
    smiles: 'CNC(=O)C1=NC=CC(=C1)OC2=CC=C(C=C2)NC(=O)NC3=CC(=C(C=C3)Cl)C(F)(F)F',
    inchikey: 'MLDQJTXFUGDVEO-UHFFFAOYSA-N',
    cid: 216239,
    iupac: '4-[4-[[4-chloro-3-(trifluoromethyl)phenyl]carbamoylamino]phenoxy]-N-methylpyridine-2-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'sorafenib-oral',
      producto: 'Nexavar · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'microcrystalline cellulose',
        'hypromellose, unspecified',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Carcinoma hepatocelular irresecable, carcinoma de células renales avanzado y carcinoma diferenciado de tiroides resistente al yodo radiactivo.',
        ref: {
          f: 'dailymed-sorafenib',
          sec: '1 · Indicaciones',
          cita: 'NEXAVAR ® is indicated for the treatment of patients with unresectable hepatocellular carcinoma (HCC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sorafenib',
      advertencias: [
        {
          titulo: 'Eventos cardiovasculares',
          texto: 'En el estudio SHARP la isquemia o infarto cardiaco fue del 2,7 % con sorafenib frente al 1,3 % con placebo.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-sorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'the incidence of cardiac ischemia/infarction was 2.7% in NEXAVAR-treated patients compared with 1.3% in those receiving placebo',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragia',
          texto: 'Puede aumentar el riesgo de sangrado.',
          organos: [ 'vasos', 'sangre' ],
          ref: {
            f: 'dailymed-sorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'An increased risk of bleeding may occur following NEXAVAR administration',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad dermatológica',
          texto: 'La reacción cutánea mano-pie y la erupción son las reacciones adversas más frecuentes.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-sorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hand-foot skin reaction and rash represent the most common adverse reactions attributed to NEXAVAR',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 20 %): diarrea, cansancio, infección, alopecia, reacción cutánea mano-pie, erupción, pérdida de peso, disminución del apetito y náuseas, entre otras.',
          '34084-4',
          'most common adverse reactions (≥20%) are diarrhea, fatigue, infection, alopecia, hand-foot skin reaction, rash, weight loss, decreased appetite, nausea'
        ],
        [
          'También dolor gastrointestinal y abdominal, hipertensión y hemorragia.',
          '34084-4',
          'gastrointestinal and abdominal pains, hypertension, and hemorrhage'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Carcinoma hepatocelular irresecable, carcinoma de células renales avanzado y carcinoma diferenciado de tiroides resistente al yodo radiactivo.',
    actua: 'Inhibe varias cinasas dentro de la célula (c-CRAF, BRAF) y de la superficie celular (KIT, FLT-3, RET, VEGFR, PDGFR-β) implicadas en la señalización tumoral, la angiogénesis y la apoptosis.',
    recorrido: 'La biodisponibilidad relativa del comprimido frente a una solución oral fue del 38-49 % y el máximo llega a las 3 horas. Una comida rica en grasa la redujo un 29 %. Tras una solución marcada de 100 mg se recuperó el 96 % de la dosis en 14 días: el 77 % por las heces (51 % como sorafenib sin cambios) y el 19 % por la orina como metabolitos glucuronidados. La semivida de eliminación es de unas 25-48 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido rojo, redondo, biconvexo y recubierto con película, de 200 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido rojo, redondo, biconvexo y recubierto con película, de 200 mg.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '3 · Formas y concentraciones',
            cita: '200 mg sorafenib, round, biconvex, red film-coated tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad relativa del comprimido frente a una solución oral fue del 38-49 % y el máximo llega a las 3 horas. Una comida rica en grasa la redujo un 29 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad relativa del comprimido frente a una solución oral fue del 38-49 % y el máximo llega a las 3 horas. Una comida rica en grasa la redujo un 29 %.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean relative bioavailability was 38-49% when compared to an oral solution',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comida moderadamente grasa la biodisponibilidad fue parecida a la de ayunas; con comida muy rica en grasa bajó un 29 %.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'With a high-fat meal (50% fat; 900 calories), bioavailability was reduced by 29% compared to that in the fasted state',
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
      ocurre: 'In vitro, la unión a proteínas del plasma humano fue del 99,5 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, la unión a proteínas del plasma humano fue del 99,5 %.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro binding of sorafenib to human plasma proteins was 99.5%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasas RAF, VEGFR, PDGFR, KIT, FLT-3 y RET',
        efecto: 'Inhibe varias cinasas dentro de la célula (c-CRAF, BRAF) y de la superficie celular (KIT, FLT-3, RET, VEGFR, PDGFR-β) implicadas en la señalización tumoral, la angiogénesis y la apoptosis.',
        lugar: [ 'higado', 'rinones', 'tiroides' ],
        datos: [
          {
            t: 'Inhibe varias cinasas dentro de la célula (c-CRAF, BRAF) y de la superficie celular (KIT, FLT-3, RET, VEGFR, PDGFR-β) implicadas en la señalización tumoral, la angiogénesis y la apoptosis.',
            ref: {
              f: 'dailymed-sorafenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sorafenib is a kinase inhibitor that decreases tumor cell proliferation in vitro',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre metabolismo oxidativo por el CYP3A4 hepático y glucuronidación por la UGT1A9; el metabolito circulante principal es el N-óxido de piridina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre metabolismo oxidativo por el CYP3A4 hepático y glucuronidación por la UGT1A9; el metabolito circulante principal es el N-óxido de piridina.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sorafenib undergoes oxidative metabolism by hepatic CYP3A4, as well as glucuronidation by UGT1A9',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-óxido de piridina',
          actividad: 'activo',
          nota: 'Del 9 al 16 % de los analitos circulantes en el estado estacionario.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The main circulating metabolite of sorafenib, the pyridine N-oxide that comprises approximately 9-16% of circulating analytes at steady-state, showed in vitro potency similar to that of sorafenib',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una solución marcada de 100 mg se recuperó el 96 % de la dosis en 14 días: el 77 % por las heces (51 % como sorafenib sin cambios) y el 19 % por la orina como metabolitos glucuronidados. La semivida de eliminación es de unas 25-48 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una solución marcada de 100 mg se recuperó el 96 % de la dosis en 14 días: el 77 % por las heces (51 % como sorafenib sin cambios) y el 19 % por la orina como metabolitos glucuronidados. La semivida de eliminación es de unas 25-48 horas.',
          ref: {
            f: 'dailymed-sorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'with 77% of the dose excreted in feces and 19% of the dose excreted in urine as glucuronidated metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a solución oral',
      valor: '38-49',
      unidad: '%',
      analito: 'sorafenib',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean relative bioavailability was 38-49% when compared to an oral solution',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'sorafenib',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'sorafenib reached peak plasma levels in approximately 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la biodisponibilidad con comida muy rica en grasa',
      valor: '29',
      unidad: '%',
      analito: 'sorafenib',
      condiciones: 'comida con un 50 % de grasa (900 calorías)',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'bioavailability was reduced by 29% compared to that in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma (in vitro)',
      valor: '99,5',
      unidad: '%',
      analito: 'sorafenib',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro binding of sorafenib to human plasma proteins was 99.5%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media de eliminación',
      valor: '25-48 (aprox.)',
      unidad: 'h',
      analito: 'sorafenib',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-life of sorafenib was approximately 25 to 48 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '77',
      unidad: '% de la dosis',
      analito: 'sorafenib y metabolitos',
      condiciones: 'solución oral marcada de 100 mg',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'with 77% of the dose excreted in feces and 19% of the dose excreted in urine as glucuronidated metabolites',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '19',
      unidad: '% de la dosis',
      analito: 'sorafenib y metabolitos',
      condiciones: 'solución oral marcada de 100 mg',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-sorafenib',
        sec: '12.3 · Farmacocinética',
        cita: '19% of the dose excreted in urine as glucuronidated metabolites',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sorafenib', 'b50667e4-5ebc-4968-a646-d605058dbef0', 'NEXAVAR (SORAFENIB) TABLET, FILM COATED', 'Nexavar', '40', '2024-11-18', '2026-11-13'),
    rengPubchem(216239, 'sorafenib', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
