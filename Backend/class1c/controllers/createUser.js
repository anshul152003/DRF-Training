const Student = require("../models/Student.js");

const students = [10, 20, 30];

exports.createUser = (req,res) => {
    try{
        console.log("Har Har Mahadev");
        res.status(201).json({students});
        //res.status(201).json({ message: "Successfully Created" })  // Sends a JSON response with a specific HTTP status code (like 201 = Created). Used when: You want to send structured data (like objects or arrays).
        // res.send("message");  // send a plain message
    }
    catch(error){
        res.status(400).json({ error: error.message });
        // console.log("Error aa gai hai", error);
    }
}

// exports.createUser = async (req, res) => {
//   try {
//     const newStudent = new Student(req.body); // Get data from request body
//     const savedStudent = await newStudent.save(); // Save to MongoDB

//     res.status(201).json({
//       message: "Student created successfully",
//       student: savedStudent
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
