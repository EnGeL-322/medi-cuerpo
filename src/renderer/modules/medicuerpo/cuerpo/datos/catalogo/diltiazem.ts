import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'diltiazem',
    nombre: 'Diltiazem',
    clase: 'Antagonista del calcio (benzotiacepina)',
    sinonimos: [ 'diltiazem', 'Cardizem' ],
    formula: 'C22H26N2O4S',
    masaMolar: 414.5,
    smiles: 'CC(=O)O[C@@H]1[C@@H](SC2=CC=CC=C2N(C1=O)CCN(C)C)C3=CC=C(C=C3)OC',
    inchikey: 'HSUGRBWQSSZJOP-RTWAWAEBSA-N',
    cid: 39186,
    iupac: '[(2S,3S)-5-[2-(dimethylamino)ethyl]-2-(4-methoxyphenyl)-4-oxo-2,3-dihydro-1,5-benzothiazepin-3-yl] acetate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'diltiazem-oral',
      producto: 'Cardizem · comprimido recubierto',
      titular: 'BAUSCH HEALTH US LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '30 mg, 60 mg, 90 mg o 120 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de diltiazem',
        ref: { f: 'dailymed-diltiazem', sec: '11 · Descripción', cita: 'diltiazem hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'lactose, unspecified form',
        'magnesium stearate',
        'methylparaben',
        'hypromellose, unspecified',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'hydroxypropyl cellulose, unspecified'
      ],
      usos: {
        t: 'Angina de pecho estable crónica y angina por espasmo de las arterias coronarias.',
        ref: {
          f: 'dailymed-diltiazem',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of chronic stable angina and angina due to coronary artery spasm',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-diltiazem',
      advertencias: [
        {
          titulo: 'Conducción cardiaca',
          texto: 'Alarga los periodos refractarios del nodo auriculoventricular; rara vez puede causar frecuencias muy lentas o bloqueo auriculoventricular de segundo o tercer grado.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-diltiazem',
            sec: 'Advertencias',
            cita: 'CARDIZEM prolongs AV node refractory periods without significantly prolonging sinus node recovery time',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Edema (2,4 %), dolor de cabeza (2,1 %), náuseas (1,9 %), mareo (1,5 %), erupción (1,3 %) y debilidad (1,2 %), las más comunes en los estudios de angina.',
          '34084-4',
          'are edema (2.4%), headache (2.1%), nausea (1.9%), dizziness (1.5%), rash (1.3%), and asthenia (1.2%)'
        ],
        [
          'La incidencia de reacciones no fue mayor que con placebo.',
          '34084-4',
          'incidence of adverse reactions reported during CARDIZEM therapy was not greater than that reported during placebo therapy'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 30 mg, 60 mg, 90 mg o 120 mg por comprimido, según la etiqueta; el activo va como clorhidrato de diltiazem. Los excipientes no son el principio activo.',
    usos: 'Angina de pecho estable crónica y angina por espasmo de las arterias coronarias.',
    actua: 'Inhibe la entrada de calcio en las células (bloqueante de los canales lentos). Dilata con fuerza las arterias coronarias y reduce la demanda de oxígeno del corazón al bajar la frecuencia cardiaca y la presión arterial.',
    recorrido: 'Se absorbe bien en el tubo digestivo, pero tiene un primer paso hepático amplio: biodisponibilidad absoluta del 40 %. Con 30 a 120 mg, aparece en el plasma en 30 a 60 minutos y el pico llega a las 2 a 4 horas. Sale sobre todo como metabolitos; del 2 % al 4 % sin cambios por la orina. Su semivida es de 3 a 4,5 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto; el diltiazem se libera casi como desde una solución.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto; el diltiazem se libera casi como desde una solución.',
          ref: {
            f: 'dailymed-diltiazem',
            sec: '12.3 · Farmacocinética',
            cita: 'Diltiazem is absorbed from the tablet formulation to about 98% of a reference solution',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien en el tubo digestivo, pero tiene un primer paso hepático amplio: biodisponibilidad absoluta del 40 %. Con 30 a 120 mg, aparece en el plasma en 30 a 60 minutos y el pico llega a las 2 a 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien en el tubo digestivo, pero tiene un primer paso hepático amplio: biodisponibilidad absoluta del 40 %. Con 30 a 120 mg, aparece en el plasma en 30 a 60 minutos y el pico llega a las 2 a 4 horas.',
          ref: {
            f: 'dailymed-diltiazem',
            sec: '12.3 · Farmacocinética',
            cita: 'Diltiazem is well absorbed from the gastrointestinal tract and is subject to an extensive first-pass effect',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico plasmático entre 2 y 4 horas tras dosis únicas de 30 a 120 mg.',
          ref: {
            f: 'dailymed-diltiazem',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma levels 2 to 4 hours after drug administration',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'corazon' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'En estudios in vitro, entre el 70 % y el 80 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En estudios in vitro, entre el 70 % y el 80 % se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-diltiazem',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro binding studies show CARDIZEM is 70% to 80% bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de calcio lentos',
        efecto: 'Inhibe la entrada de calcio en las células (bloqueante de los canales lentos). Dilata con fuerza las arterias coronarias y reduce la demanda de oxígeno del corazón al bajar la frecuencia cardiaca y la presión arterial.',
        lugar: [ 'corazon', 'vasos' ],
        datos: [
          {
            t: 'Inhibe la entrada de calcio en las células (bloqueante de los canales lentos). Dilata con fuerza las arterias coronarias y reduce la demanda de oxígeno del corazón al bajar la frecuencia cardiaca y la presión arterial.',
            ref: {
              f: 'dailymed-diltiazem',
              sec: '12.1 · Mecanismo de acción',
              cita: 'has been shown to be a potent dilator of coronary arteries both epicardial and subendocardial',
              codigo: '43679-0'
            }
          },
          {
            t: 'Reduce la demanda de oxígeno del miocardio.',
            ref: {
              f: 'dailymed-diltiazem',
              sec: '12.1 · Mecanismo de acción',
              cita: 'probably due to its ability to reduce myocardial oxygen demand',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente: solo del 2 % al 4 % aparece sin cambios en la orina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente: solo del 2 % al 4 % aparece sin cambios en la orina.',
          ref: {
            f: 'dailymed-diltiazem',
            sec: '12.3 · Farmacocinética',
            cita: 'undergoes extensive metabolism in which 2% to 4% of the unchanged drug appears in the urine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo como metabolitos; del 2 % al 4 % sin cambios por la orina. Su semivida es de 3 a 4,5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo como metabolitos; del 2 % al 4 % sin cambios por la orina. Su semivida es de 3 a 4,5 horas.',
          ref: {
            f: 'dailymed-diltiazem',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma elimination half-life following single or multiple drug administration is approximately 3.0 to 4.5 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'diltiazem',
      ref: {
        f: 'dailymed-diltiazem',
        sec: '12.3 · Farmacocinética',
        cita: 'giving an absolute bioavailability (compared to intravenous dosing) of about 40%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2-4',
      unidad: 'h',
      analito: 'diltiazem',
      condiciones: 'dosis únicas de 30 a 120 mg',
      ref: { f: 'dailymed-diltiazem', sec: '12.3 · Farmacocinética', cita: 'peak plasma levels 2 to 4 hours after drug administration', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (in vitro)',
      valor: '70-80',
      unidad: '%',
      analito: 'diltiazem',
      ref: {
        f: 'dailymed-diltiazem',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro binding studies show CARDIZEM is 70% to 80% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '3,0-4,5',
      unidad: 'h',
      analito: 'diltiazem',
      ref: { f: 'dailymed-diltiazem', sec: '12.3 · Farmacocinética', cita: 'is approximately 3.0 to 4.5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '2-4',
      unidad: '% de la dosis',
      analito: 'diltiazem',
      ref: { f: 'dailymed-diltiazem', sec: '12.3 · Farmacocinética', cita: '2% to 4% of the unchanged drug appears in the urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-diltiazem', 'f3e7ecef-f360-4987-a4f5-933214130ab2', 'CARDIZEM (DILTIAZEM HYDROCHLORIDE) TABLET, COATED', 'Cardizem', '20', '2025-05-02', '2026-11-12'),
    rengPubchem(39186, 'diltiazem', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
