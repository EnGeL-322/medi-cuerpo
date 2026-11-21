import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'hidroxizina',
    nombre: 'Hidroxizina',
    clase: 'Ansiolítico y antihistamínico (difenilmetano)',
    sinonimos: [ 'hydroxyzine', 'Atarax' ],
    formula: 'C21H27ClN2O2',
    masaMolar: 374.9,
    smiles: 'C1CN(CCN1CCOCCO)C(C2=CC=CC=C2)C3=CC=C(C=C3)Cl',
    inchikey: 'ZQDWXGKKHFNSQK-UHFFFAOYSA-N',
    cid: 3658,
    iupac: '2-[2-[4-[(4-chlorophenyl)-phenylmethyl]piperazin-1-yl]ethoxy]ethanol',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'hidroxizina-oral',
      producto: 'ATARAX 25 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Ucb Pharma S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '25 mg de hidroxizina dihidrocloruro por comprimido',
      sal: {
        nombre: 'Hidroxizina dihidrocloruro',
        ref: { f: 'cima-26308', sec: '2 · Composición cualitativa y cuantitativa', cita: '25 mg de hidroxizina dihidrocloruro', codigo: 'FT 2' }
      },
      excipientes: [
        'Núcleo: lactosa monohidrato',
        'celulosa microcristalina',
        'estearato de magnesio',
        'sílice coloidal anhidra',
        'película: dióxido de titanio (E 171)',
        'HPMC 2910 5cP',
        'polietilenglicol 400'
      ],
      usos: {
        t: 'Tratamiento de los síntomas de la ansiedad en adultos y del picor (prurito) en adultos y niños desde 12 meses.',
        ref: {
          f: 'cima-26308',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'tratamiento sintomático de la ansiedad en adultos mayores de 18 años',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-26308',
      advertencias: [
        {
          titulo: 'Convulsiones',
          texto: 'Precaución en personas con alto riesgo de convulsiones; se han notificado más casos en niños.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-26308',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Hidroxizina debe administrarse con precaución en pacientes con un elevado riesgo de convulsiones',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Somnolencia (13,7 % frente a 2,7 % con placebo), la más frecuente en los ensayos.', 'FT 4.8', 'Somnolencia 13,74 2,70' ],
        [
          'Las reacciones se relacionan sobre todo con la depresión del sistema nervioso central, su estimulación paradójica, la acción anticolinérgica o la hipersensibilidad.',
          'FT 4.8',
          'Las reacciones adversas están principalmente relacionadas con la depresión del SNC'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25 mg de hidroxizina dihidrocloruro por comprimido. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de los síntomas de la ansiedad en adultos y del picor (prurito) en adultos y niños desde 12 meses.',
    actua: 'No deprime la corteza cerebral: su acción se atribuye a que reduce la actividad de ciertas regiones del área subcortical del sistema nervioso central. También tiene acción antihistamínica y broncodilatadora.',
    recorrido: 'Se absorbe rápido en el tubo digestivo; el pico en el plasma llega hacia las 2 horas (unos 30 ng/mL con 25 mg y 70 ng/mL con 50 mg en adultos). Solo el 0,8 % sale sin cambios por la orina; la cetirizina formada sale sobre todo sin cambios por la orina (25 % de la hidroxizina oral). La semivida en adultos es de unas 14 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco, oblongo y ranurado, recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco, oblongo y ranurado, recubierto con película.',
          ref: { f: 'cima-26308', sec: '3 · Forma farmacéutica', cita: 'Comprimido blanco, oblongo y con una línea bisectriz', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido en el tubo digestivo; el pico en el plasma llega hacia las 2 horas (unos 30 ng/mL con 25 mg y 70 ng/mL con 50 mg en adultos).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido en el tubo digestivo; el pico en el plasma llega hacia las 2 horas (unos 30 ng/mL con 25 mg y 70 ng/mL con 50 mg en adultos).',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La hidroxizina se absorbe rápidamente en el tracto gastrointestinal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Pico plasmático hacia las dos horas de tomarla.',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se alcanzan aproximadamente dos horas después de la ingestión oral',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'piel', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte ampliamente y se concentra más en los tejidos que en el plasma (volumen aparente de 7 a 16 L/kg); llega pronto a la piel y atraviesa la barrera hematoencefálica y la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente y se concentra más en los tejidos que en el plasma (volumen aparente de 7 a 16 L/kg); llega pronto a la piel y atraviesa la barrera hematoencefálica y la placenta.',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La hidroxizina se distribuye ampliamente por todo el cuerpo y generalmente se concentra más en los tejidos que en el plasma',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En la piel alcanza concentraciones más altas que en el suero.',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'las concentraciones de hidroxizina en la piel son más elevadas que las concentraciones en suero',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Regiones subcorticales del sistema nervioso central',
        efecto: 'No deprime la corteza cerebral: su acción se atribuye a que reduce la actividad de ciertas regiones del área subcortical del sistema nervioso central. También tiene acción antihistamínica y broncodilatadora.',
        lugar: [ 'encefalo', 'piel' ],
        datos: [
          {
            t: 'No deprime la corteza cerebral: su acción se atribuye a que reduce la actividad de ciertas regiones del área subcortical del sistema nervioso central. También tiene acción antihistamínica y broncodilatadora.',
            ref: {
              f: 'cima-26308',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Su acción puede ser debida a una supresión de la actividad en determinadas regiones clave del área subcortical del Sistema Nervioso Central',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente: su vía principal produce cetirizina (45 % de una dosis oral), que bloquea los receptores H1 periféricos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente: su vía principal produce cetirizina (45 % de una dosis oral), que bloquea los receptores H1 periféricos.',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La vía metabólica principal produce un metabolito carboxílico, la cetirizina',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Cetirizina',
          actividad: 'activo',
          nota: 'Metabolito carboxílico principal (45 % de una dosis oral).',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Este metabolito es un antagonista de los receptores H1 periféricos',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Metabolito O-desalquilado',
          actividad: 'desconocida',
          nota: 'Semivida plasmática de 59 horas.',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'un metabolito O -desalquilado con una vida media plasmática de 59 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Solo el 0,8 % sale sin cambios por la orina; la cetirizina formada sale sobre todo sin cambios por la orina (25 % de la hidroxizina oral). La semivida en adultos es de unas 14 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Solo el 0,8 % sale sin cambios por la orina; la cetirizina formada sale sobre todo sin cambios por la orina (25 % de la hidroxizina oral). La semivida en adultos es de unas 14 horas.',
          ref: {
            f: 'cima-26308',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Únicamente un 0,8 % de la dosis se elimina por orina de forma inalterada',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'hidroxizina',
      ref: {
        f: 'cima-26308',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanzan aproximadamente dos horas después de la ingestión oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '30 y 70',
      unidad: 'ng/mL',
      analito: 'hidroxizina',
      poblacion: 'adultos',
      condiciones: 'dosis únicas de 25 mg y 50 mg',
      ref: { f: 'cima-26308', sec: '5.2 · Propiedades farmacocinéticas', cita: 'las C max son normalmente de 30 y 70 ng/ml', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral respecto de la vía intramuscular',
      valor: '80',
      unidad: '%',
      analito: 'hidroxizina',
      ref: {
        f: 'cima-26308',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad oral de la hidroxizina con respecto a la administración intramuscular (IM) es de un 80',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '7-16',
      unidad: 'L/kg',
      analito: 'hidroxizina',
      poblacion: 'adultos',
      ref: {
        f: 'cima-26308',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen aparente de distribución es de 7 a 16 l/kg en adultos',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '14 (7-20)',
      unidad: 'h',
      analito: 'hidroxizina',
      poblacion: 'adultos',
      ref: {
        f: 'cima-26308',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de la hidroxizina en adultos es de aproximadamente unas 14 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '59',
      unidad: 'h',
      analito: 'metabolito O-desalquilado',
      ref: {
        f: 'cima-26308',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'un metabolito O -desalquilado con una vida media plasmática de 59 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina como cetirizina',
      valor: '25',
      unidad: '% de la dosis',
      analito: 'cetirizina (metabolito)',
      condiciones: 'dosis oral',
      ref: {
        f: 'cima-26308',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'un 25 % y un 16 % de la hidroxizina administrada por vía oral e IM',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-26308', '26308', 'ATARAX 25 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Ucb Pharma S.A.)', '2023-02-24', '2026-11-12'),
    rengPubchem(3658, 'hydroxyzine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
