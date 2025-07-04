const express = require("express");
require("dotenv").config();
const DBConnect = require("./config/DBConnect")

const UserRoute = require("./routes/UserRoute")

const app = express();

const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
    console.log(`Serve is running on ${PORT}`);
})

app.use(express.json());

app.use("/User", UserRoute);

app.get("/", (req, res) => {
    res.send("Chal gya");
})

DBConnect();