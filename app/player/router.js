var express = require("express");
var router = express.Router();
const { landingPage, detailPage, category, checkout } = require("./controller");

/* GET home page. */
router.get("/landingpage", landingPage);
router.get("/:id/detail", detailPage);
router.get("/category", category);
router.post("/checkout", checkout);

module.exports = router;
