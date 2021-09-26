import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let employName = '';
    for (const carts of cart) {
        const { Salary, Name } = carts
        total = total + Salary;
        employName += Name + ", ";
    }
    console.log(employName);
    return (
        <div className="mt-5">
            <div>
                <h4>Developer Added: {props.cart.length}</h4>
                <h4>Total Cost: ${total}</h4>
            </div>
            <div>
                <p><span className="fw-bold">You Added:</span> {employName}</p>
            </div>
            <div className="mt-3">
                <button>Confirm Now</button>
            </div>
        </div>
    );
};

export default Cart;


