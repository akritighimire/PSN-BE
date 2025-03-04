const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    reset_token: {
      data: String,
      // default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
