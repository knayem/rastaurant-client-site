import React, { useEffect, useState } from 'react';
import ShowFoods from '../ShowFoods/ShowFoods';
import Cart from '../Cart/Cart';
import './Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,fasFasearch } from '@fortawesome/free-solid-svg-icons'

import { Button,FormControl,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Foods = () => {

    const [foods, setFoods] = useState([])

    const [cart, setCart] = useState([])

    const [displayItems, setDisplayItems] = useState([])

    const {cartItems}=useSelector(state=>state.cartReducer)










//  const dispatch= useDispatch()



    let total =cart.reduce((previous, product) => previous + product.price, 0);


    // const handleAddFood = (food) => {

    //     dispatch({type: 'add_TO_Cart', payload:food})


    //     // const newCart= [...cart, food];
    //     // setCart(newCart);

    //     console.log('Product Added',food)


    // }



    

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
        <div style={{ marginTop: '3%',  }}>
            

            <div className="search-container" md="6">
      <form className="form-inline mt-4 mb-4">
       
        
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Your Food"   aria-label="Search" 
        onChange={handleSearch}/>
       
      </form>
    </div>


            {

                // foods.map(food => <ShowFoods food={food}  handleAddItem={handleAddFood}
                //     ></ShowFoods>) 

                displayItems.map(food => <ShowFoods food={food}   
                    ></ShowFoods>) //searching

            }

        </div>
    );
};

export default Foods;