import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const AddProduct = () =>{

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    const changeHandler = (e)=>{
        console.log(e.target.name, e.target.value)
        setFormInfo({ 
            ...formInfo,
            [e.target.name]:e.target.value
            })
    }



    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                history.push("/api/products");
            })
            .catch(err=>console.log("error-->", err))
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="">Title:</label>
                <input onChange = {changeHandler} type="text" name="title" id="" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Price:</label>
                <input onChange = {changeHandler} type="text" name="price" id="" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Description:</label>
                <input onChange = {changeHandler} type="text" name="description" id="" className="form-control" />
            </div>
            <input className= "btn btn-primary"type="submit" value="Add Product" />
        </form>
        </div>
    )

}

export default AddProduct;