const User = require("../models/userModel");

const getAllUsers = (body) => {
  return User.find(body);
};

const getUserById = (id) => {
  return User.findById(id);
};

const addUser = (obj) => {
  const newUser = new User(obj);
  return newUser.save();
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
