const express = require("express");
const router = express.Router();
const CreateStudent = require("../controllers/CreateStudent");
const GetStudent = require("../controllers/GetStudent");
const PutStudent = require("../controllers/PutStudent");
const PutStudent = require("../controllers/PutStudent");
const DeleteStudent = require("../controllers/DeleteStudent");

router.post("/create-student", CreateStudent);
router.get("/get-student", GetStudent);
router.put("/put-student/:id", PutStudent);
router.delete("/delete-Student/:id", DeleteStudent);

module.exports = router