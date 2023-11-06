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

app.get("/v1/api/users/3", (req, res) => {
  data = getUserItems();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

const allData = {
	"userData": {
		"name": "Rex",
		"userId": 3,
		"storageAreas": [
			{
				"storageId": 3,
				"categories": [
					{
						"categoryId": 15,
						"categoryName": "Drinks",
						"groceryItems": [
							{
								"name": "Orange Juice",
								"itemDuration": 14,
								"purchaseDate": "2023-10-09",
								"groceryItemId": 3
							},
							{
								"name": "Apple Juice",
								"itemDuration": 14,
								"purchaseDate": "2023-10-09",
								"groceryItemId": 4
							},
							{
								"name": "Coconut Water",
								"itemDuration": 14,
								"purchaseDate": "2023-10-09",
								"groceryItemId": 5
							}
						]
					},
					{
						"categoryId": 16,
						"categoryName": "Dairy",
						"groceryItems": null
					},
					{
						"categoryId": 17,
						"categoryName": "Produce",
						"groceryItems": null
					}
				],
				"storageName": "Rex fridge"
			},
			{
				"storageId": 4,
				"categories": [
					{
						"categoryId": 18,
						"categoryName": "Meats",
						"groceryItems": null
					}
				],
				"storageName": "Rex freezer"
			},
			{
				"storageId": 5,
				"categories": [
					{
						"categoryId": 19,
						"categoryName": "Snacks",
						"groceryItems": null
					},
					{
						"categoryId": 20,
						"categoryName": "Canned Foods",
						"groceryItems": null
					}
				],
				"storageName": "Rex pantry"
			}
		]
	}
};