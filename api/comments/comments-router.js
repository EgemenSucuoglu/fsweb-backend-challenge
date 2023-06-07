const router = require("express").Router();
const model = require("./comments-model");
const md = require("./comments-middleware");

router.get("/", async (req, res, next) => {
  try {
    const result = await model.getAll(); //modelden fonksiyonları alıyoruz.
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", md.isCommentIdValid, async (req, res, next) => {
  try {
    const comment = await model.getById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/", md.isContentExists, async (req, res, next) => {
  try {
    const post = await model.add(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
