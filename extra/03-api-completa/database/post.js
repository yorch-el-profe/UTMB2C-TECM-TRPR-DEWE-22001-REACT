const { DataTypes } = require("sequelize");

module.exports = {
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	likes: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
};
