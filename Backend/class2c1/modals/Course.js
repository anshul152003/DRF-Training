const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    CourseName : {type: "String", required: "Yes"},
    CourseDuration : {type: "String", required: "Yes"},
    CourseAuthor : {type: "String", required: "Yes"},
    CourseRating : {type: "String", required: "Yes"},
})

module.exports = mongoose.model("Course", CourseSchema);