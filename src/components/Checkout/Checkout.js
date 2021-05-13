import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

const Checkout = () => {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <Link to='/'>
                    <img 
                        className='checkout-banner' 
                        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                        alt='' 
                    />
                </Link>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout-title">
                        Your Shopping Cart
                    </h2>
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
        
    );
};

export default Checkout;