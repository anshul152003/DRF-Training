const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Router = require("./routes/CourseRoute.js")

const DatabaseConnection = require("./config/DatabaseConnect.js");
const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send('Welcome to the server');
})

app.use(express.json());
DatabaseConnection();

app.use("/api/course/v1", Router);