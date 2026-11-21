# Arquitectura

```
Renderer (React, sin permisos)
  shell/          menú, buscador Ctrl+K, portada, Acerca de
  modules/<id>/   index.ts (manifiesto, accesos, menú, carga diferida) + vista
        │  window.ciencia.invoke(módulo, acción, datos) / .on(módulo, evento)
        ▼  contextBridge (el preload solo valida la forma del canal)
Main (Node, con permisos)
  registry.ts     descubre modules/*/index.ts, valida el remitente y captura errores
  security/       concesiones de archivos elegidos por el usuario
  modules/<id>/   `core`
```

## Flujo de una petición

1. La interfaz llama a `call(módulo, acción, datos)` (`src/renderer/lib/api.ts`).
2. El preload comprueba el identificador del módulo y de la acción y envía por el canal `mod:<módulo>:<acción>`.
3. El registro verifica que el marco emisor sea la propia página, ejecuta el handler y devuelve `{ ok, data }` o `{ ok: false, error: { code, message } }`.
4. El handler valida el contenido (`@shared/validate`) y exige permiso sobre cualquier ruta.

## Producto

`src/shared/producto.ts` reúne el nombre visible, el appId y la firma. El proceso principal fija con él el nombre de la app, la carpeta de datos (`%APPDATA%\MediCuerpo`) y el AppUserModelID de Windows; la interfaz lo usa en la marca, la portada y «Acerca de». `src/renderer/inicio.ts` define las tarjetas de la portada.

## Módulos y navegación

- Autodescubrimiento con `import.meta.glob('./modules/*/index.ts')` en main y en renderer.
- Rutas `#/<módulo>` o `#/<módulo>/<subruta>`; lo desconocido o mal formado vuelve a Inicio.
- Cada vista se carga al abrirla; un fallo de módulo queda contenido sin tumbar la app.

## Añadir un módulo

```bash
npm run new:module -- mi-modulo "Mi módulo" --main
```
