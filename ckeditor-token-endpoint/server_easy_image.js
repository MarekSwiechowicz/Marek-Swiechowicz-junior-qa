const express = require("express");
const jwt = require("jsonwebtoken");

const SECRET_KEY =
  "b36K5f2xwNvatu4GYYKSDilI6fygp9VpMix4XthfnaxpcTshFJ7th2RzC7dd";

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
