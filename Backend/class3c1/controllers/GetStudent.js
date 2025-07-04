const Student = require("../models/Student");
async function GetStudent(req, res){
    try{
        const dbRequest = await Student.find({});
        res.status(201).json({
            message: "Student find Successfully",
            data: dbRequest
        })
    } catch(error){
        console.error("Student is not find", error);
        res.send(500).json({
            message: "Internal Server is coming"
        })
    }
}

module.exports = GetStudent;