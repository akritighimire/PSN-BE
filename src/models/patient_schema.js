const { required } = require("joi");
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    appointmentDate: {
      type: String,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },
    
    problemDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
