#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { RENG_LISTA } from './lista.mjs'

const [rengSalida, ...rengIds] = process.argv.slice(2)
if (!rengSalida) {
  console.error('Uso: node obtener-etiquetas.mjs <carpeta-salida> [id ...]')
  process.exit(1)
}
mkdirSync(rengSalida, { recursive: true })

const rengEspera = (rengMs) => new Promise((rengR) => setTimeout(rengR, rengMs))
async function rengPedir(rengUrl, rengTipo = 'json', rengIntentos = 3) {
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
}

export const RENG_SECCIONES = {
  '34067-9': '1 INDICATIONS AND USAGE',
  '43678-2': '3 DOSAGE FORMS AND STRENGTHS',
  '34089-3': '11 DESCRIPTION',
  '34084-4': '6 ADVERSE REACTIONS',
  '43685-7': '5 WARNINGS AND PRECAUTIONS',
  '34066-1': 'BOXED WARNING',
  '34090-1': '12 CLINICAL PHARMACOLOGY',
  '43679-0': '12.1 Mechanism of Action',
  '43681-6': '12.2 Pharmacodynamics',
  '43682-4': '12.3 Pharmacokinetics',
  '55106-9': 'Active ingredient',
  '55105-1': 'Purpose',
  '51727-6': 'Inactive ingredients',
  '34071-1': 'Warnings',
  '49489-8': '12.4 Microbiology',
  '34076-0': 'Information for patients',
  '42229-5': 'SPL unclassified section'
}

const rengEntidades = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'", '&#160;': ' ', '&nbsp;': ' ' }
const rengLimpiar = (rengX) =>
  rengX
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(paragraph|item|tr|title|caption)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, rengN) => String.fromCodePoint(Number(rengN)))
    .replace(/&#x([0-9a-f]+);/gi, (_, rengN) => String.fromCodePoint(parseInt(rengN, 16)))
    .replace(/&[a-z]+;|&#\d+;/gi, (rengM) => rengEntidades[rengM] ?? ' ')
    .replace(/[ \t\r\f\v]+/g, ' ')
    .replace(/\n\s+/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim()

function rengSecciones(rengXml) {
  const rengOut = []
  const rengRe = /<section\b[^>]*>/g
  let rengM
  while ((rengM = rengRe.exec(rengXml))) {
    let rengNivel = 1
    let rengI = rengRe.lastIndex
    const rengTag = /<\/?section\b[^>]*>/g
    rengTag.lastIndex = rengI
    let rengT
    while (rengNivel > 0 && (rengT = rengTag.exec(rengXml))) {
      rengNivel += rengT[0].startsWith('</') ? -1 : 1
      rengI = rengTag.lastIndex
    }
    const rengCuerpo = rengXml.slice(rengRe.lastIndex, rengI)
    const rengCodigo = /<code\b[^>]*code="([^"]+)"/.exec(rengCuerpo)?.[1] ?? ''
    const rengTitulo = rengLimpiar(/<title[^>]*>([\s\S]*?)<\/title>/.exec(rengCuerpo)?.[1] ?? '')
    rengOut.push({ codigo: rengCodigo, titulo: rengTitulo, texto: rengLimpiar(rengCuerpo) })
  }
  return rengOut
}

function rengProductos(rengXml) {
  const rengOut = []
  const rengRe = /<manufacturedProduct>\s*<manufacturedProduct>([\s\S]*?)<\/manufacturedProduct>/g
  let rengM
  while ((rengM = rengRe.exec(rengXml))) {
    const rengP = rengM[1]
    const rengNombre = rengLimpiar(/<name>([\s\S]*?)<\/name>/.exec(rengP)?.[1] ?? '')
    const rengForma = /<formCode\b[^>]*displayName="([^"]+)"/.exec(rengP)?.[1] ?? ''
    const rengIngredientes = []
    const rengRi = /<ingredient\b[^>]*classCode="([A-Z]+)"[^>]*>([\s\S]*?)<\/ingredient>/g
    let rengK
    while ((rengK = rengRi.exec(rengP))) {
      const rengCuerpo = rengK[2]
      const rengAttr = (rengTag) => {
        const rengT = new RegExp(`<${rengTag}\\b([^>]*)>`).exec(rengCuerpo)?.[1]
        return rengT ? [null, /value="([^"]+)"/.exec(rengT)?.[1], /unit="([^"]+)"/.exec(rengT)?.[1]] : null
      }
      const rengNum = rengAttr('numerator')
      const rengDen = rengAttr('denominator')
      const rengSustancia = rengLimpiar(/<ingredientSubstance>[\s\S]*?<name>([\s\S]*?)<\/name>/.exec(rengCuerpo)?.[1] ?? '')
      const rengUnii = /<ingredientSubstance>\s*<code\b[^>]*code="([^"]+)"/.exec(rengCuerpo)?.[1] ?? ''
      const rengResto = rengLimpiar(/<activeMoiety>\s*<activeMoiety>[\s\S]*?<name>([\s\S]*?)<\/name>/.exec(rengCuerpo)?.[1] ?? '')
      rengIngredientes.push({ clase: rengK[1], sustancia: rengSustancia, unii: rengUnii, resto: rengResto, cantidad: rengNum ? `${rengNum[1]} ${rengNum[2]}${rengDen && rengDen[1] !== '1' ? ` / ${rengDen[1]} ${rengDen[2]}` : ''}` : null })
    }
    const rengRuta = /<routeCode\b[^>]*displayName="([^"]+)"/.exec(rengXml.slice(rengM.index))?.[1] ?? ''
    const rengResto = rengXml.slice(rengM.index + 1)
    const rengFin = rengResto.search(/<manufacturedProduct>s*<manufacturedProduct>/)
    const rengTramo = rengFin < 0 ? rengResto : rengResto.slice(0, rengFin)
    const rengRutas = [...new Set([...rengTramo.matchAll(/<routeCode\b[^>]*displayName="([^"]+)"/g)].map((rengR) => rengR[1]))]
    rengOut.push({ nombre: rengNombre, forma: rengForma, ruta: rengRuta, rutas: rengRutas.length ? rengRutas : [rengRuta], ingredientes: rengIngredientes })
  }
  return rengOut
}

