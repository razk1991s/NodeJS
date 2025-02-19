const express = require("express");
const usersService = require("../services/usersService");
const jwt = require("jsonwebtoken");

const Users = require("../models/userModel");

const router = express.Router();

const SECRET_KEY = "mySuperSecretKey";

//this routers includeed DB and WS
// Entry Point: http://localhost:3000/users

router.get("/usersDB", async (req, res) => {
  try {
    const body = req.query;
    const users = await usersService.getAllUsers(body);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/usersDB/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/usersDB", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await usersService.addUser(userData);
    res.status(201).send(`The new ID: ${newUser._id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/usersWS", async (req, res) => {
  try {
    const users = await usersService.getAllUsersWS();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

//need to add a json file the reduce every single action
router.post("/login", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const user = await Users.findOne({ fullName: name });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userName: name, myEmail: email, actionsLeft: user.numOfActions },
      SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.json({ token, name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
