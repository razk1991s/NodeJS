const express = require("express");
const employeesService = require("../services/employeesService");

const router = express.Router();

// Entry Point: http://localhost:3000/employees

// Get all Employees
router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const employees = await employeesService.getAllEmployees(filters);
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Employee by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeesService.getEmployeeById(id);
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Employee by Deparment
router.get("/deparment/:deparment", async (req, res) => {
  try {
    const { deparment } = req.params;

    const employees = await employeesService.getEmployeeByDeparment(deparment);
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new Employee
router.post("/", async (req, res) => {
  try {
    const perData = req.body;
    const newPer = await employeesService.addEmployee(perData);
    res.status(201).send(`The new ID: ${newPer._id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a Employee
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const perData = req.body;
    const result = await employeesService.updateEmployee(id, perData);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a Employee
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPer = await employeesService.deleteEmployee(id);
    res.send(deletedPer);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
