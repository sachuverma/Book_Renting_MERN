const express = require("express"),
  router = express.Router();

const Book = require("../../models/Book"),
  auth = require("../../middleware/auth");

router.get("/", (req, res) => {
  Book.find()
    .sort({ added_on: -1 })
    .then((books) => res.json(books));
});

router.post("/", auth, (req, res) => {
  const newBook = new Book({
    book_name: req.body.book_name,
    book_author: req.body.book_author,
    for_branch: req.body.for_branch,
    for_semester: req.body.for_semester,
    sold: req.body.sold,
  });
  newBook.save().then((book) => res.json(book));
});

router.get("/search", (req, res) => {
  const { book_title, book_author, for_branch, for_semester } = req.query;

  if (book_author) {
    let re = new RegExp(book_author);
    Book.find({ book_author: { $regex: re, $options: "i" }, sold: false })
      .sort({ added_on: -1 })
      .then((books) => res.json(books));
  } else if (for_branch) {
    let re = new RegExp(for_branch);
    Book.find({ for_branch: { $regex: re, $options: "i" }, sold: false })
      .sort({ added_on: -1 })
      .then((books) => res.json(books));
  } else if (for_semester) {
    Book.find({ for_semester: Number(for_semester), sold: false })
      .sort({ added_on: -1 })
      .then((books) => res.json(books));
  } else {
    let re = new RegExp(book_title);
    Book.find({ book_name: { $regex: re, $options: "i" }, sold: false })
      .sort({ added_on: -1 })
      .then((books) => res.json(books));
  }
});

router.delete("/:id", auth, (req, res) => {
  Book.findById(req.params.id)
    .then((book) => book.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
