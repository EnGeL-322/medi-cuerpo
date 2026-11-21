import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'omadaciclina',
    nombre: 'Omadaciclina',
    clase: 'Antibacteriano aminometilciclina de la clase de las tetraciclinas',
    sinonimos: [ 'omadacycline', 'Nuzyra' ],
    formula: 'C29H40N4O7',
    masaMolar: 556.6,
    smiles: 'CC(C)(C)CNCC1=CC(=C2C[C@H]3C[C@H]4[C@@H](C(=O)C(=C([C@]4(C(=O)C3=C(C2=C1O)O)O)O)C(=O)N)N(C)C)N(C)C',
    inchikey: 'VJYKVCURWJGLPG-IQZGDKDPSA-N',
    cid: 54697325,
    iupac: '(4S,4aS,5aR,12aR)-4,7-bis(dimethylamino)-9-[(2,2-dimethylpropylamino)methyl]-1,10,11,12a-tetrahydroxy-3,12-dioxo-4a,5,5a,6-tetrahydro-4H-tetracene-2-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'omadaciclina-oral',
      producto: 'NUZYRA · comprimido recubierto con película',
      titular: 'PARATEK PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'glyceryl monocaprylocaprate',
        'ferric oxide yellow',
        'lactose monohydrate',
        'microcrystalline cellulose',
        'polyvinyl alcohol, unspecified',
        'sodium bisulfite',
        'sodium lauryl sulfate',
        'sodium stearyl fumarate',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con neumonía bacteriana adquirida en la comunidad o con infecciones bacterianas agudas de la piel y estructuras cutáneas por microorganismos sensibles.',
        ref: {
          f: 'dailymed-omadaciclina',
          sec: '1 · Indicaciones',
          cita: 'NUZYRA is a tetracycline class antibacterial indicated for the treatment of adult patients with the following infections caused by susceptible microorganisms',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-omadaciclina',
      advertencias: [
        {
          titulo: 'Coloración dental e hipoplasia del esmalte',
          texto: 'Su uso durante el desarrollo dental puede teñir los dientes de forma permanente y causar hipoplasia del esmalte.',
          organos: [],
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '5 · Advertencias y precauciones',
            cita: 'may cause permanent discoloration of the teeth (yellow-gray-brown) and enamel hypoplasia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Inhibición del crecimiento óseo',
          texto: 'Su uso en el segundo y tercer trimestre del embarazo y en la infancia hasta los 8 años puede inhibir de forma reversible el crecimiento óseo.',
          organos: [ 'huesos' ],
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '5 · Advertencias y precauciones',
            cita: 'may cause reversible inhibition of bone growth',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea por Clostridioides difficile',
          texto: 'Valorar si aparece diarrea.',
          organos: [],
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Clostridioides difficile -Associated Diarrhea : Evaluate if diarrhea occurs',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más) son náuseas, vómitos, reacciones en el lugar de infusión, aumento de ALT y AST, cefalea y diarrea.',
          '34084-4',
          'most common adverse reactions (incidence ≥2%) are nausea, vomiting, infusion site reactions, alanine aminotransferase increased, aspartate aminotransferase increased, headache and diarrhea'
        ],
        [
          'Entre las reacciones descritas con más detalle figuran la alteración del desarrollo dental y la inhibición del crecimiento óseo.',
          '34084-4',
          'Inhibition of Bone Growth [see Warnings and Precautions (5.2) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con neumonía bacteriana adquirida en la comunidad o con infecciones bacterianas agudas de la piel y estructuras cutáneas por microorganismos sensibles.',
    actua: 'Se une a la subunidad ribosómica 30S y bloquea la síntesis de proteínas bacteriana; en general es bacteriostática.',
    recorrido: 'La biodisponibilidad es del 34,5 % tras una dosis única de 300 mg; la exposición con 300 mg orales es similar a la de 100 mg intravenosos en ayunas, y las comidas previas la reducen mucho. Tras 300 mg orales marcados, entre el 77,5 % y el 84,0 % de la dosis se recuperó en las heces y alrededor del 14,4 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de 150 mg: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de 150 mg: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '3 · Formas y concentraciones',
            cita: 'Each tablet contains 150 mg of omadacycline (equivalent to 196 mg omadacycline tosylate) in yellow, diamond-shaped, film-coated tablets',
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
      ocurre: 'La biodisponibilidad es del 34,5 % tras una dosis única de 300 mg; la exposición con 300 mg orales es similar a la de 100 mg intravenosos en ayunas, y las comidas previas la reducen mucho.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad es del 34,5 % tras una dosis única de 300 mg; la exposición con 300 mg orales es similar a la de 100 mg intravenosos en ayunas, y las comidas previas la reducen mucho.',
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'Bioavailability 34.5% following single 300 mg dose of NUZYRA',
            codigo: '43682-4'
          }
        },
        {
          t: 'La exposición es similar entre 300 mg por boca y 100 mg intravenosos en sujetos sanos en ayunas.',
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'The exposure to omadacycline is similar between a 300 mg oral dose and a 100 mg intravenous dose of NUZYRA in healthy fasted subjects',
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
      ocurre: 'La unión a proteínas plasmáticas es del 20 % y no depende de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es del 20 % y no depende de la concentración.',
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma Protein Binding 20%; not concentration dependent',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Subunidad ribosómica 30S bacteriana',
        efecto: 'Se une a la subunidad ribosómica 30S y bloquea la síntesis de proteínas bacteriana; en general es bacteriostática.',
        lugar: [],
        datos: [
          {
            t: 'Se une a la subunidad ribosómica 30S y bloquea la síntesis de proteínas bacteriana; en general es bacteriostática.',
            ref: {
              f: 'dailymed-omadaciclina',
              sec: '12.4 · Microbiología',
              cita: 'Omadacycline binds to the 30S ribosomal subunit and blocks protein synthesis',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La omadaciclina no se metaboliza.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'La omadaciclina no se metaboliza.',
          ref: { f: 'dailymed-omadaciclina', sec: '12.3 · Farmacocinética', cita: 'Omadacycline is not metabolized', codigo: '43682-4' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 300 mg orales marcados, entre el 77,5 % y el 84,0 % de la dosis se recuperó en las heces y alrededor del 14,4 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 300 mg orales marcados, entre el 77,5 % y el 84,0 % de la dosis se recuperó en las heces y alrededor del 14,4 % en la orina.',
          ref: {
            f: 'dailymed-omadaciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'In healthy male volunteers receiving 300 mg oral [ 14 C] NUZYRA, 77.5% to 84.0% of the dose was recovered in the feces, approximately 14.4% (range 10.8% to 17.4%) in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad tras 300 mg',
      valor: '34,5',
      unidad: '%',
      analito: 'omadaciclina',
      ref: {
        f: 'dailymed-omadaciclina',
        sec: '12.3 · Farmacocinética',
        cita: 'Bioavailability 34.5% following single 300 mg dose of NUZYRA',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '20',
      unidad: '%',
      analito: 'omadaciclina',
      ref: { f: 'dailymed-omadaciclina', sec: '12.3 · Farmacocinética', cita: 'Plasma Protein Binding 20%; not concentration dependent', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '77,5-84,0',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones sanos',
      condiciones: 'dosis oral marcada de 300 mg',
      ref: { f: 'dailymed-omadaciclina', sec: '12.3 · Farmacocinética', cita: '77.5% to 84.0% of the dose was recovered in the feces', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '14,4 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones sanos',
      condiciones: 'dosis oral marcada de 300 mg',
      ref: { f: 'dailymed-omadaciclina', sec: '12.3 · Farmacocinética', cita: 'approximately 14.4% (range 10.8% to 17.4%) in the urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-omadaciclina', '51591524-4703-44c6-8bde-dce3e6a463d1', 'NUZYRA (OMADACYCLINE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION NUZYRA (OMADACYCLINE) TABLET, FILM COATED', 'NUZYRA', '13', '2026-11-17', '2026-11-19'),
    rengPubchem(54697325, 'omadacycline', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
