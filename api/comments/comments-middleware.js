const commentsModel = require("./comments-model");

const isContentExists = (req, res, next) => {
  const { content, location } = req.body;
  if (!content || !location) {
    res.status(400).json({ message: "required fields are missing" });
  } else {
    next();
  }
};

const isCommentIdValid = async (req, res, next) => {
  try {
    const commentEx = await commentsModel.getById(req.params.id);
    if (!commentEx) {
      res.status(400).json({ message: "comment does not exist" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { isContentExists, isCommentIdValid };
