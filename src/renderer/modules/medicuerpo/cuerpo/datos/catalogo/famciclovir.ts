import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'famciclovir',
    nombre: 'Famciclovir',
    clase: 'Antiviral análogo de nucleósido (profármaco)',
    sinonimos: [ 'famciclovir' ],
    formula: 'C14H19N5O4',
    masaMolar: 321.33,
    smiles: 'CC(=O)OCC(CCN1C=NC2=CN=C(N=C21)N)COC(=O)C',
    inchikey: 'GGXKWVWZWMLJEH-UHFFFAOYSA-N',
    cid: 3324,
    iupac: '[2-(acetyloxymethyl)-4-(2-aminopurin-9-yl)butyl] acetate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'famciclovir-oral',
      producto: 'Famciclovir · comprimido recubierto',
      titular: 'MACLEODS PHARMACEUTICALS LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '125 mg',
      excipientes: [
        'sodium starch glycolate type a potato',
        'hydroxypropyl cellulose, unspecified',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'hypromellose 2910 (5 mpa.s)',
        'polyethylene glycol 400',
        'titanium dioxide',
        'lactose'
      ],
      usos: {
        t: 'Determinados cuadros de herpes labial, genital y zóster según la población y la indicación de la etiqueta.',
        ref: { f: 'dailymed-famciclovir', sec: '1 · Indicaciones', cita: 'Herpes labialis (cold sores)', codigo: '34067-9' }
      },
      fuente: 'dailymed-famciclovir'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con famciclovir como ingrediente activo.',
    usos: 'Determinados cuadros de herpes labial, genital y zóster según la población y la indicación de la etiqueta.',
    actua: 'Se convierte en penciclovir, cuyo derivado fosforilado interfiere en la síntesis de ADN del virus.',
    recorrido: 'Tras tomar el comprimido, la biodisponibilidad absoluta del penciclovir fue del 77 % en el estudio de referencia. El riñón elimina principalmente penciclovir sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Famciclovir se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Famciclovir se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-famciclovir', sec: '3 · Forma farmacéutica', cita: 'other side. Tablets : 125 mg, 250', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Tras tomar el comprimido, la biodisponibilidad absoluta del penciclovir fue del 77 % en el estudio de referencia.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Tras tomar el comprimido, la biodisponibilidad absoluta del penciclovir fue del 77 % en el estudio de referencia.',
          ref: {
            f: 'dailymed-famciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability of penciclovir is 77',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'El penciclovir se une en menos del 20 % a proteínas plasmáticas en el intervalo medido.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El penciclovir se une en menos del 20 % a proteínas plasmáticas en el intervalo medido.',
          ref: { f: 'dailymed-famciclovir', sec: '12.3 · Farmacocinética', cita: 'Penciclovir is less than 20% bound', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'ADN polimerasa viral, a través de penciclovir',
        efecto: 'Se convierte en penciclovir, cuyo derivado fosforilado interfiere en la síntesis de ADN del virus.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Se convierte en penciclovir, cuyo derivado fosforilado interfiere en la síntesis de ADN del virus.',
            ref: { f: 'dailymed-famciclovir', sec: '12.1 · Mecanismo', cita: 'anti-alpha herpes viral agent penciclovir', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El famciclovir se desacetila y oxida rápidamente para formar penciclovir. Apenas se detecta el original en plasma.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El famciclovir se desacetila y oxida rápidamente para formar penciclovir. Apenas se detecta el original en plasma.',
          ref: {
            f: 'dailymed-famciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'deacetylated and oxidized to form penciclovir',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Penciclovir',
          actividad: 'activo',
          ref: {
            f: 'dailymed-famciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'undergoes rapid and extensive metabolism to penciclovir',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El riñón elimina principalmente penciclovir sin cambios.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El riñón elimina principalmente penciclovir sin cambios.',
          ref: {
            f: 'dailymed-famciclovir',
            sec: '12.3 · Farmacocinética',
            cita: 'predominantly eliminated unchanged by the kidney',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-famciclovir', 'eeeee9c4-8566-4100-8ca4-3df936a3365d', 'FAMCICLOVIR TABLET, FILM COATED FAMCICLOVIR (FAMCICLOVIR ) TABLET, FILM COATED', 'Famciclovir', '14', '2025-09-19', '2026-11-10'),
    rengPubchem(3324, 'famciclovir', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
