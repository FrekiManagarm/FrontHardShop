import React from 'react';
import { Card } from '../components/Card/Card';
import { Slid } from '../components/Slider';
import { HomePageWrapper } from './HomePage.style';

const HomePage = () => {


    const Alert = () => {
        alert('You have press this button');
    }

    const userIsConnected = () => {
        
    }

    return (
        <HomePageWrapper>
            <Slid />
            <Card 
                title="Some Title of this Card"
                description="Lorem Ipsum"
                photo="https://i.imgur.com/q2MZEWb.jpg"
                actions={Alert}
            />
            
        </HomePageWrapper>
    )
}

export default HomePage
