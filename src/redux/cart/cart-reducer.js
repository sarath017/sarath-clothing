import CartActionType from './cart-types';
import { addItemToCart, removeCartItems } from './cart.utils';

const INITIAL_STATE = {
    hidden : false,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionType.ADD_ITEM :
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeCartItems(state.cartItems, action.payload)
            }
        case CartActionType.CLEAR_CART_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }    
        default :
            return state;
    }
}

export default cartReducer;

