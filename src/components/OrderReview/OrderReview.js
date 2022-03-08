import React from 'react';
import UseItems from '../../Hooks/UseItems';
import Navbar from '../Header/Navbar/Navbar'

const OrderReview = () => {

    const [items, setItems] = UseItems();

    return (
        <div>
            <Navbar></Navbar>
            <h1>{items.name}</h1>

        </div>
    );
};

export default OrderReview;