import React from 'react';
import CustomBtn from '../custom-button/custom-button';
import './cart-styles.scss';
import { selectCartItem } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className="empty-message">Your Cart Is Empty</span>
            }
        </div>
        <CustomBtn onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden());
        }}>Go To Checkout</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));