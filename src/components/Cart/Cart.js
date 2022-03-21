import React from 'react';
import './Cart.css'

import Navbar from '../Header/Navbar/Navbar'
import { FaTrash, } from 'react-icons/fa'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState,useContext } from 'react';
import { Button, Card,Container,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { } from 'react-bootstrap';
import { UserContext } from '../../App';
import CheckOut from '../CheckOut/CheckOut';

const Cart = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartReducer)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [quantity, setQuantity]= useState(1)
    
    let total = cartItems.reduce((previous, product) => previous + product.price, 0);

    const removeFromCart = (food) => {

        dispatch({ type: 'REMOVE_FROM_CART', payload: food })
        console.log('Product removed', food)


    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems])


    return (

        <div style={{ marginLeft:'30%'}}>

            <Navbar></Navbar>

            <Container style={{ marginTop: '18%',  }} className="twin-container " >
            <Row>

             <Col>   <table style={{ marginTop: '8%',  }} className="table rounded border p-5">

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


                </table> </Col>


               <Col> <div className="cart-container mt-5">

                    <h1 style={{ marginLeft: '16%', fontSize: '30px' }}>Total Amounts:<br></br>{total} <span style={{ color: 'red' }}>($) </span> </h1>
                    <br></br>
                    <CheckOut  total={total}/>
                </div> </Col>
                </Row>

            </Container>




        </div>



    );
};

export default Cart;