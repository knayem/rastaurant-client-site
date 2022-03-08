import React from 'react';
import './ShowFoods.css'
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faShoppingCart,faCircleDollar } from '@fortawesome/free-solid-svg-icons'


 
 
 

import { Button, Card,Container,Row,Col } from 'react-bootstrap';


const ShowFoods = (props) => {
  // console.log(props)
    const {price,shortDescription,type,name,images,id}=props.food;
   
    return (



<div className="contain-cart d-flex align-items-center  justify-content-around  ">
<h1 style={{ color: 'black', fontFamily: 'Zen Dots', marginLeft: '-60%' }}>Menuess</h1>

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

   <Button btn variant="warning" onClick={() =>props.handleAddItem(props.food)}>add to cart <FontAwesomeIcon icon={faShoppingCart} /></Button>  ...
   <Link to={`/food/${id}`}> <Button btn variant="primary" >View   </Button>
   </Link>
   
   </div>
</div>


    
  </Card.Body>
</Card>

       
</Container>

</div>
      
      





//////////////////////////////////////////////////////////////////////////////


// <Container style={{ backgroundColor: 'whiteSmoke',}}>

// <Row class="d-flex " >
//   <Col  sm={8}>
  
//   <Card style={{ width: '18rem', height:'90%' ,marginTop:'1%',}} className="  align-items-center
//       justify-content-around  ">
// <Card.Img variant="top" src={images} />
// <Card.Body>
//   <Card.Title> <h2> {name}</h2> </Card.Title>
//   <Card.Text>
// {shortDescription}  
// </Card.Text>


// <div className="cart-actions">
// <h1 style={{ color: 'red', textAlign: 'center'}} > {price}$ </h1> 

// <div className="d-flex">

//  <Button variant="warning" onClick={() =>props.handleAddItem(props.food)}>add to cart <FontAwesomeIcon icon={faShoppingCart} /></Button>  
//  <Link to={`/food/${id}`}> <Button variant="primary" >View   </Button>
//  </Link>
 
//  </div>
// </div>


  
// </Card.Body>
// </Card>



  
  
//   </Col>
//   <Col sm={4}> <h3>  </h3> </Col>
// </Row>
// </Container>









//////////////////////////////////////////////////////////////////////









      // <section>
      //   <div class="container">
      //     <div class="card">
      //       <div class="content">
      //         <div class="imgBx">
      //         <img src={images}/>
      //         </div>
      //         <div class="contentBx">
      //           <h3>Lion<br/><span>Happy Birthday</span></h3>
      //         </div>
      //       </div>
      //       <ul class="sci">
      //         <li>
      //           <a href="">happy</a>
      //         </li>
      //         <li>
      //           <a href="">birth</a>
      //         </li>
      //         <li>
      //           <a href="">day</a>
      //         </li>
      //       </ul>
      //     </div>
          
        
      //   </div>
      // </section>
    


    

/* <div className="col-md-8 offset-1">
     <Container >
  <Row >
  
    <Col sm={3}  >
    <Card.Img   style={{ width: '60%', height: '200px' }} variant="top" src={images} />
    </Col>
    <Col sm={9}>
    <Card.Body>
         <Card.Text>
           <h3 style={{ color: 'black', textAlign: 'left',marginTop: '5%' }}>  {name}  </h3>
            <h2 style={{ color: 'red',textAlign: 'left'}}> {price}$</h2> 
            <h5 style={{ color: 'black', textAlign: 'left',marginTop: '5%' }}>  {shortDescription}  </h5>
           
            
             <Button style={{ marginTop: '2px', marginLeft: '-85%'}} variant="primary"  >Buy Now </Button>
              
         </Card.Text>

       </Card.Body></Col>
      
  </Row>
  
</Container>

          
            
            </div>
            <div className="col-md-4">
                
            </div> */
            
      


  //  </div>
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