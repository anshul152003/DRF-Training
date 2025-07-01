const express = require("express");
const router = express.Router();
const {createUser} = require("../controllers/createUser.js");

router.get("/getUser",createUser);

module.exports=createUser;