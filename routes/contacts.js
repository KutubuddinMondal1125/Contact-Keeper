const express = require("express");
const router = express.Router();

// @route       /api/contacts
// @desc        Show all the Contacts
// @access      Private
router.get("/contacts", (req, res) => {
  res.send("Get All the Contacts");
});

// @route       /api/contact
// @desc        Save a contanct
// @access      Private
router.post("/contact", (req, res) => {
  res.send("Registration for a Contact");
});

// @route       /api/contact/:id
// @desc        Update a Contact
// @access      Private
router.post("/contact/:id", (req, res) => {
  res.send("Updation of a Contact");
});

// @route       /api/contact/:id
// @desc        Delete a Contact
// @access      Private
router.delete("/users", (req, res) => {
  res.send("Delete a Contact");
});

module.exports = router;
