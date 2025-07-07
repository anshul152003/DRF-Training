const jwt = require("jsonwebtoken");
require("dotenv").config();
async function VerifyLogin(req, res, next) {
    try{
         const token = req.body.token;
         //validations
         if(!token){
            return res.status(404).json({
                message: "Token not found",
                success: false
            })
        }
        const decodeData = jwt.verify(token, process.env.JWTSECRET);
        
    }
    catch (error) {
            console.error("Verification failed:", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }

}

module.exports = VerifyLogin