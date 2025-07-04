const User =require("../models/User")

async function Login(req, res){
    try{
        const { email, password } = req.body;
        console.log("Here Data", email, password);

        if (!email || !password) {
            return res.status(500).json({
                message: "email and passworld should not be empty"
            })
        }
        const isExist = await User.findOne({ email });
        if(!isExist){
            return res.status(201).json({
                message : "Your not present"
            })
        }

        if(bcrypt.compare(password.isExist.password)){
            res.status(201).json({
                message : "User Login Successfully with Password",
                data : isExist
            })
        }
    }
    catch (error) {
        console.error("Login failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = Login