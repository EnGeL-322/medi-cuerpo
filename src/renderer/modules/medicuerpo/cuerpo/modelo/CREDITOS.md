# Créditos del modelo anatómico 3D

Los archivos `esqueleto.glb`, `musculos.glb` y `organos.glb` derivan de **BodyParts3D**.

## Atribución

> BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.
>
> BodyParts3D, (c) The Database Center for Life Science licensed under CC Attribution-Share Alike 2.1 Japan.

- Base de datos: BodyParts3D («3D structure database for anatomical concepts»), DOI [10.18908/lsdba.nbdc00837-000](https://doi.org/10.18908/lsdba.nbdc00837-000).
- Creador: Kousaku Okubo, The Database Center for Life Science (DBCLS), Research Organization of Information and Systems.
- Referencia: Mitsuhashi N, Fujieda K, Tamura T, Kawamoto S, Takagi T, Okubo K. *BodyParts3D: 3D structure database for anatomical concepts*. Nucleic Acids Res. 2008.
- Descarga: <https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html> (carpeta `LATEST`), consultada el 2026-11-08.

## Licencia: dos textos distintos

- La **página de licencia** del archivo (actualizada el 2025-02-27) y la descripción de la base de datos declaran **CC BY 4.0**.
- La **cabecera de cada archivo OBJ** de la versión 4.0 descargada declara **CC BY-SA 2.1 Japón**.

La página de licencia se volvió a consultar el 2026-11-12 (https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html): declara CC BY 4.0 y permite redistribuir los datos y crear y distribuir obras derivadas con atribución.

Para cumplir con los dos, se dan ambas atribuciones y **las mallas derivadas de este directorio se distribuyen bajo CC BY-SA 2.1 Japón** (compatible con lo que permite CC BY 4.0 para obras derivadas). Esa condición afecta solo a estos archivos de malla, no al código de la app. Si DBCLS confirma que CC BY 4.0 sustituye al texto de los OBJ, bastará con la primera atribución.

## Versión y archivos de origen

| Archivo | SHA-256 |
|---|---|
| `partof_BP3D_4.0_obj_99.zip` (árbol PART-OF, reducción de polígonos 99 %) | `9fbc713fffeee924a5a657d9813d84d7eb957bded63adb854931dd5e3eb61c97` |
| `isa_BP3D_4.0_obj_99.zip` (árbol IS-A, reducción de polígonos 99 %) | `40665852c49f218326590e204db91064a1ecfc3c6f8cbd7bbbcaac62c7cd409e` |

Versión de compatibilidad 4.0 (cabecera de los OBJ). README y licencia del archivo actualizados el 2025-02-27; datos de la base actualizados en 2013-05.

## Variante anatómica del modelo

**Modelo tridimensional de cuerpo completo de un varón humano adulto** (descripción oficial de BodyParts3D). Es un cuerpo de referencia: no representa la variabilidad entre personas, sexos ni edades.

Particularidades de esta variante que se ven en el atlas:
- Los músculos del **lado izquierdo** son copias especulares de los del derecho (piezas con sufijo `M`, p. ej. `FJ1467M`).
- El **pulmón** se representa con su árbol bronquial y sus vasos (unos 85 cm³ por pulmón): no hay superficie del tejido pulmonar.
- El **corazón** se forma con las paredes de las aurículas, las cavidades de los ventrículos y los vasos coronarios; se omiten válvulas y músculos papilares.
- El **hígado** se forma con sus segmentos; se omiten los vasos y las vías biliares internas.
- No hay malla del **recto del abdomen** ni del **dorsal ancho** en BodyParts3D 4.0: no se incluyen.

## Cambios realizados (`scripts/anatomia/convertir-bp3d.mjs`)

1. Para cada estructura de `cuerpo/datos/anatomia.ts` se reúnen las piezas (identificadores FJ) de sus conceptos FMA en el árbol indicado y se aplican sus filtros (piezas incluidas o excluidas por nombre y lado).
2. Las piezas de cada estructura se unen en una sola malla y se **reducen por agrupación de vértices** en una rejilla de 4 mm (huesos), 5 mm (músculos) o 3 mm (órganos). Se descartan las normales (se recalculan al cargar).
3. **Unidades y ejes**: mm → m (×0,001) y rotación (x, y, z) → (x, z, −y), con Y vertical y la cara anterior hacia +z. Es una rotación sin espejo (determinante +1): se conservan la escala relativa, la posición y la **lateralidad** (el lado derecho del cuerpo queda en x < 0, como en el original).
4. Cada estructura es un nodo del GLB con su id como nombre (`higado`, `rinon-derecho`…).

El detalle por estructura (conceptos FMA, piezas FJ con su nombre en inglés, triángulos antes y después, caja y centro) está en `indice.json`, que genera el mismo script.

## Referencia de interacción

Los gestos del visor (girar, acercar, desplazar, centrar, ocultar estructuras por capas, ficha de información) siguen como referencia el visor del Manual MSD (<https://www.msdmanuals.com/home/multimedia/3dmodel/muscular-system>, que incrusta el visor de BioDigital Human). No se usa su contenido ni sus modelos.
