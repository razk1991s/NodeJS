const employeesRepo = require("../repositories/employeesRepo");

const getAllEmployees = (filters) => {
  return employeesRepo.getAllEmployees(filters);
};

const getEmployeeById = (id) => {
  return employeesRepo.getEmployeeById(id);
};

const addEmployee = (obj) => {
  return employeesRepo.addEmployee(obj);
};

const updateEmployee = (id, obj) => {
  return employeesRepo.updateEmployee(id, obj);
};

const deleteEmployee = (id) => {
  return employeesRepo.deleteEmployee(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
