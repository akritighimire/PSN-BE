const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin_schema");


const JWT_SECRET = "admin_key";

const adminSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(201)
        .json({ error: "please enter all the required fields" });
    }

    const isUserExists = await Admin.findOne({ email: email });
    if (!isUserExists) {
      return res.status(201).json({
        error: "email or password may be invalid, please try again",
      });
    } else {
      const isPasswordMatched = await bcrypt.compare(
        password,
        isUserExists.password
      );

      if (!isPasswordMatched) {
        return res.status(201).json({
          error: "email or password may be invalid, please try again",
        });
      } else {
        const token = jwt.sign(
          {
            _id: isUserExists._id,
          },
          JWT_SECRET
        );

        //store token in session object_
        // req.session = {
        //   user_jwt: token,
        // };

        const { fullName, email, role } = isUserExists;
        res.status(200).json({
          token,
          role,
          user: { fullName, email },
          message: "login successfull.",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminSignIn;
