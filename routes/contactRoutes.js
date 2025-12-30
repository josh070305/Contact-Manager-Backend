const express = require("express");

const {
  getContacts,
  createContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/get", getContacts);
router.post("/create", createContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
