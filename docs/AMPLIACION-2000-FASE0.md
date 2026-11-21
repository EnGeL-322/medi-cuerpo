# Ampliación a unas 2000 presentaciones · Fase 0 (investigación)

Informe del 2026-11-15. No se ha escrito ninguna ficha ni se ha tocado el código de la app. Todo lo que sigue sale de páginas y API abiertas en esta sesión; cuando algo no se pudo abrir, se dice. Los guiones con los que se midió se reescribieron en la Fase 1 con las convenciones del proyecto y están en `scripts/medicamentos/descubrir/` (`ndc-descargar`, `cima-descargar`, `candidatos`, `muestrear-farmacocinetica`); reproducen las cifras con pequeñas diferencias que se explican en `docs/AMPLIACION-2000-ESTADO.md`.

## 1 · Resumen en lenguaje sencillo

1. **Hay datos abiertos suficientes para descubrir qué presentaciones existen**, de forma automática y repetible (directorio NDC de openFDA para EE. UU. y la API de CIMA para España).
2. **Las cifras pedidas no se pueden cumplir todas.** Contando solo lo que existe y tiene datos de farmacocinética en la etiqueta:
   - **Sólidos orales (meta 1000): alcanzable** en número de candidatos. Falta el trabajo de redactar y verificar unas 700 más.
   - **Líquidos orales (meta 500): no alcanzable.** Existen unos 570 candidatos brutos entre EE. UU. y España y, tras exigir farmacocinética, quedarían del orden de **270** (rango razonable 200–350).
   - **Inyectables (meta 500): alcanzable, pero con un modelo nuevo** (no hay absorción en la vía intravenosa) y con una decisión sobre los biológicos (anticuerpos, insulinas: no tienen estructura química que dibujar).
3. **Suma realista de las tres tandas: unas 1800, no 2000.** La diferencia (unas 200) solo se cubriría con la cuarta tanda (tópicos, parches, inhalados…), que tú dijiste que fuera opcional y posterior.
4. **Cuatro licencias o permisos necesitan tu decisión** (sección 7). Ninguna de las dos bases «compartir-igual» (ChEMBL, DrugCentral) ni la lista de la OMS (no comercial) se incorporará.
5. **El arranque actual no escala** (catálogo cargado entero). Hay un diseño de índice ligero + fichas bajo demanda (sección 5).
6. El atlas **sí tiene** piel y venas cefálicas/basílicas en la base BodyParts3D que ya usamos; no tiene tejido adiposo (sección 4.4).

## 2 · Punto de partida (medido)

| Dato | Valor | Cómo se midió |
|---|---|---|
| Fichas / presentaciones | 300 / 303 | recuento de `id:` y `mercado:` en `datos/catalogo/*.ts` |
| Mercado | 279 EE. UU., 24 España (UE) | `mercado:` |
| Formas | todas orales: comprimidos y cápsulas casi todas; 3 soluciones orales, 1 suspensión, 1 gránulos | `forma:` |
| Tamaño del catálogo en código | 2,99 MB (≈ 10 KB por ficha) | `wc -c` |
| Caché de documentos para `test:fuentes` | 36 MB, 622 archivos | `du` |
| Instalador | 126 MB (Electron incluido) | `dist/` del 2026-11-12 |
| Carga del catálogo | `import.meta.glob(..., { eager: true })` en `datos/catalogo.ts` | lectura del código |

No se midieron todavía tiempo de arranque ni memoria (se hará con Electron + CDP al inicio de la Fase 1, para fijar las cifras de referencia).

## 3 · Fuentes y licencias (leídas de su propia página)

Estado: **Usable** · **Usable con condición** · **Decisión tuya** · **Descartada** · **No verificada**.

