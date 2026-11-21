import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metilprednisolona',
    nombre: 'Metilprednisolona',
    clase: 'Glucocorticoide',
    sinonimos: [ 'methylprednisolone', 'Urbason' ],
    formula: 'C22H30O5',
    masaMolar: 374.5,
    smiles: 'C[C@H]1C[C@H]2[C@@H]3CC[C@@]([C@]3(C[C@@H]([C@@H]2[C@@]4(C1=CC(=O)C=C4)C)O)C)(C(=O)CO)O',
    inchikey: 'VHRSUDSXCMQTMA-PJHHCJLFSA-N',
    cid: 6741,
    iupac: '(6S,8S,9S,10R,11S,13S,14S,17R)-11,17-dihydroxy-17-(2-hydroxyacetyl)-6,10,13-trimethyl-7,8,9,11,12,14,15,16-octahydro-6H-cyclopenta[a]phenanthren-3-one',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'metilprednisolona-oral',
      producto: 'URBASON 4 mg COMPRIMIDOS',
      titular: 'Fidia Farmaceutici S.P.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '4, 16 y 40 mg de metilprednisolona por comprimido, según la ficha técnica',
      excipientes: [ 'Lactosa monohidrato', 'Almidón de maíz', 'Talco', 'Estearato de magnesio', 'Sílice coloidal anhidra' ],
      usos: {
        t: 'Tratamiento de sustitución en la insuficiencia adrenal y, a dosis farmacológicas, por su acción antiinflamatoria e inmunosupresora.',
        ref: {
          f: 'cima-32729',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de sustitución en la insuficiencia adrenal, para reponer la falta de hormonas endógenas',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-32729',
      advertencias: [
        {
          titulo: 'Perforación intestinal',
          texto: 'Por el riesgo de perforación intestinal con peritonitis, solo debe usarse en casos como la colitis ulcerosa grave o la diverticulitis cuando haya razones médicas importantes y con vigilancia adecuada.',
          organos: [ 'intestino-delgado', 'intestino-grueso' ],
          ref: {
            f: 'cima-32729',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Debido al riesgo de perforación intestinal con peritonitis, Urbason solo debe ser utilizado en los siguientes casos cuando existan importantes razones médicas para ello',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Infecciones',
          texto: 'Puede debilitar la respuesta inmune y permitir nuevas infecciones o la activación de infecciones latentes.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'cima-32729',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El empleo de glucocorticoides puede debilitar la respuesta inmune, y pueden surgir nuevas infecciones',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'En la mayor parte de los casos afectan sobre todo al sistema endocrino y al equilibrio electrolítico.',
          'FT 4.8',
          'En l a mayor parte de los casos las reacciones adversas afectan principalmente al sistema endocrino y al equilibrio electrolítico'
        ],
        [
          'Son frecuentes la distribución anormal de grasas (obesidad troncal, cara de luna llena) y el aumento de la glucemia.',
          'FT 4.8',
          'Frecuentes : distribución anormal de grasas, como obesidad troncal, cara de luna llena y aumento en los niveles de glucemia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 4, 16 y 40 mg de metilprednisolona por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de sustitución en la insuficiencia adrenal y, a dosis farmacológicas, por su acción antiinflamatoria e inmunosupresora.',
    actua: 'Es un glucocorticoide de duración de acción intermedia, con potencia mineralocorticoide prácticamente nula; los esteroides interaccionan con receptores citoplasmáticos intracelulares específicos.',
    recorrido: 'La biodisponibilidad oral es del 80 % y el Tmax de 90 minutos. Se elimina sobre todo por la orina; menos del 10 % se excreta inalterado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: {
            f: 'cima-32729',
            sec: '3 · Forma farmacéutica',
            cita: 'Urbason 4 mg comprimidos : comprimidos redondos, planos, ranurados',
            codigo: 'FT 3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral es del 80 % y el Tmax de 90 minutos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral es del 80 % y el Tmax de 90 minutos.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Su biodisponibilidad oral es del 80 % (Tmax = 90 min)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Los alimentos retrasan la absorción pero no la reducen.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los alimentos retrasan la absorción pero no la reducen',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen aparente de distribución es de 1,2-1,5 L/kg: se distribuye ampliamente por todo el organismo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen aparente de distribución es de 1,2-1,5 L/kg: se distribuye ampliamente por todo el organismo.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Su volumen aparente de distribución es de 1,2-1,5 l/kg siendo distribuida ampliamente por todo el organismo',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La unión a proteínas del plasma es del 62 %; se une solo a la albúmina, no a la transcortina.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El grado de unión a proteínas plasmáticas es del 62%, se une sólo a la albúmina pero no a la transcortina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Difunde a través de la barrera placentaria y a la leche.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Difunde a través de la barrera placentaria y lactosanguínea',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor citoplasmático de glucocorticoides',
        efecto: 'Es un glucocorticoide de duración de acción intermedia, con potencia mineralocorticoide prácticamente nula; los esteroides interaccionan con receptores citoplasmáticos intracelulares específicos.',
        lugar: [ 'sistema-inmunitario', 'tejidos' ],
        datos: [
          {
            t: 'Es un glucocorticoide de duración de acción intermedia, con potencia mineralocorticoide prácticamente nula; los esteroides interaccionan con receptores citoplasmáticos intracelulares específicos.',
            ref: {
              f: 'cima-32729',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Glucocorticoide de duración de acción intermedia, con prácticamente nula potencia mineralocorticoide',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en el hígado y da metabolitos sin actividad biológica significativa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en el hígado y da metabolitos sin actividad biológica significativa.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Es metabolizado en el hígado, dando lugar a metabolitos sin actividad biológica significativa',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos hepáticos',
          actividad: 'inactivo',
          nota: 'Sin actividad biológica significativa.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'dando lugar a metabolitos sin actividad biológica significativa',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por la orina; menos del 10 % se excreta inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por la orina; menos del 10 % se excreta inalterado.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'siendo eliminado mayoritariamente con la orina, <10% se excreta en forma inalterada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación es de 4-8 horas y la semivida biológica, de 18-36 horas.',
          ref: {
            f: 'cima-32729',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Su semivida de eliminación es de 4-8 h y su semivida biológica es de 18-36 h',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '80',
      unidad: '%',
      analito: 'metilprednisolona',
      ref: { f: 'cima-32729', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su biodisponibilidad oral es del 80 %', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '90',
      unidad: 'min',
      analito: 'metilprednisolona',
      ref: { f: 'cima-32729', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su biodisponibilidad oral es del 80 % (Tmax = 90 min)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '1,2-1,5',
      unidad: 'L/kg',
      analito: 'metilprednisolona',
      ref: { f: 'cima-32729', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su volumen aparente de distribución es de 1,2-1,5 l/kg', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '62',
      unidad: '%',
      analito: 'metilprednisolona',
      ref: { f: 'cima-32729', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El grado de unión a proteínas plasmáticas es del 62%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '4-8',
      unidad: 'h',
      analito: 'metilprednisolona',
      ref: { f: 'cima-32729', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su semivida de eliminación es de 4-8 h', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-32729', '32729', 'URBASON 4 mg COMPRIMIDOS (Fidia Farmaceutici S.P.A.)', '2024-11-26', '2026-11-15'),
    rengPubchem(6741, 'methylprednisolone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
