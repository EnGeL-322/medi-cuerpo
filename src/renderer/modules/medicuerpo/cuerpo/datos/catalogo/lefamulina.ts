import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lefamulina',
    nombre: 'Lefamulina',
    clase: 'Antibacteriano pleuromutilina sistémico',
    sinonimos: [ 'lefamulin acetate', 'Xenleta' ],
    formula: 'C28H45NO5S',
    masaMolar: 507.7,
    smiles: 'C[C@H]1[C@@H]([C@](C[C@H]([C@]2([C@H]3[C@@]1(CCC2C)CCC3=O)C)OC(=O)CS[C@@H]4CC[C@H](C[C@H]4O)N)(C)C=C)O',
    inchikey: 'KPVIXBKIJXZQJX-CSOZIWFHSA-N',
    cid: 58076382,
    iupac: '[(1S,2R,3S,4S,6R,7R,8R)-4-ethenyl-3-hydroxy-2,4,7,14-tetramethyl-9-oxo-6-tricyclo[5.4.3.01,8]tetradecanyl] 2-[(1R,2R,4R)-4-amino-2-hydroxycyclohexyl]sulfanylacetate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'lefamulina-oral',
      producto: 'Xenleta · comprimido recubierto',
      titular: 'MEITHEAL PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '600 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Acetato de lefamulina', ref: { f: 'dailymed-lefamulina', sec: '11 · Descripción', cita: 'lefamulin acetate', codigo: '34089-3' } },
      excipientes: [ 'mannitol', 'povidone k30', 'water', 'microcrystalline cellulose', 'croscarmellose', 'talc', 'silicon dioxide', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento de adultos con neumonía bacteriana adquirida en la comunidad por microorganismos sensibles.',
        ref: {
          f: 'dailymed-lefamulina',
          sec: '1 · Indicaciones',
          cita: 'XENLETA is a pleuromutilin antibacterial indicated for the treatment of adults with community-acquired bacterial pneumonia (CABP) caused by susceptible microorganisms',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lefamulina',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Evitar en la prolongación del QT conocida, en arritmias ventriculares y con fármacos que prolongan el QT.',
          organos: [],
          ref: {
            f: 'dailymed-lefamulina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use in patients with known QT prolongation, ventricular arrhythmias including torsades de pointes',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; las mujeres en edad fértil deben usar anticoncepción eficaz.',
          organos: [],
          ref: { f: 'dailymed-lefamulina', sec: '5 · Advertencias y precauciones', cita: 'Embryo-Fetal Toxicity : May cause fetal harm', codigo: '43685-7' }
        },
        {
          titulo: 'Diarrea por Clostridioides difficile',
          texto: 'Valorar a los pacientes que presenten diarrea.',
          organos: [],
          ref: { f: 'dailymed-lefamulina', sec: '5 · Advertencias y precauciones', cita: 'Evaluate patients who develop diarrhea', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Con los comprimidos, las más frecuentes (2 % o más) son diarrea, náuseas, vómitos y elevación de enzimas hepáticas.',
          '34084-4',
          'XENLETA Tablets : diarrhea, nausea, vomiting, hepatic enzyme elevation'
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
    contiene: 'Comprimido recubierto: 600 mg por comprimido, según la etiqueta; el activo va como acetato de lefamulina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con neumonía bacteriana adquirida en la comunidad por microorganismos sensibles.',
    actua: 'Inhibe la síntesis de proteínas bacteriana uniéndose a los sitios A y P del centro peptidil transferasa del ARNr 23S de la subunidad 50S, lo que impide colocar bien el ARNt.',
    recorrido: 'La biodisponibilidad oral media de los comprimidos es de alrededor del 25 % y el pico aparece entre 0,88 y 2 horas; un desayuno graso la reduce ligeramente. Tras 600 mg orales, el 88,5 % de la radiactividad se excretó en las heces y el 5,3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean oral bioavailability of XENLETA Tablets is approximately 25%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral media de los comprimidos es de alrededor del 25 % y el pico aparece entre 0,88 y 2 horas; un desayuno graso la reduce ligeramente.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral media de los comprimidos es de alrededor del 25 % y el pico aparece entre 0,88 y 2 horas; un desayuno graso la reduce ligeramente.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean oral bioavailability of XENLETA Tablets is approximately 25% and peak lefamulin plasma concentration occurred 0.88 to 2 hours after administration to healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con un desayuno rico en grasas la Cmax bajó de media un 22,9 % y el AUC un 18,43 %.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean relative reduction for oral XENLETA (fasted vs. fed) was on average 22.9% [90% CI: 12.2; 32.3] for the C max and 18.43%',
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
      ocurre: 'Se une entre un 94,8 % y un 97,1 % a las proteínas del plasma; el volumen de distribución en estado estacionario es de 86,1 L en pacientes con neumonía.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une entre un 94,8 % y un 97,1 % a las proteínas del plasma; el volumen de distribución en estado estacionario es de 86,1 L en pacientes con neumonía.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean plasma protein binding of lefamulin ranges from 94.8% at 2.35 mcg/mL to 97.1% at 0.25 mcg/mL in healthy adults',
            codigo: '43682-4'
          }
        },
        {
          t: 'En el líquido de revestimiento epitelial, el cociente de AUC frente al AUC plasmático libre es de alrededor de 15.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated ratio of ELF AUC to unbound plasma AUC is approximately 15',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Centro peptidil transferasa de la subunidad ribosómica 50S',
        efecto: 'Inhibe la síntesis de proteínas bacteriana uniéndose a los sitios A y P del centro peptidil transferasa del ARNr 23S de la subunidad 50S, lo que impide colocar bien el ARNt.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la síntesis de proteínas bacteriana uniéndose a los sitios A y P del centro peptidil transferasa del ARNr 23S de la subunidad 50S, lo que impide colocar bien el ARNt.',
            ref: {
              f: 'dailymed-lefamulina',
              sec: '12 · Farmacología clínica',
              cita: 'It inhibits bacterial protein synthesis through interactions (hydrogen bonds, hydrophobic interactions, and Van der Waals forces) with the A- and P-sites of the peptidyl transferase center (PTC) in domain V of the 23s rRNA of the 50S subunit',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4.',
          ref: { f: 'dailymed-lefamulina', sec: '12.3 · Farmacocinética', cita: 'Lefamulin is primarily metabolized by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 600 mg orales, el 88,5 % de la radiactividad se excretó en las heces y el 5,3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 600 mg orales, el 88,5 % de la radiactividad se excretó en las heces y el 5,3 % en la orina.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean % of total radioactivity excreted in feces was 77.3% (4.2% to 9.1% unchanged) and 88.5% (7.8% to 24.8% unchanged), and in urine was 15.5% (9.6% to 14.1% unchanged) and 5.3% (unchanged not determined) following 150 mg IV or 600 mg oral XENLETA',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media es de unas 8 horas en pacientes con neumonía.',
          ref: {
            f: 'dailymed-lefamulina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (min to max) elimination half-life of lefamulin is approximately 8 hours (3 to 20 h) in patients with CABP',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con neumonía'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral media',
      valor: '25 (aprox.)',
      unidad: '%',
      analito: 'lefamulina',
      ref: {
        f: 'dailymed-lefamulina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean oral bioavailability of XENLETA Tablets is approximately 25%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '0,88-2',
      unidad: 'h',
      analito: 'lefamulina',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-lefamulina',
        sec: '12.3 · Farmacocinética',
        cita: 'peak lefamulin plasma concentration occurred 0.88 to 2 hours after administration to healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '94,8-97,1',
      unidad: '%',
      analito: 'lefamulina',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-lefamulina',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean plasma protein binding of lefamulin ranges from 94.8% at 2.35 mcg/mL to 97.1% at 0.25 mcg/mL in healthy adults',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '86,1',
      unidad: 'L',
      analito: 'lefamulina',
      poblacion: 'pacientes con neumonía',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-lefamulina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (min to max) steady state volume of distribution of lefamulin is 86.1 L (34.2 to 153 L) in patients with CABP after administration of XENLETA Injection',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '8 (aprox.)',
      unidad: 'h',
      analito: 'lefamulina',
      poblacion: 'pacientes con neumonía',
      ref: {
        f: 'dailymed-lefamulina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (min to max) elimination half-life of lefamulin is approximately 8 hours (3 to 20 h) in patients with CABP',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces tras 600 mg orales',
      valor: '88,5',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      ref: { f: 'dailymed-lefamulina', sec: '12.3 · Farmacocinética', cita: 'and 88.5% (7.8% to 24.8% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lefamulina', 'eb972ea8-7502-422e-84bb-66cb8e93ca06', 'XENLETA (LEFAMULIN ACETATE) INJECTION, SOLUTION CITRIC BUFFERED NORMAL SALINE (ANHYDROUS CITRIC ACID) INJECTION, SOLUTION XENLETA (LEFAMULIN ACETATE) TABLET, COATED', 'Xenleta', '1', '2026-07-24', '2026-11-19'),
    rengPubchem(58076382, 'lefamulin acetate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
