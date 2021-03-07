const express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    // "mongodb://localhost:27017/book_rent_mern",
    "mongodb+srv://sachu:sachu123@cluster0.grhcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Error: `, err));

app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api", require("./routes/api/auth"));

// SERVE STATIC ASSETS IF IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running at port ${PORT}`));
