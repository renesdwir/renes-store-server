const Nominal = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const nominal = await Nominal.find();
      res.render("./admin/nominal/view_nominal", { nominal, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/nominal/create");
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
      let nominal = await Nominal({ coinName, coinQty, coinPrice });
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
  //   viewEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const category = await Category.findOne({ _id: id });
  //       res.render("admin/category/edit", { category });
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/category");
  //       console.log(error);
  //     }
  //   },
  //   actionEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const { name } = req.body;
  //       await Category.findOneAndUpdate({ _id: id }, { name });
  //       req.flash("alertMessage", "Data Edited Successfully");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/category");
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/category");
  //       console.log(error);
  //     }
  //   },
  //   actionDelete: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       await Category.findOneAndRemove({ _id: id });
  //       req.flash("alertMessage", "Data Deleted Successfully");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/category");
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/category");
  //       console.log(error);
  //     }
  //   },
};
