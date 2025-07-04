const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    courseName: {type:String, maxLength:50},
    courseDuration: {type:String, maxLength:50},
    courseDescription: {type:String, maxLength:50}
});

module.exports = mongoose.model("Course", CourseSchema);