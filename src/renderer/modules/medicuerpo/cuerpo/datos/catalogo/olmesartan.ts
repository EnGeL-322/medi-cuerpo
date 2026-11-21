import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'olmesartan',
    nombre: 'Olmesartán medoxomilo',
    clase: 'Antagonista de angiotensina II (profármaco)',
    sinonimos: [ 'olmesartan medoxomil' ],
    formula: 'C29H30N6O6',
    masaMolar: 558.6,
    smiles: 'CCCC1=NC(=C(N1CC2=CC=C(C=C2)C3=CC=CC=C3C4=NNN=N4)C(=O)OCC5=C(OC(=O)O5)C)C(C)(C)O',
    inchikey: 'UQGKUQLKSCSZGY-UHFFFAOYSA-N',
    cid: 130881,
    iupac: '(5-methyl-2-oxo-1,3-dioxol-4-yl)methyl 5-(2-hydroxypropan-2-yl)-2-propyl-3-[[4-[2-(2H-tetrazol-5-yl)phenyl]phenyl]methyl]imidazole-4-carboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'olmesartan-oral',
      producto: 'Benicar · comprimido recubierto',
      titular: 'COSETTE PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Hipertensión arterial en adultos y en las edades pediátricas indicadas por la etiqueta.',
        ref: { f: 'dailymed-olmesartan', sec: '1 · Indicaciones', cita: 'indicated for the treatment of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-olmesartan'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con olmesartán medoxomilo como ingrediente activo.',
    usos: 'Hipertensión arterial en adultos y en las edades pediátricas indicadas por la etiqueta.',
    actua: 'El olmesartán bloquea la señal vasoconstrictora de la angiotensina II.',
    recorrido: 'La biodisponibilidad absoluta del olmesartán formado tras la toma ronda el 26 %. Entre el 35 % y el 50 % de la fracción absorbida se recupera en orina. El resto se elimina en heces por vía biliar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Benicar se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Benicar se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-olmesartan',
            sec: '3 · Forma farmacéutica',
            cita: 'film-coated, non-scored tablets debossed with C12 on',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad absoluta del olmesartán formado tras la toma ronda el 26 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta del olmesartán formado tras la toma ronda el 26 %.',
          ref: {
            f: 'dailymed-olmesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability of olmesartan is approximately 26%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Cerca del 99 % se une a proteínas plasmáticas. No penetra en los glóbulos rojos.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Cerca del 99 % se une a proteínas plasmáticas. No penetra en los glóbulos rojos.',
          ref: {
            f: 'dailymed-olmesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'Olmesartan is highly bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor AT1 de angiotensina II',
        efecto: 'El olmesartán bloquea la señal vasoconstrictora de la angiotensina II.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'El olmesartán bloquea la señal vasoconstrictora de la angiotensina II.',
            ref: {
              f: 'dailymed-olmesartan',
              sec: '12.1 · Mecanismo',
              cita: 'blocks the vasoconstrictor effects of angiotensin II',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Durante la absorción se convierte de forma rápida y completa a olmesartán. Este apenas se transforma más.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Durante la absorción se convierte de forma rápida y completa a olmesartán. Este apenas se transforma más.',
          ref: {
            f: 'dailymed-olmesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'virtually no further metabolism of olmesartan',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Entre el 35 % y el 50 % de la fracción absorbida se recupera en orina. El resto se elimina en heces por vía biliar.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Entre el 35 % y el 50 % de la fracción absorbida se recupera en orina. El resto se elimina en heces por vía biliar.',
          ref: { f: 'dailymed-olmesartan', sec: '12.3 · Farmacocinética', cita: 'is eliminated in feces via the bile', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-olmesartan', 'dc3f1fd4-5578-4c5d-be7b-12e3f8f3e7df', 'BENICAR (OLMESARTAN MEDOXOMIL) TABLET, FILM COATED', 'Benicar', '1', '2025-09-25', '2026-11-10'),
    rengPubchem(130881, 'olmesartan medoxomil', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
