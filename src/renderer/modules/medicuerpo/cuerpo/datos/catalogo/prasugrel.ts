import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'prasugrel',
    nombre: 'Prasugrel',
    clase: 'Antiagregante plaquetario (inhibidor de P2Y12)',
    sinonimos: [ 'prasugrel', 'Effient' ],
    formula: 'C20H20FNO3S',
    masaMolar: 373.4,
    smiles: 'CC(=O)OC1=CC2=C(S1)CCN(C2)C(C3=CC=CC=C3F)C(=O)C4CC4',
    inchikey: 'DTGLZDAWLRGWQN-UHFFFAOYSA-N',
    cid: 6918456,
    iupac: '[5-[2-cyclopropyl-1-(2-fluorophenyl)-2-oxoethyl]-6,7-dihydro-4H-thieno[3,2-c]pyridin-2-yl] acetate',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'prasugrel-oral',
      producto: 'Effient · comprimido recubierto',
      titular: 'COSETTE PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de prasugrel',
        ref: { f: 'dailymed-prasugrel', sec: '11 · Descripción', cita: 'Prasugrel hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'hypromellose, unspecified',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'microcrystalline cellulose',
        'sucrose stearate',
        'glyceryl dibehenate',
        'lactose monohydrate',
        'hypromellose 2910 (15 mpa.s)',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Reducir los eventos trombóticos cardiovasculares, incluida la trombosis del stent, en el síndrome coronario agudo tratado con intervención coronaria percutánea.',
        ref: {
          f: 'dailymed-prasugrel',
          sec: '1 · Indicaciones',
          cita: 'reduction of thrombotic cardiovascular events (including stent thrombosis)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-prasugrel',
      advertencias: [
        {
          titulo: 'Riesgo de hemorragia',
          texto: 'Puede causar hemorragias importantes, a veces mortales; no se usa con sangrado activo ni antecedentes de ictus o accidente isquémico transitorio.',
          organos: [ 'sangre', 'encefalo' ],
          ref: {
            f: 'dailymed-prasugrel',
            sec: 'Advertencia destacada',
            cita: 'Effient can cause significant, sometimes fatal, bleeding',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Púrpura trombótica trombocitopénica',
          texto: 'Se ha descrito, incluso tras una exposición breve; es grave y puede ser mortal.',
          organos: [ 'sangre', 'plaquetas' ],
          ref: { f: 'dailymed-prasugrel', sec: '5 · Advertencias y precauciones', cita: 'TTP has been reported with the use of Effient', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [ 'El sangrado es la reacción adversa notificada con más frecuencia.', '34084-4', 'most commonly reported adverse reaction' ],
        [ 'Datos de 6741 pacientes tratados en el ensayo TRITON-TIMI 38.', '34084-4', '6741 patients were treated with Effient' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de prasugrel. Los excipientes no son el principio activo.',
    usos: 'Reducir los eventos trombóticos cardiovasculares, incluida la trombosis del stent, en el síndrome coronario agudo tratado con intervención coronaria percutánea.',
    actua: 'Es un profármaco: su metabolito activo se une de forma irreversible a los receptores P2Y12 de ADP de las plaquetas e impide su activación y agregación.',
    recorrido: 'Se absorbe al menos el 79 % de la dosis; en el intestino se hidroliza rápido y el metabolito activo alcanza su pico hacia los 30 minutos. Alrededor del 68 % de la dosis sale por la orina y el 27 % por las heces, como metabolitos inactivos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-prasugrel', sec: '3 · Formas y concentraciones', cita: 'film-coated, non-scored tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe al menos el 79 % de la dosis; en el intestino se hidroliza rápido y el metabolito activo alcanza su pico hacia los 30 minutos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe al menos el 79 % de la dosis; en el intestino se hidroliza rápido y el metabolito activo alcanza su pico hacia los 30 minutos.',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, ≥79% of the dose is absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico del metabolito activo llega hacia los 30 minutos.',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations (C max ) of the active metabolite occurring approximately 30 minutes after dosing',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'plaquetas' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El metabolito activo se une en un 98 % a la albúmina; su volumen aparente de distribución es de 44 a 68 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El metabolito activo se une en un 98 % a la albúmina; su volumen aparente de distribución es de 44 a 68 L.',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'The active metabolite is bound about 98% to human serum albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor P2Y12 de las plaquetas',
        efecto: 'Es un profármaco: su metabolito activo se une de forma irreversible a los receptores P2Y12 de ADP de las plaquetas e impide su activación y agregación.',
        lugar: [ 'plaquetas', 'sangre' ],
        datos: [
          {
            t: 'Es un profármaco: su metabolito activo se une de forma irreversible a los receptores P2Y12 de ADP de las plaquetas e impide su activación y agregación.',
            ref: {
              f: 'dailymed-prasugrel',
              sec: '12.1 · Mecanismo de acción',
              cita: 'through the irreversible binding of its active metabolite to the P2Y 12 class of ADP receptors on platelets',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El prasugrel no aparece en el plasma: se hidroliza en el intestino a una tiolactona, que CYP3A4 y CYP2B6 convierten en el metabolito activo. Este se inactiva por S-metilación o conjugación con cisteína.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El prasugrel no aparece en el plasma: se hidroliza en el intestino a una tiolactona, que CYP3A4 y CYP2B6 convierten en el metabolito activo. Este se inactiva por S-metilación o conjugación con cisteína.',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'It is rapidly hydrolyzed in the intestine to a thiolactone',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito activo (R-138727)',
          actividad: 'activo',
          nota: 'Semivida de unas 7 horas.',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'which is then converted to the active metabolite by a single step',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Metabolitos inactivos (S-metilado y conjugado con cisteína)',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'The active metabolite is metabolized to two inactive compounds by S-methylation or conjugation with cysteine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 68 % de la dosis sale por la orina y el 27 % por las heces, como metabolitos inactivos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 68 % de la dosis sale por la orina y el 27 % por las heces, como metabolitos inactivos.',
          ref: {
            f: 'dailymed-prasugrel',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 68% of the prasugrel dose is excreted in the urine and 27% in the feces as inactive metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '0,5 (aprox.)',
      unidad: 'h',
      analito: 'metabolito activo',
      ref: { f: 'dailymed-prasugrel', sec: '12.3 · Farmacocinética', cita: 'occurring approximately 30 minutes after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '7 (2-15)',
      unidad: 'h',
      analito: 'metabolito activo',
      ref: {
        f: 'dailymed-prasugrel',
        sec: '12.3 · Farmacocinética',
        cita: 'The active metabolite has an elimination half-life of about 7 hours (range 2-15 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a la albúmina',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'metabolito activo',
      ref: {
        f: 'dailymed-prasugrel',
        sec: '12.3 · Farmacocinética',
        cita: 'The active metabolite is bound about 98% to human serum albumin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '44-68',
      unidad: 'L',
      analito: 'metabolito activo',
      poblacion: 'personas sanas y con aterosclerosis estable',
      ref: { f: 'dailymed-prasugrel', sec: '12.3 · Farmacocinética', cita: 'ranged from 44 to 68 L', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida rica en grasa',
      valor: '49',
      unidad: '%',
      analito: 'metabolito activo',
      poblacion: 'personas sanas',
      condiciones: 'dosis única de 15 mg',
      ref: { f: 'dailymed-prasugrel', sec: '12.3 · Farmacocinética', cita: 'C max was decreased by 49%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-prasugrel', '69ea2d58-5353-4222-b61f-cab976fa7e5e', 'EFFIENT (PRASUGREL HYDROCHLORIDE) TABLET, COATED', 'Effient', '2', '2022-09-09', '2026-11-12'),
    rengPubchem(6918456, 'prasugrel', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
