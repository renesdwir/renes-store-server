const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const category = await Category.find();
      res.render("./admin/category/view_category", {
        category,
        alert,
        name: req.session.user.name,
        title: "Category Page",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create", {
        name: req.session.user.name,
        title: "Create Category",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;
      let category = await Category({ name });
      await category.save();

      req.flash("alertMessage", "Data Created Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
      console.log(error);
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });
      res.render("admin/category/edit", {
        category,
        name: req.session.user.name,
        title: "Edit Category",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
      console.log(error);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await Category.findOneAndUpdate({ _id: id }, { name });
      req.flash("alertMessage", "Data Edited Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
      console.log(error);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Category.findOneAndRemove({ _id: id });
      req.flash("alertMessage", "Data Deleted Successfully");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
      console.log(error);
    }
  },
};
