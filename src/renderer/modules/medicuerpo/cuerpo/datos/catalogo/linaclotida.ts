import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'linaclotida',
    nombre: 'Linaclotida',
    clase: 'Péptido agonista de la guanilato ciclasa C',
    sinonimos: [ 'linaclotide', 'Linzess' ],
    formula: 'C59H79N15O21S6',
    masaMolar: 1526.8,
    smiles: 'C[C@H]1C(=O)N[C@H]2CSSC[C@H]3C(=O)N[C@H](C(=O)N[C@H](C(=O)N[C@@H](CSSC[C@H](NC(=O)CNC(=O)[C@@H](NC2=O)[C@@H](C)O)C(=O)N[C@@H](CC4=CC=C(C=C4)O)C(=O)O)C(=O)N[C@@H](CSSC[C@@H](C(=O)N3)N)C(=O)N[C@H](C(=O)N5CCC[C@H]5C(=O)N1)CC(=O)N)CC6=CC=C(C=C6)O)CCC(=O)O',
    inchikey: 'KXGCNMMJRFDFNR-WDRJZQOASA-N',
    cid: 16158208,
    iupac: '(2S)-2-[[(1R,4S,7S,13S,16R,21R,24R,27S,30S,33R,38R,44S)-21-amino-13-(2-amino-2-oxoethyl)-27-(2-carboxyethyl)-44-[(1R)-1-hydroxyethyl]-30-[(4-hydroxyphenyl)methyl]-4-methyl-3,6,12,15,22,25,28,31,40,43,46,51-dodecaoxo-18,19,35,36,48,49-hexathia-2,5,11,14,23,26,29,32,39,42,45,52-dodecazatetracyclo[22.22.4.216,33.07,11]dopentacontane-38-carbonyl]amino]-3-(4-hydroxyphenyl)propanoic acid',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'linaclotida-oral',
      producto: 'Linzess · cápsula',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '72, 145 o 290 microgramos (mcg) por cápsula, según la etiqueta',
      excipientes: [
        'calcium chloride',
        'histidine',
        'cellulose, microcrystalline',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'gelatin, unspecified'
      ],
      usos: {
        t: 'Síndrome del intestino irritable con estreñimiento y estreñimiento idiopático crónico en adultos; estreñimiento funcional en niños desde 2 años.',
        ref: {
          f: 'dailymed-linaclotida',
          sec: '1 · Indicaciones',
          cita: 'irritable bowel syndrome with constipation (IBS-C) in adults and pediatric patients 7 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-linaclotida',
      advertencias: [
        {
          titulo: 'Deshidratación grave en menores de 2 años',
          texto: 'Está contraindicado en menores de 2 años: en ratones neonatos causó muertes por deshidratación.',
          organos: [ 'intestino-delgado' ],
          ref: {
            f: 'dailymed-linaclotida',
            sec: 'Advertencia destacada',
            cita: 'LINZESS is contraindicated in patients less than 2 years of age',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'En adultos (≥ 2 %): diarrea, dolor abdominal, gases y distensión abdominal.',
          '34084-4',
          'Most common adverse reactions (≥2%) reported in adult patients with IBS-C or CIC are: diarrhea, abdominal pain, flatulence and abdominal distension'
        ],
        [
          'En niños, la más frecuente (≥ 2 %) es la diarrea.',
          '34084-4',
          'Most common adverse reaction (≥2%) reported in pediatric patients 7 to 17 years of age with IBS-C and 6 to 17 years of age with FC is diarrhea'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 72, 145 o 290 microgramos (mcg) por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Síndrome del intestino irritable con estreñimiento y estreñimiento idiopático crónico en adultos; estreñimiento funcional en niños desde 2 años.',
    actua: 'Activa la guanilato ciclasa C del epitelio intestinal: sube el GMP cíclico, sale cloruro y bicarbonato a la luz del intestino y el tránsito se acelera.',
    recorrido: 'Apenas se absorbe: su disponibilidad en sangre es insignificante y las concentraciones en plasma están por debajo del límite de cuantificación. Con 290 mcg diarios durante siete días, se recuperó en las heces alrededor del 5 % (en ayunas) y del 3 % (con comida) del péptido activo, todo como metabolito activo.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      organosGenerales: [ 'esofago', 'estomago' ],
      llega: 'La cápsula se traga entera y baja hasta el estómago.',
      ocurre: 'Cápsula con cubierta de gelatina.',
      sigue: 'El contenido sigue hacia el intestino delgado, donde actúa sobre su superficie.',
      datos: [
        {
          t: 'Cápsula con cubierta de gelatina.',
          ref: { f: 'dailymed-linaclotida', sec: '3 · Formas y concentraciones', cita: 'LINZESS capsules are white to off-white opaque', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      organosGenerales: [],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Apenas se absorbe: su disponibilidad en sangre es insignificante y las concentraciones en plasma están por debajo del límite de cuantificación.',
      sigue: 'Casi todo sigue dentro del tubo digestivo, donde actúa.',
      datos: [
        {
          t: 'Apenas se absorbe: su disponibilidad en sangre es insignificante y las concentraciones en plasma están por debajo del límite de cuantificación.',
          ref: {
            f: 'dailymed-linaclotida',
            sec: '12.3 · Farmacocinética',
            cita: 'LINZESS is minimally absorbed with negligible systemic availability following oral administration',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'luz-intestinal' ],
      llega: 'El fármaco sigue en el tubo digestivo; solo una parte pequeña llega a la sangre.',
      ocurre: 'Como no se detecta en plasma, no se espera que llegue a los tejidos de forma relevante.',
      sigue: 'El fármaco permanece en el tubo digestivo.',
      datos: [
        {
          t: 'Como no se detecta en plasma, no se espera que llegue a los tejidos de forma relevante.',
          ref: {
            f: 'dailymed-linaclotida',
            sec: '12.3 · Farmacocinética',
            cita: 'linaclotide is not expected to be distributed to tissues to any clinically relevant extent',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Guanilato ciclasa C del epitelio intestinal',
        efecto: 'Activa la guanilato ciclasa C del epitelio intestinal: sube el GMP cíclico, sale cloruro y bicarbonato a la luz del intestino y el tránsito se acelera.',
        lugar: [ 'luz-intestinal' ],
        datos: [
          {
            t: 'Activa la guanilato ciclasa C del epitelio intestinal: sube el GMP cíclico, sale cloruro y bicarbonato a la luz del intestino y el tránsito se acelera.',
            ref: {
              f: 'dailymed-linaclotida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'functions as a guanylate cyclase-C (GC-C) agonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'luz-intestinal' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma dentro del tubo digestivo en su metabolito activo principal al perder la tirosina terminal; ambos se degradan en la luz intestinal hasta péptidos pequeños y aminoácidos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma dentro del tubo digestivo en su metabolito activo principal al perder la tirosina terminal; ambos se degradan en la luz intestinal hasta péptidos pequeños y aminoácidos.',
          ref: {
            f: 'dailymed-linaclotida',
            sec: '12.3 · Farmacocinética',
            cita: 'Linaclotide is metabolized within the gastrointestinal tract to its principal, active metabolite by loss of the terminal tyrosine moiety',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito activo (sin tirosina terminal)',
          actividad: 'activo',
          ref: {
            f: 'dailymed-linaclotida',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolized within the gastrointestinal tract to its principal, active metabolite by loss of the terminal tyrosine moiety',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con 290 mcg diarios durante siete días, se recuperó en las heces alrededor del 5 % (en ayunas) y del 3 % (con comida) del péptido activo, todo como metabolito activo.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con 290 mcg diarios durante siete días, se recuperó en las heces alrededor del 5 % (en ayunas) y del 3 % (con comida) del péptido activo, todo como metabolito activo.',
          ref: { f: 'dailymed-linaclotida', sec: '12.3 · Farmacocinética', cita: 'averaged about 5% (fasted) and about 3% (fed)', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'heces',
      nombre: 'Péptido activo recuperado en las heces',
      valor: '3-5 (aprox.)',
      unidad: '%',
      analito: 'metabolito activo',
      poblacion: 'sujetos sanos',
      condiciones: '290 mcg al día durante 7 días; 5 % en ayunas, 3 % con comida',
      ref: { f: 'dailymed-linaclotida', sec: '12.3 · Farmacocinética', cita: 'averaged about 5% (fasted) and about 3% (fed)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-linaclotida', '09beda19-56d6-4a56-afdc-9a77b70b2ef3', 'LINZESS (LINACLOTIDE) CAPSULE, GELATIN COATED', 'Linzess', '40', '2026-10-19', '2026-11-12'),
    rengPubchem(16158208, 'linaclotide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
