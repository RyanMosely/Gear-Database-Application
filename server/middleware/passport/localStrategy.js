const models = require('../../database/models');
const Users = models.User;
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  async (email, password, done) => {
   const login = await Users.findOne({where:{ email: email }}, (err, user) => {
      console.log(login);
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({fail: "Unauthorized Error"})
    });
  }
);

module.exports = strategy;