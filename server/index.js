const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());


const port = 8080;

let count = 1;

app.get("/", (req, res) => {
  res.send("Server - Hello Client!");
  console.log(`server call: ${count++}`);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