| Fuente | Qué se abrió | Qué dice | Estado |
|---|---|---|---|
| **DailyMed** (NLM/FDA) | `app-support-web-services.cfm`, `app-support-about.cfm`, `www.nlm.nih.gov/web_policies.html` | La API v2 (GET, XML/JSON) no declara licencia ni límite de uso. DailyMed contiene «labeling submitted to the FDA by companies». La política de NLM dice que las obras del Gobierno de EE. UU. no tienen copyright y que el contenido de terceros puede estarlo; no menciona DailyMed. | **Usable con condición**: solo citas literales breves con documento, versión y sección (lo que ya hace la app). Ver decisión 1. |
| **openFDA** (NDC, etiquetas) | `open.fda.gov/terms/` | «public domain … CC0 1.0», con la salvedad «Some data on openFDA may not be public domain»; sin garantía; atribución no obligatoria. Sin límite numérico declarado. | **Usable** (descubrimiento y metadatos). |
| **Drugs@FDA**, **Orange Book** | Orange Book: página de ficheros de datos | Orange Book: tres ficheros (Products, Patent, Exclusivity), sin licencia ni frecuencia declaradas en esa página. Drugs@FDA: no se abrió. | **No necesarias** para el descubrimiento (el NDC lo cubre). Orange Book: licencia no declarada. |
| **CIMA / AEMPS** (España) | PDF `CIMA_REST_API.pdf` v1.23 y `aemps.gob.es/aviso-legal/` | El aviso legal autoriza «la reproducción total o parcial … siempre que se cite expresamente su origen» y obliga a mencionar la fecha de la última actualización. El PDF de la API no contiene condiciones de uso. El aviso no nombra CIMA expresamente. | **Usable** con origen y fecha en cada cita (ya se guarda). |
| **EMA / EPAR** | `ema.europa.eu/en/about-us/legal-notice` | Reutilización comercial y no comercial con mención de la EMA en cada copia; no vale para contenido de terceros ni para el logotipo. | **Usable**; no necesaria si CIMA cubre la ficha técnica. |
| **RxNorm / RxNav** | `RxNav/TermsofService.html`, `rxnorm/docs/termsofservice.html` | Sin licencia salvo RxClass (incluye SNOMED CT). Máximo 20 peticiones/s por IP. Los nombres y códigos RxNorm son de dominio público; la descarga completa pide licencia UMLS gratuita. Hay que incluir el texto «This product uses publicly available data courtesy of the U.S. National Library of Medicine (NLM)» y no usar nombre ni logotipo de NLM. | **Usable** (solo la API y sin RxClass). |
| **PubChem** | página de políticas del NCBI (`ncbi.nlm.nih.gov/home/about/policies/`); las páginas propias de PubChem devuelven reCAPTCHA y no se esquivó | «NCBI itself places no restrictions on the use or distribution», pero PubChem figura entre los recursos con material de terceros que «may be protected by copyright» y NCBI no puede dar permiso por ellos. | **Usable para hechos** (fórmula, masa, InChIKey, CID). Conviene matizar el texto de `licencias/CREDITOS-DATOS.txt`, que hoy dice solo «sin restricciones». |
| **LiverTox** | página con reCAPTCHA (como ya constaba en `docs/DATOS.md`) | No se pudo leer, no se esquivó. | **No verificada: no se usa.** |
| **MedlinePlus** | `medlineplus.gov/copyright.html` | Las monografías de medicamentos son de ASHP y están protegidas; «may not ingest and/or brand the copyrighted content». | **Descartada** para medicamentos. |
| **NIH ODS** (suplementos) | el servidor devolvió 403; solo se obtuvo la política general del NIH a través de una búsqueda | Sin licencia explícita encontrada. | **No verificada**; los suplementos se aplazan (ver 4.2). |
| **Manual MSD** | pie de página de la edición profesional: «All rights reserved» (las páginas de términos devolvieron 404) | Reservado. | **Sin ampliar**: se mantienen las 5 citas de una frase ya usadas. |
| **Europe PMC** | `europepmc.org/downloads` y `/downloads/openaccess` | El texto completo abierto lleva la licencia de cada artículo («Please refer to the license statement in each article»); las licencias no son idénticas. | **Usable solo con CC BY/CC0**, comprobando el campo de licencia de cada artículo. Los CC BY-NC se descartan (como ya se hizo con PMC7211298 y PMC12669362). |
| **ClinPGx / PharmGKB / CPIC** | la página de política es dinámica y no devolvió texto; una búsqueda indica (de segunda mano) CC BY-SA 4.0 para los datos de ClinPGx | Compartir-igual no verificado en origen. | **Decisión tuya** (decisión 3). |
| **ChEMBL** | `ebi.ac.uk/chembl/` | «Creative Commons Attribution-ShareAlike 3.0». | **Descartada** (compartir-igual). |
| **DrugCentral** | `drugcentral.org/privacy` | «available under Creative Commons license», enlazada a CC BY-SA 4.0. | **Descartada** (compartir-igual). |
| **Lista OMS de medicamentos esenciales (2023)** | `who.int/publications/i/item/WHO-MHP-HPS-EML-2023.02` | CC BY-NC-SA 3.0 IGO. | **Descartada** (no comercial y compartir-igual). |
| **BodyParts3D** (ya en la app) | listas de conceptos de `dbarchive.biosciencedbc.jp` | Ver 4.4 y `cuerpo/modelo/CREDITOS.md`. | Ya registrada. |

