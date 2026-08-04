const Application = require("../models/Application");
const CourseRegistration = require("../models/CourseRegistration");
const Payment = require("../models/Payment");

const getDashboard = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });

    const registrations = await CourseRegistration.find().sort({
      createdAt: -1,
    });

    const payments = await Payment.find().sort({ createdAt: -1 });

    const totalRevenue = payments
      .filter((payment) => payment.status === "Paid")
      .reduce((sum, payment) => sum + payment.amount, 0);

    res.json({
      success: true,
      stats: {
        applications: applications.length,
        registrations: registrations.length,
        payments: payments.length,
        revenue: totalRevenue,
      },
      applications,
      registrations,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};
