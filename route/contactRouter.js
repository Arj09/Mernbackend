const express = require("express");
const { getContacts, createContacts, getContact, updateContacts, deletetContacts } = require("../Controller/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();



router.use(validateToken)
router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(updateContacts).delete(deletetContacts)



module.exports = router