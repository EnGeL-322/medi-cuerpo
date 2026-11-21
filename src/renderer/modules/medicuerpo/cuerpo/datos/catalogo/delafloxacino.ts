import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'delafloxacino',
    nombre: 'Delafloxacino',
    clase: 'Antibacteriano fluoroquinolona aniónica',
    sinonimos: [ 'delafloxacin meglumine', 'Baxdela' ],
    formula: 'C18H12ClF3N4O4',
    masaMolar: 440.8,
    smiles: 'C1C(CN1C2=C(C=C3C(=C2Cl)N(C=C(C3=O)C(=O)O)C4=C(C=C(C(=N4)N)F)F)F)O',
    inchikey: 'DYDCPNMLZGFQTM-UHFFFAOYSA-N',
    cid: 487101,
    iupac: '1-(6-amino-3,5-difluoro-2-pyridinyl)-8-chloro-6-fluoro-7-(3-hydroxyazetidin-1-yl)-4-oxoquinoline-3-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'delafloxacino-oral',
      producto: 'Baxdela · comprimido',
      titular: 'MELINTA THERAPEUTICS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '450 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Meglumina de delafloxacino',
        ref: { f: 'dailymed-delafloxacino', sec: '11 · Descripción', cita: 'Delafloxacin meglumine', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'povidone k30',
        'crospovidone (35 .mu.m)',
        'sodium bicarbonate',
        'sodium phosphate, monobasic, monohydrate',
        'anhydrous citric acid',
        'magnesium stearate',
        'water'
      ],
      usos: {
        t: 'Tratamiento de adultos con infecciones bacterianas agudas de la piel y estructuras cutáneas o neumonía adquirida en la comunidad por bacterias sensibles.',
        ref: {
          f: 'dailymed-delafloxacino',
          sec: '1 · Indicaciones',
          cita: 'BAXDELA is a fluoroquinolone antibacterial indicated for the treatment of adults with the following infections caused by designated susceptible bacteria',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-delafloxacino',
      advertencias: [
        {
          titulo: 'Reacciones adversas graves de las fluoroquinolonas',
          texto: 'Se asocian a reacciones graves, discapacitantes y posiblemente irreversibles: tendinitis y rotura de tendón, neuropatía periférica y efectos sobre el sistema nervioso central.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-delafloxacino',
            sec: 'Advertencia destacada',
            cita: 'Fluoroquinolones have been associated with disabling and potentially irreversible serious adverse reactions that have occurred together (5.1), including: Tendinitis and tendon rupture (5.2) Peripheral neuropathy (5.3) Central nervous system effects (5.4)',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Exacerbación de la miastenia grave',
          texto: 'Las fluoroquinolonas pueden agravar la debilidad muscular en la miastenia grave; evitarlo si hay antecedentes.',
          organos: [ 'musculos' ],
          ref: {
            f: 'dailymed-delafloxacino',
            sec: 'Advertencia destacada',
            cita: 'Fluoroquinolones may exacerbate muscle weakness in patients with myasthenia gravis',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Pueden aparecer tras la primera dosis o las siguientes; suspender ante el primer signo de exantema u otra hipersensibilidad.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue BAXDELA at the first sign of a skin rash or any other sign of hypersensitivity',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más) son náuseas, diarrea, cefalea, elevación de transaminasas y vómitos.',
          '34084-4',
          'Most common adverse reactions (incidence ≥ 2%) are nausea, diarrhea, headache, transaminase elevations, and vomiting'
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
    contiene: 'Comprimido: 450 mg por comprimido, según la etiqueta; el activo va como meglumina de delafloxacino. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con infecciones bacterianas agudas de la piel y estructuras cutáneas o neumonía adquirida en la comunidad por bacterias sensibles.',
    actua: 'Inhibe la topoisomerasa IV y la ADN girasa bacterianas, necesarias para la replicación, la transcripción, la reparación y la recombinación del ADN; es bactericida dependiente de la concentración.',
    recorrido: 'La biodisponibilidad absoluta del comprimido de 450 mg es del 58,8 %; la Cmax se alcanza en alrededor de 1 hora en ayunas y la comida no afecta la biodisponibilidad. Tras una dosis oral marcada, el 50 % de la radiactividad se excretó en la orina como delafloxacino inalterado y glucurónidos, y el 48 % en las heces como delafloxacino inalterado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability for BAXDELA 450 mg oral tablet administered as a single dose was 58.8%',
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
      ocurre: 'La biodisponibilidad absoluta del comprimido de 450 mg es del 58,8 %; la Cmax se alcanza en alrededor de 1 hora en ayunas y la comida no afecta la biodisponibilidad.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta del comprimido de 450 mg es del 58,8 %; la Cmax se alcanza en alrededor de 1 hora en ayunas y la comida no afecta la biodisponibilidad.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability for BAXDELA 450 mg oral tablet administered as a single dose was 58.8%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La Cmax se alcanzó en alrededor de 1 hora tras la toma oral en ayunas.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max of delafloxacin was achieved within about 1 hour after oral administration under fasting condition',
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
      ocurre: 'El volumen de distribución en estado estacionario es de 30 a 48 L, próximo al agua corporal total; se une en un 84 % a las proteínas del plasma, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en estado estacionario es de 30 a 48 L, próximo al agua corporal total; se une en un 84 % a las proteínas del plasma, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of delafloxacin is approximately 84%; delafloxacin primarily binds to albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 30 a 48 L, que se aproxima al agua corporal total.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'The steady state volume of distribution of delafloxacin is 30–48 L which approximates total body water',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Topoisomerasa IV y ADN girasa bacterianas',
        efecto: 'Inhibe la topoisomerasa IV y la ADN girasa bacterianas, necesarias para la replicación, la transcripción, la reparación y la recombinación del ADN; es bactericida dependiente de la concentración.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la topoisomerasa IV y la ADN girasa bacterianas, necesarias para la replicación, la transcripción, la reparación y la recombinación del ADN; es bactericida dependiente de la concentración.',
            ref: {
              f: 'dailymed-delafloxacino',
              sec: '12.4 · Microbiología',
              cita: 'The antibacterial activity of delafloxacin is due to the inhibition of both bacterial topoisomerase IV and DNA gyrase (topoisomerase II) enzymes',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía metabólica principal es la glucuronidación (UGT1A1, UGT1A3 y UGT2B15); el metabolismo oxidativo supone alrededor del 1 % de la dosis.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía metabólica principal es la glucuronidación (UGT1A1, UGT1A3 y UGT2B15); el metabolismo oxidativo supone alrededor del 1 % de la dosis.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'Glucuronidation of delafloxacin is the primary metabolic pathway with oxidative metabolism representing about 1% of an administered dose',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 50 % de la radiactividad se excretó en la orina como delafloxacino inalterado y glucurónidos, y el 48 % en las heces como delafloxacino inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 50 % de la radiactividad se excretó en la orina como delafloxacino inalterado y glucurónidos, y el 48 % en las heces como delafloxacino inalterado.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single oral dose of 14 C-labeled delafloxacin, 50% of the radioactivity was excreted in urine as unchanged delafloxacin and glucuronide metabolites and 48% was excreted in feces as unchanged delafloxacin',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media osciló entre 4,2 y 8,5 horas con dosis orales repetidas.',
          ref: {
            f: 'dailymed-delafloxacino',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean half-life values for delafloxacin ranged from 4.2 to 8.5 hours following multiple oral administrations',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del comprimido de 450 mg',
      valor: '58,8',
      unidad: '%',
      analito: 'delafloxacino',
      ref: {
        f: 'dailymed-delafloxacino',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability for BAXDELA 450 mg oral tablet administered as a single dose was 58.8%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax en ayunas',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'delafloxacino',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-delafloxacino',
        sec: '12.3 · Farmacocinética',
        cita: 'The C max of delafloxacin was achieved within about 1 hour after oral administration under fasting condition',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '30-48',
      unidad: 'L',
      analito: 'delafloxacino',
      ref: {
        f: 'dailymed-delafloxacino',
        sec: '12.3 · Farmacocinética',
        cita: 'The steady state volume of distribution of delafloxacin is 30–48 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '84 (aprox.)',
      unidad: '%',
      analito: 'delafloxacino',
      ref: {
        f: 'dailymed-delafloxacino',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of delafloxacin is approximately 84%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media con dosis orales repetidas',
      valor: '4,2-8,5',
      unidad: 'h',
      analito: 'delafloxacino',
      condiciones: 'dosis orales repetidas',
      ref: {
        f: 'dailymed-delafloxacino',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean half-life values for delafloxacin ranged from 4.2 to 8.5 hours following multiple oral administrations',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada en la orina',
      valor: '50',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada',
      ref: {
        f: 'dailymed-delafloxacino',
        sec: '12.3 · Farmacocinética',
        cita: '50% of the radioactivity was excreted in urine as unchanged delafloxacin and glucuronide metabolites',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-delafloxacino', 'fb77637a-88d9-4aea-958f-e270030ce30d', 'BAXDELA (DELAFLOXACIN MEGLUMINE) TABLET BAXDELA (DELAFLOXACIN MEGLUMINE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION', 'Baxdela', '21', '2025-08-11', '2026-11-19'),
    rengPubchem(487101, 'delafloxacin meglumine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
