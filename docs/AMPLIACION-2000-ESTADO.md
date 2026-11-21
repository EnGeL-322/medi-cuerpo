# Ampliación a unas 2000 presentaciones · estado por lotes

Encargo del 2026-11-15. Sin commit hasta que lo indique el titular. Este documento se actualiza al cerrar cada lote: qué está hecho, cómo se comprobó y el siguiente paso exacto.

## Estado actual (2026-11-15) · leer primero

**Dónde estamos.** Fase 0 aprobada. Fase 1 (infraestructura) hecha y piloto cerrado. Fase 2 · Lote 1 (100 presentaciones de sólidos orales) cerrado el 2026-11-15. Fase 2 · Lote 2 (20 principios activos) cerrado el 2026-11-18. Fase 2 · Lote 3 (20 principios activos) cerrado el 2026-11-18. Fase 2 · Lotes 4, 5 y 6 cerrados y aceptados. Fase 2 · Lotes 7, 8 y 9 cerrados y aceptados. **Fase 2 · Lotes 10, 11 y 12 (20 principios activos cada uno) cerrados el 2026-11-19 en modo autónomo, a la espera de revisión del titular** (ver al final «Fase 2 · Lote 10», «Lote 11» y «Lote 12»; recuentos actuales: 616 fichas, 655 presentaciones, 629 de sólidos orales). Nada está en commit. Los recuentos de la tabla de abajo son los del cierre del piloto; los del lote 1 están en su sección.

**Decisiones de la Fase 0 aprobadas por el titular:**
1. Se mantienen las citas breves (≤ 260 caracteres) de DailyMed y CIMA; el criterio y la condición de volver a revisarlo antes de cualquier publicación externa están por escrito en `licencias/CREDITOS-DATOS.txt`.
2. Metas realistas: ≈ 1000 sólidos, ≈ 270 líquidos, ≈ 500 inyectables; la cuarta tanda (otras vías y formas) se estudia después.
3. Sin farmacogenética.
4. Biológicos excluidos.
5. Mallas de piel y de las venas cefálica y basílica con el tamaño medido; si superan 3 MB en total, avisar antes de incluirlas (ver «Mallas» en el paso 6: **no incluidas, a la espera de decisión**).
6. Fichas de combinación con componentes enlazados; los suplementos se aplazan.
7. Texto de PubChem matizado en `licencias/CREDITOS-DATOS.txt` y `npm run avisos` ejecutado.

**Recuentos reales hoy** (leídos del índice generado `datos/indice.json`; los reproduce `verificar-lista.mjs`):

| Categoría | Presentaciones | Principios activos con alguna de ellas | Meta de la Fase 2 |
|---|---|---|---|
| Sólidos orales | 309 | 304 | ≈ 1000 |
| Líquidos orales | 14 | 14 | ≈ 270 |
| Inyectables | 12 | 12 | ≈ 500 |
| **Total** | **335** | **311 fichas** | ≈ 1770 |

Por vía: oral 322, intravenosa 6, intramuscular 4, subcutánea 4, epidural 1, intratecal 1, sublingual 1 (una presentación puede tener varias vías). Mercado España: 31 presentaciones en 28 fichas. Antes del piloto: 300 fichas y 303 presentaciones (299 sólidas y 4 líquidas, 0 inyectables). El piloto añadió 32: las 30 del piloto y 2 inyectables extra (morfina epidural/intratecal y ondansetrón intravenoso de CIMA).

**Descartes.** Los del piloto, con su motivo, están en el paso 6. Descartes heredados de la ampliación a 300: `docs/ESTADO-ABSORCION-300.md`.

**Qué recorrido por Electron hay y cuál no.** Frase del informe anterior: «22 fichas y 41 presentaciones recorren las cinco etapas». Significaba esto, y solo esto:
- *Cómo:* `scripts/verificacion/verificar-recorrido.mjs` abre la app compilada con Electron y un perfil de pruebas aislado, activa el control remoto (CDP), escribe el nombre de cada ficha en el buscador, la abre, elige una por una **todas** sus presentaciones, pulsa «Iniciar recorrido» y pulsa las cinco etapas de la lista numerada; en cada etapa lee el texto de su panel.
- *Qué comprobaba:* que cada una de las cinco etapas muestra un texto de al menos 40 caracteres, que no contiene `undefined`, `NaN` ni `[object`, y que la consola del renderer queda sin errores ni avisos. Eran las 22 fichas con datos nuevos del piloto (entonces 308 fichas en total).
- *Qué NO comprobaba:* que las estructuras del cuerpo iluminadas en 3D sean las correctas (solo se miraron a ojo las capturas de unos pocos casos), que el texto sea exacto frente a la fuente (eso lo hace `test:fuentes`, no el recorrido), el botón «Reproducir» ni el modo «Ver todo como texto», el teclado y la accesibilidad del recorrido, ni las 286 fichas restantes de entonces.
- *Hoy:* se ha repetido sobre **todo el catálogo**: 311 fichas y 335 presentaciones, las cinco etapas de cada una con texto, sin `undefined` y sin errores de consola (detalle en el paso 6). Los límites de lo que no comprueba siguen siendo los mismos.

**Qué falta** (en este orden):
1. OK del titular al piloto y decisión sobre las mallas de piel y venas (opciones en el paso 6).
2. Fase 2: lotes de fichas con las mismas puertas (citas literales verificadas, `test:fuentes`, verificación en la app) hasta las metas; descartes con motivo.
3. Al final de la Fase 2: actualizar los textos «300 fichas» (apuntado, **no hecho**): `README.md` (líneas 3 y 11), `CLAUDE.md` (línea 7), `package.json` (`description`), `src/renderer/inicio.ts` (línea 35), `src/renderer/modules/medicuerpo/accesos.ts` (línea 4) y `src/renderer/modules/medicuerpo/index.ts` (línea 10, el manifiesto del módulo).
4. Cuarta tanda: estudiarla después de la Fase 2.

**Cómo retomar.** Comandos de comprobación: `npm run indice`, `npm run typecheck`, `npm test`, `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes`, `npm run build` y, para la app real, los guiones de `scripts/verificacion/` (`verificar-recorrido.mjs`, `verificar-lista.mjs`, `verificar-categorias.mjs`, `verificar-aviso-iv.mjs`, `medir-arranque.mjs`). Flujo de una ficha nueva: añadir el documento a `scripts/medicamentos/lista.mjs`, `obtener-etiquetas.mjs`, leer su farmacocinética, escribir la especificación (modelos en `scripts/medicamentos/especificaciones/piloto/`), `redactar.mjs`, índice, pruebas y app. La caché de etiquetas y los lotes están en `node_modules/.cache/medicuerpo/` (se pierde con `npm ci`; se vuelve a bajar con `obtener-etiquetas.mjs`).

## Fase 1 · Paso 1 · Línea base medida (2026-11-15)

Decisiones de la Fase 0 aprobadas por el titular: (1) citas breves ≤ 260 caracteres de DailyMed y CIMA, con criterio y condición de revisión por escrito en `licencias/`; (2) metas ≈ 1000 sólidos, ≈ 270 líquidos, ≈ 500 inyectables; (3) sin farmacogenética; (4) biológicos excluidos; (5) mallas de piel y venas cefálica/basílica con tamaño medido y aviso si superan 3 MB en total; (6) fichas de combinación con componentes enlazados, suplementos aplazados; (7) texto de PubChem matizado y `npm run avisos`.

**Comprobaciones de código** (sin cambios en el catálogo; 300 fichas, 300 ids):

| Comprobación | Resultado | Coincide con lo documentado |
|---|---|---|
| `npm run typecheck` | sin errores | sí |
| `npm test` | 23 archivos, **480 pruebas** pasan (10,0 s) | sí (480) |
| `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes` | **602** pasan (4,65 s) | sí (602) |
| `npm run build` | compila; `View-BD0QaJy4.js` = 7 878,04 kB (incluye todo el catálogo) | sí (mismo tamaño y hash que el build del 2026-11-12) |

**Único cambio de código del paso 1:** `src/main/index.ts` admite la variable `RENG_PERFIL_PRUEBA` (ruta absoluta, solo si la app no está empaquetada) para usar un perfil de pruebas en lugar de `%APPDATA%\MediCuerpo`, igual que la app hermana de química. Así la verificación con CDP no toca los datos reales ni choca con la instancia única. Sin esa variable, el comportamiento no cambia.

**Método de medida** (`scripts/verificacion/medir-arranque.mjs`, el mismo antes y después de cada cambio): `npm run build`; 5 lanzamientos independientes de `electron.exe .` con perfil nuevo y `--remote-debugging-port`; cronómetro desde el lanzamiento del proceso.
- *Ventana*: hasta que `#root` tiene contenido (portada).
- *Lista*: desde fijar `#/medicuerpo/medicamentos` hasta que la lista tiene al menos una fila (incluye cargar el módulo y el catálogo).
- *Ficha*: desde el clic en ibuprofeno hasta que aparece su nombre en la ficha.
- *Memoria*: 3 s después, montón de JavaScript del renderer (`Runtime.getHeapUsage`) y memoria privada/residente de todo el árbol de procesos (PowerShell, `Get-Process`).

| Medida (mediana de 5; mínimo–máximo) | 300 fichas (línea base) |
|---|---|
| Ventana (portada) | 262 ms (252–473) |
| Lista de medicamentos lista | 350 ms (320–451) |
| Abrir la ficha de ibuprofeno | 1 273 ms (1 235–1 292) |
| Montón JS del renderer, usado | 40,6 MB (38,5–44,4) |
| Montón JS del renderer, total | 68,1 MB (67,6–69,5) |
| Memoria privada del árbol (4 procesos) | 376,9 MB (373,7–386,9) |
| Memoria residente del árbol (4 procesos) | 487,2 MB (482,6–492,5) |

Observación: abrir una ficha tarda 1,27 s hoy (no 150 ms); no se ha medido qué parte es del catálogo y cuál del dibujo de la estructura 2D/3D (el componente de química se monta con cada ficha, aunque su sección esté plegada); el presupuesto de «abrir una ficha» se fijará **relativo a esta cifra**, no absoluto. Sin errores ni avisos en la consola del renderer durante las 5 ejecuciones.

**Puerta del paso 1: superada**, nada difiere del estado documentado.

## Fase 1 · Paso 2 · Índice ligero y fichas bajo demanda (2026-11-15)

**Qué cambia.** El renderer ya no importa las 300 fichas al arrancar. Carga solo `datos/indice.json` (141 KB: identificadores, nombre, clase, área, sinónimos, estado, SMILES —para «Comprobar mi estructura»— y, por presentación, producto, titular, mercado, forma, liberación y «con curva») y trae cada ficha cuando se abre, con una caché de 40 fichas (las últimas usadas).
- Código nuevo: `datos/indice.ts` (tipos, construcción, serialización, búsqueda), `datos/catalogoDemanda.ts` (índice, `rengCargarFicha`, `rengFichaCargada`, `rengFuente`), `datos/fichas.ts` (funciones puras de ficha, sin carga), `datos/curvas.ts`, `vista/useFicha.ts` (gancho `useRengFicha`).
- `datos/catalogo.ts` sigue exportando exactamente lo mismo (carga completa en Node) para las pruebas, que **no se han tocado**. El renderer ya no lo importa.
- El índice se genera con `npm run indice` (`tests/generar/indice.generar.ts`) y una prueba (`tests/cuerpo/indice-demanda.test.ts`) falla si está desactualizado.
- `identidadFarmaco.ts` reconoce moléculas con el SMILES del índice (la prueba existente solo usa `.id`).
- La ficha muestra «Cargando la ficha…» o un error con `role="alert"` mientras se carga.

**Comprobaciones.** `npm run typecheck` sin errores · `npm test` **488** (480 anteriores intactas + 8 nuevas) · `test:fuentes` **602** · `npm run build` compila (308 archivos en `assets/`: 300 fichas sueltas más los módulos).
Verificación en Electron con CDP (`scripts/verificacion/verificar-recorrido.mjs`): 25 fichas al azar (semilla fija) y paracetamol, ibuprofeno, ticagrelor, omeprazol y vancomicina, con todas sus presentaciones (8): ficha → «Iniciar recorrido» → las cinco etapas con texto (≥ 40 caracteres, sin `undefined`/`NaN`) → volver. **Sin problemas y sin errores en la consola.**

**Mediciones con el mismo método (mediana de 5).**

| Medida | Antes (300, carga entera) | Después (300, bajo demanda) |
|---|---|---|
| Ventana | 262 ms | 279 ms |
| Lista lista | 350 ms | 349 ms |
| Abrir ibuprofeno | 1 273 ms | 1 230 ms |
| Montón JS usado | 40,6 MB | 39,4 MB |
| Memoria privada del árbol | 376,9 MB | 365,7 MB |
| `View-*.js` | 7 878 kB | 5 265 kB |

Con 300 fichas la mejora es pequeña y el arranque no empeora (las diferencias de ventana quedan dentro del ruido: rango 254–311 ms). El beneficio está en la escala. **Prueba de escala sintética** (copia de trabajo fuera del proyecto con 1 800 fichas: las 300 reales más 1 500 clones con otro id, solo para medir; no son datos y no están en el proyecto):

| Medida (1 800 fichas) | Todo cargado al arrancar | Bajo demanda |
|---|---|---|
| `View-*.js` | 23 288 kB | 6 286 kB |
| Lista lista | 406 ms | 370 ms |
| Abrir ibuprofeno | 1 248 ms | 1 227 ms |
| Montón JS usado | 66,3 MB | 40,0 MB |
| Memoria privada del árbol | 454,1 MB | 421,2 MB |
| Índice | — | 850 KB (≈ 470 bytes por presentación) |

Lectura: con 1 800 fichas, cargar todo costaría unos 26 MB más de montón y 17 MB más de código para parsear que cargar bajo demanda; el tiempo de la lista es 36 ms menor. La lista de 1 800 filas sin virtualizar aún cuesta (370 ms frente a 349 ms con 300): se resuelve en el paso 4.

**Pendiente de medir/limitaciones.** La prueba de escala usa clones idénticos en tamaño a las fichas actuales; las fichas de inyectables serán mayores. El tiempo de «abrir una ficha» (≈ 1,2 s) no depende del catálogo y queda para otra optimización fuera de este encargo.

**Puerta del paso 2: superada.**

## Fase 1 · Paso 3 · Modelo extendido (2026-11-15)

**Datos (opcionales, las 300 fichas no se tocan).** `RengPresentacion` gana `familia`, `vias`, `formaNormalizada` y `excipientesRiesgo` (nombre, motivo, vías y cita); `RengEtapa` gana `noAplica` (motivo y cita); `RengFichaFarmaco` gana `combinacion` (componentes enlazados por id de ficha); `RengForma` gana `'deposito'`. Sin esos campos, una presentación es un sólido o líquido oral de vía oral, como hasta ahora.

**Lógica pura** (`nucleo/presentaciones.ts`, `datos/fichas.ts`):
- Familia (sólido oral, líquido oral, inyectable) y relación con el cuerpo (digestiva, directa, depósito, local, mixta) derivadas de la forma y las vías.
- Títulos de etapa por tipo: líquido «1. Liberación (ya en forma líquida)»; intravenosa «1. Administración directa a la sangre» y «2. Absorción (no hay: entra directo)»; intramuscular/subcutánea «1. Depósito en el lugar de inyección»; intratecal/epidural «1. Llegada al lugar de administración».
- Formas dibujadas por defecto según la familia (líquidos: sin tableta; depósito: una partícula fija en el lugar de inyección y el principio activo que se reparte).
- Validación: vías conocidas, no repetidas y coherentes con la familia; forma normalizada conocida y de su familia; «no aplica» solo en liberación y absorción, con motivo, solo en vías directas para la absorción y con una cita que entra en `rengReferencias` (y por tanto en `test:fuentes`); ninguna tableta fuera de los sólidos y depósito solo en intramuscular/subcutánea/intradérmica; excipientes de riesgo con motivo, vías de la presentación y cita; combinaciones con al menos dos componentes distintos, ninguno la propia ficha y todos con ficha.
- `rengExcipientesPendientes` avisa (no falla) de excipientes de riesgo declarados sin la advertencia de la etiqueta; la lactosa de un comprimido no cuenta, el sorbitol de un jarabe sí.

**Interfaz.** La ficha muestra tipo y vía de la presentación, «Excipientes que la etiqueta destaca» (solo si los hay) y «Componentes de la combinación» con enlace a cada ficha (se oculta la sección de química en las combinaciones); el panel de recorrido usa los títulos por tipo, muestra el aviso «No aplica en esta presentación» con su cita y adapta la leyenda; el visor dibuja el depósito (elipsoide violeta, `--cuerpo-deposito`).

**Prueba nueva de fuentes** (`tests/fuentes/vias-fuentes.test.ts`): la vía de cada una de las 303 presentaciones (oral por defecto) figura en la ruta de su etiqueta (`productos[].ruta`) o ficha técnica (`meta.via`): 303 comprobadas, ninguna discrepancia.

**Comprobaciones.** 15 pruebas nuevas del modelo (válidas e inválidas con fichas sintéticas en memoria derivadas del paracetamol, solo en las pruebas); una de ellas encontró un fallo real (una vía desconocida rompía la inferencia en vez de reportarse), corregido. Verificado en Electron: 12 fichas al azar y paracetamol/ibuprofeno recorren las cinco etapas sin problemas ni errores de consola. **Aún no verificado en la app con datos reales de líquidos, intravenosas ni depósitos: llegará con el piloto.**

## Fase 1 · Paso 4 · Filtros, buscador y lista virtualizada (2026-11-15)

**Qué hay.** `vista/PanelBusqueda.tsx` (búsqueda, área, «Más filtros»: tipo, forma, vía, mercado, clase y «con curva publicada»), `vista/ListaVirtual.tsx` (solo se pintan las filas visibles; dos espaciadores mantienen el desplazamiento; `aria-posinset`/`aria-setsize`; ↑ ↓ Inicio Fin Re Pág Av Pág), `nucleo/filtros.ts` y `nucleo/ventana.ts` (lógica pura).
- **Contadores honestos:** «N de T principios activos · M de P presentaciones (K activos con ficha completa)»; cada opción de filtro muestra cuántas presentaciones darían (sin contar su propio filtro) y se desactiva si son cero; cada fila dice «k de n presentaciones» cuando hay filtros de presentación; sin resultados, el mensaje explica qué filtro lo causa («Quitar el mercado o “con curva publicada” devuelve resultados»).
- Un activo solo aparece si **una misma presentación** cumple a la vez todos los filtros de presentación; al abrirlo se elige esa presentación.
- La forma normalizada de las 303 presentaciones actuales se deriva del nombre de la forma (comprimido 251, cápsula 46, solución oral 3, suspensión oral 1, comprimido masticable 1, polvo oral 1); una prueba exige que todas queden clasificadas.
- Los niveles Básico/Normal/Avanzado del módulo de absorción no se tocaron.

