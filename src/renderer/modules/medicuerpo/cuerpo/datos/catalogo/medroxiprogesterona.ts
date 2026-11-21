import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'medroxiprogesterona',
    nombre: 'Acetato de medroxiprogesterona',
    clase: 'Progestágeno',
    sinonimos: [ 'acetato de medroxiprogesterona', 'medroxiprogesterona', 'medroxyprogesterone acetate', 'Provera' ],
    formula: 'C24H34O4',
    masaMolar: 386.5,
    smiles: 'C[C@H]1C[C@@H]2[C@H](CC[C@]3([C@H]2CC[C@@]3(C(=O)C)OC(=O)C)C)[C@@]4(C1=CC(=O)CC4)C',
    inchikey: 'PSGAAPLEWMOORI-PEINSRQWSA-N',
    cid: 6279,
    iupac: '[(6S,8R,9S,10R,13S,14S,17R)-17-acetyl-6,10,13-trimethyl-3-oxo-2,6,7,8,9,11,12,14,15,16-decahydro-1H-cyclopenta[a]phenanthren-17-yl] acetate',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'medroxiprogesterona-oral',
      producto: 'Provera · comprimido',
      titular: 'PHARMACIA & UPJOHN COMPANY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta',
      excipientes: [ 'calcium stearate', 'starch, corn', 'lactose, unspecified form', 'mineral oil', 'sorbic acid', 'sucrose', 'talc', 'fd&c yellow no. 6' ],
      usos: {
        t: 'La presentación oral se indica para amenorrea secundaria y ciertos sangrados uterinos de origen hormonal cuando se excluye patología orgánica.',
        ref: {
          f: 'dailymed-medroxiprogesterona',
          sec: '1 · Indicaciones',
          cita: 'treatment of secondary amenorrhea and abnormal uterine bleeding due to hormonal imbalance',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-medroxiprogesterona',
      advertencias: [
        {
          titulo: 'Advertencia en combinación con estrógenos',
          texto: 'La advertencia destacada de la ficha se refiere a riesgos cardiovasculares, cáncer de mama y posible demencia con la combinación de estrógeno y progestágeno.',
          organos: [ 'corazon', 'vasos', 'mama', 'encefalo' ],
          ref: {
            f: 'dailymed-medroxiprogesterona',
            sec: 'Advertencia destacada',
            cita: 'CARDIOVASCULAR DISORDERS, BREAST CANCER AND PROBABLE DEMENTIA FOR ESTROGEN PLUS PROGESTIN THERAPY',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Sangrado uterino irregular y cambios menstruales.',
          '34084-4',
          'Abnormal uterine bleeding (irregular, increase, decrease), change in menstrual'
        ],
        [ 'Picor y erupción cutánea, incluidos entre los efectos descritos.', '34084-4', 'hirsutism; pruritus, rash' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'La presentación oral se indica para amenorrea secundaria y ciertos sangrados uterinos de origen hormonal cuando se excluye patología orgánica.',
    actua: 'En presencia de estrógeno endógeno suficiente, convierte el endometrio proliferativo en secretor.',
    recorrido: 'Se absorbe rápidamente desde el tubo digestivo. El pico se obtiene entre 2 y 4 h. La ficha no dispone de biodisponibilidad absoluta. Los metabolitos salen sobre todo por orina como glucurónidos, con cantidades menores de sulfatos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral de Provera.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral de Provera.',
          ref: {
            f: 'dailymed-medroxiprogesterona',
            sec: '11 · Descripción',
            cita: 'PROVERA ® tablets contain medroxyprogesterone acetate',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente desde el tubo digestivo. El pico se obtiene entre 2 y 4 h. La ficha no dispone de biodisponibilidad absoluta.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente desde el tubo digestivo. El pico se obtiene entre 2 y 4 h. La ficha no dispone de biodisponibilidad absoluta.',
          ref: {
            f: 'dailymed-medroxiprogesterona',
            sec: '12.3 · Farmacocinética',
            cita: 'maximum MPA concentrations are obtained between 2 to 4 hours',
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
      ocurre: 'La unión a proteínas es aproximadamente del 90 %, principalmente a albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas es aproximadamente del 90 %, principalmente a albúmina.',
          ref: {
            f: 'dailymed-medroxiprogesterona',
            sec: '12.3 · Farmacocinética',
            cita: 'MPA is approximately 90% protein bound, primarily to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Endometrio',
        efecto: 'En presencia de estrógeno endógeno suficiente, convierte el endometrio proliferativo en secretor.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'En presencia de estrógeno endógeno suficiente, convierte el endometrio proliferativo en secretor.',
            ref: {
              f: 'dailymed-medroxiprogesterona',
              sec: '12 · Farmacología clínica',
              cita: 'transforms proliferative into secretory endometrium',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma de forma extensa en el hígado mediante hidroxilación y conjugación posterior.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma de forma extensa en el hígado mediante hidroxilación y conjugación posterior.',
          ref: {
            f: 'dailymed-medroxiprogesterona',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively metabolized in the liver via hydroxylation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Los metabolitos salen sobre todo por orina como glucurónidos, con cantidades menores de sulfatos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Los metabolitos salen sobre todo por orina como glucurónidos, con cantidades menores de sulfatos.',
          ref: {
            f: 'dailymed-medroxiprogesterona',
            sec: '12.3 · Farmacocinética',
            cita: 'excreted in the urine as glucuronide conjugates',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico',
      valor: '2–4',
      unidad: 'h',
      analito: 'acetato de medroxiprogesterona',
      ref: {
        f: 'dailymed-medroxiprogesterona',
        sec: '12.3 · Farmacocinética',
        cita: 'maximum MPA concentrations are obtained between 2 to 4 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-medroxiprogesterona', 'a586be28-96af-4fed-a13f-9b94fd4c7405', 'PROVERA (MEDROXYPROGESTERONE ACETATE) TABLET', 'Provera', '27', '2026-06-30', '2026-11-12'),
    rengPubchem(6279, 'acetato de medroxiprogesterona', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
