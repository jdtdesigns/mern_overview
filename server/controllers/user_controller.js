const User = require('../models/User');

const user_controller = {
  // Register a user
  async register(req, res) {
    try {
      const user = await User.create(req.body);

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(403).send({
        message: err.message
      })
    }
  }
};

module.exports = user_controller;