**Comprobaciones.** `npm test` **517** (480 originales intactas + 37 nuevas) · `test:fuentes` **603** (602 + 1 nueva) · typecheck limpio · build compila.
Verificación en Electron (`scripts/verificacion/verificar-lista.mjs`, **19/19** comprobaciones, repetida 6 veces; una ejecución falló por un tiempo de espera fijo de 200 ms en el guion y se sustituyó por espera activa): 16 filas pintadas de 300; contador inicial «300 de 300 · 303 de 303»; «zoloft» → 1 activo (sertralina); «xyzxyz» → mensaje; filtro de vía con solo «Oral (303)»; mercado España → 24 presentaciones; España + «con curva» → vacío y explicado; solo «con curva» → ticagrelor y se abre BRILINTA; «Quitar filtros»; Fin → fila 300 visible; Inicio → fila 1; 20 × ↓ → fila 21 visible y `aria-activedescendant` correcto; los tres niveles se activan; **sin errores ni avisos en la consola**. Capturas en `docs/ampliacion-2000/capturas/` (01–05).
Un fallo real encontrado y corregido durante la verificación: con el relleno (`padding`) del `<ul>` la lista no podía encogerse (291 filas pintadas); se cambió por dos filas espaciadoras.

**Mediciones, mismo método (mediana de 5).**

| Medida | Base: 300, todo cargado | 300 real, paso 4 | 1 800 sintético, todo cargado | 1 800 sintético, paso 4 |
|---|---|---|---|---|
| Lista lista | 350 ms | 343 ms | 406 ms | 345 ms |
| Abrir ibuprofeno (búsqueda aparte) | 1 273 ms | 1 157 ms | 1 248 ms | 1 186 ms |
| Montón JS usado | 40,6 MB | 28,3 MB | 66,3 MB | 29,6 MB |
| Memoria privada del árbol | 376,9 MB | 355,4 MB | 454,1 MB | 365,5 MB |
| `View-*.js` | 7 878 kB | 5 314 kB | 23 288 kB | 6 473 kB |

(La columna sintética son 1 800 fichas clonadas en una copia fuera del proyecto, solo para medir. El método de «abrir una ficha» cambió ligeramente: ahora escribe el nombre en el buscador antes de cronometrar el clic, porque con una lista virtual la fila ya no está siempre en pantalla.)

**Puerta del paso 4: superada.**

## Fase 1 · Paso 5 · Guiones de descubrimiento reescritos (2026-11-15)

`scripts/medicamentos/fase0/` (exploración, sin convenciones) se eliminó y se sustituyó por `scripts/medicamentos/descubrir/`, con prefijo `reng`, sin comentarios y sin rutas fijas:
- `comun.mjs` (peticiones con reintentos, normalización de nombres y sales, clasificación de familia/forma/liberación del NDC y de CIMA).
- `ndc-descargar.mjs <salida.json>` (116 697 productos terminados del directorio NDC de openFDA, paginación `search_after`).
- `cima-descargar.mjs <salida.json>` (16 145 comercializados de CIMA; marca los de `npactiv=1`).
- `candidatos.mjs <ndc.json> <cima.json> <catalogo> <salida.json>` (combinaciones únicas de activo + forma + vía + liberación por mercado y familia, con marca de biológico, combinación y ficha existente).
- `muestrear-farmacocinetica.mjs` (muestreo con semilla fija de la sección de farmacocinética: SPL 12.3/12 y CIMA 5.2).

**Reproducen la Fase 0 con pequeñas diferencias** (las clasificaciones se simplificaron): EE. UU. sólidos 1 492 (antes 1 478), líquidos 257 (255), inyectables 1 195 (1 207); España idéntico (1 161, 317, 881). Los biológicos ya no entran en el muestreo (decisión 4), lo que baja la proporción de inyectables de EE. UU. con los cuatro temas de farmacocinética de 22 % a 36 % de los no biológicos y la de España de 56 % a 49 % (45 por celda; mismo método que en la Fase 0):

| Celda (45 combinaciones monofármaco no biológicas) | Sección con texto | Cuatro temas |
|---|---|---|
| EE. UU. sólido oral | 40 | 23 (51 %) |
| EE. UU. líquido oral | 36 | 15 (33 %) |
| EE. UU. inyectable | 42 | 16 (36 %) |
| España sólido oral | 43 | 36 (80 %) |
| España líquido oral | 39 | 32 (71 %) |
| España inyectable | 42 | 22 (49 %) |

**Separación de combinaciones en los inyectables de España (881 candidatos CIMA).** Por el nombre del principio activo virtual (`vtm`): 773 simples (87,7 %), 51 combinaciones (5,8 %, «amoxicilina + ácido clavulánico»…), 57 biológicos (6,5 %: vacunas, inmunoglobulinas, «multicomponente»). Si se usara el número de principios activos de CIMA (`npactiv`) en lugar del nombre, **21 inyectables simples se perderían** por contar el disolvente del kit como segundo activo (por ejemplo «cefazolina … polvo y disolvente», «ceftriaxona … polvo y solución»), y 133 de los 287 registros con `npactiv>1` no muestran ningún separador en su `vtm` (vacunas y kits). El criterio adoptado es el nombre del `vtm` sin separador y fuera de la lista de biológicos.

**Puerta del paso 5: superada.**

## Fase 1 · Paso 6 · Piloto (2026-11-15): cerrado, a la espera de OK

**Recuento real del catálogo** (índice generado): **311 fichas** y **335 presentaciones**. Sobre las 300 fichas y 303 presentaciones de partida: 11 fichas nuevas (8 sólidas y 3 inyectables) y 32 presentaciones nuevas; las que no son una ficha nueva se añaden como extensiones en `datos/presentaciones/`, que se fusionan en la ficha del activo. Ninguna de las 300 fichas originales se reescribió.

### Las 30 presentaciones del piloto (y 2 inyectables extra)

**Sólidos orales (10):** saxagliptina · glimepirida · pravastatina · oxcarbazepina (comprimido) · nitroglicerina (sublingual) · ramipril · telmisartán (España, CIMA) · amlodipino + benazepril (combinación enlazada a amlodipino y benazepril) · metformina de liberación prolongada (extensión con recorrido propio) · amlodipino de España (extensión, CIMA).

**Líquidos orales (10):** oxcarbazepina (suspensión) · levetiracetam (solución) · amoxicilina (suspensión) · azitromicina (suspensión) · ondansetrón (solución) · metoclopramida (solución) · sertralina (concentrado con alcohol y su advertencia) · lamivudina (solución) · ibuprofeno (suspensión, CIMA) · paracetamol (solución, CIMA). Todas con recorrido propio.

**Inyectables (10 pedidos):**
1. Vancomicina intravenosa (etiqueta de EE. UU.; etapa de absorción «no aplica» con su cita).
2. Paracetamol intravenoso (CIMA, Kabi; «no aplica»).
3. Medroxiprogesterona subcutánea (depósito subcutáneo).
4. Metotrexato subcutáneo (autoinyector; depósito subcutáneo).
5. Ceftriaxona intramuscular/intravenosa (CIMA, Fresenius Kabi; ficha nueva).
6. Ketorolaco intramuscular/intravenoso (EE. UU.; extensión; excipiente de riesgo: etanol al 10 %).
7. Midazolam intramuscular/intravenoso (EE. UU.; ficha nueva).
8. Fondaparinux subcutáneo (EE. UU.; ficha nueva).
9. Sumatriptán subcutáneo (EE. UU.; extensión).
10. **Palmitato de paliperidona (Invega Sustenna), depósito intramuscular** (EE. UU.; extensión de paliperidona), el sustituto del depósito intramuscular: la etiqueta declara que el fármaco «se disuelve lentamente tras la inyección intramuscular antes de hidrolizarse a paliperidona y absorberse a la circulación sistémica», con liberación desde el día 1 hasta 126 días y tiempo mediano hasta el pico de 13 días.

**Extras (2):** morfina Duramorph (EE. UU.; extensión; **intravenosa, epidural e intratecal**, sin conservantes) y ondansetrón intravenoso (CIMA, Accord; extensión).

**Vías cubiertas en los inyectables:** intravenosa (vancomicina, paracetamol, ondansetrón, ketorolaco, midazolam, morfina; «no aplica» con cita en los tres primeros), intramuscular (ceftriaxona, ketorolaco, midazolam, paliperidona depósito), subcutánea (medroxiprogesterona, metotrexato, fondaparinux, sumatriptán) y **epidural e intratecal (solo Duramorph)**. Ketorolaco: la etiqueta contraindica las vías epidural e intratecal por su contenido en alcohol; está recogido como advertencia con cita.

**Excipientes de riesgo por vía.** Registrados con cita: ketorolaco (etanol al 10 % p/v; vías intramuscular e intravenosa; la etiqueta contraindica las vías epidural e intratecal por ese contenido), sertralina concentrado (etanol; oral), ibuprofeno suspensión de CIMA (maltitol; oral) y paracetamol solución de CIMA (propilenglicol; oral). En los demás inyectables no hay ninguno de la lista de riesgo del modelo: Duramorph se declara «libre de antioxidantes, conservantes u otros aditivos potencialmente neurotóxicos»; Invega Sustenna lleva polisorbato 20, macrogol 4000 y tampones fosfato/citrato; ceftriaxona lleva como disolvente lidocaína al 1 % solo para la vía intramuscular (se muestra como excipiente de la composición, no está en la lista de riesgo del modelo). Ninguna ficha da dosis ni instrucciones de preparación o administración.

### Descartes con motivo

| Candidato | Fuente | Motivo |
|---|---|---|
| Baclofeno (comprimidos, Teva v19, 2021) | DailyMed | Sin metabolismo ni distribución en la etiqueta |
| Baclofeno (solución Ozobax DS) | DailyMed | Sección 12.3 de 508 caracteres sin metabolismo ni distribución |
| Haloperidol decanoato (Patriot, v13) | DailyMed | Solo tiempo hasta el pico (≈ 6 días) y semivida (≈ 3 semanas); sin distribución, metabolismo ni eliminación |
| Ketorolaco inyectable (Normon, CIMA 70102) | CIMA | La ficha técnica no trae metabolismo ni volumen de distribución; se cubrió con la etiqueta de EE. UU. |

### Tasa de éxito de CIMA en el piloto (n real)

| Ámbito | Intentos | Fichas limpias | Descartes |
|---|---|---|---|
| Inyectables (CIMA) | **4** | **3** (paracetamol Kabi, ceftriaxona Fresenius, ondansetrón Accord) | 1 (ketorolaco Normon) |
| Todo el piloto (sólidos, líquidos e inyectables) | 8 | 7 | 1 |

Con n = 4 en inyectables, 3 de 4 (75 %) es un indicio, no una tasa: el intervalo de confianza es enorme y los cuatro se eligieron por tener farmacocinética a la vista, así que **no son una muestra aleatoria**. La estimación de la Fase 0 sigue siendo la única con muestra al azar: el 49 % de 45 inyectables de España con los cuatro temas de farmacocinética (≈ 380 convertibles de 773 simples). Reserva del ondansetrón de CIMA: su ficha técnica comparte texto con la forma oral y no da datos de absorción propios de las vías inyectables; la ficha lo dice y la etapa de absorción se marca «no aplica» citando la única frase aplicable («tras la administración i.v. de ondansetrón, se obtiene una exposición sistémica comparable»).

**Separación de combinaciones en los inyectables de España:** de 881 candidatos, 773 simples, 51 combinaciones y 57 biológicos (excluidos); 21 simples se perderían con el criterio `npactiv` y se rescatan con el nombre del principio activo virtual.

### Mallas de piel y venas cefálica/basílica: NO incluidas (a la espera de decisión)

Descargado `partof_BP3D_4.0_obj_99.zip` (64 888 505 bytes) y verificado su SHA-256 contra el registrado en `modelo/CREDITOS.md`: coincide (`9fbc713fffeee924a5a657d9813d84d7eb957bded63adb854931dd5e3eb61c97`). Conceptos: piel FMA7163 (FJ2810), vena cefálica derecha FMA13325 (FJ2272) e izquierda FMA13326 (FJ2220), vena basílica derecha FMA22909 (FJ2270) e izquierda FMA22910 (FJ2218). Medido con `scripts/anatomia/medir-mallas-piel-venas.mjs`, que reutiliza el método de `convertir-bp3d.mjs` sin tocar los GLB del proyecto:

| Variante | Celda piel / venas | Triángulos | Tamaño del GLB |
|---|---|---|---|
| Mismo método que los órganos | 3 mm / 2 mm | 181 214 (piel 163 521) | **3 068 040 bytes** (2,93 MiB) |
| Piel más gruesa | 6 mm / 2 mm | 122 566 (piel 104 873) | 1 310 632 bytes |
| Piel aún más gruesa | 10 mm / 2 mm | 74 857 (piel 57 164) | 776 688 bytes |
| Solo venas (4 mallas) | — / 2 mm | 17 697 | 198 608 bytes |

Con el mismo método que el resto de órganos el total es **3 068 040 bytes: más de 3 MB** (3,07 MB; 2,93 MiB si se cuenta en binario) y, dentro de la app, el GLB va incrustado en JavaScript en base 64, de modo que el fragmento de órganos del build (3,0 MB hoy) crecería, por cálculo, unos 4,1 MB (≈ 7,1 MB). Por la regla de la decisión 5, **no se han incluido**: no se tocó `anatomia.ts`, ni los GLB, ni los créditos, y no se midió el impacto en el arranque porque no hay nada integrado. Por la estructura del build, cada capa es un fragmento aparte (`organos-*.js`, `esqueleto-*.js`, `musculos-*.js`), pero **no se midió** si se carga al abrir el atlas o antes.

**Opciones:**
- A) Solo las cuatro venas (0,2 MB, 17 697 triángulos): representa la vía intravenosa; la vía subcutánea seguiría sin malla de piel.
- B) Venas + piel a 6 mm (1,31 MB): representa las dos vías; la piel pierde detalle fino (≈ 105 000 triángulos en una sola malla; hay que medir en la app el coste de dibujarla).
- C) Venas + piel a 10 mm (0,78 MB): lo más ligero con piel (≈ 57 000 triángulos).
- D) Piel y venas con el método de los órganos (3,07 MB): hay que aceptar superar los 3 MB.
- E) No añadir mallas: se mantiene el texto «sin malla» en las fichas.

**Licencia.** La cabecera de los OBJ de piel y venas declara CC BY-SA 2.1 Japón (igual que los demás), la página de DBCLS declara CC BY 4.0; se aplicaría la condición más restrictiva ya adoptada en `modelo/CREDITOS.md` (mallas derivadas bajo CC BY-SA 2.1 Japón con las dos atribuciones). Sin datos personales: es el cuerpo de referencia de un varón adulto.

### Comprobaciones finales

- `npm run typecheck` limpio · `npm test` **523** pasan · `ETIQUETAS_DIR=… npm run test:fuentes` **625** pasan (cada cita literal de las 32 presentaciones nuevas está en su sección y la vía de cada presentación figura en la ruta de su etiqueta o ficha técnica) · `npm run build` compila.
- Se ajustó el generador para que el id por defecto de un inyectable sea `…-inyectable` (antes salía `…-oral`) y se regeneraron ceftriaxona, midazolam, fondaparinux, ketorolaco y sumatriptán; `obtener-etiquetas.mjs` volvió a bajar el ketorolaco (v36, 2026-07-21) para registrar todas las rutas del documento (`rutasDoc`); el test de vías lo exige.

### Verificación en la app (Electron + CDP, perfil aislado)

| Guion | Resultado |
|---|---|
| `verificar-recorrido.mjs` sobre las 311 fichas | **335 presentaciones, las cinco etapas de cada una con texto ≥ 40 caracteres, sin `undefined`/`NaN`/`[object` y sin errores de consola.** Litio y terbinafina fallaban solo porque el guion esperaba que desapareciera cualquier aviso de estado, y esas dos fichas muestran legítimamente «Sin modelo 3D fiable»; se corrigió el guion (espera «Cargando la ficha») y ambas pasan |
| `verificar-aviso-iv.mjs` (módulo «Modelo general de absorción») | **6/6**: «En esta vía no hay absorción» con su cita aparece en vancomicina IV, paracetamol Kabi y ondansetrón CIMA, y **no** aparece en ceftriaxona IM, medroxiprogesterona SC ni metformina oral. Captura 13 |
| `verificar-categorias.mjs` | **11/11**: el filtro «Tipo» ofrece Inyectable (12) · Líquido oral (14) · Sólido oral (309); cada contador coincide con el índice (304, 14 y 12 fichas); el buscador encuentra ramipril, levetiracetam y midazolam; los tres recorren las cinco etapas (capturas 14); «Inyectable + vía intravenosa» da 6 de 335. Consola limpia |
| `verificar-lista.mjs` | **19/19**: lista virtual (16 filas pintadas de 311), contadores honestos, búsqueda «zoloft», filtros de vía y de mercado (España 31 de 335), teclado (Inicio, Fin, 20 flechas), niveles Básico/Normal/Avanzado; consola limpia |

Capturas en `docs/ampliacion-2000/capturas/` (06–15).

### Mediciones antes y después (mediana de 5, mismo método)

| Medida | Línea base (300 fichas, antes) | Después (311 fichas, 335 presentaciones) |
|---|---|---|
| Ventana (portada) | 262,1 ms | 262,7 ms |
| Lista lista | 349,5 ms | 344,2 ms |
| Abrir una ficha (ibuprofeno) | 1 272,9 ms | 1 163,2 ms |
| Montón JS | 40,6 MB | 28,3 MB |
| Memoria privada | 376,9 MB | 358,2 MB |
| Memoria residente | 487,2 MB | 470,4 MB |

Con 1 800 presentaciones sintéticas (copias del catálogo, solo para medir) la lista tardaba 345 ms y el montón era de 29,6 MB. El código de las extensiones pesa 220 KB y las fichas 3,6 MB.

### Instalador

`npm run dist` **no se ejecutó**: habría sobrescrito `dist/MediCuerpo-Setup-0.1.0.exe` (126 425 019 bytes, 2026-11-12) y `dist/win-unpacked`. En su lugar se lanzó electron-builder con la salida en una carpeta temporal fuera del proyecto; `dist/` no se tocó (los archivos conservan su fecha). El paso final de NSIS falló con `spawn EPERM` (el sistema impide ejecutar el desinstalador temporal; el instalador del 12-11 sí se generó en este equipo), así que **el instalador nuevo no se generó**. Lo que sí quedó medido: el paquete comprimido de la app, 126 062 729 bytes, más el cargador NSIS de 304 918 bytes (fichero que sí se generó): ≈ 126,37 MB estimados, frente a 126,43 MB del instalador del 12-11; `app.asar` 17,45 MB (antes 15,03 MB) y `win-unpacked` 391,5 MB (antes 389,2 MB). Es una estimación, no la medida del `.exe` final.

