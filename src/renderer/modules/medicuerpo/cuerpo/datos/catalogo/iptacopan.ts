import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'iptacopan',
    nombre: 'Iptacopán',
    clase: 'Inhibidor del factor B del complemento',
    sinonimos: [ 'iptacopan', 'Fabhalta' ],
    formula: 'C25H30N2O4',
    masaMolar: 422.5,
    smiles: 'CCO[C@H]1CCN([C@@H](C1)C2=CC=C(C=C2)C(=O)O)CC3=C(C=C(C4=C3C=CN4)C)OC',
    inchikey: 'RENRQMCACQEWFC-UGKGYDQZSA-N',
    cid: 90467622,
    iupac: '4-[(2S,4S)-4-ethoxy-1-[(5-methoxy-7-methyl-1H-indol-4-yl)methyl]piperidin-2-yl]benzoic acid',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'iptacopan-oral',
      producto: 'FABHALTA · cápsula',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '200 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de iptacopán',
        ref: { f: 'dailymed-iptacopan', sec: '11 · Descripción', cita: 'iptacopan hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'ferrosoferric oxide',
        'gelatin',
        'potassium hydroxide',
        'propylene glycol',
        'ferric oxide red',
        'shellac',
        'ammonia',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de adultos con hemoglobinuria paroxística nocturna; también frena el deterioro renal en la nefropatía IgA y reduce la proteinuria en la glomerulopatía C3.',
        ref: {
          f: 'dailymed-iptacopan',
          sec: '1 · Indicaciones',
          cita: 'the treatment of adults with paroxysmal nocturnal hemoglobinuria (PNH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-iptacopan',
      advertencias: [
        {
          titulo: 'Infecciones graves por bacterias encapsuladas',
          texto: 'Como inhibidor del complemento, aumenta el riesgo de infecciones graves, sobre todo por bacterias encapsuladas como neumococo, meningococo y Haemophilus influenzae tipo b.',
          organos: [],
          ref: {
            f: 'dailymed-iptacopan',
            sec: 'Advertencia destacada',
            cita: 'FABHALTA, a complement inhibitor, increases the risk of serious infections, especially those caused by encapsulated bacteria',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hiperlipidemia',
          texto: 'Vigilar los lípidos séricos periódicamente e iniciar un hipolipemiante si está indicado.',
          organos: [],
          ref: {
            f: 'dailymed-iptacopan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hyperlipidemia: Monitor serum lipid parameters periodically during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Vigilancia tras suspenderlo en la hemoglobinuria',
          texto: 'Tras suspenderlo hay que vigilar signos de hemólisis.',
          organos: [],
          ref: {
            f: 'dailymed-iptacopan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitoring of PNH Manifestations After FABHALTA Discontinuation: Monitor for signs of hemolysis after discontinuation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la hemoglobinuria paroxística nocturna, las más frecuentes (10 % o más): cefalea, nasofaringitis, diarrea, dolor abdominal, infección bacteriana y vírica, náuseas y erupción.',
          '34084-4',
          'Most common adverse reactions in adults with PNH (incidence ≥ 10%) were headache, nasopharyngitis, diarrhea, abdominal pain, bacterial infection, viral infection, nausea and rash'
        ],
        [
          'En la nefropatía IgA, las más frecuentes (5 % o más) fueron dolor abdominal y mareo.',
          '34084-4',
          'Most common adverse reactions in adults with IgAN (incidence ≥ 5%) were abdominal pain and dizziness'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 200 mg por cápsula, según la etiqueta; el activo va como clorhidrato de iptacopán. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con hemoglobinuria paroxística nocturna; también frena el deterioro renal en la nefropatía IgA y reduce la proteinuria en la glomerulopatía C3.',
    actua: 'Se une al factor B de la vía alternativa del complemento y regula la escisión de C3, la generación de efectores y la amplificación de la vía terminal; en la hemoglobinuria controla la hemólisis intravascular y extravascular.',
    recorrido: 'Alcanza el pico plasmático unas 2 horas después de la dosis; una comida rica en grasas no afectó a la exposición de forma clínicamente relevante. Tras una dosis oral marcada de 100 mg, el 72 % de la radiactividad se excretó en las heces y el 25 % en la orina; el 18 % y el 17 % de la dosis salieron como iptacopán sin cambios por la orina y las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 200 mg of iptacopan in pale yellow, opaque, hard gelatin capsules',
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
      ocurre: 'Alcanza el pico plasmático unas 2 horas después de la dosis; una comida rica en grasas no afectó a la exposición de forma clínicamente relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Alcanza el pico plasmático unas 2 horas después de la dosis; una comida rica en grasas no afectó a la exposición de forma clínicamente relevante.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, iptacopan reached peak plasma concentrations approximately 2 hours post dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no afectó a la exposición de forma clínicamente relevante.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat meal did not affect the exposure of iptacopan to a clinically meaningful degree',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Su unión a las proteínas del plasma depende de la concentración porque se une a su diana, el factor B; in vitro se une entre un 75 % y un 93 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Su unión a las proteínas del plasma depende de la concentración porque se une a su diana, el factor B; in vitro se une entre un 75 % y un 93 %.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'Iptacopan showed concentration-dependent plasma protein binding due to binding to the target Factor B in the systemic circulation',
            codigo: '43682-4'
          }
        },
        {
          t: 'In vitro se une entre un 75 % y un 93 % a las proteínas; el volumen de distribución aparente en estado estacionario es de unos 288 L.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'Iptacopan was 75% to 93% protein bound in vitro at the relevant clinical plasma concentrations',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Factor B del complemento',
        efecto: 'Se une al factor B de la vía alternativa del complemento y regula la escisión de C3, la generación de efectores y la amplificación de la vía terminal; en la hemoglobinuria controla la hemólisis intravascular y extravascular.',
        lugar: [],
        datos: [
          {
            t: 'Se une al factor B de la vía alternativa del complemento y regula la escisión de C3, la generación de efectores y la amplificación de la vía terminal; en la hemoglobinuria controla la hemólisis intravascular y extravascular.',
            ref: {
              f: 'dailymed-iptacopan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Iptacopan binds to Factor B of the alternative complement pathway and regulates the cleavage of C3, generation of downstream effectors, and the amplification of the terminal pathway',
              codigo: '43679-0'
            }
          },
          {
            t: 'Actúa al principio de la vía alternativa y controla la hemólisis extravascular mediada por C3b y la intravascular mediada por el complemento terminal.',
            ref: {
              f: 'dailymed-iptacopan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Iptacopan acts proximally in the alternative pathway of the complement cascade to control both C3b-mediated EVH and terminal complement-mediated IVH',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolismo es una vía de eliminación predominante (alrededor del 50 % de la dosis por vías oxidativas), sobre todo mediante la CYP2C8, y también glucuronidación por UGT1A1, 1A3 y 1A8.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolismo es una vía de eliminación predominante (alrededor del 50 % de la dosis por vías oxidativas), sobre todo mediante la CYP2C8, y también glucuronidación por UGT1A1, 1A3 y 1A8.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism of iptacopan includes N-dealkylation, O-deethylation, oxidation, and dehydrogenation, mostly driven by CYP2C8 (98%) with a small contribution from CYP2D6 (2%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'También sufre glucuronidación por UGT1A1, UGT1A3 y UGT1A8.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'Iptacopan undergoes Phase 2 metabolism through glucuronidation by UGT1A1, UGT1A3, and UGT1A8',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónidos acilo',
          actividad: 'inactivo',
          nota: 'Dos glucurónidos acilo minoritarios en el plasma; ningún metabolito es activo.',
          ref: { f: 'dailymed-iptacopan', sec: '12.3 · Farmacocinética', cita: 'Iptacopan metabolites are not pharmacologically active', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada de 100 mg, el 72 % de la radiactividad se excretó en las heces y el 25 % en la orina; el 18 % y el 17 % de la dosis salieron como iptacopán sin cambios por la orina y las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada de 100 mg, el 72 % de la radiactividad se excretó en las heces y el 25 % en la orina; el 18 % y el 17 % de la dosis salieron como iptacopán sin cambios por la orina y las heces.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'mean total excretion of radioactivity (iptacopan and metabolites) was 72% in the feces and 25% in the urine, for a total mean excretion of > 96% of the dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal en estado estacionario es de unas 25 horas con 200 mg dos veces al día.',
          ref: {
            f: 'dailymed-iptacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life (t 1/2 ) of iptacopan at steady state is approximately 25 hours after administration of FABHALTA 200 mg twice daily',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'iptacopán',
      ref: {
        f: 'dailymed-iptacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'iptacopan reached peak plasma concentrations approximately 2 hours post dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas (in vitro)',
      valor: '75-93',
      unidad: '%',
      analito: 'iptacopán',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-iptacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'Iptacopan was 75% to 93% protein bound in vitro at the relevant clinical plasma concentrations',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '288 (aprox.)',
      unidad: 'L',
      analito: 'iptacopán',
      condiciones: '200 mg dos veces al día',
      ref: {
        f: 'dailymed-iptacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent volume of distribution at steady state was approximately 288 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en estado estacionario',
      valor: '25 (aprox.)',
      unidad: 'h',
      analito: 'iptacopán',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-iptacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life (t 1/2 ) of iptacopan at steady state is approximately 25 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '8',
      unidad: 'L/h',
      analito: 'iptacopán',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-iptacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent clearance of iptacopan at steady state is 8 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '72',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 100 mg',
      ref: { f: 'dailymed-iptacopan', sec: '12.3 · Farmacocinética', cita: 'was 72% in the feces and 25% in the urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-iptacopan', 'a76b5845-6e21-4d3b-ad07-cd8df1b60bee', 'FABHALTA (IPTACOPAN) CAPSULE', 'FABHALTA', '6', '2026-07-20', '2026-11-19'),
    rengPubchem(90467622, 'iptacopan', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
