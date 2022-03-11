import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import NavImg from '../../../images/ppr-remove.png'
import { useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa'

//import { UserContext } from '../../App';
const Navbar = () => {
  const { cartItems } = useSelector(state => state.cartReducer);
  //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-toggler rounded text">
      <div class="container-fluid ">
       
        <Link class="navbar-brand" to="Home"> <span style={{ color: 'white', fontSize: '28px' }}>Fᵣₑ𝘴𝓱 & Tₑ𝘴𝚝y</span></Link>
        <img src={NavImg} alt="" width="50" height="45" class="d-inline-block align-text-top" /> <span style={{ color: 'rgb(15, 15, 15)', fontSize: '23px' }}>................................................................................</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse md-auto" id="navbarNav">
          <ul style={{ fontSize: '25px', fontFamily: 'Zen Dots', fontSize: '23px' }} class="navbar-nav">
            <li class="nav-item">
              <Link to="/home" style={{ fontSize: '25px', color: 'white', fontFamily: 'Zen Dots', fontSize: '23px' }} class="nav-link active" aria-current="page" >Home</Link>
            </li>

            

            <li class="nav-item">
              <Link to="/dashboard" style={{ color: 'white', fontSize: '23px' }} class="nav-link" >Dashboard</Link>
            </li>

            <li class="nav-item">
              <Link to="/orderReview" style={{ color: 'white', fontSize: '23px' }} class="nav-link" >Order Review</Link>
            </li>

            <li class="nav-item">
              <Link to="/login" style={{ color: 'white', fontSize: '23px' }} class="nav-link" >Login</Link>
            </li>

            <li class="nav-item">
              <Link to="/cart" style={{ color: 'white', fontSize: '23px' }} class="nav-link" > <FaCartPlus /> {cartItems.length}</Link>
            </li>
            {/* <p style={{ color: 'yellow'}}>{loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</p> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;