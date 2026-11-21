import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'elafibranor',
    nombre: 'Elafibranor',
    clase: 'Agonista de los receptores activados por proliferadores de peroxisomas (PPAR)',
    sinonimos: [ 'elafibranor', 'Iqirvo' ],
    formula: 'C22H24O4S',
    masaMolar: 384.5,
    smiles: 'CC1=CC(=CC(=C1OC(C)(C)C(=O)O)C)/C=C/C(=O)C2=CC=C(C=C2)SC',
    inchikey: 'AFLFKFHDSCQHOL-IZZDOVSWSA-N',
    cid: 9864881,
    iupac: '2-[2,6-dimethyl-4-[(E)-3-(4-methylsulfanylphenyl)-3-oxoprop-1-enyl]phenoxy]-2-methylpropanoic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'elafibranor-oral',
      producto: 'IQIRVO · comprimido recubierto con película',
      titular: 'IPSEN BIOPHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '80 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'povidone, unspecified',
        'croscarmellose sodium',
        'magnesium stearate',
        'silicon dioxide',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de la colangitis biliar primaria junto con ácido ursodesoxicólico cuando la respuesta es insuficiente, o en monoterapia si no se tolera.',
        ref: {
          f: 'dailymed-elafibranor',
          sec: '1 · Indicaciones',
          cita: 'IQIRVO is indicated for the treatment of primary biliary cholangitis (PBC) in combination with ursodeoxycholic acid (UDCA) in adults who have had an inadequate response to UDCA',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-elafibranor',
      advertencias: [
        {
          titulo: 'Mialgia, miopatía y rabdomiólisis',
          texto: 'Valorar el dolor muscular y la miopatía antes de empezar; interrumpir si aparece o empeora una lesión o un dolor muscular.',
          organos: [ 'musculos' ],
          ref: {
            f: 'dailymed-elafibranor',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interrupt IQIRVO if there is new onset or worsening of muscle injury, or muscle pain',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fracturas',
          texto: 'Debe tenerse en cuenta el riesgo de fractura y vigilar la salud ósea.',
          organos: [ 'huesos' ],
          ref: {
            f: 'dailymed-elafibranor',
            sec: '5 · Advertencias y precauciones',
            cita: 'Apply current standards of care for assessing and maintaining bone health',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Efectos sobre el desarrollo fetal y neonatal',
          texto: 'Puede causar daño fetal; descartar el embarazo antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-elafibranor',
            sec: '5 · Advertencias y precauciones',
            cita: 'May cause fetal harm. Verify that a female of reproductive potential is not pregnant prior to initiating IQIRVO',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y más que con placebo): aumento de peso, diarrea, dolor abdominal, náuseas, vómitos, artralgia, estreñimiento, lesión muscular, fractura, reflujo, boca seca, pérdida de peso y exantema.',
          '34084-4',
          'Most common adverse reactions with IQIRVO (reported in ≥ 5% and higher compared to placebo) are weight gain, diarrhea, abdominal pain, nausea, vomiting, arthralgia, constipation, muscle injury, fracture'
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
    contiene: 'Comprimido recubierto con película: 80 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la colangitis biliar primaria junto con ácido ursodesoxicólico cuando la respuesta es insuficiente, o en monoterapia si no se tolera.',
    actua: 'El elafibranor y su metabolito activo GFT1007 activan in vitro PPAR-alfa, PPAR-gamma y PPAR-delta; una actividad posiblemente relevante es la inhibición de la síntesis de ácidos biliares.',
    recorrido: 'La mediana del tmax del elafibranor y del GFT1007 fue de 1,25 horas; con alimentos bajaron la Cmax y el AUC, sin relevancia clínica. Tras 120 mg marcados, alrededor del 77,1 % de la dosis se recuperó en las heces, sobre todo como elafibranor, y el 19,3 % en la orina, sobre todo como GFT3351.'
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
            f: 'dailymed-elafibranor',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 80 mg, round, orange, film-coated tablets',
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
      ocurre: 'La mediana del tmax del elafibranor y del GFT1007 fue de 1,25 horas; con alimentos bajaron la Cmax y el AUC, sin relevancia clínica.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax del elafibranor y del GFT1007 fue de 1,25 horas; con alimentos bajaron la Cmax y el AUC, sin relevancia clínica.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'median time to peak plasma concentrations (T max ) of elafibranor and GFT1007 was 1.25 hours (range: 0.5-2 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos la Cmax media bajó un 50 % y el AUC un 15 %; la diferencia no fue clínicamente relevante.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'Under fed condition, mean C max and AUC of elafibranor decreased by 50% and 15% respectively',
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
      ocurre: 'El elafibranor y el GFT1007 se unen en un 99,7 % a las proteínas del plasma, sobre todo a la albúmina; el volumen de distribución aparente es de 4 731 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El elafibranor y el GFT1007 se unen en un 99,7 % a las proteínas del plasma, sobre todo a la albúmina; el volumen de distribución aparente es de 4 731 L.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of both elafibranor and GFT1007 was approximately 99.7% (mainly to serum albumin)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio de 4 731 L en sujetos sanos.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution (Vd/F) of elafibranor in healthy subjects was 4731 L',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'PPAR-alfa, PPAR-gamma y PPAR-delta',
        efecto: 'El elafibranor y su metabolito activo GFT1007 activan in vitro PPAR-alfa, PPAR-gamma y PPAR-delta; una actividad posiblemente relevante es la inhibición de la síntesis de ácidos biliares.',
        lugar: [],
        datos: [
          {
            t: 'El elafibranor y su metabolito activo GFT1007 activan in vitro PPAR-alfa, PPAR-gamma y PPAR-delta; una actividad posiblemente relevante es la inhibición de la síntesis de ácidos biliares.',
            ref: {
              f: 'dailymed-elafibranor',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Elafibranor and its main active metabolite GFT1007 are peroxisome proliferator-activated receptor (PPAR) agonists, both of which activate PPAR-alpha, PPAR-gamma, and PPAR-delta in vitro',
              codigo: '43679-0'
            }
          },
          {
            t: 'No se conoce bien cómo ejerce su efecto en la colangitis biliar primaria.',
            ref: {
              f: 'dailymed-elafibranor',
              sec: '12.1 · Mecanismo de acción',
              cita: 'the mechanism by which elafibranor exerts its therapeutic effects in patients with PBC is not well understood',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente a su metabolito activo principal GFT1007 mediante la enzima citosólica PTGR1, y también por la CYP2J2 y varias UGT.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente a su metabolito activo principal GFT1007 mediante la enzima citosólica PTGR1, y también por la CYP2J2 y varias UGT.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'Elafibranor is extensively metabolized to form a major active metabolite, GFT1007',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'GFT1007',
          actividad: 'activo',
          nota: 'Metabolito activo principal; su exposición es 3,2 veces mayor que la del elafibranor.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12 · Farmacología clínica',
            cita: 'Elafibranor and its main active metabolite GFT1007 are peroxisome proliferator-activated receptor (PPAR) agonists',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'GFT3351 (glucurónido)',
          actividad: 'inactivo',
          nota: 'Metabolito principal inactivo, conjugado acilglucurónido.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'Additional major inactive metabolite, an acyl glucuronide conjugate GFT3351',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 120 mg marcados, alrededor del 77,1 % de la dosis se recuperó en las heces, sobre todo como elafibranor, y el 19,3 % en la orina, sobre todo como GFT3351.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 120 mg marcados, alrededor del 77,1 % de la dosis se recuperó en las heces, sobre todo como elafibranor, y el 19,3 % en la orina, sobre todo como GFT3351.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 77.1% of the dose was recovered in feces, primarily as elafibranor (56.7% of the administered dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 19,3 % se recuperó en la orina, sobre todo como el glucurónido GFT3351.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 19.3% was recovered in urine, primarily as glucuronide conjugate GFT3351',
            codigo: '43682-4'
          },
          poblacion: 'orina'
        },
        {
          t: 'La mediana de la semivida fue de 70,2 horas para el elafibranor y de 15,4 horas para el GFT1007.',
          ref: {
            f: 'dailymed-elafibranor',
            sec: '12.3 · Farmacocinética',
            cita: 'median elimination half-life was 70.2 hours (range 37.1 to 92.2 hours) for elafibranor',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '1,25',
      unidad: 'h',
      analito: 'elafibranor y GFT1007',
      poblacion: 'pacientes con CBP',
      ref: {
        f: 'dailymed-elafibranor',
        sec: '12.3 · Farmacocinética',
        cita: 'median time to peak plasma concentrations (T max ) of elafibranor and GFT1007 was 1.25 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,7 (aprox.)',
      unidad: '%',
      analito: 'elafibranor y GFT1007',
      ref: {
        f: 'dailymed-elafibranor',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of both elafibranor and GFT1007 was approximately 99.7%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '4731',
      unidad: 'L',
      analito: 'elafibranor',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-elafibranor',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution (Vd/F) of elafibranor in healthy subjects was 4731 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Mediana de la semivida de eliminación',
      valor: '70,2',
      unidad: 'h',
      analito: 'elafibranor',
      ref: {
        f: 'dailymed-elafibranor',
        sec: '12.3 · Farmacocinética',
        cita: 'median elimination half-life was 70.2 hours (range 37.1 to 92.2 hours) for elafibranor',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente medio',
      valor: '50,0',
      unidad: 'L/h',
      analito: 'elafibranor',
      ref: {
        f: 'dailymed-elafibranor',
        sec: '12.3 · Farmacocinética',
        cita: 'Elafibranor mean apparent total clearance (CL/F) was 50.0 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '77,1 (aprox.)',
      unidad: '% de la dosis',
      analito: 'elafibranor y metabolitos',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 120 mg',
      ref: { f: 'dailymed-elafibranor', sec: '12.3 · Farmacocinética', cita: 'approximately 77.1% of the dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-elafibranor', 'd78aa14f-6ec1-4b1d-a4ae-e48658137a25', 'IQIRVO (ELAFIBRANOR) TABLET, FILM COATED', 'IQIRVO', '4', '2026-08-17', '2026-11-19'),
    rengPubchem(9864881, 'elafibranor', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
