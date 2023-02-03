const Nominal = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const nominal = await Nominal.find();
      res.render("./admin/nominal/view_nominal", {
        nominal,
        alert,
        name: req.session.user.name,
        title: "Nominal Page",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/nominal/create", {
        name: req.session.user.name,
        title: "Create Nominal",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { coinName, coinQty, coinPrice } = req.body;
      let nominal = await Nominal({
        coinName,
        coinQuantity: coinQty,
        price: coinPrice,
      });
      await nominal.save();

      req.flash("alertMessage", "Data Created Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(error);
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const nominal = await Nominal.findOne({ _id: id });
      console.log(nominal);
      res.render("admin/nominal/edit", {
        nominal,
        name: req.session.user.name,
        title: "Edit Nominal",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(error);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { coinName, coinQty, coinPrice } = req.body;
      await Nominal.findOneAndUpdate(
        { _id: id },
        { coinName, coinQuantity: coinQty, price: coinPrice }
      );
      req.flash("alertMessage", "Data Edited Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(error);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Nominal.findOneAndRemove({ _id: id });
      req.flash("alertMessage", "Data Deleted Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(error);
    }
  },
};
