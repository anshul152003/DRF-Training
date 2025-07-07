const express = require("express");
const router = express.Router();
const UserRoute = require("../controllers/CreateUser");
const Login = require("../controllers/Login");
const AllStudent = require("../controllers/AllStudent");
const VerifyUser = require("../middlewares/VerifyUser");
const StudentMiddleware = require("../middlewares/StudentMiddleware");

router.post("/sign-up", UserRoute);
router.post("/login",Login);
router.get("/allStudent", VerifyUser, StudentMiddleware, AllStudent);

module.exports = router;