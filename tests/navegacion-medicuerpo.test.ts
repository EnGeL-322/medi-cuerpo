import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { RENG_ACCESOS_MEDICUERPO } from '../src/renderer/modules/medicuerpo/accesos'
import { RENG_MENU_MEDICUERPO } from '../src/renderer/modules/medicuerpo/menu'
import { RENG_DESTINOS_MEDICUERPO, RENG_NAV_INICIAL, rengNavDeSubruta, RENG_PESTANAS_CUERPO, rengSubrutaDeNav, type RengNavMediCuerpo } from '../src/renderer/modules/medicuerpo/navegacion'
import { rengClaveEntrada, rengEntradaActiva, rengEntradasPlanas, rengProblemasMenu, rengRutaLegible } from '../src/renderer/shell/nucleo/menu'

const RENG_ID = 'medicuerpo'
const rengAbre = (rengSub: string | null): boolean => rengSub === null || rengNavDeSubruta(RENG_NAV_INICIAL, rengSub) !== RENG_NAV_INICIAL || rengSub === rengSubrutaDeNav(RENG_NAV_INICIAL)
const rengExiste = (rengId: string): boolean => rengId === RENG_ID

describe('navegación de MediCuerpo', () => {
  it('tres destinos: cuerpo y medicamentos, casos del cuerpo y mesa de estructuras', () => {
    expect(RENG_DESTINOS_MEDICUERPO.map((rengD) => rengD.id)).toEqual(['cuerpo', 'casos', 'mesa'])
    expect(RENG_PESTANAS_CUERPO.map((rengP) => rengP.id)).toEqual(['medicamentos', 'atlas', 'modelo'])
  })
  it('subruta → navegación → subruta es estable para todo lo que se puede abrir', () => {
    for (const rengSub of ['medicamentos', 'atlas', 'modelo', 'casos', 'mesa']) expect(rengSubrutaDeNav(rengNavDeSubruta(RENG_NAV_INICIAL, rengSub)), rengSub).toBe(rengSub)
  })
  it('lo desconocido o vacío no cambia nada; «cuerpo» conserva la pestaña elegida', () => {
    const rengNav: RengNavMediCuerpo = rengNavDeSubruta(RENG_NAV_INICIAL, 'atlas')
    expect(rengNavDeSubruta(rengNav, null)).toBe(rengNav)
    expect(rengNavDeSubruta(rengNav, 'no-existe')).toBe(rengNav)
    expect(rengNavDeSubruta(rengNavDeSubruta(rengNav, 'mesa'), 'cuerpo')).toEqual({ destino: 'cuerpo', pestana: 'atlas' })
  })
  it('cada acceso del buscador abre exactamente lo que nombra, venga de donde venga', () => {
    const rengDesde: RengNavMediCuerpo[] = [RENG_NAV_INICIAL, { destino: 'mesa', pestana: 'modelo' }]
    for (const rengA of RENG_ACCESOS_MEDICUERPO) for (const rengNav of rengDesde) expect(rengSubrutaDeNav(rengNavDeSubruta(rengNav, rengA.sub)), rengA.sub).toBe(rengA.sub)
  })
})

describe('menú lateral de MediCuerpo', () => {
  it('sin subrutas desconocidas ni claves repetidas', () => {
    expect(rengProblemasMenu(RENG_ID, RENG_MENU_MEDICUERPO, rengAbre, rengExiste)).toEqual([])
    const rengClaves = rengEntradasPlanas(RENG_MENU_MEDICUERPO).map((rengE) => rengClaveEntrada(RENG_ID, rengE))
    expect(new Set(rengClaves).size).toBe(rengClaves.length)
  })
  it('cada entrada coincide con un acceso del buscador', () => {
    expect(RENG_MENU_MEDICUERPO.map((rengE) => rengE.sub).sort()).toEqual(RENG_ACCESOS_MEDICUERPO.map((rengA) => rengA.sub).sort())
  })
  it('la vista inicial y «cuerpo» marcan Medicamentos', () => {
    expect(rengEntradaActiva(RENG_ID, RENG_MENU_MEDICUERPO, { id: RENG_ID, sub: null })).toBe(`${RENG_ID}/medicamentos`)
    expect(rengEntradaActiva(RENG_ID, RENG_MENU_MEDICUERPO, { id: RENG_ID, sub: 'cuerpo' })).toBe(`${RENG_ID}/medicamentos`)
    expect(rengEntradaActiva(RENG_ID, RENG_MENU_MEDICUERPO, { id: RENG_ID, sub: 'atlas' })).toBe(`${RENG_ID}/atlas`)
    expect(rengRutaLegible(RENG_ID, RENG_MENU_MEDICUERPO, RENG_ACCESOS_MEDICUERPO, { id: RENG_ID, sub: 'mesa' })).toBe('Explorar › Mesa de estructuras')
  })
  it('es el único destino principal y la vista marca su fila de destinos como redundante', () => {
    const RENG_MODULOS = join(import.meta.dirname, '../src/renderer/modules')
    const rengT = readFileSync(join(RENG_MODULOS, RENG_ID, 'index.ts'), 'utf8')
    expect(rengT).toMatch(/^\s*principal: true,$/m)
    expect(readFileSync(join(RENG_MODULOS, RENG_ID, 'View.tsx'), 'utf8')).toMatch(/<RengDestinos [^>]*redundante>/)
  })
})
