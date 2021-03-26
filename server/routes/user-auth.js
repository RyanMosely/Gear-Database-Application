const express = require("express");
const models = require('../database/models');
const Users = models.User;
const router = express.Router();
// const readControllers = require('../controllers/readData');
// const writeControllers = require('../controllers/writeData');
const passport = require("../middleware/passport");


router.post("/login", (req, res, next) => {
  console.log("routes/user.js, login, req.body: ");
  console.log(req.body);
  next();
},
passport.authenticate("local"),
(req, res) => {
  console.log("logged in", req.user);
  const userInfo = {
    email: req.user.email,
  };
  res.send(userInfo);
});

router.post("/register", async (req, res) => {
  console.log("user signup");

  const { 
    firstname,
    lastname,
    email,
    phonenumber,
    addressline1,
    addressline2,
    city,
    country,
    state,
    zipcode,
    occupation,
    password } = req.body;

  // ADD VALIDATION
  try {
      const user = await Users.findOne({where: { email: email }});
      if (user) { 
        res.json({error: `Sorry, already a user with the email: ${email}`});
      } else {
          const newUser = await Users.create({
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            addressline1: addressline1,
            addressline2: addressline2,
            city: city,
            country: country,
            state: state,
            zipcode: zipcode,
            occupation: occupation,
          });
          console.log("This is from Postgres:", newUser);
          res.status(201).json(newUser);
      }
  } catch (err) {
    console.log("User.js post error: ", err);
    if (err) return res.status(500).send({fail: err});
    console.log(err);
    res.status(500).send({fail: "Must enter information for user."})
  };
});

// router.get("/user", (req, res) => {})

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;