const express = require('express');
const router = express.Router();

// User Login
router.get("/login", (req, res) => res.render("login"));

// User Register
router.get("/register", (req, res) => res.render("register"));
router.post("/register", (req, res) => {
    const {
        name,
        email,
        password,
        password2
    } = req.body;

    let errors = [];

    // check for null inputs
    if (!name || !email || !password || !password2) {
        errors.push({
            msg: 'Please enter all fields'
        });
    }

    // check  for password match

    if (password != password2) {
        errors.push({
            msg: 'Passwords do not match'
        });
    }

    if (password.length < 6) {
        errors.push({
            msg: 'Password must be at least 6 characters'
        });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }
   
});

module.exports = router;