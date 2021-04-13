import React from 'react';
import { Card } from '../components/Card/Card';
import { Slid } from '../components/Slider';
import { HomePageWrapper } from './HomePage.style';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const state = useSelector(state => state);
    console.log(state, 'state');

    return (
        <HomePageWrapper>
            <Slid />
            
            <Card>
                <Card.Image src="https://i.imgur.com/q2MZEWb.jpg" alt="Image" />
                <Card.Body>
                    <Card.Title>Un titre de Card</Card.Title>
                    <Card.Text>Une description de Card sssusuuuuuuuuppppppeeerrrrr longue !</Card.Text>
                    <Card.Button>Cliquer</Card.Button>
                </Card.Body>
            </Card>
        </HomePageWrapper>
    )
}

export default HomePage
