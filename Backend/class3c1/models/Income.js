const mongoose = require("mongoose");
const IncomeSchema = new mongoose.Schema({
    income: {type: Number},
    incomeDescription: {type:String, maxLength:50}
});

module.exports = mongoose.model("Income", IncomeSchema);