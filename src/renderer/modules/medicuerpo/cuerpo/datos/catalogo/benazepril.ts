import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'benazepril',
    nombre: 'Benazepril',
    clase: 'Inhibidor de la ECA (profármaco)',
    sinonimos: [ 'benazepril' ],
    formula: 'C24H28N2O5',
    masaMolar: 424.5,
    smiles: 'CCOC(=O)[C@H](CCC1=CC=CC=C1)N[C@H]2CCC3=CC=CC=C3N(C2=O)CC(=O)O',
    inchikey: 'XPCFTKFZXHTYIP-PMACEKPBSA-N',
    cid: 5362124,
    iupac: '2-[(3S)-3-[[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino]-2-oxo-4,5-dihydro-3H-1-benzazepin-1-yl]acetic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'benazepril-oral',
      producto: 'Lotensin · comprimido',
      titular: 'VALIDUS PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '20 mg',
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'hydrogenated castor oil',
        'hypromelloses',
        'ferric oxide red',
        'lactose, unspecified form',
        'cellulose, microcrystalline',
        'polysorbate 80',
        'starch, corn',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Hipertensión arterial según la etiqueta.',
        ref: { f: 'dailymed-benazepril', sec: '1 · Indicaciones', cita: 'treatment of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-benazepril',
      sal: {
        nombre: 'clorhidrato de benazepril',
        ref: { f: 'dailymed-benazepril', sec: '11 · Descripción', cita: 'Benazepril hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con clorhidrato de benazepril como ingrediente activo.',
    usos: 'Hipertensión arterial según la etiqueta.',
    actua: 'Su metabolito benazeprilato inhibe la ECA y reduce la formación de angiotensina II.',
    recorrido: 'El benazepril alcanza su pico plasmático antes que el benazeprilato. La comida retrasa el pico del metabolito. Ambos se eliminan principalmente por el riñón. Una fracción del benazeprilato sale por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Lotensin se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Lotensin se presenta como comprimido para administración oral.',
          ref: { f: 'dailymed-benazepril', sec: '3 · Forma farmacéutica', cita: '10 mg tablet is dark yellow with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El benazepril alcanza su pico plasmático antes que el benazeprilato. La comida retrasa el pico del metabolito.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El benazepril alcanza su pico plasmático antes que el benazeprilato. La comida retrasa el pico del metabolito.',
          ref: {
            f: 'dailymed-benazepril',
            sec: '12.3 · Farmacocinética',
            cita: 'time to peak plasma concentrations of benazeprilat is delayed',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En laboratorio, el 96,7 % del benazepril y el 95,3 % del benazeprilato se unieron a proteínas séricas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En laboratorio, el 96,7 % del benazepril y el 95,3 % del benazeprilato se unieron a proteínas séricas.',
          ref: {
            f: 'dailymed-benazepril',
            sec: '12.3 · Farmacocinética',
            cita: 'serum protein binding of benazepril is about 96.7%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ECA',
        efecto: 'Su metabolito benazeprilato inhibe la ECA y reduce la formación de angiotensina II.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Su metabolito benazeprilato inhibe la ECA y reduce la formación de angiotensina II.',
            ref: {
              f: 'dailymed-benazepril',
              sec: '12.1 · Mecanismo',
              cita: 'Benazepril and benazeprilat inhibit angiotensin-converting enzyme',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El hígado hidroliza casi todo el benazepril a benazeprilato, su metabolito activo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El hígado hidroliza casi todo el benazepril a benazeprilato, su metabolito activo.',
          ref: {
            f: 'dailymed-benazepril',
            sec: '12.3 · Farmacocinética',
            cita: 'by cleavage of the ester group (primarily in liver)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Benazeprilato',
          actividad: 'activo',
          ref: { f: 'dailymed-benazepril', sec: '12.3 · Farmacocinética', cita: 'its active metabolite benazeprilat', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Ambos se eliminan principalmente por el riñón. Una fracción del benazeprilato sale por la bilis.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Ambos se eliminan principalmente por el riñón. Una fracción del benazeprilato sale por la bilis.',
          ref: { f: 'dailymed-benazepril', sec: '12.3 · Farmacocinética', cita: 'cleared predominantly by renal excretion', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-benazepril', '2abb091b-a53e-46b0-9b84-e5ee8f2bdd8e', 'LOTENSIN (BENAZEPRIL HYDROCHLORIDE) TABLET', 'Lotensin', '10', '2025-10-02', '2026-11-10'),
    rengPubchem(5362124, 'benazepril', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
