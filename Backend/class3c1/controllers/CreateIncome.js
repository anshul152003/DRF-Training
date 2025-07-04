const Income = require("../models/Income");
async function CreateIncome(req, res) {
    try {
        const incomes = req.body; //Expecting an array of course objects
        if (!Array.isArray(incomes) || incomes.length === '0') {
            return res.status(400).json({
                message: "Body empty nahi hona chahiye"
            });
        }
        const dbResponse = await Income.insertMany(courses);

        /*const { income, incomeDescription } = req.body;
        const dbResponse = await Income.create({ income, incomeDescription });
        */
        res.status(201).json({
            message: "Income Generated Successfully",
            data: dbResponse
        })
    }
    catch (error) {
        console.error("Income is not created", error);
        res.send(500).json({
            message: "Internal Server is coming"
        })
    }
}

module.exports = CreateIncome