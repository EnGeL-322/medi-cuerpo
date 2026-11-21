import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-vancocin'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'vancomicina',
    nombre: 'Vancomicina',
    clase: 'Antibiótico glucopeptídico',
    sinonimos: ['vancomycin', 'Vancocin', 'vancomicina oral'],
    formula: 'C66H75Cl2N9O24',
    masaMolar: 1449.2,
    smiles:
      'C[C@H]1[C@H]([C@@](C[C@@H](O1)O[C@@H]2[C@H]([C@@H]([C@H](O[C@H]2OC3=C4C=C5C=C3OC6=C(C=C(C=C6)[C@H]([C@H](C(=O)N[C@H](C(=O)N[C@H]5C(=O)N[C@@H]7C8=CC(=C(C=C8)O)C9=C(C=C(C=C9O)O)[C@H](NC(=O)[C@H]([C@@H](C1=CC(=C(O4)C=C1)Cl)O)NC7=O)C(=O)O)CC(=O)N)NC(=O)[C@@H](CC(C)C)NC)O)Cl)CO)O)O)(C)N)O',
    inchikey: 'MYPYJXKWCTUITO-LYRMYLQWSA-N',
    cid: 14969,
    estereo: { descripcion: 'Glucopéptido tricíclico con 18 estereocentros definidos (producto natural de Amycolatopsis orientalis).' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'vancomicina-vancocin-capsulas',
      producto: 'VANCOCIN (vancomycin hydrochloride) cápsulas de 125 y 250 mg',
      titular: 'ANI Pharmaceuticals, Inc.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '125 y 250 mg de vancomicina por cápsula',
      sal: { nombre: 'Clorhidrato de vancomicina; 125 mg de vancomicina equivalen a 128 mg de la sal', ref: rengR('11 DESCRIPTION', 'Each capsule contains 125 mg vancomycin (equivalent to 128 mg vancomycin hydrochloride)') },
      excipientes: ['FD&C Blue No. 2', 'gelatin', 'iron oxide', 'polyethylene glycol', 'titanium dioxide', '«y otros ingredientes inactivos» (la etiqueta no los enumera todos)'],
      usos: { t: 'Diarrea asociada a Clostridioides difficile y enterocolitis por Staphylococcus aureus (incluido el resistente a meticilina). Por vía oral no sirve para otras infecciones.', ref: rengR('1 INDICATIONS AND USAGE', 'VANCOCIN is indicated for the treatment of Clostridioides difficil e-associated diarrhea') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula con clorhidrato de vancomicina (la sal del activo); la etiqueta enumera solo parte de los excipientes.',
    usos: 'Diarrea por Clostridioides difficile y enterocolitis estafilocócica; tomada por boca no sirve para otras infecciones.',
    actua: 'Impide que las bacterias construyan su pared celular, dentro del propio intestino.',
    recorrido: 'Apenas se absorbe: se queda en el intestino, donde actúa, y sale con las heces en concentraciones muy altas; en sangre casi no se detecta.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula baja por el esófago hasta el estómago.',
      ocurre: 'La cápsula se abre y libera el clorhidrato de vancomicina.',
      sigue: 'La vancomicina sigue por el intestino sin apenas pasar a la sangre.',
      datos: [{ t: 'Cápsulas para administración oral con clorhidrato de vancomicina purificado por cromatografía.', ref: rengR('11 DESCRIPTION', 'VANCOCIN capsules for oral administration contain chromatographically purified vancomycin hydrochloride') }],
      sinDatos: ['Tiempo de apertura de la cápsula']
    },
    absorcion: {
      organos: ['intestino-delgado', 'intestino-grueso'],
      llega: 'La vancomicina recorre el intestino delgado y llega al colon.',
      ocurre: 'Se absorbe muy poco. En voluntarios con dosis repetidas no se detectó en la sangre y en la orina se recuperó como mucho un 0,76 %. Puede absorberse más si la mucosa intestinal está inflamada (colitis activa), y acumularse si además los riñones funcionan mal.',
      sigue: 'Permanece en el interior del intestino, que es donde tiene que actuar.',
      datos: [
        { t: 'Se absorbe mal tras la administración oral.', ref: rengR(RENG_PK, 'Vancomycin is poorly absorbed after oral administration') },
        { t: 'Con dosis repetidas en voluntarios no se detectaron concentraciones en sangre y la recuperación en orina no superó el 0,76 %.', ref: rengR(RENG_PK, 'No blood concentrations were detected and urinary recovery did not exceed 0.76%'), poblacion: 'voluntarios', condiciones: '250 mg cada 8 horas, 7 dosis' },
        { t: 'Algunas personas con inflamación de la mucosa intestinal pueden absorber cantidades importantes.', ref: rengR('5.2 Potential for Systemic Absorption', 'Some patients with inflammatory disorders of the intestinal mucosa also may have significant systemic absorption of vancomycin'), poblacion: 'inflamación de la mucosa intestinal' }
      ],
      formas: ['disuelto'],
      ruta: ['estomago', 'duodeno', 'intestino-delgado', 'intestino-grueso']
    },
    distribucion: {
      organos: ['luz-intestinal', 'intestino-grueso'],
      llega: 'La vancomicina, casi toda sin absorber, está en el interior del intestino.',
      ocurre: 'Actúa allí mismo: inhibe la síntesis de la pared celular de Clostridioides difficile y de Staphylococcus aureus (también altera su membrana y su síntesis de ARN). En las heces alcanza concentraciones muy altas, mientras que en la sangre apenas se mide. Por eso, inyectada no sirve para estas infecciones.',
      sigue: 'Avanza con el contenido intestinal hacia el final del colon.',
      simultaneo: 'Su acción y su eliminación ocurren en el mismo lugar: el interior del intestino.',
      datos: [
        { t: 'Con 2 g al día en personas con diarrea por C. difficile y riñones normales: más de 3100 mg/kg en las heces y menos de 1 mcg/mL en el suero.', ref: rengR(RENG_PK, 'concentrations of drug were >3100 mg/kg in the feces and <1 mcg/mL in the serum'), poblacion: 'personas con diarrea por C. difficile y función renal normal', condiciones: '2 g al día' },
        { t: 'La vancomicina parenteral no es eficaz para estas infecciones: hay que tomarla por boca.', ref: rengR('1 INDICATIONS AND USAGE', 'Parenteral administration of vancomycin is not effective for the above infections') }
      ],
      accion: {
        diana: 'Síntesis de la pared celular bacteriana',
        efecto: 'Bactericida frente a C. difficile (formas vegetativas) y S. aureus en el intestino.',
        lugar: ['intestino-grueso', 'luz-intestinal'],
        datos: [
          { t: 'Su acción bactericida contra S. aureus y las formas vegetativas de C. difficile se debe sobre todo a la inhibición de la biosíntesis de la pared celular.', ref: rengR('12.4 Microbiology › Mechanism of action', 'results primarily from inhibition of cell-wall biosynthesis') },
          { t: 'Además altera la permeabilidad de la membrana bacteriana y la síntesis de ARN.', ref: rengR('12.4 Microbiology › Mechanism of action', 'vancomycin alters bacterial-cell-membrane permeability and RNA synthesis') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La vancomicina sigue en el intestino.',
      ocurre: 'La etiqueta no describe metabolismo de la vancomicina oral: casi toda permanece en el intestino y la poca que se absorbe se mide como vancomicina.',
      sigue: 'Sale con las heces.',
      datos: [{ t: 'Tras dosis repetidas en voluntarios, en la mayoría de las muestras de heces la vancomicina superó los 100 mg/kg.', ref: rengR(RENG_PK, 'fecal concentrations of vancomycin in volunteers exceeded 100 mg/kg in the majority of samples'), poblacion: 'voluntarios' }],
      sinDatos: ['Metabolitos de la vancomicina oral'],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['heces', 'intestino-grueso'],
      llega: 'La vancomicina llega al final del colon.',
      ocurre: 'Se elimina con las heces, en concentraciones muy altas. Lo poco absorbido sale por la orina; con insuficiencia renal y colitis activa podría acumularse en la sangre, y en personas mayores su aclaramiento es menor.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Con dosis repetidas y diarrea activa por C. difficile puede medirse en el suero y, con insuficiencia renal, existe posibilidad de acumulación.', ref: rengR(RENG_PK, 'in the presence of renal impairment, the possibility of accumulation exists'), poblacion: 'diarrea activa por C. difficile' },
        { t: 'Los aclaramientos total y renal son menores en personas mayores.', ref: rengR(RENG_PK, 'the total systemic and renal clearances of vancomycin are reduced in the elderly'), poblacion: 'personas mayores' }
      ],
      formas: ['disuelto'],
      ruta: ['intestino-grueso']
    }
  },
  cifras: [
    { magnitud: 'orina', nombre: 'Recuperado en la orina (voluntarios, dosis repetidas)', valor: '≤ 0,76', unidad: '% de la dosis', poblacion: 'voluntarios', ref: rengR(RENG_PK, 'urinary recovery did not exceed 0.76%') },
    { magnitud: 'heces', nombre: 'Concentración en heces (2 g al día, diarrea por C. difficile)', valor: '> 3100', unidad: 'mg/kg', condiciones: 'mg por kg de heces; suero < 1 mcg/mL', ref: rengR(RENG_PK, '>3100 mg/kg in the feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'a078d9c2-f89c-4f9f-8ded-60ffb2983c3f', 'VANCOCIN (vancomycin hydrochloride) capsule', 'VANCOCIN capsules (ANI Pharmaceuticals, Inc.)', '12', '2025-12-23', '2026-11-09'), rengPubchem(14969, 'Vancomycin', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
