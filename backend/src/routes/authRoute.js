const express = require("express");
const loginControl = require("../controllers/loginController");
const registerControl = require("../controllers/registerController");
const router = express.Router();

router.post("/api/login", loginControl);

router.post("/api/register", registerControl);

module.exports = router;
