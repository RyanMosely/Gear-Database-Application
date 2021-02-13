const express = require("express");
const Users = require("../database/models/users");
const router = express.Router();
const readControllers = require('../controllers/readData');
const writeControllers = require('../controllers/writeData');

// Read Data
router.get('/users', readControllers.readAllUsers);

// Write Data
router.post('/users', writeControllers.createNewUser);

// Update Data
router.put('/users/update/:username', async (req, res) => {
  const user = {
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
};

if(user.isOwnerOp = true){

  await client.connect();
  const db = client.db();
  var ObjectId = require('mongodb').ObjectId; 

  var id = '6018a889758aae2258e7d7d1';
  var o_id = new ObjectId(id);
  


    

  db.collection('gda-object').update(
    { _id : o_id},
    { $push: {"users": {
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
  }}}
)
}
  

  try {
    await client.connect();
    const db = client.db();
    db.collection('gda-object').insertOne(user);

  } catch (err) {
    console.log(err);
    res.status(500).send({fail: "Must enter information for user."})
  };
  client.close();
  res.status(201).json(user);
});

  module.exports = router;