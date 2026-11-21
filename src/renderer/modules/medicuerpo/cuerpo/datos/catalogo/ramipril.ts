import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ramipril',
    nombre: 'Ramipril',
    clase: 'Inhibidor de la ECA (profármaco)',
    sinonimos: [ 'ramipril', 'Altace' ],
    formula: 'C23H32N2O5',
    masaMolar: 416.5,
    smiles: 'CCOC(=O)[C@H](CCC1=CC=CC=C1)N[C@@H](C)C(=O)N2[C@H]3CCC[C@H]3C[C@H]2C(=O)O',
    inchikey: 'HDACQVRGBOVJII-JBDAPHQKSA-N',
    cid: 5362129,
    iupac: '(2S,3aS,6aS)-1-[(2S)-2-[[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino]propanoyl]-3,3a,4,5,6,6a-hexahydro-2H-cyclopenta[b]pyrrole-2-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'ramipril-oral',
      producto: 'Ramipril · cápsula',
      titular: 'HIKMA PHARMACEUTICALS USA INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '1.25 mg, 2.5 mg, 5 mg o 10 mg por cápsula, según la etiqueta',
      excipientes: [
        'starch, corn',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'fd&c blue no. 2',
        'fd&c red no. 40',
        'fd&c yellow no. 6',
        'propylene glycol',
        'shellac',
        'd&c yellow no. 10'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, para bajar la presión arterial.',
        ref: {
          f: 'dailymed-ramipril',
          sec: '1 · Indicaciones',
          cita: 'Ramipril is an angiotensin converting enzyme (ACE) inhibitor indicated for the treatment of hypertension, to lower blood pressure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ramipril',
      advertencias: [
        {
          titulo: 'Toxicidad fetal',
          texto: 'Los fármacos que actúan directamente sobre el sistema renina-angiotensina pueden causar lesiones y muerte al feto en desarrollo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-ramipril',
            sec: 'Advertencia destacada',
            cita: 'Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Angioedema',
          texto: 'Puede aparecer angioedema en cualquier momento del tratamiento con inhibidores de la ECA.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-ramipril',
            sec: '5 · Advertencias y precauciones',
            cita: 'Angioedema may occur at any time during treatment with ACE inhibitors including ramipril',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fallo hepático',
          texto: 'Rara vez, los inhibidores de la ECA se han asociado a ictericia colestásica que progresa a necrosis hepática fulminante y a veces a la muerte.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-ramipril',
            sec: '5 · Advertencias y precauciones',
            cita: 'ACE inhibitors, including ramipril, have been associated with a syndrome that starts with cholestatic jaundice and progresses to fulminant hepatic necrosis and sometimes death',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en la hipertensión: dolor de cabeza, mareo, fatiga y tos.',
          '34084-4',
          'The most common adverse reactions in patients with hypertension included headache, dizziness, fatigue, and cough'
        ],
        [
          'Los motivos más frecuentes de suspensión fueron la tos (1,0 %), el mareo (0,5 %) y la impotencia (0,4 %).',
          '34084-4',
          'The most common reasons for discontinuation were: cough (1.0%), dizziness (0.5%), and impotence (0.4%)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 1.25 mg, 2.5 mg, 5 mg o 10 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, para bajar la presión arterial.',
    actua: 'El ramipril y su metabolito ramiprilat inhiben la enzima convertidora de angiotensina; baja la angiotensina II plasmática, lo que reduce la actividad vasopresora y la secreción de aldosterona.',
    recorrido: 'Tras la toma, el pico plasmático de ramipril llega en la primera hora; se absorbe al menos entre el 50 % y el 60 % y la comida no influye de forma significativa, aunque reduce la velocidad de absorción. Tras una dosis oral, alrededor del 60 % del fármaco original y de sus metabolitos sale por la orina y alrededor del 40 % aparece en las heces; menos del 2 % de la dosis sale por la orina como ramipril sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '3 · Formas y concentraciones',
            cita: 'Ramipril Capsules, USP are supplied as hard gelatin capsules containing 1.25 mg, 2.5 mg, 5 mg and 10 mg of ramipril, USP',
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
      ocurre: 'Tras la toma, el pico plasmático de ramipril llega en la primera hora; se absorbe al menos entre el 50 % y el 60 % y la comida no influye de forma significativa, aunque reduce la velocidad de absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma, el pico plasmático de ramipril llega en la primera hora; se absorbe al menos entre el 50 % y el 60 % y la comida no influye de forma significativa, aunque reduce la velocidad de absorción.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of ramipril, peak plasma concentrations (C max ) of ramipril are reached within 1 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'La extensión de la absorción es de al menos el 50 % al 60 % y no depende de forma significativa de la comida, aunque la velocidad de absorción disminuye.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'The extent of absorption is at least 50% to 60% and is not significantly influenced by the presence of food in the gastrointestinal tract, although the rate of absorption is reduced',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta fue del 28 % para el ramipril y del 44 % para el ramiprilat al comparar 5 mg orales con la misma dosis intravenosa.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailabilities of ramipril and ramiprilat were 28% and 44%, respectively, when 5 mg of oral ramipril was compared with the same dose of ramipril given intravenously',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión del ramipril a proteínas del suero es de alrededor del 73 % y la del ramiprilat, del 56 %; el ramiprilat alcanza su pico plasmático entre 2 y 4 horas después de la toma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión del ramipril a proteínas del suero es de alrededor del 73 % y la del ramiprilat, del 56 %; el ramiprilat alcanza su pico plasmático entre 2 y 4 horas después de la toma.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'The serum protein binding of ramipril is about 73% and that of ramiprilat about 56%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La ruptura del grupo éster, sobre todo en el hígado, convierte el ramipril en su metabolito diácido activo, el ramiprilat.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'Cleavage of the ester group (primarily in the liver) converts ramipril to its active diacid metabolite, ramiprilat',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Enzima convertidora de angiotensina (ECA)',
        efecto: 'El ramipril y su metabolito ramiprilat inhiben la enzima convertidora de angiotensina; baja la angiotensina II plasmática, lo que reduce la actividad vasopresora y la secreción de aldosterona.',
        lugar: [ 'vasos', 'rinones' ],
        datos: [
          {
            t: 'El ramipril y su metabolito ramiprilat inhiben la enzima convertidora de angiotensina; baja la angiotensina II plasmática, lo que reduce la actividad vasopresora y la secreción de aldosterona.',
            ref: {
              f: 'dailymed-ramipril',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibition of ACE results in decreased plasma angiotensin II, which leads to decreased vasopressor activity and to decreased aldosterone secretion',
              codigo: '43679-0'
            }
          },
          {
            t: 'La ECA es una peptidil dipeptidasa que cataliza la conversión de angiotensina I en angiotensina II, vasoconstrictora.',
            ref: {
              f: 'dailymed-ramipril',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Angiotensin converting enzyme is a peptidyl dipeptidase that catalyzes the conversion of angiotensin I to the vasoconstrictor substance, angiotensin II',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El ramipril se metaboliza casi por completo a ramiprilat, que tiene unas 6 veces la actividad inhibidora de la ECA, y a otros metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El ramipril se metaboliza casi por completo a ramiprilat, que tiene unas 6 veces la actividad inhibidora de la ECA, y a otros metabolitos inactivos.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'Ramipril is almost completely metabolized to ramiprilat, which has about 6 times the ACE inhibitory activity of ramipril',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ramiprilat (diácido)',
          actividad: 'activo',
          nota: 'Unas 6 veces la actividad inhibidora de la ECA del ramipril.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'Ramipril is almost completely metabolized to ramiprilat, which has about 6 times the ACE inhibitory activity of ramipril',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Dicetopiperazina (éster y ácido) y glucurónidos',
          actividad: 'inactivo',
          nota: 'Sin actividad.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'the diketopiperazine ester, the diketopiperazine acid, and the glucuronides of ramipril and ramiprilat, all of which are inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral, alrededor del 60 % del fármaco original y de sus metabolitos sale por la orina y alrededor del 40 % aparece en las heces; menos del 2 % de la dosis sale por la orina como ramipril sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral, alrededor del 60 % del fármaco original y de sus metabolitos sale por la orina y alrededor del 40 % aparece en las heces; menos del 2 % de la dosis sale por la orina como ramipril sin cambios.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration of ramipril, about 60% of the parent drug and its metabolites are eliminated in the urine, and about 40% is found in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La fase de eliminación aparente corresponde al aclaramiento del ramiprilat libre y tiene una semivida de entre 9 y 18 horas.',
          ref: {
            f: 'dailymed-ramipril',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent elimination phase corresponds to the clearance of free ramiprilat and has a half-life of 9 to 18 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático del ramipril',
      valor: '≤ 1',
      unidad: 'h',
      analito: 'ramipril',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations (C max ) of ramipril are reached within 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático del ramiprilat',
      valor: '2 a 4',
      unidad: 'h',
      analito: 'ramiprilat',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations of ramiprilat are reached 2 to 4 hours after drug intake',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del ramipril',
      valor: '28',
      unidad: '%',
      analito: 'ramipril',
      condiciones: '5 mg orales frente a la misma dosis intravenosa',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailabilities of ramipril and ramiprilat were 28% and 44%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del ramiprilat',
      valor: '44',
      unidad: '%',
      analito: 'ramiprilat',
      condiciones: '5 mg orales frente a la misma dosis intravenosa',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailabilities of ramipril and ramiprilat were 28% and 44%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero del ramipril',
      valor: '73 (aprox.)',
      unidad: '%',
      analito: 'ramipril',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'The serum protein binding of ramipril is about 73% and that of ramiprilat about 56%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero del ramiprilat',
      valor: '56 (aprox.)',
      unidad: '%',
      analito: 'ramiprilat',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'The serum protein binding of ramipril is about 73% and that of ramiprilat about 56%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de la fase de eliminación aparente del ramiprilat',
      valor: '9 a 18',
      unidad: 'h',
      analito: 'ramiprilat',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent elimination phase corresponds to the clearance of free ramiprilat and has a half-life of 9 to 18 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Fármaco y metabolitos eliminados por la orina',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'ramipril y metabolitos',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'about 60% of the parent drug and its metabolites are eliminated in the urine, and about 40% is found in the feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Fármaco y metabolitos en las heces',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'ramipril y metabolitos',
      ref: {
        f: 'dailymed-ramipril',
        sec: '12.3 · Farmacocinética',
        cita: 'about 60% of the parent drug and its metabolites are eliminated in the urine, and about 40% is found in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ramipril', '7e9e84f7-ff47-463d-bf47-7a9745960aae', 'RAMIPRIL CAPSULE', 'Ramipril', '11', '2026-06-05', '2026-11-15'),
    rengPubchem(5362129, 'ramipril', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
