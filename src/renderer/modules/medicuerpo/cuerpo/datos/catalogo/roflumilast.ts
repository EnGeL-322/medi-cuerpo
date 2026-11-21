import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'roflumilast',
    nombre: 'Roflumilast',
    clase: 'Inhibidor selectivo de la fosfodiesterasa 4',
    sinonimos: [ 'roflumilast', 'Daliresp' ],
    formula: 'C17H14Cl2F2N2O3',
    masaMolar: 403.2,
    smiles: 'C1CC1COC2=C(C=CC(=C2)C(=O)NC3=C(C=NC=C3Cl)Cl)OC(F)F',
    inchikey: 'MNDBXUUTURYVHR-UHFFFAOYSA-N',
    cid: 449193,
    iupac: '3-(cyclopropylmethoxy)-N-(3,5-dichloro-4-pyridinyl)-4-(difluoromethoxy)benzamide',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'roflumilast-oral',
      producto: 'Daliresp · comprimido',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250 o 500 microgramos (mcg) por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'starch, corn', 'povidone, unspecified', 'magnesium stearate' ],
      usos: {
        t: 'Reducir el riesgo de exacerbaciones en la EPOC grave asociada a bronquitis crónica con antecedentes de exacerbaciones.',
        ref: {
          f: 'dailymed-roflumilast',
          sec: '1 · Indicaciones',
          cita: 'reduce the risk of COPD exacerbations in patients with severe COPD associated with chronic bronchitis and a history of exacerbations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-roflumilast',
      advertencias: [
        {
          titulo: 'Eventos psiquiátricos',
          texto: 'Se asocia a más reacciones psiquiátricas; hay que estar alerta ante insomnio, ansiedad, depresión o ideas suicidas.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-roflumilast',
            sec: '5 · Advertencias y precauciones',
            cita: 'alert for the emergence or worsening of insomnia, anxiety, depression, suicidal thoughts or other mood changes',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Broncoespasmo agudo',
          texto: 'No es un broncodilatador y no debe usarse para aliviar un broncoespasmo agudo.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-roflumilast',
            sec: '5 · Advertencias y precauciones',
            cita: 'DALIRESP is not a bronchodilator and should not be used for the relief of acute bronchospasm',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 %): diarrea, pérdida de peso, náuseas, dolor de cabeza, dolor de espalda, gripe, insomnio, mareo y disminución del apetito.',
          '34084-4',
          'Most common adverse reactions (≥2%) are diarrhea, weight decrease, nausea, headache, back pain, influenza, insomnia, dizziness and decreased appetite'
        ],
        [
          'Los datos de seguridad proceden de la exposición de 4438 pacientes.',
          '34084-4',
          'The safety data described below reflect exposure of 4438'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 250 o 500 microgramos (mcg) por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir el riesgo de exacerbaciones en la EPOC grave asociada a bronquitis crónica con antecedentes de exacerbaciones.',
    actua: 'El roflumilast y su metabolito activo N-óxido inhiben la fosfodiesterasa 4 y hacen que se acumule AMP cíclico dentro de las células del pulmón; el mecanismo exacto en la EPOC no está bien definido.',
    recorrido: 'La biodisponibilidad absoluta tras 500 mcg por boca es de alrededor del 80 %; en ayunas el máximo llega a la hora (0,5-2 h). La comida retrasa una hora el máximo y reduce la Cmax un 40 %. Tras una dosis marcada se recuperó alrededor del 70 % de la radiactividad en la orina; la semivida eficaz es de unas 17 horas (roflumilast) y 30 horas (N-óxido).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco y redondo de 250 o 500 mcg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco y redondo de 250 o 500 mcg.',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '3 · Formas y concentraciones',
            cita: 'DALIRESP 250 mcg tablets are white to off-white, round',
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
      ocurre: 'La biodisponibilidad absoluta tras 500 mcg por boca es de alrededor del 80 %; en ayunas el máximo llega a la hora (0,5-2 h). La comida retrasa una hora el máximo y reduce la Cmax un 40 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras 500 mcg por boca es de alrededor del 80 %; en ayunas el máximo llega a la hora (0,5-2 h). La comida retrasa una hora el máximo y reduce la Cmax un 40 %.',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of roflumilast following a 500 mcg oral dose is approximately 80%',
            codigo: '43682-4'
          }
        },
        {
          t: 'En ayunas el máximo de roflumilast llega aproximadamente a la hora y el del N-óxido, a las 8 horas.',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '12.3 · Farmacocinética',
            cita: 'Maximum plasma concentrations (C max ) of roflumilast typically occur approximately one hour after dosing (ranging from 0.5 to 2 hours) in the fasted state',
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
      ocurre: 'La unión a proteínas del plasma es del 99 % para el roflumilast y del 97 % para su N-óxido; el volumen de distribución es de unos 2,9 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es del 99 % para el roflumilast y del 97 % para su N-óxido; el volumen de distribución es de unos 2,9 L/kg.',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of roflumilast and its N-oxide metabolite is approximately 99% and 97%, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Fosfodiesterasa 4 (PDE4)',
        efecto: 'El roflumilast y su metabolito activo N-óxido inhiben la fosfodiesterasa 4 y hacen que se acumule AMP cíclico dentro de las células del pulmón; el mecanismo exacto en la EPOC no está bien definido.',
        lugar: [ 'pulmones' ],
        datos: [
          {
            t: 'El roflumilast y su metabolito activo N-óxido inhiben la fosfodiesterasa 4 y hacen que se acumule AMP cíclico dentro de las células del pulmón; el mecanismo exacto en la EPOC no está bien definido.',
            ref: {
              f: 'dailymed-roflumilast',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Roflumilast and its active metabolite (roflumilast N-oxide) are selective inhibitors of phosphodiesterase 4 (PDE4)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho por reacciones de fase I (citocromo P450, sobre todo CYP1A2 y CYP3A4) y de fase II (conjugación); el N-óxido es el único metabolito importante en plasma.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho por reacciones de fase I (citocromo P450, sobre todo CYP1A2 y CYP3A4) y de fase II (conjugación); el N-óxido es el único metabolito importante en plasma.',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '12.3 · Farmacocinética',
            cita: 'Roflumilast is extensively metabolized via Phase I (cytochrome P450) and Phase II (conjugation) reactions',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Roflumilast N-óxido',
          actividad: 'activo',
          nota: 'Inhibe la PDE4 como el fármaco original.',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '12.3 · Farmacocinética',
            cita: 'The N-oxide metabolite is the only major metabolite observed in the plasma of humans',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada se recuperó alrededor del 70 % de la radiactividad en la orina; la semivida eficaz es de unas 17 horas (roflumilast) y 30 horas (N-óxido).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada se recuperó alrededor del 70 % de la radiactividad en la orina; la semivida eficaz es de unas 17 horas (roflumilast) y 30 horas (N-óxido).',
          ref: {
            f: 'dailymed-roflumilast',
            sec: '12.3 · Farmacocinética',
            cita: 'about 70% of the radioactivity was recovered in the urine',
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
      valor: '80 (aprox.)',
      unidad: '%',
      analito: 'roflumilast',
      condiciones: '500 mcg por boca',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of roflumilast following a 500 mcg oral dose is approximately 80%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo en ayunas',
      valor: '1 (0,5-2)',
      unidad: 'h',
      analito: 'roflumilast',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'typically occur approximately one hour after dosing (ranging from 0.5 to 2 hours) in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo del N-óxido',
      valor: '8 (4-13)',
      unidad: 'h',
      analito: 'roflumilast N-óxido',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'plateau-like maximum concentrations of the N-oxide metabolite are reached in approximately eight hours (ranging from 4 to 13 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'roflumilast',
      ref: { f: 'dailymed-roflumilast', sec: '12.3 · Farmacocinética', cita: 'reduces C max by approximately 40%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas (roflumilast)',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'roflumilast',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of roflumilast and its N-oxide metabolite is approximately 99% and 97%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '2,9 (aprox.)',
      unidad: 'L/kg',
      analito: 'roflumilast',
      condiciones: 'dosis única de 500 mcg',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'Volume of distribution for single-dose 500 mcg roflumilast is about 2.9 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida eficaz plasmática (roflumilast)',
      valor: '17 (aprox.)',
      unidad: 'h',
      analito: 'roflumilast',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'the median plasma effective half-life of roflumilast and its N-oxide metabolite are approximately 17 and 30 hours, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'roflumilast y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-roflumilast',
        sec: '12.3 · Farmacocinética',
        cita: 'about 70% of the radioactivity was recovered in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-roflumilast', 'c9a1d0a8-581f-4f91-a2b8-f419192d0ebf', 'DALIRESP (ROFLUMILAST) TABLET', 'Daliresp', '15', '2025-12-19', '2026-11-12'),
    rengPubchem(449193, 'roflumilast', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
