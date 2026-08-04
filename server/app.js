const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const applicationRoutes = require("./routes/applicationRoutes");
const courseRegistrationRoutes = require("./routes/courseRegistrationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const exportRoutes = require("./routes/exportRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/applications", applicationRoutes);
app.use("/api/registrations", courseRegistrationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/export", exportRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("InternVision API Running...");
});

module.exports = app;
