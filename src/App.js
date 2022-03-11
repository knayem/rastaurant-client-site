
import './App.css';

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import DetailsFood from './components/DetailsFood/DetailsFood';
import Cart from './components/Cart/Cart';
import OrderReview from './components/OrderReview/OrderReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Foods from './components/Foods/Foods';

import React, { createContext, useState } from "react";



import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);


  


  return (
    

    <div>

<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>


<Router>
      
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <Foods cart={cart} handleAddItem={cartHandler} setCart={setCart}></Foods> */}

          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>

          <PrivateRoute path="/cart">
             {/* <Cart cart={cart}></Cart> */}
             <Cart ></Cart>

          </PrivateRoute>

          <Route path="/food/:id">
                <DetailsFood></DetailsFood>
            </Route>

            <Route path="/orderReview">
            <OrderReview></OrderReview>
          </Route>

           
          

          {/* <Route path="*">
            <NoMatch/>
          </Route>  */}

          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          


        </Switch>

      </Router>


    
    </UserContext.Provider>

    </div>

//     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

// <Router>
      
//         <Switch>
//           <Route exact path="/">
//             <Home />
//             <Foods cart={cart} handleAddItem={cartHandler} setCart={setCart}></Foods>
//           </Route>
//           <Route path="/home">
//             <Home></Home>
//           </Route>

//           <Route path="/dashboard">
//             <Dashboard></Dashboard>
//           </Route>

//           <PrivateRoute path="/cart">
//              <Cart cart={cart}></Cart>
//           </PrivateRoute >

//           <PrivateRoute path="/food/:id">
//                 <DetailsFood></DetailsFood>
//             </PrivateRoute>

//             <Route path="/orderReview">
//             <OrderReview></OrderReview>
//           </Route>

           
          

//           {/* <Route path="*">
//             <NoMatch/>
//           </Route>  */}

//           <Route path="/order">
//             <Order></Order>
//           </Route>
//           <Route path="/login">
//             <Login></Login>
//           </Route>

          


//         </Switch>

//       </Router>


    
      
//       </UserContext.Provider>
  );
}

export default App;
