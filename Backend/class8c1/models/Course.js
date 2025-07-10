const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    cName: { type: String, required: true, maxLength: 25 },
    cDes: { type: String },
    cPrice: { type: Number, required: true },
})
module.exports = mongoose.model("Course", courseSchema);