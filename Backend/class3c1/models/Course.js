const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    courseName: {type:String, maxLength:50, require: true},
    courseDuration: {type:String, maxLength:50, require: true},
    courseDescription: {type:String, maxLength:50, require: true}
});

module.exports = mongoose.model("Course", CourseSchema);