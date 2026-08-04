const protect = require("../middleware/authMiddleware");

const express = require("express");

const { getDashboard } = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", protect, getDashboard);

module.exports = router;
