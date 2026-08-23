# Trabajo práctico 01 - Fundamentos de Node.js

## Descripción
Este proyecto genera automáticamente una ficha técnica de un videojuego obteniendo datos del sistema, y además demuestra el funcionamiento del event loop de Node.js de forma práctica.

## Cómo ejecutar
Para probar los scripts, abre la terminal en la raíz del proyecto y ejecuta:

- Para la ficha del videojuego sin argumento: `node index.js`
- Para la ficha del videojuego con tu nombre: `node index.js TuNombre`
- Para la prueba del event loop: `node orden-event-loop.js`

## Archivo generado
Al ejecutar `index.js`, el programa creará automáticamente una carpeta llamada `salida` y guardará un archivo de texto en la ruta `salida/ficha-videojuego.txt`.

## Conceptos

**1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?**
JavaScript es el lenguaje de programación en sí. V8 es el motor encargado de ejecutar e interpretar esas instrucciones de JavaScript. Por último, Node.js es el runtime (entorno de ejecución) que agrupa a V8 junto con otras API y herramientas que nos permiten correr el lenguaje fuera de un navegador web, dándole acceso a redes o archivos del sistema operativo.

**2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?**
Porque colocar `0` no significa ejecución inmediata. El callback del temporizador es enviado al event loop, y este debe esperar obligatoriamente su turno hasta que todo el hilo de código principal haya terminado de ejecutarse y quede libre.

**3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?**
En una operación bloqueante, el hilo principal de JavaScript se detiene y debe esperar a que la tarea termine (como leer un archivo) antes de pasar a la siguiente línea de código. En una operación no bloqueante, el hilo principal puede continuar avanzando con otras instrucciones, y el resultado de la tarea se entrega posteriormente mediante un callback.

**4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js?**
El módulo `node:path` se encarga de construir e interpretar las rutas de ubicación (textos) de forma segura dependiendo del sistema operativo. Por su parte, `node:fs` se encarga de la acción real: es quien ejecuta las operaciones sobre el disco duro, como crear efectivamente la carpeta (`mkdirSync`) o escribir el archivo (`writeFileSync`).