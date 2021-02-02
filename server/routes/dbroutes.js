const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://Ryan:omegon1234@cluster0.kbzjm.mongodb.net/gda?retryWrites=true&w=majority'
const client = new MongoClient(url);

// Read Data
// const readData = router.get('/users', async (req, res) => {
//   try {
//     const data = await db.ref('/users').once('value', snapshot => {
//       return snapshot.val();
//     });
//     res.status(200).send(data);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({fail: "No Data to Read"})
//   }
//   });

// Write Data
router.post('/users', async (req, res) => {
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
    

    try {
      await client.connect();
      const db = client.db();
      const result = db.collection('gda-object').insertOne(user);
      // res.status(201).json(result);

    } catch (err) {
      console.log(err);
      res.status(500).send({fail: "Must enter information for user."})
    };
    client.close();
    res.status(201).json(result);
  });

  // exports.createUsers = createUsers;
  // exports.readData = readData;
  module.exports = router;