const Course = require("../models/Course.js");

async function FormController(req, res){
    try{
        //get the data from body in formdata
        const { cName, cDes, cPrice} = req.body;
        
    }
    catch (error) {
        console.log("Error in Form controller", error);
        return res.status(500).json({
            message: "Internal server in Form controller",
            success: false
        })
    }
}

module.exports = FormController;