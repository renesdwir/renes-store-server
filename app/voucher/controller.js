const Voucher = require("./model");
const Category = require("../category/model");
const Nominal = require("../nominal/model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const voucher = await Voucher.find();
      res.render("./admin/voucher/view_voucher", { voucher, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      const category = await Category.find();
      const nominal = await Nominal.find();
      console.log(nominal);
      res.render("admin/voucher/create", { category, nominal });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
      console.log(error);
    }
  },
  //   actionCreate: async (req, res) => {
  //     try {
  //       const { coinName, coinQty, coinPrice } = req.body;
  //       let nominal = await Nominal({
  //         coinName,
  //         coinQuantity: coinQty,
  //         price: coinPrice,
  //       });
  //       await nominal.save();

  //       req.flash("alertMessage", "Data Created Successfully");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/nominal");
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //       console.log(error);
  //     }
  //   },
  //   viewEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const nominal = await Nominal.findOne({ _id: id });
  //       console.log(nominal);
  //       res.render("admin/nominal/edit", { nominal });
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //       console.log(error);
  //     }
  //   },
  //   actionEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const { coinName, coinQty, coinPrice } = req.body;
  //       await Nominal.findOneAndUpdate(
  //         { _id: id },
  //         { coinName, coinQuantity: coinQty, price: coinPrice }
  //       );
  //       req.flash("alertMessage", "Data Edited Successfully");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/nominal");
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //       console.log(error);
  //     }
  //   },
  //   actionDelete: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       await Nominal.findOneAndRemove({ _id: id });
  //       req.flash("alertMessage", "Data Deleted Successfully");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/nominal");
  //     } catch (error) {
  //       req.flash("alertMessage", `${error.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //       console.log(error);
  //     }
  //   },
};
