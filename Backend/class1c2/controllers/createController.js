const User = require("../models/userModel.js");
exports.createController = async (req, res) => {
    try {
        console.log("Hey");
        const { name, age, email } = req.body;
        console.log("Print kar raha h data", name, age, email);
        //ab collection create karenge
        const data = await User.create({ name, age, email});
        res.send(data);
        console.log(name, age, email);
        console.log("Controller chal gya");
        // res.send("User Creation endpoint hit");
    }
    catch(error){
        console.error("Error at creation time", error);
    }
};