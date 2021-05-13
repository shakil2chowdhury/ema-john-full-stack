import React from 'react';
import { useStateValue } from '../../store/StateProvider';
import './Product.css';

const Product = ({ id, title, price, image, rating }) => {
    const [{ cart }, dispatch] = useStateValue()
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="book" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;