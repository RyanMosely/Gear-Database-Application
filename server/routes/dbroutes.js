const express = require("express");
const router = express.Router();

// Firebase SDK Config
// ============================================================= sets up Firebase authorization

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

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

const db = firebase.database();

router.get('/api/users', (req, res) => {
    try {
      const data = db.ref('/users').on('value', snapshot => {
        return snapshot.val();
      });
    res.status(200).send(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({fail: "No Data to Read"})
  }
  });

  module.exports = router;