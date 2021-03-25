'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        }
      },
      phonenumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressline1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressline2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
        }
      },
      occupation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
        }
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, 
    // {
    //   hooks: {
    //     beforeCreate: async user => {
    //       const salt = await bcrypt.genSaltSync();
    //       user.password = await bcrypt.hashSync(user.password, salt);
    //     },
    //     validPassword: async password => {
    //       return await bcrypt.compareSync(password, this.password);
    //     }
    //   } 
    // }
    );
  },
  // down: async (queryInterface, Sequelize) => {
  //   await queryInterface.dropTable('Users');
  // }
};