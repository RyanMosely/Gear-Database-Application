const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../../database/models/user");

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log("*** serializeUser called, user: ");
  console.log(user); // the whole raw user object!
  console.log("---------");
  done(null, { email: user.email });
});

// user object attaches to the request as req.user
passport.deserializeUser((email, done) => {
  console.log("DeserializeUser called");
  User.findOne({ email: email }, "email", (err, user) => {
    console.log("*** Deserialize user, email:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;