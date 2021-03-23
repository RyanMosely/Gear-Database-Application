const express = require("express");
const User = require('../database/models').User;
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

router.post("/register", (req, res) => {
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
  User.findOne({where: { email: req.body.email }}, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the email: ${email}`,
      });
    } else {
      const newUser = new User({
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
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  })
  .catch(err => console.log(err));
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