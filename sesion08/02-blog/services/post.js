const Posts = require("../schemas/post");

function getAll() {
	return Posts.find().exec();
}

function getById(id) {
	return Posts.findById(id);
}

function create(data) {
	// return Posts.create(data);
	return new Posts(data).save();
}

module.exports = {
	getAll,
	getById,
	create,
};
