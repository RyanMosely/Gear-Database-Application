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


//------- Start routes
// Routes
// =============================================================
// import routes to the app.js.
// Routes
//------- End routes

app.get("*", (req, res) => {
  const rootHtmlPath = path.resolve(__dirname, "..", "/client", "/public", "index.html");
  res.sendFile(rootHtmlPath);
});

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});

module.exports = app;