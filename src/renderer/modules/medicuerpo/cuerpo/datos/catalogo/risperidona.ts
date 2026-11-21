import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'risperidona',
    nombre: 'Risperidona',
    clase: 'Antipsicótico atípico',
    sinonimos: [ 'risperidone' ],
    formula: 'C23H27FN4O2',
    masaMolar: 410.5,
    smiles: 'CC1=C(C(=O)N2CCCCC2=N1)CCN3CCC(CC3)C4=NOC5=C4C=CC(=C5)F',
    inchikey: 'RAPZEAPATHNIPO-UHFFFAOYSA-N',
    cid: 5073,
    iupac: '3-[2-[4-(6-fluoro-1,2-benzoxazol-3-yl)piperidin-1-yl]ethyl]-2-methyl-6,7,8,9-tetrahydropyrido[1,2-a]pyrimidin-4-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'risperidona-oral',
      producto: 'RISPERDAL · comprimido',
      titular: 'JANSSEN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg',
      excipientes: [
        'silicon dioxide',
        'hypromellose, unspecified',
        'anhydrous lactose',
        'magnesium stearate',
        'microcrystalline cellulose',
        'propylene glycol',
        'sodium lauryl sulfate',
        'starch, corn',
        'talc',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'La etiqueta incluye esquizofrenia, episodios maníacos o mixtos del trastorno bipolar I e irritabilidad asociada al trastorno autista en las poblaciones indicadas.',
        ref: { f: 'dailymed-risperidona', sec: '1 · Indicaciones', cita: 'Treatment of schizophrenia' }
      },
      fuente: 'dailymed-risperidona'
    }
  ],
  resumen: {
    contiene: 'Comprimido de risperidona para administración oral.',
    usos: 'La etiqueta incluye esquizofrenia, episodios maníacos o mixtos del trastorno bipolar I e irritabilidad asociada al trastorno autista en las poblaciones indicadas.',
    actua: 'Se propone que su actividad en esquizofrenia combina el bloqueo de receptores D₂ y 5-HT₂. La risperidona y su metabolito paliperidona contribuyen al efecto.',
    recorrido: 'Se absorbe bien y los alimentos no alteraron la velocidad ni la extensión de la absorción. El pico medio tras tomar el comprimido o la solución llegó alrededor de una hora. La risperidona y sus metabolitos se eliminan sobre todo por orina y, en menor medida, por heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere RISPERDAL por vía oral.',
      ocurre: 'El recorrido corresponde al comprimido oral. La etiqueta también documenta una forma bucodispersable y una solución.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'El recorrido corresponde al comprimido oral. La etiqueta también documenta una forma bucodispersable y una solución.',
          ref: { f: 'dailymed-risperidona', sec: '3 · Forma farmacéutica', cita: 'RISPERDAL Tablets are available' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe bien y los alimentos no alteraron la velocidad ni la extensión de la absorción. El pico medio tras tomar el comprimido o la solución llegó alrededor de una hora.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe bien y los alimentos no alteraron la velocidad ni la extensión de la absorción. El pico medio tras tomar el comprimido o la solución llegó alrededor de una hora.',
          ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'Food does not affect either the rate or extent' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se distribuye rápidamente. En plasma, cerca del 90 % de la risperidona y el 77 % de su metabolito principal se unen a proteínas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se distribuye rápidamente. En plasma, cerca del 90 % de la risperidona y el 77 % de su metabolito principal se unen a proteínas.',
          ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'approximately 90%, and that of its major metabolite' }
        }
      ],
      accion: {
        diana: 'Receptores D₂ de dopamina y 5-HT₂ de serotonina (mecanismo propuesto)',
        efecto: 'Se propone que su actividad en esquizofrenia combina el bloqueo de receptores D₂ y 5-HT₂. La risperidona y su metabolito paliperidona contribuyen al efecto.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se propone que su actividad en esquizofrenia combina el bloqueo de receptores D₂ y 5-HT₂. La risperidona y su metabolito paliperidona contribuyen al efecto.',
            ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'receptor antagonism. The clinical effect' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'En el hígado, CYP2D6 forma principalmente 9-hidroxirisperidona (paliperidona), que conserva una actividad farmacológica similar.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'En el hígado, CYP2D6 forma principalmente 9-hidroxirisperidona (paliperidona), que conserva una actividad farmacológica similar.',
          ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'Risperidone is extensively metabolized in the liver' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Paliperidona (9-hidroxirisperidona)',
          actividad: 'activo',
          ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'similar pharmacological activity as risperidone' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La risperidona y sus metabolitos se eliminan sobre todo por orina y, en menor medida, por heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La risperidona y sus metabolitos se eliminan sobre todo por orina y, en menor medida, por heces.',
          ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'eliminated via the urine and, to a much lesser extent' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad del comprimido respecto a la solución',
      valor: '94',
      unidad: '%',
      ref: { f: 'dailymed-risperidona', sec: '12 · Farmacología clínica', cita: 'from a tablet is 94%' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-risperidona', '7e117c7e-02fc-4343-92a1-230061dfc5e0', 'RISPERDAL (RISPERIDONE) TABLET RISPERDAL M-TAB (RISPERIDONE) TABLET, ORALLY DISINTEGRATING RISPERDAL (RISPERIDONE) SOLUTION', 'RISPERDAL', '46', '2026-10-26', '2026-11-10'),
    rengPubchem(5073, 'risperidone', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
