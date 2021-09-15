const ProductsController = require("../controllers/products.controller");


module.exports = app => {
    app.get("/api", ProductsController.helloworld);
    app.get("/api/products", ProductsController.findAllProducts);
    app.post("/api/products", ProductsController.createNewProducts);
    app.get("/api/products/random", ProductsController.findRandomProduct);
    app.get("/api/products/:id", ProductsController.findOneProduct);
    app.put("/api/products/:id", ProductsController.updateExistingProduct);
    app.delete("/api/products/:id", ProductsController.deleteProduct);

}