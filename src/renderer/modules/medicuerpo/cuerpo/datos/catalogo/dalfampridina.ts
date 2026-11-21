import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dalfampridina',
    nombre: 'Dalfampridina',
    clase: 'Bloqueante de canales de potasio',
    sinonimos: [ 'dalfampridine', 'fampridine', '4-aminopyridine', 'Ampyra' ],
    formula: 'C5H6N2',
    masaMolar: 94.11,
    smiles: 'C1=CN=CC=C1N',
    inchikey: 'NUKYPUAOHBNCPY-UHFFFAOYSA-N',
    cid: 1727,
    iupac: 'pyridin-4-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'dalfampridina-oral',
      producto: 'AMPYRA · comprimido recubierto de liberación prolongada',
      titular: 'MERZ PHARMACEUTICALS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '10 mg por comprimido, según la etiqueta',
      excipientes: [
        'hypromellose, unspecified',
        'silicon dioxide',
        'microcrystalline cellulose',
        'magnesium stearate',
        'titanium dioxide',
        'polyethylene glycol, unspecified'
      ],
      usos: {
        t: 'Tratamiento para mejorar la marcha en adultos con esclerosis múltiple.',
        ref: {
          f: 'dailymed-dalfampridina',
          sec: '1 · Indicaciones',
          cita: 'AMPYRA is indicated as a treatment to improve walking in adult patients with multiple sclerosis (MS)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dalfampridina',
      advertencias: [
        {
          titulo: 'Convulsiones',
          texto: 'Puede causar convulsiones.',
          organos: [ 'encefalo' ],
          ref: { f: 'dailymed-dalfampridina', sec: '5 · Advertencias y precauciones', cita: 'AMPYRA can cause seizures', codigo: '43685-7' }
        },
        {
          titulo: 'Antecedentes de convulsiones',
          texto: 'Está contraindicado en pacientes con antecedentes de convulsiones.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '5 · Advertencias y precauciones',
            cita: 'AMPYRA is contraindicated in patients with a history of seizures',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más y más que con placebo): infección urinaria, insomnio, mareo, cefalea, náuseas, astenia, dolor de espalda y trastorno del equilibrio, entre otras.',
          '34084-4',
          'The most common adverse events (incidence ≥2% and at a rate greater than the placebo rate) for AMPYRA were urinary tract infection, insomnia, dizziness, headache, nausea, asthenia, back pain, balance disorder'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figuran las convulsiones.',
          '34084-4',
          'Seizures [see Warnings and Precautions (5.1) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de liberación prolongada: 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento para mejorar la marcha en adultos con esclerosis múltiple.',
    actua: 'Es un bloqueante de amplio espectro de los canales de potasio; en animales aumentó la conducción de los potenciales de acción en axones desmielinizados al inhibir esos canales. El mecanismo terapéutico no se conoce del todo.',
    recorrido: 'Administrada por vía oral se absorbe de forma rápida y completa en el tubo digestivo. La eliminación es casi completa a las 24 horas: el 95,9 % de la dosis se recuperó en la orina y el 0,5 % en las heces; la mayor parte en la orina fue fármaco original (90,3 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto de liberación prolongada: libera la dalfampridina poco a poco a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido recubierto de liberación prolongada: libera la dalfampridina poco a poco a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '11 · Descripción',
            cita: 'AMPYRA (dalfampridine) extended-release tablets are available in a 10 mg strength',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Administrada por vía oral se absorbe de forma rápida y completa en el tubo digestivo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Administrada por vía oral se absorbe de forma rápida y completa en el tubo digestivo.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'Orally administered dalfampridine is rapidly and completely absorbed from the gastrointestinal tract',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se evaluó la biodisponibilidad absoluta del comprimido de liberación prolongada; la relativa es del 96 % frente a una solución oral acuosa.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'Absolute bioavailability of extended release AMPYRA tablets has not been assessed, but relative bioavailability is 96% when compared to an aqueous oral solution',
            codigo: '43682-4'
          }
        },
        {
          t: 'El comprimido de 10 mg en ayunas dio concentraciones máximas de 17,3 a 21,6 ng/mL a las 3-4 horas.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'peak concentrations ranging from 17.3 ng/mL to 21.6 ng/mL occurring 3 to 4 hours post-administration (Tmax)',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'dosis de 10 mg en ayunas'
        },
        {
          t: 'Con alimento hay un ligero aumento de la Cmax (12–17 %) y un ligero descenso del AUC (4–7 %), sin importancia clínica.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'When dalfampridine is taken with food, there is a slight increase in Cmax (12–17%) and a slight decrease in AUC (4–7%)',
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
      ocurre: 'Circula en su mayor parte sin unirse a las proteínas del plasma (97–99 %) y su volumen de distribución aparente es de 2,6 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Circula en su mayor parte sin unirse a las proteínas del plasma (97–99 %) y su volumen de distribución aparente es de 2,6 L/kg.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'Dalfampridine is largely unbound to plasma proteins (97–99%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente es de 2,6 L/kg.',
          ref: { f: 'dailymed-dalfampridina', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 2.6 L/kg', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canales de potasio',
        efecto: 'Es un bloqueante de amplio espectro de los canales de potasio; en animales aumentó la conducción de los potenciales de acción en axones desmielinizados al inhibir esos canales. El mecanismo terapéutico no se conoce del todo.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'Es un bloqueante de amplio espectro de los canales de potasio; en animales aumentó la conducción de los potenciales de acción en axones desmielinizados al inhibir esos canales. El mecanismo terapéutico no se conoce del todo.',
            ref: {
              f: 'dailymed-dalfampridina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Dalfampridine is a broad spectrum potassium channel blocker. In animal studies, dalfampridine has been shown to increase conduction of action potentials in demyelinated axons through inhibition of potassium channels',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se identificaron dos metabolitos, la 3-hidroxi-4-aminopiridina (4,3 %) y su sulfato (2,6 %); la CYP2E1 es la enzima principal de la 3-hidroxilación (in vitro).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se identificaron dos metabolitos, la 3-hidroxi-4-aminopiridina (4,3 %) y su sulfato (2,6 %); la CYP2E1 es la enzima principal de la 3-hidroxilación (in vitro).',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'Two metabolites were identified: 3-hydroxy-4-aminopyridine (4.3%) and 3-hydroxy-4-aminopyridine sulfate (2.6%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Estudios in vitro con microsomas hepáticos humanos indican que la CYP2E1 es la enzima principal de la 3-hidroxilación.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies with human liver microsomes indicate that CYP2E1 was the major enzyme responsible for the 3-hydroxylation of dalfampridine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '3-hidroxi-4-aminopiridina y su sulfato',
          actividad: 'inactivo',
          nota: 'Sin actividad farmacológica sobre los canales de potasio.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'These metabolites have been shown to have no pharmacologic activity on potassium channels',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es casi completa a las 24 horas: el 95,9 % de la dosis se recuperó en la orina y el 0,5 % en las heces; la mayor parte en la orina fue fármaco original (90,3 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es casi completa a las 24 horas: el 95,9 % de la dosis se recuperó en la orina y el 0,5 % en las heces; la mayor parte en la orina fue fármaco original (90,3 %).',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'Dalfampridine and metabolites elimination is nearly complete after 24 hours, with 95.9% of the dose recovered in urine and 0.5% recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación aparente con el comprimido de liberación prolongada es de 5,2 a 6,5 horas.',
          ref: {
            f: 'dailymed-dalfampridina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent elimination half-life of dalfampridine following administration of the extended release tablet formulation of AMPYRA is 5.2 to 6.5 hours',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '3-4',
      unidad: 'h',
      analito: 'dalfampridina',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis de 10 mg en ayunas',
      ref: { f: 'dailymed-dalfampridina', sec: '12.3 · Farmacocinética', cita: 'occurring 3 to 4 hours post-administration (Tmax)', codigo: '43682-4' }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción no unida a proteínas plasmáticas',
      valor: '97-99',
      unidad: '%',
      analito: 'dalfampridina',
      ref: {
        f: 'dailymed-dalfampridina',
        sec: '12.3 · Farmacocinética',
        cita: 'Dalfampridine is largely unbound to plasma proteins (97–99%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '2,6',
      unidad: 'L/kg',
      analito: 'dalfampridina',
      ref: { f: 'dailymed-dalfampridina', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 2.6 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación aparente',
      valor: '5,2-6,5',
      unidad: 'h',
      analito: 'dalfampridina',
      ref: { f: 'dailymed-dalfampridina', sec: '12.3 · Farmacocinética', cita: 'is 5.2 to 6.5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '95,9',
      unidad: '% de la dosis',
      analito: 'dalfampridina y metabolitos',
      ref: { f: 'dailymed-dalfampridina', sec: '12.3 · Farmacocinética', cita: 'with 95.9% of the dose recovered in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dalfampridina', '550eb76a-e4a6-4fa1-ad65-c0fd8b0ce783', 'AMPYRA (DALFAMPRIDINE) TABLET, FILM COATED, EXTENDED RELEASE', 'AMPYRA', '22', '2026-01-23', '2026-11-15'),
    rengPubchem(1727, 'dalfampridine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
