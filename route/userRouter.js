const express = require("express");
const { loginUser, registerUser, currentUser } = require("../Controller/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/current", validateToken,currentUser);


module.exports = router