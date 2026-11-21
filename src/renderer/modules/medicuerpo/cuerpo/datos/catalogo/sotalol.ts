import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sotalol',
    nombre: 'Sotalol',
    clase: 'Antiarrítmico (betabloqueante con acción de clase III)',
    sinonimos: [ 'sotalol', 'Betapace' ],
    formula: 'C12H20N2O3S',
    masaMolar: 272.37,
    smiles: 'CC(C)NCC(C1=CC=C(C=C1)NS(=O)(=O)C)O',
    inchikey: 'ZBMZVLHSJCTVON-UHFFFAOYSA-N',
    cid: 5253,
    iupac: 'N-[4-[1-hydroxy-2-(propan-2-ylamino)ethyl]phenyl]methanesulfonamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'sotalol-oral',
      producto: 'BETAPACE · comprimido',
      titular: 'LEGACY PHARMA USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '80 mg, 120 mg o 160 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Clorhidrato de sotalol', ref: { f: 'dailymed-sotalol', sec: '11 · Descripción', cita: 'sotalol hydrochloride', codigo: '34089-3' } },
      excipientes: [
        'microcrystalline cellulose',
        'lactose, unspecified form',
        'starch, corn',
        'stearic acid',
        'magnesium stearate',
        'silicon dioxide',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Arritmias ventriculares que amenazan la vida y mantenimiento del ritmo sinusal en la fibrilación o el aleteo auricular.',
        ref: { f: 'dailymed-sotalol', sec: '1 · Indicaciones', cita: 'the treatment of life-threatening ventricular arrhythmias', codigo: '34067-9' }
      },
      fuente: 'dailymed-sotalol',
      advertencias: [
        {
          titulo: 'Proarritmia grave',
          texto: 'Puede causar taquicardia ventricular potencialmente mortal asociada a la prolongación del intervalo QT; se empieza en un centro con monitorización.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-sotalol',
            sec: 'Advertencia destacada',
            cita: 'Sotalol can cause life-threatening ventricular tachycardia associated with QT interval prolongation',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 %): cansancio (4 %), bradicardia (3 %), dificultad para respirar (3 %), proarritmia (3 %), debilidad (2 %) y mareo (2 %).',
          '34084-4',
          'fatigue 4%, bradycardia (less than 50 bpm) 3%, dyspnea 3%, proarrhythmia 3%'
        ],
        [ 'Debilidad y mareo en un 2 %.', '34084-4', 'asthenia 2%, and dizziness 2%' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 80 mg, 120 mg o 160 mg por comprimido, según la etiqueta; el activo va como clorhidrato de sotalol. Los excipientes no son el principio activo.',
    usos: 'Arritmias ventriculares que amenazan la vida y mantenimiento del ritmo sinusal en la fibrilación o el aleteo auricular.',
    actua: 'Bloquea los receptores beta sin selectividad (clase II) y alarga la duración del potencial de acción del corazón (clase III). Los dos isómeros tienen el efecto de clase III; el isómero l aporta casi todo el bloqueo beta.',
    recorrido: 'En personas sanas su biodisponibilidad oral es del 90 % al 100 %; el pico llega en 2,5 a 4 horas. Con una comida estándar, la absorción baja alrededor de un 20 %. Sale sobre todo sin cambios por el riñón; su semivida media es de 12 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado con forma de cápsula.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado con forma de cápsula.',
          ref: { f: 'dailymed-sotalol', sec: '3 · Formas y concentraciones', cita: 'capsule-shaped, light-blue, scored tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En personas sanas su biodisponibilidad oral es del 90 % al 100 %; el pico llega en 2,5 a 4 horas. Con una comida estándar, la absorción baja alrededor de un 20 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En personas sanas su biodisponibilidad oral es del 90 % al 100 %; el pico llega en 2,5 a 4 horas. Con una comida estándar, la absorción baja alrededor de un 20 %.',
          ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'the oral bioavailability of sotalol is 90 to 100%', codigo: '43682-4' }
        },
        {
          t: 'Pico plasmático entre 2,5 y 4 horas.',
          ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'peak plasma concentrations are reached in 2.5 to 4 hours', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'corazon' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'No se une a proteínas del plasma y se reparte en un compartimento central y otro periférico.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se une a proteínas del plasma y se reparte en un compartimento central y otro periférico.',
          ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'Sotalol does not bind to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores beta y canales de potasio del corazón',
        efecto: 'Bloquea los receptores beta sin selectividad (clase II) y alarga la duración del potencial de acción del corazón (clase III). Los dos isómeros tienen el efecto de clase III; el isómero l aporta casi todo el bloqueo beta.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Bloquea los receptores beta sin selectividad (clase II) y alarga la duración del potencial de acción del corazón (clase III). Los dos isómeros tienen el efecto de clase III; el isómero l aporta casi todo el bloqueo beta.',
            ref: {
              f: 'dailymed-sotalol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sotalol has both beta-adrenoreceptor blocking (Vaughan Williams Class II) and cardiac action potential duration prolongation (Vaughan Williams Class III) antiarrhythmic properties',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza.',
          ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'Sotalol is not metabolized', codigo: '43682-4' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo sin cambios por el riñón; su semivida media es de 12 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo sin cambios por el riñón; su semivida media es de 12 horas.',
          ref: {
            f: 'dailymed-sotalol',
            sec: '12.3 · Farmacocinética',
            cita: 'Excretion of sotalol is predominantly via the kidney in the unchanged form',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '90-100',
      unidad: '%',
      analito: 'sotalol',
      poblacion: 'personas sanas',
      ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'the oral bioavailability of sotalol is 90 to 100%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2,5-4',
      unidad: 'h',
      analito: 'sotalol',
      ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'peak plasma concentrations are reached in 2.5 to 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la absorción con una comida estándar',
      valor: '20 (aprox.)',
      unidad: '%',
      analito: 'sotalol',
      ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'the absorption of sotalol was reduced by approximately 20%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '12',
      unidad: 'h',
      analito: 'sotalol',
      ref: { f: 'dailymed-sotalol', sec: '12.3 · Farmacocinética', cita: 'The mean elimination half-life of sotalol is 12 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sotalol', 'a6a7702f-36c9-45db-b640-453dc324baee', 'BETAPACE (SOTALOL HYDROCHLORIDE) TABLET BETAPACE AF (SOTALOL HYDROCHLORIDE) TABLET', 'BETAPACE', '2', '2024-12-20', '2026-11-12'),
    rengPubchem(5253, 'sotalol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
