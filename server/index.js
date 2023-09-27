const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

let count = 1;

// todo: make service in another file
// const service = require("service");

// Mock data
const fridgeData = [
  {
    type: "Fruit",
    name: "Banana",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Dairy",
    name: "Milk",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Dairy",
    name: "Yogurt",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
];
const freezerData = [
  {
    type: "Meat",
    name: "Ribs",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Dairy",
    name: "Ice Cream",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Hex",
    name: "Crush hair & toenails",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
];
const pantryData = [
  {
    type: "Grains",
    name: "Bread",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Grains",
    name: "Tortillas",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Grains",
    name: "Rice",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
];
// end Mock data

function getFridgeData() {
  return fridgeData;
}

function getFreezerData() {
  return fridgeData;
}

function getPantryData() {
  return fridgeData;
}

app.get("/", (req, res) => {
  res.json("Server - Hello Client!");
  console.log(`server call: ${count++}`);
});

app.get("/refrigerator-items", (req, res) => {
  data = getFridgeData();
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
