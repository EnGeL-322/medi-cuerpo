import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import * as THREE from 'three'
import { rengCreateEngine, rengDisposeObject, type RengEngine } from '../../../../lib/three/engine'
import { rengColorTema } from '../../vista/nivel'
import { rengEstructura, type RengCapa } from '../datos/anatomia'
import type { RengForma } from '../datos/modelo'
import { rengCargarCapa, RENG_INDICE } from './cargarModelo'

export interface RengAnimacionRecorrido {
  clave: string
  ruta: string[]
  formas: RengForma[]
  reproduciendo: boolean
  reducido: boolean
}

export interface RengVisorApi {
  restablecer: () => void
  encuadrar: (rengIds: readonly string[]) => void
  acercar: (rengFactor: number) => void
}

interface RengProps {
  activo: boolean
  capas: ReadonlySet<RengCapa>
  seleccion: string | null
  resaltadas?: readonly string[]
  aislar: boolean
  onSeleccion: (rengId: string) => void
  onFallo: (rengMotivo: string) => void
  animacion?: RengAnimacionRecorrido | null
  etiqueta: string
}

const RENG_COLOR_CAPA: Record<RengCapa, [string, number]> = {
  esqueleto: ['--cuerpo-hueso', 0xe8dcc2],
  musculos: ['--cuerpo-musculo', 0xb5524a],
  organos: ['--cuerpo-organo', 0xc98a74]
}

function rengCaja(rengIds: readonly string[]): { centro: THREE.Vector3; tam: number } {
  const rengLista = rengIds.length ? rengIds : Object.keys(RENG_INDICE)
  const rengB = new THREE.Box3()
  for (const rengId of rengLista) {
    const rengI = RENG_INDICE[rengId]
    if (!rengI) continue
    rengB.expandByPoint(new THREE.Vector3(...rengI.min))
    rengB.expandByPoint(new THREE.Vector3(...rengI.max))
  }
  const rengS = rengB.getSize(new THREE.Vector3())
  return { centro: rengB.getCenter(new THREE.Vector3()), tam: Math.max(rengS.x, rengS.y, rengS.z, 0.05) }
}

function rengPuntoEnRuta(rengPuntos: THREE.Vector3[], rengS: number, rengOut: THREE.Vector3): THREE.Vector3 {
  if (rengPuntos.length === 0) return rengOut.set(0, 1, 0)
  if (rengPuntos.length === 1) return rengOut.copy(rengPuntos[0]!)
  const rengX = Math.min(0.9999, Math.max(0, rengS)) * (rengPuntos.length - 1)
  const rengI = Math.floor(rengX)
  return rengOut.copy(rengPuntos[rengI]!).lerp(rengPuntos[rengI + 1]!, rengX - rengI)
}

const RENG_N_PARTICULAS = 10

