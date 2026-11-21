import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ivermectina',
    nombre: 'Ivermectina',
    clase: 'Antiparasitario (avermectina)',
    sinonimos: [ 'ivermectin', 'Stromectol' ],
    formula: 'C48H74O14',
    masaMolar: 875.1,
    smiles: 'CC[C@H](C)[C@@H]1[C@H](CC[C@@]2(O1)C[C@@H]3C[C@H](O2)C/C=C(/[C@H]([C@H](/C=C/C=C/4\\CO[C@H]5[C@@]4([C@@H](C=C([C@H]5O)C)C(=O)O3)O)C)O[C@H]6C[C@@H]([C@H]([C@@H](O6)C)O[C@H]7C[C@@H]([C@H]([C@@H](O7)C)O)OC)OC)\\C)C',
    inchikey: 'AZSNMRSAGSSBNP-XPNPUAGNSA-N',
    cid: 6321424,
    iupac: "(1R,4S,5'S,6R,6'R,8R,10E,12S,13S,14E,16E,20R,21R,24S)-6'-[(2S)-butan-2-yl]-21,24-dihydroxy-12-[(2R,4S,5S,6S)-5-[(2S,4S,5S,6S)-5-hydroxy-4-methoxy-6-methyloxan-2-yl]oxy-4-methoxy-6-methyloxan-2-yl]oxy-5',11,13,22-tetramethylspiro[3,7,19-trioxatetracyclo[15.6.1.14,8.020,24]pentacosa-10,14,16,22-tetraene-6,2'-oxane]-2-one",
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'ivermectina-oral',
      producto: 'STROMECTOL · comprimido',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '3 mg por comprimido, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'starch, corn', 'magnesium stearate', 'butylated hydroxyanisole', 'anhydrous citric acid' ],
      usos: {
        t: 'Estrongiloidiasis intestinal y oncocercosis, infecciones por gusanos nematodos.',
        ref: {
          f: 'dailymed-ivermectina',
          sec: '1 · Indicaciones',
          cita: 'treatment of intestinal (i.e., nondisseminated) strongyloidiasis due to the nematode parasite Strongyloides stercoralis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ivermectina',
      advertencias: [
        {
          titulo: 'Reacciones en la oncocercosis',
          texto: 'En la oncocercosis pueden aparecer reacciones en la piel, generales y en los ojos (reacción de Mazzotti) por la muerte de las microfilarias.',
          organos: [ 'piel', 'ojos' ],
          ref: {
            f: 'dailymed-ivermectina',
            sec: 'Advertencias',
            cita: 'These reactions are probably due to allergic and inflammatory responses to the death of microfilariae',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Edema periférico (3,2 %), taquicardia (3,5 %), edema facial (1,2 %) e hipotensión al ponerse de pie (1,1 %), relacionados con el fármaco en ≥ 1 % de los pacientes.',
          '34084-4',
          'facial edema (1.2%), peripheral edema (3.2%), orthostatic hypotension (1.1%), and tachycardia (3.5%)'
        ],
        [ 'En los análisis: eosinofilia (3 %) y aumento de la hemoglobina (1 %).', '34084-4', 'eosinophilia (3%) and hemoglobin increase (1%)' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 3 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Estrongiloidiasis intestinal y oncocercosis, infecciones por gusanos nematodos.',
    actua: 'Se une de forma selectiva y con gran afinidad a canales de cloruro activados por glutamato de los nervios y músculos de los invertebrados: las células se hiperpolarizan y el parásito queda paralizado y muere.',
    recorrido: 'Tras 12 mg en ayunas, la concentración máxima del componente principal (H2B1a) llegó hacia las 4 horas. Con una comida rica en grasa, la biodisponibilidad aumentó unas 2,5 veces (dosis de 30 mg). La ivermectina y sus metabolitos salen casi solo por las heces, a lo largo de unos 12 días; menos del 1 % por la orina. Su semivida en el plasma es de unas 18 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca; la etiqueta no describe una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca; la etiqueta no describe una liberación modificada.',
          ref: { f: 'dailymed-ivermectina', sec: '11 · Descripción', cita: 'semisynthetic, anthelmintic agent for oral administration', codigo: '34089-3' }
        },
        {
          t: 'Es una mezcla con al menos un 90 % del componente H2B1a y menos de un 10 % de H2B1b; la identidad química de la ficha es la del componente principal.',
          ref: { f: 'dailymed-ivermectina', sec: '11 · Descripción', cita: 'Ivermectin is a mixture containing at least 90%', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras 12 mg en ayunas, la concentración máxima del componente principal (H2B1a) llegó hacia las 4 horas. Con una comida rica en grasa, la biodisponibilidad aumentó unas 2,5 veces (dosis de 30 mg).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras 12 mg en ayunas, la concentración máxima del componente principal (H2B1a) llegó hacia las 4 horas. Con una comida rica en grasa, la biodisponibilidad aumentó unas 2,5 veces (dosis de 30 mg).',
          ref: { f: 'dailymed-ivermectina', sec: '12.3 · Farmacocinética', cita: 'at approximately 4 hours after dosing', codigo: '43682-4' }
        },
        {
          t: 'Una comida rica en grasa aumentó la biodisponibilidad unas 2,5 veces frente al ayuno.',
          ref: {
            f: 'dailymed-ivermectina',
            sec: '12.3 · Farmacocinética',
            cita: 'resulted in an approximate 2.5-fold increase in bioavailability relative to administration of 30 mg ivermectin in the fasted state',
            codigo: '43682-4'
          },
          condiciones: 'dosis de 30 mg'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Llega a la sangre: en voluntarios sanos en ayunas que tomaron 12 mg, la concentración máxima media del componente principal fue de 46,6 y 30,6 ng/mL en dos estudios. La etiqueta no describe su reparto por los tejidos.',
      sigue: 'La sangre lo lleva al hígado, donde se transforma.',
      datos: [
        {
          t: 'Llega a la sangre: en voluntarios sanos en ayunas que tomaron 12 mg, la concentración máxima media del componente principal fue de 46,6 y 30,6 ng/mL en dos estudios. La etiqueta no describe su reparto por los tejidos.',
          ref: {
            f: 'dailymed-ivermectina',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean peak plasma concentrations of the major component',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de cloruro activados por glutamato del parásito',
        efecto: 'Se une de forma selectiva y con gran afinidad a canales de cloruro activados por glutamato de los nervios y músculos de los invertebrados: las células se hiperpolarizan y el parásito queda paralizado y muere.',
        lugar: [ 'sitio-infeccion', 'luz-intestinal' ],
        datos: [
          {
            t: 'Se une de forma selectiva y con gran afinidad a canales de cloruro activados por glutamato de los nervios y músculos de los invertebrados: las células se hiperpolarizan y el parásito queda paralizado y muere.',
            ref: {
              f: 'dailymed-ivermectina',
              sec: '12.4 · Microbiología',
              cita: 'bind selectively and with high affinity to glutamate-gated chloride ion channels which occur in invertebrate nerve and muscle cells',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado lo transforma, sobre todo mediante CYP3A4 según estudios in vitro; CYP2D6 y CYP2E1 contribuyen mucho menos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado lo transforma, sobre todo mediante CYP3A4 según estudios in vitro; CYP2D6 y CYP2E1 contribuyen mucho menos.',
          ref: { f: 'dailymed-ivermectina', sec: '12.3 · Farmacocinética', cita: 'Ivermectin is metabolized in the liver', codigo: '43682-4' }
        },
        {
          t: 'CYP3A4 es la enzima principal en estudios in vitro.',
          ref: { f: 'dailymed-ivermectina', sec: '12.3 · Farmacocinética', cita: 'ivermectin is primarily metabolized by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La ivermectina y sus metabolitos salen casi solo por las heces, a lo largo de unos 12 días; menos del 1 % por la orina. Su semivida en el plasma es de unas 18 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La ivermectina y sus metabolitos salen casi solo por las heces, a lo largo de unos 12 días; menos del 1 % por la orina. Su semivida en el plasma es de unas 18 horas.',
          ref: {
            f: 'dailymed-ivermectina',
            sec: '12.3 · Farmacocinética',
            cita: 'excreted almost exclusively in the feces over an estimated 12 days',
            codigo: '43682-4'
          }
        },
        {
          t: 'Menos del 1 % de la dosis sale por la orina.',
          ref: {
            f: 'dailymed-ivermectina',
            sec: '12.3 · Farmacocinética',
            cita: 'with less than 1% of the administered dose excreted in the urine',
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
      valor: '46,6 (DE 21,9) y 30,6 (DE 15,6)',
      unidad: 'ng/mL',
      analito: 'componente principal H2B1a',
      poblacion: 'voluntarios sanos en ayunas',
      condiciones: 'dosis única de 12 mg; dos estudios',
      ref: {
        f: 'dailymed-ivermectina',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean peak plasma concentrations of the major component',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'componente principal H2B1a',
      poblacion: 'voluntarios sanos en ayunas',
      condiciones: 'dosis única de 12 mg',
      ref: { f: 'dailymed-ivermectina', sec: '12.3 · Farmacocinética', cita: 'at approximately 4 hours after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '18 (aprox.)',
      unidad: 'h',
      analito: 'ivermectina',
      ref: {
        f: 'dailymed-ivermectina',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma half-life of ivermectin in man is approximately 18 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina',
      valor: '< 1',
      unidad: '% de la dosis',
      analito: 'ivermectina y metabolitos',
      ref: {
        f: 'dailymed-ivermectina',
        sec: '12.3 · Farmacocinética',
        cita: 'with less than 1% of the administered dose excreted in the urine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la biodisponibilidad con una comida rica en grasa',
      valor: '2,5 (aprox.)',
      unidad: 'veces',
      analito: 'ivermectina',
      condiciones: '30 mg tras una comida rica en grasa frente a 30 mg en ayunas',
      ref: {
        f: 'dailymed-ivermectina',
        sec: '12.3 · Farmacocinética',
        cita: 'resulted in an approximate 2.5-fold increase in bioavailability',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ivermectina', '681888c9-af79-4b7d-ae80-c3f4f6f1effd', 'STROMECTOL (IVERMECTIN) TABLET', 'STROMECTOL', '21', '2026-11-02', '2026-11-12'),
    rengPubchem(6321424, 'ivermectin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
