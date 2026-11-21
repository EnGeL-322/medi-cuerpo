import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'alfuzosina',
    nombre: 'Alfuzosina',
    clase: 'Antagonista adrenérgico alfa-1',
    sinonimos: [ 'alfuzosin' ],
    formula: 'C19H27N5O4',
    masaMolar: 389.4,
    smiles: 'CN(CCCNC(=O)C1CCCO1)C2=NC3=CC(=C(C=C3C(=N2)N)OC)OC',
    inchikey: 'WNMJYKCGWZFFKR-UHFFFAOYSA-N',
    cid: 2092,
    iupac: 'N-[3-[(4-amino-6,7-dimethoxyquinazolin-2-yl)-methylamino]propyl]oxolane-2-carboxamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'alfuzosina-oral',
      producto: 'Uroxatral · comprimido de liberación prolongada',
      titular: 'ADVANZ PHARMA (US) CORP.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '10 mg',
      excipientes: [
        'silicon dioxide',
        'ethylcellulose (100 mpa.s)',
        'hydrogenated castor oil',
        'hypromelloses',
        'magnesium stearate',
        'mannitol',
        'cellulose, microcrystalline',
        'povidone, unspecified',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Signos y síntomas de hiperplasia prostática benigna.',
        ref: {
          f: 'dailymed-alfuzosina',
          sec: '1 · Indicaciones',
          cita: 'signs and symptoms of benign prostatic hyperplasia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-alfuzosina',
      sal: {
        nombre: 'clorhidrato de alfuzosina',
        ref: { f: 'dailymed-alfuzosina', sec: '11 · Descripción', cita: 'alfuzosin hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada oral con clorhidrato de alfuzosina como ingrediente activo.',
    usos: 'Signos y síntomas de hiperplasia prostática benigna.',
    actua: 'Bloquea receptores alfa-1 en la próstata y el cuello vesical, donde reduce el tono del músculo liso.',
    recorrido: 'Con alimentos, la biodisponibilidad absoluta del comprimido fue del 49 %. La absorción fue menor en ayunas. La etiqueta indica que alrededor del 11 % de la dosis se excreta sin cambios en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Uroxatral se presenta como comprimido de liberación prolongada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Uroxatral se presenta como comprimido de liberación prolongada para administración oral.',
          ref: {
            f: 'dailymed-alfuzosina',
            sec: '3 · Forma farmacéutica',
            cita: 'HCl) extended-release tablet 10 mg is available',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Con alimentos, la biodisponibilidad absoluta del comprimido fue del 49 %. La absorción fue menor en ayunas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Con alimentos, la biodisponibilidad absoluta del comprimido fue del 49 %. La absorción fue menor en ayunas.',
          ref: { f: 'dailymed-alfuzosina', sec: '12.3 · Farmacocinética', cita: 'under fed conditions is 49%', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En ensayos in vitro, entre el 82 % y el 90 % se unió a proteínas plasmáticas humanas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En ensayos in vitro, entre el 82 % y el 90 % se unió a proteínas plasmáticas humanas.',
          ref: { f: 'dailymed-alfuzosina', sec: '12.3 · Farmacocinética', cita: 'moderately bound to human plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores adrenérgicos alfa-1',
        efecto: 'Bloquea receptores alfa-1 en la próstata y el cuello vesical, donde reduce el tono del músculo liso.',
        lugar: [ 'prostata', 'vejiga' ],
        datos: [
          {
            t: 'Bloquea receptores alfa-1 en la próstata y el cuello vesical, donde reduce el tono del músculo liso.',
            ref: { f: 'dailymed-alfuzosina', sec: '12.1 · Mecanismo', cita: 'selective antagonist of post-synaptic', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El hígado la transforma por oxidación y otras vías. CYP3A4 es la enzima hepática principal.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El hígado la transforma por oxidación y otras vías. CYP3A4 es la enzima hepática principal.',
          ref: { f: 'dailymed-alfuzosina', sec: '12.3 · Farmacocinética', cita: 'principal hepatic enzyme isoform involved', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La etiqueta indica que alrededor del 11 % de la dosis se excreta sin cambios en la orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La etiqueta indica que alrededor del 11 % de la dosis se excreta sin cambios en la orina.',
          ref: { f: 'dailymed-alfuzosina', sec: '12.3 · Farmacocinética', cita: 'excreted unchanged in the urine', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-alfuzosina', '9fc7f119-f36b-44cf-945d-940160f3afe3', 'UROXATRAL (ALFUZOSIN HCL) TABLET, EXTENDED RELEASE', 'Uroxatral', '9', '2025-01-03', '2026-11-10'),
    rengPubchem(2092, 'alfuzosin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
