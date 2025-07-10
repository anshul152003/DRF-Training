const express = require("express");
require("dotenv").config();
const FormRoute = require("./routes/FormRoute.js");
const DbConnection = require("./configuration/DbConnection.js");

const app = express();
const PORT = process.env.PORT || 3500;

// ✅ Step 1: Connect to DB before anything
DbConnection();

// ✅ Step 2: Use body parsing middleware BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional for form data

// ✅ Step 3: Mount your routes
app.use("/Form", FormRoute);

// ✅ Step 4: Demo route
app.get("/", (req, res) => {
    res.send("This is our home page");
});

// ✅ Step 5: Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running at port ${PORT}`);
});
