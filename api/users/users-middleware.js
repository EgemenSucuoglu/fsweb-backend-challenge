const UserModel = require("./users-model");

const checkUserId = async function (req, res, next) {
  try {
    const isExist = await UserModel.findById(req.params.id);
    if (!isExist) {
      res.status(404).json({ message: `id bulunamadı` });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkName = async function (req, res, next) {
  try {
    const { username } = req.body;
    let nameControl = await UserModel.findByFilter({ username: username });
    if (nameControl) {
      res.status(401).json({
        message:
          "Kullanıcı adı daha önceden alınmış, lütfen yeni bir kullanıcı adı deneyin.",
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  checkUserId,
  checkName,
};
