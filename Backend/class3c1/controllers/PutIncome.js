const Income = require("../models/Income");
async function PutIncome(req, res) {
    try {
        const { givenId } = req.params;
        const { descrip } = req.body;

        const updatedIncome = await Income.findByIdAndUpdate({ _id: givenId }, { incomeDescription: descrip }, { new: true });
        res.status(200).json({
            message: "Income updated Successfully",
            data: updatedIncome
        })
    }
    catch (error){
        console.error("Income update failed", error);
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

module.exports = PutIncome