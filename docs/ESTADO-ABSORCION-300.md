# Modelo de absorción en tres niveles y catálogo de 300 · estado por entregas

Encargo del 2026-11-12. Los cambios quedan en el árbol de trabajo, sin commit. Este documento se actualiza al cerrar cada lote: qué está hecho, cómo se comprobó y el siguiente paso exacto.

## 1 · Investigación de diseño (hecha)

- **PhET, andamiaje implícito** (Podolefsky, Perkins y Adams, «Implicit scaffolding in interactive simulations», arXiv 1306.6544): guiar con lo que la interfaz permite y no con instrucciones; empezar con un escenario sencillo y familiar, con pocas variables, e ir soltando restricciones por pestañas (Energy Skate Park: Basics).
- **PhET, entrevistas de diseño de interfaz** (phet.colorado.edu, «A Study of Educational Simulations Part II – Interface Design»): textos de una a tres palabras, sin abreviaturas que el alumnado no conoce, controles agrupados en no más de unos tres grupos, opciones avanzadas ocultas detrás de un control, etiquetas junto al objeto que nombran, gráficas con su nombre visible, sin animación al abrir.
- **Enseñanza de la farmacocinética** (búsqueda bibliográfica): se percibe abstracta y matemática; Cmax, Tmax y AUC son las magnitudes que más se usan para leer una curva concentración-tiempo.
- **Qué confundía en la pantalla anterior**: «Juego A» y «Juego B» sin significado, constantes kₐ y kₑ como primer control, seis curvas de entrada (tres fracciones por dos juegos) y una leyenda solo por color.
- **Aplicación**: selector Básico | Normal | Avanzado dentro del módulo; una sola curva al empezar; nombres con significado («Ejemplo de absorción rápida», «Velocidad de absorción»); kₐ, kₑ, horizonte y ecuaciones solo en Avanzado; las otras fracciones se añaden como respuesta a una pregunta («¿Cuánto queda por absorber?»); series distinguidas por color, estilo de línea, marcador y etiqueta directa.

## 2 · Pantalla «Modelo general de absorción» (hecha)

- Lógica pura: `cuerpo/nucleo/estadoAbsorcion.ts` (niveles, ajustes válidos, pasos de «más lenta/más rápida», frase del pico, nivel guardado), `cuerpo/nucleo/evidenciaAbsorcion.ts` (serie, modelo, datos puntuales o insuficientes; comparabilidad; simulación de un modelo publicado de un compartimento), `cuerpo/nucleo/modeloAbsorcion.ts` (sin cambios).
- Procedencia: `cuerpo/datos/curvas/*.ts` (curvas de estudios con fuente, población, condiciones, método, límites y citas de apoyo) y `RengCifra.analito/origen` en el modelo de datos.
- Vista: `cuerpo/vista/VistaModelo.tsx` (selector de nivel, buscador del catálogo con `RengCombobox`, presentación, «Probar un ejemplo», enlaces a la ficha y al atlas), `EjemploAbsorcion.tsx` y `AbsorcionMedicamento.tsx`. `vista/GraficaXY.tsx` admite estilos de línea, marcadores, intervalos, etiquetas directas y marcas de eje redondas.
- La selección de medicamento y presentación es la misma que en la ficha; la ficha tiene «Ver absorción». El nivel se guarda en `localStorage` (`medicuerpo.absorcion.nivel`); la primera vez es Básico.
- En «Cuerpo y medicamentos» se oculta el selector global Básico/Avanzado de la cabecera (allí no tenía efecto).

## 3 · Curvas respaldadas

| Presentación | Tipo | Fuente | Estado |
|---|---|---|---|
| `ticagrelor-oral` (BRILINTA 90 mg) | Serie observada parcial (0,5, 1 y 2 h; fármaco y metabolito AR-C124910XX por separado; comparación con comprimido triturado del mismo estudio) | Teng R et al., Int J Clin Pharmacol Ther 2015;53(2):182-189, PMC4302705, CC BY | verificada contra la tabla 2 del artículo |

Candidatos descartados: modelo poblacional de donepezilo (PMC7211298; modelo con primer paso saturable y dos compartimentos, licencia CC BY-NC); metilfenidato PR frente a IR (PMC12669362; solo parámetros, sin concentraciones por tiempo; CC BY-NC). Barridos de Europe PMC con el guion `tablas.py` del área temporal de la sesión: las tablas de concentración por tiempo en acceso abierto son raras.

## 4 · Catálogo de 300

### Cómo se hace una ficha nueva

1. `node scripts/medicamentos/obtener-etiquetas.mjs node_modules/.cache/medicuerpo/contraste <ids>` descarga la etiqueta (DailyMed por setid o búsqueda openFDA, CIMA si la entrada tiene `cima:`) y PubChem.
2. `node scripts/medicamentos/extracto.mjs node_modules/.cache/medicuerpo/contraste <salida.txt> <ids>` resume cada documento (indicaciones, mecanismo, farmacocinética, reacciones, advertencias).
3. Se redacta una especificación compacta (`@id|Nombre|área|clase|sinónimos|opciones`, líneas `U`, `A`, `L`, `B`, `D`, `M`, `E`, `+`, `T`, `C`, `R`, `W`, `K`, `S`, `X`, `N`, `Q`; formato en la cabecera de este documento y en `redactar.mjs`).
4. `LOTE=<n> node scripts/medicamentos/redactar.mjs <espec> node_modules/.cache/medicuerpo/contraste src/renderer/modules/medicuerpo/cuerpo/datos/catalogo node_modules/.cache/medicuerpo/lotes/registro.json` genera las fichas y falla si una cita no está en la sección indicada.
5. `npm run typecheck`, `npm test` y `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes`.

