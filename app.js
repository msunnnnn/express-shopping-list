
const express = require("express");
const app = express();

// process JSON body => req.body
app.use(express.json());
// process traditional form data => req.body
app.use(express.urlencoded({ extended: true }));

const { items } = require("./fakeDB.js");

app.get("/items", function (req, res) {
  return res.send({items : items});
});

app.post("/items", function (req, res) {
  const newItem = {
    name: req.body.name,
    price: req.body.price
  };
  items.push(newItem);

  return res.json({added : newItem});
});

app.get("/items/:name", function (req, res) {

});

app.patch("/items/:name", function (req, res) {

});

app.delete("/items/:name", function (req, res) {

});






module.exports = app;