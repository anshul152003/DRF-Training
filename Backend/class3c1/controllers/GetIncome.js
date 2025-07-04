const Income = require("../models/Income");
async function GetIncome(req, res) {
    try {
        const dbRequest = await Income.find({});
        res.status(201).json({
            message: "Income find Successfully",
            data: dbRequest
        })
    }
    catch (error) {
        console.error("Income is not find", error);
        res.send(500).json({
            message: "Internal Server is coming"
        })
    }
}

module.exports = GetIncome