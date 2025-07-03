const express = require("express");
const router = express.Router();
const CreateStudent = require("../controllers/CreateStudent");

router.post("/create-student", CreateStudent);

module.exports = router