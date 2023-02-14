const Player = require("../player/model");
module.exports = {
  signUp: async (req, res, next) => {
    try {
      const payload = req.body;
      if (req.file) {
        console.log("1");
      } else {
        let player = new Player(payload);
        await player.save();
        delete player._doc.password;
        res.status(201).json({ data: player });
      }
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
