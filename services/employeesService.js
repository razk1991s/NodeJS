const employeesRepo = require("../repositories/employeesRepo");

const getAllEmployees = (filters) => {
  return employeesRepo.getAllEmployees(filters);
};

const getEmployeeById = (id) => {
  return employeesRepo.getEmployeeById(id);
};

const getEmployeeByDeparment = async (deparment) => {
  const employees = await employeesRepo.getAllEmployees();
  const filteredEmployees = employees.filter(
    (employee) => employee.deparmentID == deparment
  );
  return filteredEmployees;
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
  getEmployeeByDeparment,
};
