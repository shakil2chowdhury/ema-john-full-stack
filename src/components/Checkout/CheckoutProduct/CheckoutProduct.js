import React from 'react';
import { useStateValue } from '../../../store/StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className="checkout-product">
            <img className="checkout-product_image" src={image} alt='' />
            <div className="checkout-product_info">
                <p className="checkout-product_title">{title}</p>
                <p className="checkout-product_price"><small>$</small><strong>{price}</strong></p>
                <div className="checkout-product_rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐️</p>))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;