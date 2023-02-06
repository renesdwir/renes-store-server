const mongoose = require("mongoose");

let bankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    bankName: {
      type: String,
      require: [true, "Bank Name is required"],
    },
    noRekening: {
      type: String,
      require: [true, "Rekening is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Bank", bankSchema);
