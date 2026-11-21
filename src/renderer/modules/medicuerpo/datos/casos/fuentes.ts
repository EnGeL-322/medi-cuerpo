import type { RengFuente } from './tipos'

const RENG_HOY = '2026-11-04'
const RENG_CORTAS: Record<string, string> = {
  fiorillo2020: 'Fiorillo et al. 2020',
  pubchem: 'PubChem',
  usgs: 'USGS (agua y cuerpo)',
  'jove-ph': 'JoVE',
  'ods-calcio': 'NIH ODS (calcio)',
  'pmc-hierro': 'PMC8198892 (hierro)'
}
const rengF = (rengId: string, rengTexto: string, rengUrl: string, rengAcceso: RengFuente['acceso'] = 'abierta'): RengFuente => ({ id: rengId, corta: RENG_CORTAS[rengId] ?? rengTexto.split(',')[0]!, texto: rengTexto, url: rengUrl, consultada: RENG_HOY, acceso: rengAcceso })

export const RENG_FUENTES: RengFuente[] = [
  rengF('fiorillo2020', 'Fiorillo L. et al., «Stannous Fluoride Effects on Enamel: A Systematic Review», Biomimetics (2020)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7559150'),
  rengF('pubchem', 'PubChem (NCBI/NLM): NaF (CID 5235), SnF₂ (CID 24550), Na₂PO₃F (CID 24266), ATP (CID 5957), ozono (CID 24823)', 'https://pubchem.ncbi.nlm.nih.gov'),
  rengF('usgs', 'USGS, «The Water in You: Water and the Human Body»', 'https://www.usgs.gov/special-topics/water-science-school/science/water-you-water-and-human-body'),
  rengF('jove-ph', 'JoVE, «Stomach pH Regulation» (material educativo; fuente secundaria)', 'https://www.jove.com/de/science-education/v/11881/stomach-ph-regulation', 'resumen'),
  rengF('ods-calcio', 'NIH Office of Dietary Supplements, hoja de datos «Calcium» (visto en un resumen de búsqueda: la página devolvió acceso denegado)', 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/', 'resumen'),
  rengF('pmc-hierro', 'Artículo de PubMed Central sobre hierro y hemoglobina (PMC8198892), visto en un resumen de búsqueda', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8198892', 'resumen'),
]

export const rengFuentePorId = (rengId: string): RengFuente | undefined => RENG_FUENTES.find((rengX) => rengX.id === rengId)
