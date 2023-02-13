const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HASH_ROUND = 10;

let playerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is required"],
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
    username: {
      type: String,
      require: [true, "Username is required"],
      maxlength: [
        225,
        "username length must be greater than 3 character and  smaller than 225 character",
      ],
      minlength: [
        3,
        "username length must be greater than 3 character and  smaller than 225 character",
      ],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      maxlength: [
        225,
        "username length must be greater than 3 character and  smaller than 225 character",
      ],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Phone Number is required"],
      maxlength: [
        13,
        "username length must be greater than 9 character and  smaller than 13 character",
      ],
      minlength: [
        9,
        "username length must be greater than 9 character and  smaller than 13 character",
      ],
    },
    favorite: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);
playerSchema.path("email").validate(
  async (value) => {
    try {
      console.log(value);
      const count = await this.model("Player").countDocuments({ email: value });
      return !count;
    } catch (error) {
      throw error;
    }
  },
  (attr) => `${value} already used`
);
playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});
module.exports = mongoose.model("Player", playerSchema);
