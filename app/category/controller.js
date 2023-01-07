module.exports = {
  index: async (req, res) => {
    try {
      console.log("test masuk");
      res.render("./admin/category/view_category");
    } catch (err) {
      console.log(err);
    }
  },
};
