import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { it } from 'vitest'
import { RENG_CATALOGO, RENG_CURVAS } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { rengConstruirIndice, rengSerializarIndice } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/indice'

it('genera datos/indice.json a partir de las fichas', () => {
  const rengRuta = resolve(import.meta.dirname, '../../src/renderer/modules/medicuerpo/cuerpo/datos/indice.json')
  writeFileSync(rengRuta, rengSerializarIndice(rengConstruirIndice(RENG_CATALOGO, RENG_CURVAS)))
})
