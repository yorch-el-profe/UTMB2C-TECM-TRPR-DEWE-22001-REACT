const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	content: { type: String, required: true },
	author: { type: String, required: true },
	likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("posts", PostSchema);
