var express = require("express");
var router = express.Router();
const {
  viewSignin,
  //   viewCreate,
  //   actionCreate,
  //   viewEdit,
  //   actionEdit,
  //   actionDelete,
} = require("./controller");

/* GET home page. */
router.get("/", viewSignin);
// router.get("/create", viewCreate);
// router.post("/create", actionCreate);
// router.get("/edit/:id", viewEdit);
// router.put("/edit/:id", actionEdit);
// router.delete("/delete/:id", actionDelete);

module.exports = router;
