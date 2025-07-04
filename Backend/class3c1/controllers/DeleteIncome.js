const Income = require("../models/Income");

async function DeleteIncome(req, res) {
    try{
        const {id} = req.params;
        console.log("Deleting Income with id", id);

        const deleteIncome = await Income.findByIdAndDelete(id);
        res.status(200).json({
            message : "Income successfully delete",
            data : deleteIncome
        })
    }
    catch(error){
        console.error("Income delete failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = DeleteIncome