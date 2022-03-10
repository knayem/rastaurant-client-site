import React from 'react';
import './Cart.css'

import Navbar from '../Header/Navbar/Navbar'
import { FaTrash, } from 'react-icons/fa'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { } from 'react-bootstrap';

const Cart = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartReducer)

    let total = cartItems.reduce((previous, product) => previous + product.price, 0);

    const removeFromCart = (food) => {

        dispatch({ type: 'REMOVE_FROM_CART', payload: food })
        console.log('Product removed', food)


    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems])


    return (

        <div className="">

            <Navbar></Navbar>

            <div className="twin-container mt-3 " >
                <table style={{ marginTop: '8%', marginLeft: '10%' }} className="table">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>

                    </thead>
                    <tbody>

                        {cartItems.map(item => {

                            return <tr>
                                <td> <img src={item.images} height="100" width="100" /></td>
                                <td>{item.name}</td>
                                <td>{item.price}<span style={{ fontWeight: 'bold', color: 'green' }}>($) </span>   </td>
                                <td> <FaTrash onClick={() => removeFromCart(item)} /> </td>

                            </tr>
                        })}

                    </tbody>


                </table>

                <div className="cart-container mt-5">

                    <h1 style={{ marginLeft: '16%', fontSize: '30px' }}>Total Amounts:<br></br>{total} <span style={{ color: 'red' }}>($) </span> </h1>
                    <br></br>
                    <button style={{ marginLeft: '16%'}} className="btn btn-primary">Place Order</button>
                </div>

            </div>




        </div>



    );
};

export default Cart;