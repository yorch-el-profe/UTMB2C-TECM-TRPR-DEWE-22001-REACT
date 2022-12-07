const sequelize = require("./database/sequelize");
sequelize.connect().then(() => sequelize.sync());

const express = require("express");
const UserRouter = require("./routes/user");

const app = express();

app.use(express.json());
app.use("/users", UserRouter);

app.listen(8080, function () {
	console.log("> Servidor escuchando puerto 8080");
});
