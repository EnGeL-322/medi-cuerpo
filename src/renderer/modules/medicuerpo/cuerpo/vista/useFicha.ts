import { useEffect, useState } from 'react'
import { rengCargarFicha, rengFichaCargada } from '../datos/catalogoDemanda'
import type { RengFichaFarmaco } from '../datos/modelo'

export interface RengEstadoFicha {
  ficha: RengFichaFarmaco | undefined
  cargando: boolean
  error: string | null
}

export function useRengFicha(rengId: string | null): RengEstadoFicha {
  const [rengResultado, rengSetResultado] = useState<{ id: string; ficha: RengFichaFarmaco | undefined; error: string | null } | null>(null)
  const rengYa = rengId ? rengFichaCargada(rengId) : undefined

  useEffect(() => {
    if (!rengId || rengFichaCargada(rengId)) return
    let rengVigente = true
    rengCargarFicha(rengId)
      .then((rengF) => {
        if (rengVigente) rengSetResultado({ id: rengId, ficha: rengF, error: rengF ? null : 'No se encontró la ficha.' })
      })
      .catch(() => {
        if (rengVigente) rengSetResultado({ id: rengId, ficha: undefined, error: 'No se pudo cargar la ficha.' })
      })
    return () => {
      rengVigente = false
    }
  }, [rengId])

  if (!rengId) return { ficha: undefined, cargando: false, error: null }
  if (rengYa) return { ficha: rengYa, cargando: false, error: null }
  if (rengResultado?.id === rengId) return { ficha: rengResultado.ficha, cargando: false, error: rengResultado.error }
  return { ficha: undefined, cargando: true, error: null }
}
