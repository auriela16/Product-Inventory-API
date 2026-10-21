const express = require("express");
const router = express.Router();

// In-memory database
let products = [
  { id: 1, name: "Rice", price: 5000, quantity: 20 },
  { id: 2, name: "Beans", price: 3000, quantity: 15 },
];
let nextId = 3;

// ===== TASK 1: POST /products (add a product) =====

// ===== TASK 2: GET /products (list all) =====

// ===== TASK 3: GET /products/:id (view one) =====

// ===== TASK 4: PUT /products/:id (edit) =====

// ===== TASK 5: DELETE /products/:id (remove) =====

module.exports = router;
