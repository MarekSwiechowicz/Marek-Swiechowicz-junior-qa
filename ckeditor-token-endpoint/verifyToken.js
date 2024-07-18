const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJnNjRlcGMyZVNrcElSbTdqYVdScCIsInN1YiI6InVzZXItMTIzIiwidXNlciI6eyJlbWFpbCI6ImpvZS5kb2VAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9lIERvZSJ9LCJhdXRoIjp7ImNvbGxhYm9yYXRpb24iOnsiKiI6eyJyb2xlIjoid3JpdGVyIn19fSwiaWF0IjoxNzIxMzAxNjgyLCJleHAiOjE3MjEzODgwODJ9.CsUMiY6QzNtUj4cA8MK5nNRUBhP2VswCW-6_uia1BbY";
const secretKey =
  "b36K5f2xwNvatu4GYYKSDilI6fygp9VpMix4XthfnaxpcTshFJ7th2RzC7dd";

try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded Token:", decoded);
} catch (err) {
  console.error("Token verification failed:", err);
}
