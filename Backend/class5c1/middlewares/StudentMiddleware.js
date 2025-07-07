const jwt = require("jsonwebtoken");
require("dotenv").config();

async function StudentMiddleware(req, res, next){
    try{
        console.log("me to student middleware me hu", req.user.role);
        const role = req.user.role;
        //validations
        if(role === "student"){
            next();
        }
    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Nikal Jaao",
            success: false,
        })
    }
}

module.exports = StudentMiddleware