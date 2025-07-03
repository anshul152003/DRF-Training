const express = require("express");
require("dotenv").config();
const DBConnect = require("./config/DBConnect");
const StudentRoute = require("./routes/StudentRoute");
const IncomeRoute = require("./routes/IncomeRoute");
const CourseRoute = require("./routes/CourseRoute");

const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

//middleware
app.use(express.json());

app.use("/student", StudentRoute);
app.use("/income", IncomeRoute);
app.use("/course", CourseRoute);

app.get("/",(req, res) => {
  res.send("Chal gya");  
})

DBConnect();