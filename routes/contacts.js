const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route       GET  /api/contacts
// @desc        Show all the Contacts
// @access      Private
router.get("/contacts", auth, async (req, res) => {
  try {
    let contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    return res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST  /api/contact
// @desc        Save a contanct
// @access      Private
router.post(
  "/contact",
  [
    auth,
    [
      check("name", "Name is Required & Should 3 characters long")
        .not()
        .isEmpty()
        .isLength({ min: 3 }),
      check("email", "Enter a valid Email").isEmail(),
      check("phone", "Enter a valid Phone nummber").isLength({ min: 7 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;
    try {
      let newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      let contact = await newContact.save();
      return res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route       PUT  /api/contact/:id
// @desc        Update a Contact
// @access      Private
router.put("/contact/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // Build contact Object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(400).json({ msg: "Contact is not found" });
    }

    // Make sure user is authorized or not
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).send("Not Authorized");
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route       /api/contact/:id
// @desc        Delete a Contact
// @access      Private
router.delete("/contact/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(400).json({ msg: "Contact is not found" });
    }

    // Make sure user is authorized or not
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).send("Not Authorized");
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
