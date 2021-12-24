import React from 'react';
import './Navbar.css'
import NavImg from '../../../images/navimg.png'
const Navbar = () => {
    return (
        <nav  class="navbar navbar-expand-lg navbar-light bg-light navbar-toggler rounded text">
  <div class="container-fluid ">
  <img src={NavImg} alt="" width="36" height="30" class="d-inline-block align-text-top"/>
    <a class="navbar-brand" href="#">Foodbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul style={{fontSize: '25px', fontFamily: 'Zen Dots',fontSize: '23px'}} class="navbar-nav">
        <li class="nav-item">
          <a  style={{fontSize: '25px', fontFamily: 'Zen Dots',fontSize: '23px'}} class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a style={{color: 'black',fontSize: '23px'}} class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a style={{color: 'black',fontSize: '23px'}} class="nav-link" href="#">Order</a>
        </li>
        <li class="nav-item">
          <a style={{color: 'black',fontSize: '25px', fontFamily: 'Zen Dots'}} class="nav-link disabled ">Dashboard</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;