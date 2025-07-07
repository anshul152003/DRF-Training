const express = require("express");
const router = express.Router();
const UserRoute = require("../controllers/CreateUser");
const Login = require("../controllers/Login");
const AllStudent = require("../controllers/AllStudent");

router.post("/sign-up", UserRoute);
router.post("/login",Login);
router.get("/allStudent",AllStudent);

module.exports = router;