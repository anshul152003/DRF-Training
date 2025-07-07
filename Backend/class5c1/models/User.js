const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    fName: {type: String, maxLength:20, required: true},
    lName: {type: String, maxLength:20, required: true},
    age: {type: Number, required: true},
    email: {type: String, maxLength:50, required: true},
    password: {type: String, maxLength:200, required: true},
    role: {type: String, required: true}
});

module.exports = mongoose.model("User", UserSchema);