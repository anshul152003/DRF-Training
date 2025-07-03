const express = require("express");
const router = express.Router();
const CreateCourse = require("../controllers/CreateCourse");

router.post("/create-course", CreateCourse);

module.exports = router