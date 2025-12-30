const Contact = require("../models/Contact");


// GET all contacts
const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// CREATE contact
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.json(contact);
};

// DELETE contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  await Contact.findByIdAndDelete(id);
  res.json({ message: "Contact deleted" });
};

module.exports = {
  getContacts,
  createContact,
  deleteContact,
};
