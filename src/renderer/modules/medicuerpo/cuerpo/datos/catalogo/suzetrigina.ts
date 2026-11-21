import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'suzetrigina',
    nombre: 'Suzetrigina',
    clase: 'Bloqueante selectivo del canal de sodio NaV1.8 (analgésico no opioide)',
    sinonimos: [ 'suzetrigine', 'Journavx' ],
    formula: 'C21H20F5N3O4',
    masaMolar: 473.4,
    smiles: 'C[C@H]1[C@H]([C@@H](O[C@@]1(C)C(F)(F)F)C(=O)NC2=CC(=NC=C2)C(=O)N)C3=C(C(=C(C=C3)F)F)OC',
    inchikey: 'XSQUJFKRXZMOKA-PAFIKIDNSA-N',
    cid: 156445116,
    iupac: '4-[[(2R,3S,4S,5R)-3-(3,4-difluoro-2-methoxyphenyl)-4,5-dimethyl-5-(trifluoromethyl)oxolane-2-carbonyl]amino]pyridine-2-carboxamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'suzetrigina-oral',
      producto: 'JOURNAVX · comprimido recubierto con película',
      titular: 'VERTEX PHARMACEUTICALS INCORPORATED',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg por comprimido, según la etiqueta',
      excipientes: [
        'hypromellose acetate succinate, unspecified',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Tratamiento del dolor agudo moderado o grave, incluido el posoperatorio, en adultos.',
        ref: {
          f: 'dailymed-suzetrigina',
          sec: '1 · Indicaciones',
          cita: 'JOURNAVX is indicated for the treatment of moderate to severe acute pain, including postoperative pain, in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-suzetrigina',
      advertencias: [
        {
          titulo: 'Interacción con inhibidores de la CYP3A',
          texto: 'Los inhibidores potentes y moderados de la CYP3A aumentan la exposición a la suzetrigina y al M6-SUZ y pueden causar reacciones adversas.',
          organos: [],
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Strong and moderate CYP3A inhibitors increase suzetrigine and M6-SUZ (active metabolite) exposures which may cause JOURNAVX adverse reactions',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Interacción con sustratos de la CYP3A',
          texto: 'La suzetrigina es inductora de la CYP3A y puede requerir ajustar otros sustratos de la CYP3A.',
          organos: [],
          ref: { f: 'dailymed-suzetrigina', sec: '5 · Advertencias y precauciones', cita: 'Suzetrigine is an inducer of CYP3A', codigo: '43685-7' }
        },
        {
          titulo: 'Insuficiencia hepática moderada o grave',
          texto: 'Evitar en la insuficiencia hepática grave; en la moderada aumenta el riesgo de reacciones adversas.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use in patients with severe hepatic impairment (Child-Pugh Class C)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más que con placebo) fueron prurito, espasmos musculares, aumento de la creatina fosfocinasa y exantema.',
          '34084-4',
          'most common adverse reactions (greater incidence in JOURNAVX-treated patients compared to placebo-treated patients) were pruritus, muscle spasms, increased creatine phosphokinase, and rash'
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
    contiene: 'Comprimido recubierto con película: 50 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del dolor agudo moderado o grave, incluido el posoperatorio, en adultos.',
    actua: 'Bloquea de forma selectiva el canal de sodio NaV1.8 de las neuronas sensitivas periféricas y así inhibe la transmisión de las señales de dolor a la médula espinal y al cerebro.',
    recorrido: 'En ayunas la mediana del tmax es de 3 horas para la suzetrigina y de 8 a 10 horas para el M6-SUZ; con comida el tmax se retrasa, pero la Cmax y el AUC no cambian. Se elimina sobre todo en las heces (49,9 %, 9,1 % sin cambios) y en la orina (44,0 %, principalmente como metabolitos); la semivida efectiva media es de 23,6 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 50 mg, blue, film-coated, oblong tablets',
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
      ocurre: 'En ayunas la mediana del tmax es de 3 horas para la suzetrigina y de 8 a 10 horas para el M6-SUZ; con comida el tmax se retrasa, pero la Cmax y el AUC no cambian.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas la mediana del tmax es de 3 horas para la suzetrigina y de 8 a 10 horas para el M6-SUZ; con comida el tmax se retrasa, pero la Cmax y el AUC no cambian.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max of suzetrigine and M6-SUZ in the fasted state was 3 hours and 8 to 10 hours, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La Cmax y el AUC no se vieron afectados por ninguna de las comidas estudiadas.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max and AUC of suzetrigine and M6-SUZ were not affected by any of the meal conditions',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'No se reparte preferentemente en los glóbulos rojos; la unión a proteínas es del 99 % (96 % el M6-SUZ) y el volumen de distribución aparente de 495 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se reparte preferentemente en los glóbulos rojos; la unión a proteínas es del 99 % (96 % el M6-SUZ) y el volumen de distribución aparente de 495 L.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '12.3 · Farmacocinética',
            cita: 'Suzetrigine and M6-SUZ do not partition preferentially into human red blood cells',
            codigo: '43682-4'
          }
        },
        {
          t: 'Unión a proteínas del 99 % para la suzetrigina y del 96 % para el M6-SUZ.',
          ref: { f: 'dailymed-suzetrigina', sec: '12.3 · Farmacocinética', cita: 'Protein Binding 99% 96%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canal de sodio dependiente de voltaje NaV1.8',
        efecto: 'Bloquea de forma selectiva el canal de sodio NaV1.8 de las neuronas sensitivas periféricas y así inhibe la transmisión de las señales de dolor a la médula espinal y al cerebro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Bloquea de forma selectiva el canal de sodio NaV1.8 de las neuronas sensitivas periféricas y así inhibe la transmisión de las señales de dolor a la médula espinal y al cerebro.',
            ref: {
              f: 'dailymed-suzetrigina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'By selectively inhibiting Na V 1.8 channels, suzetrigine inhibits transmission of pain signals to the spinal cord and brain',
              codigo: '43679-0'
            }
          },
          {
            t: 'El NaV1.8 se expresa en neuronas sensitivas periféricas, como las de los ganglios de la raíz dorsal.',
            ref: {
              f: 'dailymed-suzetrigina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Na V 1.8 is expressed in peripheral sensory neurons including dorsal root ganglion neurons',
              codigo: '43679-0'
            },
            poblacion: 'nervios'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía metabólica principal de la suzetrigina y del M6-SUZ es la CYP3A; el M6-SUZ es un metabolito activo 3,7 veces menos potente.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía metabólica principal de la suzetrigina y del M6-SUZ es la CYP3A; el M6-SUZ es un metabolito activo 3,7 veces menos potente.',
          ref: { f: 'dailymed-suzetrigina', sec: '12.3 · Farmacocinética', cita: 'Metabolism Primary Pathway CYP3A CYP3A', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'M6-SUZ',
          actividad: 'activo',
          nota: 'Metabolito activo principal, 3,7 veces menos potente sobre el NaV1.8.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '12 · Farmacología clínica',
            cita: 'M6-SUZ, a major active metabolite, is a less potent inhibitor of Na V 1.8 than suzetrigine by 3.7-fold',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo en las heces (49,9 %, 9,1 % sin cambios) y en la orina (44,0 %, principalmente como metabolitos); la semivida efectiva media es de 23,6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo en las heces (49,9 %, 9,1 % sin cambios) y en la orina (44,0 %, principalmente como metabolitos); la semivida efectiva media es de 23,6 horas.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '12.3 · Farmacocinética',
            cita: 'Feces: 49.9% (9.1% SUZ and rest as metabolites) Urine: 44.0% (primarily as metabolites)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media es de 23,6 horas para la suzetrigina y de 33,0 horas para el M6-SUZ.',
          ref: {
            f: 'dailymed-suzetrigina',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean (CV%) Effective Half-Life, hours 23.6 (36.2%) 33.0 (34.9%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico en ayunas',
      valor: '3',
      unidad: 'h',
      analito: 'suzetrigina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-suzetrigina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max of suzetrigine and M6-SUZ in the fasted state was 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '99',
      unidad: '%',
      analito: 'suzetrigina',
      ref: { f: 'dailymed-suzetrigina', sec: '12.3 · Farmacocinética', cita: 'Protein Binding 99% 96%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '495',
      unidad: 'L',
      analito: 'suzetrigina',
      ref: {
        f: 'dailymed-suzetrigina',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean (CV%) Apparent Volume of Distribution, L 495 (25.0%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media',
      valor: '23,6',
      unidad: 'h',
      analito: 'suzetrigina',
      ref: { f: 'dailymed-suzetrigina', sec: '12.3 · Farmacocinética', cita: 'Mean (CV%) Effective Half-Life, hours 23.6 (36.2%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente en estado estacionario',
      valor: '13,9',
      unidad: 'L/h',
      analito: 'suzetrigina',
      ref: {
        f: 'dailymed-suzetrigina',
        sec: '12.3 · Farmacocinética',
        cita: 'Steady State Mean (CV%) Apparent Oral Clearance, L/hours 13.9 (37.5%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '49,9',
      unidad: '% de la dosis',
      analito: 'suzetrigina y metabolitos',
      ref: { f: 'dailymed-suzetrigina', sec: '12.3 · Farmacocinética', cita: 'Feces: 49.9% (9.1% SUZ and rest as metabolites)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-suzetrigina', 'f0976da4-1d20-4517-945c-b60ed2f41c12', 'JOURNAVX (SUZETRIGINE) TABLET, FILM COATED', 'JOURNAVX', '10', '2026-10-09', '2026-11-19'),
    rengPubchem(156445116, 'suzetrigine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
