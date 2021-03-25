const passport = require('./index');
const models = require('../../database/models');
const Users = models.User;
const LocalStrategy = require("passport-local").Strategy;
 

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
    (email, password, done) => {
     console.log(email);
     console.log(password);
        Users.findOne({where: { email: email }})
        .then((user, err) => {
          console.log(user);
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "Incorrect email" });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: "Incorrect password" });
          }
          return done(null, user);
        })
        .catch(err => console.log(err));
    });

module.exports = strategy;