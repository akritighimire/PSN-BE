const Doctor = require("../models/doctor_schema");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "doctor_key";
const authenticateDoctor = (req, res, next, error) => {
  const token = req.header("doctor-token");
  if (!token || token.length == 0)
    return res.status(401).json({ message: "please login" });
  const payload = jwt.verify(token, JWT_SECRET);
  const { _id } = payload;
  Doctor.findById(_id)
  .then((doctorData) => {
    req.doctor = doctorData;
    next();
  })
  .catch((err) => {
    console.log(err);
  });
};

export { authenticateDoctor };
