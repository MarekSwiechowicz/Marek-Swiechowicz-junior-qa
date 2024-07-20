const express = require("express");
const axios = require("axios");
const generateSignature = require("./signature");

const app = express();
const PORT = 9001;

const ORG_ID = "113841";
const ENV_ID = "re2ZVb57lfF4a0TRKayy";

const BASE_URL = `https://${ORG_ID}.cke-cs.com/api/v5/${ENV_ID}/`;

const API_KEY = "ofJWWuW2JyvLbmT8IlRPcX161d3vtZFj0KoDdtL6e0mEgAh5t3ht4F4ucdgB";
const API_SECRET =
  "08b982e8f78cffc890c7d0fb57b71fddd15bfd03ea213f9c96139989e4f6d8c1270ac5902c24d00de06088e14c0c19479c25525150a2eedaeaac0a13";

function getTimestamp() {
  return Date.now().toString();
}

async function forwardRequest(req, res, method, endpoint) {
  const timestamp = getTimestamp();
  const url = `${BASE_URL}${endpoint}`;
  const signature = generateSignature(API_SECRET, method, url, timestamp, null);

  console.log(`Forwarding request to: ${url}`);
  console.log(`Generated signature: ${signature}`);
  console.log(`Timestamp: ${timestamp}`);

  try {
    const response = await axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "x-signature": signature,
        "x-timestamp": timestamp,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error forwarding request:", error.message);
    if (error.response) {
      console.error("Error response data:", error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.send("Server is running");
});

app.get("/flush", (req, res) => {
  console.log("/flush endpoint hit");
  const { document_id } = req.query;
  if (!document_id) {
    console.error("document_id is required");
    return res.status(400).json({ message: "document_id is required" });
  }
  forwardRequest(req, res, "DELETE", `collaborations/${document_id}`);
});

app.get("/flushall", (req, res) => {
  console.log("/flushall endpoint hit");
  forwardRequest(req, res, "DELETE", "collaborations");
});

app.get("/users", (req, res) => {
  console.log("/users endpoint hit");
  const { document_id } = req.query;
  if (!document_id) {
    console.error("document_id is required");
    return res.status(400).json({ message: "document_id is required" });
  }
  forwardRequest(req, res, "GET", `collaborations/${document_id}/users`);
});

app.get("/comments", (req, res) => {
  console.log("/comments endpoint hit");
  forwardRequest(req, res, "GET", "comments");
});

app.get("/suggestions", (req, res) => {
  console.log("/suggestions endpoint hit");
  forwardRequest(req, res, "GET", "suggestions");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
