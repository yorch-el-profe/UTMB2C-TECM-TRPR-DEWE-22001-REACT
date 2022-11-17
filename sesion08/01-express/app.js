// 1. Importar express
const express = require("express");

// 2. Crear un servidor
const app = express();

// 3. Definir las rutas disponibles en el backend
app.get("/", function (request, response) {
	response.send("Hello World");
});

// 4. Escuchar un puerto
app.listen(8080);
