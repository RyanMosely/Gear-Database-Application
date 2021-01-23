const express = require("express");
const router = express.Router();
const database = firebase.database();

router.get('/api/users', (req, res) => {
    const data = database.ref('/users/').once('value').then((snapshot) => {
        const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      });
    res.send(data);
  });

  module.exports = router;