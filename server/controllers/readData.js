const models = require('../database/models');
const Users = models.User;

const readAllUsers = (req, res) => {
    Users.findAll()
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