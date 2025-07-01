const express = require("express");
const router = express.Router();

const { createController } = require("../controllers/createController");

router.post("/create-item", createController);
// router.get("/get-item", CreateController);

module.exports = router;