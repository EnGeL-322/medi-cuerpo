import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'valbenazina',
    nombre: 'Valbenazina',
    clase: 'Inhibidor del transportador vesicular de monoaminas 2 (VMAT2)',
    sinonimos: [ 'valbenazine', 'Ingrezza' ],
    formula: 'C24H38N2O4',
    masaMolar: 418.6,
    smiles: 'CC(C)C[C@@H]1CN2CCC3=CC(=C(C=C3[C@H]2C[C@H]1OC(=O)[C@H](C(C)C)N)OC)OC',
    inchikey: 'GEJDGVNQKABXKG-CFKGEZKQSA-N',
    cid: 24795069,
    iupac: '[(2R,3R,11bR)-9,10-dimethoxy-3-(2-methylpropyl)-2,3,4,6,7,11b-hexahydro-1H-benzo[a]quinolizin-2-yl] (2S)-2-amino-3-methylbutanoate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'valbenazina-oral',
      producto: 'INGREZZA · cápsula',
      titular: 'NEUROCRINE BIOSCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '40 mg, 60 mg o 80 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tosilato de valbenazina',
        ref: { f: 'dailymed-valbenazina', sec: '11 · Descripción', cita: 'valbenazine tosylate', codigo: '34089-3' }
      },
      excipientes: [
        'gelatin',
        'fd&c red no. 40',
        'fd&c blue no. 1',
        'hypromellose, unspecified',
        'isomalt',
        'magnesium stearate',
        'starch, corn',
        'microcrystalline cellulose'
      ],
      usos: {
        t: 'Tratamiento en adultos de la discinesia tardía y de la corea asociada a la enfermedad de Huntington.',
        ref: {
          f: 'dailymed-valbenazina',
          sec: '1 · Indicaciones',
          cita: 'INGREZZA and INGREZZA SPRINKLE are vesicular monoamine transporter 2 (VMAT2) inhibitors indicated for the treatment of adults with: - tardive dyskinesia. ( 1 ) - chorea associated with Huntington’s disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-valbenazina',
      advertencias: [
        {
          titulo: 'Depresión e ideas suicidas en la enfermedad de Huntington',
          texto: 'Los inhibidores del VMAT2 pueden aumentar el riesgo de depresión y de pensamientos y conductas suicidas en la enfermedad de Huntington.',
          organos: [],
          ref: {
            f: 'dailymed-valbenazina',
            sec: 'Advertencia destacada',
            cita: 'VMAT2 inhibitors, including INGREZZA and INGREZZA SPRINKLE, can increase the risk of depression and suicidal thoughts and behavior in patients with Huntington’s disease',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Puede aumentar el intervalo QT; evitarla en el QT largo congénito y en arritmias con QT prolongado.',
          organos: [],
          ref: {
            f: 'dailymed-valbenazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'QT Prolongation: May cause an increase in QT interval',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Si aparece, hay que suspenderla.',
          organos: [],
          ref: {
            f: 'dailymed-valbenazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neuroleptic Malignant Syndrome (NMS): Discontinue if this occurs',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la discinesia tardía, la más frecuente (5 % o más y el doble que con placebo) fue la somnolencia.',
          '34084-4',
          'Tardive dyskinesia: somnolence'
        ],
        [
          'En la corea de Huntington: somnolencia, letargo o sedación, urticaria, erupción e insomnio.',
          '34084-4',
          'Chorea associated with Huntington’s disease: somnolence/lethargy/sedation, urticaria, rash, insomnia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 40 mg, 60 mg o 80 mg por cápsula, según la etiqueta; el activo va como tosilato de valbenazina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento en adultos de la discinesia tardía y de la corea asociada a la enfermedad de Huntington.',
    actua: 'Su mecanismo no está claro; se cree que actúa por inhibición reversible del VMAT2, el transportador que lleva las monoaminas del citoplasma a la vesícula sináptica.',
    recorrido: 'El tmax de la valbenazina va de 0,5 a 1,0 horas y su biodisponibilidad oral absoluta es de alrededor del 49 %; el metabolito activo [+]-α-HTBZ alcanza la Cmax a las 4-8 horas. Tras una dosis oral marcada de 50 mg, alrededor del 60 % de la radiactividad se recuperó en la orina y el 30 % en las heces; menos del 2 % como valbenazina o [+]-α-HTBZ sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '3 · Formas y concentraciones',
            cita: 'INGREZZA 40 mg capsule: white opaque body and purple cap',
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
      ocurre: 'El tmax de la valbenazina va de 0,5 a 1,0 horas y su biodisponibilidad oral absoluta es de alrededor del 49 %; el metabolito activo [+]-α-HTBZ alcanza la Cmax a las 4-8 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tmax de la valbenazina va de 0,5 a 1,0 horas y su biodisponibilidad oral absoluta es de alrededor del 49 %; el metabolito activo [+]-α-HTBZ alcanza la Cmax a las 4-8 horas.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'the time to reach maximum valbenazine plasma concentration (t max ) ranges from 0.5 to 1.0 hours. Valbenazine reaches steady state plasma concentrations within 1 week. The absolute oral bioavailability of valbenazine is approximately 49%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas reduce la Cmax de la valbenazina alrededor de un 47 % y el AUC un 13 %, sin cambiar el [+]-α-HTBZ.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Ingestion of a high-fat meal decreases valbenazine C max by approximately 47% and AUC by approximately 13%',
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
      ocurre: 'La unión a las proteínas del plasma es mayor del 99 % para la valbenazina y de alrededor del 64 % para el [+]-α-HTBZ; el volumen de distribución medio en estado estacionario es de 92 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es mayor del 99 % para la valbenazina y de alrededor del 64 % para el [+]-α-HTBZ; el volumen de distribución medio en estado estacionario es de 92 L.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of valbenazine and [+]-α-HTBZ are greater than 99% and approximately 64%, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio en estado estacionario de 92 L.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean steady state volume of distribution of valbenazine is 92 L',
            codigo: '43682-4'
          }
        },
        {
          t: 'En ratas, la valbenazina se une a estructuras del ojo que contienen melanina, como el tracto uveal; se desconoce su relevancia clínica.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Nonclinical data in Long-Evans rats show that valbenazine can bind to melanin-containing structures of the eye such as the uveal tract',
            codigo: '43682-4'
          },
          poblacion: 'ratas'
        }
      ],
      accion: {
        diana: 'Transportador vesicular de monoaminas 2 (VMAT2)',
        efecto: 'Su mecanismo no está claro; se cree que actúa por inhibición reversible del VMAT2, el transportador que lleva las monoaminas del citoplasma a la vesícula sináptica.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no está claro; se cree que actúa por inhibición reversible del VMAT2, el transportador que lleva las monoaminas del citoplasma a la vesícula sináptica.',
            ref: {
              f: 'dailymed-valbenazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'is thought to be mediated through the reversible inhibition of vesicular monoamine transporter 2 (VMAT2), a transporter that regulates monoamine uptake from the cytoplasm to the synaptic vesicle for storage and release',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por hidrólisis del éster de valina, que forma el metabolito activo [+]-α-HTBZ, y por metabolismo oxidativo, sobre todo por CYP3A4/5.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por hidrólisis del éster de valina, que forma el metabolito activo [+]-α-HTBZ, y por metabolismo oxidativo, sobre todo por CYP3A4/5.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'by oxidative metabolism, primarily by CYP3A4/5, to form mono-oxidized valbenazine and other minor metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La hidrólisis del éster de valina forma el metabolito activo [+]-α-HTBZ.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Valbenazine is extensively metabolized after oral administration by hydrolysis of the valine ester to form the active metabolite ([+]-α-HTBZ)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '[+]-α-HTBZ',
          actividad: 'activo',
          nota: 'Metabolito activo; alcanza su pico a las 4-8 horas.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Valbenazine is extensively metabolized after oral administration by hydrolysis of the valine ester to form the active metabolite ([+]-α-HTBZ)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada de 50 mg, alrededor del 60 % de la radiactividad se recuperó en la orina y el 30 % en las heces; menos del 2 % como valbenazina o [+]-α-HTBZ sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada de 50 mg, alrededor del 60 % de la radiactividad se recuperó en la orina y el 30 % en las heces; menos del 2 % como valbenazina o [+]-α-HTBZ sin cambios.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 60% and 30% of the administered radioactivity was recovered in the urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La valbenazina y el [+]-α-HTBZ tienen semividas de 15 a 22 horas.',
          ref: {
            f: 'dailymed-valbenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Valbenazine and [+]-α-HTBZ have half-lives of 15 to 22 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '0,5-1,0',
      unidad: 'h',
      analito: 'valbenazina',
      ref: {
        f: 'dailymed-valbenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'the time to reach maximum valbenazine plasma concentration (t max ) ranges from 0.5 to 1.0 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '49 (aprox.)',
      unidad: '%',
      analito: 'valbenazina',
      ref: {
        f: 'dailymed-valbenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of valbenazine is approximately 49%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'valbenazina',
      ref: {
        f: 'dailymed-valbenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of valbenazine and [+]-α-HTBZ are greater than 99% and approximately 64%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio en estado estacionario',
      valor: '92',
      unidad: 'L',
      analito: 'valbenazina',
      ref: {
        f: 'dailymed-valbenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean steady state volume of distribution of valbenazine is 92 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '15-22',
      unidad: 'h',
      analito: 'valbenazina y [+]-α-HTBZ',
      ref: {
        f: 'dailymed-valbenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Valbenazine and [+]-α-HTBZ have half-lives of 15 to 22 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sistémico total medio',
      valor: '7,2',
      unidad: 'L/h',
      analito: 'valbenazina',
      ref: {
        f: 'dailymed-valbenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Valbenazine has a mean total plasma systemic clearance value of 7.2 L/hr',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-valbenazina', '4c970164-cafb-421f-9eb5-c226ef0a3417', 'INGREZZA (VALBENAZINE) CAPSULE INGREZZA (VALBENAZINE) KIT INGREZZA SPRINKLE (VALBENAZINE) CAPSULE', 'INGREZZA', '34', '2026-04-22', '2026-11-19'),
    rengPubchem(24795069, 'valbenazine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
