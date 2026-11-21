import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rizatriptan',
    nombre: 'Rizatriptán',
    clase: 'Antimigrañoso (agonista 5-HT1B/1D, triptán)',
    sinonimos: [ 'rizatriptan', 'Maxalt' ],
    formula: 'C15H19N5',
    masaMolar: 269.34,
    smiles: 'CN(C)CCC1=CNC2=C1C=C(C=C2)CN3C=NC=N3',
    inchikey: 'ULFRLSNUDGIQQP-UHFFFAOYSA-N',
    cid: 5078,
    iupac: 'N,N-dimethyl-2-[5-(1,2,4-triazol-1-ylmethyl)-1H-indol-3-yl]ethanamine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'rizatriptan-oral',
      producto: 'MAXALT · comprimido',
      titular: 'ORGANON LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Benzoato de rizatriptán',
        ref: { f: 'dailymed-rizatriptan', sec: '11 · Descripción', cita: 'rizatriptan benzoate', codigo: '34089-3' }
      },
      excipientes: [ 'lactose monohydrate', 'microcrystalline cellulose', 'starch, corn', 'ferric oxide red', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento agudo de la migraña con o sin aura en adultos y en niños de 6 a 17 años.',
        ref: {
          f: 'dailymed-rizatriptan',
          sec: '1 · Indicaciones',
          cita: 'indicated for the acute treatment of migraine with or without aura in adults and in pediatric patients 6 to 17 years old',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rizatriptan',
      advertencias: [
        {
          titulo: 'Isquemia e infarto de miocardio',
          texto: 'No debe darse con enfermedad coronaria isquémica o vasoespástica; se han descrito reacciones cardiacas graves.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '5 · Advertencias y precauciones',
            cita: 'MAXALT should not be given to patients with ischemic or vasospastic coronary artery disease',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos (≥ 5 % y más que con placebo): debilidad o cansancio, somnolencia, dolor u opresión y mareo.',
          '34084-4',
          'asthenia/fatigue, somnolence, pain/pressure sensation and dizziness'
        ],
        [ 'Datos de ensayos controlados en adultos.', '34084-4', 'Adults Incidence in Controlle' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg por comprimido, según la etiqueta; el activo va como benzoato de rizatriptán. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la migraña con o sin aura en adultos y en niños de 6 a 17 años.',
    actua: 'Se une con gran afinidad a los receptores de serotonina 5-HT1B/1D de los vasos intracraneales y de los nervios sensitivos del trigémino.',
    recorrido: 'Se absorbe por completo, pero su biodisponibilidad absoluta media ronda el 45 % por un primer paso amplio; el pico llega en 1-1,5 horas y la comida lo retrasa una hora. El 82 % de la radiactividad salió por la orina y el 12 % por las heces; alrededor del 14 % sin cambios y el 51 % como ácido indolacético. Su semivida es de 2-3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido con forma de cápsula.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido con forma de cápsula.',
          ref: { f: 'dailymed-rizatriptan', sec: '3 · Formas y concentraciones', cita: 'pale pink, capsule-shaped, compressed tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe por completo, pero su biodisponibilidad absoluta media ronda el 45 % por un primer paso amplio; el pico llega en 1-1,5 horas y la comida lo retrasa una hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo, pero su biodisponibilidad absoluta media ronda el 45 % por un primer paso amplio; el pico llega en 1-1,5 horas y la comida lo retrasa una hora.',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Rizatriptan is completely absorbed following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta media de alrededor del 45 % y pico en 1-1,5 horas.',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean oral absolute bioavailability of the MAXALT Tablet is about 45%',
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
      ocurre: 'Volumen de distribución de unos 140 L en hombres y 110 L en mujeres; solo el 14 % se une a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución de unos 140 L en hombres y 110 L en mujeres; solo el 14 % se une a proteínas.',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Rizatriptan is minimally bound (14%) to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT1B y 5-HT1D',
        efecto: 'Se une con gran afinidad a los receptores de serotonina 5-HT1B/1D de los vasos intracraneales y de los nervios sensitivos del trigémino.',
        lugar: [ 'encefalo', 'vasos', 'nervios' ],
        datos: [
          {
            t: 'Se une con gran afinidad a los receptores de serotonina 5-HT1B/1D de los vasos intracraneales y de los nervios sensitivos del trigémino.',
            ref: {
              f: 'dailymed-rizatriptan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'by binding to 5-HT 1B/1D receptors located on intracranial blood vessels and sensory nerves of the trigeminal system',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía principal es la desaminación oxidativa por la MAO-A a un ácido indolacético inactivo; en menor medida forma N-monodesmetil-rizatriptán, con actividad parecida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía principal es la desaminación oxidativa por la MAO-A a un ácido indolacético inactivo; en menor medida forma N-monodesmetil-rizatriptán, con actividad parecida.',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary route of rizatriptan metabolism is via oxidative deamination by monoamine oxidase-A (MAO-A)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido indolacético',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'to the indole acetic acid metabolite, which is not active at the 5-HT 1B/1D receptor',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'N-monodesmetil-rizatriptán',
          actividad: 'activo',
          nota: 'Sus concentraciones son el 14 % de las del rizatriptán.',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'N-monodesmethyl-rizatriptan, a metabolite with activity similar to that of parent compound',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 82 % de la radiactividad salió por la orina y el 12 % por las heces; alrededor del 14 % sin cambios y el 51 % como ácido indolacético. Su semivida es de 2-3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 82 % de la radiactividad salió por la orina y el 12 % por las heces; alrededor del 14 % sin cambios y el 51 % como ácido indolacético. Su semivida es de 2-3 horas.',
          ref: {
            f: 'dailymed-rizatriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The total radioactivity of the administered dose recovered over 120 hours in urine and feces was 82% and 12%',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta media',
      valor: '45 (aprox.)',
      unidad: '%',
      analito: 'rizatriptán',
      ref: {
        f: 'dailymed-rizatriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean oral absolute bioavailability of the MAXALT Tablet is about 45%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-1,5',
      unidad: 'h',
      analito: 'rizatriptán',
      ref: { f: 'dailymed-rizatriptan', sec: '12.3 · Farmacocinética', cita: 'are reached in approximately 1-1.5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '14',
      unidad: '%',
      analito: 'rizatriptán',
      ref: { f: 'dailymed-rizatriptan', sec: '12.3 · Farmacocinética', cita: 'Rizatriptan is minimally bound (14%) to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '2-3',
      unidad: 'h',
      analito: 'rizatriptán',
      ref: {
        f: 'dailymed-rizatriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma half-life of rizatriptan in males and females averages 2-3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '14 (aprox.)',
      unidad: '% de la dosis',
      analito: 'rizatriptán',
      ref: {
        f: 'dailymed-rizatriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 14% of an oral dose is excreted in urine as unchanged rizatriptan',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rizatriptan', '007b4644-e0e7-4863-9ae3-fe09676b3f5f', 'MAXALT (RIZATRIPTAN BENZOATE) TABLET MAXALT-MLT (RIZATRIPTAN BENZOATE) TABLET, ORALLY DISINTEGRATING', 'MAXALT', '4', '2026-02-06', '2026-11-12'),
    rengPubchem(5078, 'rizatriptan', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
