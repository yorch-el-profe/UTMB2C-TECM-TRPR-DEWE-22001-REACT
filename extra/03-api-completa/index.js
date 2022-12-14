const sequelize = require("./database/sequelize");
sequelize.connect().then(() => sequelize.sync());

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const PostRouter = require("./routes/post");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan());
app.use("/users", UserRouter);
app.use("/auth", AuthRouter);
app.use("/posts", PostRouter);

app.listen(8080, function () {
	console.log("> Servidor escuchando puerto 8080");
});
