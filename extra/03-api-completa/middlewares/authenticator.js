const jwt = require("jsonwebtoken");

module.exports = function (request, response, next) {
	try {
		const token = request.get("Authorization");

		if (!token) {
			throw new Error("No hay token en la petición");
		}

		const payload = jwt.verify(token, "ssssshhhhhh");

		// Adjunto el payload (user) del token en la petición
		request.user = payload;

		next();
	} catch (e) {
		console.error(e.message);
		response
			.status(401)
			.json({ error: "No tienes permiso para acceder a este recurso" });
	}
};
