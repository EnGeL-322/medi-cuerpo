import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rilzabrutinib',
    nombre: 'Rilzabrutinib',
    clase: 'Inhibidor covalente reversible de la tirosina cinasa de Bruton (BTK)',
    sinonimos: [ 'rilzabrutinib', 'Wayrilz' ],
    formula: 'C36H40FN9O3',
    masaMolar: 665.8,
    smiles: 'CC(C)(/C=C(\\C#N)/C(=O)N1CCC[C@H](C1)N2C3=NC=NC(=C3C(=N2)C4=C(C=C(C=C4)OC5=CC=CC=C5)F)N)N6CCN(CC6)C7COC7',
    inchikey: 'LCFFREMLXLZNHE-GBOLQPHISA-N',
    cid: 73388818,
    iupac: '(E)-2-[(3R)-3-[4-amino-3-(2-fluoro-4-phenoxyphenyl)pyrazolo[3,4-d]pyrimidin-1-yl]piperidine-1-carbonyl]-4-methyl-4-[4-(oxetan-3-yl)piperazin-1-yl]pent-2-enenitrile',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'rilzabrutinib-oral',
      producto: 'WAYRILZ · comprimido recubierto con película',
      titular: 'GENZYME CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '400 mg por comprimido, según la etiqueta',
      excipientes: [
        'crospovidone, unspecified',
        'microcrystalline cellulose',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'fd&c yellow no. 6',
        'sodium stearyl fumarate'
      ],
      usos: {
        t: 'Tratamiento de la trombocitopenia inmunitaria persistente o crónica en adultos con respuesta insuficiente a un tratamiento previo.',
        ref: {
          f: 'dailymed-rilzabrutinib',
          sec: '1 · Indicaciones',
          cita: 'WAYRILZ is indicated for the treatment of adult patients with persistent or chronic immune thrombocytopenia (ITP) who have had an insufficient response to a previous treatment',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rilzabrutinib',
      advertencias: [
        {
          titulo: 'Infecciones graves',
          texto: 'Vigilar los signos y síntomas de infección, valorarlos pronto y tratarlos.',
          organos: [],
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious Infections: Monitor patients for signs and symptoms of infection, evaluate promptly, and treat',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad, incluida la lesión hepática por fármacos',
          texto: 'Medir la bilirrubina y las transaminasas al inicio y según la clínica.',
          organos: [],
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Evaluate bilirubin and transaminases at baseline and as clinically indicated during treatment with WAYRILZ',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Comprobar que no hay embarazo antes de empezar en mujeres en edad fértil.',
          organos: [],
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Verify pregnancy status of females of reproductive potential prior to initiating WAYRILZ treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más): diarrea, náuseas, cefalea, dolor abdominal y COVID-19.',
          '34084-4',
          'The most common adverse reactions (≥10%) were diarrhea, nausea, headache, abdominal pain, and COVID-19'
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
    contiene: 'Comprimido recubierto con película: 400 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la trombocitopenia inmunitaria persistente o crónica en adultos con respuesta insuficiente a un tratamiento previo.',
    actua: 'Inhibe la BTK de forma covalente y reversible; actúa por inmunomodulación: frena la activación de los linfocitos B y la fagocitosis de las células cubiertas de anticuerpos.',
    recorrido: 'La biodisponibilidad oral absoluta es solo del 4,7 % y el pico aparece hacia las 2 horas; una comida rica en grasas reduce algo la exposición. Tras 400 mg marcados, alrededor del 86 % se recuperó en las heces (9 % sin cambios) y, en menor medida, en la orina (5 %) y la bilis (6 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Each 400 mg film-coated tablet is orange, capsule-shaped, and debossed with',
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
      ocurre: 'La biodisponibilidad oral absoluta es solo del 4,7 % y el pico aparece hacia las 2 horas; una comida rica en grasas reduce algo la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es solo del 4,7 % y el pico aparece hacia las 2 horas; una comida rica en grasas reduce algo la exposición.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability of rilzabrutinib is 4.7%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico tras 400 mg es de unas 2 horas.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the median time to peak plasma concentration (T max ) is approximately 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC bajó un 20 % y la Cmax un 31 %.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Rilzabrutinib AUC and C max decreased by 20% and 31%, respectively, following administration of a single oral 400 mg dose with a high fat meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 97,5 % a las proteínas plasmáticas (cociente sangre/plasma de 0,786); tras la vía intravenosa, el volumen de distribución terminal es de 149 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97,5 % a las proteínas plasmáticas (cociente sangre/plasma de 0,786); tras la vía intravenosa, el volumen de distribución terminal es de 149 L.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Rilzabrutinib is 97.5% bound to plasma proteins and the blood-to-plasma ratio is 0.786',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en la fase terminal de 149 L tras la vía intravenosa.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution at terminal phase (Vz) after IV administration is 149L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa de Bruton (BTK)',
        efecto: 'Inhibe la BTK de forma covalente y reversible; actúa por inmunomodulación: frena la activación de los linfocitos B y la fagocitosis de las células cubiertas de anticuerpos.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la BTK de forma covalente y reversible; actúa por inmunomodulación: frena la activación de los linfocitos B y la fagocitosis de las células cubiertas de anticuerpos.',
            ref: {
              f: 'dailymed-rilzabrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: "Rilzabrutinib is a small-molecule, covalent, reversible kinase inhibitor targeting Bruton's tyrosine kinase (BTK)",
              codigo: '43679-0'
            }
          },
          {
            t: 'Su efecto en la trombocitopenia inmunitaria se debe a inmunomodulación, con inhibición de la activación de los linfocitos B.',
            ref: {
              f: 'dailymed-rilzabrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Rilzabrutinib mediates its therapeutic effect in ITP through immune modulation including 1) inhibition of B cell activation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por el citocromo P450 3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por el citocromo P450 3A.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Rilzabrutinib is predominantly metabolized by cytochrome P450 3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 400 mg marcados, alrededor del 86 % se recuperó en las heces (9 % sin cambios) y, en menor medida, en la orina (5 %) y la bilis (6 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 400 mg marcados, alrededor del 86 % se recuperó en las heces (9 % sin cambios) y, en menor medida, en la orina (5 %) y la bilis (6 %).',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 86% of the dose was recovered in feces (9% unchanged) and to a lesser extent in urine (~5%) and bile (~6%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'En estudios de fase 1, la semivida fue de 1,6 a 4,5 horas.',
          ref: {
            f: 'dailymed-rilzabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In Phase 1 studies, the half-life of rilzabrutinib ranged between 1.6 to 4.5 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '4,7',
      unidad: '%',
      analito: 'rilzabrutinib',
      ref: {
        f: 'dailymed-rilzabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of rilzabrutinib is 4.7%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'rilzabrutinib',
      condiciones: 'dosis única de 400 mg',
      ref: {
        f: 'dailymed-rilzabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to peak plasma concentration (T max ) is approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,5',
      unidad: '%',
      analito: 'rilzabrutinib',
      ref: { f: 'dailymed-rilzabrutinib', sec: '12.3 · Farmacocinética', cita: 'Rilzabrutinib is 97.5% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en fase terminal (vía intravenosa)',
      valor: '149',
      unidad: 'L',
      analito: 'rilzabrutinib',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-rilzabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution at terminal phase (Vz) after IV administration is 149L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida (estudios de fase 1)',
      valor: '1,6-4,5',
      unidad: 'h',
      analito: 'rilzabrutinib',
      ref: {
        f: 'dailymed-rilzabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the half-life of rilzabrutinib ranged between 1.6 to 4.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '86 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 400 mg',
      ref: {
        f: 'dailymed-rilzabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 86% of the dose was recovered in feces (9% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rilzabrutinib', '95ffd367-9b0c-4f75-8487-5d8f3c0a5ad0', 'WAYRILZ (RILZABRUTINIB) TABLET, FILM COATED', 'WAYRILZ', '6', '2025-09-01', '2026-11-19'),
    rengPubchem(73388818, 'rilzabrutinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
