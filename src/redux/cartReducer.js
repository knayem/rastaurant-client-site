
const initialState = {

    cartItems: []

}
//()

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TO_CART': {

            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]


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