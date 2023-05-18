import React from 'react';
import ToyCategory from './ToyCategory/ToyCategory';
import Banner from './Banner/Banner';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-5xl '>This is home</h1>
            <Banner></Banner>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default HomePage;