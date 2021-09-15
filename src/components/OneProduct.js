import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";


const OneProduct = () => {
    const { id } = useParams();

    const history = useHistory();

    const [productInfo, setProductInfo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("res", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log(err))
    },[])

    const deleter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("ressponse after deleter ran-->",res)
                history.push("/api/products")
            })
            .catch(err=>console.log("error",err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
                <Link to={"/api/products"}>Home</Link>
                    <h3>Title: {productInfo.title}</h3>
                    <h3>Price: {productInfo.price}</h3>
                    <h3>Description: {productInfo.description}</h3>
                    <p><Link className="btn btn-danger" to={`/api/products/update/${id}`}>edit</Link>||<button onClick = {deleter} className="btn btn-danger">Delete</button></p>
        </div>
    );
};

export default OneProduct;