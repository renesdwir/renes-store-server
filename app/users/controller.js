const User = require("./model");
const bcrypt = require("bcryptjs");
module.exports = {
  viewSignin: async (req, res) => {
    try {
      console.log("masukkkkkk");
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      res.render("./admin/users/view_signin", { alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/");
      console.log(err);
    }
  },
  actionSignIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        req.flash("alertMessage", `Incorrect Email or Password`);
        req.flash("alertStatus", "danger");
        res.redirect("/");
      }
      if (user.status === "N") {
        req.flash("alertMessage", `User Inactive`);
        req.flash("alertStatus", "danger");
        res.redirect("/");
      }
      const checkPassword = bcrypt.compare(password, user.password);
      if (!checkPassword) {
        req.flash("alertMessage", `Incorrect Email or Password`);
        req.flash("alertStatus", "danger");
        res.redirect("/");
      }
      res.redirect("/dashboard");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/");
      console.log(err);
    }
  },
};
