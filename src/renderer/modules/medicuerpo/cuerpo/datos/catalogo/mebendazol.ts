import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mebendazol',
    nombre: 'Mebendazol',
    clase: 'Antihelmíntico (bencimidazol)',
    sinonimos: [ 'mebendazole', 'Emverm' ],
    formula: 'C16H13N3O3',
    masaMolar: 295.29,
    smiles: 'COC(=O)NC1=NC2=C(N1)C=C(C=C2)C(=O)C3=CC=CC=C3',
    inchikey: 'OPXLLQIJSORQAM-UHFFFAOYSA-N',
    cid: 4030,
    iupac: 'methyl N-(6-benzoyl-1H-benzimidazol-2-yl)carbamate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'mebendazol-oral',
      producto: 'Emverm · comprimido masticable',
      titular: 'AMNEAL PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido masticable',
      formaFuente: 'TABLET, CHEWABLE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [
        'magnesium stearate',
        'microcrystalline cellulose',
        'anhydrous lactose',
        'stearic acid',
        'sodium lauryl sulfate',
        'saccharin sodium',
        'fd&c yellow no. 6',
        'starch, corn',
        'sodium starch glycolate type a potato'
      ],
      usos: {
        t: 'Infecciones intestinales por anquilostomas, áscaris, oxiuros y tricocéfalos desde los 2 años.',
        ref: {
          f: 'dailymed-mebendazol',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of patients two years of age and older with gastrointestinal infections',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mebendazol',
      advertencias: [
        {
          titulo: 'Convulsiones en lactantes',
          texto: 'Se han notificado convulsiones en menores de 1 año tras su comercialización.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-mebendazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'convulsions have been reported in infants below the age of 1 year',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Falta de apetito, dolor abdominal, diarrea, flatulencia, náuseas, vómitos y erupción en los ensayos clínicos.',
          '34084-4',
          'were anorexia, abdominal pain, diarrhea, flatulence, nausea, vomiting and rash'
        ],
        [ 'Datos de seguridad de 6276 personas en ensayos clínicos.', '34084-4', 'The safety of mebendazole was evaluated in 6276 subjects' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido masticable: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Infecciones intestinales por anquilostomas, áscaris, oxiuros y tricocéfalos desde los 2 años.',
    actua: 'Interfiere con la formación de tubulina en las células del gusano y daña su intestino: el parásito deja de captar glucosa, se inmoviliza, no pone huevos y muere.',
    recorrido: 'La mayor parte de la dosis se queda en el tubo digestivo, donde actúa; en sangre, tras 100 mg dos veces al día durante tres días, el mebendazol no supera 0,03 mcg/mL. Menos del 2 % sale por la orina; el resto, por las heces, sin cambios o como metabolitos. Su semivida aparente es de 3 a 6 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      organosGenerales: [ 'esofago', 'estomago' ],
      llega: 'El comprimido masticable se mastica en la boca y se traga.',
      ocurre: 'Comprimido masticable.',
      sigue: 'Los restos del comprimido llegan al estómago y al intestino.',
      datos: [
        {
          t: 'Comprimido masticable.',
          ref: { f: 'dailymed-mebendazol', sec: '3 · Formas y concentraciones', cita: '100 mg, round, light peach-colored, unscored', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      organosGenerales: [],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mayor parte de la dosis se queda en el tubo digestivo, donde actúa; en sangre, tras 100 mg dos veces al día durante tres días, el mebendazol no supera 0,03 mcg/mL.',
      sigue: 'Casi todo sigue dentro del tubo digestivo, donde actúa.',
      datos: [
        {
          t: 'La mayor parte de la dosis se queda en el tubo digestivo, donde actúa; en sangre, tras 100 mg dos veces al día durante tres días, el mebendazol no supera 0,03 mcg/mL.',
          ref: {
            f: 'dailymed-mebendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'the majority of the dose remains in the gastrointestinal tract where it exerts an anthelmintic effect locally',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'luz-intestinal', 'sangre' ],
      llega: 'El mebendazol actúa dentro del intestino; solo una parte pequeña pasa a la sangre.',
      ocurre: 'La parte que se absorbe se une a proteínas en un 90-95 % y sale de los vasos (volumen de 1 a 2 L/kg).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La parte que se absorbe se une a proteínas en un 90-95 % y sale de los vasos (volumen de 1 a 2 L/kg).',
          ref: {
            f: 'dailymed-mebendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'indicating that absorbed mebendazole penetrates areas outside the vascular space',
            codigo: '43682-4'
          }
        },
        {
          t: 'Unión a proteínas del 90 % al 95 %.',
          ref: {
            f: 'dailymed-mebendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of mebendazole is 90 to 95%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tubulina del parásito',
        efecto: 'Interfiere con la formación de tubulina en las células del gusano y daña su intestino: el parásito deja de captar glucosa, se inmoviliza, no pone huevos y muere.',
        lugar: [ 'luz-intestinal' ],
        datos: [
          {
            t: 'Interfiere con la formación de tubulina en las células del gusano y daña su intestino: el parásito deja de captar glucosa, se inmoviliza, no pone huevos y muere.',
            ref: {
              f: 'dailymed-mebendazol',
              sec: '12.4 · Microbiología',
              cita: 'Mebendazole interferes with cellular tubulin formation in the helminth',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo absorbido se metaboliza ampliamente en el hígado; sus metabolitos (formas hidrolizadas y reducidas) no tienen actividad antihelmíntica.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo absorbido se metaboliza ampliamente en el hígado; sus metabolitos (formas hidrolizadas y reducidas) no tienen actividad antihelmíntica.',
          ref: {
            f: 'dailymed-mebendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Orally administered mebendazole is extensively metabolized primarily by the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito 2-amino (hidrolizado)',
          actividad: 'inactivo',
          ref: { f: 'dailymed-mebendazol', sec: '12.3 · Farmacocinética', cita: 'All metabolites are devoid of anthelmintic activity', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Menos del 2 % sale por la orina; el resto, por las heces, sin cambios o como metabolitos. Su semivida aparente es de 3 a 6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Menos del 2 % sale por la orina; el resto, por las heces, sin cambios o como metabolitos. Su semivida aparente es de 3 a 6 horas.',
          ref: {
            f: 'dailymed-mebendazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Less than 2% of orally administered mebendazole is excreted in urine and the remainder in the feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima',
      valor: '≤ 0,03',
      unidad: 'mcg/mL',
      analito: 'mebendazol',
      condiciones: '100 mg dos veces al día durante 3 días',
      ref: { f: 'dailymed-mebendazol', sec: '12.3 · Farmacocinética', cita: 'do not exceed 0.03 mcg/mL and 0.09 mcg/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima',
      valor: '≤ 0,09',
      unidad: 'mcg/mL',
      analito: 'metabolito 2-amino (inactivo)',
      condiciones: '100 mg dos veces al día durante 3 días',
      ref: { f: 'dailymed-mebendazol', sec: '12.3 · Farmacocinética', cita: 'do not exceed 0.03 mcg/mL and 0.09 mcg/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '90-95',
      unidad: '%',
      analito: 'mebendazol',
      ref: { f: 'dailymed-mebendazol', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding of mebendazole is 90 to 95%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida aparente',
      valor: '3-6',
      unidad: 'h',
      analito: 'mebendazol',
      ref: {
        f: 'dailymed-mebendazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent elimination half-life after an oral dose ranges from 3 to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina',
      valor: '< 2',
      unidad: '% de la dosis',
      analito: 'mebendazol',
      ref: {
        f: 'dailymed-mebendazol',
        sec: '12.3 · Farmacocinética',
        cita: 'Less than 2% of orally administered mebendazole is excreted in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mebendazol', 'a8c46363-f739-4f6e-bca8-1ce5e8d3f78d', 'EMVERM (MEBENDAZOLE) TABLET, CHEWABLE', 'Emverm', '11', '2026-09-24', '2026-11-12'),
    rengPubchem(4030, 'mebendazole', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
