import React from 'react';
// import { Card } from '../components/Card/Card';
import { Slid } from '../components/Slider';
import { HomePageWrapper } from './HomePage.style';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const state = useSelector(state => state);
    console.log(state, 'state');

    return (
       <HomePageWrapper>
            <Slid />
        </HomePageWrapper>
    )
}

export default HomePage
