Demo Script: Sub Group 5C Product Inventory API

Intro;
Hello,Good day
We're Sub Group 5C. Our project is a Product Inventory API that lets a shop add, view, edit and delete its products.

Let's head over to GitHub to show what we've built
This is our repository. On the commits page, you can see that each member contributed in their own little and very large way through their own commits.
We should notice that commits have begun even as far back as last week

 Server
In the terminal, the server is up and running on port 3000.

 Postman
1. Get all products: returns the full product list.
2. Get one product: returns a single product by its id, here id 1.
3. Low stock: shows only products with a quantity below 10.
4. Add Product: creates a new product and returns it with its own id.
5. Add product with missing data: the API rejects it with a 400 error.
6. Edit product: updates a product, and the price changes.
7. Delete product: removes the product from the inventory.
8. Product not found: asking for id 99 returns a 404 error.
9. Search by name: with `name=rice`, only Rice comes back.

 Close
This covers every route in our project. Thank you.
