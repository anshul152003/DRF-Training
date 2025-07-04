const Student = require("../models/Student");

async function DeleteStudent(req, res) {
    try{
        const {id} = req.params;
        console.log("Deleting student with id", id);

        const deleteStudent = await Student.findByIdAndDelete(id);
        res.status(200).json({
            message : "Student successfully delete",
            data : deleteStudent
        })
    }
    catch(error){
        console.error("Student delete failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = DeleteStudent