const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gear = require('./gear');

const usersSchema = new Schema(
    {
      firstName: {
        type: String,
        trim: true,
        required: "Enter a first name for the User."
      },
      lastName: {
        type: String,
        trim: true,
        required: "Enter a last name for the User."
      },
      address: {
        type: String,
        required: "Enter an address for the User."
      },
      email: {
        type: String,
        trim: true,
        required: "Enter an email for the User."
      },
      isOwnerOp: {
        type: Boolean,
        required: "Please say if you are an Owner or Renter."
      },
      gear: {
          type: Schema.Types.Mixed, 
          ref: 'Gear'
        },
      occupation: {
        type: String,
        trim: true,
        required: "Enter an occupation for the User."
      },
      phoneNumber: {
        type: String,
        trim: true,
        required: "Enter a phone number for the User."
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  );
  
  const Users = mongoose.model("Users", usersSchema);
  
  module.exports = Users;