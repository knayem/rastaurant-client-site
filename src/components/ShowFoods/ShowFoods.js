import React, { useEffect } from 'react';
import './ShowFoods.css'
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faShoppingCart,faCircleDollar } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux';
 
 import Cart from '../Cart/Cart.js'
 

import { Button, Card,Container,Row,Col } from 'react-bootstrap';


const ShowFoods = (props) => {
  // console.log(props)
    const {price,shortDescription,type,name,images,id}=props.food;
    const dispatch= useDispatch()
    const {cartItems}=useSelector(state=>state.cartReducer)



    const handleAddFood = () => {

      dispatch({type: 'ADD_TO_CART', payload:props.food})
      console.log('Product Added',props.food)


  }

 
    return (

      <div className="col-md-3 mb-3">
     
     <Container  className="d-flex cart-items" >
          <div className="card text-center ">
              <img  style={{ height:'50%' , width:'60%', marginLeft:'24%' }} src={images} alt="" className="card-img-top "/>
              <div className="card-body ">
                  <h5>{name}</h5>
                  <p>{shortDescription}</p>

                  <div className="cart-actions">
                  <h1 style={{ color: 'white', textAlign: 'center',textWeight: 'bold' }}>  {price}<FontAwesomeIcon icon={faDollarSign} />  </h1> 
                  
                  <div  className="d-flex btn">

                  <Button btn variant="warning" onClick={() =>handleAddFood(props.food)}>add to cart <FontAwesomeIcon icon={faShoppingCart} /></Button>-
   <Link to={`/food/${id}`}> <Button btn variant="primary" >View   </Button>
   </Link>
              </div>
   
   </div>
                  </div>
                 
          </div>
          </Container>
     
  </div>




/* <div  className="contain-cart d-flex align-items-center  justify-content-around  ">
  



<Container  className="d-flex cart-items" >

  
    
    <Card style={{ width: '18rem', height:'90%' ,marginTop:'1%',}} className="  align-items-center
        justify-content-around  ">
  <Card.Img variant="top" src={images} />
  <Card.Body>
    <Card.Title> <h2> {name}</h2> </Card.Title>
    <Card.Text>
{shortDescription}  
 </Card.Text>


<div className="cart-actions">
<h1 style={{ color: 'white', textAlign: 'center',textWeight: 'bold' }}>  {price}<FontAwesomeIcon icon={faDollarSign} />  </h1> 

<div className="d-flex ">

   <Button btn variant="warning" onClick={() =>handleAddFood(props.food)}>add to cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
   <Link to={`/food/${id}`}> <Button btn variant="primary" >View   </Button>
   </Link>
   
   </div>
</div>


    
  </Card.Body>
</Card>

       
</Container>

</div> */
      
      





    );
};

export default ShowFoods;






 //     <div id="div-position" style={productStyle} className="league d-flex align-items-center
    //     justify-content-around  ">
    //  <Card className="home-card" style={{ width: '26rem', height: '320px', backgroundColor: 'whitesmoke' }}>
    //    <Card.Img  style={{ width: '100%', height: '210px' }} variant="top" src={images} />
    //    <Card.Body>
    //      <Card.Text>
    //        <h2 style={{ color: 'navy', textAlign: 'center' }}>  {name} <span style={{ color: 'red'}}> {price}$</span> </h2>
    //        {/* <h6 className="league-type" style={{ color: 'blue' }}> price: {price}$</h6> */}
            
           
    //          <Button style={{ marginTop: '2px' }} variant="primary"  >Buy Now </Button>
              
    //      </Card.Text>

    //    </Card.Body>
    //  </Card>