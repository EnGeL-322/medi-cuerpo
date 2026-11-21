import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ursodiol',
    nombre: 'Ursodiol',
    clase: 'Ácido biliar hidrófilo',
    sinonimos: [ 'ursodeoxycholic acid', 'ácido ursodesoxicólico', 'Urso' ],
    formula: 'C24H40O4',
    masaMolar: 392.6,
    smiles: 'C[C@H](CCC(=O)O)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2[C@H](C[C@H]4[C@@]3(CC[C@H](C4)O)C)O)C',
    inchikey: 'RUDATBOHQWOJDD-UZVSRGJWSA-N',
    cid: 31401,
    iupac: '(4R)-4-[(3R,5S,7S,8R,9S,10S,13R,14S,17R)-3,7-dihydroxy-10,13-dimethyl-2,3,4,5,6,7,8,9,11,12,14,15,16,17-tetradecahydro-1H-cyclopenta[a]phenanthren-17-yl]pentanoic acid',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'ursodiol-oral',
      producto: 'Urso 250 · comprimido recubierto con película',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '250 mg o 500 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'povidone, unspecified',
        'polyethylene glycol 3350',
        'magnesium stearate',
        'hypromellose, unspecified',
        'ethylcellulose, unspecified',
        'dibutyl sebacate',
        'polyethylene glycol 8000',
        'carnauba wax',
        'sodium starch glycolate type a',
        'cetyl alcohol',
        'sodium lauryl sulfate',
        'hydrogen peroxide'
      ],
      usos: {
        t: 'Colangitis biliar primaria.',
        ref: {
          f: 'dailymed-ursodiol',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of patients with primary biliary cholangitis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ursodiol',
      advertencias: [
        {
          titulo: 'Pruebas hepáticas',
          texto: 'Hay que vigilar cada mes durante tres meses las pruebas hepáticas y la bilirrubina.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-ursodiol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Liver function tests (γ-GT, alkaline phosphatase, AST, ALT) and bilirubin levels should be monitored every month for three months',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enterolitos',
          texto: 'Se han descrito casos raros de enterolitos con el tratamiento.',
          organos: [ 'intestino-delgado' ],
          ref: {
            f: 'dailymed-ursodiol',
            sec: '5 · Advertencias y precauciones',
            cita: 'There have been rare postmarketing reports of URSO-treated patients who developed enteroliths',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con frecuencia (≥ 1 %): molestias y dolor abdominal, alopecia, diarrea, náuseas, picor y erupción.',
          '34084-4',
          'abdominal discomfort, abdominal pain, alopecia, diarrhea, nausea, pruritus, and rash'
        ],
        [
          'En dos ensayos con placebo, a los 24 meses hubo casos aislados de leucopenia, trombocitopenia, erupción y glucosa elevada.',
          '34084-4',
          'Thrombocytopenia --- --- 1 (1.32)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 250 mg o 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Colangitis biliar primaria.',
    actua: 'Es un ácido biliar hidrófilo que, al tomarlo, pasa a ser el ácido biliar principal y desplaza a los ácidos biliares hidrófobos tóxicos que se acumulan en la colestasis; además protege las células de los conductos biliares.',
    recorrido: 'Casi todo se absorbe por difusión pasiva y la absorción es incompleta; la parte no absorbida pasa al colon. Sale sobre todo por las heces; la excreción urinaria sigue por debajo del 1 % salvo colestasis grave.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 250 mg o ranurado de 500 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 250 mg o ranurado de 500 mg.',
          ref: { f: 'dailymed-ursodiol', sec: '3 · Formas y concentraciones', cita: 'URSO 250: 250 mg tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Casi todo se absorbe por difusión pasiva y la absorción es incompleta; la parte no absorbida pasa al colon.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Casi todo se absorbe por difusión pasiva y la absorción es incompleta; la parte no absorbida pasa al colon.',
          ref: {
            f: 'dailymed-ursodiol',
            sec: '12.3 · Farmacocinética',
            cita: 'the majority of ursodiol is absorbed by passive diffusion and its absorption is incomplete',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'bilis', 'intestino-delgado' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Al menos el 70 % del ursodiol sin conjugar va unido a proteínas del plasma; se reparte sobre todo por la bilis y el intestino delgado.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Al menos el 70 % del ursodiol sin conjugar va unido a proteínas del plasma; se reparte sobre todo por la bilis y el intestino delgado.',
          ref: {
            f: 'dailymed-ursodiol',
            sec: '12.3 · Farmacocinética',
            cita: 'at least 70% of ursodiol (unconjugated) is bound to plasma protein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Ácidos biliares hidrófobos y células de los conductos biliares',
        efecto: 'Es un ácido biliar hidrófilo que, al tomarlo, pasa a ser el ácido biliar principal y desplaza a los ácidos biliares hidrófobos tóxicos que se acumulan en la colestasis; además protege las células de los conductos biliares.',
        lugar: [ 'higado', 'bilis' ],
        datos: [
          {
            t: 'Es un ácido biliar hidrófilo que, al tomarlo, pasa a ser el ácido biliar principal y desplaza a los ácidos biliares hidrófobos tóxicos que se acumulan en la colestasis; además protege las células de los conductos biliares.',
            ref: {
              f: 'dailymed-ursodiol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ursodiol, a naturally occurring hydrophilic bile acid',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'bilis', 'intestino-grueso' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En el hígado se conjuga con glicina o taurina y se secreta en la bilis; en el colon, el no absorbido se transforma sobre todo en ácido litocólico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En el hígado se conjuga con glicina o taurina y se secreta en la bilis; en el colon, el no absorbido se transforma sobre todo en ácido litocólico.',
          ref: {
            f: 'dailymed-ursodiol',
            sec: '12.3 · Farmacocinética',
            cita: 'ursodiol is conjugated with glycine or taurine, then secreted into bile',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Conjugados con glicina o taurina',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-ursodiol',
            sec: '12.3 · Farmacocinética',
            cita: 'ursodiol is conjugated with glycine or taurine, then secreted into bile',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Ácido litocólico (formado en el colon)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-ursodiol',
            sec: '12.3 · Farmacocinética',
            cita: 'Nonabsorbed ursodiol passes into the colon where it is mostly 7-dehydroxylated to lithocholic acid',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por las heces; la excreción urinaria sigue por debajo del 1 % salvo colestasis grave.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por las heces; la excreción urinaria sigue por debajo del 1 % salvo colestasis grave.',
          ref: { f: 'dailymed-ursodiol', sec: '12.3 · Farmacocinética', cita: 'Ursodiol is excreted primarily in the feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas (sin conjugar)',
      valor: '≥ 70',
      unidad: '%',
      analito: 'ursodiol sin conjugar',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-ursodiol',
        sec: '12.3 · Farmacocinética',
        cita: 'at least 70% of ursodiol (unconjugated) is bound to plasma protein',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Extracción hepática',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'ursodiol',
      poblacion: 'sin enfermedad hepática',
      ref: { f: 'dailymed-ursodiol', sec: '12.3 · Farmacocinética', cita: 'undergoes hepatic extraction to the extent of about 50%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excreción urinaria',
      valor: '< 1',
      unidad: '% de la dosis',
      analito: 'ursodiol',
      ref: {
        f: 'dailymed-ursodiol',
        sec: '12.3 · Farmacocinética',
        cita: 'remains less than 1% except in severe cholestatic liver disease',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ursodiol', 'e8fc4fc2-fe5c-4cba-b6e0-5ceaf2157a61', 'URSO 250 (URSODIOL) TABLET, FILM COATED URSO FORTE (URSODIOL) TABLET, FILM COATED', 'Urso 250', '19', '2025-07-08', '2026-11-12'),
    rengPubchem(31401, 'ursodeoxycholic acid', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
