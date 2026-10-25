require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Request Logger - Bilal Yunus
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Product Inventory API is running");
});

const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
