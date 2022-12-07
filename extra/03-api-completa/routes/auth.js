const { Router } = require("express");
const { body } = require("express-validator");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { model } = require("../database/sequelize");
const validator = require("../middlewares/validator");

const app = Router();

app.post(
	"/",
	[
		body("password")
			.isLength({ min: 8, max: 20 })
			.withMessage("La contraseña es inválida"),
		body("email").isEmail().withMessage("El correo electrónico es inválido"),
		validator,
	],
	async function (request, response) {
		try {
			const { email, password } = request.body;
			const user = await model.User.findOne({
				where: { email, password: md5(password) },
			});

			if (!user) {
				return response.status(400).json({
					error: "Correo electrónico o contraseña incorrectos",
				});
			}

			const token = jwt.sign({ id: user.id }, "ssssshhhhhh", {
				expiresIn: "1d",
			});
			response.status(200).json({ token });
		} catch (e) {
			response.status(500).json({ error: e.message });
		}
	}
);

module.exports = app;
