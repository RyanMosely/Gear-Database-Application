const express = require("express");
const app = express();
require('dotenv').config();

// Dependencies
// =============================================================
const path = require("path");
const port = process.env.PORT || 3001;
const cors = require("cors");
const passport = require("./server/middleware/passport");
const cookieParser = require("cookie-parser");
const session = require('express-session')
const flash = require("connect-flash");
const logger = require("morgan");
const sessionConfig = require("./server/config/passportSession/sessionConfig");
const user = require("./server/routes/user-auth");



// Sets up the Express App
// =============================================================

// set up the Express app to handle data parsing
// =============================================================
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger("dev"));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000" // <-- client side location
}))

// Postgres
// =============================================================
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end()
});

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect()
  .then(() => console.log("Connected to Postgres!"))
  .catch(err => console.error("Connection Error:", err.stack));

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
  })

// Passport Middleware
// =============================================================
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(session(sessionConfig))


//------- Start routes
// Routes
// =============================================================
const router = require('./server/routes/dbroutes');
app.use('/api', router);
app.use("/", user);


// Routes

app.get("*", (req, res) => {
  // const rootHtmlPath = path.resolve("./client/public", "index.html");
  // res.sendFile(rootHtmlPath);
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});



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