const router = require("express").Router();
const UserModel = require("./users-model");
const mw = require("./users-middleware");

router.get("/", async (req, res, next) => {
  const users = await UserModel.getAllUsers();
  res.status(200).json(users);
});
router.get("/:id", mw.checkUserId, async (req, res, next) => {
  try {
    const user = await UserModel.getById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", mw.checkUserId, async (req, res, next) => {
  try {
    await UserModel.deleteUser(req.params.id);
    res
      .status(200)
      .json({ message: `id'si ${req.params.id} olan kullanıcı silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", mw.checkUserId, mw.checkName, async (req, res, next) => {
  try {
    const userUpdate = await UserModel.updateUser(req.body, req.params.id);
    res.status(200).json(userUpdate);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
