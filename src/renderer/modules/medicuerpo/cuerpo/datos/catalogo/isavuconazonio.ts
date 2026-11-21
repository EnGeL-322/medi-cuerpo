import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'isavuconazonio',
    nombre: 'Isavuconazonio',
    clase: 'Profármaco del isavuconazol, antifúngico azólico',
    sinonimos: [ 'isavuconazonium sulfate', 'Cresemba' ],
    formula: 'C35H35F2N8O5S',
    masaMolar: 717.8,
    smiles: 'C[C@@H](C1=NC(=CS1)C2=CC=C(C=C2)C#N)[C@](CN3C=[N+](C=N3)C(C)OC(=O)N(C)C4=C(C=CC=N4)COC(=O)CNC)(C5=C(C=CC(=C5)F)F)O',
    inchikey: 'RSWOJTICKMKTER-QXLBVTBOSA-N',
    cid: 6918606,
    iupac: '[2-[1-[1-[(2R,3R)-3-[4-(4-cyanophenyl)-1,3-thiazol-2-yl]-2-(2,5-difluorophenyl)-2-hydroxybutyl]-1,2,4-triazol-4-ium-4-yl]ethoxycarbonyl-methylamino]-3-pyridinyl]methyl 2-(methylamino)acetate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'isavuconazonio-oral',
      producto: 'CRESEMBA · cápsula',
      titular: 'ASTELLAS PHARMA US, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 40 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Sulfato de isavuconazonio',
        ref: {
          f: 'dailymed-isavuconazonio',
          sec: '3 · Formas y concentraciones',
          cita: '74.5 mg isavuconazonium sulfate (equivalent to 40 mg of isavuconazole)',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'Óxido de hierro negro',
        'Dióxido de silicio coloidal',
        'Edetato disódico',
        'Goma gelano',
        'Hipromelosa',
        'Citrato de magnesio',
        'Celulosa microcristalina',
        'Acetato potásico',
        'Hidróxido potásico',
        'Propilenglicol',
        'Agua purificada',
        'Óxido de hierro rojo',
        'Goma laca',
        'Laurilsulfato sódico',
        'Ácido esteárico',
        'Solución concentrada de amoníaco',
        'Talco',
        'Dióxido de titanio'
      ],
      usos: {
        t: 'Tratamiento de la aspergilosis invasiva y de la mucormicosis invasiva.',
        ref: {
          f: 'dailymed-isavuconazonio',
          sec: '1 · Indicaciones',
          cita: 'CRESEMBA ® is an azole antifungal indicated for the treatment of: Invasive aspergillosis ( 1.1 ) and Invasive mucormycosis ( 1.2 )',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-isavuconazonio',
      advertencias: [
        {
          titulo: 'Reacciones hepáticas',
          texto: 'Se han notificado reacciones hepáticas graves; evaluar las pruebas hepáticas al inicio y durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious hepatic reactions have been reported',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipersensibilidad',
          texto: 'Se han notificado reacciones anafilácticas mortales; suspender si hay anafilaxia o reacciones cutáneas graves.',
          organos: [],
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '5 · Advertencias y precauciones',
            cita: 'Anaphylactic reactions, with fatal outcome, have been reported during treatment with CRESEMBA',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos, las más frecuentes: náuseas, vómitos, diarrea, cefalea, elevación de pruebas hepáticas, hipopotasemia, estreñimiento, disnea, tos, edema periférico y dolor de espalda.',
          '34084-4',
          'most frequent adverse reactions in adult patients were nausea, vomiting, diarrhea, headache, elevated liver chemistry tests, hypokalemia, constipation, dyspnea, cough, peripheral edema, and back pain'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 100 mg o 40 mg por cápsula, según la etiqueta; el activo va como sulfato de isavuconazonio. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la aspergilosis invasiva y de la mucormicosis invasiva.',
    actua: 'Profármaco del isavuconazol, que inhibe la lanosterol 14-alfa-desmetilasa dependiente del citocromo P450 y, con ello, la síntesis de ergosterol de la membrana fúngica.',
    recorrido: 'El isavuconazol alcanza el máximo en 2 a 3 horas y su biodisponibilidad absoluta es del 98 %; el profármaco no se detecta en plasma tras la toma oral. Tras una dosis marcada, el 46,1 % de la radiactividad se recuperó en las heces y el 45,5 % en la orina; la semivida media del isavuconazol es de 130 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '3 · Formas y concentraciones',
            cita: 'CRESEMBA 74.5 mg isavuconazonium sulfate (equivalent to 40 mg of isavuconazole) capsules are opaque',
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
      ocurre: 'El isavuconazol alcanza el máximo en 2 a 3 horas y su biodisponibilidad absoluta es del 98 %; el profármaco no se detecta en plasma tras la toma oral.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El isavuconazol alcanza el máximo en 2 a 3 horas y su biodisponibilidad absoluta es del 98 %; el profármaco no se detecta en plasma tras la toma oral.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of isavuconazole following oral administration of CRESEMBA is 98%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El isavuconazol alcanza la Cmax entre 2 y 3 horas tras dosis únicas o múltiples.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12.3 · Farmacocinética',
            cita: 'the active moiety, isavuconazole, generally reaches maximum plasma concentrations (C max ) 2 hours to 3 hours after single and multiple dosing',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El isavuconazol se une en más del 99 % a las proteínas, sobre todo a la albúmina; el volumen de distribución es de unos 450 L tras la vía intravenosa.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El isavuconazol se une en más del 99 % a las proteínas, sobre todo a la albúmina; el volumen de distribución es de unos 450 L tras la vía intravenosa.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12.3 · Farmacocinética',
            cita: 'Isavuconazole is highly protein bound (greater than 99%), predominantly to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Lanosterol 14-alfa-desmetilasa fúngica',
        efecto: 'Profármaco del isavuconazol, que inhibe la lanosterol 14-alfa-desmetilasa dependiente del citocromo P450 y, con ello, la síntesis de ergosterol de la membrana fúngica.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Profármaco del isavuconazol, que inhibe la lanosterol 14-alfa-desmetilasa dependiente del citocromo P450 y, con ello, la síntesis de ergosterol de la membrana fúngica.',
            ref: {
              f: 'dailymed-isavuconazonio',
              sec: '12 · Farmacología clínica',
              cita: 'Isavuconazole inhibits the synthesis of ergosterol, a key component of the fungal cell membrane, through the inhibition of cytochrome P-450 dependent enzyme lanosterol 14-alpha-demethylase',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las esterasas de la sangre, sobre todo la butirilcolinesterasa, hidrolizan rápido el profármaco a isavuconazol, que luego metabolizan la CYP3A4, la CYP3A5 y las UGT.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las esterasas de la sangre, sobre todo la butirilcolinesterasa, hidrolizan rápido el profármaco a isavuconazol, que luego metabolizan la CYP3A4, la CYP3A5 y las UGT.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12.3 · Farmacocinética',
            cita: 'In in vitro studies isavuconazonium sulfate is rapidly hydrolyzed in blood to isavuconazole by esterases, predominantly by butylcholinesterase',
            codigo: '43682-4'
          }
        },
        {
          t: 'In vivo intervienen la CYP3A4, la CYP3A5 y después las UGT en el metabolismo del isavuconazol.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12.3 · Farmacocinética',
            cita: 'In vivo studies indicate that CYP3A4, CYP3A5 and subsequently uridine diphosphate-glucuronosyltransferases (UGT) are involved in the metabolism of isavuconazole',
            codigo: '43682-4'
          },
          poblacion: 'higado'
        }
      ],
      metabolitos: [
        {
          nombre: 'Isavuconazol',
          actividad: 'activo',
          nota: 'Fracción activa liberada en la sangre.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12 · Farmacología clínica',
            cita: 'Isavuconazonium sulfate is the prodrug of isavuconazole, an azole antifungal drug',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 46,1 % de la radiactividad se recuperó en las heces y el 45,5 % en la orina; la semivida media del isavuconazol es de 130 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 46,1 % de la radiactividad se recuperó en las heces y el 45,5 % en la orina; la semivida media del isavuconazol es de 130 horas.',
          ref: {
            f: 'dailymed-isavuconazonio',
            sec: '12.3 · Farmacocinética',
            cita: 'a mean of 46.1% of the total radioactive dose was recovered in the feces and 45.5% was recovered in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del isavuconazol',
      valor: '98',
      unidad: '%',
      analito: 'isavuconazol',
      ref: {
        f: 'dailymed-isavuconazonio',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of isavuconazole following oral administration of CRESEMBA is 98%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '2-3',
      unidad: 'h',
      analito: 'isavuconazol',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-isavuconazonio',
        sec: '12.3 · Farmacocinética',
        cita: 'reaches maximum plasma concentrations (C max ) 2 hours to 3 hours after single and multiple dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99',
      unidad: '%',
      analito: 'isavuconazol',
      ref: {
        f: 'dailymed-isavuconazonio',
        sec: '12.3 · Farmacocinética',
        cita: 'Isavuconazole is highly protein bound (greater than 99%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución (vía intravenosa)',
      valor: '450 (aprox.)',
      unidad: 'L',
      analito: 'isavuconazol',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-isavuconazonio',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean volume of distribution (V ss ) was approximately 450 L following intravenous administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '130',
      unidad: 'h',
      analito: 'isavuconazol',
      ref: {
        f: 'dailymed-isavuconazonio',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean plasma half-life of isavuconazole was 130 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '46,1',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-isavuconazonio',
        sec: '12.3 · Farmacocinética',
        cita: 'a mean of 46.1% of the total radioactive dose was recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-isavuconazonio', '8f7f73b8-586a-4df0-935f-fecd4696c16c', 'CRESEMBA (ISAVUCONAZONIUM SULFATE) CAPSULE CRESEMBA (ISAVUCONAZONIUM SULFATE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION', 'CRESEMBA', '21', '2025-05-05', '2026-11-19'),
    rengPubchem(6918606, 'isavuconazonium sulfate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
