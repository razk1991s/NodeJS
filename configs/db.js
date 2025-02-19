const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/razProject")
    .then(() => console.log("connected to razProject"))
    .catch(console.log);
};

module.exports = connectDB;
