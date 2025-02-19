const departmentsRepo = require("../repositories/departmentsRepo");

const getAllDepartments = (filters) => {
  return departmentsRepo.getAllDepartments(filters);
};

const getDepartmentById = (id) => {
  return departmentsRepo.getDepartmentById(id);
};

const addDepartment = (obj) => {
  return departmentsRepo.addDepartment(obj);
};

const updateDepartment = (id, obj) => {
  return departmentsRepo.updateDepartment(id, obj);
};

const deleteDepartment = (id) => {
  return departmentsRepo.deleteDepartment(id);
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
