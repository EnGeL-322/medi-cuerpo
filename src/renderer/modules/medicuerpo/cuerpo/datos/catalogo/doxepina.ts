import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'doxepina',
    nombre: 'Doxepina',
    clase: 'Antagonista del receptor H1 a dosis bajas (hipnótico)',
    sinonimos: [ 'doxepin', 'Silenor' ],
    formula: 'C19H21NO',
    masaMolar: 279.4,
    smiles: 'CN(C)CCC=C1C2=CC=CC=C2COC3=CC=CC=C31',
    inchikey: 'ODQWQRRAPPTVAG-UHFFFAOYSA-N',
    cid: 3158,
    iupac: '3-(6H-benzo[c][1]benzoxepin-11-ylidene)-N,N-dimethylpropan-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'doxepina-oral',
      producto: 'Silenor · comprimido',
      titular: 'CURRAX PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '3 mg o 6 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Clorhidrato de doxepina', ref: { f: 'dailymed-doxepina', sec: '11 · Descripción', cita: 'doxepin hydrochloride', codigo: '34089-3' } },
      excipientes: [ 'microcrystalline cellulose', 'silicon dioxide', 'magnesium stearate', 'fd&c blue no. 1' ],
      usos: {
        t: 'Tratamiento del insomnio caracterizado por dificultad para mantener el sueño.',
        ref: {
          f: 'dailymed-doxepina',
          sec: '1 · Indicaciones',
          cita: 'SILENOR is indicated for the treatment of insomnia characterized by difficulty with sleep maintenance',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-doxepina',
      advertencias: [
        {
          titulo: 'Efectos depresores del sistema nervioso central',
          texto: 'Puede afectar al estado de alerta y a la coordinación motora; no debe usarse con alcohol.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-doxepina',
            sec: '5 · Advertencias y precauciones',
            cita: 'CNS-depressant effects: Use can impair alertness and motor coordination',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depresión',
          texto: 'Puede aparecer empeoramiento de la depresión o pensamientos suicidas.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-doxepina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Depression: Worsening of depression or suicidal thinking may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más y más que con placebo): somnolencia o sedación, náuseas e infección respiratoria alta.',
          '34084-4',
          'The most common treatment-emergent adverse reactions, reported in ≥ 2% of patients treated with SILENOR, and more commonly than in patients treated with placebo, were somnolence/sedation, nausea, and upper respiratory tract infection'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figuran el riesgo de suicidio y el empeoramiento de la depresión.',
          '34084-4',
          'Suicide risk and worsening of depression [see Warnings and Precautions (5.3) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 3 mg o 6 mg por comprimido, según la etiqueta; el activo va como clorhidrato de doxepina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del insomnio caracterizado por dificultad para mantener el sueño.',
    actua: 'El mecanismo en el mantenimiento del sueño no está claro; su efecto podría estar mediado por el antagonismo del receptor H1.',
    recorrido: 'Tras una dosis oral de 6 mg en ayunas, la mediana del tiempo hasta el pico fue de 3,5 horas. Se excreta por la orina sobre todo como conjugados glucurónidos; menos del 3 % de la dosis sale por la orina como fármaco original o nordoxepina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '3 · Formas y concentraciones',
            cita: 'SILENOR is an immediate-release, oval-shaped, tablet for oral administration',
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
      ocurre: 'Tras una dosis oral de 6 mg en ayunas, la mediana del tiempo hasta el pico fue de 3,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis oral de 6 mg en ayunas, la mediana del tiempo hasta el pico fue de 3,5 horas.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak concentrations (Tmax) of doxepin occurred at 3.5 hours postdose after oral administration of a 6 mg dose to fasted healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasa, el AUC aumentó un 41 % y la Cmax un 15 %, y el Tmax se retrasó unas 3 horas.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The AUC was increased by 41% and C max by 15% when 6 mg SILENOR was administered with a high fat meal',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con una comida rica en grasa'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye ampliamente por los tejidos del cuerpo y se une aproximadamente en un 80 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye ampliamente por los tejidos del cuerpo y se une aproximadamente en un 80 % a las proteínas del plasma.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'SILENOR is widely distributed throughout the body tissues',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio tras una dosis oral única de 6 mg fue de 11.930 litros.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution following a single 6 mg oral dose of SILENOR to healthy subjects was 11,930 liters',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'dosis oral única de 6 mg'
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina (hipótesis)',
        efecto: 'El mecanismo en el mantenimiento del sueño no está claro; su efecto podría estar mediado por el antagonismo del receptor H1.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'El mecanismo en el mantenimiento del sueño no está claro; su efecto podría estar mediado por el antagonismo del receptor H1.',
            ref: {
              f: 'dailymed-doxepina',
              sec: '12.1 · Mecanismo de acción',
              cita: "The mechanism of action of doxepin in sleep maintenance is unclear; however, doxepin's effect could be mediated through antagonism of the H 1 receptor",
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por oxidación y desmetilación; el metabolito principal es la N-desmetildoxepina (nordoxepina), que sigue transformándose en conjugados glucurónidos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por oxidación y desmetilación; el metabolito principal es la N-desmetildoxepina (nordoxepina), que sigue transformándose en conjugados glucurónidos.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, SILENOR is extensively metabolized by oxidation and demethylation',
            codigo: '43682-4'
          }
        },
        {
          t: 'La CYP2C19 y la CYP2D6 son las enzimas principales (in vitro); la CYP1A2 y la CYP2C9 participan en menor medida.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP2C19 and CYP2D6 are the major enzymes involved in doxepin metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetildoxepina (nordoxepina)',
          actividad: 'desconocida',
          nota: 'Metabolito principal; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary metabolite is N-desmethyldoxepin (nordoxepin)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta por la orina sobre todo como conjugados glucurónidos; menos del 3 % de la dosis sale por la orina como fármaco original o nordoxepina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta por la orina sobre todo como conjugados glucurónidos; menos del 3 % de la dosis sale por la orina como fármaco original o nordoxepina.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'Doxepin is excreted in the urine mainly in the form of glucuronide conjugates',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal aparente fue de 15,3 horas para la doxepina y de 31 horas para la nordoxepina.',
          ref: {
            f: 'dailymed-doxepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal half-life (t ½) of doxepin was 15.3 hours and for nordoxepin was 31 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '3,5',
      unidad: 'h',
      analito: 'doxepina',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis oral de 6 mg en ayunas',
      ref: {
        f: 'dailymed-doxepina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak concentrations (Tmax) of doxepin occurred at 3.5 hours postdose after oral administration of a 6 mg dose to fasted healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '80 (aprox.)',
      unidad: '%',
      analito: 'doxepina',
      ref: { f: 'dailymed-doxepina', sec: '12.3 · Farmacocinética', cita: 'SILENOR is approximately 80% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '11.930',
      unidad: 'L',
      analito: 'doxepina',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis oral única de 6 mg',
      ref: {
        f: 'dailymed-doxepina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution following a single 6 mg oral dose of SILENOR to healthy subjects was 11,930 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente de la doxepina',
      valor: '15,3',
      unidad: 'h',
      analito: 'doxepina',
      ref: {
        f: 'dailymed-doxepina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal half-life (t ½) of doxepin was 15.3 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-doxepina', '1bec1223-5239-4eb6-a9e8-62444106d2c0', 'SILENOR (DOXEPIN HYDROCHLORIDE) TABLET', 'Silenor', '11', '2026-04-24', '2026-11-15'),
    rengPubchem(3158, 'doxepin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
