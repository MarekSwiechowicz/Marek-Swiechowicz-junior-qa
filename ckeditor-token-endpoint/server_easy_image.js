const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY =
  "0f5212e130788a73565f37122d569d0d58d205602bc064cfa8d8fd98f4845c2c1d4e19847516b9e17ed7c7217a6f5c38c545c02a3bc66360467675cd";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/token", (req, res) => {
  const token = jwt.sign({}, SECRET_KEY, { algorithm: "HS256" });
  res.send(token);
});

app.listen(1337, () =>
  console.log("Token endpoint listening on port 1337 esy")
);
