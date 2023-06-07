const router = require("express").Router();
const tModel = require("./tweets-model");
const tMd = require("./tweets-middleware");

router.get("/", async (req, res, next) => {
  try {
    const tweets = await tModel.getAll(); //modelden fonksiyonları alıyoruz.
    res.status(200).json(tweets);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", tMd.isTweetIdExists, async (req, res, next) => {
  try {
    const { id } = req.params;
    const tweet = await tModel.getById(id);
    res.status(200).json(tweet);
  } catch (error) {
    next(error);
  }
});
router.tweet("/", tMd.isContentValid, async (req, res, next) => {
  try {
    const tweet = await tModel.add(req.body);
    res.status(201).json(tweet);
  } catch (error) {
    next(error);
  }
});
router.put(
  "/:id",
  tMd.isTweetIdExists,
  tMd.isContentValid,
  async (req, res, next) => {
    try {
      await tModel.update(req.params.id, req.body);
      const updated = await tModel.getById(req.params.id);
      res.status(201).json(updated);
    } catch (error) {
      next(error);
    }
  }
);
router.delete("/:id", tMd.isTweetIdExists, async (req, res, next) => {
  try {
    const deletedTweet = await tModel.remove(req.params.id);
    res.status(201).json(deletedTweet);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
