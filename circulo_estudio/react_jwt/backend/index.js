const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/validar", function (request, response) {
	console.log(request.headers["Authentication"]);
	if (request.get("Authentication")) {
		const token = request.get("Authentication");
		try {
			jwt.verify(token, "abc123");
			response.send("Si tienes sesión");
		} catch (e) {
			response.status(401).send("Token invalido");
		}
	} else {
		response.status(401).send("No tienes acceso");
	}
});

app.get("/token", function (request, response) {
	const token = jwt.sign("es un token de ejemplo", "abc123");
	response.json({
		token,
	});
});

app.listen(8080);
