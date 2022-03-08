
const initialState = {

    cartItems: []

}

export const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TO_CART': {

            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]


            }


        }
        default:

    }



}

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