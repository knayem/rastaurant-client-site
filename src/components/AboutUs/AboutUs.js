import React from 'react';
import './AboutUs.css'
import Image1 from '../../images/abus1.jpg'
import Image2 from '../../images/abus2.jpg'
import Image3 from '../../images/abus3.png'
import Image4 from '../../images/gm.png'
const AboutUs = () => {
    return (
        <div style={{marginTop:'2%'}} class="row">
    <div style={{textAlign:'left'}} class="col-6 col-md-4  ">
  <h1 style={{color: 'black',fontSize: '35px', fontFamily: 'Zen Dots',textAlign:'left'}}>WelCome to the Food Center <br></br>club.</h1>
  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum expedita esse veritatis voluptate quaerat </h6>
<h5 style={{color: 'black'}}>Available facilities</h5>
<ul >
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
    </div>
    <div class="col-6 col-md-4">
        <div class="container">
  <div class="row">
    <div class="col align-self-start">
    <img style={{height: '100%', width: '100%'}} src={Image1} class="img-thumbnail" alt="..."/>
    </div>
    <div class="col align-self-center">
    <img src={Image2} class="img-thumbnail" alt="..."/>
    <img src={Image3} class="img-thumbnail" alt="..."/>
    </div>
    
  </div>
</div></div>
     <div class="col-6 col-md-4">
    <img src={Image4} alt="" className="img-fluid" />
    <br></br>
    {/* <button type="button" class="btn btn-success ms-5">Book Table</button>  */}
    </div> 
  </div>
    );
};

export default AboutUs;