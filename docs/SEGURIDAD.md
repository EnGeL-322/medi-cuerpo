# Checklist de seguridad

Revisar antes de distribuir una versión.

## 1. Aislamiento de Electron
- `contextIsolation: true`, `sandbox: true`, `nodeIntegration: false` y `devTools` solo en desarrollo (`src/main/index.ts`).
- El preload solo expone `invoke`, `on`, `pathForFile` y `platform`.

## 2. Sin red (100 % sin conexión)
- `webRequest.onBeforeRequest` cancela todo salvo `file://`, `data:`, `blob:` y `devtools://` (y el servidor de desarrollo).
- CSP estricta (`default-src 'self'`, `connect-src 'self'`, sin `unsafe-eval`).
- Ninguna ventana nueva ni navegación fuera de la app; permisos del navegador denegados.

## 3. Canal IPC cerrado
- Solo existen los canales que registran los módulos de main: `core`.
- Identificadores y acciones validados en preload y en main; el main rechaza peticiones que no vengan de la propia página.
- Prueba: `tests/ipc-validacion.test.ts`.

## 4. Archivos
- Todo handler que recibe una ruta exige una concesión del usuario (selector del sistema o arrastrar y soltar).
- Nunca se sobrescribe un original.

## 5. Datos del usuario y convivencia
- Carpeta de datos propia: `%APPDATA%\MediCuerpo`; instancia única por producto, de modo que las tres apps de la serie pueden abrirse a la vez sin compartir datos.
- Sin telemetría.

## 6. Dependencias y recursos
- Dependencias de ejecución fijadas en package-lock.json; `npm audit --omit=dev` antes de cada versión.
- Avisos de terceros en `licencias/` (se instalan junto a la app). Sin binarios ni modelos de terceros sin licencia compatible.
