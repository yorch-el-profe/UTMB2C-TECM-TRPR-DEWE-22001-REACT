// 1. Importar express
const express = require("express"); // import express from 'express';

// 2. Crear un servidor de express
const app = express();

// 3. Agregar las rutas (endpoints) disponibles
app.get("/", function (request, response) {
	response.send("Hello World");
});

const cosas = [
	{
		id: 128273,
		name: "hjkdaskjhad",
	},
	{
		id: 9082183,
		name: "jkkljdslkjkl",
	},
];

app.get("/obtenerCosas", function (request, response) {
	response.json(cosas);
});

// 4. Escuchar un puerto
app.listen(8080);
