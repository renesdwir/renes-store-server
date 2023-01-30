const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama kategori harus diisi"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", categorySchema);
