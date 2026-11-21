import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'maribavir',
    nombre: 'Maribavir',
    clase: 'Inhibidor de la cinasa pUL97 del citomegalovirus (CMV)',
    sinonimos: [ 'maribavir', 'Livtencity' ],
    formula: 'C15H19Cl2N3O4',
    masaMolar: 376.2,
    smiles: 'CC(C)NC1=NC2=CC(=C(C=C2N1[C@@H]3[C@H]([C@H]([C@@H](O3)CO)O)O)Cl)Cl',
    inchikey: 'KJFBVJALEQWJBS-XUXIUFHCSA-N',
    cid: 471161,
    iupac: '(2S,3S,4R,5S)-2-[5,6-dichloro-2-(propan-2-ylamino)benzimidazol-1-yl]-5-(hydroxymethyl)oxolane-3,4-diol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'maribavir-oral',
      producto: 'Livtencity · comprimido recubierto',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'sodium starch glycolate type a',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'fd&c blue no. 1'
      ],
      usos: {
        t: 'Tratamiento de la infección o enfermedad por CMV postrasplante refractaria a ganciclovir, valganciclovir, cidofovir o foscarnet, en adultos y en mayores de 12 años de al menos 35 kg.',
        ref: {
          f: 'dailymed-maribavir',
          sec: '1 · Indicaciones',
          cita: 'LIVTENCITY ® is indicated for the treatment of adults and pediatric patients (12 years of age and older and weighing at least 35 kg) with post-transplant cytomegalovirus (CMV) infection/disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-maribavir',
      advertencias: [
        {
          titulo: 'Antagonismo con ganciclovir y valganciclovir',
          texto: 'Puede antagonizar la actividad antivírica del ganciclovir y del valganciclovir; no se recomienda combinarlos.',
          organos: [],
          ref: {
            f: 'dailymed-maribavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'LIVTENCITY may antagonize the antiviral activity of ganciclovir and valganciclovir',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fracaso virológico',
          texto: 'Puede producirse durante y después del tratamiento; vigilar el ADN del CMV y estudiar resistencias si no hay respuesta.',
          organos: [],
          ref: {
            f: 'dailymed-maribavir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Virologic failure can occur during and after treatment with LIVTENCITY',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 %) fueron alteración del gusto, náuseas, diarrea, vómitos y fatiga.',
          '34084-4',
          'most common adverse events (all grades, >10%) in subjects treated with LIVTENCITY were taste disturbance, nausea, diarrhea, vomiting, and fatigue'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials a'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la infección o enfermedad por CMV postrasplante refractaria a ganciclovir, valganciclovir, cidofovir o foscarnet, en adultos y en mayores de 12 años de al menos 35 kg.',
    actua: 'Inhibe de forma competitiva la actividad proteína cinasa de la enzima pUL97 del CMV humano, lo que impide la fosforilación de proteínas.',
    recorrido: 'La mediana del tmax es de 1,0 a 3,0 horas; con una comida grasa el AUC y la Cmax bajan algo (cocientes 0,878 y 0,716). En el balance de masas con solución oral marcada, el 61 % se excretó en la orina (menos del 2 % sin cambios) y el 14 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-maribavir', sec: '3 · Formas y concentraciones', cita: 'Tablet: 200 mg, blue, oval shaped convex tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tmax es de 1,0 a 3,0 horas; con una comida grasa el AUC y la Cmax bajan algo (cocientes 0,878 y 0,716).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 1,0 a 3,0 horas; con una comida grasa el AUC y la Cmax bajan algo (cocientes 0,878 y 0,716).',
          ref: { f: 'dailymed-maribavir', sec: '12.3 · Farmacocinética', cita: 'T max (h), median 1.0 to 3.0', codigo: '43682-4' }
        },
        {
          t: 'Con una comida rica en grasas los cocientes de AUC y Cmax frente al ayuno fueron 0,878 y 0,716.',
          ref: {
            f: 'dailymed-maribavir',
            sec: '12.3 · Farmacocinética',
            cita: 'When taken orally with a high fat, high caloric meal vs fasted, the AUC 0‑∞ and C max (geometric mean ratio [90% CI] of maribavir are 0.878 [0.843, 0.915] and 0.716 [0.671, 0.764], respectively',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 98,0 % a las proteínas del plasma humano; el volumen de distribución aparente en estado estacionario es de 24,9 L y el cociente sangre/plasma de 1,37.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 98,0 % a las proteínas del plasma humano; el volumen de distribución aparente en estado estacionario es de 24,9 L y el cociente sangre/plasma de 1,37.',
          ref: {
            f: 'dailymed-maribavir',
            sec: '12.3 · Farmacocinética',
            cita: '% bound to human plasma proteins 98.0 across the concentration range of 0.05-200 µg/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Proteína cinasa pUL97 del CMV',
        efecto: 'Inhibe de forma competitiva la actividad proteína cinasa de la enzima pUL97 del CMV humano, lo que impide la fosforilación de proteínas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma competitiva la actividad proteína cinasa de la enzima pUL97 del CMV humano, lo que impide la fosforilación de proteínas.',
            ref: {
              f: 'dailymed-maribavir',
              sec: '12.4 · Microbiología',
              cita: 'The antiviral activity of maribavir is mediated by competitive inhibition of the protein kinase activity of human CMV enzyme pUL97, which results in inhibition of the phosphorylation of proteins',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía principal de eliminación es el metabolismo hepático, sobre todo por la CYP3A4 (menor la CYP1A2); su metabolito circulante principal VP 44469 es inactivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía principal de eliminación es el metabolismo hepático, sobre todo por la CYP3A4 (menor la CYP1A2); su metabolito circulante principal VP 44469 es inactivo.',
          ref: { f: 'dailymed-maribavir', sec: '12.3 · Farmacocinética', cita: 'Major route of elimination Hepatic metabolism', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'VP 44469 (N-desalquilado)',
          actividad: 'inactivo',
          nota: 'Metabolito circulante principal inactivo.',
          ref: {
            f: 'dailymed-maribavir',
            sec: '12.3 · Farmacocinética',
            cita: 'maribavir is biotransformed into a major circulating inactive metabolite: VP 44469 (N-dealkylated metabolite)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En el balance de masas con solución oral marcada, el 61 % se excretó en la orina (menos del 2 % sin cambios) y el 14 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En el balance de masas con solución oral marcada, el 61 % se excretó en la orina (menos del 2 % sin cambios) y el 14 % en las heces.',
          ref: {
            f: 'dailymed-maribavir',
            sec: '12.3 · Farmacocinética',
            cita: '% of dose excreted as total 14 C (unchanged drug) in feces 14 (5.7)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media en pacientes trasplantados es de 4,32 horas.',
          ref: {
            f: 'dailymed-maribavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Half-life (t 1/2 ) in transplant patients (h), mean 4.32',
            codigo: '43682-4'
          },
          poblacion: 'pacientes trasplantados'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1,0-3,0',
      unidad: 'h',
      analito: 'maribavir',
      ref: { f: 'dailymed-maribavir', sec: '12.3 · Farmacocinética', cita: 'T max (h), median 1.0 to 3.0', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '24,9',
      unidad: 'L',
      analito: 'maribavir',
      ref: {
        f: 'dailymed-maribavir',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean apparent steady-state volume of distribution (V ss , L) 24.9',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98,0',
      unidad: '%',
      analito: 'maribavir',
      ref: { f: 'dailymed-maribavir', sec: '12.3 · Farmacocinética', cita: '% bound to human plasma proteins 98.0', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media en trasplantados',
      valor: '4,32',
      unidad: 'h',
      analito: 'maribavir',
      poblacion: 'pacientes trasplantados',
      ref: { f: 'dailymed-maribavir', sec: '12.3 · Farmacocinética', cita: 'Half-life (t 1/2 ) in transplant patients (h), mean 4.32', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral medio en trasplantados',
      valor: '2,67',
      unidad: 'L/h',
      analito: 'maribavir',
      poblacion: 'pacientes trasplantados',
      ref: {
        f: 'dailymed-maribavir',
        sec: '12.3 · Farmacocinética',
        cita: 'Oral clearance (CL/F) in transplant patients (L/h), mean 2.67',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '14',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'solución oral marcada de 400 mg',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-maribavir',
        sec: '12.3 · Farmacocinética',
        cita: '% of dose excreted as total 14 C (unchanged drug) in feces 14 (5.7)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-maribavir', 'c94fc2c5-e840-4f18-b7d8-d5eacb26d3a0', 'LIVTENCITY (MARIBAVIR) TABLET, COATED', 'Livtencity', '14', '2026-02-06', '2026-11-19'),
    rengPubchem(471161, 'maribavir', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
