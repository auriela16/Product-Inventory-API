# Product Inventory API

A simple REST API for managing a shop's products, built with Node.js and Express by Sub Group 5C for the BeTechified Backend Development course. Products are stored in memory (no database), so the data resets when the server restarts.

## How to run
1. Clone the repo: `git clone https://github.com/auriela16/Product-Inventory-API.git`
2. Install packages: `npm install`
3. Optional: create a `.env` file containing `PORT=3000`
4. Start the server: `npm start`
5. Open `http://localhost:3000`

## Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | /products | List all products |
| GET | /products?name=rice | Search products by name |
| GET | /products/low-stock | Products with quantity below 10 |
| GET | /products/:id | View one product (404 if not found) |
| POST | /products | Add a product (400 if data is missing) |
| PUT | /products/:id | Edit a product (404 if not found) |
| DELETE | /products/:id | Remove a product (404 if not found) |

Example POST body: `{ "name": "Yam", "price": 6000, "quantity": 40 }`

## Testing
Import `Product Inventory API.postman_collection` into Postman to test every route.

## Project files
- `server.js`: starts the server and logs every request
- `routes/products.js`: all the product routes
- `DEMO.md`: the demo script
- `Group_5C_slides.pptx`: the presentation
