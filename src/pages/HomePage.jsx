import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from '../components/Card/Card';
import { Slid } from '../components/Slider';
import { HomePageWrapper } from './HomePage.style';

const HomePage = () => {

    const [data, setData] = useState([])
    useEffect(async () => {
        const result = await axios.get('');
        setData(result.data);
    })

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
