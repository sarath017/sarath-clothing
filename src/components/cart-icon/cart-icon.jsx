import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selector';

import { ReactComponent as ShoppingBag } from '../../Assets/images/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>

);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);