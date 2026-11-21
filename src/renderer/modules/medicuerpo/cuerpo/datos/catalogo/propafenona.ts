import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'propafenona',
    nombre: 'Propafenona',
    clase: 'Antiarrítmico de clase IC',
    sinonimos: [ 'propafenone', 'Rythmol' ],
    formula: 'C21H27NO3',
    masaMolar: 341.4,
    smiles: 'CCCNCC(COC1=CC=CC=C1C(=O)CCC2=CC=CC=C2)O',
    inchikey: 'JWHAUXFOSRPERK-UHFFFAOYSA-N',
    cid: 4932,
    iupac: '1-[2-[2-hydroxy-3-(propylamino)propoxy]phenyl]-3-phenylpropan-1-one',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'propafenona-oral',
      producto: 'Propafenone Hydrochloride · comprimido recubierto',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg, 225 mg o 300 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de propafenona',
        ref: { f: 'dailymed-propafenona', sec: '11 · Descripción', cita: 'PROPAFENONE HYDROCHLORIDE', codigo: '34089-3' }
      },
      excipientes: [
        'starch, corn',
        'povidone k30',
        'croscarmellose sodium',
        'microcrystalline cellulose',
        'silicon dioxide',
        'magnesium stearate',
        'hypromellose, unspecified',
        'maltodextrin',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'polydextrose',
        'triacetin'
      ],
      usos: {
        t: 'Retrasar la recurrencia de la fibrilación o el aleteo auricular paroxísticos y de taquicardias supraventriculares con síntomas incapacitantes en personas sin cardiopatía estructural, y arritmias ventriculares graves.',
        ref: {
          f: 'dailymed-propafenona',
          sec: '1 · Indicaciones',
          cita: 'prolong the time to recurrence of paroxysmal atrial fibrillation/flutter (PAF)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-propafenona',
      advertencias: [
        {
          titulo: 'Mortalidad tras un infarto',
          texto: 'En el ensayo CAST, otros antiarrítmicos de clase IC aumentaron la mortalidad en pacientes con arritmias no graves tras un infarto.',
          organos: [ 'corazon' ],
          ref: { f: 'dailymed-propafenona', sec: 'Advertencia destacada', cita: 'Cardiac Arrhythmia Suppression Trial (CAST)', codigo: '34066-1' }
        },
        {
          titulo: 'Efectos proarrítmicos',
          texto: 'Ha causado arritmias nuevas o peores, incluidas muerte súbita y arritmias ventriculares graves.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-propafenona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Propafenone has caused new or worsened arrhythmias',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 5 %): sabor raro, náuseas o vómitos, mareo, estreñimiento, dolor de cabeza y cansancio.',
          '34084-4',
          'unusual taste, nausea and/or vomiting, dizziness, constipation, headache, fatigue'
        ],
        [
          'Alteraciones de la conducción: bloqueo auriculoventricular de primer grado y retraso de la conducción intraventricular.',
          '34084-4',
          'first-degree AV block, and intraventricular conduction delay'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 150 mg, 225 mg o 300 mg por comprimido, según la etiqueta; el activo va como clorhidrato de propafenona. Los excipientes no son el principio activo.',
    usos: 'Retrasar la recurrencia de la fibrilación o el aleteo auricular paroxísticos y de taquicardias supraventriculares con síntomas incapacitantes en personas sin cardiopatía estructural, y arritmias ventriculares graves.',
    actua: 'Es un antiarrítmico de clase IC con efecto anestésico local: reduce la corriente rápida de sodio en las fibras de Purkinje y del miocardio y estabiliza las membranas del corazón.',
    recorrido: 'Se absorbe casi por completo, con pico hacia las 3,5 horas, pero un primer paso hepático saturable deja una biodisponibilidad que depende de la dosis: 3,4 % con 150 mg y 10,6 % con 300 mg. La etiqueta da una semivida de 2 a 10 horas en metabolizadores rápidos y de 10 a 32 horas en los lentos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película y ranurado.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película y ranurado.',
          ref: { f: 'dailymed-propafenona', sec: '3 · Formas y concentraciones', cita: 'scored, round, film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe casi por completo, con pico hacia las 3,5 horas, pero un primer paso hepático saturable deja una biodisponibilidad que depende de la dosis: 3,4 % con 150 mg y 10,6 % con 300 mg.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe casi por completo, con pico hacia las 3,5 horas, pero un primer paso hepático saturable deja una biodisponibilidad que depende de la dosis: 3,4 % con 150 mg y 10,6 % con 300 mg.',
          ref: {
            f: 'dailymed-propafenona',
            sec: '12.3 · Farmacocinética',
            cita: 'is nearly completely absorbed after oral administration with peak plasma levels occurring approximately 3.5 hours after administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta del 3,4 % con 150 mg y del 10,6 % con 300 mg.',
          ref: {
            f: 'dailymed-propafenona',
            sec: '12.3 · Farmacocinética',
            cita: 'a 150-mg tablet had absolute bioavailability of 3.4%, while a 300-mg tablet had absolute bioavailability of 10.6%',
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
      ocurre: 'En el suero, más del 95 % va unido a proteínas; tras la vía intravenosa, el volumen total de distribución ronda los 252 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En el suero, más del 95 % va unido a proteínas; tras la vía intravenosa, el volumen total de distribución ronda los 252 L.',
          ref: { f: 'dailymed-propafenona', sec: '12.3 · Farmacocinética', cita: 'propafenone is greater than 95% bound to proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canales de sodio del corazón',
        efecto: 'Es un antiarrítmico de clase IC con efecto anestésico local: reduce la corriente rápida de sodio en las fibras de Purkinje y del miocardio y estabiliza las membranas del corazón.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Es un antiarrítmico de clase IC con efecto anestésico local: reduce la corriente rápida de sodio en las fibras de Purkinje y del miocardio y estabiliza las membranas del corazón.',
            ref: {
              f: 'dailymed-propafenona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'propafenone reduces the fast inward current carried by sodium ions',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En más del 90 % de las personas se metaboliza rápido y forma dos metabolitos activos: 5-hidroxipropafenona (CYP2D6) y norpropafenona (CYP3A4 y CYP1A2). En menos del 10 %, sin actividad de CYP2D6, el metabolismo es más lento.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En más del 90 % de las personas se metaboliza rápido y forma dos metabolitos activos: 5-hidroxipropafenona (CYP2D6) y norpropafenona (CYP3A4 y CYP1A2). En menos del 10 %, sin actividad de CYP2D6, el metabolismo es más lento.',
          ref: {
            f: 'dailymed-propafenona',
            sec: '12.3 · Farmacocinética',
            cita: 'These patients metabolize propafenone into 2 active metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-hidroxipropafenona',
          actividad: 'activo',
          ref: { f: 'dailymed-propafenona', sec: '12.3 · Farmacocinética', cita: '5-hydroxypropafenone, which is formed by CYP2D6', codigo: '43682-4' }
        },
        {
          nombre: 'Norpropafenona (N-depropilpropafenona)',
          actividad: 'activo',
          ref: {
            f: 'dailymed-propafenona',
            sec: '12.3 · Farmacocinética',
            cita: 'N-depropylpropafenone (norpropafenone), which is formed by both CYP3A4 and CYP1A2',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La etiqueta da una semivida de 2 a 10 horas en metabolizadores rápidos y de 10 a 32 horas en los lentos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La etiqueta da una semivida de 2 a 10 horas en metabolizadores rápidos y de 10 a 32 horas en los lentos.',
          ref: {
            f: 'dailymed-propafenona',
            sec: '12.3 · Farmacocinética',
            cita: 'In over 90% of patients, the drug is rapidly and extensively metabolized with an elimination half-life from 2 to 10 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '3,5 (aprox.)',
      unidad: 'h',
      analito: 'propafenona',
      ref: {
        f: 'dailymed-propafenona',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma levels occurring approximately 3.5 hours after administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '3,4 (150 mg) y 10,6 (300 mg)',
      unidad: '%',
      analito: 'propafenona',
      ref: {
        f: 'dailymed-propafenona',
        sec: '12.3 · Farmacocinética',
        cita: 'a 150-mg tablet had absolute bioavailability of 3.4%, while a 300-mg tablet had absolute bioavailability of 10.6%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas en el suero',
      valor: '> 95',
      unidad: '%',
      analito: 'propafenona',
      ref: { f: 'dailymed-propafenona', sec: '12.3 · Farmacocinética', cita: 'propafenone is greater than 95% bound to proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2-10',
      unidad: 'h',
      analito: 'propafenona',
      poblacion: 'metabolizadores rápidos (más del 90 %)',
      ref: { f: 'dailymed-propafenona', sec: '12.3 · Farmacocinética', cita: 'with an elimination half-life from 2 to 10 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '10-32',
      unidad: 'h',
      analito: 'propafenona',
      poblacion: 'metabolizadores lentos (menos del 10 %)',
      ref: {
        f: 'dailymed-propafenona',
        sec: '12.3 · Farmacocinética',
        cita: 'the estimated propafenone elimination half-life ranges from 10 to 32 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-propafenona', '8d1be333-be2b-4064-86a4-c2ad9ad07b83', 'PROPAFENONE HYDROCHLORIDE TABLET, COATED', 'Propafenone Hydrochloride', '4', '2025-09-15', '2026-11-12'),
    rengPubchem(4932, 'propafenone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
