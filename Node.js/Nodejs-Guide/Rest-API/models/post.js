const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		creator: {
			type: Object,
			required: true,
		},
	},
	//자동 createdAt,updateAt옵션임.
	{ timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
