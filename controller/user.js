const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class userController {
  static async createUser(req, res) {
    await bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
      if (err) {
        res.json({ error: err });
      }
      const user = User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      })
      .then(user => {
          res.json ({
              'user added': user
          })
      })
      .catch(error => {
          res.json ({
              message: 'error'
          })
      })
    });
  }

  static async getAllUser(req, res) {
    const user = await User.find();
    res.status(200);
    res.send({ result: user });
  }

  static async deleteUser(req, res) {
    const user = await User.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200);
    res.send({ "user deteled": user });
  }
}

module.exports = userController;
