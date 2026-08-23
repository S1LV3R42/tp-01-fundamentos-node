const fs = require("node:fs");
const path = require("node:path");

// 1. Datos del runtime
// Recibe el nombre desde la terminal o usa "Estudiante" por defecto
const nombreEstudiante = process.argv[2] ?? "Estudiante"; 

// 2. Datos del videojuego
const videojuego = {
  titulo: "Doom Eternal",
  estudio: "id Software",
  anio: 2020,
  plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
  multijugador: true
};

// 3. Preparar los valores (Transformaciones)
const plataformasTexto = videojuego.plataformas.join(", ");
const multijugadorTexto = videojuego.multijugador ? "Sí" : "No";

// 4. Construir la ficha con un template literal
const ficha = `FICHA DE VIDEOJUEGO
-------------------
Estudiante: ${nombreEstudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}
Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

// 5. Incorporar rutas
const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

// 6. Crear la carpeta y el archivo (Operaciones bloqueantes/síncronas)
fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

// 7. Informar el resultado en la terminal
console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);