export const RengVisorCuerpo = forwardRef<RengVisorApi, RengProps>(function RengVisorCuerpo({ activo: rengActivo, capas: rengCapas, seleccion: rengSeleccion, resaltadas: rengResaltadas = [], aislar: rengAislar, onSeleccion: rengOnSeleccion, onFallo: rengOnFallo, animacion: rengAnimacion = null, etiqueta: rengEtiqueta }, rengApi) {
  const rengLienzo = useRef<HTMLCanvasElement>(null)
  const rengEngine = useRef<RengEngine | null>(null)
  const rengGrupos = useRef(new Map<RengCapa, THREE.Group>())
  const rengCargando = useRef(new Set<RengCapa>())
  const rengMallas = useRef(new Map<string, THREE.Mesh>())
  const rengParticulas = useRef<THREE.Group | null>(null)
  const rengAnim = useRef<RengAnimacionRecorrido | null>(rengAnimacion)
  rengAnim.current = rengAnimacion
  const rengProgreso = useRef(0)
  const [rengCargadas, rengSetCargadas] = useState(0)
  const [rengHover, rengSetHover] = useState<{ x: number; y: number; nombre: string } | null>(null)
  const [rengEstadoCarga, rengSetEstadoCarga] = useState('')
  const rengOnSel = useRef(rengOnSeleccion)
  rengOnSel.current = rengOnSeleccion

  const rengEncuadrar = (rengIds: readonly string[]): void => {
    const rengE = rengEngine.current
    if (!rengE) return
    const { centro: rengCentro, tam: rengTam } = rengCaja(rengIds)
    const rengDir = rengE.camera.position.clone().sub(rengE.controls.target).normalize()
    rengE.frame([rengCentro.x, rengCentro.y, rengCentro.z], rengTam * 1.9 + 0.12, [rengDir.x, rengDir.y, rengDir.z])
  }
  const rengRestablecer = (): void => {
    const rengE = rengEngine.current
    if (!rengE) return
    const { centro: rengCentro, tam: rengTam } = rengCaja([])
    rengE.frame([rengCentro.x, rengCentro.y, rengCentro.z], rengTam * 1.25, [0, 0, 1])
  }
  useImperativeHandle(rengApi, () => ({
    restablecer: rengRestablecer,
    encuadrar: rengEncuadrar,
    acercar: (rengF) => {
      const rengE = rengEngine.current
      if (!rengE) return
      const rengD = rengE.camera.position.clone().sub(rengE.controls.target)
      rengE.camera.position.copy(rengE.controls.target).add(rengD.multiplyScalar(rengF))
    }
  }))

  useEffect(() => {
    const rengC = rengLienzo.current
    if (!rengC) return
    let rengE: RengEngine
    try {
      rengE = rengCreateEngine(rengC)
    } catch (rengErr) {
      const rengM = rengErr instanceof Error ? rengErr.message : String(rengErr)
      rengOnFallo(/webgl/i.test(rengM) ? 'Este equipo no puede mostrar gráficos 3D (no se pudo crear el contexto WebGL).' : `No se pudo iniciar el 3D: ${rengM}`)
      return
    }
    rengEngine.current = rengE
    rengE.controls.enableDamping = true
    rengE.scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 0.5))
    const rengP = new THREE.Group()
    rengP.name = 'particulas'
    rengE.scene.add(rengP)
    rengParticulas.current = rengP
    rengRestablecer()
    const rengRay = new THREE.Raycaster()
    const rengNdc = new THREE.Vector2()
    let rengAbajo: { x: number; y: number } | null = null
    const rengTocada = (rengEv: PointerEvent): string | null => {
      const rengR = rengC.getBoundingClientRect()
      rengNdc.set(((rengEv.clientX - rengR.left) / rengR.width) * 2 - 1, -((rengEv.clientY - rengR.top) / rengR.height) * 2 + 1)
      rengRay.setFromCamera(rengNdc, rengE.camera)
      const rengVisibles = [...rengMallas.current.values()].filter((rengM) => rengM.visible && rengM.parent?.visible !== false && (rengM.material as THREE.MeshStandardMaterial).opacity > 0.3)
      return (rengRay.intersectObjects(rengVisibles, false)[0]?.object.name as string | undefined) ?? null
    }
    const rengDown = (rengEv: PointerEvent): void => {
      rengAbajo = { x: rengEv.clientX, y: rengEv.clientY }
    }
    const rengUp = (rengEv: PointerEvent): void => {
      if (!rengAbajo || Math.hypot(rengEv.clientX - rengAbajo.x, rengEv.clientY - rengAbajo.y) > 5 || rengEv.button !== 0) return
      rengAbajo = null
      const rengId = rengTocada(rengEv)
      if (rengId) rengOnSel.current(rengId)
    }
    let rengUltimo = 0
    const rengMove = (rengEv: PointerEvent): void => {
      if (rengEv.buttons) return
      const rengAhora = performance.now()
      if (rengAhora - rengUltimo < 60) return
      rengUltimo = rengAhora
      const rengId = rengTocada(rengEv)
      const rengR = rengC.getBoundingClientRect()
      rengSetHover(rengId ? { x: rengEv.clientX - rengR.left + 14, y: rengEv.clientY - rengR.top + 14, nombre: rengEstructura(rengId)?.nombre ?? rengId } : null)
    }
    const rengLeave = (): void => rengSetHover(null)
    rengC.addEventListener('pointerdown', rengDown)
    rengC.addEventListener('pointerup', rengUp)
    rengC.addEventListener('pointermove', rengMove)
    rengC.addEventListener('pointerleave', rengLeave)
    const rengPuntos: THREE.Vector3[] = []
    let rengClaveRuta = ''
    const rengTmp = new THREE.Vector3()
    rengE.onFrame((rengDt) => {
      const rengA = rengAnim.current
      const rengG = rengParticulas.current
      if (!rengG) return
      if (!rengA) {
        rengG.visible = false
        return
      }
      rengG.visible = true
      const rengClave = `${rengA.clave}|${rengA.ruta.join(',')}`
      if (rengClave !== rengClaveRuta) {
        rengClaveRuta = rengClave
        rengPuntos.length = 0
        for (const rengId of rengA.ruta) {
          const rengI = RENG_INDICE[rengId]
          if (rengI) rengPuntos.push(new THREE.Vector3(...rengI.centro))
        }
        rengProgreso.current = 0
      }
      if (rengA.reproduciendo && !rengA.reducido) rengProgreso.current = (rengProgreso.current + rengDt / 5) % 1
      rengG.children.forEach((rengM, rengI) => {
        const rengTipo = rengM.userData.forma as RengForma
        const rengFase = rengI / RENG_N_PARTICULAS
        let rengS = rengA.reducido ? rengFase + 0.5 / RENG_N_PARTICULAS : (rengProgreso.current + rengFase) % 1
        let rengVisible = rengA.formas.includes(rengTipo)
        if (rengA.formas.includes('deposito') && rengA.formas.includes('disuelto')) {
          if (rengTipo === 'deposito') {
            rengVisible = true
            rengS = 0
          } else if (rengTipo === 'disuelto') rengVisible = rengA.reducido || rengProgreso.current > 0.3
        } else if (rengA.formas.includes('tableta') && rengA.formas.includes('disuelto')) {
          if (rengTipo === 'tableta') {
            rengVisible = rengI === 0
            rengS = rengA.reducido ? 0.6 : Math.min(rengProgreso.current * 1.4, 1)
          } else if (rengTipo === 'disuelto') {
            rengVisible = rengA.reducido || rengProgreso.current > 0.55
            rengS = 1
          }
        } else if (rengA.formas.includes('disuelto') && rengA.formas.includes('metabolito')) {
          const rengMetabolizado = rengA.formas[0] === 'metabolito' ? rengI % 5 !== 0 : rengS > 0.5
          rengVisible = rengTipo === (rengMetabolizado ? 'metabolito' : 'disuelto')
        }
        rengM.visible = rengVisible
        if (!rengVisible) return
        rengPuntoEnRuta(rengPuntos, rengS, rengTmp)
        const rengDesv = rengTipo === 'tableta' ? 0 : 0.018
        rengM.position.set(rengTmp.x + Math.sin(rengI * 2.3) * rengDesv, rengTmp.y + Math.cos(rengI * 1.7) * rengDesv, rengTmp.z + 0.03 + Math.sin(rengI) * rengDesv)
      })
    })
    return () => {
      rengC.removeEventListener('pointerdown', rengDown)
      rengC.removeEventListener('pointerup', rengUp)
      rengC.removeEventListener('pointermove', rengMove)
      rengC.removeEventListener('pointerleave', rengLeave)
      rengE.dispose()
      rengEngine.current = null
      rengGrupos.current.clear()
      rengCargando.current.clear()
      rengMallas.current.clear()
      rengParticulas.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const rengG = rengParticulas.current
    if (!rengG || rengG.children.length) return
    const rengMat = (rengV: string, rengDef: number): THREE.MeshStandardMaterial => new THREE.MeshStandardMaterial({ color: rengColorTema(rengV, rengDef), emissive: rengColorTema(rengV, rengDef), emissiveIntensity: 0.35, roughness: 0.4 })
    const rengTableta = new THREE.CylinderGeometry(0.022, 0.022, 0.009, 24)
    const rengEsfera = new THREE.SphereGeometry(0.009, 16, 12)
    const rengOcta = new THREE.OctahedronGeometry(0.012)
    for (let rengI = 0; rengI < RENG_N_PARTICULAS; rengI++)
      for (const [rengForma, rengGeo, rengV, rengDef] of [
        ['tableta', rengTableta, '--cuerpo-tableta', 0xf4f4f4],
        ['disuelto', rengEsfera, '--cuerpo-disuelto', 0x38bdf8],
        ['metabolito', rengOcta, '--cuerpo-metabolito', 0xf59e0b]
      ] as const) {
        const rengM = new THREE.Mesh(rengGeo, rengMat(rengV, rengDef))
        rengM.userData.forma = rengForma
        if (rengForma === 'tableta') rengM.rotation.x = Math.PI / 2
        rengM.renderOrder = 10
        rengG.add(rengM)
      }
    const rengDeposito = new THREE.Mesh(new THREE.SphereGeometry(0.02, 16, 12), rengMat('--cuerpo-deposito', 0xa78bfa))
    rengDeposito.scale.set(1.4, 0.7, 1)
    rengDeposito.userData.forma = 'deposito'
    rengDeposito.renderOrder = 10
    rengG.add(rengDeposito)
  })

  useEffect(() => {
    const rengE = rengEngine.current
    if (!rengE) return
    for (const rengCapa of rengCapas) {
      if (rengGrupos.current.has(rengCapa) || rengCargando.current.has(rengCapa)) continue
      rengCargando.current.add(rengCapa)
      rengSetEstadoCarga('Cargando el modelo…')
      rengCargarCapa(rengCapa)
        .then((rengEscena) => {
          if (rengEngine.current !== rengE) {
            rengDisposeObject(rengEscena)
            return
          }
          const [rengV, rengDef] = RENG_COLOR_CAPA[rengCapa]
          const rengBase = rengColorTema(rengV, rengDef)
          rengEscena.traverse((rengO) => {
            const rengM = rengO as THREE.Mesh
            if (!rengM.isMesh) return
            rengM.geometry.computeVertexNormals()
            rengM.material = new THREE.MeshStandardMaterial({ color: rengBase, roughness: 0.62, metalness: 0.05, transparent: true, opacity: 1 })
            rengM.name = rengM.name || rengM.parent?.name || ''
            rengM.userData.capa = rengCapa
            rengM.userData.base = rengBase
            rengMallas.current.set(rengM.name, rengM)
          })
          rengE.scene.add(rengEscena)
          rengGrupos.current.set(rengCapa, rengEscena)
          rengCargando.current.delete(rengCapa)
          rengSetCargadas((rengN) => rengN + 1)
          rengSetEstadoCarga('')
        })
        .catch((rengErr: unknown) => {
          rengCargando.current.delete(rengCapa)
          rengSetEstadoCarga('')
          rengOnFallo(`No se pudo cargar la capa «${rengCapa}»: ${rengErr instanceof Error ? rengErr.message : String(rengErr)}`)
        })
    }
  }, [rengCapas, rengOnFallo])

  useEffect(() => {
    const rengAcento = rengColorTema('--cuerpo-seleccion', 0x38d0ff)
    const rengEtapa = rengColorTema('--cuerpo-resalte', 0xffd166)
    const rengHayEtapa = rengResaltadas.length > 0
    for (const [rengCapa, rengG] of rengGrupos.current) rengG.visible = rengCapas.has(rengCapa) || (rengAislar && rengSeleccion !== null && rengEstructura(rengSeleccion)?.capa === rengCapa)
    for (const [rengId, rengM] of rengMallas.current) {
      const rengMat = rengM.material as THREE.MeshStandardMaterial
      const rengSel = rengId === rengSeleccion
      const rengEnEtapa = rengResaltadas.includes(rengId)
      rengM.visible = !rengAislar || rengSeleccion === null || rengSel
      rengMat.color.setHex(rengM.userData.base as number)
      rengMat.emissive.setHex(rengSel ? rengAcento : rengEnEtapa ? rengEtapa : 0x000000)
      rengMat.emissiveIntensity = rengSel ? 0.55 : rengEnEtapa ? 0.45 : 0
      rengMat.opacity = rengHayEtapa && !rengEnEtapa && !rengSel ? 0.18 : 1
      rengMat.depthWrite = rengMat.opacity === 1
    }
  }, [rengCapas, rengSeleccion, rengResaltadas, rengAislar, rengCargadas])

  useEffect(() => rengEngine.current?.activar(rengActivo), [rengActivo])

  return (
    <div className="cm-lienzo">
      <canvas ref={rengLienzo} role="img" aria-label={rengEtiqueta} />
      {rengHover && (
        <div className="tooltip-3d" style={{ left: rengHover.x, top: rengHover.y }} role="tooltip">
          {rengHover.nombre}
        </div>
      )}
      {rengEstadoCarga && (
        <div className="cm-cargando" role="status">
          {rengEstadoCarga}
        </div>
      )}
    </div>
  )
})
