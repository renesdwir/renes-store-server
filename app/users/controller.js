const User = require("./model");
const bcrypt = require("bcryptjs");
module.exports = {
  viewSignin: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      if (req.session.user === null || req.session.user === undefined) {
        res.render("./admin/users/view_signin", { alert });
      } else {
        res.redirect("/dashboard");
      }
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
      if (!email || !password) {
        req.flash("alertMessage", `Email and password undefined`);
        req.flash("alertStatus", "danger");
        res.redirect("/");
      } else {
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
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
          req.flash("alertMessage", `Incorrect Email or Password`);
          req.flash("alertStatus", "danger");
          res.redirect("/");
        } else {
          req.session.user = {
            id: user._id,
            email: user.email,
            status: user.status,
            name: user.name,
          };
          res.redirect("/dashboard");
        }
      }
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/");
      console.log(err);
    }
  },
};
