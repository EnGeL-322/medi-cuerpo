import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'alosetron',
    nombre: 'Alosetrón',
    clase: 'Antagonista del receptor 5-HT3',
    sinonimos: [ 'alosetron', 'Lotronex' ],
    formula: 'C17H18N4O',
    masaMolar: 294.35,
    smiles: 'CC1=C(N=CN1)CN2CCC3=C(C2=O)C4=CC=CC=C4N3C',
    inchikey: 'JSWZEAMFRNKZNL-UHFFFAOYSA-N',
    cid: 2099,
    iupac: '5-methyl-2-[(5-methyl-1H-imidazol-4-yl)methyl]-3,4-dihydropyrido[4,3-b]indol-1-one',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'alosetron-oral',
      producto: 'LOTRONEX · comprimido',
      titular: 'SEBELA PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg o 1 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de alosetrón',
        ref: { f: 'dailymed-alosetron', sec: '11 · Descripción', cita: 'alosetron hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'triacetin', 'lactose', 'magnesium stearate', 'cellulose, microcrystalline', 'starch, corn', 'hypromelloses', 'titanium dioxide' ],
      usos: {
        t: 'Solo en mujeres con síndrome del intestino irritable grave con predominio de diarrea que no han respondido al tratamiento convencional.',
        ref: {
          f: 'dailymed-alosetron',
          sec: '1 · Indicaciones',
          cita: 'indicated only for women with severe diarrhea-predominant irritable bowel syndrome (IBS)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-alosetron',
      advertencias: [
        {
          titulo: 'Reacciones digestivas graves',
          texto: 'Se han descrito colitis isquémica y complicaciones graves del estreñimiento que han exigido ingreso, transfusión, cirugía y, raramente, causado la muerte.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-alosetron',
            sec: 'Advertencia destacada',
            cita: 'These events, including ischemic colitis and serious complications of constipation, have resulted in hospitalization',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Colitis isquémica',
          texto: 'Algunas personas la han sufrido sin aviso previo.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-alosetron',
            sec: '5 · Advertencias y precauciones',
            cita: 'Some patients have experienced ischemic colitis without warning',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 2 % y > placebo): estreñimiento, molestias y dolor abdominal, náuseas y molestias digestivas.',
          '34084-4',
          'Most common adverse reactions (incidence >2% and >placebo) in clinical studies were constipation, abdominal discomfort and pain, nausea, and gastrointestinal discomfort and pain'
        ],
        [
          'El estreñimiento es frecuente y depende de la dosis.',
          '34084-4',
          'Constipation is a frequent and dose-related side effect of treatment with LOTRONEX'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.5 mg o 1 mg por comprimido, según la etiqueta; el activo va como clorhidrato de alosetrón. Los excipientes no son el principio activo.',
    usos: 'Solo en mujeres con síndrome del intestino irritable grave con predominio de diarrea que no han respondido al tratamiento convencional.',
    actua: 'Antagoniza los receptores 5-HT3 de las neuronas del tubo digestivo, que intervienen en el dolor visceral, el tránsito del colon y las secreciones.',
    recorrido: 'Se absorbe con rapidez; la biodisponibilidad absoluta media es del 50-60 %. La comida disminuye la absorción un 25 % aproximadamente. La mayor parte de la dosis marcada sale por la orina (74 ± 5 %); solo el 13 % de la dosis sale por el riñón como alosetrón sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 0,5 mg o 1 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 0,5 mg o 1 mg.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '3 · Formas y concentraciones',
            cita: 'LOTRONEX Tablets, 0.5 mg (0.562 mg alosetron HCl equivalent to 0.5 mg alosetron), are white, oval, film-coated tablets',
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
      ocurre: 'Se absorbe con rapidez; la biodisponibilidad absoluta media es del 50-60 %. La comida disminuye la absorción un 25 % aproximadamente.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez; la biodisponibilidad absoluta media es del 50-60 %. La comida disminuye la absorción un 25 % aproximadamente.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'Alosetron was rapidly absorbed after oral administration with a mean absolute bioavailability of approximately 50% to 60%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida retrasa unos 15 minutos el máximo.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'Alosetron absorption is decreased by approximately 25% by co-administration with food',
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
      ocurre: 'La unión a proteínas del plasma es del 82 %; el volumen de distribución ronda 65-95 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es del 82 %; el volumen de distribución ronda 65-95 L.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding is 82% over a concentration range of 20 to 4,000 ng/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor 5-HT3 de las neuronas entéricas',
        efecto: 'Antagoniza los receptores 5-HT3 de las neuronas del tubo digestivo, que intervienen en el dolor visceral, el tránsito del colon y las secreciones.',
        lugar: [ 'intestino-grueso', 'nervios' ],
        datos: [
          {
            t: 'Antagoniza los receptores 5-HT3 de las neuronas del tubo digestivo, que intervienen en el dolor visceral, el tránsito del colon y las secreciones.',
            ref: {
              f: 'dailymed-alosetron',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Alosetron is a potent and selective 5-HT 3 receptor antagonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Hay varios metabolitos circulantes (glucurónido y sulfatos hidroxilados, derivados del imidazol), ninguno por encima del 15 % del alosetrón sin cambios.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Hay varios metabolitos circulantes (glucurónido y sulfatos hidroxilados, derivados del imidazol), ninguno por encima del 15 % del alosetrón sin cambios.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'The circulating metabolites were identified as 6-hydroxy glucuronide, 6-hydroxy sulphate, 7-hydroxy sulphate, hydroxymethyl imidazole',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidroximetilimidazol',
          actividad: 'activo',
          nota: 'Unas 10 veces menos potente que el alosetrón.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'only the hydroxymethyl imidazole has weak pharmacological activity, around 10-fold less potent than alosetron',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Otros metabolitos circulantes',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolites are unlikely to contribute to the biological activity of alosetron',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La mayor parte de la dosis marcada sale por la orina (74 ± 5 %); solo el 13 % de la dosis sale por el riñón como alosetrón sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayor parte de la dosis marcada sale por la orina (74 ± 5 %); solo el 13 % de la dosis sale por el riñón como alosetrón sin cambios.',
          ref: {
            f: 'dailymed-alosetron',
            sec: '12.3 · Farmacocinética',
            cita: 'The majority of the radiolabeled dose is excreted in the urine',
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
      valor: '1',
      unidad: 'h',
      analito: 'alosetrón',
      poblacion: 'hombres jóvenes',
      condiciones: '1 mg por boca',
      ref: {
        f: 'dailymed-alosetron',
        sec: '12.3 · Farmacocinética',
        cita: 'a peak plasma concentration of approximately 5 ng/mL occurred at 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima (hombres jóvenes)',
      valor: '5 (aprox.)',
      unidad: 'ng/mL',
      analito: 'alosetrón',
      poblacion: 'hombres jóvenes',
      condiciones: '1 mg por boca',
      ref: {
        f: 'dailymed-alosetron',
        sec: '12.3 · Farmacocinética',
        cita: 'a peak plasma concentration of approximately 5 ng/mL occurred at 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media (mujeres jóvenes)',
      valor: '9 (aprox.)',
      unidad: 'ng/mL',
      analito: 'alosetrón',
      poblacion: 'mujeres jóvenes',
      condiciones: '1 mg por boca',
      ref: {
        f: 'dailymed-alosetron',
        sec: '12.3 · Farmacocinética',
        cita: 'In young women, the mean peak plasma concentration was approximately 9 ng/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '50-60',
      unidad: '%',
      analito: 'alosetrón',
      ref: { f: 'dailymed-alosetron', sec: '12.3 · Farmacocinética', cita: 'mean absolute bioavailability of approximately 50% to 60%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '82',
      unidad: '%',
      analito: 'alosetrón',
      ref: { f: 'dailymed-alosetron', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is 82%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '65-95 (aprox.)',
      unidad: 'L',
      analito: 'alosetrón',
      ref: { f: 'dailymed-alosetron', sec: '12.3 · Farmacocinética', cita: 'volume of distribution of approximately 65 to 95 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal de eliminación',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'alosetrón',
      ref: {
        f: 'dailymed-alosetron',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of alosetron is approximately 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad en la orina',
      valor: '74 ± 5',
      unidad: '% de la dosis',
      analito: 'alosetrón y metabolitos',
      condiciones: 'dosis marcada con 14C',
      ref: { f: 'dailymed-alosetron', sec: '12.3 · Farmacocinética', cita: 'excreted in the urine (74 ± 5%)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-alosetron', '35cbb9d5-639b-207a-e054-00144ff88e88', 'LOTRONEX (ALOSETRON HYDROCHLORIDE) TABLET', 'LOTRONEX', '8', '2026-07-02', '2026-11-12'),
    rengPubchem(2099, 'alosetron', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
