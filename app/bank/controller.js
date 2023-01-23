const Bank = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const bank = await Bank.find();
      res.render("./admin/bank/view_bank", { bank, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/bank/create");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { userAccount, bankName, noRekening } = req.body;
      let bank = await Bank({
        userAccount,
        bankName,
        noRekening,
      });
      await bank.save();

      req.flash("alertMessage", "Data Created Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
      console.log(error);
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const bank = await Bank.findOne({ _id: id });
      res.render("admin/bank/edit", { bank });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
      console.log(error);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { userAccount, bankName, noRekening } = req.body;
      await Bank.findOneAndUpdate(
        { _id: id },
        { userAccount, bankName, noRekening }
      );
      req.flash("alertMessage", "Data Edited Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
      console.log(error);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Bank.findOneAndRemove({ _id: id });
      req.flash("alertMessage", "Data Deleted Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
      console.log(error);
    }
  },
};
