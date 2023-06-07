import React from 'react';
import Nabvar from './Nabvar';
import Slider from './Slider';
import Extra from './Extra';

const Home = () => {
    return (
        <div className='bg-black'>
            <h1>this is home</h1>
            <Nabvar></Nabvar>
            <Slider></Slider>
            <Extra></Extra>
        </div>
    );
};

export default Home;