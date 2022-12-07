const { Sequelize } = require("sequelize");
const UserTable = require("./user");
const PostTable = require("./post");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./redsocial.db",
});

// Definición de las tablas (únicamente la estructura)
const User = sequelize.define("users", UserTable);
const Post = sequelize.define("posts", PostTable);

// Definición de las relaciones
User.hasMany(Post);
Post.belongsTo(User);

// Prueba la conexión con la base de datos
function connect() {
	return sequelize
		.authenticate()
		.then(function () {
			console.log("> Conectado a SQLite");
		})
		.catch(function () {
			console.log("> No se puede conectar con SQLite");
		});
}

// Crear y sincronizar las tablas en SQLite
function sync() {
	return sequelize
		.sync()
		.then(function () {
			console.log("> Base de datos sincronizada");
		})
		.catch(function () {
			console.log("> No se pudo sincronizar la base de datos");
		});
}

module.exports = {
	connect,
	sync,
	model: {
		User,
		Post,
	},
};
