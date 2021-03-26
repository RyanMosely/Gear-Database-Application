const passport = require('./index');
const models = require('../../database/models');
const Users = models.User;
const LocalStrategy = require("passport-local").Strategy;
 

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
    async (email, password, done) => {
     console.log(email);
     console.log(password);
     try {
       const user = await Users.findOne({where: { email: email }});
       console.log("Returned user from Postgres:", user);
       if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
     } catch (err) {
       console.log(err)
       if (err) {
            return done(err);
          }
     }
    });

module.exports = strategy;