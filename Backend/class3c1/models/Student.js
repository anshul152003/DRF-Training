const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    studentName: {type: String, maxLength:50},
    studentAge: {type: Number, maxLength:50},
    studentDescription: {type: String, maxLength:50}
});

module.exports = mongoose.model("Student", StudentSchema);