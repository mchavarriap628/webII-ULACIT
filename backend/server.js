const express = require("express");
const dotenv = require("dotenv");

const jsonTest = require("./data/jsonTest");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/jsonTest", (req, res) => {
  res.json(jsonTest);
});

app.get("/api/jsonTest/:id", (req, res) => {
  const element = jsonTest.find((n) => n._id === req.params.id);
  res.send(element);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
