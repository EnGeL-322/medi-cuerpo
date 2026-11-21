import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lomitapida',
    nombre: 'Lomitapida',
    clase: 'Inhibidor de la proteína microsomal de transferencia de triglicéridos (MTP)',
    sinonimos: [ 'lomitapide', 'Juxtapid' ],
    formula: 'C39H37F6N3O2',
    masaMolar: 693.7,
    smiles: 'C1CN(CCC1NC(=O)C2=CC=CC=C2C3=CC=C(C=C3)C(F)(F)F)CCCCC4(C5=CC=CC=C5C6=CC=CC=C64)C(=O)NCC(F)(F)F',
    inchikey: 'MBBCVAKAJPKAKM-UHFFFAOYSA-N',
    cid: 9853053,
    iupac: 'N-(2,2,2-trifluoroethyl)-9-[4-[4-[[2-[4-(trifluoromethyl)phenyl]benzoyl]amino]piperidin-1-yl]butyl]fluorene-9-carboxamide',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'lomitapida-oral',
      producto: 'Juxtapid · cápsula',
      titular: 'CHIESI USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '2 mg, 5 mg, 10 mg, 20 mg o 30 mg por cápsula, según la etiqueta',
      sal: { nombre: 'Mesilato de lomitapida', ref: { f: 'dailymed-lomitapida', sec: '11 · Descripción', cita: 'lomitapide mesylate', codigo: '34089-3' } },
      excipientes: [
        'Almidón pregelatinizado',
        'Glicolato sódico de almidón',
        'Celulosa microcristalina',
        'Lactosa monohidrato',
        'Dióxido de silicio',
        'Estearato de magnesio',
        'Cubierta de la cápsula: gelatina, dióxido de titanio y óxidos de hierro según la dosis',
        'Tinta de impresión: goma laca, óxido de hierro negro y propilenglicol'
      ],
      usos: {
        t: 'Complemento de una dieta baja en grasas, el ejercicio y otros tratamientos hipolipemiantes para reducir el colesterol LDL en la hipercolesterolemia familiar homocigota, en adultos y niños desde 2 años.',
        ref: {
          f: 'dailymed-lomitapida',
          sec: '1 · Indicaciones',
          cita: 'to reduce LDL-C in adults and pediatric patients aged 2 years and older with homozygous familial hypercholesterolemia (HoFH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lomitapida',
      advertencias: [
        {
          titulo: 'Riesgo de hepatotoxicidad',
          texto: 'Puede elevar las transaminasas; en el ensayo de adultos, el 34 % tuvo al menos una elevación de ALT o AST de 3 veces o más el límite normal.',
          organos: [],
          ref: { f: 'dailymed-lomitapida', sec: 'Advertencia destacada', cita: 'JUXTAPID can cause elevations in transaminases', codigo: '34066-1' }
        },
        {
          titulo: 'Esteatosis y esteatohepatitis',
          texto: 'Puede causar esteatosis hepática e inducir esteatohepatitis, que puede progresar a cirrosis en varios años.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-lomitapida',
            sec: '5 · Advertencias y precauciones',
            cita: 'JUXTAPID may induce steatohepatitis, which can progress to cirrhosis over several years',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede dañar al feto; usar anticoncepción eficaz y suspender si hay embarazo.',
          organos: [],
          ref: { f: 'dailymed-lomitapida', sec: '5 · Advertencias y precauciones', cita: 'Embryo-Fetal Toxicity: May cause fetal harm', codigo: '43685-7' }
        },
        {
          titulo: 'Reacciones adversas digestivas',
          texto: 'Aparecen en el 93 % de los adultos y el 72 % de los niños y pueden afectar a la absorción de otros medicamentos orales.',
          organos: [],
          ref: {
            f: 'dailymed-lomitapida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Gastrointestinal adverse reactions occur in 93% of adult and 72% of pediatric patients',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos, las más frecuentes (10 % o más): diarrea, náuseas, dispepsia, vómitos y dolor abdominal.',
          '34084-4',
          'Most common adverse reactions in adult patients (incidence ≥10%) are diarrhea, nausea, dyspepsia, vomiting, and abdominal pain'
        ],
        [
          'De 5 a 17 años, las más frecuentes (15 % o más): dolor abdominal, aumento de ALT y AST, diarrea y vómitos.',
          '34084-4',
          'Most common adverse reactions in pediatric patients aged 5 to 17 years old (incidence ≥15%) are abdominal pain, alanine aminotransferase increased, aspartate aminotransferase increased, diarrhea, and vomiting'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 2 mg, 5 mg, 10 mg, 20 mg o 30 mg por cápsula, según la etiqueta; el activo va como mesilato de lomitapida. Los excipientes no son el principio activo.',
    usos: 'Complemento de una dieta baja en grasas, el ejercicio y otros tratamientos hipolipemiantes para reducir el colesterol LDL en la hipercolesterolemia familiar homocigota, en adultos y niños desde 2 años.',
    actua: 'Se une directamente a la proteína microsomal de transferencia de triglicéridos y la inhibe, lo que impide el ensamblaje de lipoproteínas con apo B en enterocitos y hepatocitos y reduce el colesterol LDL del plasma.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 7 % y, tras una dosis única de 60 mg, el tmax es de unas 6 horas. En un estudio de balance de masas, de media el 59,5 % de la dosis se excretó en la orina y el 33,4 % en las heces; en la orina no se detectó lomitapida (el M1 es el metabolito urinario principal).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-lomitapida', sec: '3 · Formas y concentraciones', cita: 'Capsules: 2 mg: Grey/grey hard gelatin capsule', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 7 % y, tras una dosis única de 60 mg, el tmax es de unas 6 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 7 % y, tras una dosis única de 60 mg, el tmax es de unas 6 horas.',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of lomitapide is approximately 7%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis única de 60 mg, el tmax es de unas 6 horas en voluntarios sanos.',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'Upon oral administration of a single 60-mg dose of JUXTAPID, the lomitapide t max is around 6 hours in healthy volunteers',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'dosis única de 60 mg'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución medio en estado estacionario es de 985 a 1292 litros y se une en un 99,8 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución medio en estado estacionario es de 985 a 1292 litros y se une en un 99,8 % a las proteínas del plasma.',
          ref: { f: 'dailymed-lomitapida', sec: '12.3 · Farmacocinética', cita: 'Lomitapide is 99.8% plasma-protein bound', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución medio en estado estacionario de 985 a 1292 litros.',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean lomitapide volume of distribution at steady state is 985 to 1292 liters',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Proteína microsomal de transferencia de triglicéridos (MTP)',
        efecto: 'Se une directamente a la proteína microsomal de transferencia de triglicéridos y la inhibe, lo que impide el ensamblaje de lipoproteínas con apo B en enterocitos y hepatocitos y reduce el colesterol LDL del plasma.',
        lugar: [ 'higado', 'sangre' ],
        datos: [
          {
            t: 'Se une directamente a la proteína microsomal de transferencia de triglicéridos y la inhibe, lo que impide el ensamblaje de lipoproteínas con apo B en enterocitos y hepatocitos y reduce el colesterol LDL del plasma.',
            ref: {
              f: 'dailymed-lomitapida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'thereby preventing the assembly of apo B-containing lipoproteins in enterocytes and hepatocytes',
              codigo: '43679-0'
            }
          },
          {
            t: 'La inhibición de la síntesis de VLDL reduce el colesterol LDL del plasma.',
            ref: {
              f: 'dailymed-lomitapida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The inhibition of the synthesis of VLDL leads to reduced levels of plasma LDL-C',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho en el hígado (oxidación, N-desalquilación oxidativa, glucuronidación y apertura del anillo de piperidina); la CYP3A4 forma sus metabolitos principales M1 y M3.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho en el hígado (oxidación, N-desalquilación oxidativa, glucuronidación y apertura del anillo de piperidina); la CYP3A4 forma sus metabolitos principales M1 y M3.',
          ref: { f: 'dailymed-lomitapida', sec: '12.3 · Farmacocinética', cita: 'Lomitapide is metabolized extensively by the liver', codigo: '43682-4' }
        },
        {
          t: 'La CYP3A4 lo metaboliza a sus metabolitos principales en el plasma, M1 y M3.',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 (CYP) 3A4 metabolizes lomitapide to its major metabolites, M1 and M3, as detected in plasma',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1 y M3',
          actividad: 'inactivo',
          nota: 'Metabolitos principales; in vitro no inhiben la MTP.',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'M1 and M3 do not inhibit activity of microsomal triglyceride transfer protein in vitro',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En un estudio de balance de masas, de media el 59,5 % de la dosis se excretó en la orina y el 33,4 % en las heces; en la orina no se detectó lomitapida (el M1 es el metabolito urinario principal).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En un estudio de balance de masas, de media el 59,5 % de la dosis se excretó en la orina y el 33,4 % en las heces; en la orina no se detectó lomitapida (el M1 es el metabolito urinario principal).',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'a mean of 59.5% and 33.4% of the dose was excreted in the urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La lomitapida no se detectó en la orina; el M1 es el metabolito urinario principal y la lomitapida el componente principal de las heces.',
          ref: {
            f: 'dailymed-lomitapida',
            sec: '12.3 · Farmacocinética',
            cita: 'Lomitapide was not detectable in urine samples. M1 is the major urinary metabolite. Lomitapide is the major component in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 39,7 horas.',
          ref: { f: 'dailymed-lomitapida', sec: '12.3 · Farmacocinética', cita: 'The mean lomitapide terminal half-life is 39.7 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '7 (aprox.)',
      unidad: '%',
      analito: 'lomitapida',
      ref: {
        f: 'dailymed-lomitapida',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of lomitapide is approximately 7%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'lomitapida',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de 60 mg',
      ref: {
        f: 'dailymed-lomitapida',
        sec: '12.3 · Farmacocinética',
        cita: 'the lomitapide t max is around 6 hours in healthy volunteers',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '985-1292',
      unidad: 'L',
      analito: 'lomitapida',
      ref: {
        f: 'dailymed-lomitapida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean lomitapide volume of distribution at steady state is 985 to 1292 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,8',
      unidad: '%',
      analito: 'lomitapida',
      ref: { f: 'dailymed-lomitapida', sec: '12.3 · Farmacocinética', cita: 'Lomitapide is 99.8% plasma-protein bound', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '39,7',
      unidad: 'h',
      analito: 'lomitapida',
      ref: { f: 'dailymed-lomitapida', sec: '12.3 · Farmacocinética', cita: 'The mean lomitapide terminal half-life is 39.7 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '59,5',
      unidad: '% de la dosis',
      analito: 'lomitapida y metabolitos',
      condiciones: 'estudio de balance de masas',
      ref: {
        f: 'dailymed-lomitapida',
        sec: '12.3 · Farmacocinética',
        cita: 'a mean of 59.5% and 33.4% of the dose was excreted in the urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lomitapida', '61a0be9d-ee58-43e0-b5cb-141011835081', 'JUXTAPID (LOMITAPIDE MESYLATE) CAPSULE', 'Juxtapid', '25', '2026-04-02', '2026-11-19'),
    rengPubchem(9853053, 'lomitapide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
