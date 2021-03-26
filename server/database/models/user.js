const bcrypt = require('bcrypt');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    validPassword = password => {
      if (password === this.password) return true;
      // return bcrypt.compareSync(password, this.password);
    }
  };

  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    addressline1: DataTypes.STRING,
    addressline2: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    occupation: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize:sequelize,
    modelName: 'User',
  }, {
    hooks: {
      beforeCreate: user => {
        return bcrypt.genSaltSync()
        .then( salt => {
          user.password = bcrypt.hashSync(user.password, salt);
        })
        .catch(err => console.log(err));
      },
    }
  });

  sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(err => console.log('This error occured', err));

  return User;
};