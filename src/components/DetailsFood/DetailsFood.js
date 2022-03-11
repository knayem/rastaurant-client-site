import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar'
import { Button, Card,Container,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const DetailsFood = () => {

    const {cartItems}= useSelector(state => state.cartReducer)
    const dispatch= useDispatch();
    
    const{id}= useParams()
    const[foodDetails, setFoodDetails] = useState([])





    const handleAddFood = (food) => {

      dispatch({type: 'ADD_TO_CART', payload:food})
      console.log('Product Added',food)


  }
    
    useEffect (() =>{
 fetch("https://red-onion-backend.herokuapp.com/food/"+ id)
   .then(res => res.json())
   .then(data =>{

    setFoodDetails(data);
    console.log(foodDetails)
   })
   .catch(err => console.log(err))


    }   )


    return (
        <div>
            <Navbar></Navbar>
             <Container style={{marginTop: '15%'}}>
  <Row>

  <Col><Card.Img style={{border:'round',width:'400px'}} variant="top" src={foodDetails.images} /></Col>

    <Col><h1> {foodDetails.name}</h1>
    <p className="my-5" style={{textAlign: 'justify'}}> {foodDetails.fullDescription}</p>

  
    <h1  > <span style={{fontSize:'20px'}}>price: </span> {foodDetails.price}<span style={{color:'red',}}>($)</span></h1>
    
     <Button style={{border:'round',width:'300px', color:'violet'}} onClick={() =>handleAddFood(foodDetails)}>   <span style={{color:'white'}}>Add to Cart</span> </Button>
    </Col>
   
  </Row>
  
</Container> 
            
        </div>
    );
};

export default DetailsFood;