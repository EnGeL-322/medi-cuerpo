import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'suvorexant',
    nombre: 'Suvorexant',
    clase: 'Antagonista de los receptores de orexina',
    sinonimos: [ 'suvorexant', 'Belsomra' ],
    formula: 'C23H23ClN6O2',
    masaMolar: 450.9,
    smiles: 'C[C@@H]1CCN(CCN1C(=O)C2=C(C=CC(=C2)C)N3N=CC=N3)C4=NC5=C(O4)C=CC(=C5)Cl',
    inchikey: 'JYTNQNCOQXFQPK-MRXNPFEDSA-N',
    cid: 24965990,
    iupac: '[(7R)-4-(5-chloro-1,3-benzoxazol-2-yl)-7-methyl-1,4-diazepan-1-yl]-[5-methyl-2-(triazol-2-yl)phenyl]methanone',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'suvorexant-oral',
      producto: 'BELSOMRA · comprimido recubierto con película',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 10 mg, 15 mg o 20 mg por comprimido, según la etiqueta',
      excipientes: [
        'copovidone k25-31',
        'microcrystalline cellulose',
        'lactose monohydrate',
        'croscarmellose sodium',
        'magnesium stearate',
        'titanium dioxide',
        'triacetin',
        'hypromellose, unspecified',
        'ferrosoferric oxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Insomnio con dificultad para conciliar o mantener el sueño.',
        ref: {
          f: 'dailymed-suvorexant',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of insomnia characterized by difficulties with sleep onset and/or sleep maintenance',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-suvorexant',
      advertencias: [
        {
          titulo: 'Efectos depresores al día siguiente',
          texto: 'Es un depresor del sistema nervioso central y puede afectar a la vigilia durante el día aunque se use como se indica.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-suvorexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'BELSOMRA is a central nervous system (CNS) depressant that can impair daytime wakefulness even when used as prescribed',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [ 'La reacción más frecuente (≥ 5 % y el doble que con placebo) fue la somnolencia.', '34084-4', 'with BELSOMRA was somnolence' ],
        [ 'Datos de ensayos de eficacia controlados de 3 meses.', '34084-4', 'In 3-month controlled efficacy trials' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg, 10 mg, 15 mg o 20 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Insomnio con dificultad para conciliar o mantener el sueño.',
    actua: 'Bloquea los receptores de orexina OX1R y OX2R: impide que las orexinas A y B, que favorecen la vigilia, se unan, lo que reduce el impulso a estar despierto.',
    recorrido: 'El pico llega a una mediana de 2 horas en ayunas y la biodisponibilidad absoluta de 10 mg es del 82 %; una comida rica en grasa retrasa el pico 1,5 horas. Sale sobre todo por las heces (66 % de una dosis marcada) y en menor medida por la orina (23 %).'
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
          ref: { f: 'dailymed-suvorexant', sec: '3 · Formas y concentraciones', cita: 'round, film-coated tablets with "5" on one side', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El pico llega a una mediana de 2 horas en ayunas y la biodisponibilidad absoluta de 10 mg es del 82 %; una comida rica en grasa retrasa el pico 1,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico llega a una mediana de 2 horas en ayunas y la biodisponibilidad absoluta de 10 mg es del 82 %; una comida rica en grasa retrasa el pico 1,5 horas.',
          ref: { f: 'dailymed-suvorexant', sec: '12.3 · Farmacocinética', cita: 'The mean absolute bioavailability of 10 mg is 82%', codigo: '43682-4' }
        },
        {
          t: 'Pico a una mediana de 2 horas en ayunas.',
          ref: {
            f: 'dailymed-suvorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Suvorexant peak concentrations occur at a median T max of 2 hours',
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
      ocurre: 'Se une en más del 99 % a proteínas del plasma; su volumen de distribución ronda los 49 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a proteínas del plasma; su volumen de distribución ronda los 49 L.',
          ref: {
            f: 'dailymed-suvorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Suvorexant is extensively bound (>99%) to human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de orexina OX1R y OX2R',
        efecto: 'Bloquea los receptores de orexina OX1R y OX2R: impide que las orexinas A y B, que favorecen la vigilia, se unan, lo que reduce el impulso a estar despierto.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Bloquea los receptores de orexina OX1R y OX2R: impide que las orexinas A y B, que favorecen la vigilia, se unan, lo que reduce el impulso a estar despierto.',
            ref: {
              f: 'dailymed-suvorexant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Blocking the binding of wake-promoting neuropeptides orexin A and orexin B to receptors OX1R and OX2R is thought to suppress wake drive',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo, principalmente por CYP3A; su metabolito hidroxi-suvorexant no se espera que sea activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo, principalmente por CYP3A; su metabolito hidroxi-suvorexant no se espera que sea activo.',
          ref: {
            f: 'dailymed-suvorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Suvorexant is mainly eliminated by metabolism, primarily by CYP3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidroxi-suvorexant',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-suvorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'This metabolite is not expected to be pharmacologically active',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por las heces (66 % de una dosis marcada) y en menor medida por la orina (23 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por las heces (66 % de una dosis marcada) y en menor medida por la orina (23 %).',
          ref: {
            f: 'dailymed-suvorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 66% of radiolabeled dose recovered in the feces compared to 23% in the urine',
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
      valor: '2 (0,5-6)',
      unidad: 'h',
      analito: 'suvorexant',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-suvorexant',
        sec: '12.3 · Farmacocinética',
        cita: 'at a median T max of 2 hours (range 30 minutes to 6 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (10 mg)',
      valor: '82',
      unidad: '%',
      analito: 'suvorexant',
      ref: { f: 'dailymed-suvorexant', sec: '12.3 · Farmacocinética', cita: 'The mean absolute bioavailability of 10 mg is 82%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '49 (aprox.)',
      unidad: 'L',
      analito: 'suvorexant',
      ref: {
        f: 'dailymed-suvorexant',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution of suvorexant is approximately 49 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'suvorexant',
      ref: { f: 'dailymed-suvorexant', sec: '12.3 · Farmacocinética', cita: 'is extensively bound (>99%) to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '66 (aprox.)',
      unidad: '% de la dosis',
      analito: 'suvorexant y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-suvorexant',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 66% of radiolabeled dose recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-suvorexant', 'e5b72731-1acb-45b7-9c13-290ad12d3951', 'BELSOMRA (SUVOREXANT) TABLET, FILM COATED', 'BELSOMRA', '21', '2025-03-24', '2026-11-12'),
    rengPubchem(24965990, 'suvorexant', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
