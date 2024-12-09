const express = require("express");
const { getAuth } = require("../controller/authController");

const router = express.Router();

router.post("/login", getAuth);

module.exports = router;
