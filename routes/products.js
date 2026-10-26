const express = require("express");
const router = express.Router();

// In-memory database
let products = [
  { id: 1, name: "Rice", price: 5000, quantity: 20 },
  { id: 2, name: "Beans", price: 3000, quantity: 15 },
  { id: 3, name: "Garri", price: 2000, quantity: 30 },
  { id: 4, name: "Palm Oil", price: 4500, quantity: 12 },
  { id: 5, name: "Sugar", price: 2500, quantity: 25 },
  { id: 6, name: "Salt", price: 500, quantity: 50 },
  { id: 7, name: "Milk", price: 1800, quantity:   5 },
  { id: 8, name: "Bread", price: 1200, quantity: 8 },
];
let nextId = 9;
  
// ===== TASK 1: POST /products (add a product) by valentine ===== 
router.post("/", (req, res) =>  {
  const { name, price, quantity } = req.body;
if (!name || price === undefined  ||
quantity === undefined) { 
  return res.status (400).json({ message: "name, price and quantity are required" });
};
  const newProduct = {
    id: nextId++,
    name,
    price: Number(price),
    quantity: Number(quantity),
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});
// ===== TASK 2: GET /products (list all) =====

// ===== LOW-STOCK ROUTE ===== by Timaakrang 
router.get("/low-stock", (req, res) => {
const lowStockProducts = products.filter((product) => product.quantity < 10);
res.json(lowStockProducts);
  });

// ===== TASK 3: GET /products/:id (view one) by bilal-yunus-dev =====
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// ===== TASK 4: PUT /products/:id (edit) =====
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price, quantity } = req.body;

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = Number(price);
  if (quantity !== undefined) product.quantity = Number(quantity);

  res.json(product);
});

// ===== TASK 5: DELETE /products/:id (remove) ===== by Timaakrang 
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found." });
  }
  products.splice(productIndex, 1);
  res.json({ message: "Product deleted successfully." });
});

module.exports = router;
