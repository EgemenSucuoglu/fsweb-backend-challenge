const router = require("express").Router();
const User = require("../users/users-model");
const { JWT_SECRET } = require("../../config/config");
const jwt = require("jsonwebtoken");
const mw = require("./auth-middleware");
const bcrypt = require("bcryptjs");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "auth working" });
});

router.post(
  "/register",
  mw.payLoadCheck,
  mw.checkNameEmail,
  async (req, res, next) => {
    try {
      const newUserObject = {
        name: req.body.username,
        email: req.body.email,
        password: req.encPassword,
      };
      let insertedUser = await User.addUser(newUserObject);
      res.status(201).json(insertedUser);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/login",
  mw.payLoadCheckLogin,
  mw.passwordCheck,
  async (req, res, next) => {
    try {
      const token = jwt.sign(
        {
          name: req.user.username,
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.status(200).json({
        message: `welcome ${req.user.username}`,
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
