const mongoose = require("mongoose");

const jrrmDoctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    workingPlace: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    nmcNumber: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const JrrmDoctor = mongoose.model("jrrmDoctor", jrrmDoctorSchema);

module.exports = JrrmDoctor;
