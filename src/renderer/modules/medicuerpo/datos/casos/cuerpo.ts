import type { RengCaso } from './tipos'

export const RENG_CASOS_CUERPO: RengCaso[] = [
  {
    id: 'agua-cuerpo',
    categoria: 'cuerpo',
    titulo: 'El agua de tu cuerpo',
    gancho: 'Hasta el 60 % de ti es H₂O: una molécula pequeña que lo disuelve casi todo.',
    portada: 'H2O',
    ideas: [
      { texto: 'Hasta el 60 % del cuerpo adulto es agua (en promedio, unos 60 % en hombres y 55 % en mujeres).', fuente: 'usgs' },
      { texto: 'Músculos y riñones tienen 79 % de agua; cerebro y corazón, 73 %; hasta los huesos tienen 31 %.', fuente: 'usgs' },
      { texto: 'La molécula de agua es angular y polar: el oxígeno atrae más a los electrones. Por eso disuelve sales y azúcares.', fuente: null }
    ],
    componentes: [{ nombre: 'Agua', formula: 'H2O', entrada: 'H2O', rol: 'El disolvente de la vida.' }],
    ecuaciones: [],
    detalles: [
      { texto: 'La diferencia entre hombres y mujeres se debe a que el tejido graso tiene menos agua que el magro.', fuente: 'usgs' },
      { texto: 'En la mesa de Explorar puedes medir el ángulo H–O–H (≈ 104,5° en el modelo de la app) y ver las cargas parciales.', fuente: null }
    ],
    limites: ['La fuente no da el porcentaje de agua de la sangre; la app no lo inventa.']
  },
  {
    id: 'respiracion',
    categoria: 'cuerpo',
    titulo: 'Respirar: de la glucosa al ATP',
    gancho: 'El oxígeno que inhalas termina como agua y CO₂, y la energía queda guardada en el ATP.',
    portada: 'C6H12O6',
    ideas: [
      { texto: 'Tus células «queman» glucosa con oxígeno y producen CO₂ y agua: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O.', fuente: null },
      { texto: 'Parte de esa energía se guarda en el ATP, la «moneda» energética de la célula.', fuente: null },
      { texto: 'El ATP es una molécula de 47 átomos: C₁₀H₁₆N₅O₁₃P₃, masa molar 507,18 g/mol.', fuente: 'pubchem' }
    ],
    componentes: [
      { nombre: 'Glucosa', formula: 'C6H12O6', entrada: 'glucosa', rol: 'El combustible.' },
      { nombre: 'Oxígeno', formula: 'O2', entrada: 'O2', rol: 'Lo que respiras.' },
      { nombre: 'Dióxido de carbono', formula: 'CO2', entrada: 'CO2', rol: 'Lo que exhalas.' },
      { nombre: 'Agua', formula: 'H2O', entrada: 'H2O', rol: 'Producto de la reacción.' },
      { nombre: 'ATP', formula: 'C10H16N5O13P3', entrada: 'C1=NC(=C2C(=N1)N(C=N2)[C@H]3[C@@H]([C@@H]([C@H](O3)COP(=O)(O)OP(=O)(O)OP(=O)(O)O)O)O)N', rol: 'Guarda la energía.' }
    ],
    ecuaciones: [
      {
        nombre: 'Respiración celular (ecuación global)',
        reactivos: [{ coef: 1, formula: 'C6H12O6' }, { coef: 6, formula: 'O2' }],
        productos: [{ coef: 6, formula: 'CO2' }, { coef: 6, formula: 'H2O' }],
        nota: 'Es la suma de muchas etapas (glucólisis, ciclo de Krebs, cadena respiratoria).',
        fuente: null
      }
    ],
    detalles: [{ texto: 'La estructura del ATP de la mesa viene del SMILES de PubChem (CID 5957).', fuente: 'pubchem' }],
    limites: ['No hay una fuente consultada para la ecuación global: es química de libro de texto.', 'La app no calcula cuántos ATP se producen.']
  },
  {
    id: 'estomago',
    categoria: 'cuerpo',
    titulo: 'El ácido del estómago y los antiácidos',
    gancho: 'Tu estómago produce ácido clorhídrico; un antiácido lo neutraliza y suelta CO₂.',
    portada: 'HCl',
    ideas: [
      { texto: 'El jugo gástrico contiene ácido clorhídrico, cloruro de potasio y cloruro de sodio.', fuente: null },
      { texto: 'Su pH en la cavidad del estómago suele citarse entre 1,5 y 3,5.', fuente: 'jove-ph' },
      { texto: 'Un antiácido de bicarbonato lo neutraliza: NaHCO₃ + HCl → NaCl + H₂O + CO₂.', fuente: null }
    ],
    componentes: [
      { nombre: 'Ácido clorhídrico', formula: 'HCl', entrada: 'HCl', rol: 'El ácido del estómago.' },
      { nombre: 'Bicarbonato de sodio', formula: 'NaHCO3', entrada: 'bicarbonato de sodio', rol: 'Antiácido.' },
      { nombre: 'Cloruro de sodio', formula: 'NaCl', entrada: 'NaCl', rol: 'Sal que se forma.' },
      { nombre: 'Dióxido de carbono', formula: 'CO2', entrada: 'CO2', rol: 'El gas que se libera.' }
    ],
    ecuaciones: [
      {
        nombre: 'Neutralización con bicarbonato',
        reactivos: [{ coef: 1, formula: 'NaHCO3' }, { coef: 1, formula: 'HCl' }],
        productos: [{ coef: 1, formula: 'NaCl' }, { coef: 1, formula: 'H2O' }, { coef: 1, formula: 'CO2' }],
        fuente: null
      }
    ],
    detalles: [{ texto: 'La composición del jugo gástrico (HCl, KCl, NaCl) aparece en un capítulo de StatPearls que solo se vio en un resumen de búsqueda, no se abrió completo.', fuente: null }],
    limites: ['El rango de pH viene de una fuente secundaria educativa; otras fuentes dan 1–3 o 1,5–2. No se afirma un valor único.']
  },
  {
    id: 'huesos-calcio',
    categoria: 'cuerpo',
    titulo: 'Huesos y dientes: calcio y fosfato',
    gancho: 'Casi todo el calcio de tu cuerpo está en huesos y dientes, en forma de un mineral.',
    portada: 'Ca5(PO4)3OH',
    ideas: [
      { texto: 'Casi todo el calcio del cuerpo (98–99 % según los NIH) está en los huesos y los dientes.', fuente: 'ods-calcio' },
      { texto: 'Ese calcio forma hidroxiapatita de calcio, un mineral de calcio y fosfato.', fuente: 'ods-calcio' },
      { texto: 'El esmalte dental es casi todo hidroxiapatita (96 % según una revisión sistemática).', fuente: 'fiorillo2020' }
    ],
    componentes: [
      { nombre: 'Calcio', formula: 'Ca', entrada: 'Ca', rol: 'El metal del mineral.' },
      { nombre: 'Hidroxiapatita', formula: 'Ca5(PO4)3OH', entrada: null, rol: 'El mineral de huesos y dientes.' }
    ],
    ecuaciones: [],
    detalles: [
      { texto: 'A diferencia de los dientes, el hueso se renueva continuamente: se disuelve (resorción) y se vuelve a depositar calcio.', fuente: 'ods-calcio' },
      { texto: 'Mira «Pasta dental con flúor» para ver cómo el flúor cambia ese mineral.', fuente: null }
    ],
    limites: [
      'La ficha de los NIH da 98 % en un pasaje y más de 99 % en otro: la app muestra el rango, no un valor único.',
      'Solo se vio un resumen de búsqueda de esa ficha: la página directa devolvió acceso denegado.'
    ]
  },
  {
    id: 'hemoglobina',
    categoria: 'cuerpo',
    titulo: 'Hemoglobina: el hierro que lleva el oxígeno',
    gancho: 'Un átomo de hierro en cada grupo hemo atrapa O₂ en los pulmones y lo suelta en los tejidos.',
    portada: 'Fe',
    ideas: [
      { texto: 'El hemo es un anillo de porfirina con un átomo de hierro; el oxígeno se une a ese hierro de forma reversible.', fuente: null },
      { texto: 'La hemoglobina tiene cuatro cadenas de proteína (globina) y cada una lleva un grupo hemo.', fuente: null },
      { texto: 'Casi dos tercios del hierro del cuerpo están en la hemoglobina de los glóbulos rojos.', fuente: 'pmc-hierro' }
    ],
    componentes: [
      { nombre: 'Hierro', formula: 'Fe', entrada: 'Fe', rol: 'El átomo que se une al oxígeno.' },
      { nombre: 'Oxígeno', formula: 'O2', entrada: 'O2', rol: 'Lo que transporta.' }
    ],
    ecuaciones: [],
    detalles: [{ texto: 'Un sitio de nutrición da cerca del 70 % del hierro en hemoglobina y mioglobina juntas; no es la misma cifra y la app no elige una.', fuente: null }],
    limites: [
      'No hay modelo 3D de la hemoglobina: tiene miles de átomos y la mesa admite hasta 60.',
      'La cifra de dos tercios viene de un resumen de un artículo; no se pudo contrastar con una página de los NIH (acceso denegado).'
    ]
  }
]
