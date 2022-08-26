const express = require("express");
const app = express();
const path = require("node:path");

const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/json", (req, res) => {
  res.json({ success: "Hello world!", error: false });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
