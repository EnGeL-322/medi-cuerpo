import { spawn, spawnSync } from 'node:child_process'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const RENG_PROYECTO = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
export const rengEspera = (rengMs) => new Promise((rengOk) => setTimeout(rengOk, rengMs))

export async function rengAbrirApp(rengPerfil, rengPuerto = 9351, rengOpciones = {}) {
  rmSync(rengPerfil, { recursive: true, force: true })
  mkdirSync(rengPerfil, { recursive: true })
  const rengArgs = ['.', `--remote-debugging-port=${rengPuerto}`, '--disable-backgrounding-occluded-windows', ...(rengOpciones.args ?? [])]
  const rengT0 = performance.now()
  const rengProc = spawn(resolve(RENG_PROYECTO, 'node_modules/electron/dist/electron.exe'), rengArgs, { cwd: RENG_PROYECTO, env: { ...process.env, RENG_PERFIL_PRUEBA: rengPerfil }, stdio: ['ignore', 'pipe', 'pipe'] })
  let rengSalida = ''
  rengProc.stdout.on('data', (rengD) => (rengSalida += rengD.toString()))
  rengProc.stderr.on('data', (rengD) => (rengSalida += rengD.toString()))
  let rengPagina = null
  for (let rengI = 0; rengI < 300 && !rengPagina; rengI++) {
    try {
      const rengLista = await (await fetch(`http://127.0.0.1:${rengPuerto}/json`)).json()
      rengPagina = rengLista.find((rengP) => rengP.type === 'page' && rengP.webSocketDebuggerUrl)
    } catch {
      await rengEspera(50)
    }
  }
  if (!rengPagina) throw new Error(`sin página CDP\n${rengSalida}`)
  const rengWs = new WebSocket(rengPagina.webSocketDebuggerUrl)
  await new Promise((rengOk, rengKo) => {
    rengWs.onopen = rengOk
    rengWs.onerror = rengKo
  })
  let rengId = 0
  const rengPend = new Map()
  const rengConsola = []
  rengWs.onmessage = (rengEv) => {
    const rengM = JSON.parse(rengEv.data)
    if (rengM.id && rengPend.has(rengM.id)) {
      const { ok: rengOk, ko: rengKo } = rengPend.get(rengM.id)
      rengPend.delete(rengM.id)
      if (rengM.error) rengKo(new Error(JSON.stringify(rengM.error)))
      else rengOk(rengM.result)
    } else if (rengM.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(rengM.params.type)) {
      rengConsola.push(`${rengM.params.type}: ${rengM.params.args.map((rengA) => rengA.value ?? rengA.description).join(' ')}`)
    } else if (rengM.method === 'Runtime.exceptionThrown') {
      rengConsola.push(`excepción: ${rengM.params.exceptionDetails.text} ${rengM.params.exceptionDetails.exception?.description ?? ''}`)
    }
  }
  const rengCmd = (rengMetodo, rengParams = {}) =>
    new Promise((rengOk, rengKo) => {
      const rengN = ++rengId
      rengPend.set(rengN, { ok: rengOk, ko: rengKo })
      rengWs.send(JSON.stringify({ id: rengN, method: rengMetodo, params: rengParams }))
    })
  await rengCmd('Runtime.enable')
  await rengCmd('Page.enable')
  const rengEv = async (rengExpr) => {
    const rengR = await rengCmd('Runtime.evaluate', { expression: `(async()=>{${rengExpr}})()`, awaitPromise: true, returnByValue: true })
    if (rengR.exceptionDetails) throw new Error(`evaluate: ${rengR.exceptionDetails.exception?.description ?? rengR.exceptionDetails.text}`)
    return rengR.result.value
  }
  const rengEsperar = async (rengExpr, rengMs = 15000, rengPaso = 25) => {
    const rengIni = performance.now()
    while (performance.now() - rengIni < rengMs) {
      const rengV = await rengEv(rengExpr)
      if (rengV) return rengV
      await rengEspera(rengPaso)
    }
    throw new Error(`tiempo agotado esperando: ${rengExpr.slice(0, 120)}`)
  }
  const rengCaptura = async (rengArchivo) => {
    const rengR = await rengCmd('Page.captureScreenshot', { format: 'png' })
    mkdirSync(dirname(rengArchivo), { recursive: true })
    writeFileSync(rengArchivo, Buffer.from(rengR.data, 'base64'))
    return rengArchivo
  }
  const rengCerrar = async () => {
    try {
      rengWs.close()
    } catch {
      rengWs.onmessage = null
    }
    spawnSync('taskkill', ['/PID', String(rengProc.pid), '/T', '/F'], { stdio: 'ignore' })
    await rengEspera(300)
  }
  return { proc: rengProc, t0: rengT0, ws: rengWs, cmd: rengCmd, ev: rengEv, esperar: rengEsperar, captura: rengCaptura, cerrar: rengCerrar, consola: rengConsola }
}

export function rengMemoriaProcesos(rengPidRaiz) {
  const rengPs = spawnSync('powershell', ['-NoProfile', '-Command', "Get-CimInstance Win32_Process | Select-Object ProcessId,ParentProcessId | ConvertTo-Json -Compress"], { encoding: 'utf8' })
  const rengTodos = JSON.parse(rengPs.stdout)
  const rengIds = new Set([rengPidRaiz])
  let rengCambio = true
  while (rengCambio) {
    rengCambio = false
    for (const rengP of rengTodos) {
      if (rengIds.has(rengP.ParentProcessId) && !rengIds.has(rengP.ProcessId)) {
        rengIds.add(rengP.ProcessId)
        rengCambio = true
      }
    }
  }
  const rengLista = [...rengIds].join(',')
  const rengGp = spawnSync('powershell', ['-NoProfile', '-Command', `Get-Process -Id ${rengLista} -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,WorkingSet64,PrivateMemorySize64 | ConvertTo-Json -Compress`], { encoding: 'utf8' })
  const rengProcs = [].concat(JSON.parse(rengGp.stdout))
  return {
    procesos: rengProcs.length,
    privadoMB: rengProcs.reduce((rengA, rengP) => rengA + rengP.PrivateMemorySize64, 0) / 1048576,
    residenteMB: rengProcs.reduce((rengA, rengP) => rengA + rengP.WorkingSet64, 0) / 1048576
  }
}

export const rengMediana = (rengXs) => {
  const rengO = [...rengXs].sort((rengA, rengB) => rengA - rengB)
  const rengM = rengO.length >> 1
  return rengO.length % 2 ? rengO[rengM] : (rengO[rengM - 1] + rengO[rengM]) / 2
}

export const rengPerfilScratch = (rengNombre) => join(process.env.RENG_SCRATCH ?? resolve(RENG_PROYECTO, 'node_modules/.cache/medicuerpo/verificacion'), rengNombre)
