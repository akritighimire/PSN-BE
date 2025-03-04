const express = require("express");
const router = express.Router();

const AppointmentForm = require("../controllers/website/appointment_controller.js")

router.post("/appointment", AppointmentForm);

module.exports = router;