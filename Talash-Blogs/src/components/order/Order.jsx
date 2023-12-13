import React, { useState } from "react";
import './order.css';
const Order=()=>{
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        number:'',
    })
    const handleSubmit=()=>{

    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,

        }));

    };

    return(
        <div className="orders">
        <h2> Order yours</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}>
                </input>
            </label>
            <label>
                Email:
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}>
                </input>
            </label>
            <label>
                WhatsApp Number:
                <input
                name="number"
                value={formData.number}
                onChange={handleChange}>
                </input>
            </label>
            <button type="submit">Submit</button>


        </form>
        </div>
    );
};
export default Order;