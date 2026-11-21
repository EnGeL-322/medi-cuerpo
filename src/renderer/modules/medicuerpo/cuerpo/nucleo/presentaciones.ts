import { RENG_ETAPAS, type RengFamilia, type RengForma, type RengIdEtapa, type RengPresentacion, type RengVia } from '../datos/modelo'

export type RengRelacionConElCuerpo = 'digestiva' | 'directa' | 'deposito' | 'local' | 'mixta'
type RengDatosForma = Pick<RengPresentacion, 'familia' | 'vias' | 'forma'>

export const RENG_VIAS: Record<RengVia, { nombre: string; relacion: Exclude<RengRelacionConElCuerpo, 'mixta'>; parenteral: boolean }> = {
  oral: { nombre: 'Oral', relacion: 'digestiva', parenteral: false },
  sublingual: { nombre: 'Sublingual', relacion: 'digestiva', parenteral: false },
  bucal: { nombre: 'Bucal', relacion: 'digestiva', parenteral: false },
  intravenosa: { nombre: 'Intravenosa', relacion: 'directa', parenteral: true },
  intraarterial: { nombre: 'Intraarterial', relacion: 'directa', parenteral: true },
  intramuscular: { nombre: 'Intramuscular', relacion: 'deposito', parenteral: true },
  subcutanea: { nombre: 'Subcutánea', relacion: 'deposito', parenteral: true },
  intradermica: { nombre: 'Intradérmica', relacion: 'deposito', parenteral: true },
  intratecal: { nombre: 'Intratecal', relacion: 'local', parenteral: true },
  epidural: { nombre: 'Epidural', relacion: 'local', parenteral: true },
  intraarticular: { nombre: 'Intraarticular', relacion: 'local', parenteral: true }
}

export const RENG_FAMILIAS: Record<RengFamilia, string> = { 'solido-oral': 'Sólido oral', 'liquido-oral': 'Líquido oral', inyectable: 'Inyectable', otra: 'Otra forma' }

export const RENG_FORMAS_NORMALIZADAS: Record<string, { nombre: string; familia: RengFamilia }> = {
  comprimido: { nombre: 'Comprimido', familia: 'solido-oral' },
  capsula: { nombre: 'Cápsula', familia: 'solido-oral' },
  'comprimido-masticable': { nombre: 'Comprimido masticable', familia: 'solido-oral' },
  'comprimido-bucodispersable': { nombre: 'Comprimido bucodispersable', familia: 'solido-oral' },
  'comprimido-efervescente': { nombre: 'Comprimido efervescente', familia: 'solido-oral' },
  'comprimido-sublingual': { nombre: 'Comprimido sublingual', familia: 'solido-oral' },
  'polvo-oral': { nombre: 'Polvo o gránulos orales', familia: 'solido-oral' },
  'solucion-oral': { nombre: 'Solución oral', familia: 'liquido-oral' },
  'suspension-oral': { nombre: 'Suspensión oral', familia: 'liquido-oral' },
  jarabe: { nombre: 'Jarabe', familia: 'liquido-oral' },
  'gotas-orales': { nombre: 'Gotas orales', familia: 'liquido-oral' },
  'emulsion-oral': { nombre: 'Emulsión oral', familia: 'liquido-oral' },
  'solucion-inyectable': { nombre: 'Solución inyectable', familia: 'inyectable' },
  'suspension-inyectable': { nombre: 'Suspensión inyectable', familia: 'inyectable' },
  'polvo-inyectable': { nombre: 'Polvo para solución inyectable', familia: 'inyectable' },
  'emulsion-inyectable': { nombre: 'Emulsión inyectable', familia: 'inyectable' },
  'jeringa-precargada': { nombre: 'Jeringa precargada', familia: 'inyectable' },
  pluma: { nombre: 'Pluma precargada', familia: 'inyectable' }
}

