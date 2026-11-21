import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'baloxavir',
    nombre: 'Baloxavir marboxil',
    clase: 'Antiviral frente a la gripe (inhibidor de la endonucleasa PA, profármaco)',
    sinonimos: [ 'baloxavir marboxil', 'Xofluza' ],
    formula: 'C27H23F2N3O7S',
    masaMolar: 571.6,
    smiles: 'COC(=O)OCOC1=C2C(=O)N3CCOC[C@H]3N(N2C=CC1=O)[C@H]4C5=C(CSC6=CC=CC=C46)C(=C(C=C5)F)F',
    inchikey: 'RZVPBGBYGMDSBG-GGAORHGYSA-N',
    cid: 124081896,
    iupac: '[(3R)-2-[(11S)-7,8-difluoro-6,11-dihydrobenzo[c][1]benzothiepin-11-yl]-9,12-dioxo-5-oxa-1,2,8-triazatricyclo[8.4.0.03,8]tetradeca-10,13-dien-11-yl]oxymethyl methyl carbonate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'baloxavir-oral',
      producto: 'Xofluza · comprimido recubierto con película',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '40 mg o 80 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Baloxavir marboxil', ref: { f: 'dailymed-baloxavir', sec: '11 · Descripción', cita: 'Baloxavir marboxil', codigo: '34089-3' } },
      excipientes: [
        'lactose monohydrate',
        'croscarmellose sodium',
        'povidone k25',
        'microcrystalline cellulose',
        'sodium stearyl fumarate',
        'hypromellose, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Gripe aguda no complicada en personas desde 5 años con síntomas desde hace 48 horas o menos, y prevención tras el contacto con un enfermo.',
        ref: {
          f: 'dailymed-baloxavir',
          sec: '1 · Indicaciones',
          cita: 'Treatment of acute uncomplicated influenza in patients 5 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-baloxavir',
      advertencias: [
        {
          titulo: 'Hipersensibilidad',
          texto: 'Se han descrito anafilaxia, urticaria, angioedema y eritema multiforme tras su comercialización.',
          organos: [ 'piel', 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-baloxavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of anaphylaxis, urticaria, angioedema, and erythema multiforme have been reported in postmarketing experience',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En los ensayos, diarrea (3 %), bronquitis (3 %), náuseas (2 %), sinusitis (2 %) y dolor de cabeza (1 %), con frecuencias parecidas al placebo.',
          '34084-4',
          'Diarrhea 3% 4% Bronchitis 3% 4% Nausea 2% 3%'
        ],
        [ 'Datos de 1440 adultos y adolescentes con gripe no complicada.', '34084-4', 'XOFLUZA (N=1,440) Placebo (N=1,136)' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 40 mg o 80 mg por comprimido, según la etiqueta; el activo va como baloxavir marboxil. Los excipientes no son el principio activo.',
    usos: 'Gripe aguda no complicada en personas desde 5 años con síntomas desde hace 48 horas o menos, y prevención tras el contacto con un enfermo.',
    actua: 'Es un profármaco que se hidroliza a baloxavir, que inhibe la endonucleasa de la proteína PA del virus de la gripe e impide la transcripción de sus genes.',
    recorrido: 'Se convierte casi por completo en baloxavir tras tomarlo; el pico llega a una mediana de 4 horas. Con comida, la Cmax baja un 48 % y el AUC un 36 %. Sale sobre todo por las heces (80,1 % de la radiactividad) y en menor medida por la orina (14,7 %); su semivida terminal aparente es de unas 79 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: {
            f: 'dailymed-baloxavir',
            sec: '3 · Formas y concentraciones',
            cita: 'white to light yellow, oblong shaped, film-coated',
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
      ocurre: 'Se convierte casi por completo en baloxavir tras tomarlo; el pico llega a una mediana de 4 horas. Con comida, la Cmax baja un 48 % y el AUC un 36 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se convierte casi por completo en baloxavir tras tomarlo; el pico llega a una mediana de 4 horas. Con comida, la Cmax baja un 48 % y el AUC un 36 %.',
          ref: {
            f: 'dailymed-baloxavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Baloxavir marboxil is a prodrug that is almost completely converted to its active metabolite, baloxavir, following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico a una mediana de 4 horas.',
          ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'T max (hr) Median 4', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'pulmones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El baloxavir se une a proteínas del suero en un 92,9-93,9 % y tiene un volumen aparente de unos 1180 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El baloxavir se une a proteínas del suero en un 92,9-93,9 % y tiene un volumen aparente de unos 1180 L.',
          ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'bound to human serum proteins in vitro 92.9–93.9', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Endonucleasa PA del virus de la gripe',
        efecto: 'Es un profármaco que se hidroliza a baloxavir, que inhibe la endonucleasa de la proteína PA del virus de la gripe e impide la transcripción de sus genes.',
        lugar: [ 'vias-respiratorias', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Es un profármaco que se hidroliza a baloxavir, que inhibe la endonucleasa de la proteína PA del virus de la gripe e impide la transcripción de sus genes.',
            ref: {
              f: 'dailymed-baloxavir',
              sec: '12.4 · Microbiología',
              cita: 'Baloxavir inhibits the endonuclease activity of the polymerase acidic (PA) protein',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por UGT1A3 y en segundo lugar por CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por UGT1A3 y en segundo lugar por CYP3A4.',
          ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'Metabolic pathways Primary: UGT1A3 Secondary: CYP3A', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Baloxavir',
          actividad: 'activo',
          nota: 'Forma activa.',
          ref: {
            f: 'dailymed-baloxavir',
            sec: '12 · Farmacología clínica',
            cita: 'is a prodrug that is converted by hydrolysis to baloxavir, the active form that exerts anti-influenza virus activity',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por las heces (80,1 % de la radiactividad) y en menor medida por la orina (14,7 %); su semivida terminal aparente es de unas 79 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por las heces (80,1 % de la radiactividad) y en menor medida por la orina (14,7 %); su semivida terminal aparente es de unas 79 horas.',
          ref: {
            f: 'dailymed-baloxavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Urine: 14.7 (total radioactivity); 3.3 (baloxavir) Feces: 80.1 (total radioactivity)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (mediana)',
      valor: '4',
      unidad: 'h',
      analito: 'baloxavir (forma activa)',
      ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'T max (hr) Median 4', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '82,5 (CV 43 %)',
      unidad: 'ng/mL',
      analito: 'baloxavir (forma activa)',
      poblacion: 'adultos y adolescentes',
      condiciones: 'dosis de 80 mg',
      ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'C max (ng/mL) 68.9 (44.9%) 82.5 (43.0%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '79,1 (CV 22,4 %)',
      unidad: 'h',
      analito: 'baloxavir (forma activa)',
      ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'Apparent terminal elimination half-life (hr) 79.1 (22.4%)', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero (in vitro)',
      valor: '92,9-93,9',
      unidad: '%',
      analito: 'baloxavir',
      ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'bound to human serum proteins in vitro 92.9–93.9', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '1180 (CV 20,8 %)',
      unidad: 'L',
      analito: 'baloxavir',
      ref: {
        f: 'dailymed-baloxavir',
        sec: '12.3 · Farmacocinética',
        cita: 'Volume of distribution (V/F, L) Geometric mean (geometric CV%) 1180 (20.8%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '80,1',
      unidad: '% de la dosis',
      analito: 'baloxavir y metabolitos',
      condiciones: 'dosis marcada',
      ref: { f: 'dailymed-baloxavir', sec: '12.3 · Farmacocinética', cita: 'Feces: 80.1 (total radioactivity)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-baloxavir', 'e49e1a61-1b7c-4be5-ac84-af6240b511e7', 'XOFLUZA (BALOXAVIR MARBOXIL) TABLET, FILM COATED XOFLUZA (BALOXAVIR MARBOXIL) GRANULE, FOR SOLUTION XOFLUZA (BALOXAVIR MARBOXIL) GRANULE, FOR SUSPENSION', 'Xofluza', '30', '2025-12-19', '2026-11-12'),
    rengPubchem(124081896, 'baloxavir marboxil', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
