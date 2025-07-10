const express = require("express");
const router = express.Router();
const FormController = require("../controllers/FormController.js")

router.post("/upload", FormController);

module.exports = router;