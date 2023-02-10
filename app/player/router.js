var express = require("express");
var router = express.Router();
const { landingPage } = require("./controller");

/* GET home page. */
router.get("/", landingPage);

module.exports = router;