Registro en `licencias/`: todavía no se ha añadido nada, porque ningún dato nuevo entra en la app en esta fase. Cuando una fuente aporte datos (Fase 1 en adelante) se añadirá a `licencias/CREDITOS-DATOS.txt` y se ejecutará `npm run avisos`.

## 4 · Descubrimiento y recuentos reales

### 4.1 Método (repetible)

**EE. UU.** Descarga paginada del directorio NDC de openFDA (`/drug/ndc.json`, `finished:true`, orden por `product_ndc`, `search_after` del encabezado `Link`): **116 697 productos terminados** (último cambio 2026-11-13). Se descartan vacunas, alérgenos, derivados del plasma y terapia celular; solo se cuentan las categorías **NDA, ANDA, NDA authorized generic y BLA** (se excluyen homeopáticos y «unapproved»; las monografías OTC añaden 27 sólidos y 14 líquidos).
**Clave de presentación** = conjunto de principios activos (sin sales) + forma normalizada (se unifican recubierto/con película) + primera vía + liberación (inmediata/retardada/prolongada). Las concentraciones, marcas y reenvasadores no cuentan.
**España.** Descarga de los 16 145 medicamentos comercializados de CIMA (`/medicamentos?comerc=1`, 400 por página). Clave = principio activo virtual (`vtm`) + forma simplificada + vías + modificada/convencional.
**RxNorm** (API): 7 961 formas clínicas (SCDF) y 14 718 ingredientes; sirve de control cruzado (por ejemplo 1 116 «Oral Tablet» monofármaco), pero **no se usa como recuento** porque no distingue la vía en los inyectables y mezcla productos sin etiqueta vigente.

### 4.2 Candidatos brutos por categoría (antes de exigir farmacocinética)

| Categoría | EE. UU. | de ellos monofármaco | España (CIMA) | Total bruto |
|---|---|---|---|---|
| Sólidos orales | 1 478 | 1 263 | 1 161 | **≈ 2 640** |
| Líquidos orales | 255 | 233 | 317 | **≈ 570** |
| Inyectables | 1 207 | 1 151 (de ellos 295 biológicos BLA y 856 no biológicos) | 881 | **≈ 2 090** |
| Otras vías (cuarta tanda) | 795 | 673 | 590 | ≈ 1 385 |

Notas de cautela:
- Los sólidos de EE. UU. incluyen polvos y gránulos para reconstituir (unos 100); si se consideran líquidos, los líquidos suben a ~350 y los sólidos bajan.
- En CIMA el campo `vtm` es único, así que las combinaciones fijas no se separan bien; el recuento español de monofármacos es aproximado.
- Con las 1 263 + 233 + 1 151 combinaciones monofármaco de EE. UU., **517, 119 y 137 pertenecen a principios activos que ya tienen ficha** (292 de las 300 fichas intervienen). Esas son presentaciones nuevas que se **añadirían a fichas existentes**.
- Los activos de EE. UU. sin ficha: 625 (sólidos), 94 (líquidos), 671 (inyectables), con solapamiento entre categorías.
- Combinaciones fijas (varios activos) en EE. UU.: 215 sólidos, 22 líquidos, 56 inyectables.

### 4.3 Cuántas tienen farmacocinética (muestreo)

