import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'apalutamida',
    nombre: 'Apalutamida',
    clase: 'Inhibidor del receptor de andrógenos',
    sinonimos: [ 'apalutamide', 'Erleada' ],
    formula: 'C21H15F4N5O2S',
    masaMolar: 477.4,
    smiles: 'CNC(=O)C1=C(C=C(C=C1)N2C(=S)N(C(=O)C23CCC3)C4=CC(=C(N=C4)C#N)C(F)(F)F)F',
    inchikey: 'HJBWBFZLDZWPHF-UHFFFAOYSA-N',
    cid: 24872560,
    iupac: '4-[7-[6-cyano-5-(trifluoromethyl)-3-pyridinyl]-8-oxo-6-sulfanylidene-5,7-diazaspiro[3.4]octan-5-yl]-2-fluoro-N-methylbenzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'apalutamida-oral',
      producto: 'ERLEADA · comprimido recubierto con película',
      titular: 'JANSSEN PRODUCTS, LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '60 mg o 240 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'hypromellose acetate succinate 16070722 (3 mpa.s)',
        'magnesium stearate',
        'microcrystalline cellulose',
        'ferrosoferric oxide',
        'ferric oxide yellow',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'silicon dioxide'
      ],
      usos: {
        t: 'Tratamiento del cáncer de próstata metastásico sensible a la castración y del no metastásico resistente a la castración.',
        ref: {
          f: 'dailymed-apalutamida',
          sec: '1 · Indicaciones',
          cita: 'ERLEADA is an androgen receptor inhibitor indicated for the treatment of patients with',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-apalutamida',
      advertencias: [
        {
          titulo: 'Acontecimientos cerebrovasculares y cardiovasculares isquémicos',
          texto: 'Vigilar los signos de trastornos cerebrovasculares y de cardiopatía isquémica.',
          organos: [],
          ref: {
            f: 'dailymed-apalutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cerebrovascular and ischemic cardiovascular events occurred in patients receiving ERLEADA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fracturas',
          texto: 'Valorar el riesgo de fractura y tratar con fármacos dirigidos al hueso según las guías.',
          organos: [ 'huesos' ],
          ref: {
            f: 'dailymed-apalutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Evaluate patients for fracture risk and treat patients with bone-targeted agents according to established guidelines',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Convulsiones',
          texto: 'Aparecieron en el 0,4 %; suspender de forma definitiva si aparece una convulsión.',
          organos: [],
          ref: {
            f: 'dailymed-apalutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Seizure occurred in 0.4% of patients receiving ERLEADA',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más): fatiga, artralgia, exantema, disminución del apetito, caídas, pérdida de peso, hipertensión, sofocos, diarrea y fracturas.',
          '34084-4',
          'most common adverse reactions (≥10%) are fatigue, arthralgia, rash, decreased appetite, fall, weight decreased, hypertension, hot flush, diarrhea, and fracture'
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
    contiene: 'Comprimido recubierto con película: 60 mg o 240 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de próstata metastásico sensible a la castración y del no metastásico resistente a la castración.',
    actua: 'Inhibe el receptor de andrógenos uniéndose a su dominio de unión al ligando: impide su paso al núcleo, su unión al ADN y la transcripción mediada por el receptor.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 100 % y la mediana del tmax de 2 horas; con una comida grasa el tmax se retrasa unas 2 horas sin cambios relevantes. Hasta 70 días tras una dosis marcada, el 65 % se recuperó en la orina y el 24 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; puede dispersarse en compota de manzana.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; puede dispersarse en compota de manzana.',
          ref: { f: 'dailymed-apalutamida', sec: '3 · Formas y concentraciones', cita: '240 mg: bluish grey to grey, oval, film-coated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 100 % y la mediana del tmax de 2 horas; con una comida grasa el tmax se retrasa unas 2 horas sin cambios relevantes.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 100 % y la mediana del tmax de 2 horas; con una comida grasa el tmax se retrasa unas 2 horas sin cambios relevantes.',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Apalutamide absolute oral bioavailability is approximately 100%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tmax es de 2 horas (1 a 5).',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Apalutamide median (min, max) time to maximum plasma concentration (t max ) is 2 hours (1, 5 hours)',
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
      ocurre: 'Se une en un 96 % a las proteínas plasmáticas (95 % el N-desmetil); el volumen de distribución aparente es de unos 276 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 96 % a las proteínas plasmáticas (95 % el N-desmetil); el volumen de distribución aparente es de unos 276 L.',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Apalutamide is 96% and N-desmethyl apalutamide is 95% bound to plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 276 L.',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Apalutamide apparent volume of distribution is approximately 276 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de andrógenos',
        efecto: 'Inhibe el receptor de andrógenos uniéndose a su dominio de unión al ligando: impide su paso al núcleo, su unión al ADN y la transcripción mediada por el receptor.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe el receptor de andrógenos uniéndose a su dominio de unión al ligando: impide su paso al núcleo, su unión al ADN y la transcripción mediada por el receptor.',
            ref: {
              f: 'dailymed-apalutamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Apalutamide is an Androgen Receptor (AR) inhibitor that binds directly to the ligand-binding domain of the AR',
              codigo: '43679-0'
            }
          },
          {
            t: 'Inhibe la translocación nuclear del receptor, su unión al ADN y la transcripción.',
            ref: {
              f: 'dailymed-apalutamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Apalutamide inhibits AR nuclear translocation, inhibits DNA binding, and impedes AR-mediated transcription',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP2C8 y la CYP3A4 a su metabolito activo N-desmetil apalutamida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP2C8 y la CYP3A4 a su metabolito activo N-desmetil apalutamida.',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Apalutamide is primarily metabolized by CYP2C8 and CYP3A4 to form active metabolite, N-desmethyl apalutamide',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetil apalutamida',
          actividad: 'activo',
          nota: 'Metabolito activo con un tercio de la actividad; probablemente contribuye al efecto clínico.',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12 · Farmacología clínica',
            cita: 'A major metabolite, N-desmethyl apalutamide, is a less potent inhibitor of AR, and exhibited one-third the activity of apalutamide',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Hasta 70 días tras una dosis marcada, el 65 % se recuperó en la orina y el 24 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Hasta 70 días tras una dosis marcada, el 65 % se recuperó en la orina y el 24 % en las heces.',
          ref: {
            f: 'dailymed-apalutamida',
            sec: '12.3 · Farmacocinética',
            cita: '65% of the dose was recovered in urine (1.2% of dose as unchanged apalutamide and 2.7% as N-desmethyl apalutamide)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de unos 3 días.',
          ref: { f: 'dailymed-apalutamida', sec: '12.3 · Farmacocinética', cita: 'Apalutamide half-life is approximately 3 days', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '100 (aprox.)',
      unidad: '%',
      analito: 'apalutamida',
      ref: {
        f: 'dailymed-apalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Apalutamide absolute oral bioavailability is approximately 100%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2',
      unidad: 'h',
      analito: 'apalutamida',
      ref: {
        f: 'dailymed-apalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Apalutamide median (min, max) time to maximum plasma concentration (t max ) is 2 hours (1, 5 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96',
      unidad: '%',
      analito: 'apalutamida',
      ref: {
        f: 'dailymed-apalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Apalutamide is 96% and N-desmethyl apalutamide is 95% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '276 (aprox.)',
      unidad: 'L',
      analito: 'apalutamida',
      ref: {
        f: 'dailymed-apalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Apalutamide apparent volume of distribution is approximately 276 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '3 (aprox.)',
      unidad: 'd',
      analito: 'apalutamida',
      ref: { f: 'dailymed-apalutamida', sec: '12.3 · Farmacocinética', cita: 'Apalutamide half-life is approximately 3 days', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina en 70 días',
      valor: '65',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-apalutamida', sec: '12.3 · Farmacocinética', cita: '65% of the dose was recovered in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-apalutamida', 'd1cda4f7-cb33-46ea-b9ac-431f6452b1a5', 'ERLEADA (APALUTAMIDE) TABLET, FILM COATED', 'ERLEADA', '29', '2026-07-06', '2026-11-19'),
    rengPubchem(24872560, 'apalutamide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
