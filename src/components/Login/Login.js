import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGoogle } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



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
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'green' }}>Login  Account </h2>
            {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign up </label> */}
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'whiteSmoke', height: '250px' }}>

                {newUser && <input type="text" id="login" class="fadeIn second" onBlur={handleBlur} name="name" placeholder="Input Name" required /> }
                <br />
                <br />
                <h6>Email:
                <input type="text" id="password" class="fadeIn third" onBlur={handleBlur} name="email" placeholder="Your email" required /></h6>
                <br />
                <h6>Password:
                <input type="password" id="password" class="fadeIn third" onBlur={handleBlur} name="password" placeholder="password" required /></h6>
                <br />

                {newUser && <input id="password" class="fadeIn third" type="password" onBlur={handleBlur} name="ConfirmPassword" placeholder="confirmPassword" />}
                <br />
                <br />
                <input  class="fadeIn fourth" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
            </form>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label style={{ color: 'green' }} htmlFor="newUser">New User Sign up </label>

            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}> User {newUser ? 'create' : 'Logged In'} Success </p>}


            <br></br>
            <p>Or sign with</p>
            <Button class="fadeIn fourth" onClick={handleGoogleSignIn} variant="success">  <FontAwesomeIcon icon={faCoffee} /> Sign In With Google</Button>
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