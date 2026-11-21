import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tedizolid',
    nombre: 'Tedizolid',
    clase: 'Antibacteriano oxazolidinona (profármaco fosfato)',
    sinonimos: [ 'tedizolid', 'tedizolid phosphate', 'Sivextro' ],
    formula: 'C17H15FN6O3',
    masaMolar: 370.3,
    smiles: 'CN1N=C(N=N1)C2=NC=C(C=C2)C3=C(C=C(C=C3)N4C[C@@H](OC4=O)CO)F',
    inchikey: 'XFALPSLJIHVRKE-GFCCVEGCSA-N',
    cid: 11234049,
    iupac: '(5R)-3-[3-fluoro-4-[6-(2-methyltetrazol-5-yl)-3-pyridinyl]phenyl]-5-(hydroxymethyl)-1,3-oxazolidin-2-one',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'tedizolid-oral',
      producto: 'SIVEXTRO · comprimido recubierto con película',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Fosfato de tedizolid', ref: { f: 'dailymed-tedizolid', sec: '11 · Descripción', cita: 'tedizolid phosphate', codigo: '34089-3' } },
      excipientes: [
        'microcrystalline cellulose',
        'mannitol',
        'crospovidone (15 mpa.s at 5%)',
        'povidone, unspecified',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de infecciones bacterianas agudas de la piel y de sus estructuras causadas por microorganismos sensibles, en adultos y niños.',
        ref: {
          f: 'dailymed-tedizolid',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of acute bacterial skin and skin structure infections (ABSSSI) caused by designated susceptible microorganisms in adult and pediatric patients',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tedizolid',
      advertencias: [
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'Con agentes serotoninérgicos hay que vigilar los signos del síndrome serotoninérgico y valorar suspender alguno de los fármacos si aparecen.',
          organos: [],
          ref: {
            f: 'dailymed-tedizolid',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients taking SIVEXTRO concomitantly with serotonergic agents for signs of serotonin syndrome',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pacientes con neutropenia',
          texto: 'Su seguridad y eficacia no se han evaluado bien con menos de 1000 neutrófilos/mm³; considerar alternativas.',
          organos: [],
          ref: {
            f: 'dailymed-tedizolid',
            sec: '5 · Advertencias y precauciones',
            cita: 'The safety and efficacy of SIVEXTRO in patients with neutropenia (neutrophil counts <1000 cells/mm 3 ) have not been adequately evaluated',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea asociada a Clostridioides difficile',
          texto: 'Si aparece diarrea hay que evaluarla.',
          organos: [],
          ref: {
            f: 'dailymed-tedizolid',
            sec: '5 · Advertencias y precauciones',
            cita: 'Clostridioides difficile -Associated Diarrhea: Evaluate if diarrhea occurs',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos (2 % o más): náuseas, cefalea, diarrea, reacciones relacionadas con la infusión o la inyección, vómitos y mareo.',
          '34084-4',
          'The most common adverse reactions (≥2%) in adult patients are nausea, headache, diarrhea, infusion- or injection-related adverse reactions, vomiting, and dizziness'
        ],
        [
          'En pacientes de 12 a menos de 18 años, las más frecuentes (más del 2 %) fueron flebitis y aumento de las transaminasas hepáticas.',
          '34084-4',
          'The most common adverse reactions (>2%) in pediatric patients (12 years to less than 18 years of age) are phlebitis and increased hepatic transaminases'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg por comprimido, según la etiqueta; el activo va como fosfato de tedizolid. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de infecciones bacterianas agudas de la piel y de sus estructuras causadas por microorganismos sensibles, en adultos y niños.',
    actua: 'Se une a la subunidad 50S del ribosoma bacteriano e inhibe la síntesis de proteínas.',
    recorrido: 'Las concentraciones máximas de tedizolid se alcanzan en unas 3 horas tras la toma del comprimido en ayunas. Tras una dosis oral marcada en ayunas, la mayor parte de la eliminación fue por el hígado: el 82 % de la radiactividad se recuperó en las heces y el 18 % en la orina, sobre todo como conjugado sulfato inactivo.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de fosfato de tedizolid, un profármaco que las fosfatasas convierten en tedizolid.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de fosfato de tedizolid, un profármaco que las fosfatasas convierten en tedizolid.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '11 · Descripción',
            cita: 'SIVEXTRO (tedizolid phosphate), a phosphate prodrug, is converted to tedizolid in the presence of phosphatases',
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
      ocurre: 'Las concentraciones máximas de tedizolid se alcanzan en unas 3 horas tras la toma del comprimido en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Las concentraciones máximas de tedizolid se alcanzan en unas 3 horas tras la toma del comprimido en ayunas.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma tedizolid concentrations are achieved within approximately 3 hours following oral administration of the oral tablet under fasting conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta del comprimido es de alrededor del 91 %.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of the oral tablet is approximately 91%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La exposición total no cambia entre el ayuno y una comida rica en grasas y calorías.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'total systemic exposure (AUC 0-∞ ) is unchanged between fasted and fed (high-fat, high-calorie) conditions',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejido-adiposo', 'musculos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Penetra en el líquido intersticial del tejido adiposo y del músculo esquelético, con una exposición parecida a la del fármaco libre en el plasma; se une en un 70 %-90 % a las proteínas del plasma humano.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Penetra en el líquido intersticial del tejido adiposo y del músculo esquelético, con una exposición parecida a la del fármaco libre en el plasma; se une en un 70 %-90 % a las proteínas del plasma humano.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'Tedizolid penetrates into the interstitial space fluid of adipose and skeletal muscle tissue with exposure similar to free drug exposure in plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Unión a las proteínas del plasma humano de alrededor del 70 % al 90 %.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of tedizolid to human plasma proteins is approximately 70 to 90%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis intravenosa única de 200 mg, el volumen de distribución medio en estado estacionario fue de 67 a 80 L, alrededor del doble del agua corporal total.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean steady state volume of distribution of tedizolid in healthy adults following a single intravenous dose of tedizolid phosphate 200 mg ranged from 67 to 80 L',
            codigo: '43682-4'
          },
          poblacion: 'adultos sanos',
          condiciones: 'dosis intravenosa única de 200 mg'
        }
      ],
      accion: {
        diana: 'Subunidad 50S del ribosoma bacteriano',
        efecto: 'Se une a la subunidad 50S del ribosoma bacteriano e inhibe la síntesis de proteínas.',
        lugar: [],
        datos: [
          {
            t: 'Se une a la subunidad 50S del ribosoma bacteriano e inhibe la síntesis de proteínas.',
            ref: {
              f: 'dailymed-tedizolid',
              sec: '12.4 · Microbiología',
              cita: 'The antibacterial activity of tedizolid is mediated by binding to the 50S subunit of the bacterial ribosome resulting in inhibition of protein synthesis',
              codigo: '49489-8'
            }
          },
          {
            t: 'En estudios in vitro de tiempo de muerte es bacteriostático frente a enterococos, estafilococos y estreptococos.',
            ref: {
              f: 'dailymed-tedizolid',
              sec: '12.4 · Microbiología',
              cita: 'tedizolid is bacteriostatic against enterococci, staphylococci, and streptococci',
              codigo: '49489-8'
            },
            condiciones: 'in vitro'
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El fosfato de tedizolid es un profármaco que las fosfatasas convierten en tedizolid, la forma activa, tras la toma oral o intravenosa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El fosfato de tedizolid es un profármaco que las fosfatasas convierten en tedizolid, la forma activa, tras la toma oral o intravenosa.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'Tedizolid phosphate is a prodrug that is converted by phosphatases to tedizolid, the microbiologically active moiety, following oral and intravenous administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Aparte del tedizolid, que supone alrededor del 95 % del AUC radiactivo del plasma, no hay otros metabolitos circulantes significativos.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'Other than tedizolid, which accounts for approximately 95% of the total radiocarbon AUC in plasma, there are no other significant circulating metabolites in humans',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se degradó en microsomas de hígado humano, por lo que es poco probable que sea sustrato de las CYP450 hepáticas.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'There was no degradation of tedizolid in human liver microsomes indicating tedizolid is unlikely to be a substrate for hepatic CYP450 enzymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Conjugado sulfato del tedizolid',
          actividad: 'inactivo',
          nota: 'Forma principal en la que se excreta; no circula y no tiene actividad antimicrobiana.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'primarily as a non-circulating and microbiologically inactive sulfate conjugate',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado', 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada en ayunas, la mayor parte de la eliminación fue por el hígado: el 82 % de la radiactividad se recuperó en las heces y el 18 % en la orina, sobre todo como conjugado sulfato inactivo.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada en ayunas, la mayor parte de la eliminación fue por el hígado: el 82 % de la radiactividad se recuperó en las heces y el 18 % en la orina, sobre todo como conjugado sulfato inactivo.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'the majority of elimination occurred via the liver, with 82% of the radioactive dose recovered in feces and 18% in urine, primarily as a non-circulating and microbiologically inactive sulfate conjugate',
            codigo: '43682-4'
          }
        },
        {
          t: 'Menos del 3 % de la dosis se excreta como tedizolid inalterado en las heces y la orina.',
          ref: {
            f: 'dailymed-tedizolid',
            sec: '12.3 · Farmacocinética',
            cita: 'Less than 3% of the tedizolid phosphate-administered dose is excreted in feces and urine as unchanged tedizolid',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida del tedizolid es de unas 12 horas.',
          ref: { f: 'dailymed-tedizolid', sec: '12.3 · Farmacocinética', cita: 'tedizolid half-life of approximately 12 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del comprimido',
      valor: '91 (aprox.)',
      unidad: '%',
      analito: 'tedizolid',
      ref: {
        f: 'dailymed-tedizolid',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of the oral tablet is approximately 91%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en ayunas',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'tedizolid',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-tedizolid',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma tedizolid concentrations are achieved within approximately 3 hours following oral administration of the oral tablet under fasting conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '70-90 (aprox.)',
      unidad: '%',
      analito: 'tedizolid',
      ref: {
        f: 'dailymed-tedizolid',
        sec: '12.3 · Farmacocinética',
        cita: 'Protein binding of tedizolid to human plasma proteins is approximately 70 to 90%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio en estado estacionario',
      valor: '67-80',
      unidad: 'L',
      analito: 'tedizolid',
      poblacion: 'adultos sanos',
      condiciones: 'dosis intravenosa única de 200 mg',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-tedizolid',
        sec: '12.3 · Farmacocinética',
        cita: 'ranged from 67 to 80 L (approximately twice total body water)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'tedizolid',
      ref: { f: 'dailymed-tedizolid', sec: '12.3 · Farmacocinética', cita: 'tedizolid half-life of approximately 12 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '82',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      condiciones: 'dosis oral única marcada en ayunas',
      ref: {
        f: 'dailymed-tedizolid',
        sec: '12.3 · Farmacocinética',
        cita: '82% of the radioactive dose recovered in feces and 18% in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tedizolid', '75672079-589f-451a-bdbf-eaebcfcc80a9', 'SIVEXTRO (TEDIZOLID PHOSPHATE) TABLET, FILM COATED SIVEXTRO (TEDIZOLID PHOSPHATE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION', 'SIVEXTRO', '34', '2026-03-16', '2026-11-18'),
    rengPubchem(11234049, 'tedizolid', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
