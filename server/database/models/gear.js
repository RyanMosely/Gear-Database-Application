const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gearSchema = new Schema(
    {
        truckTypes: [String],
        equipment: [String],
    }
  );
  
  const Gear = mongoose.model("Gear", gearSchema);
  
  module.exports = Gear;