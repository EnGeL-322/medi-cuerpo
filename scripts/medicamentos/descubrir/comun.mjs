export const rengEspera = (rengMs) => new Promise((rengOk) => setTimeout(rengOk, rengMs))

export async function rengPedir(rengUrl, rengTipo = 'json', rengIntentos = 4) {
  for (let rengI = 0; rengI < rengIntentos; rengI++) {
    try {
      const rengR = await fetch(rengUrl, { headers: { 'User-Agent': 'medicuerpo-datos/1.0' } })
      if (rengR.status === 404) return null
      if (!rengR.ok) throw new Error(`${rengR.status} ${rengUrl}`)
      return rengTipo === 'json' ? await rengR.json() : await rengR.text()
    } catch (rengE) {
      if (rengI === rengIntentos - 1) throw rengE
      await rengEspera(1500 * (rengI + 1))
    }
  }
  return null
}

export const rengNormalizar = (rengS) =>
  rengS
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const RENG_SALES = /\b(hydrochloride|dihydrochloride|hydrobromide|sodium|potassium|calcium|magnesium|sulfate|phosphate|maleate|fumarate|succinate|tartrate|mesylate|besylate|citrate|acetate|hydrate|monohydrate|dihydrate|anhydrous|bromide|chloride|nitrate|lactate|gluconate|trometamol|tromethamine|bitartrate|hyclate|pamoate|disodium|meglumine|tosylate|esylate|xinafoate|oxalate|salicylate|stearate|palmitate|decanoate|enanthate|cypionate|valerate|propionate|benzoate|hemihydrate|sesquihydrate|trihydrate|tetrahydrate|monosodium|dibasic|monobasic|hcl)\b/g

export const rengSinSal = (rengS) => rengNormalizar(rengS).replace(RENG_SALES, '').replace(/\s+/g, ' ').trim()

export const RENG_TIPOS_EXCLUIDOS = new Set(['VACCINE', 'STANDARDIZED ALLERGENIC', 'NON-STANDARDIZED ALLERGENIC', 'CELLULAR THERAPY', 'PLASMA DERIVATIVE', 'LICENSED MINIMALLY MANIPULATED CELLS', 'DRUG FOR FURTHER PROCESSING'])
export const RENG_CATEGORIAS_APROBADAS = new Set(['NDA', 'ANDA', 'NDA AUTHORIZED GENERIC', 'BLA'])

const RENG_VIAS_PARENTERALES = /INTRAVENOUS|INTRAMUSCULAR|SUBCUTANEOUS|INTRADERMAL|INTRATHECAL|EPIDURAL|INTRA-ARTICULAR|INFILTRATION|PERINEURAL|INTRAVITREAL|INTRALESIONAL|INTRACAUDAL|INTRASYNOVIAL|INTRA-ARTERIAL|PARENTERAL|SOFT TISSUE|INTRACAVERNOUS|INTRAVASCULAR/

export function rengFamiliaNdc(rengX) {
  const rengDf = rengX.df
  const rengRutas = rengX.route ?? []
  if (/INJECTION|IMPLANT|INJECTABLE/.test(rengDf) && rengRutas.some((rengV) => RENG_VIAS_PARENTERALES.test(rengV))) return 'inyectable'
  if (!(rengRutas.includes('ORAL') || rengRutas.includes('SUBLINGUAL') || rengRutas.includes('BUCCAL'))) return 'otra'
  if (/^POWDER, FOR (SUSPENSION|SOLUTION)$|^FOR SUSPENSION$|^TABLET, FOR SUSPENSION$/.test(rengDf)) return 'solido-oral'
  if (/^(TABLET|CAPSULE|PILL|PELLET|LOZENGE|PASTILLE|TROCHE|WAFER|FILM|GRANULE|POWDER|GUM)/.test(rengDf)) return 'solido-oral'
  if (/^(SOLUTION|SUSPENSION|SYRUP|LIQUID|ELIXIR|EMULSION|CONCENTRATE|DROPS|TINCTURE|SPRAY|GEL|JELLY|PASTE)/.test(rengDf)) return 'liquido-oral'
  return 'otra'
}

export const rengLiberacionNdc = (rengDf) => (/EXTENDED RELEASE/.test(rengDf) ? 'prolongada' : /DELAYED RELEASE/.test(rengDf) ? 'retardada' : 'inmediata')
export const rengFormaNdc = (rengDf) => rengDf.replace(/, FILM COATED|, COATED|, SUGAR COATED|, GELATIN COATED/, '').replace(/, LIQUID FILLED/, '')

export function rengFamiliaCima(rengX) {
  const rengF = rengX.ffs
  const rengV = rengX.vias.join('|')
  if (/INYECTABLE/.test(rengF) && !/^SOLUCIÓN\/SUSPENSIÓN ORAL\/INYECTABLE/.test(rengF)) return 'inyectable'
  if (/ORAL|SUBLINGUAL|BUCAL/.test(rengV)) {
    if (/^(COMPRIMIDO|CAPSULA|POLVO\/GRANULADO)/.test(rengF)) return 'solido-oral'
    if (/^SOLUCI|GOTAS ORALES|EMULSION/.test(rengF)) return 'liquido-oral'
  }
  return 'otra'
}

export const rengLiberacionCima = (rengFf) => (/LIBERACION MODIFICADA|PROLONGADA/.test(rengFf) ? 'modificada' : 'convencional')
