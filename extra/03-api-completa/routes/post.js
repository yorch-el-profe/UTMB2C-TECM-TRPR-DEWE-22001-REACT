const { Router } = require("express");
const { body } = require("express-validator");
const { model } = require("../database/sequelize");
const validator = require("../middlewares/validator");
const authenticator = require("../middlewares/authenticator");

const app = Router();

app.post(
	"/",
	[authenticator, body("content").isLength({ min: 1, max: 1000 }), validator],
	async function (request, response) {
		try {
			const post = await model.Post.create({
				...request.body,
				userId: request.user.id,
			});
			response.status(201).json(post);
		} catch (e) {
			response.status(500).json({ error: e.message });
		}
	}
);

app.get("/", async function (request, response) {
	try {
		const posts = await model.Post.findAll();
		response.status(200).json(posts);
	} catch (e) {
		response.status(500).json({ error: e.message });
	}
});

module.exports = app;