### Lo no verificado

- Que las estructuras 3D iluminadas en cada etapa sean las anatómicamente correctas (solo se vieron a ojo capturas de unos pocos casos); el recorrido comprueba texto, no geometría.
- «Reproducir», «Ver todo como texto» y la accesibilidad con lector de pantalla en las fichas nuevas.
- El `.exe` del instalador y su tamaño exacto; instalarlo y abrirlo.
- Que las citas sigan siendo literales si DailyMed o CIMA cambian el documento (las pruebas leen la caché del 2026-11-15).
- El coste de dibujar una malla de piel de 105 000 triángulos (no integrada).
- Que la tasa de éxito de CIMA se parezca a la del piloto: n = 4 en inyectables, elegidos con farmacocinética a la vista.

### Cambios en lo existente durante el piloto (todos con prueba)

El nombre «Vancomicina (oral)» pasó a «Vancomicina» porque la ficha ya incluye la vía intravenosa; cuatro pruebas escritas con cifras fijas del catálogo anterior se hicieron independientes de los datos (filtros, combinaciones en las pruebas de identidad química y de fuentes, una prueba de absorción de paracetamol); el aviso «En esta vía no hay absorción» se añadió a `AbsorcionMedicamento.tsx`.

### Hallazgos menores

- El aviso repite la idea cuando el motivo empieza por «En la vía intravenosa no hay absorción:» (se lee «En esta vía no hay absorción: En la vía intravenosa no hay absorción: …»); es cosmético y se arregla acortando esos motivos o el rótulo.
- La vista 3D no dibuja el depósito subcutáneo o intramuscular de piel porque no hay malla de piel ni de tejido adiposo (la ficha lo dice: «sin malla»); depende de la decisión sobre las mallas.
- La sección «Qué contiene» del resumen sigue describiendo la presentación principal aunque la ficha tenga extensiones.

**Puerta del paso 6: superada.** A la espera del OK del titular; no se pasa a la Fase 2. Sin commit.

## Fase 2 · Lote 1 · 100 presentaciones de sólidos orales (2026-11-15): cerrado, a la espera de OK

Encargo: 100 presentaciones nuevas de sólidos orales (≈ 50 de CIMA y ≈ 50 de DailyMed), solo con dato citable en **las cuatro etapas** (absorción, distribución, metabolismo, eliminación); el resto se descarta con motivo. Reglas aprobadas: citas literales ≤ 260 caracteres, sin farmacogenética, biológicos excluidos, combinaciones con componentes enlazados, sin suplementos, PubChem matizado, y una presentación nueva de un activo que ya tiene ficha se añade a esa ficha (extensión). Sin commit, sin mallas de piel y venas, sin cuarta tanda, sin cambios del modelo de datos y **sin tocar los textos «300 fichas»**.

### Recuentos nuevos (leídos del índice; los reproduce `verificar-lista.mjs`)

| Categoría | Antes (piloto) | Ahora | Diferencia |
|---|---|---|---|
| Fichas (principios activos) | 311 | **396** | +85 |
| Presentaciones | 335 | **435** | +100 |
| Sólidos orales (presentaciones) | 309 | **409** | +100 |
| Líquidos orales | 14 | 14 | 0 |
| Inyectables | 12 | 12 | 0 |
| Mercado España (presentaciones) | 31 | **104** (101 fichas) | +73 |
| Mercado EE. UU. (presentaciones) | 304 | **331** | +27 |

Las 100 son **85 fichas nuevas y 15 extensiones** a fichas que ya existían (se añade una presentación de CIMA a la ficha del activo: atorvastatina, bisoprolol, candesartán, enalapril, escitalopram, lorazepam, losartán, montelukast, olanzapina, pantoprazol, quetiapina, risperidona, rosuvastatina, simvastatina y valsartán; cada una con id `<activo>-cima`).

**Desviación respecto a lo pedido:** salieron **73 de CIMA y 27 de DailyMed**, no ≈ 50 y ≈ 50. Las fichas técnicas de CIMA son más homogéneas (sección 5.2 con frases) y cumplían las cuatro etapas con mucha más frecuencia; en DailyMed varias etiquetas trajeron la farmacocinética solo en tablas (sin frases citables literalmente) o sin distribución o metabolismo (ver descartes). No se rellenó con candidatos débiles para igualar la proporción. Para igualarla haría falta un lote adicional centrado en DailyMed, que no se ha hecho.

### Las 100 presentaciones

| N.º | Principio activo | Tipo | Fuente | Presentación | Área |
|---|---|---|---|---|---|
| 1 | Etoricoxib | ficha nueva | CIMA | EXXIV 60 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Dolor y fiebre |
| 2 | Ivabradina | ficha nueva | CIMA | IVABRADINA ALTER 5 MG COMPRIMIDOS EFG · Comprimido | Cardiovascular |
| 3 | Lercanidipino | ficha nueva | CIMA | LERZAM 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Cardiovascular |
| 4 | Bilastina | ficha nueva | CIMA | IBIS 20 mg COMPRIMIDOS · Comprimido | Respiratorio y alergia |
| 5 | Everolimus | ficha nueva | CIMA | CERTICAN 1 mg COMPRIMIDOS · Comprimido | Inflamación e inmunidad |
| 6 | Rivastigmina | ficha nueva | CIMA | RIVASTIGMINA VIR 1.5 MG CAPSULAS DURAS EFG · Cápsula dura | Sistema nervioso |
| 7 | Ebastina | ficha nueva | CIMA | BACTIL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Respiratorio y alergia |
| 8 | Sunitinib | ficha nueva | CIMA | SUNITINIB TEVA 25 MG CAPSULAS DURAS EFG · Cápsula dura | Oncología |
| 9 | Eslicarbazepina | ficha nueva | CIMA | ESCARPILO 1200 MG COMPRIMIDOS · Comprimido | Sistema nervioso |
| 10 | Perampanel | ficha nueva | CIMA | PERAMPANEL TEVA 2 MG COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG · Comprimido recubierto con película | Sistema nervioso |
| 11 | Vildagliptina | ficha nueva | CIMA | VILDAGLIPTINA KRKA 50 MG COMPRIMIDOS EFG · Comprimido | Metabolismo y diabetes |
| 12 | Pramipexol | ficha nueva | CIMA | PRAMIPEXOL CINFA 0,7 mg COMPRIMIDOS EFG · Comprimido | Sistema nervioso |
| 13 | Betahistina | ficha nueva | CIMA | SERC 8 mg COMPRIMIDOS · Comprimido | Sistema nervioso |
| 14 | Almotriptán | ficha nueva | CIMA | AMIGNUL 12,5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Sistema nervioso |
| 15 | Vareniclina | ficha nueva | CIMA | BYTEQI 1 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Salud mental |
| 16 | Rupatadina | ficha nueva | CIMA | RUPAFIN 10 mg COMPRIMIDOS · Comprimido | Respiratorio y alergia |
| 17 | Amisulprida | ficha nueva | CIMA | SOLIAN 100 mg COMPRIMIDOS · Comprimido | Salud mental |
| 18 | Pirfenidona | ficha nueva | CIMA | PIRFENIDONA AUROVITAS 267 MG COMPRIMIDOS EFG · Comprimido | Respiratorio y alergia |
| 19 | Deferasirox | ficha nueva | CIMA | FERUPANTIL 90 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Sangre y coagulación |
| 20 | Teriflunomida | ficha nueva | CIMA | TERIFLUNOMIDA KRKA 14 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Sistema nervioso |
| 21 | Zaleplón | ficha nueva | DailyMed | ZALEPLON · cápsula · Cápsula | Sistema nervioso |
| 22 | Tetrabenazina | ficha nueva | DailyMed | Xenazine · comprimido · Comprimido | Sistema nervioso |
| 23 | Doxepina | ficha nueva | DailyMed | Silenor · comprimido · Comprimido | Sistema nervioso |
| 24 | Macitentán | ficha nueva | DailyMed | OPSUMIT · comprimido recubierto con película · Comprimido recubierto con película | Cardiovascular |
| 25 | Armodafinilo | ficha nueva | DailyMed | Nuvigil · comprimido · Comprimido | Sistema nervioso |
| 26 | Ubrogepant | ficha nueva | DailyMed | UBRELVY · comprimido · Comprimido | Sistema nervioso |
| 27 | Midodrina | ficha nueva | DailyMed | Midodrine Hydrochloride · comprimido · Comprimido | Cardiovascular |
| 28 | Azilsartán | ficha nueva | DailyMed | Edarbi · comprimido · Comprimido | Cardiovascular |
| 29 | Hidromorfona | ficha nueva | DailyMed | Dilaudid · comprimido · Comprimido | Dolor y fiebre |
| 30 | Ketoconazol | ficha nueva | DailyMed | KETOCONAZOLE · comprimido · Comprimido | Infecciones |
| 31 | Bexagliflozina | ficha nueva | DailyMed | BRENZAVVY · comprimido · Comprimido | Metabolismo y diabetes |
| 32 | Mexiletina | ficha nueva | DailyMed | Mexiletine Hydrochloride · cápsula · Cápsula | Cardiovascular |
| 33 | Tolcapona | ficha nueva | DailyMed | Tasmar · comprimido recubierto con película · Comprimido recubierto con película | Sistema nervioso |
| 34 | Dofetilida | ficha nueva | DailyMed | Tikosyn · cápsula · Cápsula | Cardiovascular |
| 35 | Manidipino | ficha nueva | CIMA | ARTEDIL 10 mg COMPRIMIDOS · Comprimido | Cardiovascular |
| 36 | Aceclofenaco | ficha nueva | CIMA | GERBIN 100 MG COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto | Dolor y fiebre |
| 37 | Lacidipino | ficha nueva | CIMA | LACIMEN 4 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Cardiovascular |
| 38 | Ketoprofeno | ficha nueva | CIMA | FASTUM 50 MG CÁPSULAS DURAS · Cápsula dura | Dolor y fiebre |
| 39 | Sulpirida | ficha nueva | CIMA | PSICOCEN 50 mg CAPSULAS · Cápsula dura | Salud mental |
| 40 | Desogestrel | ficha nueva | CIMA | CERAZET 75 microgramos COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Hormonas y endocrino |
| 41 | Perindopril | ficha nueva | CIMA | PERINDOPRIL KRKA 4 mg COMPRIMIDOS EFG · Comprimido | Cardiovascular |
| 42 | Fluvoxamina | ficha nueva | CIMA | DUMIROX 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Salud mental |
| 43 | Gemfibrozilo | ficha nueva | CIMA | LOPID 600 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Colesterol y lípidos |
| 44 | Fluvastatina | ficha nueva | CIMA | FLUVASTATINA TEVA 20 mg CAPSULAS DURAS EFG · Cápsula dura | Colesterol y lípidos |
| 45 | Acenocumarol | ficha nueva | CIMA | SINTROM 1 mg COMPRIMIDOS · Comprimido | Sangre y coagulación |
| 46 | Quinapril | ficha nueva | CIMA | LIDALTRIN 20 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Cardiovascular |
| 47 | Entacapona | ficha nueva | CIMA | ENTACAPONA VIATRIS 200 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Sistema nervioso |
| 48 | Norfloxacino | ficha nueva | CIMA | NORFLOXACINO SANDOZ 400 mg COMPRIMIDOS EFG · Comprimido recubierto | Infecciones |
| 49 | Dienogest | ficha nueva | CIMA | VISANNETTE 2 mg COMPRIMIDOS · Comprimido | Hormonas y endocrino |
| 50 | Ulipristal | ficha nueva | CIMA | ULIPRISTAL STADA 30 MG COMPRIMIDO RECUBIERTO CON PELICULA EFG · Comprimido recubierto con película | Hormonas y endocrino |
| 51 | Atorvastatina | extensión | CIMA | CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Colesterol y lípidos |
| 52 | Losartán | extensión | CIMA | COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Corazón y circulación |
| 53 | Enalapril | extensión | CIMA | DABONAL 5 mg COMPRIMIDOS · Comprimido | Cardiovascular |
| 54 | Escitalopram | extensión | CIMA | ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Salud mental |
| 55 | Bisoprolol | extensión | CIMA | EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Cardiovascular |
| 56 | Lorazepam | extensión | CIMA | ORFIDAL 1 mg COMPRIMIDOS · Comprimido | Salud mental |
| 57 | Simvastatina | extensión | CIMA | ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Corazón y vasos |
| 58 | Quetiapina | extensión | CIMA | QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Salud mental |
| 59 | Montelukast | extensión | CIMA | SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Respiratorio y alergia |
| 60 | Valsartán | extensión | CIMA | VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Corazón y vasos |
| 61 | Metilprednisolona | ficha nueva | CIMA | URBASON 4 mg COMPRIMIDOS · Comprimido | Inflamación e inmunidad |
| 62 | Flutamida | ficha nueva | CIMA | FLUTAMIDA CINFA 250 mg COMPRIMIDOS EFG · Comprimido | Oncología |
| 63 | Levonorgestrel | ficha nueva | CIMA | KALLYA 1,5 MG COMPRIMIDO · Comprimido | Hormonas y endocrino |
| 64 | Moxonidina | ficha nueva | CIMA | MOXON 0,2 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto | Cardiovascular |
| 65 | Moclobemida | ficha nueva | CIMA | MANERIX 300 COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto | Salud mental |
| 66 | Imidapril | ficha nueva | CIMA | HIPERTENE 5 mg COMPRIMIDOS · Comprimido | Cardiovascular |
| 67 | Eprosartán | ficha nueva | CIMA | FUTURAN 600 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Cardiovascular |
| 68 | Nimodipino | ficha nueva | CIMA | BRAINAL 30 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Sistema nervioso |
| 69 | Cefditoreno | ficha nueva | CIMA | MEIACT 200 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Infecciones |
| 70 | Racecadotrilo | ficha nueva | CIMA | TIORFAN 100 mg CAPSULAS DURAS · Cápsula dura | Aparato digestivo |
| 71 | Ciclofosfamida | ficha nueva | DailyMed | Cyclophosphamide · cápsula · Cápsula | Oncología |
| 72 | Cladribina | ficha nueva | DailyMed | Mavenclad · comprimido · Comprimido | Sistema nervioso |
| 73 | Rufinamida | ficha nueva | DailyMed | Banzel · comprimido recubierto con película · Comprimido recubierto con película | Sistema nervioso |
| 74 | Pomalidomida | ficha nueva | DailyMed | Pomalyst · cápsula · Cápsula | Oncología |
| 75 | Dalfampridina | ficha nueva | DailyMed | AMPYRA · comprimido recubierto de liberación prolongada · Comprimido recubierto de liberación prolongada | Sistema nervioso |
| 76 | Oxibutinina | ficha nueva | DailyMed | OXYBUTYNIN CHLORIDE · comprimido · Comprimido | Urología |
| 77 | Bromazepam | ficha nueva | CIMA | LEXATIN 3 mg CAPSULAS DURAS · Cápsula dura | Salud mental |
| 78 | Agomelatina | ficha nueva | CIMA | AGOMELATINA STADA 25 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Salud mental |
| 79 | Imipramina | ficha nueva | CIMA | TOFRANIL 10 mg COMPRIMIDOS RECUBIERTOS · Comprimido recubierto | Salud mental |
| 80 | Lenalidomida | ficha nueva | DailyMed | Revlimid · cápsula · Cápsula | Oncología |
| 81 | Bosutinib | ficha nueva | DailyMed | BOSULIF · comprimido recubierto con película · Comprimido recubierto con película | Oncología |
| 82 | Mifepristona | ficha nueva | DailyMed | Korlym · comprimido · Comprimido | Hormonas y endocrino |
| 83 | Fingolimod | ficha nueva | DailyMed | Gilenya · cápsula · Cápsula | Sistema nervioso |
| 84 | Clobazam | ficha nueva | DailyMed | Onfi · comprimido · Comprimido | Sistema nervioso |
| 85 | Fosinopril | ficha nueva | DailyMed | Fosinopril Sodium · comprimido · Comprimido | Cardiovascular |
| 86 | Moxifloxacino | ficha nueva | CIMA | ERELAN 400 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Infecciones |
| 87 | Nilotinib | ficha nueva | CIMA | NILOTINIB TEVA 150 MG CAPSULAS DURAS EFG · Cápsula dura | Oncología |
| 88 | Axitinib | ficha nueva | CIMA | AXITINIB TEVA 1 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Oncología |
| 89 | Dronedarona | ficha nueva | CIMA | DRONEDARONA TEVA 400 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Cardiovascular |
| 90 | Rosuvastatina | extensión | CIMA | ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Colesterol y lípidos |
| 91 | Olanzapina | extensión | CIMA | ZOLAFREN 5 mg COMPRIMIDOS EFG · Comprimido | Sistema nervioso |
| 92 | Clomipramina | ficha nueva | CIMA | ANAFRANIL 10 MG COMPRIMIDOS RECUBIERTOS · Comprimido recubierto | Salud mental |
| 93 | Risperidona | extensión | CIMA | RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Sistema nervioso |
| 94 | Candesartán cilexetilo | extensión | CIMA | ATACAND 4 mg COMPRIMIDOS · Comprimido | Cardiovascular |
| 95 | Silodosina | ficha nueva | CIMA | XILAPRO 4 MG CAPSULAS DURAS EFG · Cápsula dura | Urología |
| 96 | Safinamida | ficha nueva | CIMA | SAFINAMIDA VIVANTA 50 MG COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG · Comprimido recubierto con película | Sistema nervioso |
| 97 | Pantoprazol | extensión | CIMA | PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES · Comprimido gastrorresistente | Aparato digestivo |
| 98 | Pazopanib | ficha nueva | CIMA | PAZOPANIB STADA 200 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG · Comprimido recubierto con película | Oncología |
| 99 | Dapoxetina | ficha nueva | CIMA | PRILIGY 30 mg COMPRIMIDOS RECUBIERTOS CON PELICULA · Comprimido recubierto con película | Urología |
| 100 | Nintedanib | ficha nueva | DailyMed | Ofev · cápsula · Cápsula | Respiratorio y alergia |

### Descartes con motivo (candidatos que se revisaron y no entraron)

Criterio: solo entra una presentación con dato citable en las cuatro etapas y con la composición completa. «No se localizó» significa que la búsqueda automática no devolvió una etiqueta de un solo activo oral con ese nombre; no prueba que no exista.

