const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userID: Number,
    fullName: String,
    numOfActions: Number,
  },
  { versionKey: false }
);

const user = mongoose.model("user", userSchema, "users");

module.exports = user;
