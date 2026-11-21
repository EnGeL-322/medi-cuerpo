import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'amitriptilina',
    nombre: 'Amitriptilina',
    clase: 'Antidepresivo tricíclico',
    sinonimos: [ 'amitriptyline', 'Tryptizol' ],
    formula: 'C20H23N',
    masaMolar: 277.4,
    smiles: 'CN(C)CCC=C1C2=CC=CC=C2CCC3=CC=CC=C31',
    inchikey: 'KRMDCWKBEZIMAB-UHFFFAOYSA-N',
    cid: 2160,
    iupac: 'N,N-dimethyl-3-(2-tricyclo[9.4.0.03,8]pentadeca-1(15),3,5,7,11,13-hexaenylidene)propan-1-amine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'amitriptilina-oral',
      producto: 'TRYPTIZOL 25 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Pan Quimica Farmaceutica S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '25 mg de amitriptilina hidrocloruro por comprimido',
      sal: {
        nombre: 'Amitriptilina hidrocloruro',
        ref: { f: 'cima-37130', sec: '2 · Composición cualitativa y cuantitativa', cita: '25 mg de amitriptilina hidrocloruro', codigo: 'FT 2' }
      },
      excipientes: [
        'Lactosa hidratada',
        'fosfato cálcico dibásico',
        'celulosa en polvo',
        'almidón de maíz',
        'sílice coloidal',
        'ácido esteárico',
        'estearato magnésico',
        'hidroxipropilmetilcelulosa (E464)',
        'hidroxipropilcelulosa (E463)',
        'dióxido de titanio (E171)',
        'talco',
        'colorante y cera de carnauba (según la concentración)'
      ],
      usos: {
        t: 'Trastorno depresivo mayor y dolor neuropático en adultos, prevención de la cefalea tensional crónica y de la migraña, y enuresis nocturna en niños desde 6 años.',
        ref: { f: 'cima-37130', sec: '4.1 · Indicaciones terapéuticas', cita: 'el tratamiento del trastorno depresivo mayor en adultos', codigo: 'FT 4.1' }
      },
      fuente: 'cima-37130',
      advertencias: [
        {
          titulo: 'Arritmias e hipotensión',
          texto: 'Con dosis altas son probables las arritmias cardiacas y la hipotensión grave; también pueden aparecer con dosis normales si hay cardiopatía.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-37130',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Es probable que con dosis altas se produzcan arritmias cardiacas e hipotensión grave',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Puede causar efectos parecidos a los de otros antidepresivos tricíclicos; algunos, como la cefalea o el estreñimiento, también pueden ser síntomas de depresión.',
          'FT 4.8',
          'La amitriptilina puede inducir efectos adversos similares a los de otros antidepresivos tricíclicos'
        ],
        [
          'Se han notificado reacciones cutáneas graves, incluida la reacción con eosinofilia y síntomas sistémicos (DRESS).',
          'FT 4.8',
          'Se han notificado reacciones adversas cutáneas graves (RACG)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 25 mg de amitriptilina hidrocloruro por comprimido. Los excipientes no son el principio activo.',
    usos: 'Trastorno depresivo mayor y dolor neuropático en adultos, prevención de la cefalea tensional crónica y de la migraña, y enuresis nocturna en niños desde 6 años.',
    actua: 'Evita la recaptación de noradrenalina y serotonina en las terminaciones nerviosas, lo que potencia su acción en el cerebro; tiene además marcados efectos anticolinérgicos y sedantes.',
    recorrido: 'Se absorbe de forma lenta pero completa; el pico plasmático llega hacia las 4 horas y la biodisponibilidad oral absoluta media es del 53 %. Sale sobre todo por la orina; la amitriptilina sin cambios es solo alrededor del 2 %. Su semivida tras la toma oral es de unas 25 horas.'
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
          ref: { f: 'cima-37130', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe de forma lenta pero completa; el pico plasmático llega hacia las 4 horas y la biodisponibilidad oral absoluta media es del 53 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe de forma lenta pero completa; el pico plasmático llega hacia las 4 horas y la biodisponibilidad oral absoluta media es del 53 %.',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la amitriptilina se absorbe de forma lenta, pero completa',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Pico plasmático hacia las 4 horas con los comprimidos de 10 y 25 mg.',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'genera concentraciones plasmáticas máximas al cabo de unas 4 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Biodisponibilidad oral absoluta media del 53 %.',
          ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad oral absoluta media es del 53', codigo: 'FT 5.2' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte mucho por los tejidos (volumen aparente de unos 16 L/kg) y alrededor del 95 % circula unida a proteínas; atraviesa la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte mucho por los tejidos (volumen aparente de unos 16 L/kg) y alrededor del 95 % circula unida a proteínas; atraviesa la placenta.',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas es de alrededor del 95',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Transportadores de noradrenalina y serotonina',
        efecto: 'Evita la recaptación de noradrenalina y serotonina en las terminaciones nerviosas, lo que potencia su acción en el cerebro; tiene además marcados efectos anticolinérgicos y sedantes.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Evita la recaptación de noradrenalina y serotonina en las terminaciones nerviosas, lo que potencia su acción en el cerebro; tiene además marcados efectos anticolinérgicos y sedantes.',
            ref: {
              f: 'cima-37130',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Evita la recaptación y, por lo tanto, la inactivación de la noradrenalina y la serotonina en las terminaciones nerviosas',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma por desmetilación (CYP2C19, CYP3A4) e hidroxilación (CYP2D6) y después se conjuga con ácido glucurónico; su principal metabolito activo es la nortriptilina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma por desmetilación (CYP2C19, CYP3A4) e hidroxilación (CYP2D6) y después se conjuga con ácido glucurónico; su principal metabolito activo es la nortriptilina.',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principal metabolito activo es la amina secundaria nortriptilina',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Nortriptilina',
          actividad: 'activo',
          nota: 'Inhibe más la captación de noradrenalina que la de serotonina.',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principal metabolito activo es la amina secundaria nortriptilina',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por la orina; la amitriptilina sin cambios es solo alrededor del 2 %. Su semivida tras la toma oral es de unas 25 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por la orina; la amitriptilina sin cambios es solo alrededor del 2 %. Su semivida tras la toma oral es de unas 25 horas.',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La excreción tiene lugar principalmente a través de la orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La eliminación renal de amitriptilina inalterada es insignificante (alrededor del 2 %).',
          ref: {
            f: 'cima-37130',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación renal de amitriptilina inalterada es insignificante',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación tras la toma oral',
      valor: '24,65 (± 6,31)',
      unidad: 'h',
      analito: 'amitriptilina',
      ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de aproximadamente 25 horas (24,65 ± 6,31 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '3,89 (± 1,87)',
      unidad: 'h',
      analito: 'amitriptilina',
      condiciones: 'comprimidos de 10 y 25 mg',
      ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: 't max = 3,89 ± 1,87 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '30,95 (± 9,61)',
      unidad: 'ng/mL',
      analito: 'amitriptilina',
      condiciones: 'dosis oral de 50 mg',
      ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se observó una C max media = 30,95 ± 9,61 ng/ml', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta media',
      valor: '53',
      unidad: '%',
      analito: 'amitriptilina',
      ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad oral absoluta media es del 53', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '16 (± 3)',
      unidad: 'L/kg',
      analito: 'amitriptilina',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: '(16 ± 3 l/kg)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'amitriptilina',
      ref: { f: 'cima-37130', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a proteínas plasmáticas es de alrededor del 95', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-37130', '37130', 'TRYPTIZOL 25 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Pan Quimica Farmaceutica S.A.)', '2025-01-14', '2026-11-12'),
    rengPubchem(2160, 'amitriptyline', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
