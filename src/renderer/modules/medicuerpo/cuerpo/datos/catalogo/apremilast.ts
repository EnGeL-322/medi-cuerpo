import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'apremilast',
    nombre: 'Apremilast',
    clase: 'Inhibidor de la fosfodiesterasa 4',
    sinonimos: [ 'apremilast', 'Otezla' ],
    formula: 'C22H24N2O7S',
    masaMolar: 460.5,
    smiles: 'CCOC1=C(C=CC(=C1)[C@@H](CS(=O)(=O)C)N2C(=O)C3=C(C2=O)C(=CC=C3)NC(=O)C)OC',
    inchikey: 'IMOZEMNVLZVGJZ-QGZVFWFLSA-N',
    cid: 11561674,
    iupac: 'N-[2-[(1S)-1-(3-ethoxy-4-methoxyphenyl)-2-methylsulfonylethyl]-1,3-dioxoisoindol-4-yl]acetamide',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'apremilast-oral',
      producto: 'Otezla · comprimido recubierto con película',
      titular: 'AMGEN, INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '30 mg, 20 mg o 75 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide red',
        'ferric oxide yellow',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Artritis psoriásica activa, psoriasis en placas candidata a fototerapia o tratamiento sistémico y úlceras orales de la enfermedad de Behçet.',
        ref: {
          f: 'dailymed-apremilast',
          sec: '1 · Indicaciones',
          cita: 'Plaque psoriasis who are candidates for phototherapy or systemic therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-apremilast',
      advertencias: [
        {
          titulo: 'Hipersensibilidad',
          texto: 'Se han descrito angioedema y anafilaxia tras su comercialización.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-apremilast',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity reactions, including cases of angioedema and anaphylaxis, have been reported during post marketing surveillance',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea, náuseas y vómitos',
          texto: 'Se han descrito casos graves, casi siempre en las primeras semanas.',
          organos: [ 'intestino-delgado' ],
          ref: {
            f: 'dailymed-apremilast',
            sec: '5 · Advertencias y precauciones',
            cita: 'There have been reports of severe diarrhea, nausea, and vomiting associated with the use of OTEZLA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depresión',
          texto: 'Se asocia a una mayor incidencia de depresión.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-apremilast',
            sec: '5 · Advertencias y precauciones',
            cita: 'Treatment with apremilast is associated with an increased incidence of depression',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 %): diarrea, náuseas y dolor de cabeza.',
          '34084-4',
          'most common adverse reactions (≥ 5%) are diarrhea, nausea, and headache'
        ],
        [
          'En psoriasis en placas: también infección de vías respiratorias altas y cefalea tensional.',
          '34084-4',
          'The most common adverse reactions (≥ 5%) are diarrhea, nausea, upper respiratory tract infection, and headache, including tension headache'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 30 mg, 20 mg o 75 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Artritis psoriásica activa, psoriasis en placas candidata a fototerapia o tratamiento sistémico y úlceras orales de la enfermedad de Behçet.',
    actua: 'Inhibe la fosfodiesterasa 4 (PDE4) específica del AMP cíclico y sube el AMPc dentro de las células; el mecanismo exacto del efecto terapéutico no está bien definido.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 73 % y el máximo llega a una mediana de unas 2,5 horas. La comida no cambia la cantidad absorbida. Tras una dosis marcada, el 58 % de la radiactividad sale por la orina y el 39 % por las heces; el apremilast sin cambios es cerca del 3 % y del 7 %. La semivida terminal es de unas 6-9 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos recubiertos con película en forma de diamante, de 10 a 75 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos recubiertos con película en forma de diamante, de 10 a 75 mg.',
          ref: {
            f: 'dailymed-apremilast',
            sec: '3 · Formas y concentraciones',
            cita: 'OTEZLA is available as diamond-shaped, film-coated tablets',
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
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 73 % y el máximo llega a una mediana de unas 2,5 horas. La comida no cambia la cantidad absorbida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 73 % y el máximo llega a una mediana de unas 2,5 horas. La comida no cambia la cantidad absorbida.',
          ref: {
            f: 'dailymed-apremilast',
            sec: '12.3 · Farmacocinética',
            cita: 'OTEZLA when taken orally is absorbed with an absolute bioavailability of ~73%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida no altera la cantidad absorbida.',
          ref: {
            f: 'dailymed-apremilast',
            sec: '12.3 · Farmacocinética',
            cita: 'Co-administration with food does not alter the extent of absorption of OTEZLA',
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
      ocurre: 'La unión a proteínas del plasma es de alrededor del 68 % y el volumen aparente de distribución medio es de 87 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es de alrededor del 68 % y el volumen aparente de distribución medio es de 87 L.',
          ref: {
            f: 'dailymed-apremilast',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of apremilast is approximately 68%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Fosfodiesterasa 4 (PDE4)',
        efecto: 'Inhibe la fosfodiesterasa 4 (PDE4) específica del AMP cíclico y sube el AMPc dentro de las células; el mecanismo exacto del efecto terapéutico no está bien definido.',
        lugar: [ 'piel', 'articulaciones' ],
        datos: [
          {
            t: 'Inhibe la fosfodiesterasa 4 (PDE4) específica del AMP cíclico y sube el AMPc dentro de las células; el mecanismo exacto del efecto terapéutico no está bien definido.',
            ref: {
              f: 'dailymed-apremilast',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Apremilast is an oral small molecule inhibitor of phosphodiesterase 4 (PDE4) specific for cyclic adenosine monophosphate (cAMP)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho (hasta 23 metabolitos): por oxidación con CYP (sobre todo CYP3A4) seguida de glucuronidación y por hidrólisis no mediada por CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho (hasta 23 metabolitos): por oxidación con CYP (sobre todo CYP3A4) seguida de glucuronidación y por hidrólisis no mediada por CYP.',
          ref: {
            f: 'dailymed-apremilast',
            sec: '12.3 · Farmacocinética',
            cita: 'Apremilast is metabolized by both cytochrome (CYP) oxidative metabolism with subsequent glucuronidation and non-CYP mediated hydrolysis',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M12 (glucurónido del apremilast O-desmetilado)',
          actividad: 'inactivo',
          nota: 'Circula al 39 %; el apremilast es el componente circulante principal (45 %).',
          ref: {
            f: 'dailymed-apremilast',
            sec: '12.3 · Farmacocinética',
            cita: 'inactive metabolite M12 (39%), a glucuronide conjugate of O-demethylated apremilast',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 58 % de la radiactividad sale por la orina y el 39 % por las heces; el apremilast sin cambios es cerca del 3 % y del 7 %. La semivida terminal es de unas 6-9 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 58 % de la radiactividad sale por la orina y el 39 % por las heces; el apremilast sin cambios es cerca del 3 % y del 7 %. La semivida terminal es de unas 6-9 horas.',
          ref: {
            f: 'dailymed-apremilast',
            sec: '12.3 · Farmacocinética',
            cita: 'about 58% and 39% of the radioactivity is recovered in urine and feces, respectively',
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
      valor: '73 (aprox.)',
      unidad: '%',
      analito: 'apremilast',
      ref: { f: 'dailymed-apremilast', sec: '12.3 · Farmacocinética', cita: 'absolute bioavailability of ~73%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '2,5 (aprox.)',
      unidad: 'h',
      analito: 'apremilast',
      ref: {
        f: 'dailymed-apremilast',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations (C max ) occurring at a median time (t max ) of ~2.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '68 (aprox.)',
      unidad: '%',
      analito: 'apremilast',
      ref: {
        f: 'dailymed-apremilast',
        sec: '12.3 · Farmacocinética',
        cita: 'Human plasma protein binding of apremilast is approximately 68%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución medio',
      valor: '87',
      unidad: 'L',
      analito: 'apremilast',
      ref: { f: 'dailymed-apremilast', sec: '12.3 · Farmacocinética', cita: 'Mean apparent volume of distribution (Vd) is 87 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal de eliminación',
      valor: '6-9 (aprox.)',
      unidad: 'h',
      analito: 'apremilast',
      ref: { f: 'dailymed-apremilast', sec: '12.3 · Farmacocinética', cita: 'terminal elimination half-life of approximately 6-9 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático',
      valor: '10 (aprox.)',
      unidad: 'L/h',
      analito: 'apremilast',
      poblacion: 'sujetos sanos',
      ref: { f: 'dailymed-apremilast', sec: '12.3 · Farmacocinética', cita: 'The plasma clearance of apremilast is about 10 L/hr', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '58 (aprox.)',
      unidad: '%',
      analito: 'apremilast y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-apremilast',
        sec: '12.3 · Farmacocinética',
        cita: 'about 58% and 39% of the radioactivity is recovered in urine and feces, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '39 (aprox.)',
      unidad: '%',
      analito: 'apremilast y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-apremilast',
        sec: '12.3 · Farmacocinética',
        cita: 'about 58% and 39% of the radioactivity is recovered in urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-apremilast', 'f6b1f516-4972-4d82-bced-113e47b41cc5', 'OTEZLA (APREMILAST) TABLET, FILM COATED OTEZLA (APREMILAST) KIT', 'Otezla', '38', '2026-09-11', '2026-11-12'),
    rengPubchem(11561674, 'apremilast', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
