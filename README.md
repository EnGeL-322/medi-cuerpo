# MediCuerpo

> Atlas anatómico y medicamentos de escritorio, 100 % sin conexión: 300 fichas de medicamentos con presentaciones, efectos adversos, advertencias y fuentes, y el recorrido de cada principio activo por el cuerpo en cinco etapas, en 3D y en texto. Uso educativo: no da dosis ni pautas.

Hecho por **ramiroengelbert**.

## Funciones

| Destino | Qué hace |
|---|---|
| **Medicamentos** | Catálogo de 300 principios activos: buscar y filtrar, resumen, presentaciones (forma, liberación, titular, excipientes), efectos adversos y advertencias documentados por presentación, estructura 2D y 3D, fuentes con cita literal. «Construir en la mesa» y «Comprobar mi estructura» usan la mesa de estructuras de la propia app. |
| **Recorrido** | Cinco etapas (liberación, absorción, distribución y acción, metabolismo, eliminación) sobre el atlas 3D o como texto completo, con los órganos y los datos de cada etapa. |
| **Atlas del cuerpo** | Esqueleto, músculos y órganos por capas (mallas derivadas de BodyParts3D), con ficha de cada estructura. Si el equipo no tiene WebGL, se muestra un esquema 2D. |
| **Modelo general de absorción** | Modelo didáctico de un compartimento con sus ecuaciones; no representa a ningún fármaco concreto. |
| **Casos del cuerpo** | Agua, respiración y ATP, estómago, huesos y calcio, hemoglobina, cada dato con su fuente. |
| **Mesa de estructuras** | Construir una molécula arrastrando elementos o escribiéndola, para comprobarla frente a la ficha del medicamento. |

`Ctrl+K` busca cualquier destino o herramienta y lo abre directamente. **Acerca de** (al pie del menú) muestra la versión, la firma y la pestaña **Licencias y créditos**.

## Empezar

```bash
npm ci            # instala las dependencias exactas de package-lock.json
npm run dev       # abre la app con recarga en caliente
npm run typecheck # TypeScript estricto
npm test          # pruebas (Vitest)
npm run build     # compila a out/
npm run dist      # instalador de Windows en dist/
```

`npm run test:fuentes` contrasta cada cita de las fichas con sus documentos descargados (requiere `ETIQUETAS_DIR`, ver `docs/FICHAS-MEDICAMENTOS.md`).

Requisitos: Node 22.12 o posterior. Electron descarga su binario la primera vez que se usa y lo guarda en la caché local.

## Identidad del producto

| | |
|---|---|
| Nombre visible | MediCuerpo |
| appId | `pe.ramiroengelbert.medicuerpo` |
| Ejecutable | `MediCuerpo.exe` |
| Instalador | `dist/MediCuerpo-Setup-<versión>.exe` (NSIS, por usuario, carpeta elegible) |
| Datos del usuario | `%APPDATA%\MediCuerpo` |

Cada producto usa su propio appId, su carpeta de datos y su instalador, así que puede convivir con las otras apps de la serie y abrirse a la vez que ellas.

## Estructura

```
src/shared/     contratos puros (IPC, manifiestos, validadores, producto)
src/main/       proceso principal: ventana segura, registro de módulos (`core` (selectores de archivo, guardado e información de la app))
src/preload/    único puente: window.ciencia.invoke/on/pathForFile
src/renderer/   interfaz React (shell/ y modules/<id>/)
tests/          pruebas de la lógica pura
licencias/      avisos de terceros y créditos (se instalan junto a la app)
build/          iconos del ejecutable y del instalador
docs/           arquitectura, seguridad y datos
```

## Seguridad y funcionamiento sin conexión

`contextIsolation`, `sandbox` y CSP estricta; el renderer no puede salir a Internet (la sesión cancela todo salvo `file://`, `data:` y `blob:`); cada handler del proceso principal valida forma, tipo y rango de lo que recibe; los archivos solo se leen o escriben con permiso explícito del usuario. Detalle en `docs/SEGURIDAD.md`.

## Licencias y créditos

El código propio es © 2026 ramiroengelbert (`"license": "UNLICENSED"` en package.json: no se concede ninguna licencia de uso sobre él mientras su autor no elija una).
Los componentes de terceros conservan a sus autores, titulares y licencias:

- Software: `licencias/AVISOS-TERCEROS.txt` (se regenera con `npm run avisos`).
- Datos, modelos, imágenes y referencias: `licencias/CREDITOS-DATOS.txt`, `docs/DATOS.md`, `docs/FICHAS-MEDICAMENTOS.md` y `src/renderer/modules/medicuerpo/cuerpo/modelo/CREDITOS.md`.

El instalador no está firmado digitalmente: no hay un certificado de firma de código disponible para el titular. Para firmarlo, configura en electron-builder un certificado válido emitido a nombre de ramiroengelbert (`CSC_LINK` y `CSC_KEY_PASSWORD`).
"# medi-cuerpo" 
