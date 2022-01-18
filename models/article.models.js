const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isLiked: {
    type: Boolean,
  },
  comments: [{ comment: String }],
});

module.exports = mongoose.model("Article", articleSchema);
