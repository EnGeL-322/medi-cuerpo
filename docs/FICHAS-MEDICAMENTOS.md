# Fichas de medicamentos: cómo se hacen y cómo se comprueban

El catálogo tiene **300 principios activos** orales distintos, una ficha por archivo en `src/renderer/modules/medicuerpo/cuerpo/datos/catalogo/` (se descubren solas). Cada ficha reúne el activo (identidad PubChem), sus presentaciones (producto, titular, mercado, forma, liberación, sal, excipientes, usos), el recorrido de cinco etapas y sus efectos adversos y advertencias documentados por presentación.

## Regla de evidencia

Cada dato lleva `ref = { f, sec, cita }`: la fuente, la sección exacta del documento y una cita literal breve. Fuentes: DailyMed (etiquetas SPL vigentes, fijadas por `setid`), CIMA de la AEMPS (fichas técnicas por número de registro), PubChem (identidad química) y, para los pasos generales, MSD Manuals. Créditos y condiciones de uso en `licencias/CREDITOS-DATOS.txt`.

## Datos de absorción: series, modelos, datos puntuales y datos insuficientes

Cada presentación se clasifica en el módulo «Modelo general de absorción» según su evidencia (`cuerpo/nucleo/evidenciaAbsorcion.ts`):

- **Serie observada**: concentraciones por tiempo publicadas en un estudio con licencia abierta (`cuerpo/datos/curvas/*.ts`), con analito, estadístico, unidades, población, condiciones, método y límites. Las citas se comprueban contra el texto completo del artículo (`estudio-<PMCID>.xml` en `ETIQUETAS_DIR`).
- **Modelo publicado**: parámetros de un modelo de un compartimento de primer orden (ka, CL, V, F, tlag) con su fuente; la simulación se etiqueta como tal.
- **Datos puntuales**: Tmax, Cmax, semivida, biodisponibilidad o AUC con unidad, analito, población y cita; no se dibuja curva.
- **Datos insuficientes**: la etiqueta no da cifras; se muestra el resumen y un ejemplo didáctico con título y escala propios.

Las cifras de otra presentación o vía se marcan con `origen: 'otra-presentacion' | 'otra-via'`.

## Añadir o revisar una ficha

1. `node scripts/medicamentos/obtener-etiquetas.mjs <carpeta> <ids>` descarga los documentos (DailyMed por `setid`, CIMA si el id empieza por `cima:`, PubChem por CID). Solo se usa en desarrollo; la app no se conecta.
2. Redacta la ficha con citas literales de esos documentos.
3. `ETIQUETAS_DIR=<carpeta> npm run test:fuentes` comprueba que cada cita está en su documento y sección, la versión y la fecha de cada etiqueta y la identidad química.
4. `npm test` valida sin red la coherencia del catálogo (ids, relaciones, unidades, destinos del atlas, URL oficiales).

### Lotes y registro

Para añadir muchas fichas: `obtener-etiquetas.mjs` (descarga), `extracto.mjs` (resumen de cada documento), una especificación por lote (`@id|Nombre|área|clase|sinónimos|opciones` y líneas U, A, L, B, D, M, E, +, T, C, R, W, K, S, X, N, Q) y `redactar.mjs`, que genera la ficha y falla si una cita no está en la sección indicada. El avance y las exclusiones constan en `docs/ESTADO-ABSORCION-300.md`.

Alcance educativo: ni dosis ni pautas, ni diagnóstico ni tratamiento.
