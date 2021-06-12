const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({ include: Product });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });
    if (!category) {
      res.status(404).json({ message: "Category not found!" });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update({ where: { id: req.params.id } });
    if (!category) {
      res.status(404).json({ message: "Category not found!" });
      return;
    }
    res.status(200).json(category);
  } catch (err0r) {
    res.status(500).json(error);
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({ where: { id: req.params.id } });
    if (!category) {
      res.status(404).json({ message: "Category not found!" });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
