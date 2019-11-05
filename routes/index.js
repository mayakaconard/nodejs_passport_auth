const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.send("Welcome passport auth tutorial in Nodejs"));

module.exports = router;