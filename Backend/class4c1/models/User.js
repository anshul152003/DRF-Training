const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    userName: {type: String, maxLength:50, require: true},
    userAge: {type: Number, maxLength:50, require: true},
    userEmail: {type: String, maxLength:50, require: true},
    userPassword: {type: String, maxLength:20, require: true}
});

module.exports = mongoose.model("User", UserSchema);