const express = require("express");
const departmentsService = require("../services/departmentsService");

const router = express.Router();

// Entry Point: http://localhost:3000/departments

// Get all Departments
router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const departments = await departmentsService.getAllDepartments(filters);
    res.send(departments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Department by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const department = await departmentsService.getDepartmentById(id);
    res.send(department);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new Department
router.post("/", async (req, res) => {
  try {
    const perData = req.body;
    const newPer = await departmentsService.addDepartment(perData);
    res.status(201).send(`The new ID: ${newPer._id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a Department
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const perData = req.body;
    const result = await departmentsService.updateDepartment(id, perData);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a Department
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPer = await departmentsService.deleteDepartment(id);
    res.send(deletedPer);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
