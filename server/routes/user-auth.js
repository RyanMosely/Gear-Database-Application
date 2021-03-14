const express = require("express");
const Users = require("../database/models/users");
const router = express.Router();
const readControllers = require('../controllers/readData');
const writeControllers = require('../controllers/writeData');


app.post("/login", (req, res) => {
  console.log(req.body);
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.get("/user", (req, res) => {})