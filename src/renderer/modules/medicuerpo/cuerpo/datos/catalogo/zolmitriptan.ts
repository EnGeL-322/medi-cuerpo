import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zolmitriptan',
    nombre: 'Zolmitriptán',
    clase: 'Antimigrañoso (agonista 5-HT1B/1D, triptán)',
    sinonimos: [ 'zolmitriptan', 'Zomig' ],
    formula: 'C16H21N3O2',
    masaMolar: 287.36,
    smiles: 'CN(C)CCC1=CNC2=C1C=C(C=C2)C[C@H]3COC(=O)N3',
    inchikey: 'ULSDMUVEXKOYBU-ZDUSSCGKSA-N',
    cid: 60857,
    iupac: '(4S)-4-[[3-[2-(dimethylamino)ethyl]-1H-indol-5-yl]methyl]-1,3-oxazolidin-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'zolmitriptan-oral',
      producto: 'ZOMIG · comprimido recubierto con película',
      titular: 'AMNEAL PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg o 5 mg por comprimido, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'microcrystalline cellulose',
        'sodium starch glycolate type a',
        'magnesium stearate',
        'silicon dioxide',
        'titanium dioxide',
        'polyvinyl alcohol (100000 mw)',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento agudo de la migraña con o sin aura en adultos.',
        ref: {
          f: 'dailymed-zolmitriptan',
          sec: '1 · Indicaciones',
          cita: 'indicated for the acute treatment of migraine with or without aura in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zolmitriptan',
      advertencias: [
        {
          titulo: 'Arritmias',
          texto: 'Se han descrito alteraciones graves del ritmo cardiaco, incluso mortales, pocas horas después de tomar agonistas 5-HT1.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-zolmitriptan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Life‑threatening disturbances of cardiac rhythm including ventricular tachycardia',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % y más que con placebo): dolor u opresión en cuello, garganta o mandíbula, mareo, hormigueo, debilidad y somnolencia.',
          '34084-4',
          'were neck/throat/jaw pain/tightness/pressure, dizziness, paresthesia'
        ],
        [
          'También sensación de calor o frío, náuseas, pesadez y boca seca.',
          '34084-4',
          'warm/cold sensation, nausea, heaviness sensation, and dry mouth'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2.5 mg o 5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la migraña con o sin aura en adultos.',
    actua: 'Se une con gran afinidad a los receptores 5-HT1B y 5-HT1D; su efecto se atribuye a su acción sobre los vasos intracraneales y los nervios del trigémino. Su metabolito N-desmetil también es activo.',
    recorrido: 'Se absorbe bien; el pico llega a una mediana de 1,5 horas y la biodisponibilidad absoluta media ronda el 40 %. La comida no la cambia. El 65 % de la radiactividad salió por la orina y el 30 % por las heces; alrededor del 8 % sin cambios y el 31 % como ácido indolacético.'
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
            f: 'dailymed-zolmitriptan',
            sec: '3 · Formas y concentraciones',
            cita: 'round, biconvex film-coated tablets debossed with 101',
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
      ocurre: 'Se absorbe bien; el pico llega a una mediana de 1,5 horas y la biodisponibilidad absoluta media ronda el 40 %. La comida no la cambia.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien; el pico llega a una mediana de 1,5 horas y la biodisponibilidad absoluta media ronda el 40 %. La comida no la cambia.',
          ref: {
            f: 'dailymed-zolmitriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Zolmitriptan is well absorbed after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta media de alrededor del 40 %.',
          ref: { f: 'dailymed-zolmitriptan', sec: '12.3 · Farmacocinética', cita: 'Mean absolute bioavailability is approximately 40%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen aparente de distribución de 7 L/kg; el 25 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen aparente de distribución de 7 L/kg; el 25 % se une a proteínas del plasma.',
          ref: { f: 'dailymed-zolmitriptan', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of zolmitriptan is 25%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT1B y 5-HT1D',
        efecto: 'Se une con gran afinidad a los receptores 5-HT1B y 5-HT1D; su efecto se atribuye a su acción sobre los vasos intracraneales y los nervios del trigémino. Su metabolito N-desmetil también es activo.',
        lugar: [ 'encefalo', 'vasos', 'nervios' ],
        datos: [
          {
            t: 'Se une con gran afinidad a los receptores 5-HT1B y 5-HT1D; su efecto se atribuye a su acción sobre los vasos intracraneales y los nervios del trigémino. Su metabolito N-desmetil también es activo.',
            ref: {
              f: 'dailymed-zolmitriptan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Zolmitriptan binds with high affinity to human recombinant 5-HT 1D and 5‑HT 1B receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se convierte en un metabolito N-desmetil activo, de 2 a 6 veces más potente, cuyas concentraciones son dos tercios de las del zolmitriptán; los metabolitos ácido indolacético y N-óxido son inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se convierte en un metabolito N-desmetil activo, de 2 a 6 veces más potente, cuyas concentraciones son dos tercios de las del zolmitriptán; los metabolitos ácido indolacético y N-óxido son inactivos.',
          ref: {
            f: 'dailymed-zolmitriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Zolmitriptan is converted to an active N-desmethyl metabolite',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetil zolmitriptán',
          actividad: 'activo',
          nota: 'Puede aportar una parte importante del efecto.',
          ref: {
            f: 'dailymed-zolmitriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'the 5HT 1B/1D potency of the metabolite is 2 to 6 times that of the parent compound',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Ácido indolacético y N-óxido',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-zolmitriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'The indole acetic acid and N-oxide metabolites are inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 65 % de la radiactividad salió por la orina y el 30 % por las heces; alrededor del 8 % sin cambios y el 31 % como ácido indolacético.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 65 % de la radiactividad salió por la orina y el 30 % por las heces; alrededor del 8 % sin cambios y el 31 % como ácido indolacético.',
          ref: {
            f: 'dailymed-zolmitriptan',
            sec: '12.3 · Farmacocinética',
            cita: 'Total radioactivity recovered in urine and feces was 65% and 30% of the administered dose',
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
      valor: '1,5',
      unidad: 'h',
      analito: 'zolmitriptán',
      ref: { f: 'dailymed-zolmitriptan', sec: '12.3 · Farmacocinética', cita: 'compared with 1.5 hours for the ZOMIG tablet', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'zolmitriptán',
      ref: { f: 'dailymed-zolmitriptan', sec: '12.3 · Farmacocinética', cita: 'Mean absolute bioavailability is approximately 40%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución medio',
      valor: '7,0',
      unidad: 'L/kg',
      analito: 'zolmitriptán',
      ref: { f: 'dailymed-zolmitriptan', sec: '12.3 · Farmacocinética', cita: 'The mean apparent volume of distribution is 7.0 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '25',
      unidad: '%',
      analito: 'zolmitriptán',
      ref: { f: 'dailymed-zolmitriptan', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of zolmitriptan is 25%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '8 (aprox.)',
      unidad: '% de la dosis',
      analito: 'zolmitriptán',
      ref: {
        f: 'dailymed-zolmitriptan',
        sec: '12.3 · Farmacocinética',
        cita: 'About 8% of the dose was recovered in the urine as unchanged zolmitriptan',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zolmitriptan', '1d977430-f494-415d-9daf-3c3163156249', 'ZOMIG (ZOLMITRIPTAN) TABLET, FILM COATED', 'ZOMIG', '1', '2024-02-16', '2026-11-12'),
    rengPubchem(60857, 'zolmitriptan', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
