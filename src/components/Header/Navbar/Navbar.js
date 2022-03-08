import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import NavImg from '../../../images/navimg.png'
import { useSelector } from 'react-redux';



const Navbar = () => {
  const {cartItems}=useSelector(state=>state.cartReducer);

    return (
        <nav  class="navbar navbar-expand-lg navbar-light bg-light navbar-toggler rounded text">
  <div class="container-fluid ">
  <img src={NavImg} alt="" width="36" height="30" class="d-inline-block align-text-top"/>
    <Link class="navbar-brand" to="#">Foodbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse md-auto" id="navbarNav">
      <ul style={{fontSize: '25px', fontFamily: 'Zen Dots',fontSize: '23px'}} class="navbar-nav">
        <li class="nav-item">
          <Link to="/home" style={{fontSize: '25px',color: 'white', fontFamily: 'Zen Dots',fontSize: '23px'}} class="nav-link active" aria-current="page" >Home</Link>
        </li>
      
        <li class="nav-item">
          <Link to="/order"  style={{color: 'white',fontSize: '23px'}} class="nav-link" >Order</Link>
        </li>
        
        <li class="nav-item">
          <Link to="/dashboard"  style={{color: 'white',fontSize: '23px'}} class="nav-link" >Dashboard</Link>
        </li>

        <li class="nav-item">
          <Link to="/orderReview"  style={{color: 'white',fontSize: '23px'}} class="nav-link" >Order Review</Link>
        </li>

        <li class="nav-item">
          <Link to="/login"  style={{color: 'white',fontSize: '23px'}} class="nav-link" >Login</Link>
        </li>

        <li class="nav-item">
          <Link to="/cart"  style={{color: 'white',fontSize: '23px'}} class="nav-link" >Cart {cartItems.length}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;