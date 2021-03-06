const express = require("express"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

const auth = require("../../middleware/auth"),
  User = require("../../models/User");

const JWT_SECRET = "THIS IZ A SUPER SEKRAT BIRO, DO NOT LEAK ITTT ;p",
  router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Simple validation
  if (!email || !password) {
    return res.status(400).json("Please enter all fields");
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error("User does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 36000 });
    if (!token) throw Error("Couldn't sign the token");

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.post("/register", async (req, res) => {
  const {
    name,
    email,
    password,
    roll_number,
    branch,
    college,
    year_of_admission,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !roll_number ||
    !branch ||
    !college ||
    !year_of_admission
  )
    return res.status(400).json("Please enter all fields");

  try {
    const user = await User.findOne({ email });
    if (user) throw Error("User already exists");

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Something went wrong hashing the password");

    const newUser = new User({
      name,
      email,
      password: hash,
      roll_number,
      branch,
      college,
      year_of_admission,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Something went wrong saving the user");

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 36000,
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
