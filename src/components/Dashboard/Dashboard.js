

import Navbar from '../Header/Navbar/Navbar';

import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Dashboard = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
     const productData = {
       name: data.name,
       price: data.price,
       season: data.season,
       quantity: data.quantity,
       imageURL: imageURL
     };
     console.log(productData);
    const url = `https://intense-everglades-88181.herokuapp.com/addProduct`;
    
     fetch(url, {
       method: 'POST', 
       headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
     })
     .then(res => console.log('server side response', res))
  };
   
  const handleImageUpload = event => {
    console.log(event.target.files[0])
     const imageData = new FormData();
     imageData.set('key', 'c4ec85a1609494eca99a9f4b0660e96a');
      imageData.append('image', event.target.files[0]);
    
     axios.post('https://api.imgbb.com/1/upload', 
     imageData)
     .then(function (response) {
         setIMageURL(response.data.data.display_url);
    //    setIMageURL(response.data.data.display_url);
     })
     .catch(function (error) {
     console.log(error);
     });

  }

    return (
        <div>
          <Navbar></Navbar>
          <h1>Add your Product Items</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <br/>
      <input type="text" placeholder="Item" name="name" defaultValue="FIFA" ref={register} />
      <br/>
      <br/>
     <input type="text" placeholder="quantity" name="quantity"  ref={register} />
      <br/>
      <br/>
      <input type="text" placeholder="season" name="season"  ref={register} />
      <br/>
      <br/>
      <input type="text" placeholder="price" name="price" defaultValue=""  ref={register} />

      <br/>
      <br/>
      <input name="" type="file" onChange={handleImageUpload} />
      <br/>
      <br/>
      <input type="submit" />
    </form>
            
        </div>
    );
};

export default Dashboard;