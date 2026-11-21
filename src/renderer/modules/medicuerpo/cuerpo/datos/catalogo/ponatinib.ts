import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ponatinib',
    nombre: 'Ponatinib',
    clase: 'Inhibidor de cinasas (BCR::ABL, incluida la T315I)',
    sinonimos: [ 'ponatinib hydrochloride', 'Iclusig' ],
    formula: 'C29H27F3N6O',
    masaMolar: 532.6,
    smiles: 'CC1=C(C=C(C=C1)C(=O)NC2=CC(=C(C=C2)CN3CCN(CC3)C)C(F)(F)F)C#CC4=CN=C5N4N=CC=C5',
    inchikey: 'PHXJVRSECIGDHY-UHFFFAOYSA-N',
    cid: 24826799,
    iupac: '3-(2-imidazo[1,2-b]pyridazin-3-ylethynyl)-4-methyl-N-[4-[(4-methylpiperazin-1-yl)methyl]-3-(trifluoromethyl)phenyl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ponatinib-oral',
      producto: 'Iclusig · comprimido recubierto con película',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '15 mg, 45 mg, 30 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de ponatinib',
        ref: { f: 'dailymed-ponatinib', sec: '11 · Descripción', cita: 'ponatinib hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'sodium starch glycolate type b potato',
        'silicon dioxide',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'talc',
        'titanium dioxide',
        'polyvinyl alcohol, unspecified'
      ],
      usos: {
        t: 'Tratamiento de adultos con leucemia linfoblástica aguda Ph+ y con leucemia mieloide crónica en las situaciones que recoge la etiqueta.',
        ref: {
          f: 'dailymed-ponatinib',
          sec: '1 · Indicaciones',
          cita: 'Philadelphia Chromosome-Positive Acute Lymphoblastic Leukemia (Ph+ ALL) Newly diagnosed Ph+ ALL in combination with chemotherapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ponatinib',
      advertencias: [
        {
          titulo: 'Acontecimientos oclusivos arteriales',
          texto: 'Se han producido oclusiones arteriales, incluidas mortales: infarto, ictus, estenosis de grandes arterias cerebrales y enfermedad vascular periférica grave.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-ponatinib',
            sec: 'Advertencia destacada',
            cita: 'AOEs included fatal myocardial infarction, stroke, stenosis of large arterial vessels of the brain, severe peripheral vascular disease',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Tromboembolia venosa',
          texto: 'Se han producido acontecimientos tromboembólicos venosos.',
          organos: [],
          ref: {
            f: 'dailymed-ponatinib',
            sec: 'Advertencia destacada',
            cita: 'Venous thromboembolic events (VTEs) have occurred in ICLUSIG-treate',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Vigilar la presión arterial y tratar la hipertensión; interrumpir, reducir o suspender si no se controla.',
          organos: [],
          ref: {
            f: 'dailymed-ponatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood pressure and manage hypertension as clinically indicated',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pancreatitis',
          texto: 'Vigilar la lipasa sérica y valorar una pancreatitis si se acompaña de síntomas abdominales.',
          organos: [],
          ref: {
            f: 'dailymed-ponatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Evaluate for pancreatitis when lipase elevation is accompanied by abdominal symptoms',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en monoterapia (más del 20 %): exantema, artralgia, dolor abdominal, fatiga, cefalea, estreñimiento, hipertensión, piel seca, hepatotoxicidad, retención de líquidos y edema, entre otras.',
          '34084-4',
          'ICLUSIG as a single agent: rash and related conditions, arthralgia, abdominal pain, fatigue, headache, constipation, hypertension, dry skin, hepatotoxicity, fluid retention and edema'
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
    contiene: 'Comprimido recubierto con película: 15 mg, 45 mg, 30 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de ponatinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia linfoblástica aguda Ph+ y con leucemia mieloide crónica en las situaciones que recoge la etiqueta.',
    actua: 'Inhibidor de cinasas que inhibe in vitro la actividad tirosina cinasa de ABL y de la ABL mutada T315I, además de otras cinasas (VEGFR, PDGFR, FGFR, SRC, KIT, RET, FLT3).',
    recorrido: 'Se desconoce la biodisponibilidad absoluta; el pico aparece en las 6 horas siguientes a la toma y las comidas no cambian la exposición. Tras una dosis oral marcada, alrededor del 87 % se recuperó en las heces y el 5 % en la orina.'
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
          ref: { f: 'dailymed-ponatinib', sec: '3 · Formas y concentraciones', cita: 'Tablets, film-coated: 10 mg of ponatinib', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se desconoce la biodisponibilidad absoluta; el pico aparece en las 6 horas siguientes a la toma y las comidas no cambian la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se desconoce la biodisponibilidad absoluta; el pico aparece en las 6 horas siguientes a la toma y las comidas no cambian la exposición.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak concentrations of ponatinib are observed within 6 hours after ICLUSIG oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comidas ricas o pobres en grasas la exposición no fue distinta de la del ayuno.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma ponatinib exposures (AUC and C max ) were not different when compared to fasting conditions',
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
      ocurre: 'Se une en más del 99 % a las proteínas del plasma in vitro; el volumen de distribución aparente en estado estacionario es de 1 223 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas del plasma in vitro; el volumen de distribución aparente en estado estacionario es de 1 223 L.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ponatinib is greater than 99% bound to plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio en estado estacionario de 1 223 litros.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) apparent steady-state volume of distribution is 1,223 liters (102%)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ],
      accion: {
        diana: 'Tirosina cinasa BCR::ABL',
        efecto: 'Inhibidor de cinasas que inhibe in vitro la actividad tirosina cinasa de ABL y de la ABL mutada T315I, además de otras cinasas (VEGFR, PDGFR, FGFR, SRC, KIT, RET, FLT3).',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas que inhibe in vitro la actividad tirosina cinasa de ABL y de la ABL mutada T315I, además de otras cinasas (VEGFR, PDGFR, FGFR, SRC, KIT, RET, FLT3).',
            ref: {
              f: 'dailymed-ponatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ponatinib inhibited the in vitro tyrosine kinase activity of ABL and T315I mutant ABL with IC 50 concentrations of 0.4 nM and 2.0 nM, respectively',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Al menos el 64 % de la dosis sufre metabolismo de fase I y II; en la fase I intervienen la CYP3A4 y, en menor medida, CYP2C8, CYP2D6 y CYP3A5.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Al menos el 64 % de la dosis sufre metabolismo de fase I y II; en la fase I intervienen la CYP3A4 y, en menor medida, CYP2C8, CYP2D6 y CYP3A5.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A4 and to a lesser extent CYP2C8, CYP2D6 and CYP3A5 are involved in the Phase I metabolism of ponatinib in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 87 % se recuperó en las heces y el 5 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 87 % se recuperó en las heces y el 5 % en la orina.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single oral dose of radiolabeled ponatinib, approximately 87% of the radioactive dose was recovered in the feces and approximately 5% in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media fue de unas 24 horas en pacientes con cáncer.',
          ref: {
            f: 'dailymed-ponatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (range) terminal elimination half-life of ponatinib was approximately 24 (12 to 66) hours',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 6',
      unidad: 'h',
      analito: 'ponatinib',
      ref: {
        f: 'dailymed-ponatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak concentrations of ponatinib are observed within 6 hours after ICLUSIG oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '> 99',
      unidad: '%',
      analito: 'ponatinib',
      ref: {
        f: 'dailymed-ponatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Ponatinib is greater than 99% bound to plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '1223',
      unidad: 'L',
      analito: 'ponatinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-ponatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) apparent steady-state volume of distribution is 1,223 liters (102%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal media',
      valor: '24 (aprox.)',
      unidad: 'h',
      analito: 'ponatinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-ponatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal elimination half-life of ponatinib was approximately 24 (12 to 66) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '87 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-ponatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 87% of the radioactive dose was recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ponatinib', '16d804b6-4957-43ee-b18c-3b36ec37c5ac', 'ICLUSIG (PONATINIB HYDROCHLORIDE) TABLET, FILM COATED', 'Iclusig', '20', '2026-08-19', '2026-11-19'),
    rengPubchem(24826799, 'ponatinib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
