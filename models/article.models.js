const mongoose = require("mongoose");
const Schema = mongoose.schema;

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
  comments: {
    type: String,
  },
});

module.exports = mongoose.model("Article", articleSchema);
