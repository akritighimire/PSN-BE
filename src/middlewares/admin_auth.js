const Admin = require("../models/admin_schema");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "admin_key";
const authenticateAdmin = (req, res, next) => {
  const token = req.header("admin-token");
  if (!token || token.length == 0)
    return res
      .status(401)
      .json({ message: "please login to visit this resource" });
  const payload = jwt.verify(token, JWT_SECRET);
  const { _id } = payload;
  Admin.findById(_id)
    .then((adminData) => {
      req.admin = adminData;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { authenticateAdmin };
