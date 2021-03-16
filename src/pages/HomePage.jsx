import React from 'react';
import { Slid } from '../components/Slider';
import { HomePageWrapper } from './HomePage.style';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <p>
                Bienvenue au HardShop
            </p>
            <Slid />
            
        </HomePageWrapper>
    )
}

export default HomePage
