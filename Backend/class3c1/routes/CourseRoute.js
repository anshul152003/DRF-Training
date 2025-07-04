const express = require("express");
const router = express.Router();
const CreateCourse = require("../controllers/CreateCourse");
const GetCourse = require("../controllers/GetCourse");
const PutCourse = require("../controllers/PutCourse");
const DeleteCourse = require("../controllers/DeleteCourse");

router.post("/create-course", CreateCourse);
router.get("/get-course", GetCourse);
router.put("/put-course/:id", PutCourse);
router.delete("/delete-course/:id", DeleteCourse);

module.exports = router