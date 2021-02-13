const Users = require("../database/models/users");

const createNewUser = ({body}, res) => {
    Users.create(body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(404).json(err);
    });
  };

module.exports = {
    createNewUser: createNewUser
};