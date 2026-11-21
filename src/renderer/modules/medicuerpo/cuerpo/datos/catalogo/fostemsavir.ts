import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fostemsavir',
    nombre: 'Fostemsavir',
    clase: 'Profármaco de temsavir, inhibidor de la unión del VIH-1',
    sinonimos: [ 'fostemsavir tromethamine', 'Rukobia' ],
    formula: 'C25H26N7O8P',
    masaMolar: 583.5,
    smiles: 'CC1=NN(C=N1)C2=NC=C(C3=C2N(C=C3C(=O)C(=O)N4CCN(CC4)C(=O)C5=CC=CC=C5)COP(=O)(O)O)OC',
    inchikey: 'SWMDAPWAQQTBOG-UHFFFAOYSA-N',
    cid: 11319217,
    iupac: '[3-[2-(4-benzoylpiperazin-1-yl)-2-oxoacetyl]-4-methoxy-7-(3-methyl-1,2,4-triazol-1-yl)pyrrolo[2,3-c]pyridin-1-yl]methyl dihydrogen phosphate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'fostemsavir-oral',
      producto: 'Rukobia · comprimido recubierto de liberación prolongada',
      titular: 'VIIV HEALTHCARE COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '600 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fostemsavir trometamol',
        ref: {
          f: 'dailymed-fostemsavir',
          sec: '3 · Formas y concentraciones',
          cita: '600 mg of fostemsavir (equivalent to 725 mg of fostemsavir tromethamine)',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'silicon dioxide',
        'hydroxypropyl cellulose, unspecified',
        'hypromellose, unspecified',
        'magnesium stearate',
        'ferric oxide red',
        'ferric oxide yellow',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento, con otros antirretrovirales, de la infección por VIH-1 multirresistente en adultos muy pretratados.',
        ref: {
          f: 'dailymed-fostemsavir',
          sec: '1 · Indicaciones',
          cita: 'RUKOBIA, in combination with other antiretroviral(s), is indicated for the treatment of human immunodeficiency virus type 1 (HIV-1) infection in heavily treatment-experienced adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fostemsavir',
      advertencias: [
        {
          titulo: 'Síndrome de reconstitución inmunitaria',
          texto: 'Se ha notificado con la terapia antirretroviral combinada.',
          organos: [],
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Immune reconstitution syndrome has been reported in patients treated with combination antiretroviral therapies',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QTc',
          texto: 'Usar con precaución si hay antecedentes de QTc prolongado o cardiopatía relevante.',
          organos: [],
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use RUKOBIA with caution in patients with a history of QTc prolongation or with relevant pre-existing cardiac disease',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Elevación de transaminasas en la coinfección por VHB o VHC',
          texto: 'Las elevaciones fueron más frecuentes en la coinfección.',
          organos: [],
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Elevations in hepatic transaminases were observed in a greater proportion of subjects with HBV and/or HCV co-infection',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'La reacción más frecuente (5 % o más) fueron las náuseas.',
          '34084-4',
          'most common adverse reaction (all grades) observed in ≥5% of subjects was nausea'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de liberación prolongada: 600 mg por comprimido, según la etiqueta; el activo va como fostemsavir trometamol. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con otros antirretrovirales, de la infección por VIH-1 multirresistente en adultos muy pretratados.',
    actua: 'Profármaco sin actividad propia que se hidroliza a temsavir, inhibidor de la unión del VIH-1 que se une a la subunidad gp120 de la envoltura vírica.',
    recorrido: 'El fostemsavir casi no se detecta en plasma y el temsavir se absorbe con facilidad; su biodisponibilidad absoluta es del 26,9 % y su tmax de 2 horas. En el balance de masas, el 51 % de la dosis se excretó en la orina y el 33 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada recubierto con película: libera el fármaco de forma gradual en el tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada recubierto con película: libera el fármaco de forma gradual en el tubo digestivo.',
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '3 · Formas y concentraciones',
            cita: 'Each RUKOBIA extended-release tablet contains 600 mg of fostemsavir',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El fostemsavir casi no se detecta en plasma y el temsavir se absorbe con facilidad; su biodisponibilidad absoluta es del 26,9 % y su tmax de 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El fostemsavir casi no se detecta en plasma y el temsavir se absorbe con facilidad; su biodisponibilidad absoluta es del 26,9 % y su tmax de 2 horas.',
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Fostemsavir was generally not detectable in plasma following oral administration. However, temsavir was readily absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta del temsavir es del 26,9 %.',
          ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: '% Absolute bioavailability a 26.9', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El temsavir se une en un 88,4 % a las proteínas plasmáticas, sobre todo a la albúmina; el volumen de distribución en estado estacionario es de 29,5 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El temsavir se une en un 88,4 % a las proteínas plasmáticas, sobre todo a la albúmina; el volumen de distribución en estado estacionario es de 29,5 L.',
          ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: '% Plasma protein binding 88.4 (primarily to HSA)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'gp120 de la envoltura del VIH-1',
        efecto: 'Profármaco sin actividad propia que se hidroliza a temsavir, inhibidor de la unión del VIH-1 que se une a la subunidad gp120 de la envoltura vírica.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Profármaco sin actividad propia que se hidroliza a temsavir, inhibidor de la unión del VIH-1 que se une a la subunidad gp120 de la envoltura vírica.',
            ref: {
              f: 'dailymed-fostemsavir',
              sec: '12.4 · Microbiología',
              cita: 'Fostemsavir is a prodrug without significant biochemical or antiviral activity that is hydrolyzed to the active moiety, temsavir, which is an HIV-1 attachment inhibitor',
              codigo: '49489-8'
            }
          },
          {
            t: 'El temsavir se une directamente a la subunidad gp120 de la glucoproteína gp160 del VIH-1.',
            ref: {
              f: 'dailymed-fostemsavir',
              sec: '12.4 · Microbiología',
              cita: 'Temsavir binds directly to the gp120 subunit within the HIV-1 envelope glycoprotein gp160',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El temsavir se metaboliza por hidrólisis por esterasas (36,1 % de la dosis) y por oxidación por la CYP3A4 (21,2 %); sus dos metabolitos circulantes principales son inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El temsavir se metaboliza por hidrólisis por esterasas (36,1 % de la dosis) y por oxidación por la CYP3A4 (21,2 %); sus dos metabolitos circulantes principales son inactivos.',
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Hydrolysis (esterases) [36.1% of oral dose] Oxidation (CYP3A4) [21.2% of oral dose]',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Temsavir',
          actividad: 'activo',
          nota: 'Fracción activa liberada por hidrólisis del profármaco.',
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '12 · Farmacología clínica',
            cita: 'hydrolyzed to the active moiety, temsavir, which is an HIV-1 attachment inhibitor',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En el balance de masas, el 51 % de la dosis se excretó en la orina y el 33 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En el balance de masas, el 51 % de la dosis se excretó en la orina y el 33 % en las heces.',
          ref: {
            f: 'dailymed-fostemsavir',
            sec: '12.3 · Farmacocinética',
            cita: '% of dose excreted in urine (unchanged drug) f 51 (<2) % of dose excreted in feces (unchanged drug) f 33 (1.1)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida del temsavir es de 11 horas.',
          ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: 'Half-life (h) 11', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del temsavir',
      valor: '26,9',
      unidad: '%',
      analito: 'temsavir',
      ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: '% Absolute bioavailability a 26.9', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico del temsavir',
      valor: '2,0',
      unidad: 'h',
      analito: 'temsavir',
      ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: 'T max (h) 2.0', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '88,4',
      unidad: '%',
      analito: 'temsavir',
      ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: '% Plasma protein binding 88.4 (primarily to HSA)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '11',
      unidad: 'h',
      analito: 'temsavir',
      ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: 'Half-life (h) 11', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '51',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'solución oral marcada de 300 mg',
      origen: 'otra-presentacion',
      ref: { f: 'dailymed-fostemsavir', sec: '12.3 · Farmacocinética', cita: '% of dose excreted in urine (unchanged drug) f 51 (<2)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fostemsavir', 'a21006b7-6d6f-4f06-81b4-17978756452b', 'RUKOBIA (FOSTEMSAVIR TROMETHAMINE) TABLET, FILM COATED, EXTENDED RELEASE', 'Rukobia', '9', '2026-06-10', '2026-11-19'),
    rengPubchem(11319217, 'fostemsavir tromethamine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
