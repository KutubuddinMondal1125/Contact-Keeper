const express = require("express");
const router = express.Router();

// @route       /api/auth
// @desc        Get Logged in of a User
// @access      Private
router.get("/auth", (req, res) => {
  res.send("Get Logged In of a User");
});

// @route       /api/auth
// @desc        Auth & generate token
// @access      Public
router.post("/auth", (req, res) => {
    res.send("Log in Successfull");
  });

module.exports = router;