import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { RENG_CATALOGO, rengFuente } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { rengViasDe, RENG_VIA_EN_FUENTE } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/presentaciones'

const RENG_DIR = process.env['ETIQUETAS_DIR'] ?? ''

interface RengRutas {
  fda: Set<string>
  cima: string
}

function rengCargarRutas(): { porSetid: Map<string, RengRutas>; porCima: Map<string, RengRutas> } {
  const rengPorSetid = new Map<string, RengRutas>()
  const rengPorCima = new Map<string, RengRutas>()
  for (const rengF of readdirSync(RENG_DIR)) {
    if (!rengF.endsWith('.json') || rengF.startsWith('pubchem')) continue
    const rengD = JSON.parse(readFileSync(join(RENG_DIR, rengF), 'utf8'))
    const rengRutas: RengRutas = { fda: new Set([...(rengD.productos ?? []).flatMap((rengP: { ruta: string; rutas?: string[] }) => rengP.rutas ?? [rengP.ruta]), ...(rengD.rutasDoc ?? [])]), cima: String(rengD.meta?.via ?? '') }
    if (rengD.setid) rengPorSetid.set(rengD.setid, rengRutas)
    if (rengD.cima) rengPorCima.set(String(rengD.cima), rengRutas)
  }
  return { porSetid: rengPorSetid, porCima: rengPorCima }
}

describe.skipIf(!RENG_DIR || !existsSync(RENG_DIR))('vías de administración frente a la ruta del documento', () => {
  const rengR = rengCargarRutas()
  it('la vía declarada de cada presentación figura en la ruta de su etiqueta o ficha técnica', () => {
    let rengComprobadas = 0
    for (const rengF of RENG_CATALOGO)
      for (const rengP of rengF.presentaciones) {
        const rengFu = rengFuente(rengP.fuente)!
        const rengSetid = /setid=([0-9a-f-]+)/.exec(rengFu.url)?.[1]
        const rengNreg = /\/ft\/(\d+)\//.exec(rengFu.url)?.[1]
        const rengRutas = rengSetid ? rengR.porSetid.get(rengSetid) : rengNreg ? rengR.porCima.get(rengNreg) : undefined
        expect(rengRutas, `${rengP.id}: documento sin rutas descargado`).toBeDefined()
        for (const rengV of rengViasDe(rengP)) {
          const rengOk = rengSetid ? rengRutas!.fda.has(RENG_VIA_EN_FUENTE[rengV].fda) : RENG_VIA_EN_FUENTE[rengV].cima.test(rengRutas!.cima)
          expect(rengOk, `${rengP.id}: la vía ${rengV} no figura en ${rengSetid ? [...rengRutas!.fda].join(', ') : rengRutas!.cima}`).toBe(true)
          rengComprobadas++
        }
      }
    expect(rengComprobadas).toBeGreaterThanOrEqual(303)
  })
})
