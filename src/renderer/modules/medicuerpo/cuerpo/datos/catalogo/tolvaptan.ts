import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tolvaptan',
    nombre: 'Tolvaptán',
    clase: 'Antagonista selectivo del receptor V2 de la vasopresina',
    sinonimos: [ 'tolvaptan', 'Samsca' ],
    formula: 'C26H25ClN2O3',
    masaMolar: 448.9,
    smiles: 'CC1=CC=CC=C1C(=O)NC2=CC(=C(C=C2)C(=O)N3CCCC(C4=C3C=CC(=C4)Cl)O)C',
    inchikey: 'GYHCTFXIZSNGJT-UHFFFAOYSA-N',
    cid: 216237,
    iupac: 'N-[4-(7-chloro-5-hydroxy-2,3,4,5-tetrahydro-1-benzazepine-1-carbonyl)-3-methylphenyl]-2-methylbenzamide',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'tolvaptan-oral',
      producto: 'SAMSCA · comprimido',
      titular: 'OTSUKA AMERICA PHARMACEUTICAL, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '15 mg o 30 mg por comprimido, según la etiqueta',
      excipientes: [
        'starch, corn',
        'hydroxypropyl cellulose, unspecified',
        'lactose monohydrate',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'fd&c blue no. 2 aluminum lake'
      ],
      usos: {
        t: 'Hiponatremia clínicamente significativa con volumen elevado o normal, incluida la insuficiencia cardiaca y el síndrome de secreción inadecuada de ADH.',
        ref: {
          f: 'dailymed-tolvaptan',
          sec: '1 · Indicaciones',
          cita: 'treatment of clinically significant hypervolemic and euvolemic hyponatremia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tolvaptan',
      advertencias: [
        {
          titulo: 'Iniciar en el hospital y vigilar el sodio',
          texto: 'Hay que iniciar y reiniciar el tratamiento en un hospital y controlar el sodio del suero; no es para la poliquistosis renal dominante.',
          organos: [ 'rinones', 'encefalo' ],
          ref: {
            f: 'dailymed-tolvaptan',
            sec: 'Advertencia destacada',
            cita: 'INITIATE AND RE-INITIATE IN A HOSPITAL AND MONITOR SERUM SODIUM',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Corrección demasiado rápida del sodio',
          texto: 'Una corrección demasiado rápida de la hiponatremia puede causar síndrome de desmielinización osmótica.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Osmotic demyelination syndrome is a risk associated with too rapid correction of hyponatremia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Lesión hepática',
          texto: 'Puede causar una lesión hepática grave y potencialmente mortal.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Tolvaptan can cause serious and potentially fatal liver injury',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % sobre placebo): sed, boca seca, astenia y estreñimiento.',
          '34084-4',
          'thirst, dry mouth, asthenia, constipation'
        ],
        [ 'También polaquiuria o poliuria e hiperglucemia.', '34084-4', 'pollakiuria or polyuria, and hyperglycemia' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 15 mg o 30 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Hiponatremia clínicamente significativa con volumen elevado o normal, incluida la insuficiencia cardiaca y el síndrome de secreción inadecuada de ADH.',
    actua: 'Bloquea los receptores V2 de la vasopresina en el riñón: aumenta la eliminación de agua libre por la orina (acuaresis), baja la osmolalidad de la orina y sube el sodio del suero.',
    recorrido: 'Los máximos llegan entre 2 y 4 horas; la biodisponibilidad absoluta con 30 mg es del 56 %. Una comida rica en grasa duplica la concentración máxima sin cambiar el AUC. Cerca del 40 % de la radiactividad sale por la orina (menos del 1 % como tolvaptán sin cambios) y el 59 % por las heces (19 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido azul de 15 mg (triangular) o de 30 mg (redondo).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido azul de 15 mg (triangular) o de 30 mg (redondo).',
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '3 · Formas y concentraciones',
            cita: '15 mg tablets are non-scored, blue, triangular, shallow-convex',
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
      ocurre: 'Los máximos llegan entre 2 y 4 horas; la biodisponibilidad absoluta con 30 mg es del 56 %. Una comida rica en grasa duplica la concentración máxima sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Los máximos llegan entre 2 y 4 horas; la biodisponibilidad absoluta con 30 mg es del 56 %. Una comida rica en grasa duplica la concentración máxima sin cambiar el AUC.',
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '12.3 · Farmacocinética',
            cita: 'peak concentrations of tolvaptan are observed between 2 and 4 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta tras 30 mg es del 56 % (intervalo 42-80 %).',
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of tolvaptan following an oral dose of 30 mg is 56% (range 42 to 80%)',
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
      ocurre: 'Se une a albúmina y a la glucoproteína ácida α1; la unión global supera el 98 %. El volumen de distribución es de unos 3 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a albúmina y a la glucoproteína ácida α1; la unión global supera el 98 %. El volumen de distribución es de unos 3 L/kg.',
          ref: { f: 'dailymed-tolvaptan', sec: '12.3 · Farmacocinética', cita: 'the overall protein binding is >98%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor V2 de la vasopresina',
        efecto: 'Bloquea los receptores V2 de la vasopresina en el riñón: aumenta la eliminación de agua libre por la orina (acuaresis), baja la osmolalidad de la orina y sube el sodio del suero.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Bloquea los receptores V2 de la vasopresina en el riñón: aumenta la eliminación de agua libre por la orina (acuaresis), baja la osmolalidad de la orina y sube el sodio del suero.',
            ref: {
              f: 'dailymed-tolvaptan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tolvaptan is a selective vasopressin V 2 -receptor antagonist with an affinity for the V 2 -receptor that is 1.8 times that of native arginine vasopressin',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza casi exclusivamente el CYP3A; se han identificado 14 metabolitos y ninguno es activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza casi exclusivamente el CYP3A; se han identificado 14 metabolitos y ninguno es activo.',
          ref: { f: 'dailymed-tolvaptan', sec: '12.3 · Farmacocinética', cita: 'Tolvaptan is metabolized almost exclusively by CYP3A', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito del ácido oxobutírico',
          actividad: 'inactivo',
          nota: 'Es el 52,5 % de la radiactividad del plasma; su semivida es de unas 180 horas.',
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '12.3 · Farmacocinética',
            cita: 'the oxobutyric acid metabolite was present at 52.5% of total plasma radioactivity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Cerca del 40 % de la radiactividad sale por la orina (menos del 1 % como tolvaptán sin cambios) y el 59 % por las heces (19 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Cerca del 40 % de la radiactividad sale por la orina (menos del 1 % como tolvaptán sin cambios) y el 59 % por las heces (19 % sin cambios).',
          ref: {
            f: 'dailymed-tolvaptan',
            sec: '12.3 · Farmacocinética',
            cita: 'About 40% of radioactivity was recovered in urine (<1% as unchanged tolvaptan) and 59% in feces (19% as unchanged tolvaptan)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '2-4',
      unidad: 'h',
      analito: 'tolvaptán',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-tolvaptan',
        sec: '12.3 · Farmacocinética',
        cita: 'peak concentrations of tolvaptan are observed between 2 and 4 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta con 30 mg',
      valor: '56 (42-80)',
      unidad: '%',
      analito: 'tolvaptán',
      condiciones: 'dosis oral de 30 mg',
      ref: {
        f: 'dailymed-tolvaptan',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of tolvaptan following an oral dose of 30 mg is 56% (range 42 to 80%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Efecto de una comida rica en grasa sobre la concentración máxima',
      valor: '2',
      unidad: 'veces',
      analito: 'tolvaptán',
      condiciones: '90 mg con comida rica en grasa',
      ref: {
        f: 'dailymed-tolvaptan',
        sec: '12.3 · Farmacocinética',
        cita: 'doubles peak concentrations but has no effect on the AUC of tolvaptan',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión global a proteínas',
      valor: '> 98',
      unidad: '%',
      analito: 'tolvaptán',
      ref: { f: 'dailymed-tolvaptan', sec: '12.3 · Farmacocinética', cita: 'the overall protein binding is >98%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '3 (aprox.)',
      unidad: 'L/kg',
      analito: 'tolvaptán',
      ref: { f: 'dailymed-tolvaptan', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution of tolvaptan is about 3 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida tras infusión intravenosa',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'tolvaptán',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-tolvaptan',
        sec: '12.3 · Farmacocinética',
        cita: 'Following intravenous infusion, tolvaptan half-life is approximately 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'tolvaptán y metabolitos',
      condiciones: 'dosis marcada',
      ref: { f: 'dailymed-tolvaptan', sec: '12.3 · Farmacocinética', cita: 'About 40% of radioactivity was recovered in urine', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '59',
      unidad: '%',
      analito: 'tolvaptán y metabolitos',
      condiciones: 'dosis marcada',
      ref: { f: 'dailymed-tolvaptan', sec: '12.3 · Farmacocinética', cita: 'and 59% in feces (19% as unchanged tolvaptan)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tolvaptan', '5526617c-c7b9-4556-886d-729bbabbc566', 'SAMSCA (TOLVAPTAN) TABLET', 'SAMSCA', '23', '2026-06-01', '2026-11-12'),
    rengPubchem(216237, 'tolvaptan', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
