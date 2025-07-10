const Course = require("../models/Course.js");

async function FormController(req, res) {
  try {
    // Step 1: Get data from request body
    const { cName, cDes, cPrice } = req.body;
    console.log("Received Data:", cName, cDes, cPrice);

    // Step 2: Basic validation
    if (!cName || !cPrice) {
      return res.status(400).json({
        message: "Course name and price are required",
        success: false,
      });
    }

    // Step 3: Create and save course in DB
    const newCourse = await Course.create({ cName, cDes, cPrice });

    // Step 4: Send success response
    return res.status(201).json({
      message: "Course created successfully",
      success: true,
      data: newCourse,
    });
  } catch (error) {
    console.error("Error in Form controller:", error);
    return res.status(500).json({
      message: "Internal server error in Form controller",
      success: false,
    });
  }
}

module.exports = FormController;
