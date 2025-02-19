const Shift = require("../models/shiftModel");

// Get All
const getAllShifts = (filters) => {
  return Shift.find(filters);
};

// Get By ID
const getShiftById = (id) => {
  return Shift.findById(id);
};

// Create
const addShift = (obj) => {
  const shift = new Shift(obj);
  return shift.save();
};

// Update
const updateShift = (id, obj) => {
  return Shift.findByIdAndUpdate(id, obj);
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
};
