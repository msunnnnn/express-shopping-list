
const express = require("express");
const app = express();

// process JSON body => req.body
app.use(express.json());
// process traditional form data => req.body
app.use(express.urlencoded({ extended: true }));

const { items } = require("./fakeDB.js");

app.get("/items", function (req, res) {
  return res.send({ items: items });
});

app.post("/items", function (req, res) {
  const newItem = {
    name: req.body.name,
    price: req.body.price
  };
  items.push(newItem);

  return res.json({ added: newItem });
});

app.get("/items/:name", function (req, res) {
  const currItemName = req.params.name;
  for (let item of items) {
    if (item.name === currItemName) {
      return res.json(item);
    };
  }
  throw new Error("no item with that name");
});

app.patch("/items/:name", function (req, res) {
  const currItemName = req.params.name;
  const newItemPrice = req.body.price;
  const newItemName = req.body.name;
  for (let item of items) {
    if (item.name === currItemName) {
      item.name = newItemName;
      item.price = newItemPrice;
      return res.json(item);
    }
  }
  throw new Error("no item with that name");
});

app.delete("/items/:name", function (req, res) {
  const currItemName = req.params.name;
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === currItemName) {
      items.splice(i, 1);
      return res.json({ message: "Deleted" });
    }
  }
  throw new Error("no item with that name");
});






module.exports = app;