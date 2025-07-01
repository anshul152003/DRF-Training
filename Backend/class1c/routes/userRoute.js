const express = require("express");
const router = express.Router();
const {createUser} = require("../controllers/createUser.js");

// router.get("/getUser",createUser);
router.post("/getUser",createUser);

module.exports = router;