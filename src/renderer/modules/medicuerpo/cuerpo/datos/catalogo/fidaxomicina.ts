import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fidaxomicina',
    nombre: 'Fidaxomicina',
    clase: 'Antibacteriano macrocíclico',
    sinonimos: [ 'fidaxomicin' ],
    formula: 'C52H74Cl2O18',
    masaMolar: 1058,
    smiles: 'CC[C@H]1/C=C(/[C@H](C/C=C/C=C(/C(=O)O[C@@H](C/C=C(/C=C(/[C@@H]1O[C@H]2[C@H]([C@H]([C@@H](C(O2)(C)C)OC(=O)C(C)C)O)O)\\C)\\C)[C@@H](C)O)\\CO[C@H]3[C@H]([C@H]([C@@H]([C@H](O3)C)OC(=O)C4=C(C(=C(C(=C4O)Cl)O)Cl)CC)O)OC)O)\\C',
    inchikey: 'ZVGNESXIJDCBKN-UUEYKCAUSA-N',
    cid: 10034073,
    iupac: '[(2R,3S,4S,5S,6R)-6-[[(3E,5E,8S,9E,11S,12R,13E,15E,18S)-12-[(2R,3S,4R,5S)-3,4-dihydroxy-6,6-dimethyl-5-(2-methylpropanoyloxy)oxan-2-yl]oxy-11-ethyl-8-hydroxy-18-[(1R)-1-hydroxyethyl]-9,13,15-trimethyl-2-oxo-1-oxacyclooctadeca-3,5,9,13,15-pentaen-3-yl]methoxy]-4-hydroxy-5-methoxy-2-methyloxan-3-yl] 3,5-dichloro-2-ethyl-4,6-dihydroxybenzoate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'fidaxomicina-oral',
      producto: 'Dificid · comprimido recubierto',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg',
      excipientes: [
        'microcrystalline cellulose',
        'starch, corn',
        'hydroxypropyl cellulose (1600000 wamw)',
        'butylated hydroxytoluene',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'talc',
        'polyethylene glycol, unspecified',
        'lecithin, soybean'
      ],
      usos: {
        t: 'Diarrea asociada a Clostridioides difficile en las poblaciones descritas por la etiqueta.',
        ref: { f: 'dailymed-fidaxomicina', sec: '1 · Indicaciones', cita: 'for the treatment of C. difficile' }
      },
      fuente: 'dailymed-fidaxomicina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de fidaxomicina para administración oral.',
    usos: 'Diarrea asociada a Clostridioides difficile en las poblaciones descritas por la etiqueta.',
    actua: 'Inhibe la síntesis de ARN bacteriano al unirse a la ARN polimerasa. Su acción en este recorrido se concentra en el tubo digestivo.',
    recorrido: 'Tras tomarlo, se absorbe muy poco hacia la sangre. En plasma se midieron concentraciones del fármaco y su metabolito en el intervalo de ng/mL. La salida es principalmente fecal. En once adultos sanos, se recuperó en heces más del 92 % como fidaxomicina u OP-1118.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Dificid por vía oral.',
      ocurre: 'La presentación elegida es el comprimido recubierto DIFICID, diferenciado del granulado para suspensión.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación elegida es el comprimido recubierto DIFICID, diferenciado del granulado para suspensión.',
          ref: { f: 'dailymed-fidaxomicina', sec: '3 · Forma farmacéutica', cita: 'Film-coated tablets: 200 mg' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Tras tomarlo, se absorbe muy poco hacia la sangre. En plasma se midieron concentraciones del fármaco y su metabolito en el intervalo de ng/mL.',
      sigue: 'La mayor parte permanece en el tubo digestivo.',
      datos: [
        {
          t: 'Tras tomarlo, se absorbe muy poco hacia la sangre. En plasma se midieron concentraciones del fármaco y su metabolito en el intervalo de ng/mL.',
          ref: {
            f: 'dailymed-fidaxomicina',
            sec: '12 · Farmacología clínica',
            cita: 'minimal systemic absorption following oral administration'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'luz-intestinal' ],
      llega: 'La fidaxomicina permanece principalmente en el tubo digestivo.',
      ocurre: 'El fármaco permanece sobre todo en el tubo digestivo. La etiqueta documenta concentraciones en heces superiores a las plasmáticas en los pacientes estudiados.',
      sigue: 'El activo y su metabolito pueden actuar en el entorno intestinal.',
      datos: [
        {
          t: 'El fármaco permanece sobre todo en el tubo digestivo. La etiqueta documenta concentraciones en heces superiores a las plasmáticas en los pacientes estudiados.',
          ref: { f: 'dailymed-fidaxomicina', sec: '12 · Farmacología clínica', cita: 'mainly confined to the gastrointestinal tract' }
        }
      ],
      accion: {
        diana: 'ARN polimerasa bacteriana',
        efecto: 'Inhibe la síntesis de ARN bacteriano al unirse a la ARN polimerasa. Su acción en este recorrido se concentra en el tubo digestivo.',
        lugar: [ 'luz-intestinal' ],
        datos: [
          {
            t: 'Inhibe la síntesis de ARN bacteriano al unirse a la ARN polimerasa. Su acción en este recorrido se concentra en el tubo digestivo.',
            ref: {
              f: 'dailymed-fidaxomicina',
              sec: '12 · Farmacología clínica',
              cita: 'inhibits RNA synthesis by binding to RNA polymerases'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte de la fidaxomicina se transforma.',
      ocurre: 'La hidrólisis de un enlace éster forma OP-1118, su principal metabolito con actividad antibacteriana. Esta reacción es independiente de las enzimas CYP.',
      sigue: 'El activo y OP-1118 continúan hacia la eliminación.',
      datos: [
        {
          t: 'La hidrólisis de un enlace éster forma OP-1118, su principal metabolito con actividad antibacteriana. Esta reacción es independiente de las enzimas CYP.',
          ref: { f: 'dailymed-fidaxomicina', sec: '12 · Farmacología clínica', cita: 'microbiologically active metabolite, OP-1118' }
        }
      ],
      metabolitos: [
        {
          nombre: 'OP-1118',
          actividad: 'activo',
          ref: { f: 'dailymed-fidaxomicina', sec: '12 · Farmacología clínica', cita: 'microbiologically active metabolite, OP-1118' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La salida es principalmente fecal. En once adultos sanos, se recuperó en heces más del 92 % como fidaxomicina u OP-1118.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La salida es principalmente fecal. En once adultos sanos, se recuperó en heces más del 92 % como fidaxomicina u OP-1118.',
          ref: { f: 'dailymed-fidaxomicina', sec: '12 · Farmacología clínica', cita: 'more than 92% of the dose was recovered in the stool' },
          poblacion: '11 adultos sanos',
          condiciones: 'Estudio de administración única'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'heces',
      nombre: 'Recuperación fecal como fidaxomicina y OP-1118',
      valor: '> 92',
      unidad: '% de la dosis',
      poblacion: '11 adultos sanos',
      condiciones: 'Estudio de administración única',
      ref: { f: 'dailymed-fidaxomicina', sec: '12 · Farmacología clínica', cita: 'more than 92% of the dose was recovered in the stool' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fidaxomicina', 'dd966338-c820-4270-b704-09ef75fa3ceb', 'DIFICID (FIDAXOMICIN) TABLET, FILM COATED DIFICID (FIDAXOMICIN) GRANULE, FOR SUSPENSION', 'Dificid', '22', '2026-10-15', '2026-11-10'),
    rengPubchem(10034073, 'fidaxomicin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
