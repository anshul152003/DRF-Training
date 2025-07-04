const User = require("../models/User");

async function Signup(req, res){
    try{
                
    }
    catch(error){
        console.error("User Signup failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = Signup