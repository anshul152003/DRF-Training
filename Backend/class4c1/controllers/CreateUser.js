const User = require("../models/User");

async function CreateUser(req, res){
    try{
        const { fName, lName, age, email, password } = req.body;
        console.log("Here Data", fName, lName, age, email, password);

        if( fName === "" && lName === "" && email === ""){
            return res.status(500).json({
                message : "First - Last Name and email should not be empty"
            })
        }
        const UserCreated = await User.create({ fName, lName, age, email, password });
        res.status(201).json({
            message : "Success",
            data : UserCreated
        })
    }
    catch(error){
        console.error("User Signup failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = CreateUser