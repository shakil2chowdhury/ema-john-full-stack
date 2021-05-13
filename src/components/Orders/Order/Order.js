import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct';
import './Order.css'
const Order = ({order}) => {
    console.log(order)
    return (
        <div className="order">
            <h2>Order Date: <small>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</small></h2>
            
            <p className="order-id">
                <h3>Order Id: <small>{order.id}</small></h3>
            </p>
            {order.data.cart?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Total : {value}</h3>
                  </>
                            )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
};

export default Order;