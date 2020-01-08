import React from 'react';
import CustomBtn from '../custom-button/custom-button';
import './cart-styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomBtn>Go To Checkout</CustomBtn>
    </div>
);

export default CartDropdown;