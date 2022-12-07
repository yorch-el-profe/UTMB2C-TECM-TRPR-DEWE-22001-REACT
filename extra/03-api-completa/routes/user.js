const { Router } = require("express");
const { body } = require("express-validator");
const { model } = require("../database/sequelize");
const validator = require("../middlewares/validator");

const app = Router();

app.post(
	"/",
	[
		body("username")
			.isLength({ min: 5, max: 20 })
			.withMessage("El nombre de usuario es inválido"),
		body("password")
			.isLength({ min: 8, max: 20 })
			.withMessage("La contraseña es inválida"),
		body("email").isEmail().withMessage("El correo electrónico es inválido"),
		validator,
	],
	async function (request, response) {
		try {
			const user = await model.User.create(request.body);
			response.status(201).json(user);
		} catch (e) {
			if (e.name === "SequelizeUniqueConstraintError") {
				return response.status(400).json({
					error: "El nombre de usuario o correo electrónico ya existe",
				});
			}

			response.status(500).json({ error: e.message });
		}
	}
);

module.exports = app;
