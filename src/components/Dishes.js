import React, { useState } from "react";
import "./Dishes.css";

const Dishes = (props) => {
    const [quantity, setQuantity] = useState(0);
    const price = parseInt(props.price);
    const name = props.name;
    const link = props.link;
    const changeQuantity = (e) => {
        setQuantity(e.target.value);
    }
    const addToCart = () => {
        let order = JSON.parse(localStorage.getItem('Order')), f = 0;
        let item = {
            "name": name,
            "quantity": quantity,
            "price": quantity * price
        }
        for (let i = 0; i < order.dishes.length; i++) {
            if (order.dishes[i].name === name) {
                order.total -= (order.dishes[i].quantity * price);
                order.dishes[i] = item;
                order.total += (quantity * price);
                f++;
            }
        }
        if (f === 0) {
            order.dishes.push(item);
            order.total += (quantity * price);
        }
        localStorage.setItem('Order', JSON.stringify(order));
        console.log(JSON.stringify(order));
    }
    return (
        <div class="card mb-2">
            <img class="card-img-top"
                src={link} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Name- {name}</h5>
                <h5 class="card-title">Price- ₹{price}/-</h5>
                <h6 class="card-title">Quantity</h6>
                <input type="number" id="quantity" class="form-control mb-4" placeholder="0" onChange={changeQuantity} />
                <button class="btn btn-primary" value={name} onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    );
}
export default Dishes;