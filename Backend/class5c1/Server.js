const express = require("express");
require("dotenv").config();
const DBConnect = require("./config/DBConnect");
const UserRoute = require("./routes/UserRoute");

const app = express();
app.use(express.json());

app.use("/User", UserRoute);

app.get("/", (req, res) => {
    res.send("Chal gya");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

DBConnect();