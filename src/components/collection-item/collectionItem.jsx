import React from 'react';
import CustomBtn from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
import './collectionItem.scss';

const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl } = item;
    return(
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomBtn inverted onClick={() => addItem(item)}>Add to Cart</CustomBtn>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);