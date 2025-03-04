const express = require("express");
const router = express.Router();
const doctorSignIn = require("../controllers/doctors/doctor_signin_controller");
const doctorSignup = require("../controllers/doctors/doctor_signup_controller");

router.post("/signin", doctorSignIn);
router.post("/signup", doctorSignup);

module.exports = router;

