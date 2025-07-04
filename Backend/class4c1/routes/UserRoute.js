const express = require("express");
const router = express.Router();
const Signup = require("../controllers/Signup");

router.post("/sign-up", Signup);

module.exports = Signup;