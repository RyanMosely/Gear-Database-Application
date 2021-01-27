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

// Read Data
router.get('/users', async (req, res) => {
  try {
    const data = await db.ref('/users').once('value', snapshot => {
      return snapshot.val();
    });
    res.status(200).send(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({fail: "No Data to Read"})
  }
  });

// Write Data
router.post('/users', async (req, res) => {
  try {
    const user = await db.ref('/users/0/ownerOperator').push({
      address: req.body.address,
      email: req.body.email,
      gearForRent: {
        truckTypes: req.body.gearForRent.truckTypes,
        equipment: req.body.gearForRent.equipment
      },
      id: req.body.id,
      isOwnerOp: req.body.isOwnerOp,
      name: req.body.name,
      occupation: req.body.occupation,
      phoneNumber: req.body.phoneNumber
    });
    res.status(201).json(user);
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({fail: "Must enter information for user."})
  }
  });

  module.exports = router;