| Candidato | Fuente | Motivo |
|---|---|---|
| Carisoprodol (Soma) | DailyMed | La sección 12.3 no trae ningún dato de distribución (ni unión a proteínas ni volumen) |
| Aliskiren (Tekturna) | DailyMed | El encabezado dice «absorción y distribución», pero solo hay datos de absorción; sin unión a proteínas ni volumen de distribución |
| Levocarnitina (Carnitor) | DailyMed | Sustancia endógena de tipo nutricional (criterio «sin suplementos») |
| Eltrombopag (CIMA 90021) | CIMA | Farmacocinética muy extensa y tabular; se aplazó por coste de revisión (no por falta de datos) |
| Lormetazepam (CIMA 56257) | CIMA | La API no devolvió la ficha técnica en HTML (error al leer su URL) |
| Riluzol, ácido tranexámico, efavirenz, rifampicina, trandolapril, nadolol, nateglinida, sirolimus, naratriptán, frovatriptán, meclizina, metaxalona | DailyMed/openFDA | No se localizó una etiqueta de un solo activo oral con ese nombre comercial o genérico en la búsqueda automática |
| Primidona (Mysoline) | DailyMed | Ninguno de los cuatro temas de farmacocinética detectado por palabras clave (etiqueta antigua sin sección 12.3 útil) |
| Buprenorfina (sublingual) | DailyMed | La búsqueda devolvió la etiqueta de la forma inyectable, fuera del alcance de este lote |
| Glicopirrolato y cefprozilo | DailyMed | La etiqueta elegida es de solución oral / polvo para suspensión, fuera del alcance (solo sólidos) |
| Dapsona | DailyMed | Sin datos de distribución ni de metabolismo en la sección de farmacología clínica (solo absorción, excreción y semivida) |
| Megestrol (comprimidos) | DailyMed | Sin datos de distribución (ni unión a proteínas ni volumen) |
| Lisdexanfetamina (Vyvanse) | DailyMed | La sección 12.3 no trae datos de distribución |
| Pirimetamina (Daraprim) | DailyMed | Sección de farmacocinética de 968 caracteres, sin metabolismo |
| Clomifeno (Clomid) | DailyMed | Sección de 956 caracteres, sin distribución ni metabolismo |
| Fitomenadiona (Mephyton) | DailyMed | Sin datos de distribución |
| Doravirina (Pifeltro) | DailyMed | Los datos de farmacocinética de la sección 12.3 están solo en una tabla de celdas sueltas, sin frases citables literalmente (se aplaza; no es falta de datos) |
| Mianserina (CIMA 54407) | CIMA | La sección 5.2 no trae datos de distribución |
| Pimozida (CIMA 49503) | CIMA | La sección 5.2 no trae datos de distribución |
| Alprazolam, presentación española (CIMA 56025) | CIMA | La sección 5.2 no trae datos de distribución |
| Otilonio (CIMA 79382) | CIMA | Sección 5.2 de 215 caracteres, solo absorción y eliminación |
| Cefixima, tibolona, trimetazidina, clorazepato, deflazacort (CIMA) | CIMA | La sección 5.2 carece de datos de metabolismo (cefixima, trimetazidina) o de distribución (tibolona, clorazepato, deflazacort) |
| Metildopa (CIMA 37932) | CIMA | La sección 5.2 no trae distribución (ni unión a proteínas ni volumen): bajo «distribución» solo figura la biodisponibilidad |
| Zopiclona (CIMA 58538) | CIMA | El HTML descargado de la ficha técnica no trae la lista de excipientes (sección 6.1 vacía): no se puede completar la composición |


Aplazados, no descartados por falta de datos: eltrombopag (CIMA; farmacocinética tabular extensa), doravirina (datos solo en una tabla), lormetazepam (la API no devolvió el HTML). Candidatos con etiqueta ya vista y no redactados por haber alcanzado las 100: atazanavir, posaconazol, darunavir, ritonavir, maraviroc, etravirina, rilpivirina, zidovudina (la etiqueta trae buena farmacocinética, parte en tabla) y clopidogrel de CIMA; no se evaluó la calidad de sus citas, solo que tenían etiqueta.

### Qué se verificó y cómo

| Puerta | Resultado |
|---|---|
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan (sin cambios de código; el índice se regeneró con `npm run indice` y su prueba pasa) |
| `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes` | **795** pasan (antes 625): cada cita literal de las 100 presentaciones está en su sección de la etiqueta cacheada del 2026-11-15, y la vía de cada presentación figura en la ruta de su etiqueta |
| `npm run build` | compila |
| `verificar-lista.mjs` | **19/19**: 16 filas pintadas de 396; «396 de 396 · 435 de 435»; mercado España «104 de 435 (101 activos)»; filtro de vía Oral (422); Fin → «zonisamida» (fila 396); consola limpia |
| `verificar-recorrido.mjs` sobre las 100 fichas del lote (85 nuevas y 15 extendidas) | **100 fichas, 115 presentaciones** (las 100 nuevas más 15 que ya tenían las 15 fichas extendidas); las cinco etapas con texto ≥ 40 caracteres, sin `undefined`/`NaN`/`[object`, **consola sin errores ni avisos** |
| Muestra a mano de 10 fichas nuevas | ver abajo |

**Muestra de 10 fichas (estructuras del cuerpo) y cómo se hizo.** Fichas: silodosina, nintedanib, desogestrel, fingolimod, macitentan, dapoxetina, pazopanib, ulipristal, hidromorfona y tolcapona, elegidas para cubrir próstata/vejiga, pulmón, órganos reproductores, sistema inmunitario, vasos, riñón, encéfalo e hígado. Un guion temporal con CDP (en el directorio temporal de la sesión, **no guardado en el proyecto**) abrió la app compilada con un perfil aislado, entró en cada ficha, pulsó las cinco etapas y, en cada una, leyó los destinos que el panel declara («Dónde lo sitúa la fuente», con la marca «sin malla» cuando no hay geometría) y guardó una captura (50 capturas en `docs/ampliacion-2000/capturas/lote1/`, `<id>-etapa<N>.png`). Después comparé los destinos de cada etapa con lo que dice la etiqueta citada. **Lo que miré con mis propios ojos fueron solo 2 de las 50 capturas** (silodosina y nintedanib, distribución): en la de silodosina están iluminados corazón, vasos y vejiga (la próstata no tiene malla y el panel lo dice); en la de nintedanib, pulmones y bronquios además de la sangre. Las otras 48 están guardadas pero no las he revisado una a una. Las cinco etapas de las 10 fichas dieron destinos coherentes con la etiqueta, salvo un defecto (ulipristal, abajo) y un caso que se deja como está (nintedanib: el metabolismo ilumina «tejidos de todo el cuerpo» porque la etiqueta atribuye la hidrólisis a esterasas sin nombrar un órgano, y no se inventó el hígado). Las extensiones (15) no entraron en esta muestra. Las capturas se hicieron antes de corregir ulipristal, así que la de su eliminación muestra todavía el hígado.

### Defectos hallados (y estado)

1. **Etiqueta de oxibutinina con otro id que la ficha** (corregido). `lista.mjs` ya tenía una entrada `oxibutinina` (DITROPAN XL, sin setid, nunca obtenida) y yo había añadido `oxibutinina-us`. `test:fuentes` busca PubChem por el id de la ficha y falló. Se unificó: la entrada original lleva ahora el setid de la etiqueta de OXYBUTYNIN CHLORIDE y se quitó `oxibutinina-us`. Lección: el id de la etiqueta cacheada debe ser el de la ficha.
2. **Eliminación que iluminaba un órgano sin respaldo** (corregido en ulipristal y olanzapina). La frase citada era solo semivida y aclaramiento, pero llevaba «hígado» como destino. Se quitó el destino; el panel dice «la fuente no nombra un órgano para esta etapa». Se auditaron con un guion todas las líneas de eliminación del lote que no mencionan una vía de excreción: solo estas dos y armodafinilo. En armodafinilo se mantiene «riñones, orina» porque una línea adicional explica que la etiqueta no trae excreción propia y recoge el dato del modafinilo (menos del 10 % del compuesto original en la orina), señalado como dato de otro compuesto.
3. **Destino repetido en el panel** (no corregido, cosmético): silodosina muestra «Próstata» dos veces en la etapa de distribución (una por la distribución y otra por la acción). No se comprobó si ocurre en otras fichas.
4. **Estructuras sin malla.** Boca, próstata, órganos reproductores, sistema inmunitario y «tejidos de todo el cuerpo» no tienen geometría 3D y se señalan con el sistema al que pertenecen; el panel lo dice. Es una limitación del atlas, no del lote; afecta a muchas fichas nuevas (todas las de órganos reproductores y próstata).
5. **El redactor pidió una línea de excipientes (`X`) en nintedanib** (DailyMed) cuando en otras etiquetas de EE. UU. no la pedía; no investigué la causa y se añadió a mano desde la sección 11 de la etiqueta.
6. **Errores de la fuente que obligan a copiar literal o evitar la frase:** CIMA devuelve «=» donde debería ir «≥», «?» en lugar de «µ», espacios rotos dentro de palabras («meta bolizado») y erratas; las citas conservan esos defectos porque la prueba exige literalidad, y se evitaron las frases con símbolos perdidos. La zopiclona de CIMA se descartó porque su HTML no trae los excipientes.
7. **Límites del modelo de datos, sin cambiarlo:** hay un solo fichero de extensión por activo (`datos/presentaciones/<id>.ts`); una segunda presentación extendida del mismo activo **sobrescribiría** la primera. En este lote no ocurrió (los 15 ids no coinciden con los 19 del piloto), pero el lote 2 debe tenerlo en cuenta. La entrada de CIMA admite como máximo 5 líneas `K`/`S`, y las unidades de las cifras están limitadas a las permitidas por `RENG_UNIDADES`.

### Mediciones del build

| Medida | Antes del lote (311 fichas) | Después (396 fichas) |
|---|---|---|
| Tamaño de `out/` | 17 357 108 bytes | **18 662 039** (+1 304 931; +7,5 %) |
| `View-*.js` (renderer) | 5 336,30 kB | 5 407,79 kB (+71,5) |
| `organos-*.js` | 3 016 kB | 3 016,33 kB (sin cambio) |
| Fichas (`datos/catalogo`) | 3,6 MB (piloto) | 4,32 MB |
| Extensiones (`datos/presentaciones`) | 220 KB (piloto) | 449 KB |
| Índice (`indice.json`) | no anotado | 225 314 bytes (≈ 520 bytes por presentación) |
| Vite, renderer | 654 ms | 659 ms |
| `npm run build` completo (reloj) | **no medido antes** | ≈ 1 s |

No se repitió `medir-arranque.mjs` (ventana, lista, abrir ficha, memoria) en este lote: la última medición es la del cierre del piloto.

### Lo no verificado

- Que cada paráfrasis y cada cifra de los campos de texto sean fieles a la frase citada: `test:fuentes` prueba que la **cita** está literal en la etiqueta, no que mi texto en español diga lo mismo que la cita. Lo revisé al escribir cada ficha, pero **no hay segunda lectura independiente**, y menos aún por una persona con formación sanitaria.
- Que las estructuras 3D de las fichas fuera de la muestra y de las 15 extensiones sean las correctas (el recorrido comprueba texto, no geometría); de la muestra solo vi 2 de 50 capturas.
- «Reproducir», «Ver todo como texto» y la accesibilidad con lector de pantalla en las fichas nuevas.
- El instalador (`npm run dist` no se ejecutó) y el arranque medido con 396 fichas.
- Que las citas sigan siendo literales si DailyMed o CIMA cambian el documento (se comprobaron contra la caché del 2026-11-15; la caché está en `node_modules/.cache/medicuerpo/` y se pierde con `npm ci`).
- Los candidatos «no se localizó etiqueta» pueden existir con otro nombre; no se buscaron a mano.

### Cómo retomar

Especificaciones del lote en `scripts/medicamentos/especificaciones/lote1/` (`c*` CIMA, `d*` DailyMed, `e*` extensiones de CIMA). Para regenerar una: `LOTE=lote1 node scripts/medicamentos/redactar.mjs <espec> node_modules/.cache/medicuerpo/contraste src/renderer/modules/medicuerpo/cuerpo/datos/catalogo node_modules/.cache/medicuerpo/lotes/registro.json`; luego `npm run indice`, `npm run typecheck`, `npm test`, `test:fuentes` y los guiones de `scripts/verificacion/`. Etiquetas nuevas: añadir la entrada a `scripts/medicamentos/lista.mjs` con el **mismo id que la ficha** y `node scripts/medicamentos/obtener-etiquetas.mjs <carpeta> <ids>`. El redactor falla si una cita no está literal en la sección, si falta `X` (excipientes) o si un origen no es válido (el campo origen de `C` solo admite `otra-presentacion` y `otra-via`; las condiciones van en su propia columna).

### Propuesta (sin implementar): «Contraindicaciones de la etiqueta» en cada ficha

**Qué.** Una sección nueva y plegada, «Contraindicaciones según la etiqueta», con la lista breve que la propia etiqueta declara, citada literal y con la versión de la etiqueta; sin interpretar, sin dosis, sin «cuándo sí». Interacciones, embarazo y lactancia, insuficiencia renal o hepática y edad avanzada serían, en su caso, propuestas posteriores.

**Fuente posible.** CIMA, sección 4.3 de la ficha técnica; DailyMed, sección 4 «Contraindications» del SPL. Es el texto que ya descargamos y contrastamos; entra en `test:fuentes` con el mismo mecanismo de citas literales (≤ 260 caracteres, una por contraindicación).

**Por qué esta y no otra.** Es la información adicional con mayor utilidad educativa por unidad de riesgo: listas cortas, con estructura parecida en las dos fuentes, y que no exige cálculo. Las interacciones (4.5 / 7) son listas largas con matices y dependen de la dosis; las poblaciones especiales mezclan cifras y ajustes de dosis, que el proyecto no da.

**Riesgos de decir algo médico incorrecto, y mitigación.**
1. *Citar fuera de contexto:* una contraindicación suele tener condiciones («solo en el tercer trimestre», «con insuficiencia hepática grave»). Mitigación: citar la frase completa o no citarla; nunca resumir a una etiqueta corta como «contraindicado en el embarazo».
2. *Lectura como permiso:* que algo no figure en la lista no significa que sea seguro. Mitigación: aviso fijo en la sección («la lista no es exhaustiva; manda la etiqueta completa y un profesional»).
3. *Diferencias entre España y EE. UU.:* el mismo activo tiene listas distintas según el mercado. Mitigación: la sección es por presentación y muestra la fuente y la versión.
4. *Obsolescencia:* las etiquetas cambian y la app es sin conexión. Mitigación: fecha de versión visible y aviso de revisión periódica.
5. *Errores de la fuente:* CIMA entrega símbolos rotos («=» por «≥», «?» por «µ»). Una contraindicación con «≥ 12 años» mal copiada cambiaría el sentido. Mitigación: las pruebas actuales ya exigen literalidad, pero hay que añadir una comprobación que rechace citas con símbolos perdidos en esta sección.
6. *Traducción:* un texto en español que parafrasee una cita en inglés es el mismo riesgo no verificado de arriba; conviene mostrar la cita original junto a su traducción, marcada como tal.
7. *Coste de revisión:* el cuello de botella es la revisión humana por alguien con formación sanitaria, no el código.

**Esfuerzo orientativo:** un campo opcional nuevo en la presentación (cambio del modelo de datos: requiere tu visto bueno), extracción desde las etiquetas ya cacheadas, un componente de ficha y una ampliación de `test:fuentes`. No se ha empezado.

**Puerta del lote 1: superada.** A la espera del OK del titular para el lote 2 (y de la decisión sobre las mallas de piel y venas). Sin commit; los textos «300 fichas» siguen sin cambiar.

## Fase 2 · Lote 2 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado, a la espera de OK

Encargo: 20 principios activos nuevos, todos sólidos orales y todos de DailyMed (etiqueta de la FDA), con prioridad cardiología > diabetes/endocrino > neurología/psiquiatría > aparato locomotor > respiratorio > digestivo > infecciones > oncología de apoyo. Reglas: nada sin cita literal (≤ 260 caracteres); los órganos de las etapas A, D, M, E y de las advertencias solo si la cita de esa línea (o de un `+|` adjunto) los nombra; sin farmacogenética; sin biológicos. Sin commit.

### Recuentos nuevos (leídos del índice; los reproduce `verificar-lista.mjs`)

| Categoría | Antes (lote 1) | Ahora | Diferencia |
|---|---|---|---|
| Fichas (principios activos) | 396 | **416** | +20 |
| Presentaciones | 435 | **455** | +20 |
| Sólidos orales (presentaciones) | 409 | **429** | +20 |
| Líquidos orales | 14 | 14 | 0 |
| Inyectables | 12 | 12 | 0 |
| Mercado EE. UU. (presentaciones) | 331 | **351** | +20 |
| Mercado España (presentaciones) | 104 | 104 | 0 |

Meta de sólidos orales: ≈ 1000; quedan ≈ 571 presentaciones.

### Las 20 fichas

Especificaciones en `scripts/medicamentos/especificaciones/lote2/` (`f01`–`f04`, cinco por archivo). Todas son fichas nuevas, con su `setid` fijado en `lista.mjs`.

| N.º | id | Principio activo | Área | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|
| 1 | acido-bempedoico | Ácido bempedoico | Colesterol y lípidos | Nexletol (Esperion) | v20, 2026-07-20 |
| 2 | vericiguat | Vericiguat | Cardiovascular | Verquvo (Merck Sharp & Dohme) | v13, 2026-02-06 |
| 3 | finerenona | Finerenona | Cardiovascular | Kerendia (Bayer) | v15, 2026-09-29 |
| 4 | riociguat | Riociguat | Cardiovascular | Adempas (Bayer) | v32, 2026-08-19 |
| 5 | selexipag | Selexipag | Cardiovascular | Uptravi (Actelion) | v26, 2026-06-01 |
| 6 | nisoldipino | Nisoldipino (liberación prolongada) | Cardiovascular | Nisoldipine ER (Heritage/Avet) | v1, 2026-08-03 |
| 7 | sotagliflozina | Sotagliflozina | Cardiovascular | Inpefa (Lexicon) | v12, 2026-08-21 |
| 8 | miglitol | Miglitol | Metabolismo y diabetes | Miglitol (Westminster) | v2, 2021-12-08 |
| 9 | osilodrostat | Osilodrostat | Hormonas y endocrino | Isturisa (Recordati) | v10, 2025-11-19 |
| 10 | cenobamato | Cenobamato | Sistema nervioso | Xcopri (SK Life Science) | v46, 2026-08-27 |
| 11 | lasmiditan | Lasmiditán | Sistema nervioso | Reyvow (Eli Lilly) | v16, 2026-08-10 |
| 12 | atogepant | Atogepant | Sistema nervioso | Qulipta (AbbVie) | v19, 2026-02-10 |
| 13 | lemborexant | Lemborexant | Sistema nervioso | Dayvigo (Eisai) | v39, 2025-03-03 |
| 14 | brexpiprazol | Brexpiprazol | Salud mental | Rexulti (Otsuka) | v26, 2026-05-28 |
| 15 | cariprazina | Cariprazina | Salud mental | Vraylar (Allergan) | v32, 2026-08-20 |
| 16 | sulindaco | Sulindaco | Dolor y fiebre | Sulindac (Epic Pharma) | v19, 2024-12-23 |
| 17 | zileuton | Zileutón (liberación prolongada) | Respiratorio y alergia | Zileuton ER (Rising) | v7, 2024-05-24 |
| 18 | vonoprazan | Vonoprazán | Aparato digestivo | Voquezna (Phathom) | v6, 2026-07-20 |
| 19 | tedizolid | Tedizolid | Infecciones | Sivextro (Merck Sharp & Dohme) | v34, 2026-03-16 |
| 20 | rolapitant | Rolapitant | Oncología | Varubi (Luria) | v3, 2026-09-10 |

