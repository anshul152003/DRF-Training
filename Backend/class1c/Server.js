const express = require('express');
const {default: mongoose} = require('mongoose');
const app = express();
const PORT = 3000;
const router = require("../class1c/routes/userRoute.js")

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

//database connectivity
//mongodb://localhost:27017/Learn
mongoose.connect("mongodb://localhost:27017/Learn",{}).then(() => {
    console.log("Database connected successfully.");
}).catch((error) => {
    console.log("Fad gya", error); 
    error.exit(1);
});

app.use(express.json());
app.use("/api/v1",router);