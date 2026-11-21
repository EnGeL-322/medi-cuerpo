import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bupropion',
    nombre: 'Bupropión',
    clase: 'Antidepresivo noradrenérgico y dopaminérgico',
    sinonimos: [ 'bupropion' ],
    formula: 'C13H18ClNO',
    masaMolar: 239.74,
    smiles: 'CC(C(=O)C1=CC(=CC=C1)Cl)NC(C)(C)C',
    inchikey: 'SNPPWIUOZRMYNY-UHFFFAOYSA-N',
    cid: 444,
    iupac: '2-(tert-butylamino)-1-(3-chlorophenyl)propan-1-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'bupropion-oral',
      producto: 'WELLBUTRIN XL · comprimido de liberación prolongada',
      titular: 'BAUSCH HEALTH US LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '150 mg',
      sal: {
        nombre: 'clorhidrato de bupropión',
        ref: { f: 'dailymed-bupropion', sec: '3 · Forma farmacéutica', cita: 'bupropion hydrochloride' }
      },
      excipientes: [
        'ethylcellulose, unspecified',
        'glyceryl dibehenate',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'povidone, unspecified',
        'silicon dioxide',
        'triethyl citrate',
        'methacrylic acid - methyl methacrylate copolymer (1:1)'
      ],
      usos: {
        t: 'Depresión mayor y prevención de episodios depresivos estacionales, según la etiqueta de WELLBUTRIN XL.',
        ref: { f: 'dailymed-bupropion', sec: '1 · Indicaciones', cita: 'treatment of major depressive disorder' }
      },
      fuente: 'dailymed-bupropion'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada de clorhidrato de bupropión para administración oral.',
    usos: 'Depresión mayor y prevención de episodios depresivos estacionales, según la etiqueta de WELLBUTRIN XL.',
    actua: 'Inhibe débilmente la recaptación neuronal de noradrenalina y dopamina. La contribución exacta al efecto antidepresivo no se conoce.',
    recorrido: 'En voluntarios sanos, el pico plasmático mediano llegó cerca de las cinco horas tras tomar el comprimido XL. Con bupropión radiomarcado por vía oral, se recuperó el 87 % de la radiactividad en orina y el 10 % en heces. Solo el 0,5 % salió como bupropión sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere WELLBUTRIN XL por vía oral.',
      ocurre: 'La presentación XL es un comprimido de liberación prolongada. La etiqueta distingue este producto de las formulaciones de liberación inmediata.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación XL es un comprimido de liberación prolongada. La etiqueta distingue este producto de las formulaciones de liberación inmediata.',
          ref: { f: 'dailymed-bupropion', sec: 'Información complementaria', cita: 'the immediate-release formulation of bupropion' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En voluntarios sanos, el pico plasmático mediano llegó cerca de las cinco horas tras tomar el comprimido XL.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En voluntarios sanos, el pico plasmático mediano llegó cerca de las cinco horas tras tomar el comprimido XL.',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'was approximately 5 hours' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'En ensayos in vitro, el bupropión se unió en un 84 % a proteínas plasmáticas humanas. El hidroxibupropión tuvo una unión parecida.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'En ensayos in vitro, el bupropión se unió en un 84 % a proteínas plasmáticas humanas. El hidroxibupropión tuvo una unión parecida.',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: '84% bound to human plasma proteins' },
          condiciones: 'Ensayo in vitro'
        }
      ],
      accion: {
        diana: 'Recaptación neuronal de noradrenalina y dopamina',
        efecto: 'Inhibe débilmente la recaptación neuronal de noradrenalina y dopamina. La contribución exacta al efecto antidepresivo no se conoce.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Inhibe débilmente la recaptación neuronal de noradrenalina y dopamina. La contribución exacta al efecto antidepresivo no se conoce.',
            ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'neuronal uptake of norepinephrine and dopamine' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'El metabolismo forma tres productos activos. CYP2B6 participa en la formación de hidroxibupropión.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'El metabolismo forma tres productos activos. CYP2B6 participa en la formación de hidroxibupropión.',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'Three metabolites are active' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidroxibupropión',
          actividad: 'activo',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'Three metabolites are active' }
        },
        {
          nombre: 'Treohidrobupropión',
          actividad: 'activo',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'Three metabolites are active' }
        },
        {
          nombre: 'Eritrohidrobupropión',
          actividad: 'activo',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'Three metabolites are active' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Con bupropión radiomarcado por vía oral, se recuperó el 87 % de la radiactividad en orina y el 10 % en heces. Solo el 0,5 % salió como bupropión sin cambios.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Con bupropión radiomarcado por vía oral, se recuperó el 87 % de la radiactividad en orina y el 10 % en heces. Solo el 0,5 % salió como bupropión sin cambios.',
          ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'recovered in the urine and feces' },
          condiciones: 'Estudio con bupropión radiomarcado'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo mediano hasta el pico',
      valor: '5',
      unidad: 'h',
      poblacion: 'Voluntarios sanos',
      condiciones: 'Administración única de WELLBUTRIN XL',
      ref: { f: 'dailymed-bupropion', sec: '12 · Farmacología clínica', cita: 'was approximately 5 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bupropion', 'a435da9d-f6e8-4ddc-897d-8cd2bf777b21', 'WELLBUTRIN XL (BUPROPION HYDROCHLORIDE) TABLET, EXTENDED RELEASE', 'WELLBUTRIN XL', '27', '2026-02-06', '2026-11-10'),
    rengPubchem(444, 'bupropion', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
