var express = require("express");
var router = express.Router();
const {
  viewSignin,
  actionSignIn,
  actionLogout,
  signUp,
} = require("./controller");
/* GET home page. */
router.get("/", viewSignin);
router.post("/", actionSignIn);
router.get("/logout", actionLogout);
router.post("/signupuser", signUp);

module.exports = router;
