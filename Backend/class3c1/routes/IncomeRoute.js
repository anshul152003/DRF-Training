const express = require("express");
const router = express.Router();
const CreateIncome = require("../controllers/CreateIncome");

router.post("/create-income", CreateIncome);
router.get("/get-income",CreateIncome);

module.exports = router