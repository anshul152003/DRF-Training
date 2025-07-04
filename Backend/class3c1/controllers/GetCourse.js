const Course = require("../models/Course")
async function GetCourse(req, res){
    try{
        const dbRequest = await Course.find({});
        res.status(201).json({
            message: "Course find Successfully",
            data : dbRequest
        })
    } catch (error){
        console.error("Course didn't find", error);
        res.send(500).json({
            message : "Internal server is coming"
        })
    }
}

module.exports = GetCourse