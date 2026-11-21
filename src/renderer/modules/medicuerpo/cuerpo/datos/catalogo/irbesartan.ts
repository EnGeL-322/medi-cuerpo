import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'irbesartan',
    nombre: 'Irbesartán',
    clase: 'Antagonista del receptor de angiotensina II',
    sinonimos: [ 'irbesartan' ],
    formula: 'C25H28N6O',
    masaMolar: 428.5,
    smiles: 'CCCCC1=NC2(CCCC2)C(=O)N1CC3=CC=C(C=C3)C4=CC=CC=C4C5=NNN=N5',
    inchikey: 'YOSHYTLCDANDAN-UHFFFAOYSA-N',
    cid: 3749,
    iupac: '2-butyl-3-[[4-[2-(2H-tetrazol-5-yl)phenyl]phenyl]methyl]-1,3-diazaspiro[4.4]non-1-en-4-one',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'irbesartan-oral',
      producto: 'Avapro · comprimido recubierto',
      titular: 'SANOFI-AVENTIS U.S. LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hypromellose, unspecified',
        'silicon dioxide',
        'magnesium stearate',
        'titanium dioxide',
        'polyethylene glycol 3000',
        'carnauba wax'
      ],
      usos: {
        t: 'Hipertensión y nefropatía diabética en los pacientes descritos por la etiqueta.',
        ref: {
          f: 'dailymed-irbesartan',
          sec: '1 · Indicaciones',
          cita: 'Treatment of hypertension, to lower blood pressure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-irbesartan'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con irbesartán como ingrediente activo.',
    usos: 'Hipertensión y nefropatía diabética en los pacientes descritos por la etiqueta.',
    actua: 'Bloquea el receptor AT1 y reduce la señal vasoconstrictora de la angiotensina II.',
    recorrido: 'La biodisponibilidad absoluta media es del 60–80 %. El pico plasmático llega en 1,5 a 2 horas. Sale por vía biliar y renal. En los estudios radiomarcados, cerca del 20 % se recuperó en orina y el resto en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Avapro se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Avapro se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-irbesartan',
            sec: '3 · Forma farmacéutica',
            cita: 'oval, film-coated tablet debossed with a heart',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad absoluta media es del 60–80 %. El pico plasmático llega en 1,5 a 2 horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 60–80 %. El pico plasmático llega en 1,5 a 2 horas.',
          ref: { f: 'dailymed-irbesartan', sec: '12.3 · Farmacocinética', cita: 'absolute bioavailability of 60% to 80%', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 90 % se une a proteínas séricas, principalmente albúmina y glucoproteína ácida alfa-1.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 90 % se une a proteínas séricas, principalmente albúmina y glucoproteína ácida alfa-1.',
          ref: { f: 'dailymed-irbesartan', sec: '12.3 · Farmacocinética', cita: '90% bound to serum proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor AT1 de angiotensina II',
        efecto: 'Bloquea el receptor AT1 y reduce la señal vasoconstrictora de la angiotensina II.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Bloquea el receptor AT1 y reduce la señal vasoconstrictora de la angiotensina II.',
            ref: { f: 'dailymed-irbesartan', sec: '12.1 · Mecanismo', cita: 'blocks the vasoconstrictor and aldosterone', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Es activo por sí mismo. Se transforma por conjugación y oxidación, formando entre otros un glucurónido inactivo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Es activo por sí mismo. Se transforma por conjugación y oxidación, formando entre otros un glucurónido inactivo.',
          ref: {
            f: 'dailymed-irbesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'the inactive irbesartan glucuronide conjugate',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de irbesartán',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-irbesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'the inactive irbesartan glucuronide conjugate',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'rinones', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Sale por vía biliar y renal. En los estudios radiomarcados, cerca del 20 % se recuperó en orina y el resto en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Sale por vía biliar y renal. En los estudios radiomarcados, cerca del 20 % se recuperó en orina y el resto en heces.',
          ref: { f: 'dailymed-irbesartan', sec: '12.3 · Farmacocinética', cita: 'excreted by both biliary and renal routes', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-irbesartan', '7885b2a8-be4e-48ab-8113-4e6ab791eb98', 'AVAPRO (IRBESARTAN) TABLET, FILM COATED', 'Avapro', '22', '2026-08-31', '2026-11-10'),
    rengPubchem(3749, 'irbesartan', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
