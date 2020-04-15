const express = require("express");
const router = express.Router();

// @route       /api/users
// @desc        Sign Up of a User
// @access      Public
router.post("/users", (req, res) => {
  res.send("User Registration is successful");
});

module.exports = router;