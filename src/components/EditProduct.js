import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const EditProduct = () => {
    const { id } = useParams();
    const history = useHistory();


    const [productInfo, setProductInfo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("response-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log("error ", err))
    }, [])


    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, productInfo)
            .then(res => {
                console.log("response afer put request", res)
                history.push(`/api/products/${id}`);
            })
            .catch(err => console.log("error, ", err))
    }


    return (
        <div>
            <h1>Edit Product: </h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input onChange={changeHandler} type="text" name="title" id="" className="form-control" value={productInfo.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input onChange={changeHandler} type="text" name="price" id="" className="form-control" value={productInfo.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input onChange={changeHandler} type="text" name="description" id="" className="form-control" value={productInfo.description} />
                </div>
                <input className="btn btn-primary" type="submit" value="Update Product" />
            </form>
        </div>
    );
};


export default EditProduct;