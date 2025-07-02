const Course = require("../modals/Course")

async function CreateCourse(req, res) {
    try {
        const { CourseName, CourseDuration, CourseAuthor, CourseRating } = req.body();
        const res = await Course.create({ CourseName, CourseDuration, CourseAuthor, CourseRating })
    } catch(error) {
        console.error("Course not Create", error);
    }
}

module.exports = CreateCourse;