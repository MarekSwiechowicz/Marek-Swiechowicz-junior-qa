const express = require("express");
const jwt = require("jsonwebtoken");

const accessKey =
  "b36K5f2xwNvatu4GYYKSDilI6fygp9VpMix4XthfnaxpcTshFJ7th2RzC7dd";
const environmentId = "g64epc2eSkpIRm7jaWRp";

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

app.listen(1337, () =>
  console.log("Token endpoint listening on port 1337 serv")
);
