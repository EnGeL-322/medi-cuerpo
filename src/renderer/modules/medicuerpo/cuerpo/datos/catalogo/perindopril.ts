import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'perindopril',
    nombre: 'Perindopril',
    clase: 'Inhibidor de la enzima conversora de la angiotensina (IECA)',
    sinonimos: [ 'perindopril' ],
    formula: 'C19H32N2O5',
    masaMolar: 368.5,
    smiles: 'CCC[C@@H](C(=O)OCC)N[C@@H](C)C(=O)N1[C@H]2CCCC[C@H]2C[C@H]1C(=O)O',
    inchikey: 'IPVQLZZIHOAWMC-QXKUPLGCSA-N',
    cid: 107807,
    iupac: '(2S,3aS,7aS)-1-[(2S)-2-[[(2S)-1-ethoxy-1-oxopentan-2-yl]amino]propanoyl]-2,3,3a,4,5,6,7,7a-octahydroindole-2-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'perindopril-oral',
      producto: 'PERINDOPRIL KRKA 4 mg COMPRIMIDOS EFG',
      titular: 'Krka D.D. Novo Mesto',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '4 mg de perindopril (sal de terbutilamina; equivalentes a 3,338 mg de perindopril) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Sal de terbutilamina de perindopril',
        ref: { f: 'cima-68827', sec: '2 · Composición cualitativa y cuantitativa', cita: 'perindopril sal de terbutilamina', codigo: 'FT 2' }
      },
      excipientes: [ 'Lactosa monohidrato', 'Celulosa microcristalina', 'Hidrogenocarbonato sódico', 'Sílice coloidal anhidra', 'Estearato de magnesio' ],
      usos: {
        t: 'Tratamiento de la hipertensión, de la insuficiencia cardíaca sintomática y de la enfermedad coronaria estable.',
        ref: { f: 'cima-68827', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipertensión', codigo: 'FT 4.1' }
      },
      fuente: 'cima-68827',
      advertencias: [
        {
          titulo: 'Hipotensión',
          texto: 'Los inhibidores de la ECA pueden inducir una caída de la presión arterial.',
          organos: [ 'vasos', 'corazon' ],
          ref: {
            f: 'cima-68827',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Los inhibidores de la ECA pueden inducir una caída de la presión arterial',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Enfermedad coronaria estable',
          texto: 'Si durante el primer mes aparece un episodio de angina de pecho inestable, se valora con cuidado el beneficio y el riesgo antes de continuar.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-68827',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'aparece un episodio de angina de pecho inestable (grave o no), se procederá a una cuidadosa valoración del beneficio/riesgo antes de continuar con el tratamiento',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Los acontecimientos adversos más frecuentes incluyen mareos, cefalea, parestesia, vértigo, alteraciones visuales, acúfenos, hipotensión, tos y disnea, entre otros.',
          'FT 4.8',
          'Los acontecimientos adversos más frecuentes notificados en los ensayos clínicos y observados con perindopril son: mareos, cefalea, parestesia, vértigo, alteraciones visuales, acúfenos, hipotensión, tos, disnea'
        ],
        [
          'El perfil de seguridad es coherente con el de los inhibidores de la ECA.',
          'FT 4.8',
          'El perfil de seguridad de perindopril es coherente con el perfil de seguridad de los inhibidores de la ECA'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 4 mg de perindopril (sal de terbutilamina; equivalentes a 3,338 mg de perindopril) por comprimido, según la ficha técnica; el activo va como sal de terbutilamina de perindopril. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, de la insuficiencia cardíaca sintomática y de la enfermedad coronaria estable.',
    actua: 'Inhibe la enzima que transforma la angiotensina I en angiotensina II (enzima conversora de la angiotensina, ECA).',
    recorrido: 'Se absorbe de forma rápida y su concentración máxima se alcanza antes de una hora. El perindoprilato se excreta por la orina y alcanza el estado estacionario antes de 4 días.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-68827', sec: '3 · Forma farmacéutica', cita: 'Perindopril Krka 4 mg comprimidos: blanco, oblongo, biconvexo', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe de forma rápida y su concentración máxima se alcanza antes de una hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe de forma rápida y su concentración máxima se alcanza antes de una hora.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de la administración oral, el perindopril se absorbe de forma rápida y su concentración máxima se alcanza antes de una hora',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La ingesta reduce la conversión a perindoprilato y, por tanto, la biodisponibilidad.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Como la ingesta reduce la conversión hacia el perindoprilato y, por ende, la biodisponibilidad',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión del perindoprilato a las proteínas del plasma es del 20 %, sobre todo a la enzima convertidora de angiotensina, y depende de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión del perindoprilato a las proteínas del plasma es del 20 %, sobre todo a la enzima convertidora de angiotensina, y depende de la concentración.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión del perindoprilato a las proteínas plasmáticas es del 20%, fundamentalmente a la enzima convertidora de angiotensina, pero es dependiente de la concentración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución del perindoprilato no ligado es de unos 0,2 L/kg.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución del perindoprilato no ligado se aproxima a 0,2 l/kg',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Enzima conversora de la angiotensina (ECA)',
        efecto: 'Inhibe la enzima que transforma la angiotensina I en angiotensina II (enzima conversora de la angiotensina, ECA).',
        lugar: [ 'vasos', 'corazon', 'rinones' ],
        datos: [
          {
            t: 'Inhibe la enzima que transforma la angiotensina I en angiotensina II (enzima conversora de la angiotensina, ECA).',
            ref: {
              f: 'cima-68827',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El perindopril es un inhibidor de la enzima que transforma la angiotensina I en angiotensina II (enzima conversora de la angiotensina, ECA)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Es un profármaco: el 27 % de la dosis llega a la sangre como el metabolito activo perindoprilato; además, da cinco metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Es un profármaco: el 27 % de la dosis llega a la sangre como el metabolito activo perindoprilato; además, da cinco metabolitos inactivos.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'alcanza la circulación sanguínea como el metabolito activo perindoprilato',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Perindoprilato',
          actividad: 'activo',
          nota: 'Metabolito activo; su concentración máxima se alcanza en 3 a 4 horas.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'alcanza la circulación sanguínea como el metabolito activo perindoprilato',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Cinco metabolitos adicionales',
          actividad: 'inactivo',
          nota: 'Inactivos.',
          ref: {
            f: 'cima-68827',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el perindopril da cinco metabolitos, todos ellos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El perindoprilato se excreta por la orina y alcanza el estado estacionario antes de 4 días.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El perindoprilato se excreta por la orina y alcanza el estado estacionario antes de 4 días.',
          ref: { f: 'cima-68827', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El perindoprilato se excreta en la orina', codigo: 'FT 5.2' }
        },
        {
          t: 'El estado estacionario se alcanza antes de 4 días.',
          ref: { f: 'cima-68827', sec: '5.2 · Propiedades farmacocinéticas', cita: 'alcanzando el estado estacionario antes de 4 días', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima de perindopril',
      valor: '< 1',
      unidad: 'h',
      analito: 'perindopril',
      ref: { f: 'cima-68827', sec: '5.2 · Propiedades farmacocinéticas', cita: 'su concentración máxima se alcanza antes de una hora', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión del perindoprilato a proteínas plasmáticas',
      valor: '20',
      unidad: '%',
      analito: 'perindoprilato',
      ref: {
        f: 'cima-68827',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión del perindoprilato a las proteínas plasmáticas es del 20%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución del perindoprilato no ligado',
      valor: '0,2 (aprox.)',
      unidad: 'L/kg',
      analito: 'perindoprilato',
      ref: {
        f: 'cima-68827',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución del perindoprilato no ligado se aproxima a 0,2 l/kg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática de perindopril',
      valor: '1',
      unidad: 'h',
      analito: 'perindopril',
      ref: { f: 'cima-68827', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida plasmática de perindopril es de 1 hora', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-68827', '68827', 'PERINDOPRIL KRKA 4 mg COMPRIMIDOS EFG (Krka D.D. Novo Mesto)', '2022-03-10', '2026-11-15'),
    rengPubchem(107807, 'perindopril', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
