import React from 'react';
import { Cards } from 'react-responsive-cards';
import { Slid } from '../components/Slider';
import { HomePageWrapper } from './HomePage.style';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <p>
                Bienvenue au HardShop
            </p>
            <Slid />
            <Cards
                details={[{
                    title: 'Un composant',
                    description: 'Ceci est une description',
                    image: 'https://i.imgur.com/Q7RfYcr.jpg',
                    renderFooter: <div>Coucou</div>
                }]}
            />
            
        </HomePageWrapper>
    )
}

export default HomePage
