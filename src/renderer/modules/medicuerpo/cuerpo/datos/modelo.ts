export type RengIdEtapa = 'liberacion' | 'absorcion' | 'distribucion' | 'metabolismo' | 'excrecion'
export type RengForma = 'tableta' | 'disuelto' | 'metabolito' | 'deposito'
export type RengFamilia = 'solido-oral' | 'liquido-oral' | 'inyectable' | 'otra'
export type RengVia = 'oral' | 'sublingual' | 'bucal' | 'intravenosa' | 'intramuscular' | 'subcutanea' | 'intradermica' | 'intratecal' | 'epidural' | 'intraarticular' | 'intraarterial'

export const RENG_ETAPAS: ReadonlyArray<{ id: RengIdEtapa; titulo: string; corto: string }> = [
  { id: 'liberacion', titulo: '1. Liberación', corto: 'Liberación' },
  { id: 'absorcion', titulo: '2. Absorción', corto: 'Absorción' },
  { id: 'distribucion', titulo: '3. Distribución y acción', corto: 'Distribución y acción' },
  { id: 'metabolismo', titulo: '4. Metabolismo', corto: 'Metabolismo' },
  { id: 'excrecion', titulo: '5. Eliminación', corto: 'Eliminación' }
]

export const RENG_SIN_DATOS = 'Sin datos en la fuente'

export interface RengRef {
  f: string
  sec: string
  cita: string
  codigo?: string
}

export type RengAlcance = 'presentacion' | 'otra-presentacion' | 'general'

export interface RengDato {
  t: string
  ref: RengRef
  alcance?: RengAlcance
  poblacion?: string
  condiciones?: string
}

export type RengMagnitud = 'tmax' | 'semivida' | 'union' | 'biodisponibilidad' | 'vd' | 'orina' | 'heces' | 'comida' | 'aclaramiento' | 'cmax' | 'auc' | 'otra'

export type RengOrigenCifra = 'otra-presentacion' | 'otra-via'

export interface RengCifra {
  magnitud: RengMagnitud
  nombre: string
  valor: string
  unidad: string
  analito?: string
  poblacion?: string
  condiciones?: string
  presentacion?: string
  origen?: RengOrigenCifra
  ref: RengRef
}

export interface RengMetabolito {
  nombre: string
  nombreFuente?: string
  actividad: 'activo' | 'inactivo' | 'tóxico' | 'desconocida'
  nota?: string
  smiles?: string
  cid?: number
  ref: RengRef
}

export interface RengNoAplica {
  motivo: string
  ref: RengRef
}

export interface RengExcipienteRiesgo {
  nombre: string
  motivo: string
  vias: RengVia[]
  ref: RengRef
}

export interface RengEtapa {
  noAplica?: RengNoAplica
  organos: string[]
  organosGenerales?: string[]
  llega: string
  ocurre: string
  sigue: string
  simultaneo?: string
  datos: RengDato[]
  sinDatos?: string[]
  formas?: RengForma[]
  ruta?: string[]
}

export interface RengAccion {
  diana: string | null
  efecto: string
  lugar: string[]
  datos: RengDato[]
}

export interface RengRecorrido {
  liberacion: RengEtapa
  absorcion: RengEtapa
  distribucion: RengEtapa & { accion: RengAccion }
  metabolismo: RengEtapa & { metabolitos: RengMetabolito[] }
  excrecion: RengEtapa
}

export interface RengActivo {
  id: string
  nombre: string
  clase: string
  sinonimos: string[]
  formula: string
  masaMolar: number
  smiles: string
  inchikey: string
  cid: number
  iupac?: string
  estereo?: { descripcion: string; enantiomeros?: Array<{ nombre: string; smiles: string; cid: number }> }
  area: string
}

export interface RengPresentacion {
  id: string
  producto: string
  titular: string
  mercado: 'EE. UU.' | 'España (UE)'
  forma: string
  formaFuente: string
  liberacion: 'inmediata' | 'retardada' | 'prolongada' | 'no declarada'
  concentraciones: string
  sal?: { nombre: string; ref: RengRef }
  excipientes: string[]
  usos: RengDato
  fuente: string
  nota?: string
  advertencias?: Array<{ titulo: string; texto: string; organos: string[]; ref: RengRef }>
  reacciones?: ReadonlyArray<readonly [texto: string, codigo: string, cita: string]>
  recorridoDe?: string
  recorridoPropio?: RengRecorridoPropio
  familia?: RengFamilia
  vias?: RengVia[]
  formaNormalizada?: string
  excipientesRiesgo?: RengExcipienteRiesgo[]
}

export interface RengFuente {
  id: string
  tipo: 'etiqueta-fda' | 'ficha-ue' | 'pubchem' | 'manual' | 'estudio'
  titulo: string
  organismo: string
  producto?: string
  mercado?: string
  url: string
  version?: string
  fecha?: string
  consultado: string
  autores?: string
  licencia?: string
}

