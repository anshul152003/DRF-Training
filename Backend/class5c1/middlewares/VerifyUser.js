const jwt = require("jsonwebtoken");
require("dotenv").config();
async function VerifyLogin(req, res, next) {
    try{
         const token = req.body.token;
         //validation
         
    }
    catch (error) {
            console.error("Verification failed:", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }

}

module.exports = VerifyLogin