const express = require("express");
const jwt = require("jsonwebtoken");

const accessKey =
  "x9qDq9KQbvbUSJZ5k7U6Egkre7pPIp94EcRBFXciWnQ8kYOejJywZauwXyvd";
const environmentId = "n0b5gWL0dOl92j33K8ki";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  next();
});

app.get("/", (req, res) => {
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

  const result = jwt.sign(payload, accessKey, {
    algorithm: "HS256",
    expiresIn: "24h",
  });

  res.send(result);
});

app.listen(8080, () => console.log("Listening on port 8080"));
