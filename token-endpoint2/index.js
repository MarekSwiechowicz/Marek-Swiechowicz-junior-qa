const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 1337;

const SECRET_KEY =
  "0f5212e130788a73565f37122d569d0d58d205602bc064cfa8d8fd98f4845c2c1d4e19847516b9e17ed7c7217a6f5c38c545c02a3bc66360467675cd";
const ENVIRONMENT_ID = "g64epc2eSkpIRm7jaWRp";

app.use(cors());

app.get("/token", (req, res) => {
  const currentTime = Math.floor(Date.now() / 1000);

  const payload = {
    aud: ENVIRONMENT_ID,
    iat: currentTime,
    sub: "exampleuser",
    user: {
      email: "example@cksource.com",
      name: "A User",
      avatar: "http://example.com/avatars/john.png",
    },
    auth: {
      collaboration: {
        "*": {
          role: "writer",
        },
      },
    },
    exp: currentTime + 24 * 60 * 60,
  };

  const token = jwt.sign(payload, SECRET_KEY);

  res.json({ token });
});

// Start the server
app.listen(port, () => {
  console.log(`Token endpoint running at http://localhost:${port}`);
});
