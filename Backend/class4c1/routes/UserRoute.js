const express = require("express");
const router = express.Router();
const UserRoute = require("../controllers/CreateUser");

router.post("/sign-up", UserRoute);

module.exports = router;