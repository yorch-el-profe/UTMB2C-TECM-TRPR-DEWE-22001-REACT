const express = require("express");
const { getAll, getById, create } = require("../services/post");

const Router = express.Router();

// GET /posts: Obtener todas las publicaciones
Router.get("/", async function (request, response) {
	const posts = await getAll();
	response.json(posts);
});

// GET /posts/:id: Obtener una publicación en particular
Router.get("/:id", async function (request, response) {
	const post = await getById(request.params.id);
	response.json(post);
});

// POST /posts: Crear una nueva publicación
Router.post("/", async function (request, response) {
	const newPost = await create(request.body);
	response.json(newPost);
});

module.exports = Router;
