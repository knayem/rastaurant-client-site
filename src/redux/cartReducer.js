
const initialState = {

    cartItems: []

}
//()

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TO_CART': {



            const alreadyAdded = state.cartItems.find(crt => crt.id === action.payload.id );

            if(alreadyAdded){
                return{
                 ...state,
                       
                          }
              
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
    
    
                }

    
            }


        }

        case 'REMOVE_FROM_CART': {

            return {
                ...state,
                cartItems: state.cartItems.filter(itm=>itm.id !== action.payload.id)


            }


        }

        default: return state

    }


    
}



// const cartItems: state.cartItems.filter(itm=>itm.id === action.payload.id);
// if(!crt){

// }






// export const addToCart = (payload) => {

//     return {

//         type: 'add_to_cart',
//         payload
//  }
// }

// export const removeToCart = (payload) => {

//     return {

//         type: 'remove_from_cart',
//         payload
//     }
// }
// export const clearToCart = () => {

//     return {

//         type: 'clear_to_cart',
//     }
// }


// export const cartReducer = (state = initialState, action) => {

//     switch (action.type) {



//         case 'ADD_TO_CART': {

//             const exixt = state.CartItems.find(itm=> itm.id === action.payload.id);
//             if (exixt) {

//                 return cartItems.map(itm =>itm.id === action.payload.id) ? 

//                 { ...cartItems , qty :cartItems.qty +1 
//                 } : cartItems
//             }

//               else{

//                   return[
//                       ...start,

//                       {
//                           ...action.payload,
//                           qty: 1
//                     }
                
                
//                 ]

//               }

            


//         }

//         case 'REMOVE_FROM_CART': {

//             return {
//                 ...state,
//                 cartItems: state.cartItems.filter(itm=>itm.id !== action.payload.id)


//             }


//         }

//         default: return state

//     }



// }
