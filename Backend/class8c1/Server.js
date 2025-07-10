const express = require("express");
require("dotenv").config()
const FormRoute=require("./routes/FormRoute.js")
//step-1 instance create
const app = express();

const PORT = process.env.PORT || 3500

//step-2 start server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

//step-3 use middlewares to parse data from body
app.use(express.json())

//step-4 Database connectivity
const DbConnection=require("./configuration/DbConnection")
DbConnection()

//step-5 Mount your routes here 
app.use("/Form",FormRoute)

//step-6 make demo page to show on the UI
app.get("/", (req, res) => {
    res.send("This is our home page")
})