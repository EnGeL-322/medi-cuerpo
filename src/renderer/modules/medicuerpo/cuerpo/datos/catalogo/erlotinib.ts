import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'erlotinib',
    nombre: 'Erlotinib',
    clase: 'Inhibidor de la tirosina cinasa del EGFR',
    sinonimos: [ 'erlotinib', 'Tarceva' ],
    formula: 'C22H23N3O4',
    masaMolar: 393.4,
    smiles: 'COCCOC1=C(C=C2C(=C1)C(=NC=N2)NC3=CC=CC(=C3)C#C)OCCOC',
    inchikey: 'AAKJLRGGTJKAMG-UHFFFAOYSA-N',
    cid: 176870,
    iupac: 'N-(3-ethynylphenyl)-6,7-bis(2-methoxyethoxy)quinazolin-4-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'erlotinib-oral',
      producto: 'ERLOTINIB · comprimido recubierto con película',
      titular: 'CAMBER PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg, 100 mg o 150 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de erlotinib',
        ref: { f: 'dailymed-erlotinib', sec: '11 · Descripción', cita: 'Erlotinib hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'hydroxypropyl cellulose, unspecified',
        'hypromellose 2910 (6 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'polyethylene glycol 400',
        'sodium lauryl sulfate',
        'sodium starch glycolate type a potato',
        'titanium dioxide',
        'microcrystalline cellulose 112'
      ],
      usos: {
        t: 'Cáncer de pulmón no microcítico metastásico con deleciones del exón 19 o sustitución L858R del EGFR, y cáncer de páncreas en combinación con gemcitabina.',
        ref: {
          f: 'dailymed-erlotinib',
          sec: '1 · Indicaciones',
          cita: 'The treatment of patients with metastatic non-small cell lung cancer (NSCLC) whose tumors have epidermal growth factor receptor (EGFR) exon 19 deletions or exon 21 (L858R) substitution mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-erlotinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial',
          texto: 'Se han descrito casos graves, incluso mortales.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-erlotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of serious ILD, including fatal cases, can occur with erlotinib treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Puede haber insuficiencia hepática y síndrome hepatorrenal, incluso mortales, aun con función hepática normal.',
          organos: [ 'higado', 'rinones' ],
          ref: {
            f: 'dailymed-erlotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hepatic failure and hepatorenal syndrome, including fatal cases, can occur with erlotinib treatment in patients with normal hepatic function',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Perforación gastrointestinal',
          texto: 'Se han descrito perforaciones, incluso mortales.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-erlotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Gastrointestinal perforation, including fatal cases, can occur with erlotinib treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [ 'Las más frecuentes (≥ 20 %): erupción, diarrea, anorexia y cansancio.', '34084-4', 'were rash, diarrhea, anorexia, fatigue' ],
        [ 'También disnea, tos, náuseas y vómitos.', '34084-4', 'dyspnea, cough, nausea, and vomiting' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25 mg, 100 mg o 150 mg por comprimido, según la etiqueta; el activo va como clorhidrato de erlotinib. Los excipientes no son el principio activo.',
    usos: 'Cáncer de pulmón no microcítico metastásico con deleciones del exón 19 o sustitución L858R del EGFR, y cáncer de páncreas en combinación con gemcitabina.',
    actua: 'Inhibe de forma reversible la actividad cinasa del EGFR y con ello la autofosforilación de los residuos de tirosina del receptor y la señal posterior.',
    recorrido: 'Se absorbe alrededor del 60 % tras la toma por boca y el máximo llega a las 4 horas. La comida aumenta la biodisponibilidad hasta cerca del 100 %. Tras 100 mg se recuperó el 91 % de la dosis: el 83 % por las heces (1 % como fármaco intacto) y el 8 % por la orina (0,3 % intacto). La semivida mediana es de 36,2 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos blancos, redondos, biconvexos y recubiertos con película, de 25, 100 o 150 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos blancos, redondos, biconvexos y recubiertos con película, de 25, 100 o 150 mg.',
          ref: {
            f: 'dailymed-erlotinib',
            sec: '3 · Formas y concentraciones',
            cita: 'White colored, round biconvex film-coated tablets',
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
      ocurre: 'Se absorbe alrededor del 60 % tras la toma por boca y el máximo llega a las 4 horas. La comida aumenta la biodisponibilidad hasta cerca del 100 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe alrededor del 60 % tras la toma por boca y el máximo llega a las 4 horas. La comida aumenta la biodisponibilidad hasta cerca del 100 %.',
          ref: {
            f: 'dailymed-erlotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Erlotinib is about 60% absorbed after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida aumentó la biodisponibilidad del erlotinib hasta aproximadamente el 100 %.',
          ref: {
            f: 'dailymed-erlotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Food increased the bioavailability of erlotinib to approximately 100%',
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
      ocurre: 'El erlotinib va unido en un 93 % a la albúmina y a la glucoproteína ácida α1 del plasma; el volumen aparente de distribución es de 232 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El erlotinib va unido en un 93 % a la albúmina y a la glucoproteína ácida α1 del plasma; el volumen aparente de distribución es de 232 L.',
          ref: {
            f: 'dailymed-erlotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Erlotinib is 93% protein bound to plasma albumin and alpha-1 acid glycoprotein (AAG)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa del receptor del factor de crecimiento epidérmico (EGFR)',
        efecto: 'Inhibe de forma reversible la actividad cinasa del EGFR y con ello la autofosforilación de los residuos de tirosina del receptor y la señal posterior.',
        lugar: [ 'pulmones' ],
        datos: [
          {
            t: 'Inhibe de forma reversible la actividad cinasa del EGFR y con ello la autofosforilación de los residuos de tirosina del receptor y la señal posterior.',
            ref: {
              f: 'dailymed-erlotinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Erlotinib reversibly inhibits the kinase activity of EGFR, preventing autophosphorylation of tyrosine residues associated with the receptor and thereby inhibiting further downstream signaling',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza sobre todo el CYP3A4 y, en menor medida, el CYP1A2 y la isoforma extrahepática CYP1A1.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza sobre todo el CYP3A4 y, en menor medida, el CYP1A2 y la isoforma extrahepática CYP1A1.',
          ref: {
            f: 'dailymed-erlotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Erlotinib is metabolized primarily by CYP3A4 and to a lesser extent by CYP1A2, and the extrahepatic isoform CYP1A1',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg se recuperó el 91 % de la dosis: el 83 % por las heces (1 % como fármaco intacto) y el 8 % por la orina (0,3 % intacto). La semivida mediana es de 36,2 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg se recuperó el 91 % de la dosis: el 83 % por las heces (1 % como fármaco intacto) y el 8 % por la orina (0,3 % intacto). La semivida mediana es de 36,2 horas.',
          ref: {
            f: 'dailymed-erlotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a 100 mg oral dose, 91% of the dose was recovered: 83% in feces (1% of the dose as intact parent) and 8% in urine (0.3% of the dose as intact parent)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida por boca',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'erlotinib',
      ref: { f: 'dailymed-erlotinib', sec: '12.3 · Farmacocinética', cita: 'Erlotinib is about 60% absorbed after oral administration', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '4',
      unidad: 'h',
      analito: 'erlotinib',
      ref: { f: 'dailymed-erlotinib', sec: '12.3 · Farmacocinética', cita: 'Peak plasma levels occur 4 hours after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Biodisponibilidad con comida',
      valor: '≈ 100',
      unidad: '%',
      analito: 'erlotinib',
      ref: {
        f: 'dailymed-erlotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Food increased the bioavailability of erlotinib to approximately 100%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '93',
      unidad: '%',
      analito: 'erlotinib',
      ref: {
        f: 'dailymed-erlotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Erlotinib is 93% protein bound to plasma albumin and alpha-1 acid glycoprotein (AAG)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '232',
      unidad: 'L',
      analito: 'erlotinib',
      ref: {
        f: 'dailymed-erlotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Erlotinib has an apparent volume of distribution of 232 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida mediana de eliminación',
      valor: '36,2',
      unidad: 'h',
      analito: 'erlotinib',
      poblacion: 'pacientes con cáncer de pulmón',
      condiciones: 'régimen de segunda o tercera línea en monoterapia',
      ref: {
        f: 'dailymed-erlotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Erlotinib is eliminated with a median half-life of 36.2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '83',
      unidad: '% de la dosis',
      analito: 'erlotinib y metabolitos',
      condiciones: 'dosis oral de 100 mg',
      ref: { f: 'dailymed-erlotinib', sec: '12.3 · Farmacocinética', cita: '83% in feces (1% of the dose as intact parent)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '8',
      unidad: '% de la dosis',
      analito: 'erlotinib y metabolitos',
      condiciones: 'dosis oral de 100 mg',
      ref: { f: 'dailymed-erlotinib', sec: '12.3 · Farmacocinética', cita: '8% in urine (0.3% of the dose as intact parent)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-erlotinib', 'a3b2d622-b4d5-4819-862b-f8fd3adcec6f', 'ERLOTINIB (ERLOTINIB) TABLET, FILM COATED', 'ERLOTINIB', '1', '2024-07-10', '2026-11-13'),
    rengPubchem(176870, 'erlotinib', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
