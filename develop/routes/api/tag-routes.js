const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({ include: Product });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: Product,
    });
    if (!tag) {
      res.status(404).json({ message: "Tag not found!" });
      return;
    }
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update({ where: { id: req.params.id } });
    if (!tag) {
      res.status(404).json({ message: "Tag not found!" });
      return;
    }
    res.status(200).json(tag);
  } catch (err0r) {
    res.status(500).json(error);
  }
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({ where: { id: req.params.id } });
    if (!tag) {
      res.status(404).json({ message: "Tag not found!" });
      return;
    }
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
