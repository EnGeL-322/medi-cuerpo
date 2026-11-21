import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tetrabenazina',
    nombre: 'Tetrabenazina',
    clase: 'Inhibidor del transportador vesicular de monoaminas 2 (VMAT2)',
    sinonimos: [ 'tetrabenazine', 'Xenazine' ],
    formula: 'C19H27NO3',
    masaMolar: 317.4,
    smiles: 'CC(C)CC1CN2CCC3=CC(=C(C=C3C2CC1=O)OC)OC',
    inchikey: 'MKJIEFSOBYUXJB-UHFFFAOYSA-N',
    cid: 6018,
    iupac: '9,10-dimethoxy-3-(2-methylpropyl)-1,3,4,6,7,11b-hexahydrobenzo[a]quinolizin-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'tetrabenazina-oral',
      producto: 'Xenazine · comprimido',
      titular: 'LUNDBECK PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '12.5 mg o 25 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose, unspecified form', 'magnesium stearate', 'starch, corn', 'talc' ],
      usos: {
        t: 'Tratamiento de la corea asociada a la enfermedad de Huntington.',
        ref: {
          f: 'dailymed-tetrabenazina',
          sec: '1 · Indicaciones',
          cita: 'XENAZINE is indicated for the treatment of chorea associated with Huntington’s disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tetrabenazina',
      advertencias: [
        {
          titulo: 'Depresión y riesgo de suicidio',
          texto: 'Puede aumentar el riesgo de depresión y de pensamientos y conductas suicidas en pacientes con enfermedad de Huntington.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: 'Advertencia destacada',
            cita: 'XENAZINE can increase the risk of depression and suicidal thoughts and behavior (suicidality) in patients with Huntington’s disease',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Si aparece, hay que suspender el tratamiento.',
          organos: [ 'encefalo', 'musculos' ],
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neuroleptic Malignant Syndrome (NMS): Discontinue if this occurs',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 % y al menos 5 puntos por encima del placebo): sedación o somnolencia, fatiga, insomnio, depresión, acatisia, ansiedad y náuseas.',
          '34084-4',
          'Most common adverse reactions (greater than 10% and at least 5% greater than placebo) were: sedation/somnolence, fatigue, insomnia, depression, akathisia, anxiety/anxiety aggravated, nausea'
        ],
        [
          'En el estudio, 49 de 54 pacientes (91 %) tratados con el fármaco tuvieron al menos una reacción adversa.',
          '34084-4',
          'Forty-nine of 54 (91%) patients who received XENAZINE experienced one or more adverse reactions at any time during the study'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 12.5 mg o 25 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la corea asociada a la enfermedad de Huntington.',
    actua: 'Inhibe de forma reversible el transportador vesicular de monoaminas de tipo 2 (VMAT2), lo que reduce la captación de monoaminas en las vesículas sinápticas y agota sus reservas; el mecanismo exacto contra la corea se desconoce.',
    recorrido: 'Tras la administración oral, la extensión de la absorción es de al menos el 75 %. Los metabolitos se eliminan sobre todo por el riñón: alrededor del 75 % de la dosis salió por la orina y entre el 7 % y el 16 % se recuperó en las heces; no se halló tetrabenazina inalterada en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '3 · Formas y concentraciones',
            cita: 'XENAZINE tablets are available in the following strengths and packages',
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
      ocurre: 'Tras la administración oral, la extensión de la absorción es de al menos el 75 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral, la extensión de la absorción es de al menos el 75 %.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of tetrabenazine, the extent of absorption is at least 75%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones máximas de α-HTBZ y β-HTBZ se alcanzan entre 1 y 1½ horas después de la dosis.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations (C max ) of α-HTBZ and β-HTBZ are reached within 1 to 1½ hours post-dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no modificaron las concentraciones medias, la Cmax ni el AUC de α-HTBZ ni de β-HTBZ.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Food had no effect on mean plasma concentrations, C max , or the area under the concentration time course (AUC) of α-HTBZ or β-HTBZ',
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
      ocurre: 'La unión a proteínas del plasma humano in vitro fue del 82 % al 85 % para la tetrabenazina, del 60 % al 68 % para el α-HTBZ y del 59 % al 63 % para el β-HTBZ.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma humano in vitro fue del 82 % al 85 % para la tetrabenazina, del 60 % al 68 % para el α-HTBZ y del 59 % al 63 % para el β-HTBZ.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Tetrabenazine binding ranged from 82% to 85%, α-HTBZ binding ranged from 60% to 68%, and β-HTBZ binding ranged from 59% to 63%',
            codigo: '43682-4'
          }
        },
        {
          t: 'En estudios PET en humanos, la radiactividad se distribuye con rapidez al cerebro, con la mayor unión en el cuerpo estriado y la menor en la corteza.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'radioactivity is rapidly distributed to the brain following intravenous injection of 11 C-labeled tetrabenazine or α-HTBZ, with the highest binding in the striatum and lowest binding in the cortex',
            codigo: '43682-4'
          },
          poblacion: 'humanos',
          condiciones: 'inyección intravenosa de tetrabenazina marcada con 11C'
        }
      ],
      accion: {
        diana: 'Transportador vesicular de monoaminas 2 (VMAT2)',
        efecto: 'Inhibe de forma reversible el transportador vesicular de monoaminas de tipo 2 (VMAT2), lo que reduce la captación de monoaminas en las vesículas sinápticas y agota sus reservas; el mecanismo exacto contra la corea se desconoce.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Inhibe de forma reversible el transportador vesicular de monoaminas de tipo 2 (VMAT2), lo que reduce la captación de monoaminas en las vesículas sinápticas y agota sus reservas; el mecanismo exacto contra la corea se desconoce.',
            ref: {
              f: 'dailymed-tetrabenazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tetrabenazine reversibly inhibits the human vesicular monoamine transporter type 2 (VMAT2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La carbonil reductasa, que actúa sobre todo en el hígado, forma los metabolitos activos α-HTBZ y β-HTBZ; se han identificado al menos 19 metabolitos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La carbonil reductasa, que actúa sobre todo en el hígado, forma los metabolitos activos α-HTBZ y β-HTBZ; se han identificado al menos 19 metabolitos.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'α-HTBZ and β-HTBZ are formed by carbonyl reductase that occurs mainly in the liver',
            codigo: '43682-4'
          }
        },
        {
          t: 'El α-HTBZ y el β-HTBZ se metabolizan sobre todo por la CYP2D6.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'α-HTBZ and β-HTBZ are metabolized principally by CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'α-HTBZ y β-HTBZ',
          actividad: 'activo',
          nota: 'Metabolitos activos principales; después se conjugan con sulfato o glucurónido.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'rapid and extensive hepatic metabolism of tetrabenazine by carbonyl reductase to the active metabolites α-HTBZ and β-HTBZ',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Los metabolitos se eliminan sobre todo por el riñón: alrededor del 75 % de la dosis salió por la orina y entre el 7 % y el 16 % se recuperó en las heces; no se halló tetrabenazina inalterada en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Los metabolitos se eliminan sobre todo por el riñón: alrededor del 75 % de la dosis salió por la orina y entre el 7 % y el 16 % se recuperó en las heces; no se halló tetrabenazina inalterada en la orina.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 75% of the dose was excreted in the urine, and fecal recovery accounted for approximately 7 to 16% of the dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'El α-HTBZ, el β-HTBZ y el 9-desmetil-β-DHTBZ tienen semividas de 7, 5 y 12 horas.',
          ref: {
            f: 'dailymed-tetrabenazina',
            sec: '12.3 · Farmacocinética',
            cita: 'α-HTBZ, β-HTBZ and 9-desmethyl-β-DHTBZ have half-lives of 7 hours, 5 hours and 12 hours respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Extensión de la absorción',
      valor: '≥ 75',
      unidad: '%',
      analito: 'tetrabenazina',
      ref: { f: 'dailymed-tetrabenazina', sec: '12.3 · Farmacocinética', cita: 'the extent of absorption is at least 75%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de α-HTBZ y β-HTBZ',
      valor: '1-1,5',
      unidad: 'h',
      analito: 'α-HTBZ y β-HTBZ',
      ref: {
        f: 'dailymed-tetrabenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations (C max ) of α-HTBZ and β-HTBZ are reached within 1 to 1½ hours post-dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas de la tetrabenazina',
      valor: '82-85',
      unidad: '%',
      analito: 'tetrabenazina',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-tetrabenazina', sec: '12.3 · Farmacocinética', cita: 'Tetrabenazine binding ranged from 82% to 85%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida del α-HTBZ',
      valor: '7',
      unidad: 'h',
      analito: 'α-HTBZ',
      ref: {
        f: 'dailymed-tetrabenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'α-HTBZ, β-HTBZ and 9-desmethyl-β-DHTBZ have half-lives of 7 hours, 5 hours and 12 hours respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '75 (aprox.)',
      unidad: '% de la dosis',
      analito: 'tetrabenazina y metabolitos',
      poblacion: '6 voluntarios sanos',
      ref: {
        f: 'dailymed-tetrabenazina',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 75% of the dose was excreted in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tetrabenazina', 'ac768bab-8afa-4446-bc7f-caeeffec0cda', 'XENAZINE (TETRABENAZINE) TABLET', 'Xenazine', '22', '2026-11-06', '2026-11-15'),
    rengPubchem(6018, 'tetrabenazine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
