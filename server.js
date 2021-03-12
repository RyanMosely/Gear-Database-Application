const express = require("express");
// Postgres
const { Client } = require('pg');
// Change 'database' to the database we name for the app
const connectionString = 'postgres://postgres:Finally08@localhost:5432/test1';
const app = express();
const mongoose = require("mongoose");

// Dependencies
// =============================================================
const path = require("path");
const port = process.env.PORT || 3001;

// Sets up the Express App
// =============================================================

// set up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongoose/Mongo
// const url = 'mongodb+srv://Ryan:omegon1234@cluster0.kbzjm.mongodb.net/gda?retryWrites=true&w=majority';
// try {
//   mongoose.connect(process.env.MONGODB_URI || url,
//     {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//     }, 
//     () => console.log("Mongoose is connected."));
// } catch (error) {
//   console.error(error);
//   console.log("Could not connect Mongoose."); 
// }

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


// app.get("*", (req, res) => {
//   // const rootHtmlPath = path.resolve("./client/public", "index.html");
//   // res.sendFile(rootHtmlPath);
//   res.sendFile(__dirname + "/client/public/index.html");
// });

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