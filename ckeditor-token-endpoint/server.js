const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const accessKey = process.env.ACCESS_KEY;
const environmentId = process.env.ENVIRONMENT_ID;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/token", (req, res) => {
  const payload = {
    aud: environmentId,
    sub: "user-123",
    user: {
      email: "joe.doe@example.com",
      name: "Joe Doe",
    },
    auth: {
      collaboration: {
        "*": {
          role: "writer",
        },
      },
    },
  };

  const token = jwt.sign(payload, accessKey, {
    algorithm: "HS256",
    expiresIn: "24h",
  });

  res.send(token);
});

app.listen(1337, () => console.log("Token endpoint listening on port 1337"));
