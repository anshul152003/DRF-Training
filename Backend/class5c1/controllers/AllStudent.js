const User = require("../models/User");
async function AllStudent(req, res) {
    try{
        const isExist = await User.find({});
        return res.status(200).json({
            message : "All data fetch successfully",
            data : isExist
        })
    }
    catch(error){
        console.error("Error in CreateUser:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
    }
}

module.exports = AllStudent