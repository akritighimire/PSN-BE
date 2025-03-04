const express = require("express");
const adminSignIn = require("../controllers/admin/admin_signin_controller");
const adminSignUp = require("../controllers/admin/admin_signup_controllers");
const router = express.Router();

router.post("/signup", adminSignUp);
router.post("/signin", adminSignIn);


module.exports = router;