export const RENG_EXCIPIENTES_DE_RIESGO: ReadonlyArray<{ patron: RegExp; nombre: string; familias: RengFamilia[] }> = [
  { patron: /alcohol benc[ií]lico|benzyl alcohol/i, nombre: 'Alcohol bencílico', familias: ['inyectable', 'liquido-oral'] },
  { patron: /sulfit|bisulfit|metabisulfit|sulfite|bisulfite|metabisulfite/i, nombre: 'Sulfitos', familias: ['inyectable', 'liquido-oral'] },
  { patron: /sorbitol/i, nombre: 'Sorbitol', familias: ['liquido-oral'] },
  { patron: /sacarosa|sucrose|glucosa|fructosa|glucose|fructose|az[uú]car|sugar/i, nombre: 'Azúcares', familias: ['liquido-oral'] },
  { patron: /etanol|alcohol et[ií]lico|ethanol|ethyl alcohol|dehydrated alcohol|alcohol deshidratado/i, nombre: 'Etanol', familias: ['liquido-oral', 'inyectable'] },
  { patron: /parabeno|paraben|benzoato|benzoate|benzalconio|benzalkonium|clorobutanol|chlorobutanol|metacresol|m-cresol|fenol\b|phenol\b/i, nombre: 'Conservantes', familias: ['liquido-oral', 'inyectable'] },
  { patron: /propilenglicol|propylene glycol/i, nombre: 'Propilenglicol', familias: ['liquido-oral', 'inyectable'] }
]

const RENG_LIQUIDO = /soluci[oó]n|suspensi[oó]n|jarabe|gotas|elixir|emulsi[oó]n|l[ií]quido|solution|suspension|syrup|drops/i
const RENG_SOLIDO = /comprimido|c[aá]psula|gragea|tableta|tablet|capsule|gr[aá]nulo|polvo|sobre/i

export const rengViasDe = (rengP: Pick<RengPresentacion, 'vias'>): RengVia[] => (rengP.vias?.length ? rengP.vias : ['oral'])

export function rengFamiliaDe(rengP: RengDatosForma): RengFamilia {
  if (rengP.familia) return rengP.familia
  if (rengViasDe(rengP).some((rengV) => RENG_VIAS[rengV]?.parenteral)) return 'inyectable'
  if (RENG_SOLIDO.test(rengP.forma)) return 'solido-oral'
  if (RENG_LIQUIDO.test(rengP.forma)) return 'liquido-oral'
  return 'otra'
}

export function rengRelacionDe(rengP: Pick<RengPresentacion, 'vias'>): RengRelacionConElCuerpo {
  const rengR = new Set(rengViasDe(rengP).flatMap((rengV) => (RENG_VIAS[rengV] ? [RENG_VIAS[rengV].relacion] : [])))
  if (!rengR.size) return 'digestiva'
  return rengR.size === 1 ? [...rengR][0]! : 'mixta'
}

export function rengFormasPorDefecto(rengId: RengIdEtapa, rengP: RengDatosForma): RengForma[] {
  const rengFam = rengFamiliaDe(rengP)
  const rengRel = rengRelacionDe(rengP)
  const rengResto: Record<Exclude<RengIdEtapa, 'liberacion'>, RengForma[]> = { absorcion: ['disuelto'], distribucion: ['disuelto'], metabolismo: ['disuelto', 'metabolito'], excrecion: ['metabolito', 'disuelto'] }
  if (rengId !== 'liberacion') return rengResto[rengId]
  if (rengFam === 'solido-oral') return ['tableta', 'disuelto']
  if (rengFam === 'inyectable' && (rengRel === 'deposito' || rengRel === 'mixta')) return ['deposito', 'disuelto']
  return ['disuelto']
}

export function rengTituloEtapa(rengId: RengIdEtapa, rengP: RengDatosForma): { titulo: string; corto: string } {
  const rengBase = RENG_ETAPAS.find((rengE) => rengE.id === rengId)!
  const rengFam = rengFamiliaDe(rengP)
  const rengRel = rengRelacionDe(rengP)
  if (rengFam === 'liquido-oral' && rengId === 'liberacion') return { titulo: '1. Liberación (ya en forma líquida)', corto: 'Liberación líquida' }
  if (rengFam === 'inyectable' && rengId === 'liberacion') {
    if (rengRel === 'directa') return { titulo: '1. Administración directa a la sangre', corto: 'Administración directa' }
    if (rengRel === 'deposito') return { titulo: '1. Depósito en el lugar de inyección', corto: 'Depósito local' }
    if (rengRel === 'local') return { titulo: '1. Llegada al lugar de administración', corto: 'Lugar de administración' }
    return { titulo: '1. Administración y depósito', corto: 'Administración' }
  }
  if (rengFam === 'inyectable' && rengId === 'absorcion' && rengRel === 'directa') return { titulo: '2. Absorción (no hay: entra directo)', corto: 'Sin absorción' }
  return { titulo: rengBase.titulo, corto: rengBase.corto }
}