Las especificaciones de cada lote se guardan en `node_modules/.cache/medicuerpo/lotes/<lote>.espec.txt`.

### Lotes

| Lote | Fichas | Estado |
|---|---|---|
| Piloto | vortioxetina, metamizol (CIMA), nistatina (CIMA, solo cualitativa), edoxabán, ivermectina, propranolol (liberación prolongada), carbonato de litio, valganciclovir (profármaco), cetirizina (CIMA), bisacodilo (CIMA, gastrorresistente) | verificado (2026-11-12): 160 fichas, 480 pruebas, 322 comprobaciones documentales |
| 1 | valproato (liberación retardada), lorazepam, metilfenidato, tamoxifeno, hidroxizina (CIMA), diltiazem, metimazol (CIMA), dexametasona (CIMA), haloperidol (CIMA), buspirona, lactulosa (acción local), metotrexato, hidralazina, verapamilo, clonidina, captopril, labetalol, amiodarona, flecainida | verificado (2026-11-12): 179 fichas, 360 comprobaciones documentales |

| 2 | amitriptilina (CIMA), propafenona, sotalol, ranolazina (liberación prolongada), mononitrato de isosorbida, prasugrel (profármaco), cilostazol, lovastatina, pitavastatina, fenofibrato, clortalidona (CIMA), indapamida (CIMA, liberación prolongada), amilorida, acetazolamida (CIMA), minoxidil, terazosina, ácido acetilsalicílico (CIMA), vilazodona | verificado (2026-11-12): 197 fichas |
| 3 | desvenlafaxina, lurasidona, ziprasidona, clozapina, paliperidona, lacosamida, zonisamida, brivaracetam, rasagilina, atomoxetina, modafinilo, eszopiclona, ramelteón, suvorexant, temazepam | verificado (2026-11-12): 212 fichas |

| 4 | oxicodona, morfina (liberación prolongada), tapentadol, rizatriptán, zolmitriptán, eletriptán, naltrexona, ropinirol, amantadina, galantamina, etambutol, pirazinamida, cefadroxilo, dicloxacilina, eritromicina (gastrorresistente), trimetoprima, praziquantel | verificado (2026-11-12): 229 fichas |
| 5 | mebendazol (acción local), tinidazol, itraconazol, tenofovir disoproxilo (profármaco), abacavir (solución oral), raltegravir | verificado (2026-11-12): 235 fichas |

Descartados por falta de farmacocinética en la etiqueta para las cinco etapas: metolazona, nortriptilina, guanfacina (sin datos de eliminación), cefdinir (sin sección de reacciones adversas en el SPL descargado), penicilina V y minociclina (sin datos de metabolismo ni distribución), griseofulvina y darunavir (etiquetas antiguas de reenvasadores sin farmacocinética). La etiqueta de TRICOR solo está publicada por reenvasadores: se usa la de un fabricante de fenofibrato genérico.

Las etiquetas genéricas de EE. UU. sin farmacocinética suficiente para las cinco etapas se sustituyen por la ficha técnica española (CIMA): hidroxizina (Atarax), metimazol (Tirodril), dexametasona (Fortecortin), haloperidol (Haloperidol Esteve) y amitriptilina (Tryptizol).

### Lotes finales y recuento

| Lote | Fichas añadidas |
|---|---|
| 5b | sofosbuvir, baloxavir (Genentech), bedaquilina, cloroquina, mefloquina |
| 6a | ursodiol, sulfasalazina, misoprostol, linaclotida (acción local, solo cualitativa), naloxegol, alosetrón, domperidona (CIMA), metilnaltrexona |
| 6b | nizatidina, gliburida, bromocriptina, cabergolina |
| 6c | tolvaptán, cinacalcet, raloxifeno, bicalutamida, enzalutamida, temozolomida, gefitinib, osimertinib |
| 6d | lapatinib, dasatinib, palbociclib, olaparib, roflumilast, baricitinib, upadacitinib, apremilast |
| 6e | loratadina (CIMA), fexofenadina (CIMA), dexketoprofeno (CIMA), trospio, vibegrón |
| 6f | erlotinib, ruxolitinib, tofacitinib, ambrisentán, bosentán, voriconazol, vardenafilo |
| 6g | sorafenib |

Recuento verificado con el propio catálogo (no con los totales parciales de las filas anteriores): **300 fichas, 300 ids y 300 InChIKey distintos, 303 presentaciones**. Se parte de las 150 originales y se añaden 150.

Descartados también por farmacocinética insuficiente en la etiqueta: proclorperazina, prometazina, cimetidina, propiltiouracilo, hidrocortisona, metilprednisolona, fludrocortisona (sin sección de farmacocinética), nevirapina, metenamina, teofilina (reacciones adversas solo de intoxicación) y piroxicam (etiqueta de reenvasador de 2010).

### Evidencia de absorción por presentación

- Serie observada: 1 (ticagrelor, serie parcial de 0,5, 1 y 2 h).
- Modelo publicado con parámetros reproducibles: 0 (soporte implementado y probado, ninguna fuente abierta adecuada encontrada).
- Datos puntuales: 242 presentaciones (239 fichas); sin curva.
- Datos insuficientes: 60 presentaciones (60 fichas).

### Comprobaciones

`npm run typecheck`, `npm test` (480) y `ETIQUETAS_DIR=node_modules/.cache/medicuerpo/contraste npm run test:fuentes` (602, incluida la serie del artículo PMC4302705) pasan; `npm run build` compila.
