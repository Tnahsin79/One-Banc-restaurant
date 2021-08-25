import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('Order')));
    const [dishes, setDishes] = useState(order.dishes);
    const [total, setTotal] = useState(order.total);
    const grandTotal = (total * 1.025).toFixed(2);
    useEffect(() => {
    });

    return (
        <div className="container">
            <h1>MY CART</h1>
            <hr></hr>
            {
                dishes.length > 0 ?
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
                            <Link className="nav-link" to={"/orderSummary"}>
                                <button class="btn btn-primary">Place Order</button>
                            </Link>
                        </div>
                    </div>
                    :
                    <h1>CART IS EMPTY! KINDLY ADD SOME ITEMS</h1>
            }
        </div>
    );
}
export default Cart;