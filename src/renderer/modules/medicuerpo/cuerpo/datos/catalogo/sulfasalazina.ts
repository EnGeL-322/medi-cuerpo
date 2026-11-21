import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sulfasalazina',
    nombre: 'Sulfasalazina',
    clase: 'Antiinflamatorio intestinal (aminosalicilato unido a sulfapiridina)',
    sinonimos: [ 'sulfasalazine', 'Azulfidine' ],
    formula: 'C18H14N4O5S',
    masaMolar: 398.4,
    smiles: 'C1=CC=NC(=C1)NS(=O)(=O)C2=CC=C(C=C2)N=NC3=CC(=C(C=C3)O)C(=O)O',
    inchikey: 'NCEXYHBECQHGNR-UHFFFAOYSA-N',
    cid: 5339,
    iupac: '2-hydroxy-5-[[4-(pyridin-2-ylsulfamoyl)phenyl]diazenyl]benzoic acid',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'sulfasalazina-oral',
      producto: 'Azulfidine · comprimido',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '500 mg por comprimido, según la etiqueta',
      excipientes: [ 'magnesium stearate', 'povidone, unspecified', 'silicon dioxide', 'starch, corn' ],
      usos: {
        t: 'Colitis ulcerosa leve o moderada, tratamiento adyuvante en la grave y prolongación de la remisión entre brotes.',
        ref: {
          f: 'dailymed-sulfasalazina',
          sec: '1 · Indicaciones',
          cita: 'in the treatment of mild to moderate ulcerative colitis, and as adjunctive therapy in severe ulcerative colitis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sulfasalazina',
      advertencias: [
        {
          titulo: 'Toxicidad hepática, renal y hematológica',
          texto: 'Se han descrito muertes por hipersensibilidad, agranulocitosis, anemia aplásica y daño renal y hepático.',
          organos: [ 'higado', 'rinones', 'sangre' ],
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: 'Advertencias',
            cita: 'Deaths associated with the administration of sulfasalazine have been reported from hypersensitivity reactions, agranulocytosis, aplastic anemia',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: anorexia, dolor de cabeza, náuseas, vómitos, molestias gástricas y oligospermia aparentemente reversible, en un tercio de los pacientes.',
          '34084-4',
          'most common adverse reactions associated with sulfasalazine are anorexia, headache, nausea, vomiting, gastric distress, and apparently reversible oligospermia'
        ],
        [
          'Menos frecuentes: erupción, picor, urticaria, fiebre y anemia hemolítica o por cuerpos de Heinz.',
          '34084-4',
          'Less frequent adverse reactions are skin rash, pruritus, urticaria, fever, Heinz body anemia, hemolytic anemia, and cyanosis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Colitis ulcerosa leve o moderada, tratamiento adyuvante en la grave y prolongación de la remisión entre brotes.',
    actua: 'Se desconoce el mecanismo exacto; la acción terapéutica principal podría residir en el 5-ASA, que se forma en el colon y actúa sobre la pared intestinal.',
    recorrido: 'Menos del 15 % de la dosis se absorbe como sulfasalazina sin cambios; el resto llega al colon, donde las bacterias la rompen en sulfapiridina y 5-ASA. La sulfapiridina y el 5-ASA absorbidos y sus metabolitos se eliminan sobre todo por la orina; la mayor parte del 5-ASA queda en el colon y sale por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 500 mg para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 500 mg para tomar por boca.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '11 · Descripción',
            cita: 'AZULFIDINE Tablets contain sulfasalazine, 500 mg, for oral administration',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado', 'intestino-grueso' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Menos del 15 % de la dosis se absorbe como sulfasalazina sin cambios; el resto llega al colon, donde las bacterias la rompen en sulfapiridina y 5-ASA.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Menos del 15 % de la dosis se absorbe como sulfasalazina sin cambios; el resto llega al colon, donde las bacterias la rompen en sulfapiridina y 5-ASA.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'less than 15% of a dose of SSZ is absorbed as parent drug',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones máximas de sulfapiridina y de 5-ASA llegan unas 10 horas después de la dosis.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma levels of both SP and 5-ASA occur approximately 10 hours after dosing',
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
      ocurre: 'La sulfasalazina va unida en más del 99,3 % a la albúmina; la sulfapiridina, en un 70 % aproximadamente.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La sulfasalazina va unida en más del 99,3 % a la albúmina; la sulfapiridina, en un 70 % aproximadamente.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'SSZ is highly bound to albumin (>99.3%) while SP is only about 70% bound to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Pared del colon',
        efecto: 'Se desconoce el mecanismo exacto; la acción terapéutica principal podría residir en el 5-ASA, que se forma en el colon y actúa sobre la pared intestinal.',
        lugar: [ 'intestino-grueso' ],
        datos: [
          {
            t: 'Se desconoce el mecanismo exacto; la acción terapéutica principal podría residir en el 5-ASA, que se forma en el colon y actúa sobre la pared intestinal.',
            ref: {
              f: 'dailymed-sulfasalazina',
              sec: '12.2 · Farmacodinámica',
              cita: 'the major therapeutic action may reside in the 5-ASA moiety',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-grueso', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las bacterias intestinales la rompen en sulfapiridina y 5-ASA; la sulfapiridina se acetila en el hígado (la velocidad depende del fenotipo acetilador) y el 5-ASA pasa a N-acetil-5-ASA en hígado e intestino.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las bacterias intestinales la rompen en sulfapiridina y 5-ASA; la sulfapiridina se acetila en el hígado (la velocidad depende del fenotipo acetilador) y el 5-ASA pasa a N-acetil-5-ASA en hígado e intestino.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'SSZ is metabolized by intestinal bacteria to SP and 5-ASA',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Sulfapiridina (SP)',
          actividad: 'desconocida',
          nota: 'Se absorbe bien en el colon.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'SSZ is metabolized by intestinal bacteria to SP and 5-ASA',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Ácido 5-aminosalicílico (5-ASA)',
          actividad: 'desconocida',
          nota: 'Se absorbe poco; la mayor parte se elimina por las heces.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'SSZ is metabolized by intestinal bacteria to SP and 5-ASA',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Acetilsulfapiridina (AcSP)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary route of metabolism of SP is via acetylation to form AcSP',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La sulfapiridina y el 5-ASA absorbidos y sus metabolitos se eliminan sobre todo por la orina; la mayor parte del 5-ASA queda en el colon y sale por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La sulfapiridina y el 5-ASA absorbidos y sus metabolitos se eliminan sobre todo por la orina; la mayor parte del 5-ASA queda en el colon y sale por las heces.',
          ref: {
            f: 'dailymed-sulfasalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'and their metabolites are primarily eliminated in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo de sulfasalazina',
      valor: '3-12',
      unidad: 'h',
      analito: 'sulfasalazina',
      poblacion: '9 varones sanos',
      condiciones: '1 g por boca',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Maximum concentrations of SSZ occur between 3 and 12 hours post-ingestion',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media de sulfasalazina',
      valor: '6',
      unidad: 'µg/mL',
      analito: 'sulfasalazina',
      poblacion: '9 varones sanos',
      condiciones: '1 g por boca',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean peak concentration (6 µg/mL) occurring at 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo de sulfapiridina y 5-ASA',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'sulfapiridina y 5-ASA',
      poblacion: '9 varones sanos',
      condiciones: '1 g de sulfasalazina por boca',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma levels of both SP and 5-ASA occur approximately 10 hours after dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta de sulfasalazina',
      valor: '< 15',
      unidad: '%',
      analito: 'sulfasalazina',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'the absolute bioavailability of orally administered SSZ is less than 15% for parent drug',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad estimada de sulfapiridina',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'sulfapiridina',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'SP apparently is well absorbed from the colon with an estimated bioavailability of 60%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a albúmina',
      valor: '> 99,3',
      unidad: '%',
      analito: 'sulfasalazina',
      ref: { f: 'dailymed-sulfasalazina', sec: '12.3 · Farmacocinética', cita: 'SSZ is highly bound to albumin (>99.3%)', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '7,5 ± 1,6',
      unidad: 'L',
      analito: 'sulfasalazina',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'the calculated volume of distribution (Vdss) for SSZ was 7.5',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '7,6 ± 3,4',
      unidad: 'h',
      analito: 'sulfasalazina',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-sulfasalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'The observed plasma half-life for intravenous sulfasalazine is 7.6',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sulfasalazina', 'ddbe69f3-bd55-45f3-a64f-f60226c744c4', 'AZULFIDINE (SULFASALAZINE) TABLET', 'Azulfidine', '29', '2026-10-30', '2026-11-12'),
    rengPubchem(5339, 'sulfasalazine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
