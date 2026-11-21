# Datos y fuentes

Regla del proyecto: **cada dato dice de dónde sale** y la app no inventa lo que falta. Este documento resume qué se usa y con qué nivel de verificación.

## Niveles de verificación

| Etiqueta | Qué significa |
|---|---|
| **Fuente consultada** | Se abrió la fuente el día indicado y dice eso (casos reales; PubChem; NASA; USGS). |
| **Wikidata · con referencia** | Valor de Wikidata (CC0) cuya declaración cita una fuente. |
| **Wikidata · sin referencia** | Valor de Wikidata sin fuente verificable. Se muestra, pero se marca. |
| **Calculada · sin contrastar** | La app lo calcula por una regla (p. ej. la configuración electrónica por Aufbau); no se comparó con una tabla de referencia. |
| **Conocimiento general** | Química de libro de texto sin una fuente concreta consultada. |
| **Sin verificar** | Atribuido a una obra que nadie abrió (p. ej. la masa atómica y varios datos antiguos del proyecto). |

## Cuerpo y medicamentos

Carpeta `src/renderer/modules/medicuerpo/cuerpo/`: datos en `datos/` (`anatomia.ts`, `catalogo/`, `catalogo.ts`, `generales.ts`, `organos.ts`, `reaccionesAdversas.ts`), lógica pura en `nucleo/` y vista en `vista/`. Pruebas: `tests/cuerpo/cuerpo-medicamentos.test.ts` y `tests/cuerpo/cuerpo-modelo-absorcion.test.ts`. Fuentes consultadas el **2026-11-08**.

| Dato | Fuente | Nivel |
|---|---|---|
| Mallas 3D del cuerpo (esqueleto, músculos, órganos) | BodyParts3D 4.0, DBCLS (DOI 10.18908/lsdba.nbdc00837-000), archivo oficial; conversión con `scripts/anatomia/convertir-bp3d.mjs` (solo en desarrollo). Detalle, sumas SHA-256 de los árboles, variante anatómica y cambios en `cuerpo/modelo/CREDITOS.md` | consultada |
| Ubicación y función de cada estructura (77) | anatomía básica escrita para la app | **conocimiento general** (la ficha lo dice) |
| Fórmula, masa molar, SMILES, InChIKey, sinónimos; enantiómeros (S)/(R) del ibuprofeno; metabolitos con estructura | PubChem CID 1983, 3672, 39912, 114864, 83944, 83939, 10444113 | consultada |
| Composición (activo y excipientes declarados), forma, vía, usos y advertencias de cada presentación | DailyMed «Drug Facts»: TYLENOL® Regular Strength (v13, 2026-05-27) y ADVIL tablets (v39, 2026-11-03). Ninguna declara cantidades de excipientes: la app muestra «Cantidad no declarada» | consultada |
| Absorción, distribución, metabolitos y excreción del paracetamol y del ibuprofeno | Secciones de farmacología clínica de etiquetas con receta (DailyMed: ibuprofeno USP v6; ibuprofeno + famotidina v12; hidrocodona + paracetamol v18; CALDOLOR intravenoso v17). Cada dato guarda documento, sección, vía, formulación, población y unidades, y se marca «De otra presentación» | consultada, **otra presentación** |
| Pasos generales (disgregación, intestino delgado, vena porta, hígado, riñón) | Manual MSD (versión para profesionales, revisión 2026-08): farmacocinética, absorción, biodisponibilidad, metabolismo y excreción | consultada, **general** |
| Modelo de absorción y eliminación | modelo didáctico de un compartimento (ecuaciones en la propia vista) | **no representa a ningún fármaco**; verificado contra RK4 en las pruebas |

Lo que no se usa o falta:

- **LiverTox** (NIH) pide reCAPTCHA para leerse: no se consultó ni se esquivó; el metabolismo se apoya en las etiquetas y en el Manual MSD.
- El **metabolito A** del ibuprofeno (25 % en orina) se muestra con el nombre literal de la etiqueta, «(+)-2-[p-(2hydroxymethyl-propyl) phenyl] propionic acid», sin estructura ni CID: tal como está escrito admite dos lecturas.
- La etapa de **metabolismo del ibuprofeno en el hígado** se apoya en la fuente general (MSD), no en un dato específico de su etiqueta; así se marca.
- La diana del ibuprofeno (COX-1 y COX-2) se cita con su matiz «in vitro» de la etiqueta; para el paracetamol la etiqueta dice que el mecanismo no está establecido y la app muestra «Sin datos para esta presentación».
- Alcance educativo: ni dosis ni pautas, ni para diagnóstico ni para tratamiento. Las advertencias se citan de la etiqueta.

## Casos del cuerpo (`datos/casos/`)

5 casos (agua, respiración y ATP, estómago, huesos y calcio, hemoglobina). Cada afirmación es «consultada» (con la fuente y la fecha) o «conocimiento general»; cada fuente dice si se abrió la página o solo se vio un resumen de búsqueda. Las pruebas comprueban que cada sustancia se entiende y cabe en la mesa y que cada ecuación conserva átomos y carga.

## Mesa de estructuras

La mesa reutiliza el núcleo químico de la app (lectura de fórmulas, nombres y SMILES con openchemlib, geometría y relajación). Los datos de los elementos (`elementos/data.ts`) acompañan a la mesa; las masas atómicas no tienen fuente registrada y se marcan «sin verificar».

