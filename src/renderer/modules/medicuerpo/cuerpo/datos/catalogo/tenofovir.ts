import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tenofovir',
    nombre: 'Tenofovir disoproxilo',
    clase: 'Antiviral (análogo de nucleótido, inhibidor de la transcriptasa inversa)',
    sinonimos: [ 'tenofovir disoproxil fumarate', 'TDF', 'Viread' ],
    formula: 'C19H30N5O10P',
    masaMolar: 519.4,
    smiles: 'C[C@H](CN1C=NC2=C(N=CN=C21)N)OCP(=O)(OCOC(=O)OC(C)C)OCOC(=O)OC(C)C',
    inchikey: 'JFVZFKDSXNQEJW-CQSZACIVSA-N',
    cid: 5481350,
    iupac: '[[(2R)-1-(6-aminopurin-9-yl)propan-2-yl]oxymethyl-(propan-2-yloxycarbonyloxymethoxy)phosphoryl]oxymethyl propan-2-yl carbonate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'tenofovir-oral',
      producto: 'Viread · comprimido recubierto',
      titular: 'GILEAD SCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg, 200 mg, 250 mg o 300 mg de fumarato de tenofovir disoproxilo por comprimido',
      sal: {
        nombre: 'Fumarato de tenofovir disoproxilo',
        ref: { f: 'dailymed-tenofovir', sec: '11 · Descripción', cita: 'tenofovir disoproxil fumarate (TDF)', codigo: '34089-3' }
      },
      excipientes: [
        'starch, corn',
        'croscarmellose sodium',
        'lactose monohydrate',
        'microcrystalline cellulose',
        'magnesium stearate',
        'titanium dioxide',
        'triacetin',
        'hypromellose 2910 (15000 mpa.s)'
      ],
      usos: {
        t: 'Infección por VIH-1, junto con otros antirretrovirales, y hepatitis B crónica, en adultos y niños desde 2 años y 10 kg.',
        ref: {
          f: 'dailymed-tenofovir',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of chronic hepatitis B in adults and pediatric patients 2 years and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tenofovir',
      advertencias: [
        {
          titulo: 'Reactivación de la hepatitis B',
          texto: 'Al suspenderlo se han descrito exacerbaciones agudas graves de la hepatitis B.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-tenofovir',
            sec: 'Advertencia destacada',
            cita: 'Severe acute exacerbations of hepatitis B virus (HBV) have been reported in HBV-infected patients who have discontinued anti-hepatitis B therapy',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Daño renal',
          texto: 'Se ha descrito insuficiencia renal aguda y síndrome de Fanconi.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-tenofovir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Renal impairment, including cases of acute renal failure and Fanconi syndrome',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el VIH (≥ 10 %, grados 2-4): erupción, diarrea, náuseas, dolor de cabeza, dolor, depresión y debilidad.',
          '34084-4',
          'were rash, diarrhea, nausea, headache, pain, depression, and asthenia'
        ],
        [
          'En la hepatitis B compensada, la más frecuente fue la náusea (9 %).',
          '34084-4',
          'Most common adverse reaction (all grades) was nausea (9%)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 150 mg, 200 mg, 250 mg o 300 mg de fumarato de tenofovir disoproxilo por comprimido. Los excipientes no son el principio activo.',
    usos: 'Infección por VIH-1, junto con otros antirretrovirales, y hepatitis B crónica, en adultos y niños desde 2 años y 10 kg.',
    actua: 'Es un profármaco: se hidroliza a tenofovir, que las enzimas celulares fosforilan a difosfato; este compite con el sustrato natural e interrumpe la cadena de ADN que fabrican la transcriptasa inversa del VIH-1 y la del virus de la hepatitis B.',
    recorrido: 'Es un profármaco hidrosoluble: en ayunas, la biodisponibilidad oral del tenofovir es de alrededor del 25 %; con 300 mg, el pico llega hacia la hora. Una comida rica en grasa aumenta el AUC un 40 %. El tenofovir sale por la orina por filtración glomerular y secreción tubular activa; tras dosis múltiples, el 32 % de la dosis aparece en la orina en 24 horas. Su semivida terminal ronda las 17 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-tenofovir', sec: '3 · Formas y concentraciones', cita: 'triangle shaped, white, film coated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Es un profármaco hidrosoluble: en ayunas, la biodisponibilidad oral del tenofovir es de alrededor del 25 %; con 300 mg, el pico llega hacia la hora. Una comida rica en grasa aumenta el AUC un 40 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Es un profármaco hidrosoluble: en ayunas, la biodisponibilidad oral del tenofovir es de alrededor del 25 %; con 300 mg, el pico llega hacia la hora. Una comida rica en grasa aumenta el AUC un 40 %.',
          ref: {
            f: 'dailymed-tenofovir',
            sec: '12.3 · Farmacocinética',
            cita: 'The oral bioavailability of tenofovir from VIREAD in fasted subjects is approximately 25%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El tenofovir apenas se une a proteínas (menos del 0,7 % en plasma y del 7,2 % en suero); volumen de distribución de 1,2-1,3 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El tenofovir apenas se une a proteínas (menos del 0,7 % en plasma y del 7,2 % en suero); volumen de distribución de 1,2-1,3 L/kg.',
          ref: {
            f: 'dailymed-tenofovir',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro binding of tenofovir to human plasma or serum proteins is less than 0.7 and 7.2%, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transcriptasa inversa del VIH-1 y del VHB',
        efecto: 'Es un profármaco: se hidroliza a tenofovir, que las enzimas celulares fosforilan a difosfato; este compite con el sustrato natural e interrumpe la cadena de ADN que fabrican la transcriptasa inversa del VIH-1 y la del virus de la hepatitis B.',
        lugar: [ 'sitio-infeccion', 'higado' ],
        datos: [
          {
            t: 'Es un profármaco: se hidroliza a tenofovir, que las enzimas celulares fosforilan a difosfato; este compite con el sustrato natural e interrumpe la cadena de ADN que fabrican la transcriptasa inversa del VIH-1 y la del virus de la hepatitis B.',
            ref: {
              f: 'dailymed-tenofovir',
              sec: '12.4 · Microbiología',
              cita: 'Tenofovir diphosphate inhibits the activity of HIV-1 reverse transcriptase (RT) and HBV RT by competing with the natural substrate',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Requiere una hidrólisis inicial para convertirse en tenofovir; ni el profármaco ni el tenofovir son sustratos de las enzimas CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Requiere una hidrólisis inicial para convertirse en tenofovir; ni el profármaco ni el tenofovir son sustratos de las enzimas CYP.',
          ref: {
            f: 'dailymed-tenofovir',
            sec: '12.3 · Farmacocinética',
            cita: 'neither tenofovir disoproxil nor tenofovir are substrates of CYP enzymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Tenofovir',
          actividad: 'activo',
          nota: 'Se fosforila dentro de las células a difosfato de tenofovir.',
          ref: {
            f: 'dailymed-tenofovir',
            sec: '12 · Farmacología clínica',
            cita: 'requires initial diester hydrolysis for conversion to tenofovir',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El tenofovir sale por la orina por filtración glomerular y secreción tubular activa; tras dosis múltiples, el 32 % de la dosis aparece en la orina en 24 horas. Su semivida terminal ronda las 17 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El tenofovir sale por la orina por filtración glomerular y secreción tubular activa; tras dosis múltiples, el 32 % de la dosis aparece en la orina en 24 horas. Su semivida terminal ronda las 17 horas.',
          ref: {
            f: 'dailymed-tenofovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Tenofovir is eliminated by a combination of glomerular filtration and active tubular secretion',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral del tenofovir',
      valor: '25 (aprox.)',
      unidad: '%',
      analito: 'tenofovir',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-tenofovir',
        sec: '12.3 · Farmacocinética',
        cita: 'The oral bioavailability of tenofovir from VIREAD in fasted subjects is approximately 25%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1,0 (± 0,4)',
      unidad: 'h',
      analito: 'tenofovir',
      poblacion: 'personas con VIH-1',
      condiciones: 'dosis única de 300 mg en ayunas',
      ref: { f: 'dailymed-tenofovir', sec: '12.3 · Farmacocinética', cita: 'are achieved in 1.0 ± 0.4 hrs', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '0,30 (± 0,09)',
      unidad: 'µg/mL',
      analito: 'tenofovir',
      poblacion: 'personas con VIH-1',
      condiciones: 'dosis única de 300 mg en ayunas',
      ref: { f: 'dailymed-tenofovir', sec: '12.3 · Farmacocinética', cita: 'C max and AUC values are 0.30 ± 0.09 µg/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '17 (aprox.)',
      unidad: 'h',
      analito: 'tenofovir',
      ref: {
        f: 'dailymed-tenofovir',
        sec: '12.3 · Farmacocinética',
        cita: 'the terminal elimination half-life of tenofovir is approximately 17 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina en 24 h',
      valor: '32 (± 10)',
      unidad: '% de la dosis',
      analito: 'tenofovir',
      condiciones: 'dosis múltiples de 300 mg con comida',
      ref: {
        f: 'dailymed-tenofovir',
        sec: '12.3 · Farmacocinética',
        cita: '32 ± 10% of the administered dose is recovered in urine over 24 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tenofovir', '33fd6418-fbdc-42ca-a50d-ce2a476a5418', 'VIREAD (TENOFOVIR DISOPROXIL FUMARATE) TABLET, COATED VIREAD (TENOFOVIR DISOPROXIL FUMARATE) POWDER', 'Viread', '31', '2025-02-24', '2026-11-12'),
    rengPubchem(5481350, 'tenofovir disoproxil fumarate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
