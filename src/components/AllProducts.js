import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("res is this-->", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("Error-->", err))
    }, [])




    return (
        <div>
            <h3>All Products</h3>
            {allProducts.map((product, idx) => {
                return <div key={idx} className="card">
                    <div className="card-body">
                        <h4 className="card-title"><Link to={`/api/products/${product._id}`}>{product.title}</Link></h4>
                        <p className="card-text">Price: {product.price}</p>
                        <p className="card-text">Discription: {product.description}</p>
                    </div>
                </div>
            })}
        </div>
    );
};

export default AllProducts;