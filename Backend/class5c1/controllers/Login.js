const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function Login(req, res) {
    try {
        const { email, password } = req.body;
        console.log("Login attempt:", email, password);

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        let isExist = await User.findOne({ email });
        if (!isExist) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        /* const isMatch = await bcrypt.compare(password, isExist.password);
          if (!isMatch) {
          return res.status(401).json({
            message: "Incorrect password",
          });
        }
    
        //Password matched
        return res.status(200).json({
          message: "Login successful",
          data: {
            id: isExist._id,
            fName: isExist.fName,
            lName: isExist.lName,
            email: isExist.email,
            role: isExist.role,
          },
        }); */
        console.log("ghjkld ", await bcrypt.compare(password, isExist.password))
        if (await bcrypt.compare(password, isExist.password)) {
            const payload = {
                id: isExist._id,
                fName: isExist.fName,
                lName: isExist.lName,
                email: isExist.email,
                role: isExist.role,
            }
            isExist = isExist.toObject();
            isExist = null;
            const token = jwt.sign(payload, process.env.JWTSECRET, {expiresIn:"1h"});
            console.log("Ham ne token generate kar lee hai ",token);
            /*isExist.token = token; setting token to isExist
             return res.status(200).json({
                message: "Login successful",
                data: isExist
            }) */

            return res.cookie("token", token).status(200).json({
                message: "User Login successful",
                data: isExist
            })
        }
        else {
            response.status(400).json({
                message: "Bhai password to shi dalo ",
                success: false
            })
        }
    } catch (error) {
            console.error("Login failed:", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

module.exports = Login;