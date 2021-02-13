const Users = require("../database/models/users");

const readAllUsers = (req, res) => {
    Users.find({})
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(404).json(err);
    });
};

module.exports = {
    readAllUsers: readAllUsers
};