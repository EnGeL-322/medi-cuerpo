import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vigabatrina',
    nombre: 'Vigabatrina',
    clase: 'Antiepiléptico (inhibidor irreversible de la GABA transaminasa)',
    sinonimos: [ 'vigabatrin', 'Sabril' ],
    formula: 'C6H11NO2',
    masaMolar: 129.16,
    smiles: 'C=CC(CCC(=O)O)N',
    inchikey: 'PJDFLNIOAUIZSL-UHFFFAOYSA-N',
    cid: 5665,
    iupac: '4-aminohex-5-enoic acid',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'vigabatrina-oral',
      producto: 'SABRIL · comprimido recubierto con película',
      titular: 'LUNDBECK PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '500 mg por comprimido, según la etiqueta',
      excipientes: [
        'hypromelloses',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol, unspecified',
        'povidone',
        'titanium dioxide',
        'sodium starch glycolate type a potato'
      ],
      usos: {
        t: 'Crisis parciales complejas refractarias como tratamiento complementario desde 2 años, cuando han fallado varias alternativas, y espasmos infantiles en monoterapia de 1 mes a 2 años.',
        ref: {
          f: 'dailymed-vigabatrina',
          sec: '1 · Indicaciones',
          cita: 'Refractory Complex Partial Seizures as adjunctive therapy in patients 2 years of age and older who have responded inadequately to several alternative treatments',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vigabatrina',
      advertencias: [
        {
          titulo: 'Pérdida permanente de visión',
          texto: 'Puede causar una constricción concéntrica bilateral y permanente del campo visual, incluida visión en túnel, y a veces dañar la retina central y reducir la agudeza visual.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-vigabatrina',
            sec: 'Advertencia destacada',
            cita: 'In some cases, SABRIL also can damage the central retina and may decrease visual acuity',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Alteraciones en la resonancia magnética de lactantes',
          texto: 'En algunos lactantes con espasmos infantiles se han descrito alteraciones de señal en la resonancia magnética y edema intramielínico.',
          organos: [],
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Abnormal MRI signal changes and intramyelinic edema have been reported in some infants with Infantile Spasms receiving SABRIL',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Conducta e ideación suicidas',
          texto: 'Los antiepilépticos, incluida la vigabatrina, aumentan el riesgo de pensamientos y conductas suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Antiepileptic drugs, including SABRIL, increase the risk of suicidal thoughts and behavior',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos, las más frecuentes (al menos 5 puntos por encima del placebo): visión borrosa, somnolencia, mareo, alteración de la coordinación, temblor y fatiga.',
          '34084-4',
          'Adults: blurred vision, somnolence, dizziness, abnormal coordination, tremor, and fatigue'
        ],
        [
          'En los espasmos infantiles, las más frecuentes (más del 5 % y más que con placebo): somnolencia, bronquitis, infección de oído y otitis media aguda.',
          '34084-4',
          'Somnolence, bronchitis, ear infection, and acute otitis media'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Crisis parciales complejas refractarias como tratamiento complementario desde 2 años, cuando han fallado varias alternativas, y espasmos infantiles en monoterapia de 1 mes a 2 años.',
    actua: 'Se cree que actúa como inhibidor irreversible de la GABA transaminasa, la enzima que metaboliza el GABA, con lo que aumentan las concentraciones de GABA en el sistema nervioso central.',
    recorrido: 'Se absorbe prácticamente por completo; el tiempo hasta la concentración máxima es de alrededor de 1 hora en niños, adolescentes y adultos. Se elimina sobre todo por excreción renal: tras una dosis marcada, alrededor del 95 % de la radiactividad se recuperó en la orina en 72 horas, un 80 % como fármaco original.'
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
            f: 'dailymed-vigabatrina',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablet: 500 mg: white, oval, film-coated, biconvex',
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
      ocurre: 'Se absorbe prácticamente por completo; el tiempo hasta la concentración máxima es de alrededor de 1 hora en niños, adolescentes y adultos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe prácticamente por completo; el tiempo hasta la concentración máxima es de alrededor de 1 hora en niños, adolescentes y adultos.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, vigabatrin is essentially completely absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'El Tmax es de alrededor de 1 hora de los 3 a los 16 años y en adultos, y de unas 2,5 horas en lactantes.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to maximum concentration (T max ) is approximately 1 hour for children and adolescents (3 years to 16 years of age) and adults',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos, la Cmax bajó un 33 %, el Tmax subió a 2 horas y el AUC no cambió.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'the C max was decreased by 33%, T max was increased to 2 hours, and AUC was unchanged under fed conditions',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con alimentos'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'No se une a las proteínas del plasma y se distribuye ampliamente por el cuerpo; el volumen de distribución medio en estado estacionario es de 1,1 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se une a las proteínas del plasma y se distribuye ampliamente por el cuerpo; el volumen de distribución medio en estado estacionario es de 1,1 L/kg.',
          ref: { f: 'dailymed-vigabatrina', sec: '12.3 · Farmacocinética', cita: 'Vigabatrin does not bind to plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Se distribuye ampliamente; volumen de distribución medio en estado estacionario de 1,1 L/kg.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'Vigabatrin is widely distributed throughout the body; mean steady-state volume of distribution is 1.1 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'GABA transaminasa (GABA-T)',
        efecto: 'Se cree que actúa como inhibidor irreversible de la GABA transaminasa, la enzima que metaboliza el GABA, con lo que aumentan las concentraciones de GABA en el sistema nervioso central.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que actúa como inhibidor irreversible de la GABA transaminasa, la enzima que metaboliza el GABA, con lo que aumentan las concentraciones de GABA en el sistema nervioso central.',
            ref: {
              f: 'dailymed-vigabatrina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'This action results in increased levels of GABA in the central nervous system',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un inhibidor irreversible de la GABA transaminasa, la enzima que metaboliza el neurotransmisor inhibidor GABA.',
            ref: {
              f: 'dailymed-vigabatrina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'it is believed to be the result of its action as an irreversible inhibitor of γ-aminobutyric acid transaminase (GABA-T), the enzyme responsible for the metabolism of the inhibitory neurotransmitter GABA',
              codigo: '43679-0'
            }
          },
          {
            t: 'La duración del efecto dependería de la velocidad con que se vuelve a sintetizar la enzima, no de la eliminación del fármaco.',
            ref: {
              f: 'dailymed-vigabatrina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The duration of drug effect is presumed to be dependent on the rate of enzyme re-synthesis rather than on the rate of elimination of the drug from the systemic circulation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza de forma significativa; se elimina sobre todo por excreción renal.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza de forma significativa; se elimina sobre todo por excreción renal.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'Vigabatrin is not significantly metabolized; it is eliminated primarily through renal excretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'Induce la CYP2C9, pero no otras enzimas hepáticas del citocromo P450.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'Vigabatrin induces CYP2C9, but does not induce other hepatic cytochrome P450 enzyme systems',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por excreción renal: tras una dosis marcada, alrededor del 95 % de la radiactividad se recuperó en la orina en 72 horas, un 80 % como fármaco original.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por excreción renal: tras una dosis marcada, alrededor del 95 % de la radiactividad se recuperó en la orina en 72 horas, un 80 % como fármaco original.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'about 95% of total radioactivity was recovered in the urine over 72 hours with the parent drug representing about 80% of this',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 10,5 horas en adultos, 9,5 horas de los 10 a los 16 años, 6,8 horas de los 3 a los 9 años y 5,7 horas en lactantes.',
          ref: {
            f: 'dailymed-vigabatrina',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life of vigabatrin is about 5.7 hours for infants (5 months to 2 years of age), 6.8 hours for children (3 to 9 years of age), 9.5 hours for children and adolescents (10 to 16 years of age), and 10.5 hours for adults',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima (adultos)',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'vigabatrina',
      poblacion: 'adultos',
      ref: {
        f: 'dailymed-vigabatrina',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to maximum concentration (T max ) is approximately 1 hour for children and adolescents (3 years to 16 years of age) and adults',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio en estado estacionario',
      valor: '1,1',
      unidad: 'L/kg',
      analito: 'vigabatrina',
      ref: { f: 'dailymed-vigabatrina', sec: '12.3 · Farmacocinética', cita: 'mean steady-state volume of distribution is 1.1 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en adultos',
      valor: '10,5 (aprox.)',
      unidad: 'h',
      analito: 'vigabatrina',
      poblacion: 'adultos',
      ref: {
        f: 'dailymed-vigabatrina',
        sec: '12.3 · Farmacocinética',
        cita: '9.5 hours for children and adolescents (10 to 16 years of age), and 10.5 hours for adults',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina en 72 horas',
      valor: '95 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones sanos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-vigabatrina',
        sec: '12.3 · Farmacocinética',
        cita: 'about 95% of total radioactivity was recovered in the urine over 72 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vigabatrina', 'a5d389d2-d0e1-4395-a2a2-b552808e7f98', 'SABRIL (VIGABATRIN) TABLET, FILM COATED', 'SABRIL', '40', '2025-12-17', '2026-11-19'),
    rengPubchem(5665, 'vigabatrin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
