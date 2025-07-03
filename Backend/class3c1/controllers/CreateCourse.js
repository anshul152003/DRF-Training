const Course = require("../models/Course");
async function CreateCourse(req, res) {
    try{
        const { courseName, courseDuration, courseDescripition } = req.body;
        const dbResponse = await Course.create({ courseName, courseDuration, courseDescripition });
        res.status(201).json({
            message: "Course Created Successfully.",
            data: dbResponse
        })
    }
    catch(error){
        console.error("Course creation failed", error);
        res.status(500).json({
            message : "Internal Serrver is coming"
        })
    }
}

module.exports = CreateCourse