const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJnNjRlcGMyZVNrcElSbTdqYVdScCIsImlhdCI6MTcyMTM3NDc3OCwic3ViIjoiZXhhbXBsZXVzZXIiLCJ1c2VyIjp7ImVtYWlsIjoiZXhhbXBsZUBja3NvdXJjZS5jb20iLCJuYW1lIjoiQSBVc2VyIiwiYXZhdGFyIjoiaHR0cDovL2V4YW1wbGUuY29tL2F2YXRhcnMvam9obi5wbmcifSwiYXV0aCI6eyJjb2xsYWJvcmF0aW9uIjp7IioiOnsicm9sZSI6IndyaXRlciJ9fX0sImV4cCI6MTcyMTQ2MTE3OH0.B-q8C5ZTsGyoZynyDqAniDGBoeBnQGtOP53V7F1XK0I";
const secretKey =
  "0f5212e130788a73565f37122d569d0d58d205602bc064cfa8d8fd98f4845c2c1d4e19847516b9e17ed7c7217a6f5c38c545c02a3bc66360467675cd";

try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded Token:", decoded);
} catch (err) {
  console.error("Token verification failed:", err);
}
