import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'norfloxacino',
    nombre: 'Norfloxacino',
    clase: 'Antibiótico fluoroquinolona',
    sinonimos: [ 'norfloxacin' ],
    formula: 'C16H18FN3O3',
    masaMolar: 319.33,
    smiles: 'CCN1C=C(C(=O)C2=CC(=C(C=C21)N3CCNCC3)F)C(=O)O',
    inchikey: 'OGJPXUAPXNRGGI-UHFFFAOYSA-N',
    cid: 4539,
    iupac: '1-ethyl-6-fluoro-4-oxo-7-piperazin-1-ylquinoline-3-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'norfloxacino-oral',
      producto: 'NORFLOXACINO SANDOZ 400 mg COMPRIMIDOS EFG',
      titular: 'Sandoz Farmaceutica S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '400 mg de norfloxacino por comprimido, según la ficha técnica',
      excipientes: [
        'Povidona',
        'Carboximetilalmidón sódico',
        'Celulosa microcristalina',
        'Sílice coloidal anhidra',
        'Estearato de magnesio',
        'Hidroxipropilmetilcelulosa 2910',
        'Talco',
        'Dióxido de titanio (E-171)',
        'Propilenglicol'
      ],
      usos: {
        t: 'Tratamiento de infecciones por bacterias aerobias sensibles, entre ellas la cistitis aguda no complicada, la prostatitis bacteriana y la orquiepididimitis.',
        ref: {
          f: 'cima-62622',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'infecciones causadas por bacterias aerobias sensibles al norfloxacino',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-62622',
      advertencias: [
        {
          titulo: 'Reacciones adversas graves previas con quinolonas',
          texto: 'Debe evitarse en pacientes que hayan tenido reacciones adversas graves con quinolonas o fluoroquinolonas.',
          organos: [ 'musculos', 'nervios' ],
          ref: {
            f: 'cima-62622',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se debe evitar el uso de norfloxacino en pacientes que hayan experimentado con anterioridad reacciones adversas graves con el uso de medicamentos que contienen quinolonas o fluoroquinolonas',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Reacciones graves incapacitantes y potencialmente irreversibles',
          texto: 'Se han notificado casos muy raros de reacciones graves, de larga duración (meses o años) y potencialmente irreversibles, que afectan a varios sistemas del cuerpo.',
          organos: [ 'musculos', 'nervios' ],
          ref: {
            f: 'cima-62622',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado casos muy raros de reacciones adversas graves incapacitantes, de duración prolongada (persistentes durante meses o años), y potencialmente irreversibles',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Poco frecuente: candidiasis vaginal.', 'FT 4.8', 'Poco frecuentes: candidiasis vaginal' ],
        [ 'Muy rara: agranulocitosis.', 'FT 4.8', 'Muy raras: agranulocitosis' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 400 mg de norfloxacino por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de infecciones por bacterias aerobias sensibles, entre ellas la cistitis aguda no complicada, la prostatitis bacteriana y la orquiepididimitis.',
    actua: 'Inhibe la síntesis del ADN bacteriano al inhibir la topoisomerasa bacteriana II (girasa) y la topoisomerasa IV.',
    recorrido: 'Se absorbe rápidamente tras la administración oral; en voluntarios sanos se absorbe por lo menos entre el 30 % y el 40 % del fármaco. La excreción renal combina filtración glomerular y secreción tubular; entre el 25 % y el 40 % de la dosis se recuperó en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-62622', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente tras la administración oral; en voluntarios sanos se absorbe por lo menos entre el 30 % y el 40 % del fármaco.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente tras la administración oral; en voluntarios sanos se absorbe por lo menos entre el 30 % y el 40 % del fármaco.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El norfloxacino se absorbe rápidamente después de la administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El tiempo hasta la concentración máxima fluctuó entre 0,75 y 2,0 horas.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El tiempo necesario para alcanzar la concentración máxima (t máx ) fluctuó entre 0,75 y 2,0 horas',
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
      ocurre: 'A una concentración de 2,5 mg/L en suero humano, se une en un 13,8 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'A una concentración de 2,5 mg/L en suero humano, se une en un 13,8 % a las proteínas del plasma.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'A una concentración de 2,5 mg/l en suero humano, norfloxacino se une en un 13,8% a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen aparente de distribución es de aproximadamente 223 ± 97 litros.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen aparente de distribución (Vd β ) es aproximadamente de 223±97 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'ADN girasa (topoisomerasa II) y topoisomerasa IV bacterianas',
        efecto: 'Inhibe la síntesis del ADN bacteriano al inhibir la topoisomerasa bacteriana II (girasa) y la topoisomerasa IV.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la síntesis del ADN bacteriano al inhibir la topoisomerasa bacteriana II (girasa) y la topoisomerasa IV.',
            ref: {
              f: 'cima-62622',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'por la inhibición de la de la topoisomerasa bacteriana II (girasa) y topoisomerasa IV',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'bilis' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El fármaco absorbido se elimina por metabolización y por excreción renal y biliar.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El fármaco absorbido se elimina por metabolización y por excreción renal y biliar.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El norfloxacino absorbido desde el tracto gastrointestinal se elimina por metabolización y excreción renal y biliar',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Seis metabolitos',
          actividad: 'activo',
          nota: 'Activos, con menor eficacia antibacteriana que el compuesto original.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El norfloxacino se recupera inalterado en la orina y en forma de seis metabolitos activos cuya eficacia antibacteriana es más baja que la del compuesto originario',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción renal combina filtración glomerular y secreción tubular; entre el 25 % y el 40 % de la dosis se recuperó en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción renal combina filtración glomerular y secreción tubular; entre el 25 % y el 40 % de la dosis se recuperó en la orina.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente el 25-40% de la dosis fue recuperada en la orina después de la administración oral de una dosis única y de dosis repetidas de 400 mg',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida media en el suero es de 3 a 4 horas en voluntarios sanos.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida media en el suero es de 3 a 4 horas en voluntarios sanos',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Más del 70 % del fármaco excretado en la orina está en su forma no metabolizada.',
          ref: {
            f: 'cima-62622',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Más del 70% del fármaco excretado en la orina se recupera en su forma no metabolizada',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '0,75-2,0',
      unidad: 'h',
      analito: 'norfloxacino',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'cima-62622',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El tiempo necesario para alcanzar la concentración máxima (t máx ) fluctuó entre 0,75 y 2,0 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '13,8',
      unidad: '%',
      analito: 'norfloxacino',
      condiciones: 'a 2,5 mg/L en suero humano',
      ref: { f: 'cima-62622', sec: '5.2 · Propiedades farmacocinéticas', cita: 'norfloxacino se une en un 13,8% a proteínas plasmáticas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '223 ± 97',
      unidad: 'L',
      analito: 'norfloxacino',
      ref: {
        f: 'cima-62622',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen aparente de distribución (Vd β ) es aproximadamente de 223±97 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media en el suero',
      valor: '3-4',
      unidad: 'h',
      analito: 'norfloxacino',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'cima-62622',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida media en el suero es de 3 a 4 horas en voluntarios sanos',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '25-40',
      unidad: '% de la dosis',
      analito: 'norfloxacino y metabolitos',
      poblacion: 'voluntarios adultos con función renal normal',
      condiciones: 'dosis de 400 mg',
      ref: {
        f: 'cima-62622',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 25-40% de la dosis fue recuperada en la orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-62622', '62622', 'NORFLOXACINO SANDOZ 400 mg COMPRIMIDOS EFG (Sandoz Farmaceutica S.A.)', '2025-06-06', '2026-11-15'),
    rengPubchem(4539, 'norfloxacin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