Muestra aleatoria (semilla fija) de **45 combinaciones monofármaco por categoría y mercado**. Se abrió la etiqueta (SPL completo de DailyMed o sección 5.2 de la ficha técnica en CIMA) y se buscaron palabras clave de cuatro temas: absorción, distribución, metabolismo, eliminación. **Es un indicador, no una verificación**: que las palabras aparezcan no garantiza que haya un dato citable en cada etapa. Con n = 45, el margen es de unos ±14 puntos.

| Categoría | EE. UU.: sección de farmacocinética con >400 caracteres | EE. UU.: cuatro temas | España: 5.2 con >400 caracteres | España: cuatro temas |
|---|---|---|---|---|
| Sólidos orales | 38/45 | **22/45 (49 %)** | 43/45 | **38/45 (84 %)** |
| Líquidos orales | 37/45 | **17/45 (38 %)** | 36/45 | **26/45 (58 %)** |
| Inyectables | 37/45 | **10/45 (22 %)** | 41/45 | **25/45 (56 %)** |

### 4.4 Proyección de metas (orientativa)

Producto de candidatos monofármaco × proporción con los cuatro temas, antes de duplicados y descartes adicionales:

| Categoría | Meta | Proyección | Veredicto |
|---|---|---|---|
| Sólidos orales | 1000 (ya hay ≈ 300) | EE. UU. ≈ 620 + España ≈ 975 ≈ 1 600 | **Alcanzable** en número. El límite es redactar y verificar ≈ 700. |
| Líquidos orales | 500 | EE. UU. ≈ 90 + España ≈ 185 ≈ **270** (200–350) | **No alcanzable**: se dirá con ese número. |
| Inyectables | 500 | EE. UU. no biológicos ≈ 190 + España ≈ 490 ≈ 680 | **Alcanzable**, con modelo nuevo y decisión sobre biológicos. |

Suma de las tres tandas: **≈ 1 800**.

## 5 · Diseño del modelo (c)

### 5.1 Cambios en `datos/modelo.ts` (propuesta)

`RengPresentacion` gana, de forma opcional (las 303 actuales siguen valiendo sin reescribirse; los valores por defecto se infieren de `forma`):

- `familia`: `'solido-oral' | 'liquido-oral' | 'inyectable' | 'otra'`.
- `vias: string[]` normalizadas (oral, sublingual, intravenosa, intramuscular, subcutánea, intradérmica, intratecal, epidural…) con la fuente de cada una (campo de ruta del SPL o de CIMA).
- `liberacion` ya existe; se añade `'inmediata'` como valor real cuando la fuente lo declare y se mantiene `'no declarada'`.
- `formaNormalizada`: clave de recuento (por ejemplo `comprimido`, `capsula`, `solucion-oral`, `solucion-inyectable`, `polvo-liofilizado`, `pluma`, `jeringa-precargada`).
- `excipientesDeRiesgo`: lista con nombre, motivo según la etiqueta y cita (alcohol bencílico, sorbitol, sulfitos, conservantes, azúcares de jarabes), mostrada solo si la etiqueta los advierte.
- `biologico?: true` para productos sin estructura química (ver decisión 4).

Combinaciones fijas: no se meten varios activos en `RengActivo`. Se propone una **ficha de combinación** con `componentes: string[]` (ids de fichas de activo existentes o nuevas) y sus propias presentaciones y recorrido; la identidad química se muestra por componente. Alternativa más pequeña: aplazarlas. **Suplementos** (vitaminas, minerales): aplazados, porque sus etiquetas («Supplement Facts») no traen farmacocinética y la licencia de NIH ODS no se pudo verificar.

### 5.2 Líquidos

La etapa **Liberación** de un líquido oral no tiene disgregación: el medicamento ya está disuelto o en suspensión. La etapa pasa a ser «Del frasco a la boca y al estómago (ya en forma líquida)» con `formas: ['disuelto']`, órganos boca → esófago → estómago, y datos de la etiqueta sobre biodisponibilidad relativa frente a otra forma o efecto de la comida cuando existan. Las suspensiones sí tienen una fase de disolución: se dice solo si la etiqueta la menciona. Hoy `RENG_FORMAS_POR_DEFECTO.liberacion` ya admite `'disuelto'` sin tableta, así que el dibujo no necesita malla nueva.

