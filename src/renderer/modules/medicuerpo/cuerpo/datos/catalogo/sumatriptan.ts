import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sumatriptan',
    nombre: 'Sumatriptán',
    clase: 'Triptán',
    sinonimos: [ 'sumatriptan' ],
    formula: 'C14H21N3O2S',
    masaMolar: 295.4,
    smiles: 'CNS(=O)(=O)CC1=CC2=C(C=C1)NC=C2CCN(C)C',
    inchikey: 'KQKPFRSPSRPDEB-UHFFFAOYSA-N',
    cid: 5358,
    iupac: '1-[3-[2-(dimethylamino)ethyl]-1H-indol-5-yl]-N-methylmethanesulfonamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'sumatriptan-oral',
      producto: 'IMITREX · comprimido recubierto',
      titular: 'GLAXOSMITHKLINE LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      sal: {
        nombre: 'succinato de sumatriptán',
        ref: { f: 'dailymed-sumatriptan', sec: '3 · Forma farmacéutica', cita: 'sumatriptan succinate equivalent' }
      },
      excipientes: [
        'croscarmellose sodium',
        'anhydrous dibasic calcium phosphate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'sodium bicarbonate'
      ],
      usos: {
        t: 'Tratamiento agudo de migraña con o sin aura en adultos según la etiqueta de IMITREX.',
        ref: { f: 'dailymed-sumatriptan', sec: '1 · Indicaciones', cita: 'acute treatment of migraine with or without aura' }
      },
      fuente: 'dailymed-sumatriptan'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de succinato de sumatriptán para administración oral.',
    usos: 'Tratamiento agudo de migraña con o sin aura en adultos según la etiqueta de IMITREX.',
    actua: 'Activa receptores 5-HT₁B y 5-HT₁D en vasos intracraneales y nervios del trigémino. Esto puede reducir la liberación de neuropéptidos proinflamatorios y contraer esos vasos.',
    recorrido: 'La biodisponibilidad oral ronda el 15 %. El metabolismo antes de llegar a la circulación general explica la mayor parte de la diferencia, y la absorción incompleta también contribuye. En el estudio oral radiomarcado, alrededor del 60 % se eliminó por vía renal y el 40 % apareció en heces. En orina predominan los metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere IMITREX por vía oral.',
      ocurre: 'El comprimido contiene succinato de sumatriptán. La etiqueta expresa su contenido también como cantidad equivalente de sumatriptán.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'El comprimido contiene succinato de sumatriptán. La etiqueta expresa su contenido también como cantidad equivalente de sumatriptán.',
          ref: { f: 'dailymed-sumatriptan', sec: '3 · Forma farmacéutica', cita: 'of sumatriptan succinate equivalent' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La biodisponibilidad oral ronda el 15 %. El metabolismo antes de llegar a la circulación general explica la mayor parte de la diferencia, y la absorción incompleta también contribuye.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La biodisponibilidad oral ronda el 15 %. El metabolismo antes de llegar a la circulación general explica la mayor parte de la diferencia, y la absorción incompleta también contribuye.',
          ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'bioavailability is approximately 15%' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Su unión a proteínas plasmáticas es baja, entre el 14 % y el 21 % en el intervalo de concentraciones ensayado.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Su unión a proteínas plasmáticas es baja, entre el 14 % y el 21 % en el intervalo de concentraciones ensayado.',
          ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'approximately 14% to 21%' }
        }
      ],
      accion: {
        diana: 'Receptores de serotonina 5-HT₁B y 5-HT₁D',
        efecto: 'Activa receptores 5-HT₁B y 5-HT₁D en vasos intracraneales y nervios del trigémino. Esto puede reducir la liberación de neuropéptidos proinflamatorios y contraer esos vasos.',
        lugar: [ 'vasos', 'nervios' ],
        datos: [
          {
            t: 'Activa receptores 5-HT₁B y 5-HT₁D en vasos intracraneales y nervios del trigémino. Esto puede reducir la liberación de neuropéptidos proinflamatorios y contraer esos vasos.',
            ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'intracranial blood vessels and sensory nerves' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Los ensayos con microsomas humanos indican que lo transforma sobre todo la monoaminooxidasa A. El ácido indolacético y su glucurónido son inactivos.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Los ensayos con microsomas humanos indican que lo transforma sobre todo la monoaminooxidasa A. El ácido indolacético y su glucurónido son inactivos.',
          ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'metabolized by MAO, predominantly the A isoenzyme' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido indolacético',
          actividad: 'inactivo',
          ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'or the IAA glucuronide, both of which are inactive' }
        },
        {
          nombre: 'Glucurónido del ácido indolacético',
          actividad: 'inactivo',
          ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'or the IAA glucuronide, both of which are inactive' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio oral radiomarcado, alrededor del 60 % se eliminó por vía renal y el 40 % apareció en heces. En orina predominan los metabolitos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio oral radiomarcado, alrededor del 60 % se eliminó por vía renal y el 40 % apareció en heces. En orina predominan los metabolitos.',
          ref: { f: 'dailymed-sumatriptan', sec: '12 · Farmacología clínica', cita: 'largely renally excreted (about 60%)' },
          condiciones: 'Estudio con sumatriptán radiomarcado'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '≈ 2,5',
      unidad: 'h',
      ref: {
        f: 'dailymed-sumatriptan',
        sec: '12 · Farmacología clínica',
        cita: 'elimination half-life of sumatriptan is approximately 2.5 hours'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sumatriptan', '584abe73-8290-4484-ff8e-5890831c095e', 'IMITREX (SUMATRIPTAN) TABLET, FILM COATED', 'IMITREX', '24', '2026-08-13', '2026-11-10'),
    rengPubchem(5358, 'sumatriptan', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
