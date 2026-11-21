import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'temozolomida',
    nombre: 'Temozolomida',
    clase: 'Antineoplásico alquilante',
    sinonimos: [ 'temozolomide', 'Temodar' ],
    formula: 'C6H6N6O2',
    masaMolar: 194.15,
    smiles: 'CN1C(=O)N2C=NC(=C2N=N1)C(=O)N',
    inchikey: 'BPEGJWRSRHCHSN-UHFFFAOYSA-N',
    cid: 5394,
    iupac: '3-methyl-4-oxoimidazo[5,1-d][1,2,3,5]tetrazine-8-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'temozolomida-oral',
      producto: 'TEMODAR · cápsula',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 20 mg, 100 mg, 140 mg, 180 mg o 250 mg por cápsula, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'silicon dioxide',
        'sodium starch glycolate type a potato',
        'tartaric acid',
        'stearic acid',
        'shellac',
        'alcohol',
        'isopropyl alcohol',
        'butyl alcohol',
        'propylene glycol',
        'water',
        'ammonia',
        'potassium hydroxide',
        'ferric oxide red',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferric oxide yellow',
        'sodium lauryl sulfate',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Glioblastoma de diagnóstico reciente junto con radioterapia y como mantenimiento, y astrocitoma anaplásico.',
        ref: {
          f: 'dailymed-temozolomida',
          sec: '1 · Indicaciones',
          cita: 'Newly diagnosed glioblastoma concomitantly with radiotherapy and then as maintenance treatment',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-temozolomida',
      advertencias: [
        {
          titulo: 'Mielosupresión',
          texto: 'Puede causar pancitopenia, leucopenia y anemia, algunas mortales.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'dailymed-temozolomida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Myelosuppression, including pancytopenia, leukopenia, and anemia, some with fatal outcomes, have occurred with TEMODAR',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se ha descrito hepatotoxicidad grave y mortal.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-temozolomida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Fatal and severe hepatotoxicity have been reported in patients receiving TEMODAR',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 20 %): alopecia, cansancio, náuseas, vómitos, dolor de cabeza, estreñimiento, anorexia y convulsiones.',
          '34084-4',
          'most common adverse reactions (≥20%) are: alopecia, fatigue, nausea, vomiting, headache, constipation, anorexia, and convulsions'
        ],
        [
          'Alteraciones hematológicas de grado 3-4 (≥ 10 %) en astrocitoma anaplásico: descenso de linfocitos, plaquetas, neutrófilos y leucocitos.',
          '34084-4',
          'decreased lymphocytes, decreased platelets, decreased neutrophils, and decreased leukocytes'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 5 mg, 20 mg, 100 mg, 140 mg, 180 mg o 250 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Glioblastoma de diagnóstico reciente junto con radioterapia y como mantenimiento, y astrocitoma anaplásico.',
    actua: 'No es activa por sí misma: se convierte sin enzimas, a pH fisiológico, en MTIC, que alquila el ADN (sobre todo la guanina) y causa roturas y muerte celular programada.',
    recorrido: 'Con 150 mg/m² por boca, la Cmax media es de 7,5 µg/mL y el máximo llega con una mediana de 1 hora. Con un desayuno rico en grasa baja la Cmax un 32 % y el máximo se retrasa a 2,25 horas. Se recupera en 7 días alrededor del 38 % de la dosis radiactiva, casi toda por la orina; el aclaramiento es de unos 5,5 L/h/m² y la semivida de eliminación media, de 1,8 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsulas de 5, 20, 100, 140, 180 y 250 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsulas de 5, 20, 100, 140, 180 y 250 mg.',
          ref: {
            f: 'dailymed-temozolomida',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: – 5 mg: opaque white bodies with green caps',
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
      ocurre: 'Con 150 mg/m² por boca, la Cmax media es de 7,5 µg/mL y el máximo llega con una mediana de 1 hora. Con un desayuno rico en grasa baja la Cmax un 32 % y el máximo se retrasa a 2,25 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con 150 mg/m² por boca, la Cmax media es de 7,5 µg/mL y el máximo llega con una mediana de 1 hora. Con un desayuno rico en grasa baja la Cmax un 32 % y el máximo se retrasa a 2,25 horas.',
          ref: { f: 'dailymed-temozolomida', sec: '12.3 · Farmacocinética', cita: 'The median T max is 1 hour', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen aparente de distribución es de 0,4 L/kg; la unión de la radiactividad total relacionada con el fármaco es del 15 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen aparente de distribución es de 0,4 L/kg; la unión de la radiactividad total relacionada con el fármaco es del 15 %.',
          ref: {
            f: 'dailymed-temozolomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Temozolomide has a mean (CV%) apparent volume of distribution of 0.4 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ADN de las células tumorales',
        efecto: 'No es activa por sí misma: se convierte sin enzimas, a pH fisiológico, en MTIC, que alquila el ADN (sobre todo la guanina) y causa roturas y muerte celular programada.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'No es activa por sí misma: se convierte sin enzimas, a pH fisiológico, en MTIC, que alquila el ADN (sobre todo la guanina) y causa roturas y muerte celular programada.',
            ref: {
              f: 'dailymed-temozolomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Temozolomide is not directly active but undergoes rapid nonenzymatic conversion at physiologic pH to the reactive compound',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se hidroliza de forma espontánea a pH fisiológico hasta MTIC (activo) y hasta el ácido de temozolomida; MTIC pasa después a AIC y a metilhidrazina, que se cree la especie alquilante activa. Los citocromos P450 tienen un papel menor.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se hidroliza de forma espontánea a pH fisiológico hasta MTIC (activo) y hasta el ácido de temozolomida; MTIC pasa después a AIC y a metilhidrazina, que se cree la especie alquilante activa. Los citocromos P450 tienen un papel menor.',
          ref: {
            f: 'dailymed-temozolomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Temozolomide is spontaneously hydrolyzed at physiologic pH to the active species, MTIC and to temozolomide acid metabolite',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'MTIC',
          actividad: 'activo',
          ref: {
            f: 'dailymed-temozolomida',
            sec: '12.3 · Farmacocinética',
            cita: 'spontaneously hydrolyzed at physiologic pH to the active species, MTIC',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Ácido de temozolomida',
          actividad: 'desconocida',
          ref: { f: 'dailymed-temozolomida', sec: '12.3 · Farmacocinética', cita: 'and to temozolomide acid metabolite', codigo: '43682-4' }
        },
        {
          nombre: 'AIC (5-aminoimidazol-4-carboxamida)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-temozolomida',
            sec: '12.3 · Farmacocinética',
            cita: 'MTIC is further hydrolyzed to 5-amino-imidazole-4-carboxamide (AIC), which is known to be an intermediate in purine and nucleic acid biosynthesis',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se recupera en 7 días alrededor del 38 % de la dosis radiactiva, casi toda por la orina; el aclaramiento es de unos 5,5 L/h/m² y la semivida de eliminación media, de 1,8 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se recupera en 7 días alrededor del 38 % de la dosis radiactiva, casi toda por la orina; el aclaramiento es de unos 5,5 L/h/m² y la semivida de eliminación media, de 1,8 horas.',
          ref: {
            f: 'dailymed-temozolomida',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 38% of the administered temozolomide total radioactive dose is recovered over 7 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '7,5',
      unidad: 'µg/mL',
      analito: 'temozolomida',
      condiciones: '150 mg/m² por boca, dosis única',
      ref: {
        f: 'dailymed-temozolomida',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean C max is 7.5 mcg/mL for temozolomide and 282 ng/mL for MTIC',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '282',
      unidad: 'ng/mL',
      analito: 'MTIC',
      condiciones: '150 mg/m² por boca, dosis única',
      ref: {
        f: 'dailymed-temozolomida',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean C max is 7.5 mcg/mL for temozolomide and 282 ng/mL for MTIC',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '1',
      unidad: 'h',
      analito: 'temozolomida',
      ref: { f: 'dailymed-temozolomida', sec: '12.3 · Farmacocinética', cita: 'The median T max is 1 hour', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '0,4 (CV 13 %)',
      unidad: 'L/kg',
      analito: 'temozolomida',
      ref: {
        f: 'dailymed-temozolomida',
        sec: '12.3 · Farmacocinética',
        cita: 'Temozolomide has a mean (CV%) apparent volume of distribution of 0.4 L/kg (13%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '1,8',
      unidad: 'h',
      analito: 'temozolomida',
      ref: { f: 'dailymed-temozolomida', sec: '12.3 · Farmacocinética', cita: 'the mean elimination half-life is 1.8 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión de la radiactividad relacionada con el fármaco',
      valor: '15',
      unidad: '%',
      analito: 'temozolomida y metabolitos',
      ref: {
        f: 'dailymed-temozolomida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean percent bound of drug-related total radioactivity is 15%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '38',
      unidad: '%',
      analito: 'temozolomida y metabolitos',
      condiciones: 'recuperado en 7 días',
      ref: { f: 'dailymed-temozolomida', sec: '12.3 · Farmacocinética', cita: '38% in urine and 0.8% in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-temozolomida', '046a9011-3911-4d3f-a15f-fbb56d5aad56', 'TEMODAR (TEMOZOLOMIDE) CAPSULE TEMODAR (TEMOZOLOMIDE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION', 'TEMODAR', '40', '2026-03-04', '2026-11-12'),
    rengPubchem(5394, 'temozolomide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
