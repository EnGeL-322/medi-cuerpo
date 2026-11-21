import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'macitentan',
    nombre: 'Macitentán',
    clase: 'Antagonista de los receptores de endotelina',
    sinonimos: [ 'macitentan', 'Opsumit' ],
    formula: 'C19H20Br2N6O4S',
    masaMolar: 588.3,
    smiles: 'CCCNS(=O)(=O)NC1=C(C(=NC=N1)OCCOC2=NC=C(C=N2)Br)C3=CC=C(C=C3)Br',
    inchikey: 'JGCMEBMXRHSZKX-UHFFFAOYSA-N',
    cid: 16004692,
    iupac: '5-(4-bromophenyl)-6-[2-(5-bromopyrimidin-2-yl)oxyethoxy]-N-(propylsulfamoyl)pyrimidin-4-amine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'macitentan-oral',
      producto: 'OPSUMIT · comprimido recubierto con película',
      titular: 'ACTELION PHARMACEUTICALS US, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'sodium starch glycolate type a potato',
        'povidone, unspecified',
        'magnesium stearate',
        'polysorbate 80',
        'polyvinyl alcohol, unspecified',
        'soybean lecithin',
        'talc',
        'titanium dioxide',
        'xanthan gum'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial pulmonar (grupo I de la OMS) en adultos, para reducir el riesgo de progresión de la enfermedad y de hospitalización.',
        ref: {
          f: 'dailymed-macitentan',
          sec: '1 · Indicaciones',
          cita: 'OPSUMIT is an endothelin receptor antagonist (ERA) indicated for the treatment of pulmonary arterial hypertension (PAH, WHO Group I) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-macitentan',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Está contraindicado durante el embarazo porque puede dañar al feto, según datos en animales.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-macitentan',
            sec: 'Advertencia destacada',
            cita: 'OPSUMIT is contraindicated for use during pregnancy because it may cause fetal harm based on animal data',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Los antagonistas de los receptores de endotelina causan hepatotoxicidad e insuficiencia hepática.',
          organos: [ 'higado' ],
          ref: { f: 'dailymed-macitentan', sec: '5 · Advertencias y precauciones', cita: 'ERAs cause hepatotoxicity and liver failure', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 3 % por encima del placebo): anemia, nasofaringitis o faringitis, bronquitis, cefalea, gripe e infección urinaria.',
          '34084-4',
          'Most common adverse reactions (more frequent than placebo by ≥3%) are anemia, nasopharyngitis/pharyngitis, bronchitis, headache, influenza, and urinary tract infection'
        ],
        [
          'Entre las reacciones clínicamente importantes figura la hepatotoxicidad.',
          '34084-4',
          'Hepatotoxicity [see Warnings and Precautions (5.2) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial pulmonar (grupo I de la OMS) en adultos, para reducir el riesgo de progresión de la enfermedad y de hospitalización.',
    actua: 'Es un antagonista de los receptores de endotelina que inhibe la unión de la endotelina-1 a los receptores ETA y ETB, implicada en la vasoconstricción, la fibrosis y la hipertrofia vascular de la enfermedad.',
    recorrido: 'La concentración plasmática máxima se alcanza unas 8 horas después de la administración oral. Con macitentán marcado, aproximadamente el 50 % de la radiactividad se eliminó por la orina, pero nada como fármaco inalterado ni como metabolito activo; cerca del 24 % se recuperó en las heces.'
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
            f: 'dailymed-macitentan',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 10 mg, bi-convex film-coated, round, white',
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
      ocurre: 'La concentración plasmática máxima se alcanza unas 8 horas después de la administración oral.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La concentración plasmática máxima se alcanza unas 8 horas después de la administración oral.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The maximum plasma concentration of macitentan is achieved about 8 hours after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se conoce la biodisponibilidad absoluta tras la administración oral.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability after oral administration is not known',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras un desayuno rico en grasa, la exposición al macitentán y a su metabolito activo no cambió.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'the exposure to macitentan and its active metabolite were unchanged after a high fat breakfast',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con un desayuno rico en grasa'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El macitentán y su metabolito activo se unen en más del 99 % a las proteínas del plasma, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El macitentán y su metabolito activo se unen en más del 99 % a las proteínas del plasma, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Macitentan and its active metabolite are highly bound to plasma proteins (>99%), primarily to albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los volúmenes de distribución aparentes del macitentán y de su metabolito activo fueron de unos 50 L y 40 L en voluntarios sanos.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volumes of distribution (Vss/F) of macitentan and its active metabolite were about 50 L and 40 L respectively in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        }
      ],
      accion: {
        diana: 'Receptores de endotelina ETA y ETB',
        efecto: 'Es un antagonista de los receptores de endotelina que inhibe la unión de la endotelina-1 a los receptores ETA y ETB, implicada en la vasoconstricción, la fibrosis y la hipertrofia vascular de la enfermedad.',
        lugar: [ 'pulmones', 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista de los receptores de endotelina que inhibe la unión de la endotelina-1 a los receptores ETA y ETB, implicada en la vasoconstricción, la fibrosis y la hipertrofia vascular de la enfermedad.',
            ref: {
              f: 'dailymed-macitentan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Macitentan is an endothelin receptor antagonist that inhibits the binding of ET-1',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por desalquilación oxidativa de la sulfamida, que forma el metabolito farmacológicamente activo; depende del sistema del citocromo P450, sobre todo de la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por desalquilación oxidativa de la sulfamida, que forma el metabolito farmacológicamente activo; depende del sistema del citocromo P450, sobre todo de la CYP3A4.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Macitentan is metabolized primarily by oxidative depropylation of the sulfamide to form the pharmacologically active metabolite',
            codigo: '43682-4'
          }
        },
        {
          t: 'En esta reacción participa sobre todo la CYP3A4, con contribuciones menores de la CYP2C8, la CYP2C9 y la CYP2C19.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'mainly CYP3A4 with minor contributions of CYP2C8, CYP2C9, and CYP2C19',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito activo del macitentán',
          actividad: 'activo',
          nota: 'En el estado estacionario su exposición es 3 veces la del fármaco original y aporta cerca del 40 % de la actividad farmacológica total.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'At steady state in PAH patients, the systemic exposure to the active metabolite is 3-times the exposure to macitentan and is expected to contribute approximately 40% of the total pharmacologic activity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con macitentán marcado, aproximadamente el 50 % de la radiactividad se eliminó por la orina, pero nada como fármaco inalterado ni como metabolito activo; cerca del 24 % se recuperó en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con macitentán marcado, aproximadamente el 50 % de la radiactividad se eliminó por la orina, pero nada como fármaco inalterado ni como metabolito activo; cerca del 24 % se recuperó en las heces.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 50% of radioactive drug material was eliminated in urine but none was in the form of unchanged drug or the active metabolite',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las semividas de eliminación aparentes del macitentán y de su metabolito activo son de unas 16 y 48 horas.',
          ref: {
            f: 'dailymed-macitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'the apparent elimination half-lives of macitentan and its active metabolite are approximately 16 hours and 48 hours, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '8 (aprox.)',
      unidad: 'h',
      analito: 'macitentán',
      ref: {
        f: 'dailymed-macitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The maximum plasma concentration of macitentan is achieved about 8 hours after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'macitentán y metabolito activo',
      ref: {
        f: 'dailymed-macitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'Macitentan and its active metabolite are highly bound to plasma proteins (>99%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (Vss/F)',
      valor: '50 (aprox.)',
      unidad: 'L',
      analito: 'macitentán',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-macitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volumes of distribution (Vss/F) of macitentan and its active metabolite were about 50 L and 40 L respectively in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación aparente',
      valor: '16 (aprox.)',
      unidad: 'h',
      analito: 'macitentán',
      ref: {
        f: 'dailymed-macitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent elimination half-lives of macitentan and its active metabolite are approximately 16 hours and 48 hours, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad eliminada por la orina',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis de macitentán marcado',
      ref: {
        f: 'dailymed-macitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 50% of radioactive drug material was eliminated in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-macitentan', '1e484a50-55db-4b85-8c57-6cd1b0353abd', 'OPSUMIT (MACITENTAN) TABLET, FILM COATED', 'OPSUMIT', '35', '2025-04-14', '2026-11-15'),
    rengPubchem(16004692, 'macitentan', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
