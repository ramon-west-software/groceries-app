const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

app.use(express.json());
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
  res.json(data);
});

app.get("/items", (req, res) => {
  data = getUserItems();
  res.json(data);
});

app.get("/api/users/3", (req, res) => {
  data = getUserItems();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

const allData = {
	"userId": 3,
	"name": "Rex",
	"storageAreas": [
		{
			"storageId": 3,
			"name": "Rex fridge",
			"categories": [
				{
					"categoryId": 15,
					"name": "Drinks",
					"items": [
						{
							"itemId": 3,
							"name": "Orange Juice",
							"purchaseDate": "2023-10-09",
							"duration": 14
						},
						{
							"itemId": 4,
							"name": "Apple Juice",
							"purchaseDate": "2023-10-09",
							"duration": 14
						},
						{
							"itemId": 5,
							"name": "Coconut Water",
							"purchaseDate": "2023-10-09",
							"duration": 14
						}
					]
				},
				{
					"categoryId": 16,
					"name": "Dairy",
					"items": []
				},
				{
					"categoryId": 17,
					"name": "Produce",
					"items": []
				}
			]
		},
		{
			"storageId": 4,
			"name": "Rex freezer",
			"categories": [
				{
					"categoryId": 18,
					"name": "Meats",
					"items": []
				}
			]
		},
		{
			"storageId": 5,
			"name": "Rex pantry",
			"categories": [
				{
					"categoryId": 19,
					"name": "Snacks",
					"items": []
				},
				{
					"categoryId": 20,
					"name": "Canned Foods",
					"items": []
				}
			]
		}
	]
};
