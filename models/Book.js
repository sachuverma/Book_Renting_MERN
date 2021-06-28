const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const BookSchema = new Schema({
  book_image: {
    type: Buffer,
  },
  added_by: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: String,
  },
  book_name: {
    type: String,
    required: true,
  },
  book_author: {
    type: String,
    required: true,
  },
  for_branch: {
    type: String,
    required: true,
  },
  for_semester: {
    type: Number,
    required: true,
  },
  sold: {
    type: Boolean,
    default: false,
  },
  added_on: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    default: "no description provided",
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
