const mongoose = require("mongoose");
const { urlDb } = require("../config");
mongoose.set("strictQuery", true);
main().catch((err) => console.log(err));

async function main() {
  console.log("tes");
  mongoose.set("useFindAndModify", true);
  await mongoose.connect(urlDb);
  console.log("Listening Database ...");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
