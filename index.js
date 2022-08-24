const express = require("express");
const app = express();

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.json({ success: "Hello world!", error: false });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
