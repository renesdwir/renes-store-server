module.exports = {
  isLoginAdmin: (req, res, next) => {
    if (req.session.user === null || req.session.user === undefined) {
      req.flash(
        "alertMessage",
        `Sorry, your session has run out, please login`
      );
      req.flash("alertStatus", "danger");
      res.redirect("/");
    } else next();
  },
  isLoginPlayer: (req, res, next) => {
    try {
      const token = req.header.authorization;
    } catch (error) {
      res.status(401).json({
        error: "Not authorize to access this resource",
      });
    }
  },
};
