import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cilostazol',
    nombre: 'Cilostazol',
    clase: 'Inhibidor de la fosfodiesterasa III',
    sinonimos: [ 'cilostazol', 'Pletal' ],
    formula: 'C20H27N5O2',
    masaMolar: 369.5,
    smiles: 'C1CCC(CC1)N2C(=NN=N2)CCCCOC3=CC4=C(C=C3)NC(=O)CC4',
    inchikey: 'RRGUKTPIGVIEKM-UHFFFAOYSA-N',
    cid: 2754,
    iupac: '6-[4-(1-cyclohexyltetrazol-5-yl)butoxy]-3,4-dihydro-1H-quinolin-2-one',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'cilostazol-oral',
      producto: 'CILOSTAZOL · comprimido',
      titular: 'AUROBINDO PHARMA LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [ 'starch, corn', 'croscarmellose sodium', 'hypromellose 2910 (3 mpa.s)', 'magnesium stearate', 'microcrystalline cellulose' ],
      usos: {
        t: 'Reducir los síntomas de la claudicación intermitente, con más distancia caminada.',
        ref: {
          f: 'dailymed-cilostazol',
          sec: '1 · Indicaciones',
          cita: 'indicated for the reduction of symptoms of intermittent claudication',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cilostazol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardiaca',
          texto: 'Está contraindicado en la insuficiencia cardiaca de cualquier gravedad: otros inhibidores de la PDE III redujeron la supervivencia.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-cilostazol',
            sec: 'Advertencia destacada',
            cita: 'Cilostazol tablets are contraindicated in patients with heart failure of any severity',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Taquicardia',
          texto: 'Puede causar taquicardia, palpitaciones o hipotensión; la frecuencia sube de 5 a 7 latidos por minuto.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-cilostazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cilostazol may induce tachycardia, palpitation, tachyarrhythmia or hypotension',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 % y al menos el doble que con placebo): dolor de cabeza, diarrea, heces anormales y palpitaciones.',
          '34084-4',
          'are headache, diarrhea, abnormal stools, and palpitation'
        ],
        [ 'Datos de ensayos con 100 mg dos veces al día.', '34084-4', 'in patients on 100 mg twice daily' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir los síntomas de la claudicación intermitente, con más distancia caminada.',
    actua: 'Él y varios metabolitos inhiben la fosfodiesterasa III: sube el AMPc en plaquetas y vasos, lo que frena la agregación plaquetaria y dilata los vasos.',
    recorrido: 'Se absorbe tras la toma oral; una comida rica en grasa aumenta la Cmax alrededor del 90 % y el AUC un 25 %. Su biodisponibilidad absoluta no se conoce. Sale sobre todo por la orina (74 %) como metabolitos, y el resto por las heces (20 %); no aparece cilostazol sin cambios en la orina. Él y sus metabolitos activos tienen semividas de 11 a 13 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo; la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-cilostazol', sec: '3 · Formas y concentraciones', cita: 'round, flat bevel edged tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe tras la toma oral; una comida rica en grasa aumenta la Cmax alrededor del 90 % y el AUC un 25 %. Su biodisponibilidad absoluta no se conoce.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe tras la toma oral; una comida rica en grasa aumenta la Cmax alrededor del 90 % y el AUC un 25 %. Su biodisponibilidad absoluta no se conoce.',
          ref: {
            f: 'dailymed-cilostazol',
            sec: '12.3 · Farmacocinética',
            cita: 'A high fat meal increases absorption, with an approximately 90% increase in C max and a 25% increase in AUC',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une a proteínas en un 95-98 %, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a proteínas en un 95-98 %, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-cilostazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Cilostazol is 95 to 98% protein bound, predominantly to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Fosfodiesterasa III',
        efecto: 'Él y varios metabolitos inhiben la fosfodiesterasa III: sube el AMPc en plaquetas y vasos, lo que frena la agregación plaquetaria y dilata los vasos.',
        lugar: [ 'plaquetas', 'vasos' ],
        datos: [
          {
            t: 'Él y varios metabolitos inhiben la fosfodiesterasa III: sube el AMPc en plaquetas y vasos, lo que frena la agregación plaquetaria y dilata los vasos.',
            ref: {
              f: 'dailymed-cilostazol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inhibit phosphodiesterase III activity and suppress cAMP degradation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en el hígado (CYP3A4 y CYP2C19); dos metabolitos son activos y uno aporta al menos la mitad de la actividad.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en el hígado (CYP3A4 y CYP2C19); dos metabolitos son activos y uno aporta al menos la mitad de la actividad.',
          ref: {
            f: 'dailymed-cilostazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Cilostazol is extensively metabolized by hepatic cytochrome P-450 enzymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '3,4-deshidrocilostazol',
          actividad: 'activo',
          nota: 'El más activo de los metabolitos.',
          ref: {
            f: 'dailymed-cilostazol',
            sec: '12.3 · Farmacocinética',
            cita: '3,4-dehydro-cilostazol, the most active of the metabolites',
            codigo: '43682-4'
          }
        },
        {
          nombre: "4'-trans-hidroxicilostazol",
          actividad: 'activo',
          ref: {
            f: 'dailymed-cilostazol',
            sec: '12.3 · Farmacocinética',
            cita: 'About 30% of the dose was excreted in urine as 4´-trans-hydroxy-cilostazol',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por la orina (74 %) como metabolitos, y el resto por las heces (20 %); no aparece cilostazol sin cambios en la orina. Él y sus metabolitos activos tienen semividas de 11 a 13 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por la orina (74 %) como metabolitos, y el resto por las heces (20 %); no aparece cilostazol sin cambios en la orina. Él y sus metabolitos activos tienen semividas de 11 a 13 horas.',
          ref: {
            f: 'dailymed-cilostazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary route of elimination was via the urine (74%), with the remainder excreted in feces (20%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'comida',
      nombre: 'Aumento de la Cmax con comida rica en grasa',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'cilostazol',
      ref: { f: 'dailymed-cilostazol', sec: '12.3 · Farmacocinética', cita: 'approximately 90% increase in C max', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida aparente de eliminación',
      valor: '11-13',
      unidad: 'h',
      analito: 'cilostazol y metabolitos activos',
      ref: { f: 'dailymed-cilostazol', sec: '12.3 · Farmacocinética', cita: 'have apparent elimination half-lives of about 11-13 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '95-98',
      unidad: '%',
      analito: 'cilostazol',
      ref: { f: 'dailymed-cilostazol', sec: '12.3 · Farmacocinética', cita: 'Cilostazol is 95 to 98% protein bound', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '97,4',
      unidad: '%',
      analito: '3,4-deshidrocilostazol (metabolito activo)',
      ref: { f: 'dailymed-cilostazol', sec: '12.3 · Farmacocinética', cita: 'The binding for 3,4-dehydro-cilostazol is 97.4%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina',
      valor: '74',
      unidad: '% de la dosis',
      analito: 'metabolitos de cilostazol',
      ref: { f: 'dailymed-cilostazol', sec: '12.3 · Farmacocinética', cita: 'via the urine (74%)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cilostazol', '7c841eed-a98f-43c3-baaf-bf5502207a69', 'CILOSTAZOL TABLET', 'CILOSTAZOL', '1', '2026-10-22', '2026-11-12'),
    rengPubchem(2754, 'cilostazol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
