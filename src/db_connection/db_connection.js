const mongoose = require("mongoose");
const { mongodbURL } = require("../configs/configuration");

mongoose.set("strictQuery", true);

const databaseConnection = async () => {
  try {
    if (process.env.NODE_ENV !== "test") {
      const db_connection = await mongoose.connect(mongodbURL, {
       useNewUrlParser: true,
        useUnifiedTopology: true, 
      });
      db_connection && console.log("Database connection established");
    }
  } catch (err) {
    console.log("Error in database connection", err);
  }
};

module.exports = databaseConnection;
