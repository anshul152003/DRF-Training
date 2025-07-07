const mongoose = require("mongoose");
require("dotenv").config();

function DBConnect(){
    mongoose.connect(process.env.DBURL,{}).then(res => console.log("Data base connection done.")).catch(e => console.log("error",e));
}

module.exports = DBConnect;