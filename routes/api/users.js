const express = require("express"),
  router = express.Router();

const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users exist");
    res.json(users);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
