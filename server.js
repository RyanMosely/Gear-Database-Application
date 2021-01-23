const express = require("express");
const app = express();

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

// Firebase SDK
// =============================================================

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAhx1kN7KqwqIMH5Evj7ZfCrghDaQvdX8o",
  authDomain: "omegon-gda-default-rtdb.firebaseapp.com",
  databaseURL: "https://omegon-gda-default-rtdb.firebaseio.com",
  projectId: "omegon-gda-default-rtdb",
  storageBucket: "omegon-gda-default-rtdb.appspot.com",
  messagingSenderId: "827718843519",
  appId: "1:827718843519:web:07f06f36407e063135934a",
  // measurementId: "G-MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

//------- Start routes
// Routes
// =============================================================

app.use('./server/routes/dbroutes.js');
// import routes to the app.js.
// Routes
//------- End routes

app.get("*", (req, res) => {
  const rootHtmlPath = path.resolve("./client/public", "index.html");
  res.sendFile(rootHtmlPath);
});

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});

module.exports = app;