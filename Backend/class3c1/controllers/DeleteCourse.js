const Course = require("../models/Course");

async function DeleteCourse(req, res){
    try {
        const {id} = req.params;
        console.log("Deleting course with ID", id);

        const deleteCourse = await Course.findByIdAndDelete(id);
        res.status(200).json({
            message : "Course successfully delete",
            data: deleteCourse
        })
    }
    catch(error){
        console.error("Course delete failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = DeleteCourse