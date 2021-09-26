import React from 'react';
import './cart.css'

const Cart = (props) => {
    // counting cart data
    const { cart } = props;
    let total = 0;
    let employName = '';
    // looping card data
    for (const carts of cart) {
        const { Salary, Name } = carts
        total = total + Salary;
        employName += Name + ", ";
    }
    // dynamically adding cart data
    return (
        <div className="mt-5  cart">
            <div>
                <p className="fs-5"><span className="fw-bold ">Developer Added:</span> {props.cart.length}</p>
                <p className="fs-5"><span className="fw-bold ">Total Cost:</span> ${total}</p>
            </div>
            <div className="selectedEmploye">
                <p><span className="fw-bold">You Added:</span> {employName}</p>
            </div>
            <div className="mt-3 cart-btn">
                <button className="btn btn-danger">Confirm Now</button>
            </div>
        </div>
    );
};

export default Cart;


