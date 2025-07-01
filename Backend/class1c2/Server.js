const express = require("express");
const mongoose = require("mongoose");
const createRoute = require("./routes/createRoute.js");

const app = express();
const port = 4500;
console.log("We're in Server.js");

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})

//data ko body se nikalne ke liye
app.use(express.json());

app.get("/", (req,res) => {
    res.send("<h1>This is out backend project</h1>");
})

//data base connection
mongoose.connect("mongodb://localhost:27017/Check", {}).then(() => {
    console.log("Database connection done")
}).catch((error) => {
    console.log("Error aa gya", error)
});

//attach your route here
app.use("/api/v1", createRoute);