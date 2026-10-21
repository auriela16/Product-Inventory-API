require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Inventory API is running");
});

// Routes will be added below by each team member

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
