const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJnNjRlcGMyZVNrcElSbTdqYVdScCIsImlhdCI6MTcyMTM5MjE3NCwic3ViIjoiZXhhbXBsZXVzZXIiLCJ1c2VyIjp7ImVtYWlsIjoiZXhhbXBsZUBja3NvdXJjZS5jb20iLCJuYW1lIjoiQSBVc2VyIiwiYXZhdGFyIjoiaHR0cDovL2V4YW1wbGUuY29tL2F2YXRhcnMvam9obi5wbmcifSwiYXV0aCI6eyJjb2xsYWJvcmF0aW9uIjp7IioiOnsicm9sZSI6IndyaXRlciJ9fX0sImV4cCI6MTcyMTQ3ODU3NH0.kYHiE_Uk_BqH3Gmz6IWFZKu9HfMfZ24IP_FF-Pj3q-E";
const secretKey =
  "ZMrRKGuddP7XiE4fSKg6xNycsY4W6eA8MxycLrOweje5MftbgwK1sycgScYs";

try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded Token:", decoded);
} catch (err) {
  console.error("Token verification failed:", err);
}
