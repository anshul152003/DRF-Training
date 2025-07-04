const express = require("express");
const router = express.Router();
const CreateCourse = require("../controllers/CreateCourse");

router.post("/create-course", CreateCourse);
router.get("/get-course",CreateCourse);

module.exports = router