// Firebase SDK Config
// ============================================================= sets up Firebase authorization

const firebase = require("../../firebase/app");
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

module.exports = firebase.initializeApp(firebaseConfig);