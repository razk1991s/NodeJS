const shiftsRepo = require("../repositories/shiftsRepo");

const getAllShifts = (filters) => {
  return shiftsRepo.getAllShifts(filters);
};

const getShiftById = (id) => {
  return shiftsRepo.getShiftById(id);
};

const addShift = (obj) => {
  return shiftsRepo.addShift(obj);
};

const updateShift = (id, obj) => {
  return shiftsRepo.updateShift(id, obj);
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
};
