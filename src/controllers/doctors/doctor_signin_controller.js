const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // For hashing passwords
const JWT_SECRET = "user_key";

const doctorSignIn = (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Invalid username" });
      }

      // Compare the password with the hashed password in the database
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid password" });
        }

        // If credentials are valid, issue a JWT token
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
          expiresIn: "1h",
        });

        // Return the token to the client
        res.json({ message: "Login successful", token });
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
};

module.exports = doctorSignIn;