### Descartes con motivo

| Candidato | Fuente | Motivo | Sustituto |
|---|---|---|---|
| Rosiglitazona | DailyMed | Solo hay una etiqueta de Avandia de un reempaquetador (Physicians Total Care, 2010); ninguna vigente del titular | Sotagliflozina |
| Elagolix (Orilissa) | DailyMed | La farmacocinética de la sección 12.3 está solo en tablas de celdas sueltas, sin frases citables (mismo criterio que doravirina en el lote 1) | Osilodrostat |
| Ivacaftor (Kalydeco) | DailyMed | La indicación depende del genotipo CFTR y de una prueba de mutaciones: choca con la decisión 3 (sin farmacogenética) | Zileutón |
| Deutetrabenazina (Austedo) | DailyMed | La ficha pasó el redactor, pero `npm test` falló: la molécula lleva 6 deuterios y `rengDesdeSmiles` no tiene en cuenta los isótopos, así que la masa calculada difiere 6,07 g/mol de la de PubChem. Arreglarlo exige cambiar la lógica química compartida, fuera del alcance del lote. Se borraron la ficha generada y su entrada del registro | Lasmiditán |

### Desviaciones respecto al texto del encargo (y por qué)

- **Formato real del redactor.** Donde el texto del encargo difiere de `redactar.mjs` y de `lote1/`, manda el redactor: áreas `CV, SN, SM, MD, HE, RA, AD, IN, ON, DF, CL…` (no `NE, PS, GI, ID, HO`); destinos `encefalo`, `vias-respiratorias`, `tejido-adiposo`… (no `cerebro`; no existen `oidos`, `utero` ni suprarrenales); el último campo de `W` es el código de sección donde buscar la cita (`34066-1` para recuadros, `43685-7` para advertencias PLR, `34071-1` o `42229-5` en etiquetas antiguas), no siempre `43685-7`.
- **Comandos.** `obtener-etiquetas.mjs` necesita la carpeta de salida y los ids; `redactar.mjs` necesita especificación, etiquetas, catálogo y registro (ver «Cómo retomar»); `verificar-recorrido.mjs` no tiene `--solo-nuevas`: se le pasaron los 20 ids.
- **Menos de 2 advertencias** en selexipag y nisoldipino: sus etiquetas solo traen una (edema pulmonar con enfermedad venooclusiva; angina o infarto en la coronariopatía). No se rellenó con otra sección.
- **Regla estricta de órganos.** Aplicada sin excepciones, deja sin órgano la acción de osilodrostat (la glándula suprarrenal no es un destino del atlas), cenobamato, brexpiprazol, cariprazina, lemborexant, atogepant, lasmiditán, sulindaco y tedizolid, el metabolismo de vericiguat, finerenona, riociguat, nisoldipino, sotagliflozina, osilodrostat, cenobamato, brexpiprazol, cariprazina, lemborexant, atogepant, vonoprazán, tedizolid y rolapitant (y el de miglitol, que no se metaboliza), y la distribución de miglitol («líquido extracelular») y osilodrostat, porque su cita no nombra un órgano (por ejemplo «metabolized by CYP3A4» sin «liver»). El panel dice entonces que la fuente no nombra un órgano. En el lote 1 se puso `encefalo` o `higado` en casos así; aquí no. **Decisión pendiente del titular:** mantener la regla estricta o admitir el órgano implícito.
- **Equivalencias aceptadas:** «plasma» y «serum» como `sangre`; «CNS/central nervous system» como `encefalo`; «urine/urinary» como `orina`; «renal» como `rinones`. Un guion temporal (fuera del proyecto) comprobó las 114 asignaciones de órganos de las especificaciones contra esos patrones: todas tienen respaldo en su cita.
- **Presentación elegida** cuando la etiqueta trae varias: selexipag, comprimidos recubiertos de 200–1600 µg (no los de 100/150 µg ni la vía intravenosa); cenobamato, comprimidos recubiertos (no el de 12,5 mg sin recubrir ni los kits); tedizolid, comprimido (la etiqueta incluye la forma intravenosa). Las cifras tomadas de la vía intravenosa (volumen de distribución de brexpiprazol y tedizolid) llevan `otra-via`.

### Qué se verificó y cómo

