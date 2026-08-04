const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("../config/db");
const Admin = require("../models/Admin");

connectDB();

const createAdmin = async () => {
  try {
    const existing = await Admin.findOne({
      email: "admin@internvision.com",
    });

    if (existing) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "admin@internvision.com",
      password: hashedPassword,
    });

    console.log("Admin created successfully.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();
