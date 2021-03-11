import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { HomePageWrapper } from './HomePage.style'

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Navbar />
            <a href="/"><h1>HardShop</h1></a>
            <a href="/Configurator">Configurator</a>
        </HomePageWrapper>
    )
}

export default HomePage
