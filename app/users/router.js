var express = require("express");
var router = express.Router();
const {
  viewSignin,
  actionSignIn,
  //   actionCreate,
  //   viewEdit,
  //   actionEdit,
  //   actionDelete,
} = require("./controller");

/* GET home page. */
router.get("/", viewSignin);
router.post("/", actionSignIn);
// router.post("/create", actionCreate);
// router.get("/edit/:id", viewEdit);
// router.put("/edit/:id", actionEdit);
// router.delete("/delete/:id", actionDelete);

module.exports = router;
