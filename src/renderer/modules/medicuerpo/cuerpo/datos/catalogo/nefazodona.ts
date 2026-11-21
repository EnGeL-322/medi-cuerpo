import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nefazodona',
    nombre: 'Nefazodona',
    clase: 'Antidepresivo (antagonista 5-HT2 e inhibidor de la recaptación de serotonina y noradrenalina)',
    sinonimos: [ 'nefazodone', 'Serzone' ],
    formula: 'C25H32ClN5O2',
    masaMolar: 470,
    smiles: 'CCC1=NN(C(=O)N1CCOC2=CC=CC=C2)CCCN3CCN(CC3)C4=CC(=CC=C4)Cl',
    inchikey: 'VRBKIVRKKCLPHA-UHFFFAOYSA-N',
    cid: 4449,
    iupac: '2-[3-[4-(3-chlorophenyl)piperazin-1-yl]propyl]-5-ethyl-4-(2-phenoxyethyl)-1,2,4-triazol-3-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'nefazodona-oral',
      producto: 'Nefazodone Hydrochloride · comprimido',
      titular: 'TEVA PHARMACEUTICALS USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg, 150 mg, 200 mg o 250 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de nefazodona',
        ref: { f: 'dailymed-nefazodona', sec: '11 · Descripción', cita: 'Nefazodone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'sodium starch glycolate type a potato',
        'povidone k30',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de la depresión, valorando el riesgo de insuficiencia hepática; en muchos casos conviene probar antes otros fármacos.',
        ref: {
          f: 'dailymed-nefazodona',
          sec: '1 · Indicaciones',
          cita: 'Nefazodone hydrochloride tablets are indicated for the treatment of depression',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nefazodona',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática',
          texto: 'Se han notificado casos de insuficiencia hepática potencialmente mortal; en EE. UU., alrededor de 1 caso de insuficiencia hepática con muerte o trasplante por 250 000 a 300 000 pacientes-año.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-nefazodona',
            sec: 'Advertencia destacada',
            cita: 'The reported rate in the United States is about 1 case of liver failure resulting in death or transplant per 250,000 to 300,000 patient-years of nefazodone hydrochloride treatment',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Suicidalidad y antidepresivos',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños, adolescentes y adultos jóvenes.',
          organos: [],
          ref: {
            f: 'dailymed-nefazodona',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Los acontecimientos más frecuentes (5 % o más) y significativamente más que con placebo fueron somnolencia, sequedad de boca, náuseas, mareo, estreñimiento, astenia y aturdimiento, entre otros.',
          '34084-4',
          'were: somnolence, dry mouth, nausea, dizziness, constipation, asthenia, lightheadedness'
        ],
        [
          'Alrededor del 16 % de los 3496 pacientes de los ensayos previos a la comercialización dejó el tratamiento por un acontecimiento adverso.',
          '34084-4',
          'Approximately 16% of the 3496 patients who received nefazodone in worldwide premarketing clinical trials discontinued treatment due to an adverse experience'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg, 100 mg, 150 mg, 200 mg o 250 mg por comprimido, según la etiqueta; el activo va como clorhidrato de nefazodona. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la depresión, valorando el riesgo de insuficiencia hepática; en muchos casos conviene probar antes otros fármacos.',
    actua: 'Su mecanismo, como el de otros antidepresivos, se desconoce; en estudios preclínicos inhibe la recaptación neuronal de serotonina y noradrenalina y ocupa como antagonista los receptores 5-HT2 centrales.',
    recorrido: 'Se absorbe rápido y por completo, pero su extenso metabolismo deja una biodisponibilidad absoluta baja (alrededor del 20 %) y variable; el pico aparece a la hora. Con fármaco marcado, la radiactividad se detectó sobre todo en la orina, y entre un 20 % y un 30 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Nefazodone is rapidly and completely absorbed but is subject to extensive metabolism',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y por completo, pero su extenso metabolismo deja una biodisponibilidad absoluta baja (alrededor del 20 %) y variable; el pico aparece a la hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y por completo, pero su extenso metabolismo deja una biodisponibilidad absoluta baja (alrededor del 20 %) y variable; el pico aparece a la hora.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Nefazodone is rapidly and completely absorbed but is subject to extensive metabolism, so that its absolute bioavailability is low, about 20%, and variable',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos retrasan la absorción y reducen la biodisponibilidad alrededor de un 20 %.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Food delays the absorption of nefazodone and decreases the bioavailability of nefazodone by approximately 20%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'tejidos', 'encefalo', 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye ampliamente por los tejidos, incluido el sistema nervioso central; el volumen de distribución va de 0,22 a 0,87 L/kg y la unión in vitro a las proteínas del plasma supera el 99 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye ampliamente por los tejidos, incluido el sistema nervioso central; el volumen de distribución va de 0,22 a 0,87 L/kg y la unión in vitro a las proteínas del plasma supera el 99 %.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Nefazodone is widely distributed in body tissues, including the central nervous system (CNS)',
            codigo: '43682-4'
          }
        },
        {
          t: 'In vitro se une en más del 99 % a las proteínas del plasma humano.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'nefazodone is extensively (> 99%) bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución en humanos va de 0,22 a 0,87 L/kg.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'In humans the volume of distribution of nefazodone ranges from 0.22 to 0.87 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT2 y transportadores de serotonina y noradrenalina',
        efecto: 'Su mecanismo, como el de otros antidepresivos, se desconoce; en estudios preclínicos inhibe la recaptación neuronal de serotonina y noradrenalina y ocupa como antagonista los receptores 5-HT2 centrales.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo, como el de otros antidepresivos, se desconoce; en estudios preclínicos inhibe la recaptación neuronal de serotonina y noradrenalina y ocupa como antagonista los receptores 5-HT2 centrales.',
            ref: {
              f: 'dailymed-nefazodona',
              sec: '12.2 · Farmacodinámica',
              cita: 'Preclinical studies have shown that nefazodone inhibits neuronal uptake of serotonin and norepinephrine. Nefazodone occupies central 5-HT 2 receptors at nanomolar concentrations, and acts as an antagonist at this receptor',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por N-desalquilación e hidroxilación alifática y aromática; menos del 1 % se excreta sin cambios en la orina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por N-desalquilación e hidroxilación alifática y aromática; menos del 1 % se excreta sin cambios en la orina.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Nefazodone is extensively metabolized after oral administration by n-dealkylation and aliphatic and aromatic hydroxylation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidroxinefazodona (HO-NEF)',
          actividad: 'activo',
          nota: 'Perfil farmacológico parecido al de la nefazodona.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'HO-NEF possesses a pharmacological profile qualitatively and quantitatively similar to that of nefazodone',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'meta-clorofenilpiperazina (mCPP) y triazol-diona',
          actividad: 'desconocida',
          nota: 'La mCPP es agonista de algunos receptores serotoninérgicos; el perfil de la triazol-diona no está bien caracterizado.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'mCPP has some similarities to nefazodone, but also has agonist activity at some serotonergic receptor subtypes',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con fármaco marcado, la radiactividad se detectó sobre todo en la orina, y entre un 20 % y un 30 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con fármaco marcado, la radiactividad se detectó sobre todo en la orina, y entre un 20 % y un 30 % en las heces.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'of the administered radioactivity was detected in urine and about 20 to 30% in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Menos del 1 % de la nefazodona se excreta sin cambios en la orina.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'less than 1% of administered nefazodone is excreted unchanged in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico aparece a la hora y la semivida es de 2 a 4 horas.',
          ref: {
            f: 'dailymed-nefazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations occur at about one hour and the half-life of nefazodone is 2 to 4 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '20 (aprox.)',
      unidad: '%',
      analito: 'nefazodona',
      ref: {
        f: 'dailymed-nefazodona',
        sec: '12.3 · Farmacocinética',
        cita: 'its absolute bioavailability is low, about 20%, and variable',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'nefazodona',
      ref: { f: 'dailymed-nefazodona', sec: '12.3 · Farmacocinética', cita: 'Peak plasma concentrations occur at about one hour', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'nefazodona',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-nefazodona',
        sec: '12.3 · Farmacocinética',
        cita: 'nefazodone is extensively (> 99%) bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,22-0,87',
      unidad: 'L/kg',
      analito: 'nefazodona',
      ref: {
        f: 'dailymed-nefazodona',
        sec: '12.3 · Farmacocinética',
        cita: 'In humans the volume of distribution of nefazodone ranges from 0.22 to 0.87 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '2-4',
      unidad: 'h',
      analito: 'nefazodona',
      ref: { f: 'dailymed-nefazodona', sec: '12.3 · Farmacocinética', cita: 'the half-life of nefazodone is 2 to 4 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nefazodona', '51ff7db5-aaf9-4c3c-86e6-958ebf16b60f', 'NEFAZODONE HYDROCHLORIDE TABLET', 'Nefazodone Hydrochloride', '12', '2025-11-17', '2026-11-19'),
    rengPubchem(4449, 'nefazodone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
