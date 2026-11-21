import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'enzalutamida',
    nombre: 'Enzalutamida',
    clase: 'Inhibidor del receptor de andrógenos',
    sinonimos: [ 'enzalutamide', 'Xtandi' ],
    formula: 'C21H16F4N4O2S',
    masaMolar: 464.4,
    smiles: 'CC1(C(=O)N(C(=S)N1C2=CC(=C(C=C2)C(=O)NC)F)C3=CC(=C(C=C3)C#N)C(F)(F)F)C',
    inchikey: 'WXCXUHSOUPDCQV-UHFFFAOYSA-N',
    cid: 15951529,
    iupac: '4-[3-[4-cyano-3-(trifluoromethyl)phenyl]-5,5-dimethyl-4-oxo-2-sulfanylideneimidazolidin-1-yl]-2-fluoro-N-methylbenzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'enzalutamida-oral',
      producto: 'Xtandi · cápsula',
      titular: 'ASTELLAS PHARMA US, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '40 mg por cápsula, según la etiqueta',
      excipientes: [
        'Policoglicéridos caprilocaproílicos',
        'hidroxianisol butilado',
        'hidroxitolueno butilado',
        'gelatina',
        'solución de sorbitol y sorbitán',
        'glicerina',
        'agua purificada',
        'dióxido de titanio',
        'óxido de hierro negro'
      ],
      usos: {
        t: 'Cáncer de próstata resistente a la castración, cáncer de próstata metastásico sensible a la castración y no metastásico con recurrencia bioquímica de alto riesgo.',
        ref: { f: 'dailymed-enzalutamida', sec: '1 · Indicaciones', cita: 'castration-resistant prostate cancer (CRPC)', codigo: '34067-9' }
      },
      fuente: 'dailymed-enzalutamida',
      advertencias: [
        {
          titulo: 'Convulsiones',
          texto: 'Se produjeron convulsiones en el 0,6 % de los tratados; hay que suspenderlo si aparece una.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Seizure occurred in 0.6% of patients receiving XTANDI',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 10 %): dolor musculoesquelético, cansancio, sofocos, estreñimiento y pérdida de apetito.',
          '34084-4',
          'musculoskeletal pain, fatigue, hot flush, constipation, decreased appetite'
        ],
        [
          'También diarrea, hipertensión, hemorragia, caídas, fracturas y dolor de cabeza.',
          '34084-4',
          'diarrhea, hypertension, hemorrhage, fall, fracture, and headache'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 40 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cáncer de próstata resistente a la castración, cáncer de próstata metastásico sensible a la castración y no metastásico con recurrencia bioquímica de alto riesgo.',
    actua: 'Inhibe de forma competitiva la unión de andrógenos a su receptor, impide la entrada del receptor al núcleo y su interacción con el ADN.',
    recorrido: 'Con una dosis única de 160 mg en cápsulas, el máximo llega con una mediana de 1 hora (0,5-3 h). Una comida rica en grasa no tiene efecto clínicamente significativo. Se elimina sobre todo por metabolismo hepático; la semivida terminal tras una dosis única es de 5,8 días.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda de gelatina de 40 mg, ovalada, blanca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda de gelatina de 40 mg, ovalada, blanca.',
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '3 · Formas y concentraciones',
            cita: 'XTANDI 40 mg capsules are white to off-white oblong soft gelatin capsules imprinted in black ink with ENZ',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Con una dosis única de 160 mg en cápsulas, el máximo llega con una mediana de 1 hora (0,5-3 h). Una comida rica en grasa no tiene efecto clínicamente significativo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con una dosis única de 160 mg en cápsulas, el máximo llega con una mediana de 1 hora (0,5-3 h). Una comida rica en grasa no tiene efecto clínicamente significativo.',
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max is 1 hour (0.5 to 3 hours) following a single 160 mg dose of capsules',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La enzalutamida se une en un 97-98 % a proteínas del plasma, sobre todo albúmina; su metabolito N-desmetilado, en un 95 %. El volumen de distribución es de unos 110 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La enzalutamida se une en un 97-98 % a proteínas del plasma, sobre todo albúmina; su metabolito N-desmetilado, en un 95 %. El volumen de distribución es de unos 110 L.',
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Enzalutamide is 97% to 98% bound to plasma proteins, primarily albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de andrógenos',
        efecto: 'Inhibe de forma competitiva la unión de andrógenos a su receptor, impide la entrada del receptor al núcleo y su interacción con el ADN.',
        lugar: [ 'prostata' ],
        datos: [
          {
            t: 'Inhibe de forma competitiva la unión de andrógenos a su receptor, impide la entrada del receptor al núcleo y su interacción con el ADN.',
            ref: {
              f: 'dailymed-enzalutamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Enzalutamide has been shown to competitively inhibit androgen binding to androgen receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan CYP2C8 y CYP3A4; el CYP2C8 forma el metabolito activo N-desmetilenzalutamida, y la carboxilesterasa 1 forma un ácido carboxílico inactivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan CYP2C8 y CYP3A4; el CYP2C8 forma el metabolito activo N-desmetilenzalutamida, y la carboxilesterasa 1 forma un ácido carboxílico inactivo.',
          ref: { f: 'dailymed-enzalutamida', sec: '12.3 · Farmacocinética', cita: 'Enzalutamide is metabolized by CYP2C8 and CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetilenzalutamida',
          actividad: 'activo',
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP2C8 is primarily responsible for the formation of the active metabolite (N-desmethyl enzalutamide)',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Metabolito ácido carboxílico',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Carboxylesterase 1 metabolizes N-desmethyl enzalutamide and enzalutamide to the inactive carboxylic acid metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo hepático; la semivida terminal tras una dosis única es de 5,8 días.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo hepático; la semivida terminal tras una dosis única es de 5,8 días.',
          ref: {
            f: 'dailymed-enzalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Enzalutamide is primarily eliminated by hepatic metabolism',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (cápsulas)',
      valor: '1 (0,5-3)',
      unidad: 'h',
      analito: 'enzalutamida',
      condiciones: 'dosis única de 160 mg en cápsulas',
      ref: {
        f: 'dailymed-enzalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max is 1 hour (0.5 to 3 hours) following a single 160 mg dose of capsules',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '97-98',
      unidad: '%',
      analito: 'enzalutamida',
      ref: { f: 'dailymed-enzalutamida', sec: '12.3 · Farmacocinética', cita: 'Enzalutamide is 97% to 98% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '95',
      unidad: '%',
      analito: 'N-desmetilenzalutamida',
      ref: {
        f: 'dailymed-enzalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'N-desmethyl enzalutamide is 95% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución (dosis oral única)',
      valor: '110 (CV 29 %)',
      unidad: 'L',
      analito: 'enzalutamida',
      ref: {
        f: 'dailymed-enzalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) volume of distribution after a single oral dose is 110 L (29%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente (dosis única)',
      valor: '0,56 (0,33-1,02)',
      unidad: 'L/h',
      analito: 'enzalutamida',
      ref: {
        f: 'dailymed-enzalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent clearance (CL/F) of enzalutamide after a single dose is 0.56 L/h (0.33 to 1.02 L/h)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal (dosis única)',
      valor: '5,8 (2,8-10,2)',
      unidad: 'días',
      analito: 'enzalutamida',
      ref: {
        f: 'dailymed-enzalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal half-life (t 1/2 ) for enzalutamide after a single oral dose is 5.8 days (2.8 to 10.2 days)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax en el estado estacionario',
      valor: '16,6 (CV 23 %)',
      unidad: 'µg/mL',
      analito: 'enzalutamida',
      ref: { f: 'dailymed-enzalutamida', sec: '12.3 · Farmacocinética', cita: 'are 16.6 µg/mL (23%) and 12.7 µg/mL (30%), respectively', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-enzalutamida', 'b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf', 'XTANDI (ENZALUTAMIDE) CAPSULE XTANDI (ENZALUTAMIDE) TABLET', 'Xtandi', '24', '2026-08-03', '2026-11-12'),
    rengPubchem(15951529, 'enzalutamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
