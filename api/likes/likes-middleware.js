const likesModel = require("./likes-model");

const isLikeExists = async (req, res, next) => {
  try {
    const result = await likesModel.getById(req.params.id);
    if (!result) {
      res.status(400).json({ message: "like doesn't exists" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
const isLikeNotValid = async (req, res, next) => {
  try {
    const result = await likesModel.getById(req, params.id);
    if (result) {
      res.status(400).json({ message: "like already exists" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { isLikeNotValid, isLikeExists };
