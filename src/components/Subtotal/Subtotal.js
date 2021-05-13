import React from 'react';
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../store/StateProvider';
import { getCartTotal } from '../../store/reducer';
import { useHistory } from 'react-router';

const Subtotal = () => {
    const history = useHistory();
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items):
                            <strong> {value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type="checkbox" />
                                This order contains a reward
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;