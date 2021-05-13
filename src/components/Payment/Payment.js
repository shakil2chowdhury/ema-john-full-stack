import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import './Payment.css'
import { getCartTotal } from "../../store/reducer"
import axios from '../../tools/axios';
import { db } from '../../firebase'
const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();

    //payment process success error
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [customerSecret, setCustomerSecret] = useState(true)

    //stripe payment gateway
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        //charge the customer using stripe secret
        const getCustomerSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            setCustomerSecret(response.data.customerSecret)
        }
        getCustomerSecret();
    }, [cart])

    console.log('Secret is :', customerSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(customerSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment intent means payment confirmed
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })

    }

    const handleChange = e => {
        //get changes from card elements and check errors of customer card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    }

    return (
        <div className='payment'>
            <div className="payment-container">
                <h1>Checkout (<Link to='/checkout'>{cart?.length} Products</Link>)</h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Shipping Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>123 Toronto</p>
                        <p>Ontario, Canada</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review Products</h3>
                    </div>
                    <div className="payment-items">
                        {cart.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                </div>
                {/* Payment gateway section using stripe */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment-price_container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />
                                <button className="pay-button" disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing..</p> : <p>Buy Now</p>}</span>
                                </button>
                            </div>

                            {/* Handle and show errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;