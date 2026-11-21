import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'baxdrostat',
    nombre: 'Baxdrostat',
    clase: 'Inhibidor de la aldosterona sintasa',
    sinonimos: [ 'baxdrostat', 'Baxfendy' ],
    formula: 'C22H25N3O2',
    masaMolar: 363.5,
    smiles: 'CCC(=O)N[C@@H]1CCCC2=C1C=NC=C2C3=CC4=C(C=C3)N(C(=O)CC4)C',
    inchikey: 'VDEUDSRUMNAXJG-LJQANCHMSA-N',
    cid: 71535962,
    iupac: 'N-[(8R)-4-(1-methyl-2-oxo-3,4-dihydroquinolin-6-yl)-5,6,7,8-tetrahydroisoquinolin-8-yl]propanamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'baxdrostat-oral',
      producto: 'BAXFENDY · comprimido recubierto con película',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '1 mg o 2 mg por comprimido, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión no controlada con otros fármacos, en combinación con otros antihipertensivos, en adultos.',
        ref: {
          f: 'dailymed-baxdrostat',
          sec: '1 · Indicaciones',
          cita: 'in combination with other antihypertensive drugs, is indicated for the treatment of hypertension, to lower blood pressure in adults who are not adequately controlled on other agents',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-baxdrostat',
      advertencias: [
        {
          titulo: 'Hiperpotasemia',
          texto: 'Medir el potasio sérico antes de empezar y vigilarlo periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess serum potassium prior to initiation of BAXFENDY and monitor periodically during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiponatremia',
          texto: 'Medir el sodio sérico antes de empezar y vigilarlo periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess serum sodium prior to initiation of BAXFENDY and monitor periodically during treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'La reacción más frecuente (5 % o más y más que con placebo) fue la hiperpotasemia.',
          '34084-4',
          'The most common adverse reaction (more frequent than placebo and ≥ 5% in BAXFENDY-treated patients) was hyperkalemia'
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
    contiene: 'Comprimido recubierto con película: 1 mg o 2 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión no controlada con otros fármacos, en combinación con otros antihipertensivos, en adultos.',
    actua: 'Inhibe la aldosterona sintasa humana y reduce la aldosterona en el plasma; la aldosterona favorece la retención de sodio y agua por los riñones.',
    recorrido: 'La biodisponibilidad absoluta es del 98 % y la mediana del tiempo hasta el pico, de 2,5 horas; la comida no cambia de forma relevante la exposición. Tras una dosis marcada, alrededor del 69 % se recuperó en la orina (17 % sin cambios) y el 15 % en las heces (6 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-baxdrostat', sec: '3 · Formas y concentraciones', cita: 'pink, biconvex, round, film-coated tablets with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es del 98 % y la mediana del tiempo hasta el pico, de 2,5 horas; la comida no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es del 98 % y la mediana del tiempo hasta el pico, de 2,5 horas; la comida no cambia de forma relevante la exposición.',
          ref: { f: 'dailymed-baxdrostat', sec: '12.3 · Farmacocinética', cita: 'Baxdrostat has an absolute bioavailability of 98%', codigo: '43682-4' }
        },
        {
          t: 'En ayunas, la mediana del tiempo hasta el pico fue de 2,5 horas con 2 mg.',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'median time to maximum plasma concentration (t max ) was 2.5 hours (min: 1.0 hours, max: 5.0 hours) for the 2 mg dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in baxdrostat pharmacokinetics were observed following administration of a high-fat, high-calorie meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 74 % a las proteínas plasmáticas (cociente sangre/plasma de 0,95); el volumen de distribución en estado estacionario es de 205 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 74 % a las proteínas plasmáticas (cociente sangre/plasma de 0,95); el volumen de distribución en estado estacionario es de 205 L.',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of baxdrostat was 74% and the blood to plasma ratio was 0.95 in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 205 L.',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution of baxdrostat at steady state is 205 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Aldosterona sintasa',
        efecto: 'Inhibe la aldosterona sintasa humana y reduce la aldosterona en el plasma; la aldosterona favorece la retención de sodio y agua por los riñones.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la aldosterona sintasa humana y reduce la aldosterona en el plasma; la aldosterona favorece la retención de sodio y agua por los riñones.',
            ref: {
              f: 'dailymed-baxdrostat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Baxdrostat is an inhibitor of human aldosterone synthase',
              codigo: '43679-0'
            }
          },
          {
            t: 'Al inhibir la aldosterona sintasa baja la concentración plasmática de aldosterona.',
            ref: {
              f: 'dailymed-baxdrostat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibition of aldosterone synthase by baxdrostat decreases plasma aldosterone concentrations',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 a un metabolito cetónico intermedio, que la carbonil reductasa 1 convierte en un alcohol (M2).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 a un metabolito cetónico intermedio, que la carbonil reductasa 1 convierte en un alcohol (M2).',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Baxdrostat is primarily metabolized by CYP3A4 to an intermediate ketone metabolite, which is further metabolized by CBR1 (carbonyl reductase 1) to an alcohol metabolite (M2)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 69 % se recuperó en la orina (17 % sin cambios) y el 15 % en las heces (6 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 69 % se recuperó en la orina (17 % sin cambios) y el 15 % en las heces (6 % sin cambios).',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 69% of the dose was recovered in urine (17% unchanged) and 15% in feces (6% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media es de unas 26 horas.',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean effective half-life of baxdrostat was approximately 26 hours (range 23 to 32 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento total medio es de 2,8 L/h y el renal, de 0,46 L/h.',
          ref: {
            f: 'dailymed-baxdrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean total clearance was 2.8 L/h, and the mean renal clearance was 0.46 L/h',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '98',
      unidad: '%',
      analito: 'baxdrostat',
      ref: { f: 'dailymed-baxdrostat', sec: '12.3 · Farmacocinética', cita: 'Baxdrostat has an absolute bioavailability of 98%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico (2 mg)',
      valor: '2,5',
      unidad: 'h',
      analito: 'baxdrostat',
      condiciones: 'en ayunas, 2 mg',
      ref: {
        f: 'dailymed-baxdrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'median time to maximum plasma concentration (t max ) was 2.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '74',
      unidad: '%',
      analito: 'baxdrostat',
      ref: { f: 'dailymed-baxdrostat', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding of baxdrostat was 74%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '205',
      unidad: 'L',
      analito: 'baxdrostat',
      ref: {
        f: 'dailymed-baxdrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of baxdrostat at steady state is 205 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media',
      valor: '26 (aprox.)',
      unidad: 'h',
      analito: 'baxdrostat',
      ref: {
        f: 'dailymed-baxdrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean effective half-life of baxdrostat was approximately 26 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total medio',
      valor: '2,8',
      unidad: 'L/h',
      analito: 'baxdrostat',
      ref: { f: 'dailymed-baxdrostat', sec: '12.3 · Farmacocinética', cita: 'The mean total clearance was 2.8 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '69 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-baxdrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 69% of the dose was recovered in urine (17% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-baxdrostat', 'b1fc1ee7-facc-4099-b3db-a4c1daeaa4be', 'BAXFENDY (BAXDROSTAT) TABLET, FILM COATED', 'BAXFENDY', '4', '2026-09-18', '2026-11-19'),
    rengPubchem(71535962, 'baxdrostat', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
