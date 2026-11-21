import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'olanzapina',
    nombre: 'Olanzapina',
    clase: 'Antipsicótico atípico',
    sinonimos: [ 'olanzapine' ],
    formula: 'C17H20N4S',
    masaMolar: 312.4,
    smiles: 'CC1=CC2=C(S1)NC3=CC=CC=C3N=C2N4CCN(CC4)C',
    inchikey: 'KVWDHTXUZHCGIO-UHFFFAOYSA-N',
    cid: 135398745,
    iupac: '2-methyl-4-(4-methylpiperazin-1-yl)-10H-thieno[2,3-b][1,5]benzodiazepine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'olanzapina-oral',
      producto: 'Zyprexa · comprimido',
      titular: 'H2-PHARMA LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg',
      excipientes: [
        'carnauba wax',
        'crospovidone, unspecified',
        'hydroxypropyl cellulose, unspecified',
        'hypromellose, unspecified',
        'lactose, unspecified form',
        'magnesium stearate',
        'microcrystalline cellulose',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'polysorbate 80'
      ],
      usos: {
        t: 'La etiqueta incluye esquizofrenia y determinados episodios o mantenimiento del trastorno bipolar I.',
        ref: { f: 'dailymed-olanzapina', sec: '1 · Indicaciones', cita: 'Treatment of schizophrenia' }
      },
      fuente: 'dailymed-olanzapina'
    }
  ],
  resumen: {
    contiene: 'Comprimido de olanzapina para administración oral.',
    usos: 'La etiqueta incluye esquizofrenia y determinados episodios o mantenimiento del trastorno bipolar I.',
    actua: 'La etiqueta propone que el efecto en esquizofrenia se relaciona con el antagonismo de receptores de dopamina y serotonina.',
    recorrido: 'Se absorbe bien y llega al pico aproximadamente a las seis horas. La comida no afectó a la velocidad ni a la extensión de la absorción. En un estudio oral con olanzapina radiomarcada, se recuperó aproximadamente el 57 % en orina y el 30 % en heces. El 7 % de la dosis se recuperó en orina sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Zyprexa por vía oral.',
      ocurre: 'Se seleccionó el comprimido oral de ZYPREXA. La etiqueta contiene información separada para las presentaciones bucodispersable e intramuscular.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'Se seleccionó el comprimido oral de ZYPREXA. La etiqueta contiene información separada para las presentaciones bucodispersable e intramuscular.',
          ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: 'Oral Administration, Monotherapy' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe bien y llega al pico aproximadamente a las seis horas. La comida no afectó a la velocidad ni a la extensión de la absorción.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe bien y llega al pico aproximadamente a las seis horas. La comida no afectó a la velocidad ni a la extensión de la absorción.',
          ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: 'reaches peak concentrations in approximately 6 hours' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se distribuye ampliamente. Aproximadamente el 93 % se une a proteínas plasmáticas en las concentraciones estudiadas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se distribuye ampliamente. Aproximadamente el 93 % se une a proteínas plasmáticas en las concentraciones estudiadas.',
          ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: '93% bound to plasma proteins' }
        }
      ],
      accion: {
        diana: 'Receptores de dopamina y serotonina (mecanismo propuesto)',
        efecto: 'La etiqueta propone que el efecto en esquizofrenia se relaciona con el antagonismo de receptores de dopamina y serotonina.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'La etiqueta propone que el efecto en esquizofrenia se relaciona con el antagonismo de receptores de dopamina y serotonina.',
            ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: 'combination of dopamine and serotonin' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Alrededor del 40 % se transforma antes de alcanzar la circulación sistémica. Las vías principales son glucuronidación directa y oxidación mediada por CYP.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Alrededor del 40 % se transforma antes de alcanzar la circulación sistémica. Las vías principales son glucuronidación directa y oxidación mediada por CYP.',
          ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: 'Direct glucuronidation and cytochrome' }
        }
      ],
      simultaneo: 'El primer paso ocurre antes de que la fracción restante alcance la circulación general.',
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral con olanzapina radiomarcada, se recuperó aproximadamente el 57 % en orina y el 30 % en heces. El 7 % de la dosis se recuperó en orina sin cambios.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral con olanzapina radiomarcada, se recuperó aproximadamente el 57 % en orina y el 30 % en heces. El 7 % de la dosis se recuperó en orina sin cambios.',
          ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: '57% and 30% of the dose was recovered' },
          condiciones: 'Estudio de administración oral única con olanzapina radiomarcada'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico por vía oral',
      valor: '≈ 6',
      unidad: 'h',
      ref: { f: 'dailymed-olanzapina', sec: '12 · Farmacología clínica', cita: 'reaches peak concentrations in approximately 6 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-olanzapina', 'b418946a-1ab4-4d89-a012-d94fc361a3c4', 'ZYPREXA (OLANZAPINE) TABLET ZYPREXA ZYDIS (OLANZAPINE) TABLET, ORALLY DISINTEGRATING ZYPREXA INTRAMUSCULAR (OLANZAPINE) INJECTION, POWDER, FOR SOLUTION', 'Zyprexa', '69', '2026-10-09', '2026-11-10'),
    rengPubchem(135398745, 'olanzapine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
