const Products = require("../models/products.model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello product-manager with mongoose modularized!!!" });
}

module.exports.findAllProducts = (req, res) => {
    Products.find()
        .then(allProducts => {
            res.json({ results: allProducts })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.createNewProducts = (req, res) => {
    Products.create(req.body)
        .then(newProductsObj => {
            res.json({ results: newProductsObj })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findOneProduct = (req, res) => {
    console.log("trying to find one Product!")
    console.log(req.params.id)
    Products.findOne({ _id: req.params.id })
        .then(foundProducts => {
            res.json({ results: foundProducts })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.updateExistingProduct = (req, res) => {
    Products.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedProduct => {
            res.json({ results: updatedProduct })
        })
        .catch(err => {
            res.json({ err: err })
        })

}

module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct})
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findRandomProduct = (req, res) => {
    console.log("trying to find random Product")
    Products.find()
        .then(allProducts => {
            console.log("all Products looks like this")
            let lengthOfAllProducts = allProducts.length;


            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let randomIndex = getRandomInt(lengthOfAllProducts)

            console.log(allProducts[randomIndex])
            res.json({ results: allProducts[randomIndex] })
        })
        .catch(err => {
            res.json({ err: err })
        })
}