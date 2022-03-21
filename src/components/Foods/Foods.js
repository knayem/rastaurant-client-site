import React, { useEffect, useState } from 'react';
import ShowFoods from '../ShowFoods/ShowFoods';
import './Food.css'

import { useDispatch, useSelector } from 'react-redux';
import { FormControl,Form,Button } from 'react-bootstrap';

const Foods = () => {

    const [foods, setFoods] = useState([])
    const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");

    const [displayItems, setDisplayItems] = useState([])

    const {cartItems}=useSelector(state=>state.cartReducer)
 
    const selectedFoods =  foods.filter(food => food.type == selectedFoodType)
   

    useEffect(() => {
        fetch('https://red-onion-backend.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setDisplayItems(data);

            })
            .catch(err => console.log(err))
    }, [])


      const handleSearch= event => {
          console.log(event.target.value) 

          const searchText = event.target.value;

          const matchItems=foods.filter(foods=>foods.name.toLowerCase().includes(searchText.toLowerCase()));
          console.log(matchItems.length)
          setDisplayItems(matchItems);
      }
 
     

    return (
        <div style={{ marginTop: '3%',  }} className="row my-5">
              

            <div style={{marginLeft:'3%' }}className="search-container" md="6">
     
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Your Food"
          className="me-2"
          aria-label="Search"
          style={{width:'450px'}}

          onChange={handleSearch}
        />
        
      </Form>
     
     
     
     
      {/* <form className="form-inline mt-4 mb-4">
       
        
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Your Food"   aria-label="Search" 
        onChange={handleSearch}/>
       
      </form> */}
    </div>
    {/* <nav>
                    <ul className="nav justify-content-center">
                        <button onClick={() => setSelectedFoodType("Breakfast")} className="nav-item btn btn-outline-dark">
                            <span  to="breakfast" className={selectedFoodType === "Breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</span>
                        </button>
                        <button onClick={() => setSelectedFoodType("Lunch")} className="nav-item btn btn-outline-dark">
                            <span to="breakfast" className={selectedFoodType === "Lunch" ?  "active nav-link" : "nav-link"}>Lunch</span>
                        </button>
                        <button onClick={() => setSelectedFoodType("Dinner")} className="nav-item btn btn-outline-dark">
                            <span to="breakfast" className={selectedFoodType === "Dinner" ?  "active nav-link" : "nav-link"}>Dinner</span>
                        </button>
                    </ul>
                </nav> */}
    <div className="justify-content-center" > <h1 className="display-6  fw-border text center" style={{ marginLeft:'3%' }} > Menues</h1></div>
    
            {

                // foods.map(food => <ShowFoods food={food}  handleAddItem={handleAddFood}
                //     ></ShowFoods>) 

                 displayItems.map(food => <ShowFoods food={food}   
                     ></ShowFoods>) //searching

                // selectedFoods.map(food => <ShowFoods food={food}   
                //     ></ShowFoods>) //filteringFoodType

            }

        </div>
    );
};

export default Foods;