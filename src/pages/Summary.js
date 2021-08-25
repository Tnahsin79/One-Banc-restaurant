import React, { useEffect, useState } from "react";
import "./Summary.css";
import { Link } from "react-router-dom";

const Summary = () => {
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('Order')));
    const [dishes, setDishes] = useState(order.dishes);
    const [total, setTotal] = useState(order.total);
    const grandTotal = (total * 1.025).toFixed(2);
    useEffect(() => {
        let reset = {
            "dishes": [],
            "total": 0
        };
        localStorage.setItem('Order', JSON.stringify(reset));
    });

    return (
        <div className="container">
            <h1>ORDER SUMMARY</h1>
            <hr></hr>
            <div class="card mb-2">
                <div class="card-body">
                    {
                        dishes.map((item) =>
                            <div>
                                <div className="row">
                                    <div className="col-4"><h6>{item.name}</h6></div>
                                    <div className="col-4"><h6>Quantity: {item.quantity}</h6></div>
                                    <div className="col-4"><h6>Price: {item.price}</h6></div>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    }
                    <div><h6>Net Total - {total}</h6></div>
                    <div><h6>CGST/SGST - 2.5%</h6></div>
                    <div><h6>Grand Total - {grandTotal}</h6></div>
                    <h1>ORDER PLACED</h1>
                    <Link className="nav-link" to={"/"}>
                        <button class="btn btn-primary">Back to Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}
export default Summary;