import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metilnaltrexona',
    nombre: 'Metilnaltrexona',
    clase: 'Antagonista opioide de acción periférica (amina cuaternaria)',
    sinonimos: [ 'methylnaltrexone', 'Relistor' ],
    formula: 'C21H26NO4',
    masaMolar: 356.4,
    smiles: 'C[N+]1(CC[C@]23[C@@H]4C(=O)CC[C@]2([C@H]1CC5=C3C(=C(C=C5)O)O4)O)CC6CC6',
    inchikey: 'JVLBPIPGETUEET-GAAHOAFPSA-O',
    cid: 5361918,
    iupac: '(4R,4aS,7aR,12bS)-3-(cyclopropylmethyl)-4a,9-dihydroxy-3-methyl-2,4,5,6,7a,13-hexahydro-1H-4,12-methanobenzofuro[3,2-e]isoquinolin-3-ium-7-one',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'metilnaltrexona-oral',
      producto: 'Relistor · comprimido',
      titular: 'SALIX PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '150 mg de bromuro de metilnaltrexona por comprimido',
      sal: {
        nombre: 'Bromuro de metilnaltrexona',
        ref: {
          f: 'dailymed-metilnaltrexona',
          sec: '11 · Descripción',
          cita: 'RELISTOR ® (methylnaltrexone bromide) is a mu-opioid receptor antagonist',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'Celulosa microcristalina silicificada',
        'celulosa microcristalina',
        'laurilsulfato de sodio',
        'croscarmelosa sódica',
        'crospovidona',
        'poloxámero 407',
        'ácido esteárico (origen vegetal)',
        'dióxido de silicio coloidal',
        'edetato de calcio y disodio',
        'alcohol polivinílico',
        'dióxido de titanio',
        'polietilenglicol',
        'talco'
      ],
      usos: {
        t: 'Estreñimiento causado por opioides en adultos con dolor crónico no oncológico.',
        ref: {
          f: 'dailymed-metilnaltrexona',
          sec: '1 · Indicaciones',
          cita: 'treatment of opioid-induced constipation (OIC) in adults with chronic non-cancer pain',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-metilnaltrexona',
      nota: 'La etiqueta incluye también una inyección subcutánea; aquí solo se describe el comprimido, y las cifras de farmacocinética proceden de una dosis de 450 mg.',
      advertencias: [
        {
          titulo: 'Perforación gastrointestinal',
          texto: 'Se han descrito casos en adultos con enfermedad avanzada y lesiones que debilitan la pared del tubo digestivo.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of gastrointestinal perforation have been reported in adult patients with OIC and advanced illness',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síntomas de abstinencia de opioides',
          texto: 'Han aparecido sudoración, escalofríos, diarrea, dolor abdominal, ansiedad y bostezos.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Symptoms consistent with opioid withdrawal, including hyperhidrosis, chills, diarrhea, abdominal pain, anxiety, and yawning have occurred',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con los comprimidos (≥ 2 %): dolor abdominal, diarrea, dolor de cabeza, distensión abdominal, vómitos, sudoración, ansiedad, espasmos musculares, rinorrea y escalofríos.',
          '34084-4',
          'RELISTOR tablets (≥ 2%): abdominal pain, diarrhea, headache, abdominal distention, vomiting, hyperhidrosis, anxiety, muscle spasms, rhinorrhea, and chills'
        ],
        [ 'Algunas pueden reflejar síntomas de abstinencia de opioides.', '34084-4', 'may reflect symptoms of opioid withdrawal' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 150 mg de bromuro de metilnaltrexona por comprimido. Los excipientes no son el principio activo.',
    usos: 'Estreñimiento causado por opioides en adultos con dolor crónico no oncológico.',
    actua: 'Bloquea los receptores opioides mu; al ser una amina cuaternaria cruza poco la barrera hematoencefálica y actúa en el tubo digestivo sin quitar el efecto analgésico.',
    recorrido: 'Con 450 mg, el máximo llega a las 1,5 horas aproximadamente; la biodisponibilidad absoluta oral no se ha determinado. Una comida rica en grasa baja la Cmax un 60 %. Se elimina sobre todo como fármaco sin cambios por la orina y las heces; la semivida terminal tras la dosis oral es de unas 15 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 150 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 150 mg.',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '3 · Formas y concentraciones',
            cita: '150 mg methylnaltrexone bromide supplied as film-coated, white, round, biconvex',
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
      ocurre: 'Con 450 mg, el máximo llega a las 1,5 horas aproximadamente; la biodisponibilidad absoluta oral no se ha determinado. Una comida rica en grasa baja la Cmax un 60 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con 450 mg, el máximo llega a las 1,5 horas aproximadamente; la biodisponibilidad absoluta oral no se ha determinado. Una comida rica en grasa baja la Cmax un 60 %.',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '12.3 · Farmacocinética',
            cita: 'peak concentrations (C max ) of methylnaltrexone were observed at approximately 1.5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con desayuno rico en grasa, Cmax -60 %, AUC -43 % y el máximo se retrasa 2 horas.',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '12.3 · Farmacocinética',
            cita: 'resulted in a decrease in the C max of methylnaltrexone by 60%, the AUC by 43% and delayed the T max by 2 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La fracción unida a proteínas del plasma es del 11-15 %; el volumen en estado estacionario es de unos 1,1 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La fracción unida a proteínas del plasma es del 11-15 %; el volumen en estado estacionario es de unos 1,1 L/kg.',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '12.3 · Farmacocinética',
            cita: 'The fraction of methylnaltrexone bound to human plasma proteins is 11% to 15%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu del tubo digestivo',
        efecto: 'Bloquea los receptores opioides mu; al ser una amina cuaternaria cruza poco la barrera hematoencefálica y actúa en el tubo digestivo sin quitar el efecto analgésico.',
        lugar: [ 'intestino-delgado', 'intestino-grueso' ],
        datos: [
          {
            t: 'Bloquea los receptores opioides mu; al ser una amina cuaternaria cruza poco la barrera hematoencefálica y actúa en el tubo digestivo sin quitar el efecto analgésico.',
            ref: {
              f: 'dailymed-metilnaltrexona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Methylnaltrexone is a selective antagonist of opioid binding at the mu-opioid receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma poco: los isómeros de metil-6-naltrexol (5 %) y el sulfato de metilnaltrexona (1 %) son las vías principales. La etiqueta no precisa el órgano.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma poco: los isómeros de metil-6-naltrexol (5 %) y el sulfato de metilnaltrexona (1 %) son las vías principales. La etiqueta no precisa el órgano.',
          ref: { f: 'dailymed-metilnaltrexona', sec: '12.3 · Farmacocinética', cita: 'appear to be the primary pathways of metabolism', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Isómeros de metil-6-naltrexol',
          actividad: 'desconocida',
          nota: 'Ruta mediada por aldo-ceto reductasas 1C.',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '12.3 · Farmacocinética',
            cita: 'Conversion to methyl-6-naltrexol isomers (5% of total) and methylnaltrexone sulfate (1% of total) appear to be the primary pathways of metabolism',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Sulfato de metilnaltrexona',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '12.3 · Farmacocinética',
            cita: 'Conversion to methyl-6-naltrexol isomers (5% of total) and methylnaltrexone sulfate (1% of total) appear to be the primary pathways of metabolism',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo como fármaco sin cambios por la orina y las heces; la semivida terminal tras la dosis oral es de unas 15 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo como fármaco sin cambios por la orina y las heces; la semivida terminal tras la dosis oral es de unas 15 horas.',
          ref: {
            f: 'dailymed-metilnaltrexona',
            sec: '12.3 · Farmacocinética',
            cita: 'Methylnaltrexone is excreted primarily as the unchanged drug in the urine and feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'metilnaltrexona',
      poblacion: 'pacientes con estreñimiento por opioides o sanos',
      condiciones: 'dosis única de 450 mg',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'peak concentrations (C max ) of methylnaltrexone were observed at approximately 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '48,1',
      unidad: 'ng/mL',
      analito: 'metilnaltrexona',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 450 mg',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'The C max and AUC in healthy subjects were 48.1 ng/mL and 382 ng·hr/mL, respectively, following a single 450 mg dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC',
      valor: '382',
      unidad: 'ng·h/mL',
      analito: 'metilnaltrexona',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 450 mg',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'The C max and AUC in healthy subjects were 48.1 ng/mL and 382 ng·hr/mL, respectively, following a single 450 mg dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '11-15',
      unidad: '%',
      analito: 'metilnaltrexona',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'The fraction of methylnaltrexone bound to human plasma proteins is 11% to 15%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '15 (aprox.)',
      unidad: 'h',
      analito: 'metilnaltrexona',
      condiciones: 'dosis única de 450 mg',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'a terminal half-life (t 1/2 ) of approximately 15 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina',
      valor: '54',
      unidad: '% de la dosis',
      analito: 'metilnaltrexona y metabolitos',
      condiciones: 'estudio de balance de masas intravenoso',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately half of the dose was excreted in the urine (54%), and 17% of administered dose was excreted in the feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces',
      valor: '17',
      unidad: '% de la dosis',
      analito: 'metilnaltrexona y metabolitos',
      condiciones: 'estudio de balance de masas intravenoso',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-metilnaltrexona',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately half of the dose was excreted in the urine (54%), and 17% of administered dose was excreted in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-metilnaltrexona', 'c488fb7c-0a5b-487c-b452-996809d1cb99', 'RELISTOR (METHYLNALTREXONE BROMIDE) TABLET RELISTOR (METHYLNALTREXONE BROMIDE) INJECTION, SOLUTION', 'Relistor', '68', '2026-05-20', '2026-11-12'),
    rengPubchem(5361918, 'methylnaltrexone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
