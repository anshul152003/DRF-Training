const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    studentName: {type: String, maxLength:50, require: true},
    studentAge: {type: Number, maxLength:50, require: true},
    studentDescription: {type: String, maxLength:50, require: true}
});

module.exports = mongoose.model("Student", StudentSchema);