import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lenacapavir',
    nombre: 'Lenacapavir',
    clase: 'Inhibidor de la cápside del VIH-1',
    sinonimos: [ 'lenacapavir sodium', 'Sunlenca' ],
    formula: 'C39H32ClF10N7O5S2',
    masaMolar: 968.3,
    smiles: 'CC(C)(C#CC1=NC(=C(C=C1)C2=C3C(=C(C=C2)Cl)C(=NN3CC(F)(F)F)NS(=O)(=O)C)[C@H](CC4=CC(=CC(=C4)F)F)NC(=O)CN5C6=C([C@H]7C[C@H]7C6(F)F)C(=N5)C(F)(F)F)S(=O)(=O)C',
    inchikey: 'BRYXUCLEHAUSDY-WEWMWRJBSA-N',
    cid: 133082658,
    iupac: 'N-[(1S)-1-[3-[4-chloro-3-(methanesulfonamido)-1-(2,2,2-trifluoroethyl)indazol-7-yl]-6-(3-methyl-3-methylsulfonylbut-1-ynyl)-2-pyridinyl]-2-(3,5-difluorophenyl)ethyl]-2-[(2S,4R)-5,5-difluoro-9-(trifluoromethyl)-7,8-diazatricyclo[4.3.0.02,4]nona-1(6),8-dien-7-yl]acetamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'lenacapavir-oral',
      producto: 'Sunlenca · comprimido recubierto con película',
      titular: 'GILEAD SCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '300 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Sal sódica de lenacapavir',
        ref: { f: 'dailymed-lenacapavir', sec: '11 · Descripción', cita: 'LENACAPAVIR SODIUM', codigo: '34089-3' }
      },
      excipientes: [
        'copovidone k25-31',
        'poloxamer 407',
        'mannitol',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'ferrosoferric oxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la infección por VIH-1 multirresistente en adultos muy pretratados, en combinación con otros antirretrovirales.',
        ref: {
          f: 'dailymed-lenacapavir',
          sec: '1 · Indicaciones',
          cita: 'in combination with other antiretroviral(s), for the treatment of HIV-1 infection in heavily treatment-experienced adults with multidrug resistant H',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lenacapavir',
      advertencias: [
        {
          titulo: 'Síndrome de reconstitución inmunitaria',
          texto: 'Puede requerir más evaluación y tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-lenacapavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Immune reconstitution syndrome: May necessitate further evaluation and treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Concentraciones residuales prolongadas',
          texto: 'Puede permanecer en la circulación 12 meses o más; la falta de adherencia puede causar pérdida de respuesta y resistencias.',
          organos: [],
          ref: {
            f: 'dailymed-lenacapavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Residual concentrations of lenacapavir may remain in systemic circulation for up to 12 months or longer',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (3 % o más) son náuseas y reacciones en el lugar de inyección.',
          '34084-4',
          'Most common adverse reactions (incidence greater than or equal to 3%, all grades) are nausea and injection site reactions'
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
    contiene: 'Comprimido recubierto con película: 300 mg por comprimido, según la etiqueta; el activo va como sal sódica de lenacapavir. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la infección por VIH-1 multirresistente en adultos muy pretratados, en combinación con otros antirretrovirales.',
    actua: 'Inhibidor multietapa y selectivo de la función de la cápside del VIH-1: se une directamente a la interfaz entre subunidades de la proteína p24 en los hexámeros.',
    recorrido: 'Por vía oral la biodisponibilidad absoluta es baja (6 a 10 %) y el tmax de unas 4 horas, con o sin alimentos. La vía principal de eliminación es la excreción del fármaco inalterado en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 300 mg: se disgrega en el tubo digestivo; forma parte de una pauta oral de carga antes de la vía subcutánea.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 300 mg: se disgrega en el tubo digestivo; forma parte de una pauta oral de carga antes de la vía subcutánea.',
          ref: {
            f: 'dailymed-lenacapavir',
            sec: '3 · Formas y concentraciones',
            cita: 'SUNLENCA tablets: Each tablet contains 300 mg of lenacapavir',
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
      ocurre: 'Por vía oral la biodisponibilidad absoluta es baja (6 a 10 %) y el tmax de unas 4 horas, con o sin alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Por vía oral la biodisponibilidad absoluta es baja (6 a 10 %) y el tmax de unas 4 horas, con o sin alimentos.',
          ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability 6 to 10 100', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 98,5 % a las proteínas plasmáticas humanas; el volumen de distribución aparente tras la vía oral es de 19 240 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 98,5 % a las proteínas plasmáticas humanas; el volumen de distribución aparente tras la vía oral es de 19 240 L.',
          ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: '% bound to human plasma proteins >98.5', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Cápside del VIH-1 (p24)',
        efecto: 'Inhibidor multietapa y selectivo de la función de la cápside del VIH-1: se une directamente a la interfaz entre subunidades de la proteína p24 en los hexámeros.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibidor multietapa y selectivo de la función de la cápside del VIH-1: se une directamente a la interfaz entre subunidades de la proteína p24 en los hexámeros.',
            ref: {
              f: 'dailymed-lenacapavir',
              sec: '12.4 · Microbiología',
              cita: 'Lenacapavir is a multistage, selective inhibitor of HIV-1 capsid function that directly binds to the interface between capsid protein (p24) subunits in hexamers',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza poco (CYP3A y UGT1A1, vías menores); el 69 % del material plasmático es fármaco inalterado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza poco (CYP3A y UGT1A1, vías menores); el 69 % del material plasmático es fármaco inalterado.',
          ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 'Metabolic pathway(s) CYP3A (minor) UGT1A1 (minor)', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de eliminación es la excreción del fármaco inalterado en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de eliminación es la excreción del fármaco inalterado en las heces.',
          ref: {
            f: 'dailymed-lenacapavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Major routes of elimination Excretion of unchanged drug into feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Por vía oral la semivida es de 10 a 12 días.',
          ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 't 1/2 10 to 12 days 8 to 12 weeks', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta oral',
      valor: '6-10',
      unidad: '%',
      analito: 'lenacapavir',
      ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability 6 to 10 100', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico oral',
      valor: '4',
      unidad: 'h',
      analito: 'lenacapavir',
      condiciones: 'con o sin alimentos',
      ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: '4 hours 77 to 84 days', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 98,5',
      unidad: '%',
      analito: 'lenacapavir',
      ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: '% bound to human plasma proteins >98.5', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente oral',
      valor: '19240',
      unidad: 'L',
      analito: 'lenacapavir',
      ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 'Apparent volume of distribution (Vd/F, L) 19240', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida oral',
      valor: '10-12',
      unidad: 'd',
      analito: 'lenacapavir',
      ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 't 1/2 10 to 12 days', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente oral',
      valor: '55',
      unidad: 'L/h',
      analito: 'lenacapavir',
      ref: { f: 'dailymed-lenacapavir', sec: '12.3 · Farmacocinética', cita: 'Clearance (mean apparent clearance, L/h) 55 4.2', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lenacapavir', 'e5652804-29c4-40d7-aeb2-0142ed2a7b5b', 'SUNLENCA (LENACAPAVIR SODIUM) TABLET, FILM COATED SUNLENCA (LENACAPAVIR SODIUM) KIT', 'Sunlenca', '14', '2026-09-07', '2026-11-19'),
    rengPubchem(133082658, 'lenacapavir sodium', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
