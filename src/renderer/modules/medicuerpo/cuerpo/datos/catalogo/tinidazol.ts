import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tinidazol',
    nombre: 'Tinidazol',
    clase: 'Antiprotozoario y antibacteriano (nitroimidazol)',
    sinonimos: [ 'tinidazole', 'Tindamax' ],
    formula: 'C8H13N3O4S',
    masaMolar: 247.27,
    smiles: 'CCS(=O)(=O)CCN1C(=NC=C1[N+](=O)[O-])C',
    inchikey: 'HJLSLZFTEKNLFI-UHFFFAOYSA-N',
    cid: 5479,
    iupac: '1-(2-ethylsulfonylethyl)-2-methyl-5-nitroimidazole',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'tinidazol-oral',
      producto: 'Tindamax · comprimido recubierto con película',
      titular: 'MISSION PHARMACAL COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '250 mg o 500 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'fd&c red no. 40',
        'fd&c yellow no. 6',
        'hypromelloses',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polydextrose',
        'polyethylene glycol, unspecified',
        'starch, corn',
        'titanium dioxide',
        'triacetin',
        'aluminum oxide'
      ],
      usos: {
        t: 'Tricomoniasis, giardiasis, amebiasis y vaginosis bacteriana.',
        ref: {
          f: 'dailymed-tinidazol',
          sec: '1 · Indicaciones',
          cita: 'Tinidazole is indicated for the treatment of trichomoniasis caused by Trichomonas vaginalis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tinidazol',
      advertencias: [
        {
          titulo: 'Posible carcinogenicidad',
          texto: 'El metronidazol, un nitroimidazol parecido, causó cáncer en ratones y ratas; su uso se reserva para las indicaciones aprobadas.',
          organos: [ 'tejidos' ],
          ref: {
            f: 'dailymed-tinidazol',
            sec: 'Advertencia destacada',
            cita: 'Carcinogenicity has been seen in mice and rats treated chronically with metronidazole',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Efectos neurológicos',
          texto: 'Se han descrito convulsiones y neuropatía periférica.',
          organos: [ 'encefalo', 'nervios' ],
          ref: { f: 'dailymed-tinidazol', sec: '5 · Advertencias y precauciones', cita: 'Convulsive seizures and peripheral neuropathy', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Graves: convulsiones y neuropatía periférica pasajera con entumecimiento y hormigueo.',
          '34084-4',
          'Two serious adverse reactions reported include convulsions and transient peripheral neuropathy'
        ],
        [ 'Digestivas: lengua de otro color, estomatitis y diarrea.', '34084-4', 'tongue discoloration, stomatitis, diarrhea' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 250 mg o 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tricomoniasis, giardiasis, amebiasis y vaginosis bacteriana.',
    actua: 'Su grupo nitro se reduce dentro de los microorganismos y forma un radical libre que daña su ADN.',
    recorrido: 'Se absorbe rápida y completamente; con 2 g en ayunas, el pico (47,7 µg/mL) llega hacia 1,6 horas. La comida retrasa el pico 2 horas sin cambiar el AUC. Se elimina por el hígado y los riñones: un 20-25 % sale sin cambios por la orina y un 12 % por las heces. Su semivida es de 12 a 14 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película y ranurado.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película y ranurado.',
          ref: { f: 'dailymed-tinidazol', sec: '3 · Formas y concentraciones', cita: 'pink, round, scored tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápida y completamente; con 2 g en ayunas, el pico (47,7 µg/mL) llega hacia 1,6 horas. La comida retrasa el pico 2 horas sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápida y completamente; con 2 g en ayunas, el pico (47,7 µg/mL) llega hacia 1,6 horas. La comida retrasa el pico 2 horas sin cambiar el AUC.',
          ref: {
            f: 'dailymed-tinidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration, tinidazole is rapidly and completely absorbed',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Llega a casi todos los tejidos y líquidos y atraviesa la barrera hematoencefálica; volumen aparente de unos 50 L y unión a proteínas del 12 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Llega a casi todos los tejidos y líquidos y atraviesa la barrera hematoencefálica; volumen aparente de unos 50 L y unión a proteínas del 12 %.',
          ref: {
            f: 'dailymed-tinidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Tinidazole is distributed into virtually all tissues and body fluids and also crosses the blood-brain barrier',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ADN del microorganismo',
        efecto: 'Su grupo nitro se reduce dentro de los microorganismos y forma un radical libre que daña su ADN.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Su grupo nitro se reduce dentro de los microorganismos y forma un radical libre que daña su ADN.',
            ref: {
              f: 'dailymed-tinidazol',
              sec: '12.4 · Microbiología',
              cita: 'The free nitro- radical generated as a result of this reduction may be responsible for the antiprotozoal activity',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en buena parte por oxidación, hidroxilación y conjugación, sobre todo por CYP3A4; en el plasma predomina el tinidazol, con poco metabolito 2-hidroximetil.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en buena parte por oxidación, hidroxilación y conjugación, sobre todo por CYP3A4; en el plasma predomina el tinidazol, con poco metabolito 2-hidroximetil.',
          ref: {
            f: 'dailymed-tinidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Tinidazole is significantly metabolized in humans prior to excretion',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '2-hidroximetil tinidazol',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-tinidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'along with a small amount of the 2-hydroxymethyl metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por el hígado y los riñones: un 20-25 % sale sin cambios por la orina y un 12 % por las heces. Su semivida es de 12 a 14 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por el hígado y los riñones: un 20-25 % sale sin cambios por la orina y un 12 % por las heces. Su semivida es de 12 a 14 horas.',
          ref: {
            f: 'dailymed-tinidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'excreted in the urine mainly as unchanged drug (approximately 20-25% of the administered dose)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '47,7 (± 7,5)',
      unidad: 'µg/mL',
      analito: 'tinidazol',
      poblacion: 'adultos sanos',
      condiciones: 'dosis única de 2 g en ayunas',
      ref: {
        f: 'dailymed-tinidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'produced a mean peak plasma concentration (C max ) of 47.7 (±7.5) µg/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1,6 (± 0,7)',
      unidad: 'h',
      analito: 'tinidazol',
      poblacion: 'adultos sanos',
      condiciones: 'dosis única de 2 g en ayunas',
      ref: {
        f: 'dailymed-tinidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'with a mean time to peak concentration (T max ) of 1.6 (±0.7) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '13,2 (± 1,4)',
      unidad: 'h',
      analito: 'tinidazol',
      poblacion: 'adultos sanos',
      condiciones: 'dosis única de 2 g',
      ref: { f: 'dailymed-tinidazol', sec: '12.3 · Farmacocinética', cita: 'The elimination half-life (T 1/2 ) was 13.2 (±1.4) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '50 (aprox.)',
      unidad: 'L',
      analito: 'tinidazol',
      ref: { f: 'dailymed-tinidazol', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is about 50 liters', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '12',
      unidad: '%',
      analito: 'tinidazol',
      ref: { f: 'dailymed-tinidazol', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of tinidazole is 12%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tinidazol', 'a0d01539-8413-4703-94cc-d221918630a1', 'TINDAMAX (TINIDAZOLE) TABLET, FILM COATED', 'Tindamax', '9', '2021-12-28', '2026-11-12'),
    rengPubchem(5479, 'tinidazole', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
