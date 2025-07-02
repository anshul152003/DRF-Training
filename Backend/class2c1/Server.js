const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const DatabaseConnection = require("./config/DatabaseConnect.js");
const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send('Welcome to the server');
})

DatabaseConnection();