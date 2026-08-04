const ExcelJS = require("exceljs");
const Application = require("../models/Application");
const CourseRegistration = require("../models/CourseRegistration");
const Payment = require("../models/Payment");

const exportApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    const registrations = await CourseRegistration.find();

    const payments = await Payment.find();

    const workbook = new ExcelJS.Workbook();
    const applicationSheet = workbook.addWorksheet("Applications");

    applicationSheet.columns = [
      { header: "Name", key: "fullName", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Duration", key: "duration", width: 15 },
      { header: "Status", key: "status", width: 15 },
    ];

    applications.forEach((application) => {
      applicationSheet.addRow({
        fullName: application.fullName,
        email: application.email,
        phone: application.phone,
        duration: application.duration,
        status: application.status,
      });
    });

    const registrationSheet =
  workbook.addWorksheet("Registrations");

registrationSheet.columns = [
  { header: "Name", key: "fullName", width: 25 },
  { header: "Email", key: "email", width: 30 },
  { header: "Phone", key: "phone", width: 18 },
  { header: "Course", key: "courseName", width: 30 },
  { header: "Amount", key: "amount", width: 15 },
];

registrations.forEach((registration) => {
  registrationSheet.addRow({
    fullName: registration.fullName,
    email: registration.email,
    phone: registration.phone,
    courseName: registration.courseName,
    amount: registration.amount,
  });
});

const paymentSheet =
  workbook.addWorksheet("Payments");

paymentSheet.columns = [
  { header: "Student", key: "fullName", width: 25 },
  { header: "Course", key: "courseName", width: 30 },
  { header: "Amount", key: "amount", width: 15 },
  { header: "Status", key: "status", width: 15 },
];

payments.forEach((payment) => {
  paymentSheet.addRow({
    fullName: payment.fullName,
    courseName: payment.courseName,
    amount: payment.amount,
    status: payment.status,
  });
});

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=applications.xlsx",
    );

    await workbook.xlsx.write(res);

    res.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  exportApplications,
};
