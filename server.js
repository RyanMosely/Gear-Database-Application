const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Dependencies
// =============================================================
const path = require("path");
const port = process.env.PORT || 3001;
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require('body-parser');



// Sets up the Express App
// =============================================================

// set up the Express app to handle data parsing
// =============================================================
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:3000" // <-- client side location
}))

app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnitialized: true
}));

app.use(cookieParser("secretcode"))

// Mongoose/Mongo
const url = 'mongodb+srv://Ryan:omegon1234@cluster0.kbzjm.mongodb.net/gda?retryWrites=true&w=majority';
try {
  mongoose.connect(process.env.MONGODB_URI || url,
    {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    }, 
    () => console.log("Mongoose is connected."));
} catch (error) {
  console.error(error);
  console.log("Could not connect Mongoose."); 
}


//------- Start routes
// Routes
// =============================================================
const router = require('./server/routes/dbroutes');
const userAuth = require('./server/routes/user-auth');
app.use('/api', router);


// Routes

app.get("*", (req, res) => {
  // const rootHtmlPath = path.resolve("./client/public", "index.html");
  // res.sendFile(rootHtmlPath);
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

// app.get("*", (req, res) => {
//   // const rootHtmlPath = path.resolve("./client/public", "index.html");
//   // res.sendFile(rootHtmlPath);
//   res.sendFile(__dirname + "/client/public/index.html");
// });



//------- End routes



// Error Middleware
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      error: {
          message: err.message
      }
  })
})


app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});


module.exports = app;