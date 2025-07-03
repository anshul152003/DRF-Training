const Income = require("../models/Income");
async function CreateIncome(req, res) {
    try {
        const { income, incomeDescription } = req.body;
        const dbResponse = await Income.create({ income, incomeDescription });
        res.status(201).json({
            message: "Income Generated Successfully",
            data: dbResponse
        })
    } 
    catch(error) {
        console.error("Income is not created", error);
        res.send(500).json({
            message : "Internal Server is coming"
        })
    }
}

module.exports = CreateIncome