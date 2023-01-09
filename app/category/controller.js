const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      console.log("test masuk");
      res.render("./admin/category/view_category");
    } catch (err) {
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create");
    } catch (error) {
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;
      let category = await Category({ name });
      await category.save();
      res.redirect("/category");
    } catch (error) {
      console.log(error);
    }
  },
};
