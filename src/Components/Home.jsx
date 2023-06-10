import React from 'react';
import Nabvar from './Nabvar';
import Slider from './Slider';
import Extra from './Extra';
import { Helmet } from 'react-helmet-async';
import MyClass from './MyClass';

const Home = () => {
    return (
        <div className='bg-black'>
            <Helmet>
                <title>MAGIC SCHOOL || HOME</title>
            </Helmet>
            <Nabvar></Nabvar>
            <Slider></Slider>
            <MyClass></MyClass>
            <Extra></Extra>
        </div>
    );
};

export default Home;