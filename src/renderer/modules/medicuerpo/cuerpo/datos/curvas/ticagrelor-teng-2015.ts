import { rengEstudioPMC, type RengModuloCurvas, type RengRef } from '../modelo'

const RENG_F = 'estudio-ticagrelor-teng-2015'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_TABLA_2 = 'Tabla 2'
const RENG_CITA_TABLA_2 = 'Plasma concentrations of ticagrelor and AR-C124910XX at 0.5, 1, and 2 hours postadministration'
const RENG_TABLA_1 = 'Tabla 1'
const RENG_CITA_TABLA_1 = 'Pharmacokinetic parameters and exposure ratios of ticagrelor and AR-C124910XX'
const RENG_POBLACION = '36 voluntarios sanos de 18 a 50 años'
const RENG_ENTERO = 'comprimido entero de 90 mg por vía oral, en ayunas'

export default {
  fuentes: [
    rengEstudioPMC(
      RENG_F,
      'PMC4302705',
      'An open-label, randomized bioavailability study with alternative methods of administration of crushed ticagrelor tablets in healthy volunteers',
      'Teng R, Carlson G, Hsia J',
      'International Journal of Clinical Pharmacology and Therapeutics 2015;53(2):182-189 · doi:10.5414/CP202202',
      '2015-02',
      'CC BY (Creative Commons Attribution License)',
      '2026-11-12'
    )
  ],
  curvas: [
    {
      id: 'ticagrelor-teng-2015',
      tipo: 'serie',
      activoId: 'ticagrelor',
      presentaciones: ['ticagrelor-oral'],
      productoEstudio: 'Comprimido de ticagrelor de 90 mg tragado entero con 200 mL de agua',
      relacion: 'El estudio usó el comprimido de 90 mg del titular (AstraZeneca), la misma dosis unitaria que esta presentación. El artículo no indica el nombre comercial ni el lote del comprimido.',
      matriz: 'plasma',
      unidades: { tiempo: 'h', concentracion: 'ng/mL' },
      poblacion: RENG_POBLACION,
      n: 36,
      diseno: 'Ensayo abierto, aleatorizado y cruzado de tres tratamientos con dosis única y un lavado de al menos 7 días entre periodos.',
      condiciones: 'Dosis única de 90 mg tras un ayuno de al menos 10 horas; agua hasta 1 hora antes y desde 2 horas después; primera comida a las 4 horas.',
      metodo: 'Cromatografía líquida en fase inversa con espectrometría de masas en tándem, validada. Límites de cuantificación: 5,0 ng/mL (ticagrelor) y 2,5 ng/mL (AR-C124910XX).',
      principal: 'ticagrelor-entero',
      series: [
        {
          id: 'ticagrelor-entero',
          nombre: 'Ticagrelor · comprimido entero',
          administracion: 'Comprimido entero por vía oral',
          analito: 'Ticagrelor (fármaco original) en plasma',
          rol: 'original',
          estadistico: 'Media geométrica (IC del 95 %)',
          puntos: [
            { t: 0.5, c: 33.3, intervalo: [21.7, 51.2] },
            { t: 1, c: 270.9, intervalo: [216.6, 338.8] },
            { t: 2, c: 414.7, intervalo: [360.1, 477.6] }
          ],
          ref: rengR(RENG_TABLA_2, RENG_CITA_TABLA_2)
        },
        {
          id: 'ticagrelor-triturado',
          nombre: 'Ticagrelor · comprimido triturado',
          administracion: 'Comprimido triturado y suspendido en agua, por vía oral',
          analito: 'Ticagrelor (fármaco original) en plasma',
          rol: 'original',
          estadistico: 'Media geométrica (IC del 95 %)',
          puntos: [
            { t: 0.5, c: 148.6, intervalo: [96.8, 228.3] },
            { t: 1, c: 392.5, intervalo: [313.9, 490.9] },
            { t: 2, c: 418.4, intervalo: [363.3, 481.8] }
          ],
          ref: rengR(RENG_TABLA_2, RENG_CITA_TABLA_2)
        },
        {
          id: 'metabolito-entero',
          nombre: 'AR-C124910XX · comprimido entero',
          administracion: 'Comprimido entero por vía oral',
          analito: 'AR-C124910XX (metabolito activo) en plasma',
          rol: 'metabolito',
          estadistico: 'Media geométrica (IC del 95 %)',
          puntos: [
            { t: 0.5, c: 5.2, intervalo: [4.0, 6.9] },
            { t: 1, c: 41.4, intervalo: [31.3, 54.6] },
            { t: 2, c: 141.8, intervalo: [125.8, 159.7] }
          ],
          ref: rengR(RENG_TABLA_2, RENG_CITA_TABLA_2)
        },
        {
          id: 'metabolito-triturado',
          nombre: 'AR-C124910XX · comprimido triturado',
          administracion: 'Comprimido triturado y suspendido en agua, por vía oral',
          analito: 'AR-C124910XX (metabolito activo) en plasma',
          rol: 'metabolito',
          estadistico: 'Media geométrica (IC del 95 %)',
          puntos: [
            { t: 0.5, c: 13.0, intervalo: [9.9, 17.0] },
            { t: 1, c: 73.2, intervalo: [55.5, 96.7] },
            { t: 2, c: 143.8, intervalo: [127.7, 162.1] }
          ],
          ref: rengR(RENG_TABLA_2, RENG_CITA_TABLA_2)
        }
      ],
      comparables: [
        { a: 'ticagrelor-entero', b: 'ticagrelor-triturado', motivo: 'Mismo estudio, mismas personas (diseño cruzado), misma dosis, mismo analito, mismas unidades y mismo método; solo cambia la forma de tomar el comprimido.' },
        { a: 'metabolito-entero', b: 'metabolito-triturado', motivo: 'Mismo estudio, mismas personas (diseño cruzado), misma dosis, mismo analito, mismas unidades y mismo método; solo cambia la forma de tomar el comprimido.' }
      ],
      resultados: [
        { magnitud: 'cmax', nombre: 'Concentración máxima (Cmax)', valor: '506', unidad: 'ng/mL', analito: 'ticagrelor', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; media geométrica (CV 35,8 %)`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) },
        { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (tmax)', valor: '2,0', unidad: 'h', analito: 'ticagrelor', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; mediana (intervalo 1,0-4,0 h)`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) },
        { magnitud: 'semivida', nombre: 'Semivida de eliminación terminal (t½)', valor: '7,56', unidad: 'h', analito: 'ticagrelor', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; media`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) },
        { magnitud: 'auc', nombre: 'Área bajo la curva (AUC)', valor: '2.890', unidad: 'ng·h/mL', analito: 'ticagrelor', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; media geométrica (CV 43,8 %)`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) },
        { magnitud: 'cmax', nombre: 'Concentración máxima (Cmax)', valor: '165', unidad: 'ng/mL', analito: 'AR-C124910XX (metabolito activo)', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; media geométrica (CV 30,1 %)`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) },
        { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (tmax)', valor: '2,0', unidad: 'h', analito: 'AR-C124910XX (metabolito activo)', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; mediana (intervalo 2,0-4,0 h)`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) },
        { magnitud: 'semivida', nombre: 'Semivida de eliminación terminal (t½)', valor: '8,30', unidad: 'h', analito: 'AR-C124910XX (metabolito activo)', poblacion: RENG_POBLACION, condiciones: `${RENG_ENTERO}; media`, ref: rengR(RENG_TABLA_1, RENG_CITA_TABLA_1) }
      ],
      apoyos: [
        { que: 'Población', ref: rengR('Methods · Study population', 'Healthy volunteers were to be between 18 and 50 years of age') },
        { que: 'Diseño', ref: rengR('Abstract · Methods', 'open-label, randomized, three-treatment crossover study') },
        { que: 'Administración', ref: rengR('Methods · Study design and treatments', 'ticagrelor 90-mg whole tablet administered as single oral dose with 200 mL of water') },
        { que: 'Ayuno', ref: rengR('Methods · Study design and treatments', 'Volunteers were required to fast from at least 10 hours prior to the planned ticagrelor dose') },
        { que: 'Método analítico', ref: rengR('Methods · Pharmacokinetic sampling and analytical methods', 'reversed-phase liquid chromatography/tandem mass spectrometry') }
      ],
      limites: [
        'La tabla del artículo solo da valores numéricos a las 0,5, 1 y 2 horas; el resto del perfil (hasta 48 horas) aparece en una figura y no se reproduce aquí.',
        'Son medias geométricas de un grupo de voluntarios sanos en ayunas tras una dosis única: no describen a una persona concreta, a pacientes ni a tomas repetidas.',
        'La línea entre puntos solo une los valores medidos; no es un modelo ni una estimación de lo que ocurre entre ellos.',
        'La concentración antes de la dosis (tiempo 0) no figura en la tabla y no se dibuja.'
      ],
      fuente: RENG_F,
      ref: rengR('Abstract · Methods', 'single 90-mg dose of ticagrelor administered orally as a whole tablet')
    }
  ]
} satisfies RengModuloCurvas
