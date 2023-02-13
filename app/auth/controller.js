const Player = require("../player/model");
module.exports = {
  signUp: async (req, res, next) => {
    try {
      const payload = req.body;
      res.status(201).json({
        message: payload,
      });
    } catch (error) {
      if (error && error.name === "ValidationError") {
        return res.status(422).json({
          error: 1,
          message: error.message,
          fields: error.errors,
        });
      }
      next(error);
    }
  },
};
