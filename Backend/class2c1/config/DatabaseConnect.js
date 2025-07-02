const mongoose = require("mongoose");
require("dotenv").config();

function DatabaseConnection(){
    try {
        mongoose.connect(process.env.MONGO_URL, {

        });
        console.log('Database Connected Successfully');
    } catch {
        console.error('Database failed to connect', error);
    }
}

module.exports = DatabaseConnection;