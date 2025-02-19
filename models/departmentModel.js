const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema(
  {
    name: String,
    manager: Number,
  },
  { versionKey: false }
);

const department = mongoose.model(
  "department",
  departmentSchema,
  "departmentes"
);

module.exports = department;
