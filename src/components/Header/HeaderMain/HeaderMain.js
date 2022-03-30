import React from 'react';
import './HeaderMain.css'
import haderImage from '../../../images/nw.jpg'
const HeaderMain = () => {
    return (
        <main class="row BG d-flex align-item-center">
            <div className="col-md-4 offset-1 mt-5  ">
                <br></br>
            <h1 style={{color: 'tomato',fontSize: '18px', fontFamily: 'Zen Dots'}}> <br/> <span style={{color: 'green' ,fontFamily: 'Krona One',fontSize: '22px'}}> As-salamu Alaykum </span> <br/>  Enjoy Your Food rastaurant  <br/> <br/> <span style={{color: 'red' ,fontFamily: 'Krona One',fontSize: '50px'}}> Fresh & Testy </span></h1>
              <h6 style={{textAlign: 'justify',color: 'silver'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda ex deleniti tempore excepturi voluptatibus cumque unde iure blanditiis voluptate, voluptatem quos ab et doloremque </h6>
            <button type="button" class="btn btn-outline-success ms-5">Contact Us</button> 
            </div>
            <div className="col-md-7">
                <img src={haderImage} alt="" className="img-fluid" />
            </div>
            
        </main>
    );
};

export default HeaderMain;