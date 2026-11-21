import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bedaquilina',
    nombre: 'Bedaquilina',
    clase: 'Antimicobacteriano (diarilquinolina)',
    sinonimos: [ 'bedaquiline', 'Sirturo' ],
    formula: 'C32H31BrN2O2',
    masaMolar: 555.5,
    smiles: 'CN(C)CC[C@@](C1=CC=CC2=CC=CC=C21)([C@H](C3=CC=CC=C3)C4=C(N=C5C=CC(=CC5=C4)Br)OC)O',
    inchikey: 'QUIJNHUBAXPXFS-XLJNKUFUSA-N',
    cid: 5388906,
    iupac: '(1R,2S)-1-(6-bromo-2-methoxyquinolin-3-yl)-4-(dimethylamino)-2-naphthalen-1-yl-1-phenylbutan-2-ol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'bedaquilina-oral',
      producto: 'SIRTURO · comprimido',
      titular: 'JANSSEN PRODUCTS, LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fumarato de bedaquilina',
        ref: { f: 'dailymed-bedaquilina', sec: '11 · Descripción', cita: 'bedaquiline fumarate', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'hypromellose 2910 (15 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polysorbate 20',
        'water',
        'starch, corn'
      ],
      usos: {
        t: 'Tuberculosis pulmonar resistente al menos a rifampicina e isoniazida, dentro de un tratamiento combinado, en adultos y niños desde 2 años y 8 kg.',
        ref: {
          f: 'dailymed-bedaquilina',
          sec: '1 · Indicaciones',
          cita: 'with pulmonary tuberculosis (TB) due to Mycobacterium tuberculosis resistant to at least rifampin and isoniazid',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bedaquilina',
      advertencias: [
        {
          titulo: 'Prolongación del QTc',
          texto: 'Puede alargar el intervalo QTc; hay que vigilar el electrocardiograma.',
          organos: [ 'corazon' ],
          ref: { f: 'dailymed-bedaquilina', sec: 'Advertencia destacada', cita: 'QTc prolongation can occur with SIRTURO', codigo: '34066-1' }
        },
        {
          titulo: 'Desequilibrio de mortalidad',
          texto: 'En un ensayo controlado hubo más muertes con bedaquilina (11,4 %) que con placebo (2,5 %).',
          organos: [ 'corazon', 'pulmones' ],
          ref: {
            f: 'dailymed-bedaquilina',
            sec: '5 · Advertencias y precauciones',
            cita: 'An increased risk of death was seen in the SIRTURO treatment group (9/79, 11.4%)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos (≥ 10 %, estudio 1): náuseas, dolor articular, dolor de cabeza, tos con sangre y dolor torácico.',
          '34084-4',
          'were nausea, arthralgia, headache, hemoptysis and chest pain'
        ],
        [
          'En el estudio 4 también prolongación del QTc, vómitos, aumento de transaminasas y dolor abdominal.',
          '34084-4',
          'were QTc prolongation, nausea, vomiting, arthralgia, transaminases increased'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg o 20 mg por comprimido, según la etiqueta; el activo va como fumarato de bedaquilina. Los excipientes no son el principio activo.',
    usos: 'Tuberculosis pulmonar resistente al menos a rifampicina e isoniazida, dentro de un tratamiento combinado, en adultos y niños desde 2 años y 8 kg.',
    actua: 'Inhibe la ATP sintasa de las micobacterias al unirse a su subunidad c: la bacteria no puede generar energía.',
    recorrido: 'El pico llega hacia las 5 horas; una comida rica en grasa duplica la Cmax y el AUC, por eso se toma con comida. Sale sobre todo por las heces; por la orina, como mucho el 0,001 % sin cambios. Su semivida terminal ronda los 5,5 meses.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido sin recubrir y ranurado.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido sin recubrir y ranurado.',
          ref: {
            f: 'dailymed-bedaquilina',
            sec: '3 · Formas y concentraciones',
            cita: 'uncoated, white to almost white oblong functionally scored tablet',
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
      ocurre: 'El pico llega hacia las 5 horas; una comida rica en grasa duplica la Cmax y el AUC, por eso se toma con comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico llega hacia las 5 horas; una comida rica en grasa duplica la Cmax y el AUC, por eso se toma con comida.',
          ref: {
            f: 'dailymed-bedaquilina',
            sec: '12.3 · Farmacocinética',
            cita: 'High fat meal (22 grams of fat, 558 total Kcal) increased C max and AUC by 2-fold',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'pulmones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Más del 99,9 % se une a proteínas del plasma; su volumen central aparente es de unos 117 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99,9 % se une a proteínas del plasma; su volumen central aparente es de unos 117 L.',
          ref: {
            f: 'dailymed-bedaquilina',
            sec: '12.3 · Farmacocinética',
            cita: 'Percent bound to human plasma protein greater than 99.9%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ATP sintasa micobacteriana',
        efecto: 'Inhibe la ATP sintasa de las micobacterias al unirse a su subunidad c: la bacteria no puede generar energía.',
        lugar: [ 'pulmones', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la ATP sintasa de las micobacterias al unirse a su subunidad c: la bacteria no puede generar energía.',
            ref: {
              f: 'dailymed-bedaquilina',
              sec: '12.4 · Microbiología',
              cita: "inhibits mycobacterial ATP (adenosine 5'- triphosphate) synthase, by binding to subunit c of the enzyme",
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'CYP3A4 la transforma en su metabolito M2 (N-monodesmetil), cuya exposición es el 23-31 % de la de la bedaquilina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'CYP3A4 la transforma en su metabolito M2 (N-monodesmetil), cuya exposición es el 23-31 % de la de la bedaquilina.',
          ref: { f: 'dailymed-bedaquilina', sec: '12.3 · Farmacocinética', cita: 'Metabolized to the M2 by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'M2 (N-monodesmetil bedaquilina)',
          actividad: 'desconocida',
          ref: { f: 'dailymed-bedaquilina', sec: '12.3 · Farmacocinética', cita: 'Relative exposure M2 versus bedaquiline: 23%~31%', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por las heces; por la orina, como mucho el 0,001 % sin cambios. Su semivida terminal ronda los 5,5 meses.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por las heces; por la orina, como mucho el 0,001 % sin cambios. Su semivida terminal ronda los 5,5 meses.',
          ref: { f: 'dailymed-bedaquilina', sec: '12.3 · Farmacocinética', cita: 'Fecal excretion is the major route of elimination', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '5 (aprox.)',
      unidad: 'h',
      analito: 'bedaquilina',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-bedaquilina',
        sec: '12.3 · Farmacocinética',
        cita: 'Around 5 hours after single oral dose administration of SIRTURO',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la Cmax y el AUC con comida rica en grasa',
      valor: '2',
      unidad: 'veces',
      analito: 'bedaquilina',
      ref: { f: 'dailymed-bedaquilina', sec: '12.3 · Farmacocinética', cita: 'increased C max and AUC by 2-fold', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99,9',
      unidad: '%',
      analito: 'bedaquilina',
      ref: { f: 'dailymed-bedaquilina', sec: '12.3 · Farmacocinética', cita: 'Percent bound to human plasma protein greater than 99.9%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '≈ 5,5 meses',
      unidad: '—',
      analito: 'bedaquilina y M2',
      ref: {
        f: 'dailymed-bedaquilina',
        sec: '12.3 · Farmacocinética',
        cita: 'Terminal half-life ~ 5.5 months for both bedaquiline and N monodesmethyl metabolite (M2)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax en la semana 2',
      valor: '3060 (DE 1124)',
      unidad: 'ng/mL',
      analito: 'bedaquilina',
      poblacion: 'pacientes con tuberculosis multirresistente',
      condiciones: 'pauta recomendada; parámetros de modelo',
      ref: { f: 'dailymed-bedaquilina', sec: '12.3 · Farmacocinética', cita: 'Week 2: 3060 (1124) ng/mL', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bedaquilina', '1534c9ae-4948-4cf4-9f66-222a99db6d0e', 'SIRTURO (BEDAQUILINE FUMARATE) TABLET', 'SIRTURO', '33', '2025-11-17', '2026-11-12'),
    rengPubchem(5388906, 'bedaquiline', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
