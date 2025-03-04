const express = require("express");
const { PORT } = require("./configs/configuration");
const { json } = require("body-parser");
const expressSession = require("express-session");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const databaseConnection = require("./db_connection/db_connection");

const app = express();

databaseConnection();

require("dotenv").config();

app.set("trust proxy", true);
app.use(json());
app.use(cors());
app.use(
  expressSession({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const adminRouter = require("./routes/adminauth_route");
const doctorRouter = require("./routes/doctorauth_routes");
const jrrmDoctorRouter = require("./routes/jrrmdoctor_routes");
const userRouter = require("./routes/user_routes");


app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/jrrm", jrrmDoctorRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

app.all("*", async (req, res) => {
  return res.status(201).send({ message: "invalid routes" });
});
