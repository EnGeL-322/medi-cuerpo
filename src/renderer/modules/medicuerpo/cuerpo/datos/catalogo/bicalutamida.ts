import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bicalutamida',
    nombre: 'Bicalutamida',
    clase: 'Antiandrógeno no esteroideo (inhibidor del receptor de andrógenos)',
    sinonimos: [ 'bicalutamide', 'Casodex' ],
    formula: 'C18H14F4N2O4S',
    masaMolar: 430.4,
    smiles: 'CC(CS(=O)(=O)C1=CC=C(C=C1)F)(C(=O)NC2=CC(=C(C=C2)C#N)C(F)(F)F)O',
    inchikey: 'LKJPYSCBVHEWIU-UHFFFAOYSA-N',
    cid: 2375,
    iupac: 'N-[4-cyano-3-(trifluoromethyl)phenyl]-3-(4-fluorophenyl)sulfonyl-2-hydroxy-2-methylpropanamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'bicalutamida-oral',
      producto: 'CASODEX · comprimido',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'hypromellose, unspecified',
        'polyethylene glycol 300',
        'sodium starch glycolate type a potato',
        'povidone k30',
        'titanium dioxide',
        'magnesium stearate'
      ],
      usos: {
        t: 'Cáncer de próstata metastásico en estadio D2, en combinación con un análogo de la LHRH (50 mg al día).',
        ref: {
          f: 'dailymed-bicalutamida',
          sec: '1 · Indicaciones',
          cita: 'combination therapy with a luteinizing hormone-releasing hormone (LHRH) analog for the treatment of Stage D 2 metastatic carcinoma of the prostate',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bicalutamida',
      advertencias: [
        {
          titulo: 'Hepatitis',
          texto: 'Se han descrito muertes u hospitalizaciones por daño hepático grave (insuficiencia hepática), sobre todo en los primeros tres o cuatro meses.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-bicalutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of death or hospitalization due to severe liver injury (hepatic failure) have been reported postmarketing in association with the use of CASODEX',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [ 'La más frecuente fueron los sofocos (53 %).', '34084-4', 'most frequent adverse reaction was hot flashes (53%)' ],
        [
          'En el ensayo frente a flutamida, ambas con análogo de LHRH, hubo dolor general (35 %) y dolor de espalda (25 %).',
          '34084-4',
          'Pain (General) 142 (35) 127 (31) Back Pain 102 (25)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cáncer de próstata metastásico en estadio D2, en combinación con un análogo de la LHRH (50 mg al día).',
    actua: 'Inhibe de forma competitiva la acción de los andrógenos al unirse a los receptores de andrógenos del tejido diana; el cáncer de próstata es sensible a los andrógenos.',
    recorrido: 'Se absorbe bien aunque la biodisponibilidad absoluta se desconoce; la comida no tiene efecto clínicamente significativo en la velocidad ni en la cantidad absorbida. El fármaco original y los glucurónidos se eliminan por la orina y las heces; el isómero activo tiene una semivida de 5,8 días.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 50 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 50 mg.',
          ref: {
            f: 'dailymed-bicalutamida',
            sec: '3 · Formas y concentraciones',
            cita: 'CASODEX ® (bicalutamide) 50 mg tablets for oral administration',
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
      ocurre: 'Se absorbe bien aunque la biodisponibilidad absoluta se desconoce; la comida no tiene efecto clínicamente significativo en la velocidad ni en la cantidad absorbida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien aunque la biodisponibilidad absoluta se desconoce; la comida no tiene efecto clínicamente significativo en la velocidad ni en la cantidad absorbida.',
          ref: {
            f: 'dailymed-bicalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Bicalutamide is well-absorbed following oral administration, although the absolute bioavailability is unknown',
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
      ocurre: 'La bicalutamida se une en un 96 % a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La bicalutamida se une en un 96 % a proteínas.',
          ref: { f: 'dailymed-bicalutamida', sec: '12.3 · Farmacocinética', cita: 'Bicalutamide is highly protein-bound (96%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor de andrógenos',
        efecto: 'Inhibe de forma competitiva la acción de los andrógenos al unirse a los receptores de andrógenos del tejido diana; el cáncer de próstata es sensible a los andrógenos.',
        lugar: [ 'prostata' ],
        datos: [
          {
            t: 'Inhibe de forma competitiva la acción de los andrógenos al unirse a los receptores de andrógenos del tejido diana; el cáncer de próstata es sensible a los andrógenos.',
            ref: {
              f: 'dailymed-bicalutamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It competitively inhibits the action of androgens by binding to cytosol androgen receptors in the target tissue',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Metabolismo estereoespecífico: el isómero S (inactivo) se glucuronida; el R (activo) se oxida sobre todo a un metabolito inactivo y luego se glucuronida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Metabolismo estereoespecífico: el isómero S (inactivo) se glucuronida; el R (activo) se oxida sobre todo a un metabolito inactivo y luego se glucuronida.',
          ref: { f: 'dailymed-bicalutamida', sec: '12.3 · Farmacocinética', cita: 'Bicalutamide undergoes stereospecific metabolism', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Isómero S',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-bicalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The S (inactive) isomer is metabolized primarily by glucuronidation',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Metabolito oxidado del isómero R',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-bicalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'predominantly oxidized to an inactive metabolite followed by glucuronidation',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El fármaco original y los glucurónidos se eliminan por la orina y las heces; el isómero activo tiene una semivida de 5,8 días.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El fármaco original y los glucurónidos se eliminan por la orina y las heces; el isómero activo tiene una semivida de 5,8 días.',
          ref: {
            f: 'dailymed-bicalutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Both the parent and metabolite glucuronides are eliminated in the urine and feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (enantiómero activo, dosis única)',
      valor: '31,3 ± 14,6',
      unidad: 'h',
      analito: 'enantiómero R (activo)',
      poblacion: 'varones sanos (n=30)',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-bicalutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Single Dose Time to Peak Concentration (hours) 31.3 14.6',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima (enantiómero activo, dosis única)',
      valor: '0,768 ± 0,178',
      unidad: 'µg/mL',
      analito: 'enantiómero R (activo)',
      poblacion: 'varones sanos (n=30)',
      condiciones: 'dosis única',
      ref: { f: 'dailymed-bicalutamida', sec: '12.3 · Farmacocinética', cita: 'Single Dose Peak Concentration (mcg/mL) 0.768 0.178', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida (enantiómero activo)',
      valor: '5,8 ± 2,29',
      unidad: 'días',
      analito: 'enantiómero R (activo)',
      poblacion: 'varones sanos (n=30)',
      ref: { f: 'dailymed-bicalutamida', sec: '12.3 · Farmacocinética', cita: 'Half-life (days) 5.8 2.29', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente (enantiómero activo)',
      valor: '0,320 ± 0,103',
      unidad: 'L/h',
      analito: 'enantiómero R (activo)',
      poblacion: 'varones sanos (n=30)',
      ref: { f: 'dailymed-bicalutamida', sec: '12.3 · Farmacocinética', cita: 'Apparent Oral Clearance (L/hr) 0.320 0.103', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '96',
      unidad: '%',
      analito: 'bicalutamida',
      ref: { f: 'dailymed-bicalutamida', sec: '12.3 · Farmacocinética', cita: 'Bicalutamide is highly protein-bound (96%)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bicalutamida', 'dfee4fe7-8478-4a3e-925d-00be3cd0ab67', 'CASODEX (BICALUTAMIDE) TABLET', 'CASODEX', '6', '2026-03-05', '2026-11-12'),
    rengPubchem(2375, 'bicalutamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
