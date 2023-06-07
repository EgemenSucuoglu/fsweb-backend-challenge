const tweetsModel = require("./tweets-model");

const isContentValid = (req, res, next) => {
  const { title, content, location } = req.body;
  if (
    !title ||
    !content ||
    !location ||
    title.length > 54 ||
    content.length > 300
  ) {
    res.status(400).json({ message: "Required fields are empty" });
  } else {
    next();
  }
};

const isTweetIdExists = async (req, res, next) => {
  try {
    const result = await tweetsModel.getById(req.params.id);
    if (!result) {
      res
        .status(400)
        .json({ message: "there is no tweet matching your criteria" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { isContentValid, isTweetIdExists };
