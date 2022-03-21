import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGoogle } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {Container,Row,Col,Form } from 'react-bootstrap';
import Navbar from '../Header/Navbar/Navbar'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}



const Login = () => {



    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,

        name: '',
        email: '',
        password: '',
        ConfirmPassword: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();



    const history = useHistory();
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                console.log(signedInUser);
                history.replace(from);

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode);
            });
    }

    const handleBlur = (e) => {

        let isFieldValid = true;
        let isPasswordMatch = true;
        // console.log(e.target.name, e.target.value);
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isEmailValid)
        }
       
        if (e.target.name === 'password' ) {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            // if(isFieldValid) {
            //     var password.value === confirmPassword;
            // }
            // else{
            //     alert('password dose match');
            // }
        }
        if (e.target.name === 'ConfirmPassword' ) {
            var confirmPassword = e.target.value;
            
        }
         

        

        if (isFieldValid) {

            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password)

        if (newUser && user.name && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...res.user };

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {

                    const newUserInfo = { ...user };

                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                });

        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...res.user };

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);


                })
                .catch((error) => {
                    const newUserInfo = { ...user };

                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }

        e.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {

            console.log('User Updated successfully')
        }).catch(function (error) {

            console.log(error)
        });

    }

    return (
        
             <div style={{  width:'700px' ,marginLeft:'20%'} }  >

<Navbar></Navbar>

<h2  style={{ color: 'black',marginTop: '20%' ,textAlign:'center' ,fontSize:'40px' }}>𝙇𝙤𝙜𝙞𝙣 𝘼𝙘𝙘𝙤𝙪𝙣𝙩</h2>
    <Container class="mt-5 d-flex " style={{marginLeft:'10%'}} >
<Row>

<Col class="md-5">


<form  style={{backgroundColor:'whiteSmoke'}} onSubmit={handleSubmit} >
  <div class="form-group">
  { newUser && <label for="exampleInputEmail1">Email address</label> &&  <input type="text" id="login" class="form-control" onBlur={handleBlur} name="name" placeholder="Input Name" required /> }
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
  <br></br>
   {/* {newUser && <input id="password" class="fadeIn third" type="password" onBlur={handleBlur} name="ConfirmPassword" placeholder="confirmPassword" />} */}
               <input  style={{ marginLeft:'14%',width:'130px'}}  type="submit" class="btn btn-primary" value={newUser ? 'Sign Up' : 'Sign In'} />
  </div>
  
</form >
         <input style={{ marginLeft:'20%'}} type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
             <label style={{ color: 'green' }} htmlFor="newUser">New User Sign up </label>
 
 
             <p style={{ color: 'red' }}>{user.error}</p>
             {user.success && <p style={{ color: 'green' }}> User {newUser ? 'create' : 'Logged In'} Success </p>}

             <br></br>
             
             <p style={{ marginLeft:'25%'}}>Or sign with</p>
            < Button style={{ marginLeft:'12%'}}  class="fadeIn fourth" onClick={handleGoogleSignIn} variant="success">  <FontAwesomeIcon icon={faCoffee} /> Sign In With Google</Button>

            
</Col>

<Col class="md-5" style={{backgroundColor:'orange'}} >

        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_q5pk6p1k.json" 
            background="transparent" 
                speed="1" 
                style={{width: '400px', height: '400px'}} 
                loop 
                autoplay>
        </lottie-player>



       


</Col>

</Row>


    </Container>

             </div>

      
    );
};
    

export default Login;





















































// import React from 'react';
// import Navbar from '../Header/Navbar/Navbar';
// import './Login.css'

// const Login = () => {
//     return (
//         <div>
 
//             <Navbar></Navbar>

//             <h1>Login</h1>

// <div>
//             <form>
//       <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
//       <br></br>
//       <input type="text" id="password" class="fadeIn third" name="password" placeholder="password"/>
//       <br/>
//       <input type="submit" class="fadeIn fourth" value="Log In"/>
//     </form>


//     </div>

//     <div>   <button   > Gmail Sign in </button>
        
//                    </div>
            
//         </div>




//     );
// };

// export default Login;