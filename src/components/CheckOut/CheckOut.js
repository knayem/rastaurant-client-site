import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckOut = (props) => {
    const {total} = props.total;

  function tokenHandler(token)
  {
console.log(token)
}


    return (
        <div>


            <StripeCheckout
             Amount={total}
             shippingAddress
             token={tokenHandler}
             stripeKey='pk_test_51IhANmJq1WvR0IZcorySb4Lm8PfDg6oPD86nh2mbVzb16XJvhZiulzC8EM7r5kUqyHl57eL40yDw6bfaxA0gtpZn00L5XIl01V'
           currency='BDT'
            >




               

            <button style={{ marginLeft: '16%'}} className="btn btn-primary">Pay Now</button>

            </StripeCheckout>
            
        </div>
    );
};

export default CheckOut;