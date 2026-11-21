import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'candesartan',
    nombre: 'Candesartán cilexetilo',
    clase: 'Antagonista de angiotensina II (profármaco)',
    sinonimos: [ 'candesartan cilexetil' ],
    formula: 'C33H34N6O6',
    masaMolar: 610.7,
    smiles: 'CCOC1=NC2=CC=CC(=C2N1CC3=CC=C(C=C3)C4=CC=CC=C4C5=NNN=N5)C(=O)OC(C)OC(=O)OC6CCCCC6',
    inchikey: 'GHOSNRCGJFBJIB-UHFFFAOYSA-N',
    cid: 2540,
    iupac: '1-cyclohexyloxycarbonyloxyethyl 2-ethoxy-3-[[4-[2-(2H-tetrazol-5-yl)phenyl]phenyl]methyl]benzimidazole-4-carboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'candesartan-oral',
      producto: 'ATACAND · comprimido',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '4 mg',
      excipientes: [
        'hydroxypropyl cellulose, unspecified',
        'lactose monohydrate',
        'starch, corn',
        'carboxymethylcellulose calcium',
        'magnesium stearate',
        'polyethylene glycol 8000'
      ],
      usos: {
        t: 'Hipertensión y determinadas formas de insuficiencia cardíaca según la etiqueta.',
        ref: { f: 'dailymed-candesartan', sec: '1 · Indicaciones', cita: 'Treatment of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-candesartan'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con candesartán cilexetilo como ingrediente activo.',
    usos: 'Hipertensión y determinadas formas de insuficiencia cardíaca según la etiqueta.',
    actua: 'El candesartán formado a partir del profármaco bloquea la señal vasoconstrictora de angiotensina II.',
    recorrido: 'Después del comprimido de cilexetilo, se estimó una biodisponibilidad absoluta del 15 % para el candesartán. Se elimina principalmente como candesartán sin modificar por orina y heces, con contribución biliar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'ATACAND se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'ATACAND se presenta como comprimido para administración oral.',
          ref: { f: 'dailymed-candesartan', sec: '3 · Forma farmacéutica', cita: 'the other. Tablets 4 mg, 8 mg,', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Después del comprimido de cilexetilo, se estimó una biodisponibilidad absoluta del 15 % para el candesartán.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Después del comprimido de cilexetilo, se estimó una biodisponibilidad absoluta del 15 % para el candesartán.',
          ref: {
            f: 'dailymed-candesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability of candesartan was estimated to be 15%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'El candesartán se une en más del 99 % a proteínas plasmáticas y no penetra en los glóbulos rojos.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El candesartán se une en más del 99 % a proteínas plasmáticas y no penetra en los glóbulos rojos.',
          ref: { f: 'dailymed-candesartan', sec: '12.3 · Farmacocinética', cita: 'highly bound to plasma proteins (>99%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor AT1 de angiotensina II',
        efecto: 'El candesartán formado a partir del profármaco bloquea la señal vasoconstrictora de angiotensina II.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'El candesartán formado a partir del profármaco bloquea la señal vasoconstrictora de angiotensina II.',
            ref: { f: 'dailymed-candesartan', sec: '12.1 · Mecanismo', cita: 'Candesartan blocks the vasoconstrictor', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El profármaco se convierte en candesartán. Una fracción menor de este se transforma después en un metabolito inactivo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El profármaco se convierte en candesartán. Una fracción menor de este se transforma después en un metabolito inactivo.',
          ref: {
            f: 'dailymed-candesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'minor hepatic metabolism by O-deethylation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'heces', 'bilis' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Se elimina principalmente como candesartán sin modificar por orina y heces, con contribución biliar.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Se elimina principalmente como candesartán sin modificar por orina y heces, con contribución biliar.',
          ref: {
            f: 'dailymed-candesartan',
            sec: '12.3 · Farmacocinética',
            cita: 'mainly excreted unchanged in urine and feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-candesartan', '94a59260-d2b6-464a-b5b9-bbc599e57e10', 'ATACAND (CANDESARTAN CILEXETIL) TABLET', 'ATACAND', '5', '2025-12-23', '2026-11-10'),
    rengPubchem(2540, 'candesartan cilexetil', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
