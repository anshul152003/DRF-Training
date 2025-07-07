const User = require("../models/User");
const bcrypt = require("bcrypt");

async function CreateUser(req, res) {
  try {
    console.log("Request Body:", req.body);

    const { fName, lName, age, email, password, role } = req.body;

    if (!fName || !lName || !email || !password || !role || !age) {
      console.log("Missing required fields");
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const ifExist = await User.findOne({ email });
    if (ifExist) {
      return res.status(409).json({
        message: `User with email ${email} already exists`,
      });
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating user in DB...");
    const userCreated = await User.create({
      fName,
      lName,
      age,
      email,
      password: hashedPassword,
      role,
    });

    console.log("User created:", userCreated);

    return res.status(201).json({
      message: "User created successfully",
      data: userCreated,
    });
  } catch (error) {
    console.error("Error in CreateUser:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = CreateUser;