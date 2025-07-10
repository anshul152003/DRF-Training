const Course = require("../models/Course.js");

async function FormController(req, res){
    try{
        
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