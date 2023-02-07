const mongoose = require("mongoose");

let transactionSchema = new mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Game name is required"] },
      category: { type: String, require: [true, "Category is required"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "Coin name is required"] },
      coinQuantity: {
        type: String,
        require: [true, "Coin Quantity is required"],
      },
      price: { type: Number },
    },
    historyPayment: {
      name: { type: String, require: [true, "Name is required"] },
      type: { type: String, require: [true, "Payment type is required"] },
      bankName: { type: String, require: [true, "Bank Name is required"] },
      noRekening: { type: String, require: [true, "Rekening No is required"] },
    },
    name: {
      type: String,
      require: [true, "Name is required"],
      maxlength: [
        225,
        "Name length must be greater than 3 character and  smaller than 225 character",
      ],
      minlength: [
        3,
        "Name length must be greater than 3 character and  smaller than 225 character",
      ],
    },
    accountUser: {
      type: String,
      require: [true, "Account user is required"],
      maxlength: [
        225,
        "Name length must be greater than 3 character and  smaller than 225 character",
      ],
      minlength: [
        3,
        "Name length must be greater than 3 character and  smaller than 225 character",
      ],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Player Name is required"] },
      phoneNumber: {
        type: Number,
        require: [true, "Account user is required"],
        maxlength: [
          13,
          "Name length must be greater than 3 character and  smaller than 13 character",
        ],
        minlength: [
          3,
          "Name length must be greater than 3 character and  smaller than 13 character",
        ],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Transaction", transactionSchema);
