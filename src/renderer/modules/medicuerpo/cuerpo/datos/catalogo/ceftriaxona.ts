import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ceftriaxona',
    nombre: 'Ceftriaxona',
    clase: 'Antibiótico cefalosporina de tercera generación',
    sinonimos: [ 'ceftriaxone', 'ceftriaxona sódica' ],
    formula: 'C18H18N8O7S3',
    masaMolar: 554.6,
    smiles: 'CN1C(=NC(=O)C(=O)N1)SCC2=C(N3[C@@H]([C@@H](C3=O)NC(=O)/C(=N\\OC)/C4=CSC(=N4)N)SC2)C(=O)O',
    inchikey: 'VAAUVRVFOQPIGI-SPQHTLEESA-N',
    cid: 5479530,
    iupac: '(6R,7R)-7-[[(2Z)-2-(2-amino-1,3-thiazol-4-yl)-2-methoxyiminoacetyl]amino]-3-[(2-methyl-5,6-dioxo-1H-1,2,4-triazin-3-yl)sulfanylmethyl]-8-oxo-5-thia-1-azabicyclo[4.2.0]oct-2-ene-2-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'ceftriaxona-inyectable',
      producto: 'CEFTRIAXONA FRESENIUS KABI 1 g POLVO Y DISOLVENTE PARA SOLUCIÓN INYECTABLE INTRAMUSCULAR EFG',
      titular: 'Fresenius Kabi España, S.A.U.',
      mercado: 'España (UE)',
      forma: 'Polvo y disolvente para solución inyectable',
      formaFuente: 'POLVO Y DISOLVENTE PARA SOLUCIÓN INYECTABLE',
      liberacion: 'no declarada',
      concentraciones: '1 g de ceftriaxona (como ceftriaxona sódica) por vial, con una ampolla de disolvente, según la ficha técnica',
      excipientes: [
        'Disolvente: clorhidrato de lidocaína al 1 % en agua para preparaciones inyectables (solo para inyección intramuscular)',
        'agua para preparaciones inyectables'
      ],
      usos: {
        t: 'Infecciones como meningitis bacteriana, neumonía, otitis media aguda, infecciones intraabdominales, urinarias complicadas y óseas y articulares, en adultos y niños, incluidos neonatos a término.',
        ref: {
          f: 'cima-64540',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Ceftriaxona Fresenius Kabi está indicada para el tratamiento de las siguientes infecciones en adultos y niños incluyendo neonatos a término',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-64540',
      advertencias: [
        {
          titulo: 'Hipersensibilidad',
          texto: 'Se han notificado reacciones de hipersensibilidad graves y a veces mortales, como con todos los betalactámicos.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'cima-64540',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Como ocurre con todos los agentes antibacterianos betalactámicos, se han notificado reacciones de hipersensibilidad graves y ocasionalmente mortales',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Síndrome de Kounis',
          texto: 'Las reacciones de hipersensibilidad pueden progresar hasta el síndrome de Kounis, que puede provocar un infarto de miocardio.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-64540',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Las reacciones de hipersensibilidad también pueden progresar hasta el síndrome de Kounis, una reacción alérgica grave que puede provocar un infarto de miocardio',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: eosinofilia, leucopenia, trombocitopenia, diarrea, erupción cutánea y aumento de las enzimas hepáticas.',
          'FT 4.8',
          'Las reacciones adversas notificadas con más frecuencia para la ceftriaxona son eosinofilia, leucopenia, trombocitopenia, diarrea, erupción cutánea y aumento de las enzimas hepáticas'
        ],
        [
          'Las frecuencias de la ficha se obtuvieron de ensayos clínicos.',
          'FT 4.8',
          'Los datos para determinar la frecuencia de RAM de ceftriaxona se obtuvieron de ensayos clínicos'
        ]
      ],
      familia: 'inyectable',
      vias: [ 'intramuscular' ],
      formaNormalizada: 'polvo-inyectable'
    }
  ],
  resumen: {
    contiene: 'Polvo y disolvente para solución inyectable: 1 g de ceftriaxona (como ceftriaxona sódica) por vial, con una ampolla de disolvente, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Infecciones como meningitis bacteriana, neumonía, otitis media aguda, infecciones intraabdominales, urinarias complicadas y óseas y articulares, en adultos y niños, incluidos neonatos a término.',
    actua: 'Inhibe la síntesis de la pared celular bacteriana tras unirse a las proteínas fijadoras de penicilina; se interrumpe la biosíntesis del peptidoglucano, lo que provoca la lisis y la muerte de la bacteria.',
    recorrido: 'Tras una dosis única intramuscular, la concentración plasmática máxima es de alrededor de 81 mg/l y se alcanza en 2-3 horas. El 50-60 % se excreta inalterada por la orina y el 40-50 % por la bilis, también inalterada; la vida media de eliminación en adultos es de unas 8 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'musculos' ],
      llega: 'La solución inyectada llega al músculo, en el lugar de la inyección.',
      ocurre: 'Polvo y disolvente para solución inyectable de vía intramuscular: el fármaco se inyecta como solución en el músculo.',
      sigue: 'Desde el músculo el fármaco pasa a la sangre.',
      datos: [
        {
          t: 'Polvo y disolvente para solución inyectable de vía intramuscular: el fármaco se inyecta como solución en el músculo.',
          ref: { f: 'cima-64540', sec: '3 · Forma farmacéutica', cita: 'Los viales contienen un polvo entre blanco y amarillento', codigo: 'FT 3' }
        }
      ]
    },
    absorcion: {
      organos: [ 'musculos', 'sangre' ],
      organosGenerales: [],
      llega: 'El fármaco pasa del músculo a la sangre.',
      ocurre: 'Tras una dosis única intramuscular, la concentración plasmática máxima es de alrededor de 81 mg/l y se alcanza en 2-3 horas.',
      sigue: 'Circula con la sangre hacia los tejidos.',
      datos: [
        {
          t: 'Tras una dosis única intramuscular, la concentración plasmática máxima es de alrededor de 81 mg/l y se alcanza en 2-3 horas.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La concentración plasmática máxima tras una dosis única IM de 1 g es alrededor de 81 mg/l, y se alcanza en 2-3 horas tras su administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El área bajo la curva tras la administración intramuscular es equivalente a la de la intravenosa, lo que indica una biodisponibilidad del 100 %.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la biodisponibilidad de ceftriaxona administrada IM es del 100%',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'El fármaco circula en la sangre unido a la albúmina.',
      ocurre: 'Se une de forma reversible a la albúmina plasmática (95 % a concentraciones inferiores a 100 mg/l, 85 % a 300 mg/l); el volumen de distribución es de 7-12 l y penetra en más de 60 tejidos y líquidos corporales.',
      sigue: 'Se reparte por tejidos y líquidos corporales y se elimina por la orina y la bilis.',
      datos: [
        {
          t: 'Se une de forma reversible a la albúmina plasmática (95 % a concentraciones inferiores a 100 mg/l, 85 % a 300 mg/l); el volumen de distribución es de 7-12 l y penetra en más de 60 tejidos y líquidos corporales.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ceftriaxona se une a la albúmina plasmática de forma reversible, y dicha unión decrece con el aumento de concentración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución de ceftriaxona es de 7-12 l.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución de ceftriaxona es de 7-12 l',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Atraviesa la barrera placentaria y se excreta en leche materna a bajas concentraciones.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ceftriaxona atraviesa la barrera placentaria y se excreta en leche materna a bajas concentraciones',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Proteínas fijadoras de penicilina (PBP)',
        efecto: 'Inhibe la síntesis de la pared celular bacteriana tras unirse a las proteínas fijadoras de penicilina; se interrumpe la biosíntesis del peptidoglucano, lo que provoca la lisis y la muerte de la bacteria.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la síntesis de la pared celular bacteriana tras unirse a las proteínas fijadoras de penicilina; se interrumpe la biosíntesis del peptidoglucano, lo que provoca la lisis y la muerte de la bacteria.',
            ref: {
              f: 'cima-64540',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La ceftriaxona inhibe la síntesis de la pared celular bacteriana tras su unión a las proteínas fijadoras de penicilina (PBP)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-grueso' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza de forma sistémica; solo la flora intestinal la transforma en metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza de forma sistémica; solo la flora intestinal la transforma en metabolitos inactivos.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ceftriaxona no se metaboliza sistemáticamente, únicamente la flora intestinal la transforma a metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos inactivos (flora intestinal)',
          actividad: 'inactivo',
          nota: 'Se forman por la flora intestinal.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'únicamente la flora intestinal la transforma a metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 50-60 % se excreta inalterada por la orina y el 40-50 % por la bilis, también inalterada; la vida media de eliminación en adultos es de unas 8 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 50-60 % se excreta inalterada por la orina y el 40-50 % por la bilis, también inalterada; la vida media de eliminación en adultos es de unas 8 horas.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El 50-60% de ceftriaxona se excreta inalterada en la orina, en tanto que el 40-50% es excretada por la bilis, también en forma inalterada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media de eliminación en adultos es de aproximadamente 8 horas.',
          ref: {
            f: 'cima-64540',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La vida media de eliminación en adultos es de aproximadamente 8 horas',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración plasmática máxima tras una dosis intramuscular única',
      valor: '2-3',
      unidad: 'h',
      analito: 'ceftriaxona',
      condiciones: 'dosis intramuscular única',
      ref: { f: 'cima-64540', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se alcanza en 2-3 horas tras su administración', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima tras una dosis intramuscular única',
      valor: '81 (aprox.)',
      unidad: 'mg/L',
      analito: 'ceftriaxona',
      condiciones: 'dosis intramuscular única',
      ref: {
        f: 'cima-64540',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La concentración plasmática máxima tras una dosis única IM de 1 g es alrededor de 81 mg/l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad por vía intramuscular',
      valor: '100',
      unidad: '%',
      analito: 'ceftriaxona',
      ref: {
        f: 'cima-64540',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la biodisponibilidad de ceftriaxona administrada IM es del 100%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '7-12',
      unidad: 'L',
      analito: 'ceftriaxona',
      ref: { f: 'cima-64540', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución de ceftriaxona es de 7-12 l', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación',
      valor: '8 (aprox.)',
      unidad: 'h',
      analito: 'ceftriaxona',
      poblacion: 'adultos',
      ref: {
        f: 'cima-64540',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación en adultos es de aproximadamente 8 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado inalterado por la orina',
      valor: '50-60',
      unidad: '% de la dosis',
      analito: 'ceftriaxona',
      ref: {
        f: 'cima-64540',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El 50-60% de ceftriaxona se excreta inalterada en la orina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático total',
      valor: '10-22',
      unidad: 'mL/min',
      analito: 'ceftriaxona',
      ref: { f: 'cima-64540', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El aclaramiento plasmático total es de 10-22 ml/min', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-64540', '64540', 'CEFTRIAXONA FRESENIUS KABI 1 g POLVO Y DISOLVENTE PARA SOLUCIÓN INYECTABLE INTRAMUSCULAR EFG (Fresenius Kabi España, S.A.U.)', '2025-09-01', '2026-11-15'),
    rengPubchem(5479530, 'ceftriaxone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
