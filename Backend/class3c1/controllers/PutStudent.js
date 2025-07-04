const Student = require("../models/Student");
async function PutStudent(req, res){
    try{
        const {id} = req.params;
        const {age} = req.body;

        const updatedStudent = await Student.findByIdAndUpdate({_id:id},{studentAge: age}, {
            new: true  // return updated document
        })
        res.status(200).json({
            message: "Student updated Successfully",
            data: updatedStudent
        })
    }
    catch(error){
        console.error("Student update failed", error);
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

module.exports = PutStudent;