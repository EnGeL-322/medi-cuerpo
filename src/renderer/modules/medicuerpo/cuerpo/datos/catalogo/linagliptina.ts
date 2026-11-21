import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'linagliptina',
    nombre: 'Linagliptina',
    clase: 'Inhibidor de DPP-4',
    sinonimos: [ 'linagliptin' ],
    formula: 'C25H28N8O2',
    masaMolar: 472.5,
    smiles: 'CC#CCN1C2=C(N=C1N3CCC[C@H](C3)N)N(C(=O)N(C2=O)CC4=NC5=CC=CC=C5C(=N4)C)C',
    inchikey: 'LTXREWYXXSTFRX-QGZVFWFLSA-N',
    cid: 10096344,
    iupac: '8-[(3R)-3-aminopiperidin-1-yl]-7-but-2-ynyl-3-methyl-1-[(4-methylquinazolin-2-yl)methyl]purine-2,6-dione',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'linagliptina-oral',
      producto: 'Tradjenta · comprimido recubierto',
      titular: 'BOEHRINGER INGELHEIM PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'copovidone',
        'corn starch',
        'magnesium stearate',
        'mannitol',
        'pregelatinized starch',
        'hypromellose',
        'polyethylene glycol',
        'red ferric oxide',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Control glucémico en adultos con diabetes tipo 2 según la etiqueta.',
        ref: { f: 'dailymed-linagliptina', sec: '1 · Indicaciones', cita: 'improve glycemic control in adults', codigo: '34067-9' }
      },
      fuente: 'dailymed-linagliptina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con linagliptina como ingrediente activo.',
    usos: 'Control glucémico en adultos con diabetes tipo 2 según la etiqueta.',
    actua: 'Inhibe DPP-4. Al conservar activas las incretinas, favorece la liberación de insulina dependiente de glucosa y reduce el glucagón.',
    recorrido: 'La biodisponibilidad absoluta oral es cercana al 30 %. La etiqueta registra recuperación principalmente por vía enterohepática. En el estudio radiomarcado, un 5 % apareció en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Tradjenta se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Tradjenta se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-linagliptina',
            sec: '3 · Forma farmacéutica',
            cita: 'bevel-edged, film-coated tablets with "D5" debossed on',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad absoluta oral es cercana al 30 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta oral es cercana al 30 %.',
          ref: {
            f: 'dailymed-linagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability of linagliptin is approximately 30%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Su unión a proteínas plasmáticas varía con la concentración, en parte por saturación de la unión a DPP-4.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Su unión a proteínas plasmáticas varía con la concentración, en parte por saturación de la unión a DPP-4.',
          ref: {
            f: 'dailymed-linagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of linagliptin is concentration-dependent',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Dipeptidil peptidasa 4',
        efecto: 'Inhibe DPP-4. Al conservar activas las incretinas, favorece la liberación de insulina dependiente de glucosa y reduce el glucagón.',
        lugar: [ 'pancreas' ],
        datos: [
          {
            t: 'Inhibe DPP-4. Al conservar activas las incretinas, favorece la liberación de insulina dependiente de glucosa y reduce el glucagón.',
            ref: {
              f: 'dailymed-linagliptina',
              sec: '12.1 · Mecanismo',
              cita: 'stimulating the release of insulin in a glucose-dependent manner',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El metabolismo es una vía menor. Una pequeña parte del fármaco absorbido forma un metabolito inactivo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El metabolismo es una vía menor. Una pequeña parte del fármaco absorbido forma un metabolito inactivo.',
          ref: { f: 'dailymed-linagliptina', sec: '12.3 · Farmacocinética', cita: 'pharmacologically inactive metabolite', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La etiqueta registra recuperación principalmente por vía enterohepática. En el estudio radiomarcado, un 5 % apareció en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La etiqueta registra recuperación principalmente por vía enterohepática. En el estudio radiomarcado, un 5 % apareció en orina.',
          ref: {
            f: 'dailymed-linagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'enterohepatic system (80%) or urine (5%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-linagliptina', 'c797ea5c-cab7-494b-9044-27eba0cfe40f', 'TRADJENTA (LINAGLIPTIN) TABLET, FILM COATED', 'Tradjenta', '32', '2025-03-27', '2026-11-10'),
    rengPubchem(10096344, 'linagliptin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
