const express = require("express"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  cors = require("cors"),
  path = require("path"),
  bodyParser = require("body-parser");

app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://sachu:sachu1596@cluster0.b7sez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Error: `, err));

app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api", require("./routes/api/auth"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Backend running at port ${PORT}`));
