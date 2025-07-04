const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    fName: {type: String, maxLength:20, require: true},
    lName: {type: String, maxLength:20, require: true},
    age: {type: Number, require: true},
    email: {type: String, maxLength:50, require: true},
    password: {type: String, maxLength:20, require: true}
});

module.exports = mongoose.model("User", UserSchema);