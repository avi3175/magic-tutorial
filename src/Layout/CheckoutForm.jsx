import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const CheckoutForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()

    const {user} = useAuth()

    const [error,setError] = useState('')
    const [clientSecret,setClientSecret] = useState('')

    // const [axiosSecure] = useAxiosSecure()

    useEffect(()=>{
        fetch('https://magic-server.vercel.app/create-payment-intent',{price})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[])


    const handleSubmit = async(event)=>{
            event.preventDefault()

            if(!stripe || !elements){
                return
            }

            const card = elements.getElement(CardElement);

            if (card == null) {
              return;
            }
        

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })


        if(error){
            console.log('error',error)
            setError(error.message)
        }
        else{
            setError('')
            console.log('payment method',paymentMethod)
        }


        const {paymentIntent, error:confirmerror} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:user?.displayNmae || "anonymus",
                  email:user?.email || "anonymus",

                },
              },
            },
          );

            if(confirmerror){
                console.log(confirmerror)
            }
            console.log(paymentIntent)



    }




    return (
        <div>
            <form onSubmit={handleSubmit} className='w-72' >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                   
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error && <p className='text-rose-900'>{error}</p>}
        </div>
    );
};

export default CheckoutForm;