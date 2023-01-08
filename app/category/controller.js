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
};
