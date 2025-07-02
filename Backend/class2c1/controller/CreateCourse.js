const Course = require("../modals/Course")

async function CreateCourse(req, res) {
    try {
        const { CourseName, CourseDuration, CourseAuthor, CourseRating } = req.body();
        const res1 = await Course.create({ CourseName, CourseDuration, CourseAuthor, CourseRating });
        res1.status(201).json({
            message: "Course Created", data: res1
        });
    } catch(error) {
        console.error("Course not Create", error);
    }
}

module.exports = CreateCourse;