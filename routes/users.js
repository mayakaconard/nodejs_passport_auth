const express = require('express');
const router = express.Router();

// User Login
router.get("/login", (req, res) => res.send("Login"));

// User Register
router.get("/register", (req, res) => res.send("Register"));

module.exports = router;