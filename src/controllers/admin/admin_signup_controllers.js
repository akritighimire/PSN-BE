// const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../../models/admin_schema");

const adminSignUp = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body; // yo chai line no 43 ko pachadi ko

    let errors = [];

    if (!fullName || !email || !password || !confirmPassword) {
      errors.push({ message: "Please enter all the required fields" });
    }

    if (password !== confirmPassword) {
      errors.push({ message: "Passwords do not match" });
    }

    if (password.length < 6) {
      errors.push({ message: "Password must be at least 6 characters" });
    }

    if (errors.length > 0) {
      return res.status(201).json({ errors: errors });
    }

    const existingUsers = await Admin.find();

    // const role = existingUsers.length > 0 ? "user" : "admin";

    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      errors.push({ message: "user already exists" });
      return res.status(200).json({ errors: errors });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    // console.log(hashedPassword);

    const newAdmin = new Admin({
      fullName: fullname,
      email,
      password: hashedPassword,
      resetToken: "",
    });

    await newAdmin.save();

    return res
      .status(200)
      .json({ message: "User has been saved successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = adminSignUp;
