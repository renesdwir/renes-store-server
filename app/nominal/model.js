const mongoose = require("mongoose");

let nominalSchema = new mongoose.Schema({
  coinQuantity: {
    type: Number,
    default: 0,
  },
  coinName: {
    type: String,
    require: [true, "Coin name is required"],
  },
  price: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Nominal", nominalSchema);
