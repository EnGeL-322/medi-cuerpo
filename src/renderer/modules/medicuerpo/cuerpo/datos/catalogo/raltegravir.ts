import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'raltegravir',
    nombre: 'Raltegravir',
    clase: 'Antirretroviral (inhibidor de la integrasa)',
    sinonimos: [ 'raltegravir', 'Isentress' ],
    formula: 'C20H21FN6O5',
    masaMolar: 444.4,
    smiles: 'CC1=NN=C(O1)C(=O)NC(C)(C)C2=NC(=C(C(=O)N2C)O)C(=O)NCC3=CC=C(C=C3)F',
    inchikey: 'CZFFBEXEKNGXKS-UHFFFAOYSA-N',
    cid: 54671008,
    iupac: 'N-[2-[4-[(4-fluorophenyl)methylcarbamoyl]-5-hydroxy-1-methyl-6-oxopyrimidin-2-yl]propan-2-yl]-5-methyl-1,3,4-oxadiazole-2-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'raltegravir-oral',
      producto: 'ISENTRESS · comprimido recubierto con película',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '400 mg o 600 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Raltegravir potásico', ref: { f: 'dailymed-raltegravir', sec: '11 · Descripción', cita: 'raltegravir potassium', codigo: '34089-3' } },
      excipientes: [
        'ferrosoferric oxide',
        'butylated hydroxytoluene',
        'anhydrous dibasic calcium phosphate',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'poloxamer 407',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'ferric oxide red',
        'sodium stearyl fumarate',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Infección por VIH-1, junto con otros antirretrovirales, en adultos y niños de al menos 2 kg.',
        ref: {
          f: 'dailymed-raltegravir',
          sec: '1 · Indicaciones',
          cita: 'indicated in combination with other antiretroviral agents for the treatment of HIV-1 infection in adult patients',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-raltegravir',
      advertencias: [
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Se han descrito reacciones cutáneas graves y mortales, como Stevens-Johnson y necrólisis epidérmica tóxica.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-raltegravir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe, potentially life-threatening, and fatal skin reactions have been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes de intensidad moderada o grave (≥ 2 %): insomnio, dolor de cabeza, mareo, náuseas y cansancio.',
          '34084-4',
          'are insomnia, headache, dizziness, nausea and fatigue'
        ],
        [ 'Subidas de la creatina cinasa; se han descrito miopatía y rabdomiólisis.', '34084-4', 'Myopathy and rhabdomyolysis have been reported' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 400 mg o 600 mg por comprimido, según la etiqueta; el activo va como raltegravir potásico. Los excipientes no son el principio activo.',
    usos: 'Infección por VIH-1, junto con otros antirretrovirales, en adultos y niños de al menos 2 kg.',
    actua: 'Inhibe la integrasa del VIH-1: impide que el ADN del virus se integre en el genoma de la célula y se forme el provirus.',
    recorrido: 'Con 400 mg dos veces al día, el pico llega hacia las 3 horas en ayunas; su biodisponibilidad absoluta no está establecida y el efecto de la comida depende de la grasa del menú. Alrededor del 51 % de la dosis sale por las heces (raltegravir, probablemente procedente del glucurónido secretado en la bilis) y el 32 % por la orina. Su semivida terminal aparente ronda las 9 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: {
            f: 'dailymed-raltegravir',
            sec: '3 · Formas y concentraciones',
            cita: 'pink, oval-shaped, film-coated tablets with "227" on one side',
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
      ocurre: 'Con 400 mg dos veces al día, el pico llega hacia las 3 horas en ayunas; su biodisponibilidad absoluta no está establecida y el efecto de la comida depende de la grasa del menú.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con 400 mg dos veces al día, el pico llega hacia las 3 horas en ayunas; su biodisponibilidad absoluta no está establecida y el efecto de la comida depende de la grasa del menú.',
          ref: {
            f: 'dailymed-raltegravir',
            sec: '12.3 · Farmacocinética',
            cita: 'is absorbed with a T max of approximately 3 hours postdose in the fasted state in healthy subjects',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 83 % se une a proteínas del plasma; se ha medido en el líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 83 % se une a proteínas del plasma; se ha medido en el líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-raltegravir',
            sec: '12.3 · Farmacocinética',
            cita: 'Raltegravir is approximately 83% bound to human plasma protein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Integrasa del VIH-1',
        efecto: 'Inhibe la integrasa del VIH-1: impide que el ADN del virus se integre en el genoma de la célula y se forme el provirus.',
        lugar: [ 'sitio-infeccion', 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Inhibe la integrasa del VIH-1: impide que el ADN del virus se integre en el genoma de la célula y se forme el provirus.',
            ref: {
              f: 'dailymed-raltegravir',
              sec: '12.4 · Microbiología',
              cita: 'Raltegravir inhibits the catalytic activity of HIV-1 integrase',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por glucuronidación; el raltegravir-glucurónido aparece en la orina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por glucuronidación; el raltegravir-glucurónido aparece en la orina.',
          ref: {
            f: 'dailymed-raltegravir',
            sec: '12.3 · Farmacocinética',
            cita: 'raltegravir and raltegravir-glucuronide, were detected in urine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Raltegravir-glucurónido',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-raltegravir',
            sec: '12.3 · Farmacocinética',
            cita: 'raltegravir and raltegravir-glucuronide, were detected in urine and accounted for approximately 9 and 23% of the dose',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 51 % de la dosis sale por las heces (raltegravir, probablemente procedente del glucurónido secretado en la bilis) y el 32 % por la orina. Su semivida terminal aparente ronda las 9 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 51 % de la dosis sale por las heces (raltegravir, probablemente procedente del glucurónido secretado en la bilis) y el 32 % por la orina. Su semivida terminal aparente ronda las 9 horas.',
          ref: {
            f: 'dailymed-raltegravir',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 51 and 32% of the dose was excreted in feces and urine, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'raltegravir',
      poblacion: 'personas sanas',
      condiciones: '400 mg dos veces al día en ayunas',
      ref: {
        f: 'dailymed-raltegravir',
        sec: '12.3 · Farmacocinética',
        cita: 'absorbed with a T max of approximately 3 hours postdose in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '83 (aprox.)',
      unidad: '%',
      analito: 'raltegravir',
      ref: {
        f: 'dailymed-raltegravir',
        sec: '12.3 · Farmacocinética',
        cita: 'Raltegravir is approximately 83% bound to human plasma protein',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '9 (aprox.)',
      unidad: 'h',
      analito: 'raltegravir',
      ref: {
        f: 'dailymed-raltegravir',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal half-life of raltegravir is approximately 9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces',
      valor: '51 (aprox.)',
      unidad: '% de la dosis',
      analito: 'raltegravir',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-raltegravir',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 51 and 32% of the dose was excreted in feces and urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-raltegravir', '89a5ec53-d956-4329-8004-0f40f51c88a3', 'ISENTRESS (RALTEGRAVIR) TABLET, FILM COATED ISENTRESS (RALTEGRAVIR) TABLET, CHEWABLE ISENTRESS (RALTEGRAVIR) GRANULE, FOR SUSPENSION', 'ISENTRESS', '71', '2026-10-15', '2026-11-12'),
    rengPubchem(54671008, 'raltegravir', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
