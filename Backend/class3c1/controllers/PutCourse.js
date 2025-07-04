const Course = require("../models/Course");

async function PutCourse(req, res) {
    try {
        const { id } = req.params;
        const { courseDuration } = req.body;

        console.log("Updating course with ID:", id);
        console.log("New duration:", courseDuration);

        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { courseDuration },
            { new: true, runValidators: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({
                message: "Course not found.",
            });
        }

        res.status(200).json({
            message: "Course updated successfully",
            data: updatedCourse,
        });
    } catch (error) {
        console.error("Course update failed", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = PutCourse;
