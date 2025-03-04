const express = require("express");
const router = express.Router();
const upload = require("../helper/file_helper");

const {
  addDoctor,
  getDoctors,
  searchDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/jrrm/jrrm_doctor_controller");

// Route to add a new doctor
router.post("/doctors", upload.single("photo"), addDoctor);

// Route to get all doctors
router.get("/doctors", getDoctors);

// Route to search for a doctor by fullName or nmcNumber
router.get("/doctors/search", searchDoctor);

// Route to update a doctor by ID
router.put("/doctors/:id", updateDoctor);

// Route to delete a doctor by ID
router.delete("/doctors/:id", deleteDoctor);

module.exports = router;
