const Course = require("../models/Course");
async function CreateCourse(req, res) {
    try{
        const courses = req.body; //Expecting an array of course objects
        if(!Array.isArray(courses) || courses.length === '0'){
            return res.status(400).json({
                message:  "Body empty nahi hona chahiye"
            });
        }
        const dbResponse = await Course.insertMany(courses);
        /* const { courseName, courseDuration, courseDescription } = req.body;
            const dbResponse = await Course.create({ courseName, courseDuration, courseDescription });
        */    
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