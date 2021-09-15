const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    //fields that a quote table can have
    title: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    }

})

//register the above code at a table in mongodb
const Products = mongoose.model("Products", ProductsSchema)



module.exports = Products;