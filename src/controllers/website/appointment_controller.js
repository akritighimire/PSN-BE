const Patient = require("../../models/patient_schema");

const addPatient = async (req, res) => {
  try {
    const {
      appointmentDate,
      preferredTime,
      fullName,
      age,
      gender,
      address,
      email,
      phoneNumber,
      problemDescription,
    } = req.body;

    if (
      !appointmentDate ||
      !preferredTime ||
      !fullName ||
      !age ||
      !gender ||
      !address ||
      !email ||
      !phoneNumber ||
      !problemDescription
    ) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const data = new Patient({
      appointmentDate,
      preferredTime,
      fullName,
      age,
      gender,
      address,
      email,
      phoneNumber,
      problemDescription,
    });

    await data.save();
    return res.status(200).json({ message: "Form has been submitted" });
  } catch (error) {
    res.status(400).json({ message: "Error submitting form.", error });
    console.log(error);
  }
};

module.exports = addPatient;