async function rengCandidatosOpenFDA(rengE) {
  const rengPartes = [`openfda.route:"ORAL"`]
  if (rengE.marca) rengPartes.push(`openfda.brand_name:"${rengE.marca}"`)
  else rengPartes.push(`openfda.generic_name:"${rengE.generico}"`)
  const rengUrl = `https://api.fda.gov/drug/label.json?search=${encodeURIComponent(rengPartes.join(' AND ')).replace(/%20/g, '+')}&limit=100`
  const rengD = await rengPedir(rengUrl)
  return (rengD?.results ?? []).map((rengR) => ({
    setid: rengR.set_id,
    marca: rengR.openfda?.brand_name?.[0] ?? '',
    generico: rengR.openfda?.generic_name?.[0] ?? '',
    titular: rengR.openfda?.manufacturer_name?.[0] ?? '',
    fecha: rengR.effective_time,
    conFC: !!(rengR.pharmacokinetics || /absor/i.test(rengR.clinical_pharmacology?.[0] ?? '')),
    descripcion: [rengR.openfda?.brand_name?.[0], rengR.spl_product_data_elements?.[0], (rengR.description?.[0] ?? '').slice(0, 600)].join(' ')
  }))
}

async function rengCandidatosDailyMed(rengE) {
  const rengNombre = (rengE.marca ?? rengE.generico).toLowerCase()
  const rengD = await rengPedir(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=${encodeURIComponent(rengNombre)}&pagesize=100`)
  const rengFilas = (rengD?.data ?? []).filter((rengX) => !/ AND |\/|KIT\b/i.test(rengX.title.replace(/\[.*\]/, '')) && !RENG_REEMPAQUE.test(rengX.title))
  const rengEvitar = rengE.evitar ? new RegExp(rengE.evitar, 'i') : null
  const rengInicio = new RegExp('^' + rengNombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i')
  return rengFilas
    .filter((rengX) => rengInicio.test(rengX.title.trim()))
    .filter((rengX) => !rengEvitar || !rengEvitar.test(rengX.title))
    .map((rengX) => ({ setid: rengX.setid, marca: rengE.marca ?? '', generico: rengE.generico ?? '', titular: /\[(.*)\]/.exec(rengX.title)?.[1] ?? '', fecha: rengX.published_date, conFC: true }))
    .sort((rengA, rengB) => (RENG_FABRICANTES.test(rengA.titular) ? 0 : 1) - (RENG_FABRICANTES.test(rengB.titular) ? 0 : 1))
}

function rengRecortar(rengTexto, rengMax) {
  if (rengTexto.length <= rengMax) return rengTexto
  const rengClave = /absor|bioavail|peak|t ?max|food|meal|fast|distribut|bound|binding|volume|metabol|cyp|excret|eliminat|half-life|urine|urinary|fece|faecal|renal|clearance|release|dissol|enteric|delayed|extended|mechanism|inhibit|recept/i
  const rengParrafos = rengTexto.split('\n')
  let rengOut = ''
  for (const rengP of rengParrafos) {
    if (rengOut.length > rengMax) break
    if (/^(Specific Populations|Drug Interaction|Drug-Drug Interaction|Effects of Other Drugs|Effect of Other Drugs)/i.test(rengP.trim())) break
    if (/^[\d.,\s%()–-]*$/.test(rengP)) continue
    if (rengClave.test(rengP) || rengP.length < 60) rengOut += rengP + '\n'
  }
  return rengOut.length > rengMax ? rengOut.slice(0, rengMax) + ' […]' : rengOut
}

const RENG_REEMPAQUE = /repack|proficient|bryant ranch|a-s medication|direct[_ ]?rx|nucare|preferred pharm|quality care|pd-rx|henry schein|medsource|cardinal health|aphena|lake erie|asclemed|denton|northwind|st\. mary|unit dose services|american health packaging|major pharm|golden state|aidarex|rebel distributors|blenheim|coupler|med-vantage|safecor|advanced rx|quallent|marlex|chain drug|nustar|altura|contract pharmacy|remedy|redpharm|stat rx|physicians total care|nucare|lake erie|sky packaging|safecor|bryant/i

const RENG_FABRICANTES = /teva|aurobindo|zydus|amneal|sun pharm|lupin|cipla|dr\.? reddy|mylan|viatris|sandoz|hikma|apotex|accord|torrent|alembic|glenmark|camber|heritage|granules|ajanta|macleods|unichem|strides|epic pharma|par pharm|lannett|rising|chartwell|aurolife|ascend|solco|prinston|sciegen|novadoz|msn|micro labs|jubilant|bionpharma|ani pharm|west-ward|roxane|greenstone|pfizer|merck|novartis|bristol|astrazeneca|glaxo|janssen|abbvie|lilly|boehringer|bayer|takeda|otsuka|gilead/i

async function rengFichaCIMA(rengNregistro) {
  const rengMeta = await rengPedir(`https://cima.aemps.es/cima/rest/medicamento?nregistro=${rengNregistro}`)
  const rengFt = rengMeta?.docs?.find((rengD) => rengD.tipo === 1)
  if (!rengMeta || !rengFt) throw new Error(`CIMA no tiene ficha técnica de ${rengNregistro}`)
  const rengHtml = await rengPedir(rengFt.urlHtml, 'text')
  const rengIds = ['1', '2', '3', '4', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5', '5.1', '5.2', '5.3', '6', '6.1', '6.2', '7']
  const rengPos = rengIds.map((rengId) => ({ id: rengId, i: rengHtml.search(new RegExp(`id="${rengId.replace('.', '\\.')}"`)) })).filter((rengX) => rengX.i >= 0).sort((rengA, rengB) => rengA.i - rengB.i)
  const rengSecciones = []
  for (const [rengK, rengP] of rengPos.entries()) {
    if (!['2', '3', '4.1', '4.4', '4.8', '5.1', '5.2', '6.1'].includes(rengP.id)) continue
    const rengFin = rengPos[rengK + 1]?.i ?? rengHtml.length
    rengSecciones.push({ codigo: `FT ${rengP.id}`, titulo: `Sección ${rengP.id}`, texto: rengLimpiar(rengHtml.slice(rengP.i, rengFin).replace(/^[^>]*>/, '')) })
  }
  return { meta: rengMeta, ft: rengFt, secciones: rengSecciones }
}

async function rengPubchemDe(rengClave) {
  if (!rengClave) return null
  const rengTipo = /^\d+$/.test(String(rengClave)) ? 'cid' : 'name'
  return (await rengPedir(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/${rengTipo}/${encodeURIComponent(rengClave)}/property/MolecularFormula,MolecularWeight,SMILES,ConnectivitySMILES,InChIKey,IUPACName/JSON`))?.PropertyTable?.Properties?.[0] ?? null
}

const RENG_LIMITES = { '43682-4': 5000, '34090-1': 5000, '43679-0': 1300, '34067-9': 800, '34089-3': 1500, '43678-2': 600, '51727-6': 700, '55106-9': 300, '55105-1': 200, '43681-6': 900, '34071-1': 1800, '49489-8': 1300 }

for (const rengE of RENG_LISTA.filter((rengX) => rengIds.length === 0 || rengIds.includes(rengX.id))) {
  try {
    if (rengE.cima) {
      const { meta: rengMeta, ft: rengFt, secciones: rengSecs } = await rengFichaCIMA(rengE.cima)
      const rengPc = await rengPubchemDe(rengE.pubchem)
      const rengFecha = new Date(rengFt.fecha).toISOString().slice(0, 10)
      const rengDatos = { id: rengE.id, consultado: new Date().toISOString().slice(0, 10), cima: rengE.cima, url: rengFt.urlHtml, meta: { title: rengMeta.nombre, titular: rengMeta.labtitular, fecha: rengFecha, forma: rengMeta.formaFarmaceutica?.nombre, via: rengMeta.viasAdministracion?.map((rengV) => rengV.nombre).join(', '), activos: rengMeta.principiosActivos }, pubchem: rengPc, secciones: rengSecs }
      writeFileSync(join(rengSalida, `${rengE.id}.json`), JSON.stringify(rengDatos, null, 1))
      let rengTxt = `### ${rengE.id} · ${rengMeta.nombre} [${rengMeta.labtitular}] (CIMA ${rengE.cima}, ficha técnica de ${rengFecha})\n${rengFt.urlHtml}\nForma: ${rengDatos.meta.forma} · ${rengDatos.meta.via} · ${JSON.stringify(rengMeta.principiosActivos)}\n`
      if (rengPc) rengTxt += `PubChem CID ${rengPc.CID} · ${rengPc.MolecularFormula} · ${rengPc.MolecularWeight} g/mol · ${rengPc.InChIKey}\nSMILES ${rengPc.SMILES}\nIUPAC ${rengPc.IUPACName}\n`
      for (const rengS of rengSecs) rengTxt += `\n== [${rengS.codigo}]\n${rengS.texto.slice(0, 4000)}\n`
      writeFileSync(join(rengSalida, `${rengE.id}.txt`), rengTxt)
      console.log(`ok ${rengE.id}: ${rengMeta.nombre} (CIMA ${rengE.cima}, ${rengFecha})`)
      await rengEspera(350)
      continue
    }
    let rengSetid = rengE.setid
    let rengCandidatos = []
    let rengOrden = []
    if (!rengSetid) {
      rengCandidatos = (await rengCandidatosOpenFDA(rengE)).filter((rengC) => (rengE.marca ? rengC.marca.toUpperCase() === rengE.marca : rengC.generico.toUpperCase() === rengE.generico) && (!rengE.titular || new RegExp(rengE.titular, 'i').test(rengC.titular)) && (!rengE.evitar || !new RegExp(rengE.evitar, 'i').test(rengC.descripcion)))
      const rengPuntos = (rengC) => (RENG_REEMPAQUE.test(rengC.titular) ? 4 : 0) + (rengE.marca || RENG_FABRICANTES.test(rengC.titular) ? 0 : 2) + (rengC.conFC ? 0 : 1)
      rengOrden = [...rengCandidatos].sort((rengA, rengB) => rengPuntos(rengA) - rengPuntos(rengB) || String(rengB.fecha).localeCompare(String(rengA.fecha)))
      if (!rengOrden.length) rengOrden = await rengCandidatosDailyMed(rengE)
      if (!rengOrden.length) throw new Error('sin etiquetas en openFDA ni en DailyMed')
      rengSetid = rengOrden[0].setid
    }
    let rengMeta = null
    let rengXml = null
    for (let rengK = 0; rengK < Math.max(1, Math.min(6, rengOrden.length)); rengK++) {
      if (rengK > 0) rengSetid = rengOrden[rengK].setid
      rengMeta = (await rengPedir(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?setid=${rengSetid}`))?.data?.[0]
      rengXml = rengMeta ? await rengPedir(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${rengSetid}.xml`, 'text') : null
      if (rengMeta && rengXml) break
    }
    if (!rengMeta || !rengXml) throw new Error(`DailyMed no devolvió el SPL ${rengSetid}`)
    const rengSecs = rengSecciones(rengXml)
    const rengProds = rengProductos(rengXml)
    const rengPc = await rengPubchemDe(rengE.pubchem)
    const rengDatos = { id: rengE.id, consultado: new Date().toISOString().slice(0, 10), setid: rengSetid, url: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${rengSetid}`, meta: rengMeta, productos: rengProds, rutasDoc: [...new Set([...rengXml.matchAll(/<routeCode\b[^>]*displayName="([^"]+)"/g)].map((rengR) => rengR[1]))], pubchem: rengPc, candidatos: rengCandidatos, secciones: rengSecs.filter((rengS) => RENG_SECCIONES[rengS.codigo]) }
    writeFileSync(join(rengSalida, `${rengE.id}.json`), JSON.stringify(rengDatos, null, 1))
    let rengTxt = `### ${rengE.id} · ${rengMeta.title}\nsetid ${rengSetid} · versión ${rengMeta.spl_version} · publicada ${rengMeta.published_date} · ${rengDatos.url}\n`
    if (rengCandidatos.length) rengTxt += `candidatos de un solo activo: ${rengCandidatos.length} (con farmacocinética: ${rengCandidatos.filter((rengC) => rengC.conFC).length})\n`
    if (rengPc) rengTxt += `PubChem CID ${rengPc.CID} · ${rengPc.MolecularFormula} · ${rengPc.MolecularWeight} g/mol · ${rengPc.InChIKey}\nSMILES ${rengPc.SMILES}\nIUPAC ${rengPc.IUPACName}\n`
    for (const rengP of rengProds.slice(0, 1)) {
      rengTxt += `PRODUCTO ${rengP.nombre} · ${rengP.forma} · ${rengP.ruta}\n`
      for (const rengI of rengP.ingredientes.filter((rengX) => rengX.clase !== 'IACT')) rengTxt += `  activo [${rengI.clase}] ${rengI.sustancia} (resto: ${rengI.resto}) ${rengI.cantidad ?? ''}\n`
      const rengInact = rengP.ingredientes.filter((rengX) => rengX.clase === 'IACT').map((rengX) => rengX.sustancia)
      if (rengInact.length) rengTxt += `  inactivos: ${rengInact.join('; ')}\n`
    }
    if (rengProds.length > 3) rengTxt += `(+${rengProds.length - 3} productos más en el SPL)\n`
    const rengVistos = new Set()
    for (const rengS of rengSecs) {
      const rengClave = rengS.codigo === '42229-5' ? `${rengS.codigo}|${rengS.titulo}` : rengS.codigo
      if (!RENG_SECCIONES[rengS.codigo] || rengVistos.has(rengClave)) continue
      if (rengS.codigo === '42229-5' && !/microbiolog|mechanism|pharmacokinetic|absorption|distribution|metabolism|elimination|excretion|warning/i.test(rengS.titulo)) continue
      if (rengS.codigo === '34090-1' && rengSecs.some((rengX) => rengX.codigo === '43682-4')) continue
      rengVistos.add(rengClave)
      rengTxt += `\n== [${rengS.codigo}] ${rengS.titulo || RENG_SECCIONES[rengS.codigo]}\n${(['43682-4', '34090-1'].includes(rengS.codigo) ? rengRecortar(rengS.texto, RENG_LIMITES[rengS.codigo]) : rengS.texto.length > (RENG_LIMITES[rengS.codigo] ?? 800) ? rengS.texto.slice(0, RENG_LIMITES[rengS.codigo] ?? 800) + ' […]' : rengS.texto)}\n`
    }
    writeFileSync(join(rengSalida, `${rengE.id}.txt`), rengTxt)
    console.log(`ok ${rengE.id}: ${rengMeta.title} (v${rengMeta.spl_version}, ${rengMeta.published_date})`)
  } catch (rengErr) {
    console.log(`ERROR ${rengE.id}: ${rengErr.message}`)
  }
  await rengEspera(350)
}