### 5.3 Inyectables

- **Intravenosa**: no hay absorción. La etapa 2 se marca `noAplica` con motivo («administración directa a la sangre») y la cita del dato de vía o de «biodisponibilidad 100 %» **solo si la etiqueta lo dice**. La regla de validación «cada etapa tiene un dato del medicamento» (`rengProblemasFicha`) se relaja para ese caso y se prueba.
- **Intramuscular y subcutánea**: etapa 1 «Depósito local» (músculo; tejido adiposo/piel) y etapa 2 con Tmax y biodisponibilidad de la etiqueta. Los depósitos de acción prolongada (depot) añaden la liberación lenta desde el sitio de inyección.
- **Intratecal y epidural**: etapa 1 en columna/líquido cefalorraquídeo; el atlas no tiene líquido cefalorraquídeo ni meninges (nota «el atlas no tiene…»).
- Sin tableta ni estómago: `formas` propias (`'solucion'`, `'deposito'`).
- Compatibilidad y diluyente: solo como característica del producto citada de la etiqueta («diluyentes que cita la etiqueta»), sin pasos de preparación; el texto se redacta con los verbos de la etiqueta, sin instrucciones.

### 5.4 Profármacos, presentaciones sin datos y alcance

Los profármacos ya están resueltos (valganciclovir, prasugrel, tenofovir disoproxilo): se mantiene su mecanismo. Una presentación sin farmacocinética **no entra** (se registra el descarte con motivo). `alcance: 'otra presentacion' | 'otra vía' | 'general'` se amplía para marcar datos de otra vía (por ejemplo, un dato oral citado en una ficha intravenosa).

### 5.5 Atlas (`datos/organos.ts`)

`organos.ts` ya trata «piel» y «tejido adiposo» como destinos **sin malla** (nota «El atlas no tiene piel»). Lo verificado en las listas de BodyParts3D 4.0 (`partof_parts_list_e.txt`, `partof_element_parts.txt`, consultadas hoy):

| Estructura | En BodyParts3D 4.0 | Consecuencia |
|---|---|---|
| Piel (FMA7163) | **sí**, una pieza (FJ2810) | Se podría añadir como capa translúcida; hay que ver peso y legibilidad. |
| Venas cefálica y basílica (derecha e izquierda) | **sí** | Sirven para dibujar la entrada intravenosa periférica. |
| Tejido adiposo / grasa subcutánea | **no** | Se mantiene la nota honesta «el atlas no tiene tejido adiposo». |
| Nervios periféricos | **no** (solo cuatro conceptos en el árbol IS-A) | Se mantiene la nota. |
| Glándula tiroides | **no** (solo arterias tiroideas) | Se mantiene la nota. |
| Globos oculares | listados (FMA12514/12515) pero **no incluidos** hoy en la app | Posible ampliación; relevante solo para la cuarta tanda (oftálmicos). |

Todas estas mallas derivarían de la misma base ya usada y heredarían su licencia (CC BY-SA 2.1 Japón para las mallas). Añadirlas es una decisión de tamaño (decisión 5); mientras tanto cada vía se representa con su nota.

## 6 · Rendimiento (d)

Hoy el catálogo se importa entero al arrancar. Con ≈ 2000 presentaciones el código de fichas pasaría de 3 MB a una cifra del orden de 15–25 MB (estimación a partir de los 10 KB medios por ficha; **no medida**), lo cual no es aceptable cargado de golpe.

**Diseño propuesto**

