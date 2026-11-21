import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vortioxetina',
    nombre: 'Vortioxetina',
    clase: 'Antidepresivo (modulador serotoninérgico)',
    sinonimos: [ 'vortioxetine', 'Trintellix' ],
    formula: 'C18H22N2S',
    masaMolar: 298.4,
    smiles: 'CC1=CC(=C(C=C1)SC2=CC=CC=C2N3CCNCC3)C',
    inchikey: 'YQNWZWMKLDQSAC-UHFFFAOYSA-N',
    cid: 9966051,
    iupac: '1-[2-(2,4-dimethylphenyl)sulfanylphenyl]piperazine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'vortioxetina-oral',
      producto: 'Trintellix · comprimido recubierto con película',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 10 mg o 20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Bromhidrato de vortioxetina',
        ref: { f: 'dailymed-vortioxetina', sec: '11 · Descripción', cita: 'vortioxetine hydrobromide', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (90000 wamw)',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'polyethylene glycol 400',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento del trastorno depresivo mayor en adultos.',
        ref: {
          f: 'dailymed-vortioxetina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of major depressive disorder (MDD) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vortioxetina',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños, adolescentes y adultos jóvenes en estudios a corto plazo.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-vortioxetina',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behavior in pediatric and young adult patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'Los antidepresivos serotoninérgicos, incluida la vortioxetina, pueden desencadenar un síndrome serotoninérgico potencialmente mortal.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '5 · Advertencias y precauciones',
            cita: 'can precipitate serotonin syndrome, a potentially life-threatening condition',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Riesgo de sangrado',
          texto: 'Puede aumentar el riesgo de hemorragias, sobre todo junto con aspirina, antiinflamatorios o anticoagulantes.',
          organos: [ 'sangre' ],
          ref: { f: 'dailymed-vortioxetina', sec: '5 · Advertencias y precauciones', cita: 'may increase the risk of bleeding events', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Náuseas, estreñimiento y vómitos: las reacciones más frecuentes (≥ 5 % y al menos el doble que con placebo).',
          '34084-4',
          'were: nausea, constipation and vomiting'
        ],
        [
          'La náusea fue la reacción adversa más frecuente y su frecuencia aumentó con la dosis; fue también el motivo más común para dejar el tratamiento.',
          '34084-4',
          'Nausea was the most common adverse reaction and its frequency was dose-related'
        ],
        [
          'Disfunción sexual descrita en los ensayos controlados de 6 a 8 semanas.',
          '34084-4',
          'voluntarily reported adverse reactions related to sexual dysfunction were captured'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg, 10 mg o 20 mg por comprimido, según la etiqueta; el activo va como bromhidrato de vortioxetina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno depresivo mayor en adultos.',
    actua: 'Su efecto antidepresivo no se conoce del todo: se atribuye a que aumenta la actividad de la serotonina en el sistema nervioso central al inhibir su recaptación. Además bloquea receptores 5-HT3 y activa receptores 5-HT1A.',
    recorrido: 'Se absorbe despacio: la concentración máxima llega entre 7 y 11 horas después de la toma. La biodisponibilidad absoluta es del 75 % y la comida no cambia su farmacocinética. Tras una dosis marcada, cerca del 59 % de la radiactividad salió por la orina y el 26 % por las heces, como metabolitos. Apenas se elimina vortioxetina sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película que se disgrega en el tubo digestivo; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película que se disgrega en el tubo digestivo; la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-vortioxetina', sec: '3 · Formas y concentraciones', cita: 'almond shaped biconvex film coated tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe despacio: la concentración máxima llega entre 7 y 11 horas después de la toma. La biodisponibilidad absoluta es del 75 % y la comida no cambia su farmacocinética.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe despacio: la concentración máxima llega entre 7 y 11 horas después de la toma. La biodisponibilidad absoluta es del 75 % y la comida no cambia su farmacocinética.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'after dosing is reached within 7 to 11 hours postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es del 75 %.',
          ref: { f: 'dailymed-vortioxetina', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability is 75%', codigo: '43682-4' }
        },
        {
          t: 'La comida no modifica su farmacocinética.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'No effect of food on the pharmacokinetics was observed',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte ampliamente fuera de la sangre (volumen aparente de unos 2600 L) y en el plasma viaja casi toda unida a proteínas (98 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente fuera de la sangre (volumen aparente de unos 2600 L) y en el plasma viaja casi toda unida a proteínas (98 %).',
          ref: { f: 'dailymed-vortioxetina', sec: '12.3 · Farmacocinética', cita: 'indicating extensive extravascular distribution', codigo: '43682-4' }
        },
        {
          t: 'El 98 % circula unido a proteínas del plasma.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of vortioxetine in humans is 98%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transportador de serotonina y receptores de serotonina',
        efecto: 'Su efecto antidepresivo no se conoce del todo: se atribuye a que aumenta la actividad de la serotonina en el sistema nervioso central al inhibir su recaptación. Además bloquea receptores 5-HT3 y activa receptores 5-HT1A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su efecto antidepresivo no se conoce del todo: se atribuye a que aumenta la actividad de la serotonina en el sistema nervioso central al inhibir su recaptación. Además bloquea receptores 5-HT3 y activa receptores 5-HT1A.',
            ref: {
              f: 'dailymed-vortioxetina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'thought to be related to its enhancement of serotonergic activity in the CNS through inhibition of the reuptake of serotonin',
              codigo: '43679-0'
            }
          },
          {
            t: 'También antagoniza receptores 5-HT3 y activa receptores 5-HT1A; no se sabe cuánto contribuyen al efecto.',
            ref: {
              f: 'dailymed-vortioxetina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It also has several other activities including 5-HT3 receptor antagonism and 5-HT1A receptor agonism',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado la transforma ampliamente por oxidación (varias enzimas CYP, sobre todo CYP2D6) y conjugación con ácido glucurónico. Su metabolito principal, un ácido carboxílico, no tiene actividad farmacológica.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado la transforma ampliamente por oxidación (varias enzimas CYP, sobre todo CYP2D6) y conjugación con ácido glucurónico. Su metabolito principal, un ácido carboxílico, no tiene actividad farmacológica.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively metabolized primarily through oxidation via cytochrome P450 isozymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito ácido carboxílico (principal)',
          actividad: 'inactivo',
          nota: 'Se forma sobre todo por CYP2D6.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'major, pharmacologically inactive, carboxylic acid metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, cerca del 59 % de la radiactividad salió por la orina y el 26 % por las heces, como metabolitos. Apenas se elimina vortioxetina sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, cerca del 59 % de la radiactividad salió por la orina y el 26 % por las heces, como metabolitos. Apenas se elimina vortioxetina sin cambios por la orina.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 59% and 26% of the administered radioactivity was recovered in the urine and feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Por la orina sale una cantidad despreciable de vortioxetina sin cambios.',
          ref: {
            f: 'dailymed-vortioxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'Negligible amounts of unchanged vortioxetine were excreted in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '7-11',
      unidad: 'h',
      analito: 'vortioxetina',
      ref: { f: 'dailymed-vortioxetina', sec: '12.3 · Farmacocinética', cita: 'after dosing is reached within 7 to 11 hours postdose', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '75',
      unidad: '%',
      analito: 'vortioxetina',
      ref: { f: 'dailymed-vortioxetina', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability is 75%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '66 (aprox.)',
      unidad: 'h',
      analito: 'vortioxetina',
      ref: { f: 'dailymed-vortioxetina', sec: '12.3 · Farmacocinética', cita: 'The mean terminal half-life is approximately 66 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media en estado estacionario',
      valor: '9, 18 y 33',
      unidad: 'ng/mL',
      analito: 'vortioxetina',
      condiciones: 'con 5, 10 y 20 mg al día',
      ref: { f: 'dailymed-vortioxetina', sec: '12.3 · Farmacocinética', cita: 'Steady-state mean C max values were 9, 18, and 33 ng/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98',
      unidad: '%',
      analito: 'vortioxetina',
      ref: {
        f: 'dailymed-vortioxetina',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of vortioxetine in humans is 98%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '2600 (aprox.)',
      unidad: 'L',
      analito: 'vortioxetina',
      ref: {
        f: 'dailymed-vortioxetina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of vortioxetine is approximately 2600 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '59 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos de vortioxetina',
      condiciones: 'dosis única marcada con carbono 14',
      ref: {
        f: 'dailymed-vortioxetina',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 59% and 26% of the administered radioactivity was recovered',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vortioxetina', '1a5b68e2-14d0-419d-9ec6-1ca97145e838', 'TRINTELLIX (VORTIOXETINE) TABLET, FILM COATED', 'Trintellix', '18', '2025-03-11', '2026-11-12'),
    rengPubchem(9966051, 'vortioxetine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
