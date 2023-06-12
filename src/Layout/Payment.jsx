import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import userStack from '../hooks/Userstack';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {

    const [cart] = userStack()
    const total = cart.reduce((sum,item)=>sum+item.price,0) 
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1>PAYMENT SYSTEM</h1>
            <p>PLEASE PROCEED TO PAYMENT</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}> </CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;