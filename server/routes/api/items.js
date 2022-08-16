const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Item = require("../../models/Item");






router.get("/", (req, res) => {
  console.log('here')
  Item.find().then((items) => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    product: req.body.product,
    cls: req.body.cls,
    Price: req.body.Price,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