1. **Índice ligero** generado por un guion (`scripts/medicamentos/indice.mjs`) a partir de las fichas: por presentación, `id`, nombre del activo, área, clase, `familia`, `formaNormalizada`, `vias`, `liberacion`, `mercado`, `tieneCurva`, `activoId`. Unos 150–200 bytes por entrada: ≈ 400 KB sin comprimir para 2 000 entradas. Es lo único que se carga al abrir la vista.
2. **Fichas bajo demanda**: `import.meta.glob('./catalogo/*.ts')` (no eager) con una función `rengCargarFicha(id)` asíncrona y caché. Para no generar unos 1 200 archivos pequeños, se agrupa por área terapéutica o por letra si la medición muestra un coste de archivos; decidir con datos en la Fase 1.
3. **Pruebas que siguen escalando**: `npm test` carga todo el catálogo en Node (no en el renderer), así que la validación completa sigue siendo posible; se añaden pruebas de que el índice coincide con las fichas. `test:fuentes` se estima en ≈ 175 MB de documentos para ≈ 3 000 etiquetas (36 MB por 622 hoy) en la caché local (`node_modules/.cache`), no en el repositorio.
4. **Presupuestos medibles** (a fijar tras medir el estado actual con Electron + CDP): arranque hasta la vista de medicamentos lista no más de +15 % respecto a 300 fichas; memoria en reposo no más de +25 MB; abrir una ficha por primera vez < 150 ms en la máquina de pruebas; instalador no más de +30 MB. Si algún presupuesto no se puede cumplir, se informa.

## 7 · Interfaz (e)

- **Buscador** con normalización actual (nombre, sinónimo, marca, titular, clase, sin tildes) sobre el índice.
- **Filtros**: familia, forma, vía, área, clase, mercado y «con curva publicada», acumulables, con contador honesto («N de M presentaciones; K con datos incompletos»). Sin resultados: mensaje que dice qué filtros lo causan.
- **Lista virtualizada** (ventana de filas visibles; sin dependencia nueva si basta una implementación propia de ≈ 60 líneas; si se usa una librería, se registra su licencia).
- **Ficha**: el selector Básico/Normal/Avanzado de absorción se mantiene sin cambios; la ficha añade la familia y las vías en la cabecera, y un aviso cuando la etapa «no aplica» (intravenosa).
- Accesibilidad: la lista conserva el orden de tabulación y anuncia el número de resultados.

## 8 · Decisiones que te tocan

1. **Citas de etiquetas (DailyMed).** Las etiquetas las redactan sus titulares y DailyMed no declara una licencia de reutilización; la app solo reproduce citas breves con fuente. Con ≈ 1 700 presentaciones nuevas serían decenas de miles de citas. ¿Se mantiene el criterio de «cita breve» (≤ 260 caracteres, ya aplicado y probado) o prefieres pedir permiso a la NLM/FDA antes de la Fase 2?
2. **Metas.** ¿Aceptas la meta realista (≈ 1000 sólidos, ≈ 270 líquidos, ≈ 500 inyectables) y que la diferencia hasta 2000 se estudie después con la cuarta tanda?
3. **Farmacogenética (ClinPGx/CPIC).** La licencia compartir-igual no se pudo verificar en origen. ¿Se omite la farmacogenética (recomendado) o se pregunta al titular antes de usarla?
4. **Biológicos** (≈ 295 de los inyectables de EE. UU.: anticuerpos, insulinas, enzimas). No tienen SMILES ni estructura 2D/3D que mostrar. ¿Se excluyen de esta ampliación (recomendado) o se admite una ficha sin estructura?
5. **Mallas nuevas**: piel y venas cefálica/basílica (existen en BodyParts3D) y, más adelante, ojos. ¿Las añado en la Fase 1 con su coste de tamaño medido?
6. **Combinaciones fijas y suplementos.** Recomiendo fichas de combinación con componentes enlazados (215 + 22 + 56 candidatos en EE. UU.) y aplazar suplementos. ¿De acuerdo?
7. **Texto de PubChem** en `licencias/CREDITOS-DATOS.txt`: matizar que NCBI no impone restricciones pero hay material de terceros en PubChem. Es una edición pequeña; la hago en la Fase 1 si lo apruebas.

## 9 · Qué no se verificó

- No se midieron arranque ni memoria actuales.
- No se abrieron Drugs@FDA, la política de datos de ClinPGx/CPIC (solo una búsqueda), el texto de NIH ODS ni LiverTox/PubChem (reCAPTCHA), ni una página de términos del Manual MSD (404).
- Los recuentos dependen de normalizaciones simples (sales, formas) y de la clasificación por vía/forma de openFDA y CIMA. La estimación de farmacocinética es un muestreo por palabras clave (n = 45 por celda).
- Las cifras de tamaño de la sección 6 son estimaciones, no mediciones.
