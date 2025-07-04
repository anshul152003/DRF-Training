const express = require("express");
const router = express.Router();
const CreateIncome = require("../controllers/CreateIncome");
const GetIncome = require("../controllers/GetIncome");
const PutIncome = require("../controllers/PutIncome");
const DeleteIncome = require("../controllers/DeleteIncome");

router.post("/create-income", CreateIncome);
router.get("/get-income",GetIncome);
router.put("/put-income/:givenId", PutIncome);
router.delete("/delete-Income/:id", DeleteIncome);

module.exports = router