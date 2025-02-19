const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    deparmentID: Number,
  },
  { versionKey: false }
);

const employee = mongoose.model("employee", employeeSchema, "employees");

module.exports = employee;
