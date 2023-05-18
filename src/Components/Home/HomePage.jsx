import React from 'react';
import ToyCategory from './ToyCategory/ToyCategory';
import Banner from './Banner/Banner';
import MarvelSection from './MarvelSection/MarvelSection';

const HomePage = () => {
    return (
        <div>
            
            <Banner></Banner>
            <MarvelSection></MarvelSection>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default HomePage;