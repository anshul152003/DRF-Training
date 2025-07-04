const User = require("../models/User");
const bcrypt = require("bcrypt");
async function CreateUser(req, res) {
    try {
        const { fName, lName, age, email, password } = req.body;
        console.log("Here Data", fName, lName, age, email, password);

        if (!fName || !lName || !email || !password) {
            return res.status(500).json({
                message: "First - Last Name and email should not be empty"
            })
        }
            
        let hashedPassword;
        try {
             hashedPassword = await bcrypt.hash(password, 10);      
        }
        catch (error) {
            console.error("Encrypting the password failed", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }

        const UserCreated = await User.create({ fName, lName, age, email, password:hashedPassword });
        res.status(201).json({
            message: "Account Created Successfully",
            data: UserCreated
        })
    }
    catch (error) {
        console.error("User Signup failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = CreateUser