| Puerta | Resultado |
|---|---|
| `redactar.mjs` (cada cita literal en su sección de la etiqueta cacheada del 2026-11-18) | 20/20 fichas `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan (con la deutetrabenazina fallaba 1; ver descartes) |
| `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes` | **835** pasan (antes 795: +2 por ficha) |
| `npm run build` | compila; `View-*.js` 5 423,34 kB (antes 5 407,79 kB) |
| `verificar-recorrido.mjs --etiqueta=lote2` con los 20 ids | **20 fichas, 20 presentaciones**: cinco etapas con texto ≥ 40 caracteres, sin `undefined`/`NaN`/`[object`, **consola sin errores ni avisos** |
| `verificar-lista.mjs` | **19/19**: «416 de 416 · 455 de 455»; España 104; vía oral 442; consola limpia |
| Auditoría de órganos (guion temporal) | 114/114 con respaldo en la cita |

### Lo no verificado

- Que cada texto en español sea fiel a su cita: `test:fuentes` prueba la literalidad de la cita, no la traducción. Revisado al escribir, **sin segunda lectura independiente** ni revisión por alguien con formación sanitaria.
- Las estructuras 3D iluminadas (no se hicieron capturas en este lote), «Reproducir», «Ver todo como texto» y la accesibilidad de las fichas nuevas.
- `medir-arranque.mjs` y el instalador (`npm run dist` no se ejecutó).
- Que las citas sigan siendo literales si DailyMed cambia las etiquetas (caché del 2026-11-18 en `node_modules/.cache/medicuerpo/`, que se pierde con `npm ci`).

### Cómo retomar

`node scripts/medicamentos/obtener-etiquetas.mjs node_modules/.cache/medicuerpo/contraste <ids>`; luego, por archivo, `LOTE=lote2 node scripts/medicamentos/redactar.mjs scripts/medicamentos/especificaciones/lote2/fNN.espec.txt node_modules/.cache/medicuerpo/contraste src/renderer/modules/medicuerpo/cuerpo/datos/catalogo node_modules/.cache/medicuerpo/lotes/registro.json`; después `npm run indice`, `npm run typecheck`, `npm test`, `test:fuentes`, `npm run build` y `node scripts/verificacion/verificar-recorrido.mjs --etiqueta=<lote> <ids>`.

**Puerta del lote 2: superada.** A la espera del OK del titular para el lote 3 y de la decisión sobre la regla de órganos. Sin commit; los textos «300 fichas» siguen sin cambiar.

## Fase 2 · Lote 3 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado, a la espera de OK

Encargo aprobado por el titular: los 20 candidatos propuestos, sin cambios. Prioridad del lote: sistema nervioso > salud mental > reumatología > cardiovascular. Todas las etiquetas son de DailyMed (FDA). Sin commit.

**Regla de órganos de este lote (decisión del titular).** Órgano solo si la cita de la línea (o de un `+|` adjunto) lo nombra, o por estas equivalencias aprobadas: «metabolized by CYP3A4/5», «hepatic» o «first-pass» → `higado`; «renal», «renal clearance» o «glomerular filtration» → `rinones`; «in urine» en la eliminación → `rinones,orina`; «in feces» → `heces`; unión a proteínas del plasma o del suero → `sangre`; «CNS», «central nervous system» o barrera hematoencefálica → `encefalo`. Embarazo en abstracto («fetal harm», «pregnant») → sin órgano; `utero` no es un id válido (se usaría `organos-reproductores` si la cita nombrara útero u ovarios; no ocurrió). Otros casos en que la cita nombra literalmente la estructura: «platelets» → `plaquetas` (vorapaxar), «synovial tissues» → `articulaciones` (oxaprozina), «central retina» → `ojos` (vigabatrina), «heart rate» o «heart» → `corazon`, «pulmonary» → `pulmones`, «liver» → `higado`, «urinary» → `vias-urinarias`, «peripheral tissues» → `tejidos`. Las fichas del lote 2 **no** se han revisado con estas equivalencias.

### Recuentos nuevos (leídos del índice; los reproduce `verificar-lista.mjs`)

| Categoría | Antes (lote 2) | Ahora | Diferencia |
|---|---|---|---|
| Fichas (principios activos) | 416 | **436** | +20 |
| Presentaciones | 455 | **475** | +20 |
| Sólidos orales (presentaciones) | 429 | **449** | +20 |
| Líquidos orales | 14 | 14 | 0 |
| Inyectables | 12 | 12 | 0 |
| Mercado EE. UU. (presentaciones) | 351 | **371** | +20 |
| Mercado España (presentaciones) | 104 | 104 | 0 |
| Vía sublingual (presentaciones) | 1 | **2** | +1 (asenapina) |

Meta de sólidos orales: ≈ 1000; quedan ≈ 551 presentaciones.

### Las 20 fichas

Especificaciones en `scripts/medicamentos/especificaciones/lote3/` (`f01`–`f04`, cinco por archivo); `setid` fijado en `lista.mjs` para las 20.

| N.º | id | Principio activo | Área | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|
| 1 | tiagabina | Tiagabina | SN | Tiagabine HCl (Sun Pharma) | v9, 2018-11-02 |
| 2 | vigabatrina | Vigabatrina | SN | Sabril (Lundbeck) | v40, 2025-12-17 |
| 3 | opicapona | Opicapona | SN | Ongentys (Amneal) | v12, 2026-10-30 |
| 4 | istradefilina | Istradefilina | SN | Nourianz (Kyowa Kirin) | v6, 2025-05-23 |
| 5 | rimegepant | Rimegepant (comprimido bucodispersable) | SN | Nurtec ODT (Pfizer) | v32, 2026-06-08 |
| 6 | daridorexant | Daridorexant | SN | Quviviq (Idorsia) | v13, 2026-03-02 |
| 7 | ozanimod | Ozanimod | SN | Zeposia (Celgene) | v25, 2026-04-17 |
| 8 | solriamfetol | Solriamfetol | SN | Sunosi (Axsome) | v6, 2026-05-11 |
| 9 | lumateperona | Lumateperona | SM | Caplyta (Intra-Cellular) | v28, 2026-11-09 |
| 10 | levomilnacipran | Levomilnacipran (cápsula de liberación prolongada) | SM | Fetzima (Allergan) | v33, 2026-02-23 |
| 11 | viloxazina | Viloxazina (cápsula de liberación prolongada) | SM | Qelbree (Supernus) | v16, 2026-10-08 |
| 12 | zuranolona | Zuranolona | SM | Zurzuvae (Biogen) | v18, 2026-06-17 |
| 13 | asenapina | Asenapina (comprimido sublingual) | SM | Saphris (Allergan) | v22, 2025-12-12 |
| 14 | pimavanserina | Pimavanserina | SM | Nuplazid 34 mg cápsula (Acadia) | v23, 2026-06-22 |
| 15 | diflunisal | Diflunisal | HU | Diflunisal (Heritage/Avet) | v14, 2026-08-07 |
| 16 | oxaprozina | Oxaprozina | HU | Oxaprozin (Dr. Reddy's) | v11, 2026-03-27 |
| 17 | avacopan | Avacopan | II | Tavneos (ChemoCentryx) | v16, 2026-06-12 |
| 18 | vorapaxar | Vorapaxar | SC | Zontivity (WraSer) | v2, 2022-10-19 |
| 19 | aprocitentan | Aprocitentán | CV | Tryvio (Idorsia) | v8, 2026-08-20 |
| 20 | lomitapida | Lomitapida | CL | Juxtapid (Chiesi) | v25, 2026-04-02 |

### Descartes con motivo

Ningún candidato se descartó. Dos ajustes de fuente:

| Candidato | Incidencia | Solución |
|---|---|---|
| Tiagabina | La búsqueda por marca (Gabitril) devolvió una etiqueta de reempaquetador (Carilion, v3, 2016); no hay etiqueta vigente de Gabitril del titular en DailyMed | Se fijó la etiqueta genérica de Sun Pharma (v9, 2018), la más completa de un fabricante |
| Ozanimod | `obtener-etiquetas.mjs` no lo encontró por marca en openFDA ni por nombre comercial en DailyMed («sin etiquetas») | Se buscó a mano en DailyMed y se fijó el `setid` de Zeposia (Celgene, v25) |

### Incidencias resueltas durante la redacción

- **Excipientes:** las etiquetas de lumateperona y lomitapida no traen los inactivos en los datos estructurados del producto; el redactor pidió la línea `X` y se copiaron de la sección 11 de cada etiqueta.
- **Citas mal copiadas por mí y corregidas** (el redactor no las encontró): «diarrea» por «diarrhea» en diflunisal, y una cita de diflunisal cortada en «perfora», que se completó y ahora nombra «stomach» (→ `estomago`).
- **Órganos retirados al revisar:** vigabatrina tenía `rinones` en la etapa de metabolismo (la cita dice que no se metaboliza y se elimina por el riñón: el órgano corresponde a la eliminación) y la advertencia de visión citaba una frase sin órgano; se cambió por la que nombra la retina.
- **Formas especiales:** rimegepant (bucodispersable) y asenapina (sublingual, `ruta=SUBLINGUAL;vias=sublingual`) llevan en la línea `L` qué llega y qué sigue en la boca; levomilnacipran y viloxazina, cápsulas de liberación prolongada. Pimavanserina: se eligió la cápsula de 34 mg (la etiqueta incluye también comprimidos de 10 mg).

### Qué se verificó y cómo

| Puerta | Resultado |
|---|---|
| `redactar.mjs` (cada cita literal en su sección de la etiqueta cacheada del 2026-11-18) | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes` | **875** pasan (antes 835: +2 por ficha) |
| `npm run build` | compila; `View-*.js` 5 439,00 kB (antes 5 423,34 kB) |
| `verificar-recorrido.mjs --etiqueta=lote3` con los 20 ids | **20 fichas, 20 presentaciones**: cinco etapas con texto ≥ 40 caracteres, sin `undefined`/`NaN`/`[object`; **consola sin errores ni avisos** |
| `verificar-lista.mjs` | **19/19**: «436 de 436 principios activos · 475 de 475 presentaciones» (416 + 20, sin descartes); vía oral 461, sublingual 2; España 104; consola limpia |
| Auditoría de órganos (guion temporal, fuera del proyecto) | 123 asignaciones; todas con respaldo literal o por equivalencia; la única alerta del guion (lumateperona escribe «cytochrome P450 (CYP) 3A4») se revisó a mano y es CYP3A4 |

### Lo no verificado

- Fidelidad de cada texto en español a su cita: revisado al escribir, sin segunda lectura independiente ni revisión sanitaria.
- Geometría 3D (sin capturas en este lote), «Reproducir», «Ver todo como texto», accesibilidad, `medir-arranque.mjs` e instalador.
- Que las citas sigan siendo literales si DailyMed cambia las etiquetas (caché del 2026-11-18 en `node_modules/.cache/medicuerpo/`).

**Puerta del lote 3: superada.** A la espera del OK del titular para el lote 4. Sin commit; los textos «300 fichas» siguen sin cambiar.

## Fase 2 · Lote 4 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado

Encargo del titular: lotes 4, 5 y 6 seguidos en modo autónomo, sin pedir confirmación entre lotes; candidatos elegidos por prioridad de área (SN, SM, HU, II, CV, CL, SC, MD, HE, RA, AD, IN, ON, UR, DF), sin biológicos, farmacogenética ni deuterio; un candidato que falla se sustituye por otro de la misma área sin parar. Regla de órganos: la del lote 3 (cita literal o equivalencias aprobadas). Todas las etiquetas, de DailyMed (FDA). Sin commit.

### Candidatos (área y motivo) y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | ponesimod | Ponesimod | SN | Modulador S1P1 para la esclerosis múltiple | Ponvory (Janssen) | v14, 2026-11-16 |
| 2 | dimetilfumarato | Dimetilfumarato | SN | Esclerosis múltiple (vía Nrf2) | Tecfidera (Biogen) | v56, 2026-10-29 |
| 3 | diroximel-fumarato | Diroximel fumarato | SN | Esclerosis múltiple, profármaco del monometilfumarato | Vumerity (Biogen) | v16, 2025-06-02 |
| 4 | tasimelteon | Tasimelteón | SN | Agonista de melatonina (trastorno no-24 h) | Hetlioz (Vanda) | v15, 2026-08-06 |
| 5 | risdiplam | Risdiplam | SN | Atrofia muscular espinal (comprimido) | Evrysdi (Genentech) | v28, 2026-11-05 |
| 6 | gabapentina-enacarbilo | Gabapentina enacarbilo | SN | Piernas inquietas y neuralgia posherpética (LP) | Horizant (Azurity) | v16, 2025-05-07 |
| 7 | valbenazina | Valbenazina | SN | Inhibidor VMAT2 (discinesia tardía, corea) | Ingrezza (Neurocrine) | v34, 2026-04-22 |
| 8 | pitolisant | Pitolisant | SN | Antagonista H3 (narcolepsia) | Wakix (Harmony) | v18, 2026-02-26 |
| 9 | omaveloxolona | Omaveloxolona | SN | Ataxia de Friedreich (vía Nrf2) | Skyclarys (Biogen) | v9, 2026-04-17 |
| 10 | droxidopa | Droxidopa | SN | Hipotensión ortostática neurógena | Northera (Lundbeck) | v26, 2025-12-17 |
| 11 | felbamato | Felbamato | SN | Antiepiléptico de reserva | Felbatol (Viatris) | v16, 2025-12-31 |
| 12 | gepirona | Gepirona | SM | Antidepresivo agonista 5-HT1A (LP) | Exxua (Aytu) | v3, 2026-07-15 |
| 13 | lofexidina | Lofexidina | SM | Abstinencia de opioides | Lucemyra (BioCorRx) | v2, 2026-08-17 |
| 14 | acamprosato | Acamprosato | SM | Mantenimiento de la abstinencia alcohólica (gastrorresistente) | Acamprosate (Glenmark) | v12, 2026-01-26 |
| 15 | dexmetilfenidato | Dexmetilfenidato | SM | Estimulante para el TDAH | Focalin (Sandoz) | v2, 2025-12-12 |
| 16 | nefazodona | Nefazodona | SM | Antidepresivo | Nefazodone (Teva) | v12, 2025-11-17 |
| 17 | flibanserina | Flibanserina | SM | Deseo sexual hipoactivo | Addyi (Sprout) | v15, 2025-12-23 |
| 18 | milnacipran | Milnaciprán | DF | IRSN para la fibromialgia (sustituye a un candidato SM) | Savella (Allergan) | v41, 2026-08-27 |
| 19 | abrocitinib | Abrocitinib | II | Inhibidor de JAK1 (dermatitis atópica) | Cibinqo (U.S. Pharmaceuticals) | v7, 2026-10-26 |
| 20 | ritlecitinib | Ritlecitinib | II | Inhibidor de JAK3/TEC (alopecia areata) | Litfulo (U.S. Pharmaceuticals) | v3, 2026-06-22 |

### Descartes con motivo (todos sustituidos)

| Candidato | Área | Motivo |
|---|---|---|
| Triazolam | SM | Primero sin etiqueta por marca; con la genérica (Mylan) la distribución solo dice que no desplaza la bilirrubina: sin unión a proteínas ni volumen |
| Estiripentol (Diacomit) | SN | La sección de farmacocinética no trae excreción |
| Dantroleno | SN | Sin datos de distribución |
| Etosuximida (Zarontin) | SN | Farmacocinética casi vacía (sin absorción, distribución ni metabolismo citables) |
| Loxapina | SM | Sin datos de distribución |
| Dextroanfetamina | SM | Farmacocinética de 2 300 caracteres sin distribución, metabolismo ni excreción |
| Clordiazepóxido | SM | Farmacocinética casi vacía |
| Selegilina (genérico Apotex) | SN | Sin distribución ni excreción |
| Piridostigmina | SN | Mestinon (miastenia) no trae farmacocinética; la etiqueta con farmacocinética es la de pretratamiento militar frente al agente nervioso somán, que no es de uso clínico habitual |
| Isocarboxazida, amoxapina, protriptilina, tranilcipromina, trimipramina | SM | Etiquetas antiguas sin absorción y distribución (o con farmacocinética de menos de 1 100 caracteres) |
| Quazepam, maprotilina | SM | No se localizó etiqueta en openFDA ni en DailyMed |
| Fenelzina | SM | Sin datos de distribución |
| Trihexifenidilo, metsuximida | SN | Solo etiqueta de solución (trihexifenidilo) o sin absorción ni distribución (metsuximida) |
| Estazolam | SM | La etiqueta no trae mecanismo de acción: la línea `A` no tendría cita |
| Iloperidona (Fanapt) | SM | La semivida y la excreción solo están estratificadas por metabolizador CYP2D6 (farmacogenética) |

Al agotarse los candidatos de salud mental con etiqueta completa, los últimos huecos se cubrieron con milnaciprán (DF) y dos de la siguiente área prioritaria (II).

### Incidencias resueltas

- Felbamato: la búsqueda genérica devolvió la etiqueta de suspensión; se fijó la de Felbatol (Viatris), con comprimidos. No trae excipientes estructurados: línea `X` desde la sección de descripción.
- Segundas reacciones adversas (`R`) que citaban secciones distintas de la 6: el redactor las rechazó y se sustituyeron por frases reales de la sección 6.
- Unidad de droxidopa: la etiqueta da 400 mL/h; se registra como 0,4 L/h (unidad del catálogo) con la cifra original en el nombre.
- Cita de milnaciprán cortada en «stu»: se cerró en «young adults».
- Acamprosato: la cita de eliminación nombra el riñón pero no la orina; se quitó `orina`.
- Risdiplam no tiene sección de advertencias (5): ficha sin líneas `W`, sin inventar ninguna.

### Recuentos

| Categoría | Antes (lote 3) | Ahora |
|---|---|---|
| Fichas | 436 | **456** |
| Presentaciones | 475 | **495** |
| Sólidos orales (presentaciones) | 449 | **469** |
| Mercado EE. UU. | 371 | **391** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **915** pasan (antes 875) |
| `npm run build` | compila; `View-*.js` 5 454,27 kB |
| `verificar-recorrido.mjs --etiqueta=lote4` (20 ids) | 20 fichas, 20 presentaciones, cinco etapas con texto, consola limpia |
| `verificar-lista.mjs` | **19/19**: «456 de 456 · 495 de 495» (436 + 20) |
| Auditoría de órganos (guion temporal) | 109/109 tras quitar `orina` en acamprosato |

**Puerta del lote 4: superada.** Se sigue con el lote 5 sin pausa, según el encargo.

## Fase 2 · Lote 5 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado

Mismo encargo autónomo y mismas reglas que el lote 4. Con salud mental agotada, el lote sigue la prioridad HU → II → CV → SC. Todas las etiquetas, de DailyMed (FDA).

### Candidatos (área y motivo) y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | fenoprofeno | Fenoprofeno | HU | AINE (artritis reumatoide, artrosis, dolor) | Fenoprofen calcium (Rising) | v8, 2025-12-09 |
| 2 | flurbiprofeno | Flurbiprofeno | HU | AINE (artritis reumatoide, artrosis) | Lurbiro (IPG) | v2, 2026-10-08 |
| 3 | meclofenamato | Meclofenamato | HU | AINE (fenamato) | Meclofenamate (Mylan) | v20, 2026-05-29 |
| 4 | acido-mefenamico | Ácido mefenámico | HU | AINE (dolor, dismenorrea) | Mefenamic acid (Lupin) | v13, 2026-04-23 |
| 5 | etrasimod | Etrasimod | II | Modulador S1P (colitis ulcerosa) | Velsipity (Pfizer) | v4, 2025-08-21 |
| 6 | belumosudil | Belumosudil | II | Inhibidor de ROCK (EICH crónica) | Rezurock (Kadmon) | v11, 2026-04-09 |
| 7 | voclosporina | Voclosporina | II | Inhibidor de la calcineurina (nefritis lúpica) | Lupkynis (Aurinia) | v13, 2026-11-16 |
| 8 | iptacopan | Iptacopán | II | Inhibidor del factor B del complemento | Fabhalta (Novartis) | v6, 2026-07-20 |
| 9 | leniolisib | Leniolisib | II | Inhibidor de PI3Kδ (APDS) | Joenja (Pharming) | v8, 2026-10-05 |
| 10 | esparsentan | Esparsentán | CV | Antagonista dual ETA/AT1 (nefropatía IgA) | Filspari (Travere) | v7, 2026-04-17 |
| 11 | betaxolol | Betaxolol | CV | Betabloqueante cardioselectivo | Betaxolol (KVK-Tech) | v10, 2024-05-02 |
| 12 | pindolol | Pindolol | CV | Betabloqueante con ASI | Pindolol (Sun) | v7, 2026-03-18 |
| 13 | isradipino | Isradipino | CV | Antagonista del calcio | Isradipine (Teva) | v11, 2026-06-17 |
| 14 | nicardipino | Nicardipino | CV | Antagonista del calcio (angina, hipertensión) | Nicardipine (Glenmark) | v3, 2026-01-30 |
| 15 | disopiramida | Disopiramida | CV | Antiarrítmico de clase I | Norpace (Pfizer) | v22, 2026-08-25 |
| 16 | quinidina | Quinidina | CV | Antiarrítmico de clase IA | Quinidine sulfate (Epic) | v2, 2023-12-21 |
| 17 | avatrombopag | Avatrombopag | SC | Agonista del receptor de TPO | Doptelet (AkaRx) | v21, 2025-08-15 |
| 18 | fostamatinib | Fostamatinib | SC | Inhibidor de SYK (trombocitopenia inmune) | Tavalisse (Rigel) | v11, 2025-11-17 |
| 19 | deferiprona | Deferiprona | SC | Quelante del hierro | Ferriprox (Chiesi) | v15, 2026-01-30 |
| 20 | lusutrombopag | Lusutrombopag | SC | Agonista del receptor de TPO | Mulpleta (Vancocin Italia) | v6, 2025-12-10 |

### Descartes con motivo (todos sustituidos)

| Candidato | Área | Motivo |
|---|---|---|
| Tolmetina | HU | Sin datos de distribución (ni unión a proteínas ni volumen) |
| Salsalato | HU | Sin datos de distribución propios (solo competencia del salicilato por la unión a proteínas) |
| Clorzoxazona, orfenadrina | HU | Farmacocinética de 1 000 y 262 caracteres, sin absorción ni distribución citables |
| Etidronato | HU | No se localizó etiqueta en openFDA ni en DailyMed |
| Triamtereno, pentoxifilina | CV | Sin datos de distribución |
| Dipiridamol | SC | Sin datos de absorción |
| Anagrelida | SC | Sin datos de distribución |

Los AINE de la etiqueta completa se agotaron en HU (el resto ya está en el catálogo); el hueco se cubrió con esparsentán (CV).

### Incidencias resueltas

- Segundas reacciones (`R`) que citaban «[see Warnings…»: en dos etiquetas la sección 6 escribe «[ see» con espacio; se copió literal. Cita de esparsentán con una coma mal transcrita por mí y cita de ácido mefenámico de más de 260 caracteres: corregidas.
- Citas que había dejado cortadas al leerlas (pindolol «exe», nicardipino «vascular sm», meclofenamato «USP con»): se cerraron en palabras completas.
- Isradipino: la sección «WARNINGS» de la etiqueta dice «None»; no se pone línea `W`.
- Voclosporina: el texto decía «cápsula blanda», que la etiqueta no declara; se cambió a «cápsula».
- Órganos retirados tras la auditoría: iptacopán (la cita del mecanismo no nombra la sangre) y disopiramida (la cita del mecanismo no nombra el corazón). Se aceptan por equivalencia «Cytochrome P450 3A» (esparsentán) y «cytochrome P450 3A4» (disopiramida) → `higado`, y «bone marrow» → `medula-osea` (avatrombopag).

### Recuentos

| Categoría | Antes (lote 4) | Ahora |
|---|---|---|
| Fichas | 456 | **476** |
| Presentaciones | 495 | **515** |
| Sólidos orales (presentaciones) | 469 | **489** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **955** pasan (antes 915) |
| `npm run build` | compila; `View-*.js` 5 469,59 kB |
| `verificar-recorrido.mjs --etiqueta=lote5` (20 ids) | 20 fichas, 20 presentaciones, cinco etapas con texto, consola limpia |
| `verificar-lista.mjs` | **19/19**: «476 de 476 · 515 de 515» (456 + 20) |
| Auditoría de órganos | 108 sin alerta; 4 alertas revisadas a mano (1 corregida —disopiramida, acción— y 3 aceptadas por equivalencia o nombre literal) |

**Puerta del lote 5: superada.** Se sigue con el lote 6 sin pausa.

## Fase 2 · Lote 6 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado

Mismo encargo autónomo y mismas reglas. Con SN, SM, HU e II casi agotados en etiquetas completas, el lote cubre CV → MD → SC → AD → ON → DF → IN y un analgésico nuevo (SN). Todas las etiquetas, de DailyMed (FDA).

### Candidatos (área y motivo) y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | acebutolol | Acebutolol | CV | Betabloqueante cardioselectivo con ASI | Acebutolol (ANI) | v6, 2025-11-17 |
| 2 | timolol | Timolol | CV | Betabloqueante no selectivo (vía oral) | Timolol maleate (Rising) | v1, 2024-12-12 |
| 3 | miglustat | Miglustat | MD | Reducción de sustrato (Gaucher tipo 1) | Zavesca (Actelion) | v19, 2023-04-21 |
| 4 | mitapivat | Mitapivat | MD | Activador de la piruvato cinasa | Pyrukynd (Agios) | v12, 2026-07-06 |
| 5 | vadadustat | Vadadustat | SC | Inhibidor de HIF-PH (anemia de la ERC) | Vafseo (Akebia) | v4, 2026-04-15 |
| 6 | ospemifeno | Ospemifeno | AD | Agonista/antagonista estrogénico (dispareunia) | Osphena (Duchesnay) | v4, 2025-02-17 |
| 7 | fezolinetant | Fezolinetant | AD | Antagonista NK3 (síntomas vasomotores) | Veozah (Astellas) | v8, 2026-03-06 |
| 8 | paltusotida | Paltusotida | AD | Agonista SSTR2 no peptídico (acromegalia) | Palsonify (Crinetics) | v3, 2025-10-03 |
| 9 | relugolix | Relugolix | ON | Antagonista de la GnRH (cáncer de próstata) | Orgovyx (Sumitomo) | v13, 2026-10-19 |
| 10 | eluxadolina | Eluxadolina | DF | Agonista opioide mixto (SII-D) | Viberzi (Allergan) | v28, 2026-06-26 |
| 11 | resmetirom | Resmetirom | DF | Agonista THR-β (MASH) | Rezdiffra (Madrigal) | v4, 2026-08-05 |
| 12 | elafibranor | Elafibranor | DF | Agonista PPAR (colangitis biliar primaria) | Iqirvo (Ipsen) | v4, 2026-08-17 |
| 13 | naldemedina | Naldemedina | DF | Antagonista opioide periférico | Symproic (BDSI) | v10, 2025-07-31 |
| 14 | olsalazina | Olsalazina | DF | Aminosalicilato (colitis ulcerosa) | Dipentum (Viatris) | v17, 2026-08-28 |
| 15 | suzetrigina | Suzetrigina | SN | Bloqueante NaV1.8 (dolor agudo) | Journavx (Vertex) | v10, 2026-10-09 |
| 16 | omadaciclina | Omadaciclina | IN | Tetraciclina (aminometilciclina) | Nuzyra (Paratek) | v13, 2026-11-17 |
| 17 | delafloxacino | Delafloxacino | IN | Fluoroquinolona aniónica | Baxdela (Melinta) | v21, 2025-08-11 |
| 18 | lefamulina | Lefamulina | IN | Pleuromutilina | Xenleta (Meitheal) | v1, 2026-07-24 |
| 19 | letermovir | Letermovir | IN | Inhibidor de la terminasa del CMV | Prevymis (Merck) | v28, 2026-01-23 |
| 20 | maribavir | Maribavir | IN | Inhibidor de la cinasa pUL97 del CMV | Livtencity (Takeda) | v14, 2026-02-06 |

En las etiquetas con varias presentaciones (omadaciclina, delafloxacino, lefamulina, letermovir) se toma solo el comprimido; los datos medidos tras dosis intravenosa llevan el origen `otra-via`, y el balance de masas del maribavir con solución oral, `otra-presentacion`.

### Descartes con motivo (todos sustituidos)

| Candidato | Área | Motivo |
|---|---|---|
| Fentermina, tolbutamida, clorpropamida, drospirenona | SM / MD / AD | Sin etiqueta localizada en openFDA ni en DailyMed |
| Ácido obeticólico | DF | Sin etiqueta localizada |
| Trientina, metirapona, salbutamol, terbutalina, carbinoxamina | MD / AD / RA | Sin datos de distribución |
| Ciproheptadina | RA | Sin absorción ni distribución citables |
| Penicilamina | MD | Sin metabolismo descrito y sin excipientes declarados |
| Sapropterina | MD | Sin excreción descrita y sin excipientes declarados |
| Nitisinona | MD | La etiqueta localizada es la suspensión oral |
| Migalastat | MD | Pasó la criba; se cambió por suzetrigina para quedarse en 20. Comprobado en el lote 8: la etiqueta (Galafold v18, 2025-09-15) no tiene secciones 4 ni 5, así que no hay advertencias que citar |
| Progesterona | AD | La etiqueta no describe el mecanismo de acción |
| Elagolix | AD | Contenido farmacogenético (genotipo SLCO1B1) |
| Seladelpar | DF | Contenido farmacogenético (metabolizadores lentos de CYP2C9, sección 8.8) |
| Levocetoconazol | AD | PubChem devuelve el CID del ketoconazol racémico; la identidad química no sería correcta |

Reservas que pasaron la criba y no se usaron (retiradas de `lista.mjs`): crinecerfont, odevixibat, maralixibat, tenapanor.

### Incidencias resueltas

- `B` con población en la columna de órganos (ospemifeno, fezolinetant): el redactor la rechazó como «destino desconocido»; se dejó vacía.
- Omadaciclina: la cita de `L` venía de la sección de posología; se cambió por la descripción del comprimido (sección 3.2).
- Órganos retirados tras la auditoría: `corazon` en relugolix (QT) y paltusotida (bradicardia), `nervios` en miglustat («neuropathy»), y `sitio-infeccion` en los cinco mecanismos antimicrobianos (la cita no nombra el sitio). Se aceptan por nombre literal «uterus» → `organos-reproductores` (ospemifeno), «pancreatic» → `pancreas` (eluxadolina), «colon» → `intestino-grueso` (olsalazina) y «skin» → `piel` (delafloxacino).
- `test:fuentes` necesita `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste`; sin la variable falla al leer un directorio vacío (no es un error de las fichas).

### Recuentos

| Categoría | Antes (lote 5) | Ahora |
|---|---|---|
| Fichas | 476 | **496** |
| Presentaciones | 515 | **535** |
| Sólidos orales (presentaciones) | 489 | **509** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **995** pasan (antes 955) |
| `npm run build` | compila; `View-*.js` 5 485,34 kB |
| `verificar-recorrido.mjs --etiqueta=lote6` (20 ids) | 20 fichas, 20 presentaciones, cinco etapas con texto, consola limpia |
| `verificar-lista.mjs` | **19/19**: «496 de 496 · 535 de 535» (476 + 20) |
| Auditoría de órganos | 91 sin alerta; 4 alertas aceptadas por nombre literal; el resto, corregidas |

**Puerta del lote 6: superada.** Fin del encargo de los lotes 4, 5 y 6. Nada en commit; siguiente paso: revisión del titular y, si la da por buena, lote 7.

## Fase 2 · Lote 7 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado

Encargo autónomo de los lotes 7, 8 y 9. Prioridad RA → UR → ON → IN → DF → HE → AD → CV → CL → SC → MD. Regla nueva: en IN se admite `sitio-infeccion` en la línea `A` aunque la cita no lo nombre. `test:fuentes` se ejecuta siempre con `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste`.

### Candidatos (área y motivo) y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | ivacaftor | Ivacaftor | RA | Potenciador de CFTR (fibrosis quística) | Kalydeco (Vertex) | v36, 2026-03-30 |
| 2 | ponatinib | Ponatinib | ON | Inhibidor de BCR::ABL (incl. T315I) | Iclusig (Takeda) | v20, 2026-08-19 |
| 3 | asciminib | Asciminib | ON | Inhibidor alostérico de BCR::ABL1 | Scemblix (Novartis) | v13, 2026-09-29 |
| 4 | afatinib | Afatinib | ON | Inhibidor irreversible de ErbB | Gilotrif (Boehringer) | v20, 2025-11-19 |
| 5 | neratinib | Neratinib | ON | Inhibidor irreversible de EGFR/HER2/HER4 | Nerlynx (Puma) | v19, 2026-07-06 |
| 6 | tucatinib | Tucatinib | ON | Inhibidor de HER2 | Tukysa (Seagen) | v10, 2026-10-19 |
| 7 | cabozantinib | Cabozantinib | ON | Multicinasa (MET, VEGFR, AXL) | Cabometyx (Exelixis) | v18, 2025-11-17 |
| 8 | lenvatinib | Lenvatinib | ON | Multicinasa (VEGFR, FGFR) | Lenvima (Eisai) | v82, 2026-10-22 |
| 9 | regorafenib | Regorafenib | ON | Multicinasa | Stivarga (Bayer) | v36, 2026-02-18 |
| 10 | vandetanib | Vandetanib | ON | Multicinasa (RET, VEGFR, EGFR) | Caprelsa (Genzyme) | v15, 2026-11-04 |
| 11 | fedratinib | Fedratinib | ON | Inhibidor de JAK2 (mielofibrosis) | Inrebic (Celgene) | v12, 2026-08-03 |
| 12 | pacritinib | Pacritinib | ON | Inhibidor de JAK2/FLT3/IRAK1 | Vonjo (Sobi) | v11, 2026-08-03 |
| 13 | momelotinib | Momelotinib | ON | Inhibidor de JAK1/JAK2/ACVR1 | Ojjaara (GSK) | v9, 2026-07-31 |
| 14 | acalabrutinib | Acalabrutinib | ON | Inhibidor de BTK | Calquence (AstraZeneca) | v9, 2026-10-16 |
| 15 | zanubrutinib | Zanubrutinib | ON | Inhibidor de BTK | Brukinsa (BeOne) | v25, 2026-09-14 |
| 16 | rifapentina | Rifapentina | IN | Rifamicina antituberculosa | Priftin (Sanofi) | v14, 2026-02-10 |
| 17 | pretomanid | Pretomanid | IN | Nitroimidazooxazina antituberculosa | Pretomanid (Viatris) | v13, 2025-04-10 |
| 18 | sareciclina | Sareciclina | IN | Tetraciclina para el acné | Seysara (Almirall) | v12, 2024-06-19 |
| 19 | triclabendazol | Triclabendazol | IN | Fasciolicida | Egaten (Novartis) | v12, 2026-06-08 |
| 20 | benznidazol | Benznidazol | IN | Tripanocida (Chagas) | Benznidazole (Exeltis) | v14, 2026-08-31 |

### Descartes con motivo

| Candidato | Área | Motivo |
|---|---|---|
| Clemastina, dexclorfeniramina | RA | La etiqueta localizada es jarabe o solución, sin distribución |
| Flavoxato, fenazopiridina | UR | Sin mecanismo, distribución ni metabolismo citables |
| Tiopronina | UR | Sin distribución ni metabolismo |
| Cisteamina | MD | Sin mecanismo ni excreción |
| Tetraciclina | IN | Farmacocinética solo cualitativa («bound to plasma protein in varying degrees») y sin metabolismo; sustituida por benznidazol |

RA y UR quedan prácticamente agotadas: el resto de candidatos de esas áreas ya está en el catálogo.

### Incidencias resueltas

- Sales que el redactor no encuentra literal en el texto (neratinib, cabozantinib, fedratinib, momelotinib): línea `S` explícita con la frase de la etiqueta; regorafenib sin sal (`S|-`).
- Citas de `L` tomadas de posología o indicación (rifapentina, pretomanid, triclabendazol): cambiadas por la sección 3.
- Órganos retirados tras la auditoría: `sistema-inmunitario` en acalabrutinib y zanubrutinib, `encefalo` («encephalopathy») y `ojos` («uveitis») en fedratinib, `higado` en el metabolismo del triclabendazol (CYP1A2, sin equivalencia), y `piel` en la fotosensibilidad de la sareciclina. Se aceptan «skin» → `piel`, «bone marrow» → `medula-osea` y «cytochrome P450(CYP)3A» → `higado`.
- Triclabendazol: la etiqueta dice que no hay datos de excreción en humanos; la línea `E` lo cita así y los datos animales van como texto adicional, sin órganos.

### Recuentos

| Categoría | Antes (lote 6) | Ahora |
|---|---|---|
| Fichas | 496 | **516** |
| Presentaciones | 535 | **555** |
| Sólidos orales (presentaciones) | 509 | **529** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **1035** pasan (antes 995) |
| `npm run build` | compila; `View-*.js` 5 500,66 kB |
| `verificar-recorrido.mjs --etiqueta=lote7` (20 ids) | 20 fichas, 20 presentaciones, consola limpia |
| `verificar-lista.mjs` | **19/19**: «516 de 516 · 555 de 555» |
| Auditoría de órganos | 82 sin alerta; alertas revisadas a mano (6 corregidas, el resto aceptadas por nombre literal o por la regla IN) |

**Puerta del lote 7: superada.** Se sigue con el lote 8 sin pausa.

## Fase 2 · Lote 8 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado

Mismo encargo y reglas que el lote 7. RA y UR ya no tienen candidatos con etiqueta completa, así que el lote sale de ON e IN.

### Candidatos (área y motivo) y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | pirtobrutinib | Pirtobrutinib | ON | Inhibidor no covalente de BTK | Jaypirca (Lilly) | v16, 2026-10-19 |
| 2 | idelalisib | Idelalisib | ON | Inhibidor de PI3Kδ | Zydelig (Gilead) | v13, 2026-09-21 |
| 3 | duvelisib | Duvelisib | ON | Inhibidor de PI3K-δ/γ | Copiktra (Secura Bio) | v4, 2025-12-23 |
| 4 | ribociclib | Ribociclib | ON | Inhibidor de CDK4/6 | Kisqali (Novartis) | v28, 2026-07-13 |
| 5 | abemaciclib | Abemaciclib | ON | Inhibidor de CDK4/6 | Verzenio (Lilly) | v31, 2026-10-01 |
| 6 | niraparib | Niraparib | ON | Inhibidor de PARP | Zejula (GSK) | v10, 2026-08-06 |
| 7 | rucaparib | Rucaparib | ON | Inhibidor de PARP | Rubraca (pharmaand) | v20, 2026-10-19 |
| 8 | talazoparib | Talazoparib | ON | Inhibidor de PARP | Talzenna (Pfizer) | v5, 2026-10-30 |
| 9 | alectinib | Alectinib | ON | Inhibidor de ALK | Alecensa (Genentech) | v29, 2026-08-27 |
| 10 | brigatinib | Brigatinib | ON | Inhibidor de ALK/ROS1 | Alunbrig (Takeda) | v17, 2026-01-19 |
| 11 | lorlatinib | Lorlatinib | ON | Inhibidor de ALK/ROS1 de tercera generación | Lorbrena (Pfizer) | v13, 2026-06-29 |
| 12 | capmatinib | Capmatinib | ON | Inhibidor de MET | Tabrecta (Novartis) | v18, 2026-10-28 |
| 13 | tepotinib | Tepotinib | ON | Inhibidor de MET | Tepmetko (EMD Serono) | v8, 2025-04-22 |
| 14 | moxidectina | Moxidectina | IN | Lactona macrocíclica (oncocercosis) | Moxidectin (MDGH) | v22, 2026-08-03 |
| 15 | nifurtimox | Nifurtimox | IN | Nitrofurano tripanocida (Chagas) | Lampit (Bayer) | v9, 2026-03-05 |
| 16 | miltefosina | Miltefosina | IN | Alquilfosfocolina antileishmaniásica | Impavido (Eton) | v2, 2026-11-06 |
| 17 | flucitosina | Flucitosina | IN | Antifúngico análogo de pirimidina | Flucytosine (Avet) | v2, 2025-11-17 |
| 18 | oteseconazol | Oteseconazol | IN | Azol inhibidor de CYP51 (candidiasis vulvovaginal recurrente) | Vivjoa (Mycovia) | v5, 2026-01-09 |
| 19 | gepotidacina | Gepotidacina | IN | Triazaacenaftileno (topoisomerasas II) | Blujepa (GSK) | v3, 2026-02-23 |
| 20 | lenacapavir | Lenacapavir | IN | Inhibidor de la cápside del VIH-1 | Sunlenca (Gilead) | v14, 2026-09-07 |

### Descartes con motivo

Ninguno en este lote: los 20 candidatos pasaron la criba (todas las etapas presentes y sin contenido farmacogenético que haga falta citar). Rucaparib y lorlatinib mencionan en farmacocinética que los polimorfismos de CYP2D6/CYP1A2 o los fenotipos de CYP3A5/CYP2C19 **no** cambian su exposición; esa frase no se cita en la ficha (mismo criterio que con resmetirom en el lote 6).

### Incidencias resueltas

- Sales explícitas en `S` (niraparib, rucaparib, talazoparib, alectinib, capmatinib, ribociclib); en nifurtimox la forma SPL es «TABLET, FILM COATED», no «TABLET».
- `B` con población en la columna de órganos (tepotinib): retirada.
- Columna `sin` mal colocada en flucitosina y oteseconazol (`|||sin`): corregida a `||sin` (no metabolizados).
- Miltefosina: la etiqueta dice que la distribución no se ha estudiado en humanos; la `D` cita solo la unión a proteínas, y la `E` solo la excreción urinaria (< 0,2 %), lo único medido.
- Lenacapavir: se toma solo el comprimido; los datos de la vía subcutánea de la misma tabla no se usan.
- Auditoría de órganos: aceptadas «bone marrow» → `medula-osea` (niraparib, flucitosina, idelalisib) y «skin» → `piel` (nifurtimox).

### Recuentos

| Categoría | Antes (lote 7) | Ahora |
|---|---|---|
| Fichas | 516 | **536** |
| Presentaciones | 555 | **575** |
| Sólidos orales (presentaciones) | 529 | **549** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **1075** pasan (antes 1035) |
| `npm run build` | compila; `View-*.js` 5 516,06 kB |
| `verificar-recorrido.mjs --etiqueta=lote8` (20 ids) | 20 fichas, 20 presentaciones, consola limpia |
| `verificar-lista.mjs` | **19/19**: «536 de 536 · 575 de 575» |
| Auditoría de órganos | 74 sin alerta; 3 aceptadas por nombre literal (más `sitio-infeccion` en `A` de IN, por la regla nueva) |

**Puerta del lote 8: superada.** Se sigue con el lote 9 sin pausa.

## Fase 2 · Lote 9 · 20 principios activos nuevos de sólidos orales (2026-11-18): cerrado

Mismo encargo y reglas que los lotes 7 y 8. Último lote del encargo autónomo 7-9.

### Candidatos (área y motivo) y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | sotorasib | Sotorasib | ON | Inhibidor covalente de KRAS G12C | Lumakras (Amgen) | v20, 2026-11-09 |
| 2 | adagrasib | Adagrasib | ON | Inhibidor covalente de KRAS G12C | Krazati (Mirati) | v14, 2026-10-23 |
| 3 | selpercatinib | Selpercatinib | ON | Inhibidor de RET | Retevmo (Lilly) | v25, 2026-09-14 |
| 4 | larotrectinib | Larotrectinib | ON | Inhibidor de TRK | Vitrakvi (Bayer) | v21, 2026-05-25 |
| 5 | entrectinib | Entrectinib | ON | Inhibidor de TRK/ROS1/ALK | Rozlytrek (Genentech) | v19, 2026-10-16 |
| 6 | encorafenib | Encorafenib | ON | Inhibidor de BRAF | Braftovi (Array) | v23, 2026-03-02 |
| 7 | binimetinib | Binimetinib | ON | Inhibidor de MEK1/2 | Mektovi (Array) | v12, 2025-03-24 |
| 8 | apalutamida | Apalutamida | ON | Inhibidor del receptor de andrógenos | Erleada (Janssen) | v29, 2026-07-06 |
| 9 | darolutamida | Darolutamida | ON | Inhibidor del receptor de andrógenos | Nubeqa (Bayer) | v24, 2026-10-06 |
| 10 | gilteritinib | Gilteritinib | ON | Inhibidor de FLT3 | Xospata (Astellas) | v11, 2026-09-21 |
| 11 | ivosidenib | Ivosidenib | ON | Inhibidor de IDH1 mutada | Tibsovo (Servier) | v11, 2025-12-22 |
| 12 | elacestrant | Elacestrant | ON | Antagonista/degradador del REα | Orserdu (Stemline) | v9, 2026-07-13 |
| 13 | capivasertib | Capivasertib | ON | Inhibidor de AKT | Truqap (AstraZeneca) | v14, 2026-10-30 |
| 14 | fruquintinib | Fruquintinib | ON | Inhibidor de VEGFR-1/2/3 | Fruzaqla (Takeda) | v8, 2026-08-12 |
| 15 | avapritinib | Avapritinib | ON | Inhibidor de KIT/PDGFRA mutados (sustituye a brincidofovir) | Ayvakit (Blueprint) | v16, 2026-10-26 |
| 16 | fostemsavir | Fostemsavir | IN | Profármaco del inhibidor de la unión temsavir (VIH-1); comprimido de liberación prolongada | Rukobia (ViiV) | v9, 2026-06-10 |
| 17 | ribavirina | Ribavirina | IN | Análogo de nucleósido (hepatitis C) | Ribavirin (Aurobindo) | v21, 2024-02-07 |
| 18 | tecovirimat | Tecovirimat | IN | Inhibidor de VP37 de ortopoxvirus | Tpoxx (SIGA) | v17, 2026-01-06 |
| 19 | isavuconazonio | Isavuconazonio | IN | Profármaco del isavuconazol | Cresemba (Astellas) | v21, 2025-05-05 |
| 20 | migalastat | Migalastat | MD | Chaperona de la alfa-galactosidasa A (Fabry) | Galafold (Amicus) | v18, 2025-09-15 |

### Descartes con motivo

| Candidato | Área | Motivo |
|---|---|---|
| Belzutifan | ON | Contenido farmacogenético (metabolizadores lentos de UGT2B17 y CYP2C19) |
| Brincidofovir | IN | La etiqueta localizada solo tiene la suspensión oral; sustituido por avapritinib |

Reservas que pasaron la criba y no se usaron (retiradas de `lista.mjs`): venetoclax (etiqueta en kit de inicio con varias dosis), rifabutina (solo etiqueta de un reenvasador, v1 de 2016), adefovir (etiqueta v1 de 2010) e ibrexafungerp (sin etiqueta localizada).

### Migalastat

Comprobado sobre la etiqueta (Galafold v18): no tiene sección 4 (contraindicaciones) ni 5 (advertencias y precauciones). La ficha no lleva líneas `W`, igual que isradipino y risdiplam; no había nada que corregir en el catálogo porque migalastat no entró hasta este lote.

### Incidencias resueltas

- Citas de indicación o de forma escritas de memoria que no coincidían (gilteritinib, capivasertib): sustituidas por el texto literal.
- Sales: tecovirimat monohidrato, isavuconazonio sulfato, fostemsavir trometamol y migalastat clorhidrato con `S` explícita.
- Tecovirimat: la cita de excreción no contenía «urine»; se amplió hasta incluirla.
- Ribavirina: retirado `sangre` de la advertencia de anemia hemolítica (la cita no nombra la sangre). Se acepta «CYP3As» → `higado` (sotorasib).
- `verificar-lista.mjs` dio 18/19 en la primera ejecución, lanzada en la misma orden que la compilación y la verificación del recorrido; cinco ejecuciones posteriores dieron 19/19. No quedó registrado qué comprobación falló.

### Recuentos

| Categoría | Antes (lote 8) | Ahora |
|---|---|---|
| Fichas | 536 | **556** |
| Presentaciones | 575 | **595** |
| Sólidos orales (presentaciones) | 549 | **569** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **1115** pasan (antes 1075) |
| `npm run build` | compila; `View-*.js` 5 531,40 kB |
| `verificar-recorrido.mjs --etiqueta=lote9` (20 ids) | 20 fichas, 20 presentaciones, consola limpia |
| `verificar-lista.mjs` | **19/19** (tras un 18/19 aislado): «556 de 556 · 595 de 595» |
| Auditoría de órganos | 77 sin alerta; 1 aceptada por equivalencia, 2 corregidas |

**Puerta del lote 9: superada.** Fin del encargo de los lotes 7, 8 y 9. Nada en commit; siguiente paso: revisión del titular.

## Fase 2 · Lote 10 · 20 principios activos nuevos de sólidos orales (2026-11-19): cerrado

Encargo autónomo de los lotes 10, 11 y 12 (mismas reglas que 7-9). Prioridad de áreas del encargo: ON, dermatología, hepatología, adicciones, CV, endocrino-metabólico y soporte oncológico/trasplante. Este lote es todo de oncología de precisión (ON).

**Nota sobre los códigos de área.** El encargo usa DF = dermatología, HE = hepatología, AD = adicción y SC = soporte oncológico, pero en `redactar.mjs` esos códigos significan otra cosa (DF = «Dolor y fiebre», HE = «Hormonas y endocrino», AD = «Aparato digestivo», SC = «Sangre y coagulación», PI = «Piel»). Se usó el código que corresponde de verdad a cada fármaco según el redactor y los análogos del catálogo. Aviso: resmetirom y elafibranor (lote 6) quedaron con el área «Dolor y fiebre» por esa confusión; no se han tocado.

**Rutas reales usadas** (las del encargo no existen): etiquetas en `node_modules/.cache/medicuerpo/contraste`, registro en `node_modules/.cache/medicuerpo/lotes/registro.json`, guiones de verificación en `scripts/verificacion/`. Especificaciones en `scripts/medicamentos/especificaciones/lote10/c01…c04.espec.txt`.

### Candidatos y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | trametinib | Trametinib | ON | Inhibidor de MEK1/2 | Mekinist (Novartis) | v35, 2026-05-20 |
| 2 | vemurafenib | Vemurafenib | ON | Inhibidor de BRAF V600E | Zelboraf (Genentech) | v29, 2026-09-04 |
| 3 | cobimetinib | Cobimetinib | ON | Inhibidor de MEK1/2 | Cotellic (Genentech) | v24, 2026-09-02 |
| 4 | crizotinib | Crizotinib | ON | Inhibidor de ALK/ROS1/MET | Xalkori (Pfizer) | v47, 2026-11-02 |
| 5 | ceritinib | Ceritinib | ON | Inhibidor de ALK | Zykadia (Novartis) | v22, 2026-10-30 |
| 6 | dacomitinib | Dacomitinib | ON | Inhibidor irreversible del EGFR | Vizimpro (Pfizer) | v9, 2026-06-25 |
| 7 | pemigatinib | Pemigatinib | ON | Inhibidor de FGFR1-3 | Pemazyre (Incyte) | v17, 2026-06-15 |
| 8 | futibatinib | Futibatinib | ON | Inhibidor covalente de FGFR1-4 | Lytgobi (Taiho) | v9, 2026-11-09 |
| 9 | alpelisib | Alpelisib | ON | Inhibidor de PI3Kα | Piqray (Novartis) | v14, 2026-11-05 |
| 10 | tivozanib | Tivozanib | ON | Inhibidor de VEGFR-1/2/3 | Fotivda (AVEO) | v16, 2026-11-16 |
| 11 | glasdegib | Glasdegib | ON | Inhibidor de Smoothened (Hedgehog) | Daurismo (Pfizer) | v11, 2025-12-12 |
| 12 | vismodegib | Vismodegib | ON | Inhibidor de Smoothened (Hedgehog) | Erivedge (Genentech) | v15, 2024-12-10 |
| 13 | sonidegib | Sonidegib | ON | Inhibidor de Smoothened (Hedgehog) | Odomzo (Sun) | v14, 2025-01-03 |
| 14 | enasidenib | Enasidenib | ON | Inhibidor de IDH2 mutada | Idhifa (Celgene) | v12, 2025-01-30 |
| 15 | olutasidenib | Olutasidenib | ON | Inhibidor de IDH1 mutada | Rezlidhia (Rigel) | v5, 2025-11-17 |
| 16 | midostaurina | Midostaurina | ON | Inhibidor multicinasa (FLT3, KIT) | Rydapt (Novartis) | v15, 2026-06-10 |
| 17 | quizartinib | Quizartinib | ON | Inhibidor de FLT3 | Vanflyta (Daiichi Sankyo) | v11, 2026-04-22 |
| 18 | ixazomib | Ixazomib | ON | Inhibidor del proteasoma | Ninlaro (Takeda) | v18, 2026-08-17 |
| 19 | vorinostat | Vorinostat | ON | Inhibidor de HDAC | Zolinza (MSD) | v27, 2025-11-17 |
| 20 | tazemetostat | Tazemetostat | ON | Inhibidor de EZH2 | Tazverik (Epizyme) | v9, 2026-05-04 |

### Descartes con motivo (criba de ON de este encargo)

| Candidato | Área | Motivo |
|---|---|---|
| Ripretinib (Qinlock) | ON | Farmacocinética solo en tabla, sin frases citables |
| Selinexor (Xpovio) | ON | Sin datos de excreción (solo semivida y aclaramiento) |
| Pexidartinib (Turalio) | ON | Farmacocinética solo en tabla |
| Revumenib (Revuforj) | ON | Farmacocinética solo en tabla |
| Dabrafenib (Tafinlar) | ON | Advertencia por déficit de G6PD (contenido farmacogenético); se descarta por prudencia |
| Mirdametinib (Gomekli), ziftomenib (Komzifti), nirogacestat (Ogsiveo) | ON | Farmacocinética solo en tabla |

### Incidencias resueltas

- Tivozanib: la frase estándar dice «clinical studies», no «clinical trials»; se citó tal cual.
- Vemurafenib: su sección 6 no trae la frase estándar; la segunda línea `R` cita la enfermedad de Erdheim-Chester.
- Trametinib: el SPL da la dosis como «.5 mg»; se escribió `K` explícita («0.5 mg o 2 mg»). Sal escrita con `S` (trametinib dimetilsulfóxido); también sonidegib (difosfato).
- `npm test` falló una vez por dos unidades de cifra no admitidas («% de la dosis recuperada», «% de la dosis absorbida»); se cambiaron a «% de la dosis» con el matiz en el nombre. Después, 523/523.
- Auditoría de órganos: retirados `pancreas` (ceritinib, la cita habla de lipasa y amilasa) y `piel` (fotosensibilidad del cobimetinib); en la miocardiopatía del cobimetinib se cambió la cita a la que nombra el ventrículo izquierdo. Tres líneas `+` que afirmaban más que su cita (aclaramiento en trametinib y pemigatinib, semivida en sonidegib) se recortaron.
- Metabolismo sin órgano cuando la vía no es CYP3A ni hepática declarada (trametinib, vismodegib, ixazomib, vorinostat).

### Recuentos

| Categoría | Antes (lote 9) | Ahora |
|---|---|---|
| Fichas | 556 | **576** |
| Presentaciones | 595 | **615** |
| Sólidos orales (presentaciones) | 569 | **589** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan (tras corregir dos unidades) |
| `test:fuentes` | **1155** pasan (antes 1115) |
| `npm run build` | compila; `View-*.js` 5 546,67 kB |
| `verificar-recorrido.mjs --etiqueta=lote10` (20 ids) | 20 fichas, 20 presentaciones, sin problemas, consola limpia |
| `verificar-lista.mjs` | **19/19**: «576 de 576 · 615 de 615» |
| Auditoría de órganos (guion temporal) | 94 asignaciones, 0 alertas tras las correcciones |

**Puerta del lote 10: superada.**

## Fase 2 · Lote 11 · 20 principios activos nuevos de sólidos orales (2026-11-19): cerrado

Mismas reglas que el lote 10. Diez ON de precisión y diez de las demás áreas prioritarias (CV, endocrino-metabólico, digestivo/soporte). Especificaciones en `scripts/medicamentos/especificaciones/lote11/c01…c04.espec.txt`.

### Candidatos y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | vorasidenib | Vorasidenib | ON | Inhibidor de IDH1/IDH2 (glioma) | Voranigo (Servier) | v9, 2026-09-17 |
| 2 | repotrectinib | Repotrectinib | ON | Inhibidor de ROS1/TRK | Augtyro (E.R. Squibb) | v6, 2026-08-11 |
| 3 | selumetinib | Selumetinib | ON | Inhibidor de MEK1/2 (NF1) | Koselugo (AstraZeneca) | v17, 2026-06-01 |
| 4 | lazertinib | Lazertinib | ON | Inhibidor del EGFR mutado | Lazcluze (Janssen) | v6, 2026-05-07 |
| 5 | pralsetinib | Pralsetinib | ON | Inhibidor de RET | Gavreto (Rigel) | v8, 2026-01-28 |
| 6 | tovorafenib | Tovorafenib | ON | Inhibidor de RAF de tipo II | Ojemda (Day One) | v9, 2025-09-08 |
| 7 | inavolisib | Inavolisib | ON | Inhibidor de PI3Kα | Itovebi (Genentech) | v10, 2026-04-28 |
| 8 | ensartinib | Ensartinib | ON | Inhibidor de ALK | Ensacove (Xcovery) | v5, 2026-02-26 |
| 9 | toremifeno | Toremifeno | ON | Modulador de receptores de estrógenos | Fareston (Kyowa Kirin) | v11, 2024-11-15 |
| 10 | mitotano | Mitotano | ON | Citotóxico suprarrenal | Lysodren (Esteve) | v18, 2026-08-06 |
| 11 | acoramidis | Acoramidis | CV | Estabilizador de la transtiretina | Attruby (BridgeBio) | v8, 2026-07-03 |
| 12 | tafamidis | Tafamidis | CV | Estabilizador de la transtiretina | Vyndaqel/Vyndamax (Pfizer) | v15, 2026-05-13 |
| 13 | baxdrostat | Baxdrostat | CV | Inhibidor de la aldosterona sintasa | Baxfendy (AstraZeneca) | v4, 2026-09-18 |
| 14 | treprostinil | Treprostinil | CV | Prostanoide oral, liberación prolongada | Orenitram (United Therapeutics) | v24, 2024-12-06 |
| 15 | orforglipron | Orforglipron | MD | Agonista no peptídico del receptor de GLP-1 | Foundayo (Lilly) | v10, 2026-08-13 |
| 16 | paricalcitol | Paricalcitol | HE | Análogo de la vitamina D (hiperparatiroidismo secundario) | Zemplar (AbbVie) | v1502, 2026-07-27 |
| 17 | calcitriol | Calcitriol | HE | Vitamina D3 activa | Rocaltrol (Validus) | v6, 2023-12-15 |
| 18 | crinecerfont | Crinecerfont | HE | Antagonista de CRF1 (hiperplasia suprarrenal congénita) | Crenessity (Neurocrine) | v9, 2026-09-23 |
| 19 | budesonida | Budesonida | AD | Glucocorticoide de liberación colónica (colitis ulcerosa) | Uceris (Santarus) | v20, 2024-10-23 |
| 20 | dolasetron | Dolasetrón | AD | Antiemético 5-HT3 (soporte oncológico) | Anzemet (Validus) | v6, 2023-12-15 |

### Descartes con motivo (criba de las áreas no ON de este encargo)

| Candidato | Área | Motivo |
|---|---|---|
| Triamtereno (Dyrenium), ácido etacrínico (Edecrin), pentoxifilina (Apotex) | CV | Etiquetas antiguas sin datos de distribución (ni unión a proteínas ni volumen) |
| Colesevelam (Welchol) | CL | No se absorbe: sin distribución ni metabolismo |
| Icosapento de etilo (Vascepa) | CL | Ácido graso de tipo nutricional y sin vía de excreción citable (solo «no se excreta por el riñón») |
| Aficamten (Myqorzo) | CV | Sección 12.5: metabolismo por la CYP2C9 polimórfica con efecto esperado sobre la exposición (farmacogenética) |
| Metirapona (Metopirone), fenilbutirato sódico (Buphenyl), trientina (Cuvrior) | HE/MD | Sin datos de distribución |
| Maralixibat (Livmarli), odevixibat (Bylvay) | AD | Limitación de uso en un subgrupo de PFIC por genotipo (sección 12.5): farmacogenética excluyente |
| Tenofovir alafenamida (Vemlidy) | IN | Farmacocinética solo en tabla |
| Dronabinol (Marinol) | AD | Sección 12.5: exposición 2-3 veces mayor con variantes de CYP2C9 |
| Anfetamina (Evekeo), metanfetamina (Hikma) | SM | Sin absorción ni distribución citables |
| Disulfiram, probenecid | SM/HU | Sin farmacocinética útil |
| Ácido tranexámico (Zydus, SPL v1) | SC | El SPL descargado no trae secciones |
| Rosiglitazona, doxercalciferol, ácido obeticólico, nabilona, metoxaleno | — | Sin etiqueta de un solo activo en openFDA ni en DailyMed (búsqueda automática y manual) |
| Prazosina (Teva), levorfanol (Sun) | CV/DF | Pasan la criba pero el metabolismo solo se describe en animales; quedan de reserva, retirados de `lista.mjs` |

### Incidencias resueltas

- Acoramidis: la descripción no dice «acoramidis hydrochloride» sino «acoramidis HCl»; `S` y `K` explícitas («356 mg … equivalent to 400 mg acoramidis HCl»).
- Paricalcitol y calcitriol: el SPL da «ug»; `K` explícita en microgramos (mcg). Paricalcitol usa «clinical studies» en la frase estándar.
- Calcitriol y dolasetrón tienen etiquetas antiguas (sin secciones 3, 5 ni 12.x): mecanismo desde Farmacodinámica/Farmacología clínica, advertencias en `34071-1` y efectos adversos citados del texto y de la tabla.
- `budesonida` en `lista.mjs` ya existía con la marca ENTOCORT EC (sin ficha); se fijó el `setid` de Uceris y se corrigió la marca.
- Líneas `+` recortadas para que no afirmen más que su cita (lazertinib, mitotano, paricalcitol).

### Recuentos

| Categoría | Antes (lote 10) | Ahora |
|---|---|---|
| Fichas | 576 | **596** |
| Presentaciones | 615 | **635** |
| Sólidos orales (presentaciones) | 589 | **609** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **1195** pasan (antes 1155) |
| `npm run build` | compila; `View-*.js` 5 562,09 kB |
| `verificar-recorrido.mjs --etiqueta=lote11` (20 ids) | 20 fichas, 20 presentaciones, sin problemas, consola limpia |
| `verificar-lista.mjs` | **19/19**: «596 de 596 · 635 de 635» |
| Auditoría de órganos (guion temporal) | 100 asignaciones, 0 alertas |

**Puerta del lote 11: superada.**

## Fase 2 · Lote 12 · 20 principios activos nuevos de sólidos orales (2026-11-19): cerrado

Mismas reglas. Nueve ON y once de soporte oncológico/trasplante, opioides y adicción, piel, sangre, hormonas, hueso y CV. Especificaciones en `scripts/medicamentos/especificaciones/lote12/c01…c04.espec.txt`. Último lote del encargo autónomo 10-12.

### Candidatos y resultado

| N.º | id | Principio activo | Área | Motivo | Producto (titular) | Etiqueta |
|---|---|---|---|---|---|---|
| 1 | ibrutinib | Ibrutinib | ON | Inhibidor covalente de BTK | Imbruvica (Pharmacyclics) | v65, 2026-01-08 |
| 2 | bexaroteno | Bexaroteno | ON | Retinoide RXR (linfoma cutáneo de células T) | Targretin (Bausch) | v16, 2026-07-20 |
| 3 | talidomida | Talidomida | ON | Inmunomodulador (cereblón) | Thalomid (Celgene) | v26, 2026-10-26 |
| 4 | zongertinib | Zongertinib | ON | Inhibidor de HER2 | Hernexeos (Boehringer) | v7, 2026-08-17 |
| 5 | taletrectinib | Taletrectinib | ON | Inhibidor de ROS1 | Ibtrozi (Nuvation Bio) | v5, 2026-09-24 |
| 6 | sunvozertinib | Sunvozertinib | ON | Inhibidor del EGFR con inserción del exón 20 | Zegfrovy (Dizal) | v1, 2026-10-23 |
| 7 | imlunestrant | Imlunestrant | ON | Antagonista/degradador del REα | Inluriyo (Lilly) | v8, 2026-10-01 |
| 8 | vimseltinib | Vimseltinib | ON | Inhibidor de CSF1R (tumor tenosinovial) | Romvimza (Deciphera) | v3, 2026-07-01 |
| 9 | dordaviprona | Dordaviprona | ON | Activador de ClpP (glioma H3 K27M) | Modeyso (Jazz) | v2, 2026-01-12 |
| 10 | mesna | Mesna | ON | Citoprotector urológico (soporte oncológico) | Mesnex (Baxter) | v17, 2026-07-23 |
| 11 | hidrocodona | Hidrocodona | DF | Opioide de liberación prolongada | Hysingla ER (Knoa) | v17, 2026-06-18 |
| 12 | oximorfona | Oximorfona | DF | Opioide | Oxymorphone HCl (Aurolife) | v16, 2026-06-30 |
| 13 | metadona | Metadona | DF | Opioide (dolor y tratamiento de la adicción) | Methadone HCl (Hikma) | v9, 2026-01-30 |
| 14 | buprenorfina | Buprenorfina | SM | Agonista parcial mu, comprimido sublingual (dependencia de opioides) | Buprenorphine HCl (PAI) | v7, 2026-08-13 |
| 15 | nadolol | Nadolol | CV | Betabloqueante no selectivo | Nadolol (Amneal) | v11, 2026-06-30 |
| 16 | acitretina | Acitretina | PI | Retinoide sistémico (psoriasis grave) | Acitretin (Teva) | v15, 2025-09-29 |
| 17 | sirolimus | Sirolimus | II | Inmunosupresor mTOR (trasplante renal) | Sirolimus (Glenmark) | v4, 2026-01-29 |
| 18 | rilzabrutinib | Rilzabrutinib | SC | Inhibidor de BTK (trombocitopenia inmunitaria) | Wayrilz (Genzyme) | v6, 2025-09-01 |
| 19 | testosterona-undecanoato | Undecanoato de testosterona | HE | Andrógeno oral | Jatenzo (Tolmar) | v16, 2026-10-15 |
| 20 | ibandronato | Ibandronato | HU | Bisfosfonato (osteoporosis) | Ibandronate sodium (Apotex) | v20, 2026-01-16 |

Descartes: los de la criba están en las secciones de los lotes 10 (ON) y 11 (resto). Reservas no usadas: prazosina y levorfanol (metabolismo descrito solo en animales).

### Incidencias resueltas

- Zongertinib: el SPL no declara excipientes; se escribieron con `X` desde la sección 11.
- Taletrectinib (adipato), buprenorfina (la descripción dice «HCL»), ibandronato e hidrocodona: `S`/`K` explícitas. Undecanoato de testosterona: `S|-` (el éster es el principio activo).
- Buprenorfina sublingual: `ruta=SUBLINGUAL`, órganos `boca` en liberación y absorción y textos propios de llegada y salida (sin paso por la vena porta), como la asenapina del lote 3.
- Metadona e ibrutinib no traen la frase estándar en la sección 6: la segunda línea `R` cita otra frase de la sección.
- Mesna: distribución y excreción solo descritas tras la vía intravenosa; el texto lo dice y las cifras llevan `otra-via`.
- Marcas en `lista.mjs`: acitretina, sirolimus, ibandronato, nadolol y metadona tenían marca de referencia sin ficha; al fijar el `setid` de una etiqueta genérica se cambió a `generico`.
- `lista.mjs`: retiradas las 32 entradas provisionales que no entraron y restauradas tal cual las entradas previas de prazosina y ácido tranexámico.
- Auditoría de órganos: retirados `tejidos` (mesna), `orina` (eliminación renal del ibandronato, la cita dice «kidney») y `huesos` (osteonecrosis maxilar). Afirmaciones recortadas por no estar en su cita (metadona, talidomida, acitretina, ibandronato).

### Recuentos

| Categoría | Antes (lote 11) | Ahora |
|---|---|---|
| Fichas | 596 | **616** |
| Presentaciones | 635 | **655** |
| Sólidos orales (presentaciones) | 609 | **629** |

### Verificación

| Puerta | Resultado |
|---|---|
| `redactar.mjs` | 20/20 `ok` |
| `npm run indice` | regenerado; su prueba pasa |
| `npm run typecheck` | sin errores |
| `npm test` | **523** pasan |
| `test:fuentes` | **1235** pasan (antes 1195) |
| `npm run build` | compila; `View-*.js` 5 577,54 kB |
| `verificar-recorrido.mjs --etiqueta=lote12` (20 ids) | 20 fichas, 20 presentaciones, sin problemas, consola limpia |
| `verificar-lista.mjs` | **19/19** en cinco ejecuciones; la primera, lanzada justo tras el recorrido, dio 18/19 y no se reprodujo (igual que en el lote 9; no se pudo capturar qué comprobación falló). «616 de 616 · 655 de 655» |
| Auditoría de órganos (guion temporal) | 96 asignaciones, 0 alertas tras las correcciones |

**Puerta del lote 12: superada.** Fin del encargo de los lotes 10, 11 y 12. Nada en commit; siguiente paso: revisión del titular. Pendiente de decisión del titular: corregir el área de resmetirom y elafibranor (hoy «Dolor y fiebre»).
