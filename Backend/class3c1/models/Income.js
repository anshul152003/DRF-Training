const mongoose = require("mongoose");
const IncomeSchema = new mongoose.Schema({
    income: {type: Number, require: true},
    incomeDescription: {type:String, maxLength:50, require: true}
});

module.exports = mongoose.model("Income", IncomeSchema);