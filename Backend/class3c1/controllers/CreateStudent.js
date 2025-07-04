const Student = require("../models/Student");
async function CreateStudent(req, res) {
    try {
        const students = req.body; //Expecting an array of course objects
        if (!Array.isArray(students) || students.length === '0') {
            return res.status(400).json({
                message: "Body empty nahi hona chahiye"
            });
        }
        const dbResponse = await Course.insertMany(courses);
        /*const { studentName, studentAge, studentDescription } = req.body;
        if(studentName === "" && studentDescription === ""){
            res.status(400).json({
                message: "student name and description will not be empty"
            })
        }

        const dbResponse = await Student.create({ studentName, studentAge, studentDescription });
        */
        res.status(201).json({
            message: "Student registered successfully",
            data: dbResponse
        })
    }
    catch (error) {
        console.error("Error", Error);
        res.send(500).json({
            message: "Internal Server is coming"
        })
    }
}

module.exports = CreateStudent;