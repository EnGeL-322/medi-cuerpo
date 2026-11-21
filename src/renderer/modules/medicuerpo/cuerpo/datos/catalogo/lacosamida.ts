import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lacosamida',
    nombre: 'Lacosamida',
    clase: 'Antiepiléptico',
    sinonimos: [ 'lacosamide', 'Vimpat' ],
    formula: 'C13H18N2O3',
    masaMolar: 250.29,
    smiles: 'CC(=O)N[C@H](COC)C(=O)NCC1=CC=CC=C1',
    inchikey: 'VPPJLAIAVCUEMN-GFCCVEGCSA-N',
    cid: 219078,
    iupac: '(2R)-2-acetamido-N-benzyl-3-methoxypropanamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'lacosamida-oral',
      producto: 'Vimpat · comprimido recubierto con película',
      titular: 'UCB, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg, 150 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'crospovidone (120 .mu.m)',
        'hydroxypropyl cellulose (1600000 wamw)',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'ferric oxide red',
        'ferrosoferric oxide',
        'fd&c blue no. 2',
        'aluminum oxide',
        'indigotindisulfonate sodium'
      ],
      usos: {
        t: 'Crisis de inicio parcial desde el mes de edad y, como complemento, crisis tónico-clónicas generalizadas primarias desde los 4 años.',
        ref: {
          f: 'dailymed-lacosamida',
          sec: '1 · Indicaciones',
          cita: 'Treatment of partial-onset seizures in patients 1 month of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lacosamida',
      advertencias: [
        {
          titulo: 'Conducción cardiaca',
          texto: 'Puede alargar el intervalo PR según la dosis, con bloqueo auriculoventricular y taquiarritmia ventricular.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-lacosamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Dose-dependent prolongations in PR interval with VIMPAT have been observed',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pensamientos suicidas',
          texto: 'Los antiepilépticos aumentan el riesgo de pensamientos o conductas suicidas.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-lacosamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'increase the risk of suicidal thoughts or behavior in patients taking these drugs for any indication',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos (≥ 10 % y más que con placebo): visión doble, dolor de cabeza, mareo, náuseas y somnolencia.',
          '34084-4',
          'are diplopia, headache, dizziness, nausea, and somnolence'
        ],
        [
          'En niños, las reacciones son parecidas a las de los adultos.',
          '34084-4',
          'Pediatric patients: Adverse reactions are similar to those seen in adult patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg, 100 mg, 150 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Crisis de inicio parcial desde el mes de edad y, como complemento, crisis tónico-clónicas generalizadas primarias desde los 4 años.',
    actua: 'Su mecanismo no está del todo aclarado: en estudios in vitro potencia de forma selectiva la inactivación lenta de los canales de sodio dependientes de voltaje, lo que estabiliza las neuronas hiperexcitables.',
    recorrido: 'Se absorbe por completo, sin primer paso apreciable: biodisponibilidad cercana al 100 %. El pico llega en 1 a 4 horas y la comida no influye. Alrededor del 95 % de la radiactividad salió por la orina: un 40 % de la dosis sin cambios, un 30 % como O-desmetil y un 20 % como fracción polar desconocida. Su semivida es de unas 13 horas.'
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
          ref: { f: 'dailymed-lacosamida', sec: '3 · Formas y concentraciones', cita: 'pink, oval, film-coated, debossed with "SP"', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe por completo, sin primer paso apreciable: biodisponibilidad cercana al 100 %. El pico llega en 1 a 4 horas y la comida no influye.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo, sin primer paso apreciable: biodisponibilidad cercana al 100 %. El pico llega en 1 a 4 horas y la comida no influye.',
          ref: {
            f: 'dailymed-lacosamida',
            sec: '12.3 · Farmacocinética',
            cita: 'VIMPAT is completely absorbed after oral administration with negligible first-pass effect',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida no afecta a la velocidad ni a la cantidad absorbida.',
          ref: {
            f: 'dailymed-lacosamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Food does not affect the rate and extent of absorption',
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
      ocurre: 'Volumen de distribución de unos 0,6 L/kg, parecido al agua corporal total; se une a proteínas en menos del 15 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución de unos 0,6 L/kg, parecido al agua corporal total; se une a proteínas en menos del 15 %.',
          ref: { f: 'dailymed-lacosamida', sec: '12.3 · Farmacocinética', cita: 'VIMPAT is less than 15% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canales de sodio dependientes de voltaje',
        efecto: 'Su mecanismo no está del todo aclarado: en estudios in vitro potencia de forma selectiva la inactivación lenta de los canales de sodio dependientes de voltaje, lo que estabiliza las neuronas hiperexcitables.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo no está del todo aclarado: en estudios in vitro potencia de forma selectiva la inactivación lenta de los canales de sodio dependientes de voltaje, lo que estabiliza las neuronas hiperexcitables.',
            ref: {
              f: 'dailymed-lacosamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'lacosamide selectively enhances slow inactivation of voltage-gated sodium channels',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una parte se transforma (CYP3A4, CYP2C9 y CYP2C19) en O-desmetil-lacosamida, sin actividad farmacológica conocida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una parte se transforma (CYP3A4, CYP2C9 y CYP2C19) en O-desmetil-lacosamida, sin actividad farmacológica conocida.',
          ref: { f: 'dailymed-lacosamida', sec: '12.3 · Farmacocinética', cita: 'This metabolite has no known pharmacological activity', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'O-desmetil-lacosamida',
          actividad: 'inactivo',
          nota: 'Sin actividad farmacológica conocida; semivida de 15 a 23 horas.',
          ref: {
            f: 'dailymed-lacosamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma exposure of the major human metabolite, O-desmethyl-lacosamide, is approximately 10% of that of lacosamide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 95 % de la radiactividad salió por la orina: un 40 % de la dosis sin cambios, un 30 % como O-desmetil y un 20 % como fracción polar desconocida. Su semivida es de unas 13 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 95 % de la radiactividad salió por la orina: un 40 % de la dosis sin cambios, un 30 % como O-desmetil y un 20 % como fracción polar desconocida. Su semivida es de unas 13 horas.',
          ref: {
            f: 'dailymed-lacosamida',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 95% of radioactivity administered was recovered in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '100 (aprox.)',
      unidad: '%',
      analito: 'lacosamida',
      ref: {
        f: 'dailymed-lacosamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The oral bioavailability of VIMPAT tablets is approximately 100%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-4',
      unidad: 'h',
      analito: 'lacosamida',
      ref: {
        f: 'dailymed-lacosamida',
        sec: '12.3 · Farmacocinética',
        cita: 'occur approximately 1-to-4-hour post-dose after oral dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '13 (aprox.)',
      unidad: 'h',
      analito: 'lacosamida',
      ref: { f: 'dailymed-lacosamida', sec: '12.3 · Farmacocinética', cita: 'elimination half-life is approximately 13 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '15-23',
      unidad: 'h',
      analito: 'O-desmetil-lacosamida (metabolito)',
      ref: { f: 'dailymed-lacosamida', sec: '12.3 · Farmacocinética', cita: 'elimination half-life (15-23 hours)', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '< 15',
      unidad: '%',
      analito: 'lacosamida',
      ref: { f: 'dailymed-lacosamida', sec: '12.3 · Farmacocinética', cita: 'VIMPAT is less than 15% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '40 (aprox.)',
      unidad: '% de la dosis',
      analito: 'lacosamida',
      ref: { f: 'dailymed-lacosamida', sec: '12.3 · Farmacocinética', cita: 'unchanged lacosamide (approximately 40% of the dose)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lacosamida', '9e79b42c-38a3-4b2c-a196-a5a1948250e2', 'VIMPAT (LACOSAMIDE) TABLET, FILM COATED VIMPAT (LACOSAMIDE) INJECTION VIMPAT (LACOSAMIDE) SOLUTION', 'Vimpat', '63', '2026-05-13', '2026-11-12'),
    rengPubchem(219078, 'lacosamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
