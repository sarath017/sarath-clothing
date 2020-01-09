import React from 'react';
import CustomBtn from '../custom-button/custom-button';
import './cart-styles.scss';

import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomBtn>Go To Checkout</CustomBtn>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);