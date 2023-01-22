const mongoose = require("mongoose");

let bankSchema = new mongoose.Schema({
  userAccount: {
    type: String,
    require: [true, "userAccount is required"],
  },
  bankName: {
    type: String,
    require: [true, "Bank Name is required"],
  },
  noRekening: {
    type: String,
    require: [true, "Rekening is required"],
  },
});
module.exports = mongoose.model("Bank", bankSchema);
