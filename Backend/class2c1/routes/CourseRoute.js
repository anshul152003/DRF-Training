const express = require("express");
const CreateCourse = require("../controller/CreateCourse");
const Router = express.Router();

Router.post("/create-course", CreateCourse);

module.exports = Router;