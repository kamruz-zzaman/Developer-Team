import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Employ from '../Employ-Card/Employ';
import './Employeer.css'

const Employeer = () => {
    const [employ, setEmploy] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./generated.json')
            .then(res => res.json())
            .then(data => setEmploy(data))
    }, [])
    const AddHandler = teamBtn => {
        const Newcart = [...cart, teamBtn]
        setCart(Newcart);
    }
    return (
        <div className="row mx-2">
            <div className="col-9 row row-cols-1 row-cols-md-3 g-4 ">
                {
                    employ.map(employ =>
                        <Employ
                            key={employ.Key}
                            employ={employ}
                            addHandler={AddHandler}>
                        </Employ>)
                }
            </div>
            <div className="col-3">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Employeer;