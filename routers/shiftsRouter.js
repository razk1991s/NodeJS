const express = require("express");
const shiftsService = require("../services/shiftsService");

const router = express.Router();

// Entry Point: http://localhost:3000/shifts

// Get all Shifts
router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const shifts = await shiftsService.getAllShifts(filters);
    res.send(shifts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Shift by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shift = await shiftsService.getShiftById(id);
    res.send(shift);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new Shift
router.post("/", async (req, res) => {
  try {
    const shiftData = req.body;
    const newShift = await shiftsService.addShift(shiftData);
    res.status(201).send(`The new ID: ${newShift._id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a Shift
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shiftData = req.body;
    const result = await shiftsService.updateShift(id, shiftData);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
