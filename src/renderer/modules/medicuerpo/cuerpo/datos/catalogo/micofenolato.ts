import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'micofenolato',
    nombre: 'Micofenolato de mofetilo',
    clase: 'Inmunosupresor, profármaco del ácido micofenólico',
    sinonimos: [ 'micofenolato de mofetilo', 'micofenolato', 'mycophenolate mofetil', 'CellCept' ],
    formula: 'C23H31NO7',
    masaMolar: 433.5,
    smiles: 'CC1=C2COC(=O)C2=C(C(=C1OC)C/C=C(\\C)/CCC(=O)OCCN3CCOCC3)O',
    inchikey: 'RTGDFNSFWBGLEC-SYZQJQIISA-N',
    cid: 5281078,
    iupac: '2-morpholin-4-ylethyl (E)-6-(4-hydroxy-6-methoxy-7-methyl-3-oxo-1H-2-benzofuran-5-yl)-4-methylhex-4-enoate',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'micofenolato-oral',
      producto: 'CellCept · comprimido recubierto con película',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '500 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'povidone k90',
        'croscarmellose sodium',
        'magnesium stearate',
        'hypromellose, unspecified',
        'hydroxypropyl cellulose, unspecified',
        'titanium dioxide',
        'polyethylene glycol 400',
        'ferrosoferric oxide',
        'fd&c blue no. 2',
        'ferric oxide red',
        'talc',
        'ammonia',
        'shellac'
      ],
      usos: {
        t: 'Prevención del rechazo de trasplantes de riñón, corazón o hígado junto con otros inmunosupresores, según población y presentación.',
        ref: {
          f: 'dailymed-micofenolato',
          sec: '1 · Indicaciones',
          cita: 'of allogeneic kidney, heart or liver transplants, in combination with other immunosuppressants',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-micofenolato',
      advertencias: [
        {
          titulo: 'Riesgos destacados',
          texto: 'La etiqueta destaca toxicidad embriofetal, neoplasias e infecciones graves.',
          organos: [ 'organos-reproductores', 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-micofenolato',
            sec: 'Advertencia destacada',
            cita: 'EMBRYOFETAL TOXICITY, MALIGNANCIES and SERIOUS INFECTIONS',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [ 'Diarrea y vómitos en los ensayos clínicos.', '34084-4', 'include diarrhea, leukopenia, infection, vomiting' ],
        [ 'Leucopenia e infecciones en los ensayos clínicos.', '34084-4', 'include diarrhea, leukopenia, infection, vomiting' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Prevención del rechazo de trasplantes de riñón, corazón o hígado junto con otros inmunosupresores, según población y presentación.',
    actua: 'El profármaco da ácido micofenólico, que inhibe la IMP deshidrogenasa y limita la síntesis de nucleótidos de guanosina en linfocitos.',
    recorrido: 'El micofenolato de mofetilo se convierte por completo en el metabolito activo según la etiqueta. En 12 voluntarios, la biodisponibilidad oral media frente a la vía intravenosa fue 94 %. En el estudio con marcador, la mayor parte se recuperó en orina. Una fracción menor apareció en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral recubierto con película de CellCept.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral recubierto con película de CellCept.',
          ref: {
            f: 'dailymed-micofenolato',
            sec: '3 · Formas y concentraciones',
            cita: 'lavender-colored, caplet-shaped, film-coated tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El micofenolato de mofetilo se convierte por completo en el metabolito activo según la etiqueta. En 12 voluntarios, la biodisponibilidad oral media frente a la vía intravenosa fue 94 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El micofenolato de mofetilo se convierte por completo en el metabolito activo según la etiqueta. En 12 voluntarios, la biodisponibilidad oral media frente a la vía intravenosa fue 94 %.',
          ref: {
            f: 'dailymed-micofenolato',
            sec: '12.3 · Farmacocinética',
            cita: 'mean absolute bioavailability of oral MMF relative to intravenous MMF was 94%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'A concentraciones clínicamente relevantes, aproximadamente el 97 % del ácido micofenólico circula unido a albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'A concentraciones clínicamente relevantes, aproximadamente el 97 % del ácido micofenólico circula unido a albúmina.',
          ref: { f: 'dailymed-micofenolato', sec: '12.3 · Farmacocinética', cita: 'MPA is 97% bound to plasma albumin', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'IMP deshidrogenasa',
        efecto: 'El profármaco da ácido micofenólico, que inhibe la IMP deshidrogenasa y limita la síntesis de nucleótidos de guanosina en linfocitos.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'El profármaco da ácido micofenólico, que inhibe la IMP deshidrogenasa y limita la síntesis de nucleótidos de guanosina en linfocitos.',
            ref: { f: 'dailymed-micofenolato', sec: '12.1 · Mecanismo de acción', cita: 'MPA is a selective uncompetitive inhibitor', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se genera ácido micofenólico antes de la circulación sistémica. Después se forma un glucurónido inactivo que puede volver a convertirse en ácido micofenólico durante el reciclado enterohepático.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se genera ácido micofenólico antes de la circulación sistémica. Después se forma un glucurónido inactivo que puede volver a convertirse en ácido micofenólico durante el reciclado enterohepático.',
          ref: {
            f: 'dailymed-micofenolato',
            sec: '12.3 · Farmacocinética',
            cita: 'MPA is metabolized principally by glucuronyl transferase to form MPAG, which is not pharmacologically active',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En el estudio con marcador, la mayor parte se recuperó en orina. Una fracción menor apareció en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En el estudio con marcador, la mayor parte se recuperó en orina. Una fracción menor apareció en las heces.',
          ref: { f: 'dailymed-micofenolato', sec: '12.3 · Farmacocinética', cita: 'recovered in the urine and 6% recovered in feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta oral media',
      valor: '94',
      unidad: '%',
      analito: 'exposición a ácido micofenólico',
      poblacion: '12 voluntarios sanos',
      condiciones: 'comparación oral con intravenosa',
      ref: {
        f: 'dailymed-micofenolato',
        sec: '12.3 · Farmacocinética',
        cita: 'mean absolute bioavailability of oral MMF relative to intravenous MMF was 94%',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-micofenolato', '37241e87-4af4-4dc3-a1aa-ea6f20d8dc40', 'CELLCEPT (MYCOPHENOLATE MOFETIL) TABLET, FILM COATED CELLCEPT (MYCOPHENOLATE MOFETIL) CAPSULE CELLCEPT (MYCOPHENOLATE MOFETIL HYDROCHLORIDE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION CELLCEPT (MYCOPHENOLATE MOFETIL) POWDER, FOR SUSPENSION', 'CellCept', '51', '2026-08-10', '2026-11-12'),
    rengPubchem(5281078, 'micofenolato de mofetilo', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
