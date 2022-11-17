require("dotenv").config(); // Leer el archivo .env

const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routes/post");

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use("/posts", postRouter);

app.listen(8080);
