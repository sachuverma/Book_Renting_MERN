const express = require("express"),
  multer = require("multer"),
  image = multer({
    limits: {
      fileSize: 1000000,
    },
    // storage: multer.memoryStorage(),
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
        return cb(new Error("Not a valid file format!"));
      cb(undefined, true);
    },
  }),
  router = express.Router();

const Book = require("../../models/Book"),
  User = require("../../models/User"),
  auth = require("../../middleware/auth");

router.get("/", (req, res) => {
  Book.find()
    .sort({ added_on: -1 })
    .then((books) => res.json(books));
});

router.get("/book/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) throw Error("Book does not exist");
    res.json(book);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.get("/book/image/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) throw Error("Book does not exist");
    res.set("Content-Type", "image/jpg");
    res.send(book.book_image);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.post(
  "/",
  auth,
  image.single("book_image"),
  async (req, res) => {
    const newBook = new Book({
      book_image: req.file.buffer,
      added_by: {
        id: req.user.id,
        name: req.user.name,
      },
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      for_branch: req.body.for_branch,
      for_semester: req.body.for_semester,
      sold: req.body.sold,
    });
    newBook.save().then((book) => {
      res.json(book);
    });
  },
  (err, req, res, next) => {
    console.log(err.message);
    res.status(400).json(err.message);
  }
);

router.get("/search", async (req, res) => {
  const { book_title, book_author, for_branch, for_semester } = req.query;

  if (book_author) {
    try {
      let re = new RegExp(book_author);
      const books = await Book.find({
        book_author: { $regex: re, $options: "i" },
        sold: false,
      });
      if (!books) throw Error(`Can't Find Book With Author ${book_author}`);
      res.json(books);
    } catch (e) {
      res.status(400).json(e.message);
    }
  } else if (for_branch) {
    try {
      let re = new RegExp(for_branch);
      const books = await Book.find({
        book_name: { $regex: re, $options: "i" },
        sold: false,
      });
      if (!books) throw Error(`Can't Find Book For Branch ${for_branch}`);
      res.json(books);
    } catch (e) {
      res.status(400).json(e.message);
    }
  } else if (for_semester) {
    try {
      const books = await Book.find({
        for_semester: Number(for_semester),
        sold: false,
      });
      if (!books) throw Error(`Can't Find Book For Semester ${for_semester}`);
      res.json(books);
    } catch (e) {
      res.status(400).json(e.message);
    }
  } else if (book_title) {
    try {
      let re = new RegExp(book_title);
      const books = await Book.find({
        book_name: { $regex: re, $options: "i" },
        sold: false,
      });
      if (!books) throw Error(`Can't Find Book With Title ${book_title}`);
      res.json(books);
    } catch (e) {
      res.status(400).json(e.message);
    }
  } else {
    res.status(400).json(`Can't Find Book Specified Book`);
  }
});

router.delete("/:id", auth, (req, res) => {
  Book.findById(req.params.id)
    .then((book) => book.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
