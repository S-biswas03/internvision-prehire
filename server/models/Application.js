const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    college: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    currentYear: {
      type: String,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      enum: ["1 Month", "3 Months", "6 Months"],
      required: true,
    },

    reason: {
      type: String,
    },

    resume: {
      type: String,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Application", applicationSchema);
