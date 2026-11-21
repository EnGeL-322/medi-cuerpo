import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ramelteon',
    nombre: 'Ramelteón',
    clase: 'Agonista de los receptores de melatonina',
    sinonimos: [ 'ramelteon', 'Rozerem' ],
    formula: 'C16H21NO2',
    masaMolar: 259.34,
    smiles: 'CCC(=O)NCC[C@@H]1CCC2=C1C3=C(C=C2)OCC3',
    inchikey: 'YLXDSYKOBKBWJQ-LBPRGKRZSA-N',
    cid: 208902,
    iupac: 'N-[2-[(8S)-2,6,7,8-tetrahydro-1H-cyclopenta[e][1]benzofuran-8-yl]ethyl]propanamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'ramelteon-oral',
      producto: 'Rozerem · comprimido recubierto con película',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '8 mg por comprimido, según la etiqueta',
      excipientes: [
        'Lactosa monohidrato',
        'almidón',
        'hidroxipropilcelulosa',
        'estearato de magnesio',
        'hipromelosa',
        'copovidona',
        'dióxido de titanio',
        'óxido férrico amarillo',
        'polietilenglicol 8000',
        'tinta con goma laca y óxido de hierro negro sintético'
      ],
      usos: {
        t: 'Insomnio con dificultad para conciliar el sueño.',
        ref: {
          f: 'dailymed-ramelteon',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of insomnia characterized by difficulty with sleep onset',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ramelteon',
      advertencias: [
        {
          titulo: 'Reacciones anafilácticas',
          texto: 'Rara vez se ha descrito angioedema de la lengua, la glotis o la laringe tras la primera dosis o siguientes.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-ramelteon',
            sec: '5 · Advertencias y precauciones',
            cita: 'Rare cases of angioedema involving the tongue, glottis or larynx have been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 3 % y más que con placebo): somnolencia, mareo, cansancio, náuseas y empeoramiento del insomnio.',
          '34084-4',
          'are: somnolence, dizziness, fatigue, nausea, and exacerbated insomnia'
        ],
        [ 'Un 6 % de 5373 personas dejó el tratamiento por un efecto adverso.', '34084-4', 'Six percent of the 5373 individual subjects' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 8 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Insomnio con dificultad para conciliar el sueño.',
    actua: 'Activa los receptores de melatonina MT1 y MT2, implicados en el ritmo circadiano que regula el ciclo sueño-vigilia.',
    recorrido: 'Se absorbe rápido (pico a una mediana de 0,75 horas en ayunas) y al menos en un 84 %, pero un primer paso muy intenso deja una biodisponibilidad oral absoluta de solo el 1,8 %. El 84 % de la radiactividad salió por la orina y el 4 % por las heces; menos del 0,1 % como ramelteón sin cambios. La eliminación terminó a las 96 horas.'
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
            f: 'dailymed-ramelteon',
            sec: '3 · Formas y concentraciones',
            cita: 'ROZEREM 8 mg tablets are round, pale orange-yellow, film-coated',
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
      ocurre: 'Se absorbe rápido (pico a una mediana de 0,75 horas en ayunas) y al menos en un 84 %, pero un primer paso muy intenso deja una biodisponibilidad oral absoluta de solo el 1,8 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido (pico a una mediana de 0,75 horas en ayunas) y al menos en un 84 %, pero un primer paso muy intenso deja una biodisponibilidad oral absoluta de solo el 1,8 %.',
          ref: {
            f: 'dailymed-ramelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'Although the total absorption of ramelteon is at least 84%, the absolute oral bioavailability is only 1.8% due to extensive first-pass metabolism',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico a una mediana de 0,75 horas en ayunas.',
          ref: {
            f: 'dailymed-ramelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'with median peak concentrations occurring at approximately 0.75 hour',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 82 % se une a proteínas del suero, sobre todo a la albúmina; tras la vía intravenosa, su volumen de distribución es de 73,6 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 82 % se une a proteínas del suero, sobre todo a la albúmina; tras la vía intravenosa, su volumen de distribución es de 73,6 L.',
          ref: {
            f: 'dailymed-ramelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro protein binding of ramelteon is approximately 82% in human serum',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de melatonina MT1 y MT2',
        efecto: 'Activa los receptores de melatonina MT1 y MT2, implicados en el ritmo circadiano que regula el ciclo sueño-vigilia.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Activa los receptores de melatonina MT1 y MT2, implicados en el ritmo circadiano que regula el ciclo sueño-vigilia.',
            ref: {
              f: 'dailymed-ramelteon',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ramelteon is a melatonin receptor agonist with both high affinity for melatonin MT 1 and MT 2 receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se oxida a derivados hidroxilo y carbonilo (sobre todo CYP1A2) y después se conjuga con ácido glucurónico; su principal metabolito en el suero es el M-II.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se oxida a derivados hidroxilo y carbonilo (sobre todo CYP1A2) y después se conjuga con ácido glucurónico; su principal metabolito en el suero es el M-II.',
          ref: {
            f: 'dailymed-ramelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP1A2 is the major isozyme involved in the hepatic metabolism of ramelteon',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M-II',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-ramelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'The rank order of the principal metabolites by prevalence in human serum is M-II, M-IV, M-I, and M-III',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 84 % de la radiactividad salió por la orina y el 4 % por las heces; menos del 0,1 % como ramelteón sin cambios. La eliminación terminó a las 96 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 84 % de la radiactividad salió por la orina y el 4 % por las heces; menos del 0,1 % como ramelteón sin cambios. La eliminación terminó a las 96 horas.',
          ref: {
            f: 'dailymed-ramelteon',
            sec: '12.3 · Farmacocinética',
            cita: '84% of total radioactivity was excreted in urine and approximately 4% in feces',
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
      valor: '0,75 (0,5-1,5)',
      unidad: 'h',
      analito: 'ramelteón',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-ramelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'with median peak concentrations occurring at approximately 0.75 hour (range, 0.5 to 1.5 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '1,8',
      unidad: '%',
      analito: 'ramelteón',
      ref: { f: 'dailymed-ramelteon', sec: '12.3 · Farmacocinética', cita: 'the absolute oral bioavailability is only 1.8%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '82 (aprox.)',
      unidad: '%',
      analito: 'ramelteón',
      ref: {
        f: 'dailymed-ramelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro protein binding of ramelteon is approximately 82% in human serum',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '73,6',
      unidad: 'L',
      analito: 'ramelteón',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-ramelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'Ramelteon has a mean volume of distribution after intravenous administration of 73.6 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada en la orina',
      valor: '84',
      unidad: '% de la dosis',
      analito: 'ramelteón y metabolitos',
      condiciones: 'dosis marcada',
      ref: { f: 'dailymed-ramelteon', sec: '12.3 · Farmacocinética', cita: '84% of total radioactivity was excreted in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ramelteon', '9de82310-70e8-47b9-b1fc-6c6848b99455', 'ROZEREM (RAMELTEON) TABLET, FILM COATED', 'Rozerem', '20', '2026-04-27', '2026-11-12'),
    rengPubchem(208902, 'ramelteon', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