export interface RengPuntoSerie {
  t: number
  c: number
  intervalo?: readonly [number, number]
}

export interface RengSerieEstudio {
  id: string
  nombre: string
  administracion: string
  analito: string
  rol: 'original' | 'metabolito'
  estadistico: string
  puntos: RengPuntoSerie[]
  ref: RengRef
}

export interface RengModeloPublicado {
  estructura: 'un-compartimento-primer-orden'
  analito: string
  dosis: { valor: number; unidad: string }
  parametros: { ka: number; cl: number; v: number; f?: number; tlag?: number }
  unidadesParametros: { ka: string; cl: string; v: string }
  sujeto: string
  ref: RengRef
}

export interface RengCurvaEstudio {
  id: string
  tipo: 'serie' | 'modelo'
  activoId: string
  presentaciones: string[]
  productoEstudio: string
  relacion: string
  matriz: string
  unidades: { tiempo: 'h' | 'min'; concentracion: string }
  poblacion: string
  n: number
  diseno: string
  condiciones: string
  metodo: string
  principal: string
  series: RengSerieEstudio[]
  modelo?: RengModeloPublicado
  comparables: Array<{ a: string; b: string; motivo: string }>
  resultados: RengCifra[]
  apoyos: Array<{ que: string; ref: RengRef }>
  limites: string[]
  fuente: string
  ref: RengRef
}

export interface RengModuloCurvas {
  fuentes: RengFuente[]
  curvas: RengCurvaEstudio[]
}

export interface RengResumen {
  contiene: string
  usos: string
  actua: string
  recorrido: string
}

export interface RengCombinacion {
  componentes: Array<{ activoId: string; nota?: string }>
}

export interface RengExtensionFicha {
  activoId: string
  presentaciones: RengPresentacion[]
  fuentes: RengFuente[]
  cifras?: RengCifra[]
}

export interface RengRecorridoPropio {
  resumen: string
  etapas: RengRecorrido
}

export interface RengFichaFarmaco {
  combinacion?: RengCombinacion
  activo: RengActivo
  presentaciones: RengPresentacion[]
  resumen: RengResumen
  recorrido: RengRecorrido
  cifras: RengCifra[]
  fuentes: RengFuente[]
  estado: 'completa' | 'parcial'
  pendientes?: string[]
}

const RENG_SPL = (rengSetid: string): string => `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${rengSetid}`

export function rengEtiquetaFDA(rengId: string, rengSetid: string, rengTitulo: string, rengProducto: string, rengVersion: string, rengFecha: string, rengConsultado: string): RengFuente {
  return { id: rengId, tipo: 'etiqueta-fda', titulo: rengTitulo, organismo: 'DailyMed (U.S. National Library of Medicine) · etiqueta del producto', producto: rengProducto, mercado: 'EE. UU.', url: RENG_SPL(rengSetid), version: rengVersion, fecha: rengFecha, consultado: rengConsultado }
}

export function rengFichaCIMA(rengId: string, rengNregistro: string, rengProducto: string, rengFecha: string, rengConsultado: string): RengFuente {
  return { id: rengId, tipo: 'ficha-ue', titulo: `Ficha técnica: ${rengProducto}`, organismo: 'CIMA · Agencia Española de Medicamentos y Productos Sanitarios (AEMPS)', producto: rengProducto, mercado: 'España (UE)', url: `https://cima.aemps.es/cima/dochtml/ft/${rengNregistro}/FT_${rengNregistro}.html`, fecha: rengFecha, consultado: rengConsultado }
}

export function rengEstudioPMC(rengId: string, rengPmcid: string, rengTitulo: string, rengAutores: string, rengRevista: string, rengFecha: string, rengLicencia: string, rengConsultado: string): RengFuente {
  return { id: rengId, tipo: 'estudio', titulo: rengTitulo, organismo: rengRevista, autores: rengAutores, url: `https://pmc.ncbi.nlm.nih.gov/articles/${rengPmcid}/`, fecha: rengFecha, licencia: rengLicencia, consultado: rengConsultado }
}

export function rengPubchem(rengCid: number, rengNombre: string, rengConsultado: string): RengFuente {
  return { id: `pubchem-${rengCid}`, tipo: 'pubchem', titulo: `PubChem CID ${rengCid}: ${rengNombre}`, organismo: 'PubChem (NCBI, NIH)', url: `https://pubchem.ncbi.nlm.nih.gov/compound/${rengCid}`, consultado: rengConsultado }
}

export const RENG_FORMAS_POR_DEFECTO: Record<RengIdEtapa, RengForma[]> = {
  liberacion: ['tableta', 'disuelto'],
  absorcion: ['disuelto'],
  distribucion: ['disuelto'],
  metabolismo: ['disuelto', 'metabolito'],
  excrecion: ['metabolito', 'disuelto']
}
