import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar'
import { Button, Card,Container,Row,Col } from 'react-bootstrap';
const DetailsFood = () => {

    const{id}= useParams()
    const[foodDetails, setFoodDetails] = useState([])
    const [selectedFoodImage, setSelectedFoodImage] = useState([])
    useEffect (() =>{
 fetch("https://red-onion-backend.herokuapp.com/food/"+ id)
   .then(res => res.json())
   .then(data =>{

    setFoodDetails(data);
    console.log(foodDetails)
   })
   .catch(err => console.log(err))

//    if(foodDetails.images){

//   setSelectedFoodImage(foodDetails.images[0]);

//    }
//  window.scrollTo(0,0)

    }   )


    return (
        <div>
            <Navbar></Navbar>
            <Container style={{marginTop: '3%'}}>
  <Row>

  <Col><Card.Img style={{border:'round',width:'400px'}} variant="top" src={foodDetails.images[0]} /></Col>

    <Col><h1> {foodDetails.name}</h1>
    <p className="my-5" style={{textAlign: 'justify'}}> {foodDetails.fullDescription}</p>

  
    <h1 > {foodDetails.price}<span style={{color:'red'}}>($)</span></h1>
    
     <Button style={{border:'round',width:'300px', color:'violet'}}>   <span style={{color:'white'}}>Add to Cart</span> </Button>
    </Col>
   
  </Row>
  
</Container>
            
        </div>
    );
};

export default DetailsFood;