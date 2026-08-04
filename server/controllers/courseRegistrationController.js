const CourseRegistration = require("../models/CourseRegistration");

// Create Registration
const createRegistration = async (req, res) => {
  try {
    const registration = await CourseRegistration.create(req.body);

    res.status(201).json({
      success: true,
      message: "Course registered successfully",
      data: registration,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Registrations
const getRegistrations = async (req, res) => {
  try {
    const registrations = await CourseRegistration.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRegistration,
  getRegistrations,
};