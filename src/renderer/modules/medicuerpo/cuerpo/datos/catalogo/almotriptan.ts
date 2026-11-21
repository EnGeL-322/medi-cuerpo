import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'almotriptan',
    nombre: 'Almotriptán',
    clase: 'Agonista de los receptores 5-HT1B/1D (triptán antimigrañoso)',
    sinonimos: [ 'almotriptan', 'Amignul' ],
    formula: 'C17H25N3O2S',
    masaMolar: 335.5,
    smiles: 'CN(C)CCC1=CNC2=C1C=C(C=C2)CS(=O)(=O)N3CCCC3',
    inchikey: 'WKEMJKQOLOHJLZ-UHFFFAOYSA-N',
    cid: 123606,
    iupac: 'N,N-dimethyl-2-[5-(pyrrolidin-1-ylsulfonylmethyl)-1H-indol-3-yl]ethanamine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'almotriptan-oral',
      producto: 'AMIGNUL 12,5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Almirall S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '12,5 mg de almotriptán por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Malato ácido de almotriptán',
        ref: {
          f: 'cima-63025',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'Cada comprimido contiene almotriptán 12,5 mg en forma de almotriptán',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Manitol (E-421)',
        'Celulosa microcristalina',
        'Povidona',
        'Carboximetilalmidón de sodio',
        'Fumarato de estearilo y sodio',
        'Hipromelosa',
        'Dióxido de titanio (E-171)',
        'Macrogol 400',
        'Cera de carnauba'
      ],
      usos: {
        t: 'Tratamiento agudo de la fase de cefalea de las crisis de migraña con o sin aura.',
        ref: {
          f: 'cima-63025',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento agudo de la fase de cefalea de las crisis de migraña con o sin aura',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-63025',
      advertencias: [
        {
          titulo: 'Accidentes cerebrovasculares',
          texto: 'En pacientes tratados con agonistas 5-HT1B/1D se han notificado accidentes cerebrovasculares y otros acontecimientos cerebrovasculares.',
          organos: [ 'encefalo', 'vasos' ],
          ref: {
            f: 'cima-63025',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En pacientes tratados con agonistas 5HT 1B/1D se han notificado accidentes cerebrovasculares y otros acontecimientos cerebrovasculares',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Diagnóstico claro de migraña',
          texto: 'Solo debe emplearse con un diagnóstico claro de migraña; se evita en la migraña basilar, hemipléjica u oftalmopléjica.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-63025',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Almotriptán sólo debe emplearse en casos de diagnóstico claro de migraña',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes a la dosis terapéutica: mareos, somnolencia, náuseas, vómitos y fatiga.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes a la dosis terapéutica fueron mareos, somnolencia, náuseas, vómitos y fatiga'
        ],
        [
          'Ninguna reacción adversa tuvo una incidencia superior al 1,5 %.',
          'FT 4.8',
          'Ninguna de las reacciones adversas tuvo una incidencia superior al 1,5%'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 12,5 mg de almotriptán por comprimido, según la ficha técnica; el activo va como malato ácido de almotriptán. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la fase de cefalea de las crisis de migraña con o sin aura.',
    actua: 'Es un agonista selectivo de los receptores 5-HT1B y 5-HT1D, que median la vasoconstricción de ciertos vasos craneales.',
    recorrido: 'Se absorbe bien y su biodisponibilidad oral es cercana al 70 %. Más del 75 % de la dosis se elimina por la orina y el resto por las heces; aproximadamente la mitad de lo excretado es almotriptán inalterado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-63025', sec: '3 · Forma farmacéutica', cita: 'Comprimidos recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien y su biodisponibilidad oral es cercana al 70 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien y su biodisponibilidad oral es cercana al 70 %.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Almotriptán es bien absorbido, presentando una biodisponibilidad oral cercana al 70%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración plasmática máxima se alcanza aproximadamente entre 1,5 y 3,0 horas después de la administración.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La concentración plasmática máxima (C max ) se alcanza aproximadamente entre 1,5 y 3,0 horas después de la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La velocidad y la magnitud de la absorción no se ven afectadas por la ingesta simultánea de alimento.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La velocidad y la magnitud de la absorción no se ven afectadas por la ingesta simultánea de alimento',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Tras una dosis intravenosa en voluntarios sanos, el volumen de distribución medio fue de 195 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tras una dosis intravenosa en voluntarios sanos, el volumen de distribución medio fue de 195 litros.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'los valores medios del volumen de distribución, aclaramiento total y semivida de eliminación fueron de 195 L , 40 L / h y 3,4 h respectivamente',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT1B y 5-HT1D',
        efecto: 'Es un agonista selectivo de los receptores 5-HT1B y 5-HT1D, que median la vasoconstricción de ciertos vasos craneales.',
        lugar: [ 'vasos', 'encefalo' ],
        datos: [
          {
            t: 'Es un agonista selectivo de los receptores 5-HT1B y 5-HT1D, que median la vasoconstricción de ciertos vasos craneales.',
            ref: {
              f: 'cima-63025',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Almotriptán es un agonista selectivo de los receptores 5-HT 1B y 5-HT 1D que median la vasoconstricción de ciertos vasos craneales',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La principal vía de biotransformación es la desaminación oxidativa a un metabolito indolacético, catalizada por la monoaminooxidasa (MAO-A); intervienen también las isoenzimas 3A4 y 2D6 del citocromo P450 y la flavín monooxigenasa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La principal vía de biotransformación es la desaminación oxidativa a un metabolito indolacético, catalizada por la monoaminooxidasa (MAO-A); intervienen también las isoenzimas 3A4 y 2D6 del citocromo P450 y la flavín monooxigenasa.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La principal ruta de biotransformación es la desaminación oxidativa a un metabolito indolacético, catalizada por la monoaminooxidasa (MAO-A)',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito indolacético',
          actividad: 'inactivo',
          nota: 'Sin actividad farmacológica significativa.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Ninguno de los metabolitos posee actividad farmacológica significativa',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 75 % de la dosis se elimina por la orina y el resto por las heces; aproximadamente la mitad de lo excretado es almotriptán inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 75 % de la dosis se elimina por la orina y el resto por las heces; aproximadamente la mitad de lo excretado es almotriptán inalterado.',
          ref: {
            f: 'cima-63025',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Más del 75% de la dosis administrada se elimina por la orina, y el resto por las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 3,5 horas en individuos sanos.',
          ref: { f: 'cima-63025', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de unas 3,5 horas en individuos sanos', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'almotriptán',
      ref: { f: 'cima-63025', sec: '5.2 · Propiedades farmacocinéticas', cita: 'presentando una biodisponibilidad oral cercana al 70%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1,5-3,0',
      unidad: 'h',
      analito: 'almotriptán',
      ref: {
        f: 'cima-63025',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanza aproximadamente entre 1,5 y 3,0 horas después de la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '195',
      unidad: 'L',
      analito: 'almotriptán',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'cima-63025',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'los valores medios del volumen de distribución, aclaramiento total y semivida de eliminación fueron de 195 L , 40 L / h y 3,4 h respectivamente',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '3,5 (aprox.)',
      unidad: 'h',
      analito: 'almotriptán',
      poblacion: 'individuos sanos',
      ref: { f: 'cima-63025', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de unas 3,5 horas en individuos sanos', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada por la orina',
      valor: '> 75',
      unidad: '% de la dosis',
      analito: 'almotriptán y metabolitos',
      ref: {
        f: 'cima-63025',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Más del 75% de la dosis administrada se elimina por la orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-63025', '63025', 'AMIGNUL 12,5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Almirall S.A.)', '2021-02-06', '2026-11-15'),
    rengPubchem(123606, 'almotriptan', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
