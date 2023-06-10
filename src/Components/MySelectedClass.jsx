import React from 'react';
import userStack from '../hooks/Userstack';
import { Helmet } from 'react-helmet-async';

const MySelectedClass = () => {
    const [cart] = userStack()
    const total = cart.reduce((sum,item)=>item.price +sum ,0)

    console.log(cart)
    return (
        <div>
            <Helmet><title>MAGIC SCHOOL || MY SELECTED CLASS</title></Helmet>
            <div>
                <p>TOTAL SELECTED CLASS :{cart.length}</p>
                <p>TOTAL PRICE:{total}</p>
            </div>
        </div>
    );
};

export default MySelectedClass;