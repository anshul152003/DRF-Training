const Student = require("../models/Student");
async function CreateStudent(req, res) {
    try{
        const { studentName, studentAge, studentDescription } = req.body;
        if(studentName === "" && studentDescription === ""){
            res.status(400).json({
                message: "student name and description will not be empty"
            })
        }

        const dbResponse = await Student.create({ studentName, studentAge, studentDescription });
        res.status(201).json({
            message: "Student registered successfully",
            data: dbResponse
        }) 
    }
    catch (error){
        console.error("Error", Error);
        res.send(500).json({
            message: "Internal Server is coming"
        })
    }
}

module.exports = CreateStudent;