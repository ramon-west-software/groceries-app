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


function getFridgeData() {
  return fridgeData;
}

function getFreezerData() {
  return fridgeData;
}

function getPantryData() {
  return fridgeData;
}

function getUserItems() {
  return allData;
}

app.get("/", (req, res) => {
  res.json("Server - Hello Client!");
  console.log(`server call: ${count++}`);
});

app.get("/refrigerator-items", (req, res) => {
  data = getFridgeData();
  // console.log(`Response body: ` + JSON.stringify(data));
  res.json(data);
});

app.get("/items", (req, res) => {
  data = getUserItems();
  // console.log(`Response body: ` + JSON.stringify(data));
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

const allData = [
  {
    name: "Refrigerator",
    categories: [
      {
        name: "Fruits",
        items: [
          {
            name: "Banana",
            purchaseDate: "1/1/23",
            daysLeft: 2,
          },
          {
            name: "Strawberrys",
            purchaseDate: "1/5/23",
            daysLeft: 5,
          },
          {
            name: "Oranges",
            purchaseDate: "1/4/23",
            daysLeft: 7,
          },
        ],
      },
      {
        name: "Vegestables",
        items: [
          {
            name: "Spinach",
            purchaseDate: "1/5/23",
            daysLeft: 5,
          },
          {
            name: "Tomatoes",
            purchaseDate: "1/5/23",
            daysLeft: 7,
          },
          {
            name: "Squash",
            purchaseDate: "1/3/23",
            daysLeft: 7,
          },
        ],
      },
      {
        name: "Dairy",
        items: [
          {
            name: "Milk",
            purchaseDate: "1/3/23",
            daysLeft: 12,
          },
          {
            name: "Sliced Swiss",
            purchaseDate: "1/5/23",
            daysLeft: 7,
          },
          {
            name: "Sliced Pepperjack",
            purchaseDate: "1/5/23",
            daysLeft: 7,
          },
          {
            name: "Sliced Cheddar",
            purchaseDate: "1/5/23",
            daysLeft: 7,
          },
        ],
      },
    ],
  },
  {
    name: "Freezer",
    categories: [
      {
        name: "Meats",
        items: [
          {
            name: "Pork Chops",
            purchaseDate: "1/1/23",
            daysLeft: 60,
          },
          {
            name: "Chicken Breasts",
            purchaseDate: "1/1/23",
            daysLeft: 60,
          },
        ],
      },
      {
        name: "Snacks",
        items: [
          {
            name: "Frozen Pizza",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
          {
            name: "Ice Cream",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
          {
            name: "Popscicles",
            purchaseDate: "1/1/23",
            daysLeft: 120,
          },
        ],
      },
      {
        name: "Packaged Meals",
        items: [
          {
            name: "Pot Pies",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
          {
            name: "TV Dinners",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
          {
            name: "Toaster Waffles",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
          {
            name: "Orange Chicken",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
          {
            name: "Taquitos",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
        ],
      },
    ],
  },
  {
    name: "Pantry",
    categories: [
      {
        name: "Baked",
        items: [
          {
            name: "Bread",
            purchaseDate: "1/1/23",
            daysLeft: 5,
          },
          {
            name: "English Muffins",
            purchaseDate: "1/1/23",
            daysLeft: 5,
          },
          {
            name: "Cookies",
            purchaseDate: "1/1/23",
            daysLeft: 5,
          },
        ],
      },
      {
        name: "Snacks",
        items: [
          {
            name: "Chips",
            purchaseDate: "1/1/23",
            daysLeft: 21,
          },
          {
            name: "Ramen",
            purchaseDate: "1/1/23",
            daysLeft: 90,
          },
        ],
      },
      {
        name: "Pastas",
        items: [
          {
            name: "Bow-tie",
            purchaseDate: "1/1/23",
            daysLeft: 180,
          },
          {
            name: "Penne",
            purchaseDate: "1/1/23",
            daysLeft: 180,
          },
          {
            name: "Angel Hair",
            purchaseDate: "1/1/23",
            daysLeft: 180,
          },
        ],
      },
    ],
  },
];