export function rengExcipientesPendientes(rengP: Pick<RengPresentacion, 'excipientes' | 'excipientesRiesgo' | 'vias' | 'familia' | 'forma'>): string[] {
  const rengFam = rengFamiliaDe(rengP)
  const rengDeclarados = new Set((rengP.excipientesRiesgo ?? []).map((rengX) => rengX.nombre.toLowerCase()))
  return RENG_EXCIPIENTES_DE_RIESGO.filter((rengR) => rengR.familias.includes(rengFam) && !rengDeclarados.has(rengR.nombre.toLowerCase()) && rengP.excipientes.some((rengX) => rengR.patron.test(rengX))).map((rengR) => rengR.nombre)
}

export const RENG_VIA_EN_FUENTE: Record<RengVia, { fda: string; cima: RegExp }> = {
  oral: { fda: 'ORAL', cima: /\boral\b/i },
  sublingual: { fda: 'SUBLINGUAL', cima: /sublingual/i },
  bucal: { fda: 'BUCCAL', cima: /bucal|buccal/i },
  intravenosa: { fda: 'INTRAVENOUS', cima: /intravenosa/i },
  intraarterial: { fda: 'INTRA-ARTERIAL', cima: /intraarterial/i },
  intramuscular: { fda: 'INTRAMUSCULAR', cima: /intramuscular/i },
  subcutanea: { fda: 'SUBCUTANEOUS', cima: /subcut[aá]nea/i },
  intradermica: { fda: 'INTRADERMAL', cima: /intrad[eé]rmica/i },
  intratecal: { fda: 'INTRATHECAL', cima: /intratecal/i },
  epidural: { fda: 'EPIDURAL', cima: /epidural/i },
  intraarticular: { fda: 'INTRA-ARTICULAR', cima: /intraarticular/i }
}

export function rengFormaNormalizadaDe(rengP: Pick<RengPresentacion, 'formaNormalizada' | 'familia' | 'vias' | 'forma'>): string {
  if (rengP.formaNormalizada) return rengP.formaNormalizada
  const rengFam = rengFamiliaDe(rengP)
  const rengT = rengP.forma.toLowerCase()
  if (rengFam === 'inyectable') {
    if (/jeringa/.test(rengT)) return 'jeringa-precargada'
    if (/pluma/.test(rengT)) return 'pluma'
    if (/polvo|liofiliz/.test(rengT)) return 'polvo-inyectable'
    if (/suspensi[oó]n/.test(rengT)) return 'suspension-inyectable'
    if (/emulsi[oó]n/.test(rengT)) return 'emulsion-inyectable'
    return 'solucion-inyectable'
  }
  if (rengFam === 'liquido-oral') {
    if (/jarabe/.test(rengT)) return 'jarabe'
    if (/gotas/.test(rengT)) return 'gotas-orales'
    if (/emulsi[oó]n/.test(rengT)) return 'emulsion-oral'
    if (/suspensi[oó]n/.test(rengT)) return 'suspension-oral'
    return 'solucion-oral'
  }
  if (rengFam === 'solido-oral') {
    if (/c[aá]psula/.test(rengT)) return 'capsula'
    if (/gr[aá]nulo|polvo|sobre/.test(rengT)) return 'polvo-oral'
    if (/bucodispersable|orodispersable/.test(rengT)) return 'comprimido-bucodispersable'
    if (/masticable/.test(rengT)) return 'comprimido-masticable'
    if (/efervescente/.test(rengT)) return 'comprimido-efervescente'
    if (/sublingual/.test(rengT)) return 'comprimido-sublingual'
    return 'comprimido'
  }
  return 'sin-clasificar'
}
