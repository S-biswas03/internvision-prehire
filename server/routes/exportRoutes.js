const protect = require("../middleware/authMiddleware");
const express = require("express");

const { exportApplications } = require("../controllers/exportController");

const router = express.Router();

router.get("/", protect, exportApplications);

module.exports = router;
