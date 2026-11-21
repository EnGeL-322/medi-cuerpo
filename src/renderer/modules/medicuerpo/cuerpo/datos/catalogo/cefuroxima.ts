import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cefuroxima',
    nombre: 'Cefuroxima axetilo',
    clase: 'Cefalosporina oral (profármaco)',
    sinonimos: [ 'cefuroxime axetil' ],
    formula: 'C20H22N4O10S',
    masaMolar: 510.5,
    smiles: 'CC(OC(=O)C)OC(=O)C1=C(CS[C@H]2N1C(=O)[C@H]2NC(=O)/C(=N\\OC)/C3=CC=CO3)COC(=O)N',
    inchikey: 'KEJCWVGMRLCZQQ-YJBYXUATSA-N',
    cid: 6321416,
    iupac: '1-acetyloxyethyl (6R,7R)-3-(carbamoyloxymethyl)-7-[[(2Z)-2-(furan-2-yl)-2-methoxyiminoacetyl]amino]-8-oxo-5-thia-1-azabicyclo[4.2.0]oct-2-ene-2-carboxylate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'cefuroxima-oral',
      producto: 'Cefuroxime axetil · comprimido recubierto',
      titular: 'ASCEND LABORATORIES, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '500 mg',
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'sodium lauryl sulfate',
        'silicon dioxide',
        'calcium stearate',
        'calcium carbonate',
        'crospovidone (120 .mu.m)',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'propylene glycol',
        'fd&c blue no. 1',
        'aluminum oxide'
      ],
      usos: {
        t: 'Entre las indicaciones están faringitis o amigdalitis y otras infecciones por bacterias susceptibles.',
        ref: { f: 'dailymed-cefuroxima', sec: '1 · Indicaciones', cita: 'infections due to susceptible bacteria', codigo: '34067-9' }
      },
      fuente: 'dailymed-cefuroxima'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con cefuroxima axetilo como ingrediente activo.',
    usos: 'Entre las indicaciones están faringitis o amigdalitis y otras infecciones por bacterias susceptibles.',
    actua: 'La cefuroxima activa inhibe la síntesis de la pared bacteriana.',
    recorrido: 'En el estudio con el comprimido, la biodisponibilidad aumentó del 37 % al 52 % tras comer. La cefuroxima se excreta sin cambios por orina. En adultos se recuperó cerca del 50 % de la dosis en 12 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Cefuroxime axetil se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Cefuroxime axetil se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-cefuroxima',
            sec: '3 · Forma farmacéutica',
            cita: 'biconvex, film-coated tablets with “204” debossed on',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio con el comprimido, la biodisponibilidad aumentó del 37 % al 52 % tras comer.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio con el comprimido, la biodisponibilidad aumentó del 37 % al 52 % tras comer.',
          ref: {
            f: 'dailymed-cefuroxima',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability increases from 37% to 52%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Aproximadamente el 50 % de la cefuroxima sérica se une a proteínas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Aproximadamente el 50 % de la cefuroxima sérica se une a proteínas.',
          ref: {
            f: 'dailymed-cefuroxima',
            sec: '12.3 · Farmacocinética',
            cita: '50% of serum cefuroxime is bound to protein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de pared celular bacteriana',
        efecto: 'La cefuroxima activa inhibe la síntesis de la pared bacteriana.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'La cefuroxima activa inhibe la síntesis de la pared bacteriana.',
            ref: {
              f: 'dailymed-cefuroxima',
              sec: '12 · Farmacología clínica',
              cita: 'inhibition of bacterial cell wall synthesis',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Las esterasas hidrolizan el profármaco. El grupo axetilo da acetaldehído y ácido acético.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Las esterasas hidrolizan el profármaco. El grupo axetilo da acetaldehído y ácido acético.',
          ref: {
            f: 'dailymed-cefuroxima',
            sec: '12.3 · Farmacocinética',
            cita: 'axetil moiety is metabolized to acetaldehyde and acetic acid',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La cefuroxima se excreta sin cambios por orina. En adultos se recuperó cerca del 50 % de la dosis en 12 horas.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La cefuroxima se excreta sin cambios por orina. En adultos se recuperó cerca del 50 % de la dosis en 12 horas.',
          ref: {
            f: 'dailymed-cefuroxima',
            sec: '12.3 · Farmacocinética',
            cita: 'Cefuroxime is excreted unchanged in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-cefuroxima', 'dd11e4b9-7730-4d3a-81ca-16f15de09759', 'CEFUROXIME AXETIL TABLET, FILM COATED', 'Cefuroxime axetil', '25', '2025-11-17', '2026-11-10'),
    rengPubchem(6321416, 'cefuroxime axetil', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
