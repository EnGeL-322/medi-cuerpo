import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'solifenacina',
    nombre: 'Solifenacina',
    clase: 'Antagonista muscarínico',
    sinonimos: [ 'solifenacin' ],
    formula: 'C23H26N2O2',
    masaMolar: 362.5,
    smiles: 'C1CN2CCC1[C@H](C2)OC(=O)N3CCC4=CC=CC=C4[C@@H]3C5=CC=CC=C5',
    inchikey: 'FBOUYBDGKBSUES-VXKWHMMOSA-N',
    cid: 154059,
    iupac: '[(3R)-1-azabicyclo[2.2.2]octan-3-yl] (1S)-1-phenyl-3,4-dihydro-1H-isoquinoline-2-carboxylate',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'solifenacina-oral',
      producto: 'VESIcare · comprimido recubierto',
      titular: 'CARILION MATERIALS MANAGEMENT',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'lactose monohydrate',
        'corn starch',
        'hypromellose 2910',
        'magnesium stearate',
        'talc',
        'polyethylene glycol 8000',
        'titanium dioxide',
        'yellow ferric oxide'
      ],
      usos: {
        t: 'Vejiga hiperactiva con urgencia, frecuencia urinaria o incontinencia de urgencia según la etiqueta.',
        ref: { f: 'dailymed-solifenacina', sec: '1 · Indicaciones', cita: 'for the treatment of overactive bladder', codigo: '34067-9' }
      },
      fuente: 'dailymed-solifenacina',
      sal: {
        nombre: 'succinato de solifenacina',
        ref: { f: 'dailymed-solifenacina', sec: '11 · Descripción', cita: 'solifenacin succinate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con succinato de solifenacina como ingrediente activo.',
    usos: 'Vejiga hiperactiva con urgencia, frecuencia urinaria o incontinencia de urgencia según la etiqueta.',
    actua: 'Bloquea competitivamente receptores muscarínicos que participan en la contracción del músculo liso vesical.',
    recorrido: 'En voluntarios sanos, el máximo plasmático se alcanzó en 3–8 horas. La biodisponibilidad absoluta ronda el 90 %. En el estudio radiomarcado se recuperó el 69,2 % en orina y el 22,5 % en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'VESIcare se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'VESIcare se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-solifenacina', sec: '3 · Forma farmacéutica', cita: '5 mg tablets are round, light yellow,', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En voluntarios sanos, el máximo plasmático se alcanzó en 3–8 horas. La biodisponibilidad absoluta ronda el 90 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En voluntarios sanos, el máximo plasmático se alcanzó en 3–8 horas. La biodisponibilidad absoluta ronda el 90 %.',
          ref: {
            f: 'dailymed-solifenacina',
            sec: '12.3 · Farmacocinética',
            cita: 'bioavailability of solifenacin is approximately 90%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 98 % se une a proteínas plasmáticas, sobre todo a glucoproteína ácida alfa-1.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 98 % se une a proteínas plasmáticas, sobre todo a glucoproteína ácida alfa-1.',
          ref: { f: 'dailymed-solifenacina', sec: '12.3 · Farmacocinética', cita: 'bound to human plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores muscarínicos',
        efecto: 'Bloquea competitivamente receptores muscarínicos que participan en la contracción del músculo liso vesical.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Bloquea competitivamente receptores muscarínicos que participan en la contracción del músculo liso vesical.',
            ref: { f: 'dailymed-solifenacina', sec: '12.1 · Mecanismo', cita: 'competitive muscarinic receptor antagonist', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente en el hígado, principalmente por CYP3A4. Un metabolito activo circula en concentraciones bajas.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente en el hígado, principalmente por CYP3A4. Un metabolito activo circula en concentraciones bajas.',
          ref: {
            f: 'dailymed-solifenacina',
            sec: '12.3 · Farmacocinética',
            cita: 'Solifenacin is extensively metabolized in the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '4R-hidroxisolifenacina',
          actividad: 'activo',
          ref: {
            f: 'dailymed-solifenacina',
            sec: '12.3 · Farmacocinética',
            cita: 'One pharmacologically active metabolite (4R-hydroxy solifenacin)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio radiomarcado se recuperó el 69,2 % en orina y el 22,5 % en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio radiomarcado se recuperó el 69,2 % en orina y el 22,5 % en heces.',
          ref: {
            f: 'dailymed-solifenacina',
            sec: '12.3 · Farmacocinética',
            cita: '69.2% of the radioactivity was recovered in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-solifenacina', '100678f1-313a-4e99-ae77-319c610a830f', 'VESICARE (SOLIFENACIN SUCCINATE) TABLET, FILM COATED', 'VESIcare', '2', '2017-12-28', '2026-11-10'),
    rengPubchem(154059, 'solifenacin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
