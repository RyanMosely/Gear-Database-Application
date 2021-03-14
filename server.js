const express = require("express");
// Postgres
const { Client } = require('pg');
// Change 'database' to the database we name for the app
const connectionString = process.env.DEV_DATABASE_URL || process.env.DATABASE_URL;
const app = express();

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



// Sets up the Express App
// =============================================================

// set up the Express app to handle data parsing
// =============================================================
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors({
  origin: "http://localhost:3000" // <-- client side location
}))

app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnitialized: true
}));

app.use(cookieParser("secretcode"))

// Postgres
const client = new Client({
  connectionString: connectionString
});

client.connect();

app.get('/', function (req, res, next) {
    client.query('SELECT * FROM posts where id = $1', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result);
        console.log(result);
    });
});

//------- Start routes
// Routes
// =============================================================
// const router = require('./server/routes/dbroutes');
// app.use('/api', router);


// Routes

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