// import libraries
import express from "express";
import UserController from "./src/controller/UserController.js";
import cors from "cors"

// initialize app and dependencies
const app = express();
const userController = new UserController();
app.use(cors());

// API calls
app.listen(8080, () => {
  console.log("Welcome, listening on port 8080");
});

app.get("/v1/api", (req, res) => {
  res.json("hello api");
});

app.get("/v1/api/users", (req, res) => {
  let allUsers = userController.getAllUsers();
  res.json(allUsers);
});

app.get("/v1/api/users/:id", async (req, res) => {
  let id = req.params.id;
  let user = await userController.getUserData(id);
  res.json(user);
});

// app.post("/v1/api/users")
