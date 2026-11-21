import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mefloquina',
    nombre: 'Mefloquina',
    clase: 'Antipalúdico (4-quinolinometanol)',
    sinonimos: [ 'mefloquine', 'Lariam' ],
    formula: 'C17H16F6N2O',
    masaMolar: 378.31,
    smiles: 'C1CCNC(C1)C(C2=CC(=NC3=C2C=CC=C3C(F)(F)F)C(F)(F)F)O',
    inchikey: 'XEEQGYMUWCZPDN-UHFFFAOYSA-N',
    cid: 4046,
    iupac: '[2,8-bis(trifluoromethyl)quinolin-4-yl]-piperidin-2-ylmethanol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'mefloquina-oral',
      producto: 'Mefloquine Hydrochloride · comprimido',
      titular: 'TEVA PHARMACEUTICALS USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250 mg de clorhidrato de mefloquina por comprimido (equivalentes a 228 mg de base)',
      sal: {
        nombre: 'Clorhidrato de mefloquina',
        ref: {
          f: 'dailymed-mefloquina',
          sec: '11 · Descripción',
          cita: '250 mg tablets of mefloquine hydrochloride (equivalent to 228 mg of the free base)',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'silicon dioxide',
        'starch, corn',
        'crospovidone (15 mpa.s at 5%)',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'poloxamer 188',
        'talc'
      ],
      usos: {
        t: 'Tratamiento de la malaria aguda leve o moderada por cepas sensibles y prevención de la malaria.',
        ref: {
          f: 'dailymed-mefloquina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of mild to moderate acute malaria caused by mefloquine-susceptible strains of P. falciparum',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mefloquina',
      advertencias: [
        {
          titulo: 'Efectos neuropsiquiátricos',
          texto: 'Puede causar reacciones neuropsiquiátricas que persisten tras dejarla; no se usa como prevención si hay trastornos psiquiátricos graves.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-mefloquina',
            sec: 'Advertencia destacada',
            cita: 'Mefloquine may cause neuropsychiatric adverse reactions that can persist after mefloquine has been discontinued',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'En la prevención, el efecto adverso más observado fueron los vómitos (3 %); también mareo, síncope y extrasístoles en menos del 1 %.',
          '34084-4',
          'most frequently observed adverse experience was vomiting (3%)'
        ],
        [
          'Mareo, síncope y extrasístoles en menos del 1 %.',
          '34084-4',
          'Dizziness, syncope, extrasystoles and other complaints affecting less than 1% were also reported'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 250 mg de clorhidrato de mefloquina por comprimido (equivalentes a 228 mg de base). Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la malaria aguda leve o moderada por cepas sensibles y prevención de la malaria.',
    actua: 'Actúa como esquizonticida sanguíneo: es activa frente a las formas del parásito que están en los glóbulos rojos, no frente a las del hígado. Su mecanismo exacto se desconoce.',
    recorrido: 'La biodisponibilidad del comprimido frente a una solución supera el 85 % y la comida la aumenta un 40 %; el pico llega entre 6 y 24 horas (mediana de unas 17). Sale sobre todo por la bilis y las heces; en estado estacionario, la orina contiene un 9 % de mefloquina sin cambios y un 4 % del metabolito. Su semivida media ronda las 3 semanas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 250 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 250 mg.',
          ref: { f: 'dailymed-mefloquina', sec: '11 · Descripción', cita: 'available as 250 mg tablets of mefloquine hydrochloride', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad del comprimido frente a una solución supera el 85 % y la comida la aumenta un 40 %; el pico llega entre 6 y 24 horas (mediana de unas 17).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad del comprimido frente a una solución supera el 85 % y la comida la aumenta un 40 %; el pico llega entre 6 y 24 horas (mediana de unas 17).',
          ref: {
            f: 'dailymed-mefloquina',
            sec: '12 · Farmacología clínica',
            cita: 'In healthy volunteers, plasma concentrations peak 6 to 24 hours (median, about 17 hours) after a single dose of mefloquine',
            codigo: '34090-1'
          }
        },
        {
          t: 'La comida aumenta la biodisponibilidad alrededor de un 40 %.',
          ref: { f: 'dailymed-mefloquina', sec: '12 · Farmacología clínica', cita: 'leading to about a 40% increase in bioavailability', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte mucho por los tejidos (unos 20 L/kg) y el 98 % se une a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte mucho por los tejidos (unos 20 L/kg) y el 98 % se une a proteínas.',
          ref: {
            f: 'dailymed-mefloquina',
            sec: '12 · Farmacología clínica',
            cita: 'the apparent volume of distribution is approximately 20 L/kg, indicating extensive tissue distribution',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Formas sanguíneas de Plasmodium',
        efecto: 'Actúa como esquizonticida sanguíneo: es activa frente a las formas del parásito que están en los glóbulos rojos, no frente a las del hígado. Su mecanismo exacto se desconoce.',
        lugar: [ 'sangre', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Actúa como esquizonticida sanguíneo: es activa frente a las formas del parásito que están en los glóbulos rojos, no frente a las del hígado. Su mecanismo exacto se desconoce.',
            ref: {
              f: 'dailymed-mefloquina',
              sec: '12 · Farmacología clínica',
              cita: 'Mefloquine is an antimalarial agent which acts as a blood schizonticide',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado la metaboliza ampliamente (sobre todo CYP3A4); su metabolito principal, un ácido carboxílico, es inactivo frente a P. falciparum.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado la metaboliza ampliamente (sobre todo CYP3A4); su metabolito principal, un ácido carboxílico, es inactivo frente a P. falciparum.',
          ref: {
            f: 'dailymed-mefloquina',
            sec: '12 · Farmacología clínica',
            cita: 'Mefloquine is extensively metabolized in the liver by the cytochrome P450 system',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido 2,8-bis-trifluorometil-4-quinolincarboxílico',
          actividad: 'inactivo',
          nota: 'Metabolito principal; su AUC es 3-5 veces la de la mefloquina.',
          ref: { f: 'dailymed-mefloquina', sec: '12 · Farmacología clínica', cita: 'is inactive in Plasmodium falciparum', codigo: '34090-1' }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por la bilis y las heces; en estado estacionario, la orina contiene un 9 % de mefloquina sin cambios y un 4 % del metabolito. Su semivida media ronda las 3 semanas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por la bilis y las heces; en estado estacionario, la orina contiene un 9 % de mefloquina sin cambios y un 4 % del metabolito. Su semivida media ronda las 3 semanas.',
          ref: {
            f: 'dailymed-mefloquina',
            sec: '12 · Farmacología clínica',
            cita: 'There is evidence that mefloquine is excreted mainly in the bile and feces',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (mediana)',
      valor: '17 (6-24)',
      unidad: 'h',
      analito: 'mefloquina',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-mefloquina',
        sec: '12 · Farmacología clínica',
        cita: 'plasma concentrations peak 6 to 24 hours (median, about 17 hours)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '20 (aprox.)',
      unidad: 'L/kg',
      analito: 'mefloquina',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-mefloquina',
        sec: '12 · Farmacología clínica',
        cita: 'the apparent volume of distribution is approximately 20 L/kg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'mefloquina',
      ref: { f: 'dailymed-mefloquina', sec: '12 · Farmacología clínica', cita: 'Protein binding is about 98%', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '2-4 (media de 3)',
      unidad: 'semanas',
      analito: 'mefloquina',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-mefloquina',
        sec: '12 · Farmacología clínica',
        cita: 'the mean elimination half-life of mefloquine varied between 2 and 4 weeks',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la biodisponibilidad con comida',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'mefloquina',
      ref: { f: 'dailymed-mefloquina', sec: '12 · Farmacología clínica', cita: 'leading to about a 40% increase in bioavailability', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mefloquina', '09716a24-d7da-42b2-af29-c03a1b6670bd', 'MEFLOQUINE HYDROCHLORIDE TABLET', 'Mefloquine Hydrochloride', '13', '2026-02-04', '2026-11-12'),
    rengPubchem(4046, 'mefloquine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
